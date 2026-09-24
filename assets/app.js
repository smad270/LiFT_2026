/* LIterature For Today (LiFT) — static, file:// friendly renderer.
 *
 * Routes (hash based so the site works when opened straight from disk):
 *   #/                         front page of the latest edition
 *   #/<edition>                front page of a given edition
 *   #/<edition>/<desk>         desk (section) page
 *   #/<edition>/<desk>/<n>     story page (n = index in that desk's stories)
 *   #/archive                  list of all editions
 *
 * Edition content lives in editions/<id>.js and registers itself on
 * window.HELIX_EDITIONS. The list of editions lives in editions/manifest.js.
 */
(function () {
  "use strict";

  var M = window.HELIX_MANIFEST;
  var DESKS = M.desks;
  var loaded = (window.HELIX_EDITIONS = window.HELIX_EDITIONS || {});
  var app = document.getElementById("app");

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function deskMeta(id) {
    for (var i = 0; i < DESKS.length; i++) if (DESKS[i].id === id) return DESKS[i];
    return null;
  }
  function editionMeta(id) {
    for (var i = 0; i < M.editions.length; i++) if (M.editions[i].id === id) return M.editions[i];
    return null;
  }
  function latestId() { return M.editions[0].id; }
  function fmtDate(iso, opts) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", opts || { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function roman(n) {
    var r = "", map = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    map.forEach(function (p) { while (n >= p[0]) { r += p[1]; n -= p[0]; } });
    return r;
  }
  function badge(src) {
    if (!src) return "";
    return src.peerReviewed
      ? '<span class="badge reviewed">Peer-reviewed</span>'
      : '<span class="badge preprint">' + (/clinicaltrials/i.test(src.venue || "") ? "Trial record" : "Preprint") + "</span>";
  }
  function kindLabel(k) { return { lead: "Lead story", feature: "Feature", brief: "In brief" }[k] || ""; }

  // Per-viewer "read" marks — a convenience only, safe to lose.
  function readKey(ed, desk, n) { return "helix:read:" + ed + ":" + desk + ":" + n; }
  function isRead(ed, desk, n) { try { return localStorage.getItem(readKey(ed, desk, n)) === "1"; } catch (e) { return false; } }
  function markRead(ed, desk, n) { try { localStorage.setItem(readKey(ed, desk, n), "1"); } catch (e) {} }
  function dot(ed, desk, n) { return isRead(ed, desk, n) ? ' <span class="read-dot" title="Read"></span>' : ""; }

  function storyHref(ed, desk, n) { return "#/" + ed + "/" + desk + "/" + n; }

  // Explainer figures. fig = {title, svg, caption, steps: [text, ...]}.
  // SVG groups tagged data-step="n" build up as the reader steps through;
  // untagged parts are always shown. The SVG is our own trusted markup.
  function figureHTML(fig, interactive) {
    if (!fig || !fig.svg) return "";
    var steps = fig.steps || [];
    var h = '<figure class="fig' + (interactive ? " fig-live" : "") + '" data-cur="0">';
    if (fig.title) h += '<div class="fig-title">' + esc(fig.title) + "</div>";
    h += '<div class="fig-art">' + fig.svg + "</div>";
    if (interactive && steps.length) {
      h += '<div class="fig-controls" role="group" aria-label="Step through the diagram">';
      h += '<button type="button" class="fig-step on" data-k="0">All</button>';
      steps.forEach(function (_, i) { h += '<button type="button" class="fig-step" data-k="' + (i + 1) + '">' + (i + 1) + "</button>"; });
      h += '<button type="button" class="fig-next" aria-label="Next step">Next →</button></div>';
      h += '<figcaption class="fig-cap" aria-live="polite">' + esc(fig.caption) + "</figcaption>";
    } else {
      h += '<figcaption class="fig-cap">' + esc(fig.caption) + "</figcaption>";
    }
    return h + "</figure>";
  }

  function setStep(figEl, k, fig) {
    var n = (fig.steps || []).length;
    k = ((k % (n + 1)) + n + 1) % (n + 1);
    figEl.setAttribute("data-cur", k);
    figEl.querySelectorAll("[data-step]").forEach(function (g) {
      var st = parseInt(g.getAttribute("data-step"), 10);
      g.classList.toggle("dim", k !== 0 && st > k);
      g.classList.toggle("cur", k !== 0 && st === k);
    });
    figEl.querySelectorAll(".fig-step").forEach(function (b) {
      b.classList.toggle("on", parseInt(b.getAttribute("data-k"), 10) === k);
    });
    figEl.querySelector(".fig-cap").textContent = k === 0
      ? fig.caption
      : "Step " + k + " of " + n + " — " + fig.steps[k - 1];
  }
  var currentFig = null;

  // ---------- edition loading ----------
  function loadEdition(id, cb) {
    if (loaded[id]) return cb(loaded[id]);
    var s = document.createElement("script");
    s.src = "editions/" + id + ".js";
    s.onload = function () { cb(loaded[id] || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  // ---------- chrome ----------
  function renderChrome(ed, activeDesk) {
    var meta = editionMeta(ed.id);
    document.getElementById("dateline").innerHTML =
      "<span>Vol. " + roman(meta.volume || 1) + " · No. " + meta.number + "</span>" +
      "<span>" + esc(fmtDate(meta.date)) + "</span>" +
      "<span>Covering " + esc(meta.coverage) + "</span>";
    var nav = '<a href="#/' + ed.id + '"' + (activeDesk === "front" ? ' class="active"' : "") + ">Front Page</a>";
    DESKS.forEach(function (d) {
      if (!ed.desks[d.id]) return;
      nav += '<a href="#/' + ed.id + "/" + d.id + '"' + (activeDesk === d.id ? ' class="active"' : "") + ">" + esc(d.name) + "</a>";
    });
    if (window.LIFT_EVENTS) nav += '<a href="#/events"' + (activeDesk === "events" ? ' class="active"' : "") + ">Events</a>";
    nav += '<a href="#/archive"' + (activeDesk === "archive" ? ' class="active"' : "") + ">Archive</a>";
    document.getElementById("desknav").innerHTML = nav;
    var isLatest = ed.id === latestId();
    document.getElementById("edition-flag").innerHTML = isLatest
      ? "Current edition"
      : 'Archived edition · <a href="#/">Go to latest</a>';
  }

  // ---------- views ----------
  function viewFront(ed) {
    renderChrome(ed, "front");
    var topDesk = ed.frontPage && ed.frontPage.top ? ed.frontPage.top : DESKS[0].id;
    var top = ed.desks[topDesk].stories[0];
    var html = '<div class="front-grid"><article class="lead">';
    html += '<div class="kicker">' + esc(deskMeta(topDesk).name) + " · Top story " + badge(top.source) + "</div>";
    html += '<h2 class="hl hl-xl"><a href="' + storyHref(ed.id, topDesk, 0) + '">' + esc(top.headline) + "</a></h2>";
    html += '<p class="dek">' + esc(top.dek) + "</p>";
    html += figureHTML(top.figure, false);
    top.body.slice(0, 2).forEach(function (p, i) { html += "<p" + (i === 0 ? ' class="first"' : "") + ">" + esc(p) + "</p>"; });
    html += '<a class="more" href="' + storyHref(ed.id, topDesk, 0) + '">Continue reading →</a>';
    if (ed.editorNote) html += '<div class="editor-note"><strong>From the editor</strong>' + esc(ed.editorNote) + "</div>";
    html += '</article><div class="side-stack">';
    DESKS.forEach(function (d) {
      if (d.id === topDesk || !ed.desks[d.id]) return;
      var s = ed.desks[d.id].stories[0];
      html += '<article><div class="kicker">' + esc(d.name) + " " + badge(s.source) + "</div>";
      html += '<h3 class="hl hl-m"><a href="' + storyHref(ed.id, d.id, 0) + '">' + esc(s.headline) + "</a>" + dot(ed.id, d.id, 0) + "</h3>";
      html += '<p class="dek dek-s">' + esc(s.dek) + "</p></article>";
    });
    html += comingUpBox();
    html += "</div></div>";

    html += '<div class="desk-columns">';
    DESKS.forEach(function (d) {
      var desk = ed.desks[d.id];
      if (!desk) return;
      html += '<section><h3><a href="#/' + ed.id + "/" + d.id + '">' + esc(d.name) + " →</a></h3><ul>";
      desk.stories.forEach(function (s, n) {
        if (s.kind === "lead") return;
        html += '<li><span class="kind">' + kindLabel(s.kind) + (s.source && !s.source.peerReviewed ? " · Preprint" : "") + "</span>" +
          '<a href="' + storyHref(ed.id, d.id, n) + '">' + esc(s.headline) + "</a>" + dot(ed.id, d.id, n) + "</li>";
      });
      html += "</ul></section>";
    });
    html += "</div>";
    app.innerHTML = html;
  }

  function viewDesk(ed, deskId) {
    var desk = ed.desks[deskId], d = deskMeta(deskId);
    if (!desk || !d) return viewMissing();
    renderChrome(ed, deskId);
    var st = desk.stories;
    var lead = st[0];
    var html = '<div class="desk-title"><h2>' + esc(d.name) + " Desk</h2><p>" + esc(d.tagline) + "</p></div>";
    html += '<div class="desk-grid"><div>';
    html += '<article class="lead"><div class="kicker">Lead story ' + badge(lead.source) + "</div>";
    html += '<h2 class="hl hl-l"><a href="' + storyHref(ed.id, deskId, 0) + '">' + esc(lead.headline) + "</a>" + dot(ed.id, deskId, 0) + "</h2>";
    html += '<p class="dek">' + esc(lead.dek) + "</p>";
    html += figureHTML(lead.figure, false);
    html += '<p class="first">' + esc(lead.body[0]) + "</p>";
    html += '<a class="more" href="' + storyHref(ed.id, deskId, 0) + '">Continue reading →</a></article>';

    html += '<div class="section-head"><span>Features</span></div><div class="features">';
    st.forEach(function (s, n) {
      if (s.kind !== "feature") return;
      html += '<article><div class="kicker">' + badge(s.source) + "</div>";
      html += '<h3 class="hl hl-s"><a href="' + storyHref(ed.id, deskId, n) + '">' + esc(s.headline) + "</a>" + dot(ed.id, deskId, n) + "</h3>";
      html += '<p class="dek dek-s">' + esc(s.dek) + "</p></article>";
    });
    html += "</div>";

    html += '<div class="section-head"><span>In Brief</span></div><ul class="briefs">';
    st.forEach(function (s, n) {
      if (s.kind !== "brief") return;
      html += '<li><div class="kicker">' + badge(s.source) + "</div>";
      html += '<a class="hl hl-s" href="' + storyHref(ed.id, deskId, n) + '">' + esc(s.headline) + "</a>" + dot(ed.id, deskId, n);
      html += "<p>" + esc(s.body[0]) + "</p></li>";
    });
    html += "</ul></div>";

    html += '<aside class="wire"><h3>On the Wire</h3><p class="sub">Every source behind this desk, this week.</p><ol>';
    st.forEach(function (s) {
      var src = s.source || {};
      html += '<li><a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + esc(src.title) + "</a>" +
        '<span class="v">' + esc(src.venue) + " · " + esc(src.date) + " · " + (src.peerReviewed ? "peer-reviewed" : "not peer-reviewed") + "</span></li>";
    });
    html += "</ol></aside></div>";
    app.innerHTML = html;
  }

  function viewStory(ed, deskId, n) {
    var desk = ed.desks[deskId], d = deskMeta(deskId);
    var s = desk && desk.stories[n];
    if (!s) return viewMissing();
    renderChrome(ed, deskId);
    markRead(ed.id, deskId, n);
    var src = s.source || {};
    var html = '<article class="story">';
    html += '<div class="kicker"><a href="#/' + ed.id + "/" + deskId + '">' + esc(d.name) + "</a> · " + kindLabel(s.kind) + " " + badge(src) + "</div>";
    html += '<h1 class="hl hl-xl">' + esc(s.headline) + "</h1>";
    html += '<p class="dek">' + esc(s.dek) + "</p>";
    html += figureHTML(s.figure, true);
    currentFig = s.figure || null;
    html += '<div class="byline"><span>By the ' + esc(d.name) + " Desk</span><span>·</span><span>Edition No. " + editionMeta(ed.id).number + "</span><span>·</span><span>Paper dated " + esc(src.date) + "</span></div>";
    html += '<div class="body">';
    s.body.forEach(function (p) { html += "<p>" + esc(p) + "</p>"; });
    html += "</div>";
    if (s.whyItMatters || s.caveats) {
      html += '<div class="boxes">';
      if (s.whyItMatters) html += '<div class="box"><h4>Why it matters</h4><p>' + esc(s.whyItMatters) + "</p></div>";
      if (s.caveats) html += '<div class="box caveat"><h4>Caveats</h4><p>' + esc(s.caveats) + "</p></div>";
      html += "</div>";
    }
    html += '<div class="citation"><h4>Source</h4>';
    html += '<div class="t">' + esc(src.title) + "</div>";
    html += "<div>" + esc(src.authors) + " — <em>" + esc(src.venue) + "</em>, " + esc(src.date) + " " + badge(src) + "</div>";
    var ids = [];
    if (src.doi) ids.push("DOI " + esc(src.doi));
    if (src.pmid) ids.push("PMID " + esc(src.pmid));
    if (ids.length) html += '<div class="meta" style="margin-top:4px">' + ids.join(" · ") + "</div>";
    if (src.url) html += '<div style="margin-top:8px"><a class="src" href="' + esc(src.url) + '" target="_blank" rel="noopener">Read the paper ↗</a></div>';
    html += "</div>";
    if (s.tags && s.tags.length) html += '<div class="tags">' + s.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>";

    var prev = desk.stories[n - 1], next = desk.stories[n + 1];
    html += '<div class="pager">';
    if (prev) html += '<a href="' + storyHref(ed.id, deskId, n - 1) + '"><span class="lbl">← Previous</span>' + esc(prev.headline) + "</a>";
    if (next) html += '<a class="next" href="' + storyHref(ed.id, deskId, n + 1) + '"><span class="lbl">Next →</span>' + esc(next.headline) + "</a>";
    html += "</div></article>";
    app.innerHTML = html;
  }

  function viewArchive() {
    loadEdition(latestId(), function (ed) {
      if (ed) renderChrome(ed, "archive");
      var html = '<div class="desk-title"><h2>Archive</h2><p>Every edition, newest first.</p></div><ul class="archive-list">';
      M.editions.forEach(function (e) {
        html += '<li><a href="#/' + e.id + '"><span class="no">Edition No. ' + e.number + "</span></a>" +
          '<span class="meta">' + esc(fmtDate(e.date, { year: "numeric", month: "long", day: "numeric" })) + " · covering " + esc(e.coverage) + "</span></li>";
      });
      html += "</ul>";
      app.innerHTML = html;
    });
  }

  // ---------- events ----------
  var EV_TYPES = ["Conference", "Symposium", "Workshop", "Course", "Seminar", "Webinar"];
  var evState = { q: "", type: "All", topic: "All", format: "All" };
  function todayISO() { var d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); }
  function daysUntil(iso) { return Math.round((new Date(iso + "T12:00:00") - new Date(todayISO() + "T12:00:00")) / 864e5); }
  function upcomingEvents() {
    var t = todayISO();
    return ((window.LIFT_EVENTS || {}).events || []).filter(function (e) { return (e.end || e.start) >= t; })
      .sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });
  }
  function fmtRange(e) {
    var o = { month: "short", day: "numeric" };
    var a = fmtDate(e.start, o), b = fmtDate(e.end || e.start, o);
    var y = e.start.slice(0, 4);
    return (a === b ? a : e.start.slice(0, 7) === (e.end || "").slice(0, 7) ? a + "–" + b.replace(/^\D+ /, "") : a + " – " + b) + ", " + y;
  }
  function place(e) {
    if (e.format === "Virtual") return "Online";
    return [e.venue, [e.city, e.state].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
  }
  function icsFor(e) {
    var d = function (iso) { return iso.replace(/-/g, ""); };
    var end = new Date((e.end || e.start) + "T12:00:00"); end.setDate(end.getDate() + 1);
    var endISO = end.toISOString().slice(0, 10);
    var clean = function (x) { return String(x || "").replace(/[\\;,]/g, function (c) { return "\\" + c; }).replace(/\n/g, " "); };
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//LiFT//Events//EN", "BEGIN:VEVENT",
      "UID:" + d(e.start) + "-" + clean(e.title).replace(/\W+/g, "").slice(0, 40) + "@lift",
      "DTSTAMP:" + d(todayISO()) + "T000000Z",
      "DTSTART;VALUE=DATE:" + d(e.start), "DTEND;VALUE=DATE:" + d(endISO),
      "SUMMARY:" + clean(e.title), "LOCATION:" + clean(place(e)),
      "DESCRIPTION:" + clean((e.time ? e.time + " — " : "") + (e.why || "") + " " + e.url),
      "URL:" + e.url, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  }
  function eventCard(e, i) {
    var dl = (e.deadlines || []).map(function (x) {
      var n = daysUntil(x.date), cls = n < 0 ? "closed" : n <= 30 ? "soon" : "";
      var when = n < 0 ? "closed" : n === 0 ? "today" : "in " + n + " day" + (n === 1 ? "" : "s");
      return '<span class="dl ' + cls + '">' + esc(x.label) + ": " + esc(fmtDate(x.date, { month: "short", day: "numeric" })) + " · " + when + "</span>";
    }).join("");
    var mon = fmtDate(e.start, { month: "short" }).toUpperCase(), day = e.start.slice(8, 10).replace(/^0/, "");
    return '<li class="ev"><div class="ev-date"><span class="m">' + mon + '</span><span class="d">' + day + "</span></div>" +
      '<div class="ev-body"><div class="kicker">' + esc(e.type) + ' <span class="badge fmt">' + esc(e.format) + "</span></div>" +
      '<h3 class="hl hl-s"><a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(e.title) + "</a></h3>" +
      '<div class="meta">' + esc(fmtRange(e)) + (e.time ? " · " + esc(e.time) : "") + " · " + esc(place(e)) + (e.organizer ? " · " + esc(e.organizer) : "") + "</div>" +
      (e.why ? '<p class="ev-why">' + esc(e.why) + "</p>" : "") +
      (dl ? '<div class="dls">' + dl + "</div>" : "") +
      '<div class="ev-actions"><button type="button" class="ics" data-i="' + i + '">Add to calendar</button>' +
      '<a class="src" href="' + esc(e.url) + '" target="_blank" rel="noopener">Official page ↗</a>' +
      (e.topics || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></div></li>";
  }
  function renderEventList() {
    var all = upcomingEvents(), q = evState.q.toLowerCase();
    var list = all.filter(function (e) {
      if (evState.type !== "All" && e.type !== evState.type) return false;
      if (evState.topic !== "All" && (e.topics || []).indexOf(evState.topic) < 0) return false;
      if (evState.format !== "All" && e.format !== evState.format) return false;
      if (q && [e.title, e.city, e.state, e.organizer, e.why, (e.topics || []).join(" ")].join(" ").toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var html = "", month = "";
    list.forEach(function (e) {
      var m = fmtDate(e.start, { month: "long", year: "numeric" });
      if (m !== month) { if (month) html += "</ul>"; html += '<div class="section-head"><span>' + esc(m) + '</span></div><ul class="ev-list">'; month = m; }
      html += eventCard(e, all.indexOf(e));
    });
    if (month) html += "</ul>";
    document.getElementById("ev-count").textContent = list.length + " of " + all.length + " upcoming events";
    document.getElementById("ev-results").innerHTML = html || '<p class="empty">No events match these filters.</p>';
  }
  function viewEvents() {
    loadEdition(latestId(), function (ed) {
      if (ed) renderChrome(ed, "events");
      var data = window.LIFT_EVENTS;
      if (!data) return viewMissing();
      var all = upcomingEvents();
      var topics = [];
      all.forEach(function (e) { (e.topics || []).forEach(function (t) { if (topics.indexOf(t) < 0) topics.push(t); }); });
      topics.sort();
      var types = EV_TYPES.filter(function (t) { return all.some(function (e) { return e.type === t; }); });
      var chips = function (name, vals) {
        return '<div class="chips" data-f="' + name + '">' + ["All"].concat(vals).map(function (v) {
          return '<button type="button" class="chip' + (evState[name] === v ? " on" : "") + '" data-v="' + esc(v) + '">' + esc(v) + "</button>";
        }).join("") + "</div>";
      };
      var soon = [];
      all.forEach(function (e) { (e.deadlines || []).forEach(function (x) { var n = daysUntil(x.date); if (n >= 0 && n <= 45) soon.push({ e: e, x: x, n: n }); }); });
      soon.sort(function (a, b) { return a.n - b.n; });
      var html = '<div class="desk-title"><h2>Events</h2><p>Talks, seminars, workshops and conferences in the US, next six months. Updated ' +
        esc(fmtDate(data.updated, { month: "long", day: "numeric", year: "numeric" })) + ".</p></div>";
      html += '<div class="desk-grid"><div>';
      html += '<div class="ev-filters"><input id="ev-q" type="search" placeholder="Search events, cities, topics…" value="' + esc(evState.q) + '" aria-label="Search events">' +
        '<div class="fl"><span class="lbl">Type</span>' + chips("type", types) + "</div>" +
        '<div class="fl"><span class="lbl">Topic</span>' + chips("topic", topics) + "</div>" +
        '<div class="fl"><span class="lbl">Format</span>' + chips("format", ["In person", "Hybrid", "Virtual"]) + "</div>" +
        '<div class="meta" id="ev-count"></div></div>';
      html += '<div id="ev-results"></div></div>';
      html += '<aside class="wire"><h3>Deadlines ahead</h3><p class="sub">Abstract and registration dates in the next 45 days.</p>';
      html += soon.length ? "<ol>" + soon.map(function (s) {
        return '<li><a href="' + esc(s.e.url) + '" target="_blank" rel="noopener">' + esc(s.e.title) + '</a><span class="v">' + esc(s.x.label) + " · " +
          esc(fmtDate(s.x.date, { month: "short", day: "numeric" })) + " · " + (s.n === 0 ? "today" : "in " + s.n + " day" + (s.n === 1 ? "" : "s")) + "</span></li>";
      }).join("") + "</ol>" : '<p class="sub">None in the next 45 days.</p>';
      html += '<p class="sub" style="margin-top:14px">Dates can change. Always confirm on the official page before registering or submitting.</p></aside></div>';
      app.innerHTML = html;
      renderEventList();
      document.getElementById("ev-q").addEventListener("input", function (ev) { evState.q = ev.target.value; renderEventList(); });
    });
  }
  app.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (chip) {
      var box = chip.parentNode;
      evState[box.getAttribute("data-f")] = chip.getAttribute("data-v");
      box.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === chip); });
      return renderEventList();
    }
    var b = e.target.closest(".ics");
    if (b) {
      var ev = upcomingEvents()[parseInt(b.getAttribute("data-i"), 10)];
      var url = URL.createObjectURL(new Blob([icsFor(ev)], { type: "text/calendar" }));
      var a = document.createElement("a");
      a.href = url; a.download = ev.title.replace(/[^\w]+/g, "-").slice(0, 60) + ".ics";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }
  });

  function comingUpBox() {
    var up = upcomingEvents().slice(0, 4);
    if (!up.length) return "";
    return '<article class="coming-up"><div class="kicker">Coming up</div><ul>' + up.map(function (e) {
      return '<li><span class="meta">' + esc(fmtRange(e)) + " · " + esc(e.format === "Virtual" ? "Online" : [e.city, e.state].filter(Boolean).join(", ")) + '</span><a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(e.title) + "</a></li>";
    }).join("") + '</ul><a class="more" href="#/events">All events →</a></article>';
  }

  function viewMissing() {
    app.innerHTML = '<p class="empty">That page isn’t in this edition. <a href="#/">Return to the front page.</a></p>';
  }

  // ---------- router ----------
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === "archive") return viewArchive();
    if (parts[0] === "events") return viewEvents();
    var edId = parts[0] && editionMeta(parts[0]) ? parts[0] : latestId();
    var rest = parts[0] && editionMeta(parts[0]) ? parts.slice(1) : parts;
    loadEdition(edId, function (ed) {
      if (!ed) return viewMissing();
      if (!rest.length) return viewFront(ed);
      if (rest.length === 1) return viewDesk(ed, rest[0]);
      return viewStory(ed, rest[0], parseInt(rest[1], 10));
    });
  }

  // ---------- theme toggle ----------
  var themeBtn = document.getElementById("theme");
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  try { applyTheme(localStorage.getItem("helix:theme")); } catch (e) {}
  themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var dark = cur === "dark";
    var next = dark ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("helix:theme", next); } catch (e) {}
  });

  app.addEventListener("click", function (e) {
    var b = e.target.closest(".fig-step, .fig-next");
    if (!b || !currentFig) return;
    var figEl = b.closest(".fig");
    var k = b.classList.contains("fig-next")
      ? parseInt(figEl.getAttribute("data-cur"), 10) + 1
      : parseInt(b.getAttribute("data-k"), 10);
    setStep(figEl, k, currentFig);
  });

  window.addEventListener("hashchange", route);
  route();
})();
