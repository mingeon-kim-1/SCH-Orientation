# Style Guide

## Brand Colors

Only two base colors exist. Never introduce other hues.

| Token          | Hex       |
|----------------|-----------|
| `--sch-blue`   | `#26549c` |
| `--sch-white`  | `#ffffff` |

All visible colors must be **monochrome variants of `--sch-blue`**. To create lighter shades, use CSS `opacity` on `--sch-blue` — do not add new hex values. Examples:
- Full blue: `color: var(--sch-blue)` (opacity 1.0)
- Light blue: `color: var(--sch-blue); opacity: 0.5`
- White elements on blue background: `#ffffff` / `var(--sch-white)`

## Global Layout

- Aspect ratio is always **16:9** (1920 x 1080)
- This is set in `Reveal.initialize()` with `width: 1920, height: 1080`

---

## Title Slide

Every title/section slide in this presentation uses this exact layout. Do not deviate.

### What It Looks Like

```
┌─────────────────────────────────────────────┐
│                                             │
│              BLUE (#26549c)                 │
│                                             │
│          ┌─WHITE TEXT / LOGOS──┐             │
│          │  Korean × Logo     │ ← bottoms touch the border
├──────────┴────────────────────┴─────────────┤  ← 50% border
│                                             │
│              WHITE (#ffffff)                │
│                                             │
│     (bottom halves of text/logos blend      │
│      into white and become invisible)       │
│                                             │
└─────────────────────────────────────────────┘
```

### Key Concept

The slide is split exactly in half horizontally. The top half is blue, the bottom half is white. All title elements (text, symbols, logos) are **white** and positioned so their **bottom edges sit exactly on the border line**. Because the elements are white and the bottom half is white, the bottom portions of the elements disappear — creating a "rising from the border" effect.

### HTML Structure

Every title slide follows this exact template:

```html
<section class="title-slide" data-background="none">
  <div class="title-split">
    <!-- Blue top half -->
    <div class="title-top"></div>
    <!-- White bottom half -->
    <div class="title-bottom"></div>
    <!-- Title content: sits at the border between top and bottom -->
    <div class="title-sch">
      <!-- 1. Korean text (SVG) -->
      <svg viewBox="0 0 900 180" class="title-text-kr">
        <text x="450" y="180" text-anchor="middle"
              font-family="Fira Mono, monospace" font-weight="700"
              font-size="180" fill="white">한글텍스트</text>
      </svg>
      <!-- 2. Multiplication symbol (optional, use when combining items) -->
      <span class="title-multiply">×</span>
      <!-- 3. SVG logo (optional) -->
      <img src="assets/Your-Logo-white.svg" alt="Logo" class="title-svg-logo">
    </div>
  </div>
</section>
```

You can use any combination: Korean text only, logo only, or Korean + × + logo.

### CSS (all values are exact — do not change)

```css
/* The slide has no padding */
.title-slide { padding: 0 !important; margin: 0 !important; }

/* Full-size container */
.title-split {
  width: 1920px; height: 1080px;
  position: absolute; top: 0; left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}

/* Blue top half */
.title-top {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 50%;
  background: #26549c;
}

/* White bottom half */
.title-bottom {
  position: absolute; bottom: 0; left: 0;
  width: 100%; height: 50%;
  background: #ffffff;
}

/* The flex container holding all title elements */
.title-sch {
  position: absolute;
  left: 0; right: 0;
  bottom: calc(50% + 9px);       /* 9px above the 50% border */
  z-index: 1;
  display: flex;
  align-items: flex-end;          /* all items align to the bottom */
  justify-content: center;        /* centered horizontally */
  gap: 60px;                      /* space between items */
  overflow: visible;
  transform: scale(1.3);          /* scale everything up uniformly */
  transform-origin: bottom center;
}
```

### Element 1: Korean Text

Rendered as SVG `<text>` for pixel-perfect baseline control.

```css
.title-text-kr {
  width: 750px;
  flex-shrink: 0;
  overflow: visible;
  margin-bottom: -2px;  /* fine-tune vertical alignment */
}
```

SVG rules:
- `viewBox="0 0 900 180"` — always this size
- `x="450" y="180"` — centers text, baseline at bottom edge
- `text-anchor="middle"`
- `font-family="Fira Mono, monospace"` `font-weight="700"` `font-size="180"`
- `fill="white"`

Just change the text content. Do not change any other attribute.

### Element 2: Multiplication Symbol

Used between Korean text and a logo. This is the unicode `×` character, NOT the letter X.

```css
.title-multiply {
  color: #ffffff;
  font-size: 120px;
  font-weight: 300;
  opacity: 0.7;
}
```

### Element 3: SVG Logo

For brand logos (e.g. Wrtn, Cursor, GitHub).

```css
.title-svg-logo {
  height: 125px;
  position: relative;
  top: 31px;  /* pushes logo down so its bottom aligns with the border */
}
```

Rules for the SVG file itself:
1. **Must have transparent background** — no background rectangle
2. **All fills must be `#fff` (white)** — convert any colored fills to white
3. Place the file in `assets/` folder
4. Name it `YourName-white.svg`

### Title Slide Subtitle (bottom half)

Text in the white bottom half uses monochrome blue — the same `--sch-blue` at varying opacities.

```html
<div class="title-subtitle">
  <p class="title-subtitle-main">순천향대학교 AI 개발자 양성 집중교육</p>
  <p class="title-subtitle-sub">Introduction &amp; Orientation</p>
</div>
```

```css
.title-subtitle {
  position: absolute;
  left: 0; right: 0;
  top: calc(50% + 80px);
  z-index: 1;
  text-align: center;
}

.title-subtitle-main {
  color: var(--sch-blue);           /* full blue — opacity 1.0 */
  font-family: 'Fira Mono', monospace;
  font-size: 54px;
  font-weight: 700;
  margin: 0 0 20px 0;
}

.title-subtitle-sub {
  color: var(--sch-blue);           /* same blue, reduced opacity */
  font-family: 'Fira Mono', monospace;
  font-size: 42px;
  font-weight: 400;
  opacity: 0.5;
  margin: 0;
}
```

### How to Add a New Title Slide

1. Copy the HTML template above
2. Replace the Korean text inside `<text>...</text>`
3. If you need a logo: make a white version of the SVG, put it in `assets/`, update the `src`
4. If you don't need the × symbol or logo, remove those elements
5. Do NOT change any CSS class names or values

---

## Content Slides

TBD — will follow the same brand colors and fonts but with a different layout from the title slide.

---

## File Structure

```
assets/          → White SVG logos for title slides
fonts/           → Local font files (Fira Mono Bold)
vendor/          → Reveal.js core (do not edit)
index.html       → Slide deck
style.css        → Custom styles
STYLE.md         → This file (design specs)
DESIGN.md        → Design intent and slide vision
CLAUDE.md        → Instructions for Claude Code
```
