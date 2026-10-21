# Session 4 alternative assignment - Obid Alrhman Aljabi

This folder contains the separate, individual two-page A4 submission for
Omnisound, Group 1, DT168G / IU127G.

- `Obid_Alrhman_Aljabi_Session4_Alternative.pdf` is the final submission.
- `build_assignment.py` is the editable source; all text is near the beginning.
- `assets/` contains unchanged copies of the three authentic group sketches
  and the fonts used to build the PDF.
- `verification.json` records the page count, wording checks, original sketch
  hashes, crop bounds and undistorted display dimensions.

To regenerate the PDF, keep this folder together and run:

```powershell
python -m pip install reportlab Pillow pypdf
python build_assignment.py
```

Only surrounding paper is cropped in memory. The original sketches and the
existing report, presentation, prototype and testing records are not edited.
The drawings are credited in the document as part of the group's early work.
