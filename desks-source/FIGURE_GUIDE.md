# LIFT explainer-figure guide

Each figure is JSON: {"title", "caption", "steps": [..], "svg"} stored in
desks-source/<week>/figures/<desk>.json, keyed by story index as a string ("0" = lead, "1"-"3" = features).
Reference example: desks-source/2026-W39/figures/health.json key "0".

## Content rules
- Explain the MECHANISM or STUDY DESIGN + main result of the story. Show how it works, not decoration.
- Every number/label must come from the story text in the desk JSON (body/dek/whyItMatters/caveats). Invent nothing.
  If a detail isn't in the text, leave it out or keep it qualitative.
- 2-4 steps. Each step = one short sentence (<= 200 chars) describing what that stage of the drawing shows.
- title: "How ..." / "What ..." style, <= 50 chars. caption: one sentence + "Numbers from <First author> et al., <venue>, 2026." if numbers are shown.
- No copyrighted figure reproduction; draw your own schematic.

## SVG rules
- Root: <svg viewBox="0 0 680 H" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="...">, H between 220 and 320.
- Wrap each stage in <g data-step="1">, <g data-step="2"> ... matching the steps array. Anything untagged is always visible.
- Use ONLY these classes for colour (the site themes them; never hard-code colours, no style attributes, no fill="#..."):
  shapes: box (neutral card), box-a (accent/highlight), box-m (muted/control)
  lines: ln (normal), ln-a (accent, thicker), ln-m (faint), ln-d (dashed)
  fills: f-ink, f-a (accent), f-m (muted), f-p (amber), f-r (green)
  text: default 13px sans; t-b bold; t-s small 11.5px; t-m muted grey; t-a accent colour; t-big large serif number
- Arrowheads: <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f-ink"/></marker></defs> then marker-end="url(#ah)".
- Legibility: keep every text element fully inside the viewBox with >= 8px margin. Estimate width as ~7px/char for 13px text,
  ~6.2px/char for t-s. Nothing may overlap (text on lines, text on text). Min 18px between text baselines.
- Keep it simple: <= ~45 elements. Rounded rects rx="6". Flat, clean, newspaper-infographic style.
- Output must be valid JSON (escape quotes inside the svg string). Validate with python3 json.load.
- Also validate the SVG parses: python3 -c "import json,xml.dom.minidom as m;[m.parseString(v['svg']) for v in json.load(open(P)).values()]"
