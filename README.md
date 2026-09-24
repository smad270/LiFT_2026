# LIterature For Today (LiFT)

A personal weekly newspaper of new research in genomics, proteomics, technology and health.

## Reading it

Open `index.html` in any browser (double-click works; no server needed).
Or serve the folder: `python3 -m http.server 8765` → http://localhost:8765

- **Front Page**: the week's top story, each desk's lead, and every headline by desk
- **Desks**: Genomics, Proteomics, Technology, Health. Each has a Lead story, Features, In Brief, and "On the Wire" (every source for that desk)
- **Archive**: all past editions
- Stories you've opened show a small grey dot; the Light / Dark button remembers your choice.

## Layout

```
index.html              page shell (masthead, nav, footer)
assets/style.css        newspaper styles, light + dark
assets/app.js           renders editions; hash routes like #/2026-W39/genomics/0
editions/manifest.js    list of editions + desk names (generated)
editions/2026-W39.js    one file per weekly edition (generated)
tools/build_edition.py  turns desk JSON files into an edition
desks-source/<week>/    the raw desk JSON each edition was built from
```

## Publishing a new weekly edition

1. Research each desk into `<desk>.json` (`genomics`, `proteomics`, `technology`, `health`)
   in one folder. Shape: `{"desk": "...", "stories": [ {kind, headline, dek, body[], whyItMatters, caveats, tags[], source{title, authors, venue, date, doi, pmid, url, peerReviewed}} ]}`,
   with 1 `lead`, 3 `feature`, 5 `brief`.
2. Build:
   ```
   python3 tools/build_edition.py --desks path/to/desks --date 2026-10-01 \
     --coverage "Sep 24 – Oct 1, 2026" --top health --note "Editor's note."
   ```
   Add `--figures path/to/figures` to include explainer diagrams
   (see `desks-source/FIGURE_GUIDE.md`; each has step-through buttons on its story page).
   The edition id is the ISO week (`2026-W40`). Earlier editions stay in the archive.
   Rebuilding the same week replaces that edition.

## Caveats

Summaries are written fresh from abstracts/metadata and may contain errors. Always check the linked paper.
Preprints are labelled and have not been peer-reviewed.
