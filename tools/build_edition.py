#!/usr/bin/env python3
"""Assemble desk JSON files into a new edition of LIterature For Today (LiFT).

Usage:
  python3 tools/build_edition.py --desks DIR --date 2026-09-24 \
      --coverage "Sep 10 – Sep 24, 2026" --top genomics --note "Editor's note..."

Optional --figures FIG_DIR holds <desk>.json files mapping story index ->
{title, caption, steps[], svg} explainer diagrams.

DIR must contain <desk>.json files (genomics, proteomics, technology, health),
each shaped {"desk": ..., "stories": [...]} with the lead story first.
Writes editions/<YYYY-Www>.js and prepends the edition to editions/manifest.js.
"""
import argparse
import datetime as dt
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
EDITIONS = ROOT / "editions"
MANIFEST = EDITIONS / "manifest.js"

DESKS = [
    {"id": "genomics", "name": "Genomics", "tagline": "Genes, genomes and the regulation of both."},
    {"id": "proteomics", "name": "Proteomics", "tagline": "Proteins: their shapes, partners and modifications."},
    {"id": "technology", "name": "Technology", "tagline": "New tools, methods and machines for biology."},
    {"id": "health", "name": "Health", "tagline": "Clinical and translational research, from trial to bedside."},
]
ORDER = {"lead": 0, "feature": 1, "brief": 2}
REQUIRED = ("kind", "headline", "dek", "body", "source")


def load_manifest():
    if not MANIFEST.exists():
        return {"desks": DESKS, "editions": []}
    text = MANIFEST.read_text()
    return json.loads(re.search(r"=\s*(\{.*\})\s*;?\s*$", text, re.S).group(1))


def validate(desk_id, stories):
    problems = []
    for i, s in enumerate(stories):
        for k in REQUIRED:
            if not s.get(k):
                problems.append(f"{desk_id}[{i}] missing {k}")
        src = s.get("source") or {}
        if not src.get("url"):
            problems.append(f"{desk_id}[{i}] source has no url")
    if not stories or stories[0].get("kind") != "lead":
        problems.append(f"{desk_id}: first story must be the lead")
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--desks", required=True)
    ap.add_argument("--date", required=True, help="publication date, YYYY-MM-DD")
    ap.add_argument("--coverage", required=True)
    ap.add_argument("--top", default="genomics", help="desk whose lead is the front-page top story")
    ap.add_argument("--note", default="")
    ap.add_argument("--figures", help="folder of <desk>.json explainer figures keyed by story index")
    args = ap.parse_args()

    date = dt.date.fromisoformat(args.date)
    iso = date.isocalendar()
    ed_id = f"{iso[0]}-W{iso[1]:02d}"

    desks, problems = {}, []
    for d in DESKS:
        f = pathlib.Path(args.desks) / f"{d['id']}.json"
        if not f.exists():
            print(f"warning: no {f.name}, skipping desk", file=sys.stderr)
            continue
        stories = json.loads(f.read_text())["stories"]
        stories.sort(key=lambda s: ORDER.get(s.get("kind"), 9))
        problems += validate(d["id"], stories)
        ff = pathlib.Path(args.figures) / f"{d['id']}.json" if args.figures else None
        if ff and ff.exists():
            for k, fig in json.loads(ff.read_text()).items():
                i = int(k)
                if i >= len(stories) or not fig.get("svg", "").startswith("<svg"):
                    problems.append(f"{d['id']} figure {k}: bad index or svg")
                    continue
                stories[i]["figure"] = fig
        desks[d["id"]] = {"stories": stories}
    if problems:
        sys.exit("refusing to build:\n  " + "\n  ".join(problems))
    if args.top not in desks:
        sys.exit(f"top desk {args.top!r} has no stories")

    manifest = load_manifest()
    manifest["desks"] = DESKS
    others = [e for e in manifest["editions"] if e["id"] != ed_id]
    number = next((e["number"] for e in manifest["editions"] if e["id"] == ed_id), len(others) + 1)
    entry = {"id": ed_id, "number": number, "volume": 1 + (number - 1) // 52,
             "date": args.date, "coverage": args.coverage}
    manifest["editions"] = sorted([entry] + others, key=lambda e: e["date"], reverse=True)

    edition = {"id": ed_id, "editorNote": args.note, "frontPage": {"top": args.top}, "desks": desks}
    EDITIONS.mkdir(exist_ok=True)
    (EDITIONS / f"{ed_id}.js").write_text(
        "window.HELIX_EDITIONS = window.HELIX_EDITIONS || {};\n"
        f"window.HELIX_EDITIONS[{json.dumps(ed_id)}] = "
        + json.dumps(edition, ensure_ascii=False, indent=1) + ";\n")
    MANIFEST.write_text("window.HELIX_MANIFEST = " + json.dumps(manifest, ensure_ascii=False, indent=1) + ";\n")
    n = sum(len(d["stories"]) for d in desks.values())
    print(f"built {ed_id} (Edition No. {number}): {len(desks)} desks, {n} stories")


if __name__ == "__main__":
    main()
