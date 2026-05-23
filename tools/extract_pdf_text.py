#!/usr/bin/env python3
"""Extract readable text from a PDF with page markers.

Usage:
  python tools/extract_pdf_text.py input.pdf output.txt
"""

from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader


def normalize_text(text: str) -> str:
    lines = []
    for raw_line in text.splitlines():
        line = " ".join(raw_line.split())
        if line:
            lines.append(line)
    return "\n".join(lines)


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: extract_pdf_text.py input.pdf output.txt", file=sys.stderr)
        return 2

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])

    if not input_path.exists():
        print(f"Input file not found: {input_path}", file=sys.stderr)
        return 1

    output_path.parent.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(input_path))

    chunks = []
    for index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        text = normalize_text(text)
        chunks.append(f"<!-- page: {index} -->\n{text}".rstrip())

    output_path.write_text("\n\n".join(chunks).rstrip() + "\n", encoding="utf-8")
    print(f"pages={len(reader.pages)} output={output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
