# LiFT explainer-figure guide (LiFT house style, v3)

Each figure is JSON: {"title", "caption", "steps": [..], "svg"} stored in
desks-source/<week>/figures/<desk>.json, keyed by story index as a string ("0" = lead, "1"-"3" = features).
REFERENCE EXAMPLE (the approved house style): desks-source/2026-W39/figures/health.json key "0".
Study it closely and match its look. LiFT has its own identity: teal accent, IBM Plex Sans labels, CAPITAL panel letters.

## Style (what makes it look professional)
- Multi-panel layout with CAPITAL panel letters A, B, C (class p-l, rendered teal) at x=0 and a bold one-line panel heading at x=18.
  Panels stack vertically, each ~80-110px tall. One panel = one step (data-step="1", "2", ...).
- DATA FIRST. Wherever the story gives numbers, draw them as a real chart: bars with an axis, dot/forest plots with
  CI whiskers and a dashed null line, proportional bars for splits, timelines on a hairline axis. Label values directly.
  Axes: hairline (class ln), small ticks, tick labels t-s. Scale values truthfully.
- Mechanisms/workflows: draw as a clean left-to-right sequence on a baseline, using simple glyphs (circles, squares,
  short bars, a double line for DNA, a lozenge for a protein) and text labels, NOT rounded boxes with borders.
  Avoid "box-and-arrow flowcharts". At most one or two lightly filled shapes (f-m) as emphasis.
- NO rounded card boxes (box/box-a/box-m classes are deprecated). No drop shadows, no icons clip-art, no emoji.
- Colour: black/grey (f-ink, f-m, ln, ln-m, t-m) for everything; accent teal (f-a, ln-a, t-a) ONLY for the single key
  result or the key element the story is about. Everything else neutral.
- Typography: panel headings t-b (13px bold); labels t-s (11.5px); muted qualifiers via <tspan class="t-m">;
  inline emphasis via <tspan class="t-b"> or <tspan class="t-a">. Left-align text; avoid centred paragraphs.
- Generous whitespace; align elements to a common left edge (x=18) and a consistent right edge (x<=662).

## Content rules
- Every number/label must come from the story text in the desk JSON (body/dek/whyItMatters/caveats). Invent nothing.
  If a detail isn't in the text, leave it out. If a chart is qualitative (no numbers given), say "schematic" in the heading
  or caption and don't imply a quantity.
- 2-4 steps (= panels). Each step text: one sentence (<= 200 chars) describing that panel.
- title: <= 50 chars. caption: "A · ... B · ... C · ... Data: <First author> et al., <venue>, 2026."

## SVG rules
- Root: <svg viewBox="0 0 680 H" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="...">, H 220-340.
- Only these classes, never hard-coded colours or style attributes:
  p-l (panel letter), t-b, t-s, t-m, t-a, t-big; ln, ln-a, ln-m, ln-d; f-ink, f-a, f-m, f-p, f-r.
- Arrowheads only if essential: <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
  orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f-ink"/></marker></defs>.
- Legibility: all text inside the viewBox with >= 6px margin; widths ~7px/char (13px), ~6.2px/char (t-s).
  No overlaps (text/text, text/lines). >= 18px between baselines.
- <= ~60 elements. Valid JSON (escape quotes). Validate:
  python3 -c "import json,xml.dom.minidom as m;[m.parseString(v['svg']) for v in json.load(open(P)).values()]"
