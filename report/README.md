# Omnisound report

Report Steps 0 and 1: project setup and Chapter 1 only. All report sources,
build products and quality-check files are inside this folder. Existing
project documents and prototypes are read-only sources for this work.

## Files and format

- `main.tex`: A4, 12-point `report` class, Latin Modern text, 25 mm margins,
  restrained formatting, numbered chapters/sections/figures/tables, automatic
  contents and PDF bookmarks. Front matter uses Roman page numbers and the
  body uses Arabic page numbers.
- `chapters/01-introduction.tex`: Introduction with Background, Purpose,
  Goals, Delimitations and Division of Work.
- `chapters/02-theory.tex` through `06-discussion.tex`: chapter headings,
  labels and a single TODO sentence each; no chapter content.
- `references.bib`: verified local sources; BibTeX with `IEEEtran.bst`.
  References appear in citation order. The structural guidance entry remains
  available in the database but is not printed unless cited.
- `figures/lo-fi/`, `figures/v1/`, `figures/v2/`, `figures/diagrams/`: empty
  directories reserved for genuine project figures. No decorative images or
  prototype screenshots have been inserted into Chapter 1.
- `appendices/`: empty; `main.tex` already switches to appendix numbering
  after the references. Add an appendix file and an `\include` there later.
- `qa/`: original-file checksum manifest, source inspection renders and final
  PDF review material. These files are not included in the report.

The abstract is an explicit placeholder. Write approximately 250 words after
Results and Discussion are complete. The eventual target of around 30 pages
excluding appendices applies to the completed report. The present empty
chapter pages are ordinary LaTeX chapter starts and are not substantive content.

## Build

Run commands from this `report` directory so that relative inputs resolve and
all generated files remain here.

```powershell
latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex
```

On this machine, MiKTeX's `latexmk` executable is present but fails because its
Perl script engine is missing. The supported fallback is:

```powershell
pdflatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex
bibtex main
pdflatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex
pdflatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex
```

This is a multi-file LaTeX/BibTeX project. The installed MiKTeX tools are used
to resolve chapter files and the bibliography. The result is `main.pdf`.

## Sources inspected and actual locations

Paths below are relative to the existing project root
`C:/Users/Jake_/Desktop/ui proj/`, not to this report folder. The root contains
a second folder also named `ui proj`; that existing arrangement is preserved.

| Source | Actual location | Use or limitation |
| --- | --- | --- |
| Official P3 instructions | `ui proj/P3 Projekt.pdf` | Read all 8 pages. Iterative process and usability testing: pp. 2-3. Report length and submission: p. 5. Document dated 10 October 2023. |
| Official report structure | `ui proj/DT168G, IU127G Rapportstruktur.pdf` | Read all 7 pages. Front matter and cover fields: p. 2; purpose/goals/delimitations: pp. 3-4; division of work: p. 4; IEEE and page/section locators: pp. 6-7. Dated 5 October 2023. Both requested official PDFs are present. |
| HT26 course project page export | `ui proj/Projektarbete_ Människa-datorinteraktion HT26 (DT168G, IU127G).pdf` | Extracted and visually checked all 4 pages. Only page 1 has substantive course content; pp. 2-4 are blank apart from interface symbols. It cannot establish the complete HT26 instructions. |
| Final concept sheet | `Omnisound_ProjectSession4_completed_final.pdf` | Image-based, single page; rendered and visually read. Primary concept source for Chapter 1 and bibliography key `omnisoundconcept`. Includes a working problem to validate rather than confirmed participant findings. |
| Copy of final concept sheet | `ui proj/sesh 4 hand in/Omnisound_ProjectSession4_completed_final (1).pdf` | Located; same SHA-256 as the root final sheet. |
| Earlier filled concept sheet | `Omnisound_ProjectSession4_filled.pdf` | Read its one page. Broader wording than the completed final sheet. Copies exist in `ui proj/sesh 4 prototype/`. |
| Blank concept template | `ui proj/ProjectSession4_handIn.pdf` | Read its one page; teacher's questions, no completed project answers. |
| Interview planning document | `ui proj/Proj alt assignment2 (group1).docx` | Read paragraphs and table. Student target group, proposed interview questions, handwritten recording and named roles. This is a plan, not interview responses. |
| Submitted interview plan PDF | `ui proj/deliverabs/Proj alt assignment2 (group1).pdf` | Read both pages. Bibliography key `interviewplan`; named interview/recording roles on p. 2. The wording differs from the DOCX, especially target group, information text and questions. Neither version proves that interviews occurred. |
| Original low-fidelity sketch photos | `IMG_20260924_133307.webp`, `IMG_20260924_133311.webp`, `IMG_20260924_133412.jpg` | Visually checked: navigation/sidebar, audio categories and a player sketch. Copies are in `ui proj/sesh 4 prototype/`. No authorship or iteration order inferred from filenames. |
| V1 high-fidelity prototype | `V1/index.html`, `V1/styles.css`, `V1/script.js`, `V1/README.md` | Located and checked README and relevant HTML/JavaScript. Primary V1 documentation source, key `omnisoundv1`. Sample catalogue and interface state do not establish real streaming functionality. |
| V2 high-fidelity prototype | `omnisound-v2/index.html`, `omnisound-v2/styles.css`, `omnisound-v2/script.js`, `omnisound-v2/README.md` | Located and checked documentation and relevant code. Key `omnisoundv2`; changes are expressly unevaluated redesign hypotheses. |
| Other prototype copies | Root `index.html`, `styles.css`, `script.js`, `README.md`; `ui proj/sesh 4 prototype/`; `ui proj/sesh 4 prototype/v2/` | Located and compared file hashes. Root HTML/CSS/JS/README and `sesh 4 prototype` copies match V1. Nested V2 HTML/CSS/README match `omnisound-v2`, but its JavaScript differs: the root V2 additionally updates the current catalogue item's progress when the progress slider changes. The nested V2 folder also contains `Skärmbild 2026-10-12 161036.png`. Chapter 1 uses the root `omnisound-v2` documentation. |
| Session 1 teaching slides | `ui proj/ProjectSession1_20250915_ProjectStart.pdf` | Read extracted text from all 24 pages. Course process and design studio guidance, not evidence of group activities. |
| Session 2 teaching slides | `ui proj/ProjectSession2_20250919_DataCollection.pdf` | Read extracted text from all 24 pages. Data collection and planning guidance. |
| Session 3 teaching slides | `ui proj/ProjectSession3_20250924_DataAnalysis.pdf` | Read extracted text from all 20 pages. Requirements/analysis guidance and example personas, not a completed Omnisound requirements list. |
| Session 4 teaching slides | `ui proj/ProjectSession4_20251006_Prototyping.pdf` | Read extracted text from all 18 pages. Concept questions and design/prototyping guidance. Copies located at root and in `ui proj/sesh 4 prototype/`. |
| Session 5 teaching slides | `ui proj/ProjectSession5_20251009_UsabilityTests.pdf` | Read extracted text from all 16 pages. Usability-test guidance, not actual Omnisound test records. |
| Usability exercise | `ui proj/MDIÖvning20140929.pdf` | Read extracted text from all 5 pages. General test guidance and example tasks. |
| Other inspected teaching images | `ui proj/image.png`, `ui proj/emil email 1.png`, `ui proj/emil email 2.png` | Visually read. Exercise instructions and alternative-assignment instructions; no participant responses. Not cited as research evidence. |

Archives `V1.zip`, `omnisound-v2.zip` and `ui proj/sesh 4 prototype.zip` were
located and preserved. They were not extracted because existing prototype
directories were available. Other root PNGs and images in the hand-in folder
were inventoried but not used as research evidence or inserted into the report.

## Source use and outstanding confirmation

Chapter 1 distinguishes the concept's proposed problem and desired qualities
from findings that would require participant evidence. It uses only local
project documents and official course instructions. No external statistics,
participant quotations, measurements or course-book page numbers were added.
No online URLs were invented for unpublished internal files.

Before submission, confirm:

1. The authors' degree programme(s) and the examiner for HT26. Both are visible
   cover placeholders. Authorship of older course PDFs does not verify the
   current examiner.
2. Each member's actual contributions, including interviews, analysis,
   sketches, prototype implementation, test planning/execution and report
   sections. Section 1.5 records only the documented planned interview roles
   and contains an explicit completion placeholder.
3. Actual participant recruitment, interview responses and usability-test
   records, plus the prioritised requirements derived from them. None were
   found as standalone completed records. The V2 README mentions team-supplied
   findings but does not provide the underlying test record.
4. Which Session 2 plan version reflects the work actually conducted. The
   DOCX and submitted PDF differ; Chapter 1 relies on their matching role
   assignment, without claiming execution.
5. Whether the dated 2023 official instruction PDFs remain the applicable
   complete guidance for HT26, and any additional cover requirements. The
   supplied HT26 page export is incomplete.
6. The course-book edition and the actual passages to cite in later chapters.
   The Swedish Research Council source and the project's actual ethics
   procedures must be verified when writing Theory and Method. Those chapters
   are deliberately unwritten at this stage.

The original lo-fi authorship, iteration sequence and associated feedback
also need confirmation before the Design chapter is written.

## Quality review

The PDF compiled successfully with MiKTeX `pdflatex` and BibTeX. Every build
command completed with exit code 0. The final LaTeX log has no errors,
unresolved citations/references, layout warnings or overfull/underfull boxes.

Chapter 1 occupies three numbered body pages (1-3; physical PDF pages 4-6),
with approximately 1,100 words. The complete current PDF has 12 pages,
including the cover, abstract placeholder, contents, five placeholder chapter
pages and references. No attempt was made to reach the final page target.

All 12 final pages were rendered with Poppler and visually inspected. The
cover, contents, five Introduction headings, paragraph layout, page numbering,
placeholder chapters and IEEE bibliography were checked. No clipping,
overlap or overflowing text was found. The 19 internal links resolve; there
are no external links in the PDF, missing citation keys, missing chapter
inputs or empty figure references. All five cited sources appear in the
bibliography. Chapters 2-6 contain only their headings, labels and TODO line.

`qa/verification.json` records the checks. SHA-256 comparison against
`qa/original-files-sha256.json` confirms that all 60 pre-existing files remain
byte-for-byte unchanged, including both prototypes, their copies, archives,
sketches and course/project documents. No new workspace files were created
outside `report/`.
