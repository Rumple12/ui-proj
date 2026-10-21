"""Build the individual Session 4 alternative assignment for Obid.

Run: python build_assignment.py
Requires: reportlab, Pillow, pypdf.
The assets directory contains unchanged copies of the original group sketches.
Only paper margins are cropped in memory; images are never stretched or redrawn.
"""

from __future__ import annotations

from hashlib import sha256
from io import BytesIO
import json
from pathlib import Path
import shutil
from xml.sax.saxutils import escape

from PIL import Image as PILImage
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
PDF = ROOT / "Obid_Alrhman_Aljabi_Session4_Alternative.pdf"
WIDTH, HEIGHT = A4
MARGIN = 44
CONTENT_WIDTH = WIDTH - 2 * MARGIN
INK = colors.HexColor("#20272B")
MUTED = colors.HexColor("#505A60")
RULE = colors.HexColor("#CDD3D6")

TITLE = "Session 4 - Alternative Assignment"
SUBTITLE = "Omnisound: Low-Fidelity Prototype"
ABOUT = (
    "Omnisound is a web-based audio interface that brings music, podcasts and "
    "audiobooks together in one place. The idea is to make it easier for people "
    "to find audio, save something they like and continue listening to something "
    "they have not finished. The interface is mainly aimed at students who "
    "regularly use audio applications."
)
FUNCTIONS_INTRO = "The main functions I want to include are:"
FUNCTIONS = [
    (
        "Home page",
        "A starting page with different audio categories and a section for unfinished listening.",
    ),
    (
        "Search",
        "A way to find music, podcasts and audiobooks without browsing through every category.",
    ),
    (
        "Music, Podcasts and Audiobooks",
        "Separate sections that make it clear what type of audio the user is browsing.",
    ),
    (
        "Save and Library",
        "Users should be able to save an item and find it again in their Library.",
    ),
    (
        "Continue Listening",
        "A section where users can return to unfinished podcasts or audiobooks.",
    ),
    (
        "Audio player",
        "Basic playback controls such as Play, Pause, a progress bar and volume.",
    ),
]
FUNCTIONS_END = (
    "These functions are the main focus because they let users complete common "
    "listening activities without making the interface unnecessarily complicated."
)
DESIGN = [
    "For this early prototype, I chose a horizontal design. This means showing "
    "several important parts of the application without adding every small detail "
    "or making all functions work.",
    "I think this approach suits Omnisound because the first thing I want to "
    "explore is how the interface is organised. Users need to understand where "
    "to find music, podcasts, audiobooks, Search and Library.",
    "A vertical design would focus on fewer functions in greater detail. That "
    "could be useful later when testing a specific task, such as saving an item "
    "or resuming an audiobook. For the initial sketches, however, a horizontal "
    "design gives a better overview of the application.",
]
SKETCH_INTRO = (
    "These early sketches were developed as part of our group's Omnisound design "
    "work. They explore the general layout, navigation and playback controls "
    "before moving on to the interactive prototype."
)
SKETCH_END = (
    "The sketches helped us decide how to organise the interface and which "
    "functions should be easy to find. They were starting points for the "
    "interactive version of Omnisound."
)
SKETCHES = [
    {
        "file": "initial-sketch-1.png",
        "heading": "A. Main interface and navigation",
        "caption": "An early idea for the main layout, with navigation on the left and audio content on the right.",
        "crop": (175, 15, 1535, 780),
        "sha256": "df0a10464392f738dac594a03ce67fc68669f2e5fb589a89dc913bf4180b2d19",
    },
    {
        "file": "initial-sketch-2.png",
        "heading": "B. Browsing audio categories",
        "caption": "A simple layout for browsing music, podcasts and audiobooks using separate sections and cover images.",
        "crop": (230, 0, 1475, 791),
        "sha256": "b5ff8d75709ad62e6da6a4bdff52e479b6c8f54f0d15ea8735cedea2260a26f8",
    },
    {
        "file": "initial-sketch-3.jpg",
        "heading": "C. Playback controls",
        "caption": "An early player sketch with cover artwork and basic playback controls.",
        "crop": (70, 15, 700, 365),
        "sha256": "dfbb314f58d51ae0870d2f68c07eeec6cfe5e7d5dc39b6d1930578f7a94a594b",
    },
]


def prepare_assets() -> None:
    """Copy originals only if needed, then verify their identity."""
    ASSETS.mkdir(exist_ok=True)
    for item in SKETCHES:
        destination = ASSETS / item["file"]
        if not destination.exists():
            source = ROOT.parent / "report" / "figures" / "lo-fi" / item["file"]
            shutil.copy2(source, destination)
        if sha256(destination.read_bytes()).hexdigest() != item["sha256"]:
            raise ValueError(f"The original sketch has changed: {destination}")

    # Bundle the font files so the editable source can be rebuilt elsewhere.
    for name in ["times.ttf", "timesbd.ttf"]:
        destination = ASSETS / name
        if not destination.exists():
            shutil.copy2(Path("C:/Windows/Fonts") / name, destination)
    pdfmetrics.registerFont(TTFont("Body", str(ASSETS / "times.ttf")))
    pdfmetrics.registerFont(TTFont("Body-Bold", str(ASSETS / "timesbd.ttf")))
    pdfmetrics.registerFontFamily("Body", normal="Body", bold="Body-Bold")


def style(name: str, size: float, leading: float, bold: bool = False,
          color=INK) -> ParagraphStyle:
    return ParagraphStyle(
        name, fontName="Body-Bold" if bold else "Body", fontSize=size,
        leading=leading, textColor=color, alignment=TA_LEFT,
        allowWidows=0, allowOrphans=0, splitLongWords=0,
    )


def build() -> None:
    prepare_assets()
    styles = {
        "title": style("Title", 18.5, 23, True),
        "subtitle": style("Subtitle", 14.5, 19),
        "meta": style("Metadata", 10.5, 14),
        "heading": style("Heading", 12.5, 16, True),
        "body": style("Body", 11.2, 14.5),
        "caption": style("Caption", 10.5, 13.5),
        "sketch_heading": style("SketchHeading", 11.7, 14.5, True),
    }
    canvas = Canvas(str(PDF), pagesize=A4, pageCompression=1)
    canvas.setTitle(f"{TITLE} | {SUBTITLE}")
    canvas.setAuthor("Obid Alrhman Aljabi")
    canvas.setSubject("Individual Session 4 alternative assignment; Omnisound, Group 1; DT168G / IU127G")
    canvas.setCreator("Editable ReportLab source: build_assignment.py")
    layout = []
    page = 1

    def paragraph(text: str, top: float, kind: str = "body", x: float = MARGIN,
                  width: float = CONTENT_WIDTH, bold: bool = False) -> float:
        text_markup = escape(text)
        if bold:
            text_markup = f"<b>{text_markup}</b>"
        para = Paragraph(text_markup, styles[kind])
        _, height = para.wrap(width, HEIGHT)
        bottom = top - height
        if bottom < 49:
            raise ValueError(f"Text exceeds the usable area on page {page}: {text[:60]}")
        para.drawOn(canvas, x, bottom)
        layout.append({"page": page, "type": "text", "text": text,
                       "x": x, "y": bottom, "width": width, "height": height})
        return bottom

    def footer(number: int) -> None:
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.5)
        canvas.line(MARGIN, 35, WIDTH - MARGIN, 35)
        canvas.setFillColor(MUTED)
        canvas.setFont("Body", 8.5)
        canvas.drawString(MARGIN, 22, "Obid Alrhman Aljabi  |  Omnisound  |  Group 1")
        canvas.drawRightString(WIDTH - MARGIN, 22, f"{number} / 2")

    # Page 1: the supplied wording is retained verbatim.
    y = HEIGHT - MARGIN
    y = paragraph(TITLE, y, "title")
    y = paragraph(SUBTITLE, y - 1, "subtitle")
    y = paragraph("Student: Obid Alrhman Aljabi", y - 9, "meta")
    y = paragraph("Group: 1     Course: DT168G / IU127G", y, "meta")
    y -= 15
    y = paragraph("1. About Omnisound", y, "heading")
    y = paragraph(ABOUT, y - 5)
    y -= 13
    y = paragraph("2. Functions Needed for the Prototype", y, "heading")
    y = paragraph(FUNCTIONS_INTRO, y - 5)
    y -= 7
    for number, (name, description) in enumerate(FUNCTIONS, 1):
        y = paragraph(f"{number}. {name}", y, bold=True)
        y = paragraph(description, y)
        y -= 5
    y = paragraph(FUNCTIONS_END, y + 1)
    y -= 13
    y = paragraph("3. Horizontal or Vertical Design?", y, "heading")
    for index, text in enumerate(DESIGN):
        y = paragraph(text, y - (5 if index == 0 else 7))
    page_one_bottom = y
    footer(1)
    canvas.showPage()

    # Page 2: three original sketches, with a caption column beside each image.
    page = 2
    y = HEIGHT - MARGIN
    y = paragraph("Low-Fidelity Sketch Prototype", y, "title")
    y = paragraph(SKETCH_INTRO, y - 7)
    y -= 15
    image_width = 340
    gutter = 16
    label_width = CONTENT_WIDTH - image_width - gutter
    image_x = WIDTH - MARGIN - image_width
    image_manifest = []
    for index, item in enumerate(SKETCHES):
        original = PILImage.open(ASSETS / item["file"])
        cropped = original.crop(item["crop"])
        image_height = image_width * cropped.height / cropped.width
        label_bottom = paragraph(item["heading"], y, "sketch_heading", width=label_width)
        label_bottom = paragraph(item["caption"], label_bottom - 7, "caption", width=label_width)
        row_height = max(image_height, y - label_bottom)
        if y - row_height < 49:
            raise ValueError("Sketch row exceeds the usable area")
        buffer = BytesIO()
        cropped.save(buffer, format="PNG")
        buffer.seek(0)
        canvas.drawImage(ImageReader(buffer), image_x, y - image_height,
                         width=image_width, height=image_height, mask="auto")
        canvas.setLineWidth(0.35)
        canvas.setStrokeColor(RULE)
        canvas.rect(image_x, y - image_height, image_width, image_height, fill=0, stroke=1)
        layout.append({"page": page, "type": "image", "file": item["file"],
                       "x": image_x, "y": y - image_height,
                       "width": image_width, "height": image_height})
        image_manifest.append({
            "file": item["file"], "original_pixels": original.size,
            "crop_box": item["crop"], "cropped_pixels": cropped.size,
            "display_points": [image_width, image_height],
            "aspect_ratio_preserved": abs(image_width / image_height - cropped.width / cropped.height) < 1e-9,
            "effective_dpi": cropped.width / (image_width / 72),
            "sha256": item["sha256"],
        })
        y -= row_height + (12 if index < 2 else 11)
    y = paragraph(SKETCH_END, y)
    page_two_bottom = y
    footer(2)
    canvas.showPage()
    canvas.save()

    reader = PdfReader(PDF)
    assert len(reader.pages) == 2, "Expected exactly two pages"
    for pdf_page in reader.pages:
        assert abs(float(pdf_page.mediabox.width) - WIDTH) < 0.01
        assert abs(float(pdf_page.mediabox.height) - HEIGHT) < 0.01
    assert len(reader.pages[1].images) == 3, "Expected all three authentic sketches"
    text_one = " ".join(reader.pages[0].extract_text().split())
    text_two = " ".join(reader.pages[1].extract_text().split())
    expected_one = [TITLE, SUBTITLE, "Student: Obid Alrhman Aljabi", "Group: 1",
                    "Course: DT168G / IU127G", ABOUT, FUNCTIONS_INTRO, FUNCTIONS_END,
                    *DESIGN]
    expected_one += [value for number, pair in enumerate(FUNCTIONS, 1)
                     for value in (f"{number}. {pair[0]}", pair[1])]
    for value in expected_one:
        assert " ".join(value.split()) in text_one, f"Missing page 1 text: {value}"
    for value in [SKETCH_INTRO, SKETCH_END] + [s[k] for s in SKETCHES for k in ["heading", "caption"]]:
        assert " ".join(value.split()) in text_two, f"Missing page 2 text: {value}"
    verification = {
        "pdf": PDF.name, "pages": 2, "page_format": "A4 portrait",
        "student": "Obid Alrhman Aljabi", "group": 1, "course": "DT168G / IU127G",
        "supplied_wording_verified": True, "sketches": image_manifest,
        "page_text_bottom_points": [page_one_bottom, page_two_bottom],
        "layout": layout,
    }
    (ROOT / "verification.json").write_text(json.dumps(verification, indent=2), encoding="utf-8")
    print(json.dumps({k: v for k, v in verification.items() if k != "layout"}, indent=2))


if __name__ == "__main__":
    build()
