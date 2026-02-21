# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orientation slide deck for **순천향대학교 AI 개발자 양성 집중교육** bootcamp, built with Reveal.js 5.1.0. No build tools, no npm — just open `index.html` in a browser. All dependencies are vendored locally for offline use.

## Bootcamp Context

- **Audience**: Students without a computer science background — slides should use plain language and avoid unexplained jargon
- **Goal**: Move students beyond "prompt → answer" usage of AI toward building real projects with AI tools, culminating in a project built with Cursor (AI IDE) and pushed to GitHub
- **Core topics covered**:
  - Current landscape of AI models (LLMs, capabilities, limitations)
  - Prompt engineering (techniques for effective AI interaction)
  - n8n (no-code/low-code AI workflow automation)
  - GitHub (version control, collaboration, publishing projects)
  - Cursor (AI-powered IDE for building projects with AI assistance)
- **Key message**: AI is not just a Q&A tool — it's a development partner for building real software

## Key References

- **`STYLE.md`** — visual design specs (colors, fonts, layout rules for title and content slides). Always consult before making visual changes.
- **`DESIGN.md`** — design intent and slide-by-slide vision. Check this for context on what each slide should communicate.

## Architecture

- **`index.html`** — the entire presentation; each `<section>` is a slide, nested `<section>` elements create vertical sub-slides
- **`style.css`** — custom overrides on top of the Reveal.js theme
- **`fonts/`** — local font files (Fira Mono Bold)
- **`assets/`** — SVG graphics, logos, icons for slides
- **`vendor/`** — local copies of Reveal.js core (`reveal.js`, `reveal.css`), theme (`theme-black.css`), and plugins (`highlight.js`, `monokai.css`, `notes.js`). Do not edit these files.

## Viewing

```
open index.html
```

## Conventions

- Content language is Korean (lang="ko")
- To change the theme, swap `vendor/theme-black.css` for another Reveal.js theme file and update the `<link>` in `index.html`
- Transition style is configured in the `Reveal.initialize()` call at the bottom of `index.html`
- Add new slides by adding `<section>` elements inside `<div class="slides">`; wrap sections in a parent `<section>` for vertical slide groups
