# Day 3 Maths Lab: Lists, Functions and the math Module

Interactive workbook for the FDP "Python for Mathematics Faculty", Day 3 (complete):

- Section 01 · Lists: 7 lessons and a section quiz
- Section 02 · Functions: 7 lessons and a section quiz
- Section 03 · The math module: 7 lessons and a section quiz
- Section 04 · Practice and day quiz: 3 practice sets (11 problems), a 20-question Day 3 final quiz, and a summary page where each teacher downloads their own code as a Colab notebook (.ipynb) or a .py file

Every lesson has slides (basic, advanced and an animation), Run and trace, Predict, Try it yourself and an engineering-maths real-world problem. Progress and code are saved in each teacher's own browser.
Python runs inside each teacher's browser, so the site is a plain static site: no server code, no database.

## What is in this folder

| Path | What it is |
|---|---|
| `index.html` | The whole workbook (slides, editor, tracer, tasks, real-world problems) |
| `sw.js` | Offline cache: after the first visit the site works without internet |
| `render.yaml` | Render settings (static site, cache headers) |
| `Start Day 3 Lab.bat` | One-click start on Windows without internet (local server + browser) |
| `vendor/pyodide/` | Python 3.12 for the browser (Pyodide 0.26.4, about 14 MB) |
| `vendor/codemirror/` | Code editor (CodeMirror 5.65.16) |
| `vendor/katex/` | Maths typesetting for the worked solutions (KaTeX 0.16.11) |
| `vendor/fonts/` | Inter, JetBrains Mono and Source Serif 4 |
| `assets/smvec-logo.png` | SMVEC logo (from smvec.ac.in) for the cover page and sidebar |

Every file the page needs is in this folder. When Run is first pressed, the page checks the internet: if it is available, Python loads from the online copy (cdn.jsdelivr.net, same version); if not, it uses the offline copy in `vendor/pyodide/`.

## Publish on Render

1. Put this folder in a GitHub repository (the folder's contents at the top level of the repository).
2. In Render, choose **New → Static Site** and connect the repository.
3. Set **Publish directory** to `.` and leave **Build command** empty.
4. Click **Create Static Site**. Render gives you a link such as `https://day3-maths-lab.onrender.com`.

Instead of steps 2 to 4 you can use **New → Blueprint**, which reads `render.yaml` and sets everything up.

## Three ways to open the lab

| How | Internet needed? | Notes |
|---|---|---|
| The Render link | First visit only | Best for participants: nothing to install |
| Double-click **Start Day 3 Lab.bat** (Windows) | No | Needs Python installed; starts a local server and opens the browser. Keep its window open. |
| Double-click `index.html` | Yes | Slides work offline, but Python is fetched from the internet (cdn.jsdelivr.net) because browsers block local Python files on `file://` pages |

## Use it in a lab with no internet

Copy this folder to one computer that has Python installed, open a terminal in the folder and run:

```
python -m http.server 8000
```

Then open `http://localhost:8000` on that computer, or `http://<that computer's IP address>:8000` on the other lab computers.

Or simply double-click `Start Day 3 Lab.bat`, which does the same.

## Updating the workbook

1. Edit `index.html`.
2. In `sw.js`, change `CACHE = 'day3-lab-v16'` to a new name (for example `day3-lab-v17`), so teachers' browsers fetch the new version.
3. Push to GitHub. Render republishes automatically.

## Licences

- Pyodide: Mozilla Public License 2.0 (`vendor/pyodide/LICENSE`)
- CodeMirror: MIT (`vendor/codemirror/LICENSE`)
- KaTeX: MIT (`vendor/katex/LICENSE`)
- Fonts: SIL Open Font License 1.1 (`vendor/fonts/LICENSE-*`)
