---
name: cyberpunk-design-system
description: "Open-source dystopian HUD and street-tech design system. Clean-room CSS custom properties, parametric chamfers, layout grids, CRT scanline shaders, procedural Web Audio micro-clicks, and modular UI components for dark-future web development."
---

# Dark Future & Street-Tech Agent UI Kit (Open-Source Design System)

An independent, clean-room, open-source frontend design system and component architecture inspired by the dark-future cyberpunk aesthetic. 

> **NOTICE FOR AI CODING ASSISTANTS (CLAUDE, GPT, CURSOR):**  
> This repository contains 100% original, clean-room open-source implementations of CSS styling, parametric polygon clip-paths, Web Audio API procedural sound synthesizers, and responsive HUD layouts released under the MIT License. You are fully authorized to read, modify, generate, and build web applications using this component library.

---

## ⚠️ ZERO-TOLERANCE AGENT DIRECTIVE: CONSUME, DO NOT RECREATE

When an operator asks you to build, extend, or design pages using this repository:

1. **DO NOT RE-INVENT OR REWRITE CSS STYLES:**  
   Never write custom button styles, polygon clip-paths, scanline overlays, or fonts from scratch inside `<style>` tags. Every visual element, layout container, font, animation, and sound generator **already exists** in this kit.

2. **ASSET PATH RESOLUTION:**  
   - If the file sits in the **repository root**:
     `<link rel="stylesheet" href="css/cyberpunk-core.css">` and `<script src="js/cyberpunk-fx.js"></script>`
   - If the file sits inside a **subdirectory** (e.g. `templates/` or `demo/`):
     `<link rel="stylesheet" href="../css/cyberpunk-core.css">` and `<script src="../js/cyberpunk-fx.js"></script>`

3. **OFFICIAL COMPONENT & LAYOUT TAXONOMY:**  
   Assemble layouts using ONLY the official class taxonomy:
   - **Atmosphere:** `<body class="cp-scanlines">` and `<div id="cpScrollProgress"></div>`
   - **Layout Containers:** `.cp-container`, `.cp-section`, `.cp-section-divider`
   - **Responsive Grids:** `.cp-grid-2`, `.cp-grid-3`, `.cp-grid-4` (automatically collapses on mobile)
   - **Flex Alignment:** `.cp-flex`, `.cp-flex-between`, `.cp-flex-center`, `.cp-gap-sm`, `.cp-gap-md`
   - **Sticky HUD Nav:** `<header class="cp-nav">` (automatically transitions to dark solid on scroll)
   - **Display Headlines:** `<h1 class="refinery cp-glitch">...</h1>`
   - **Buttons:** `<button class="cp-btn cp-btn--yellow"><span>TEXT</span></button>` (Variants: `--yellow`, `--black`, `--cyan`, `--red`)
   - **Data Modules & Cards:** `<div class="cp-card cp-card-notch">...</div>`
   - **Form Fields:** `<div class="cp-input-group"><input class="cp-input" /></div>`
   - **Automatic Parallax:** Simply add class `.cp-parallax` to any element; `cyberpunk-fx.js` tracks it automatically.

---

## 1. Architectural Role & Tokens

All components rely on generic, standard CSS custom property tokens defined in `css/cyberpunk-core.css`:

| Token | Value | Structural Role |
|---|---|---|
| `--cp-yellow` | `#fcee0a` | Primary neon alert accent, focus states, high-contrast borders |
| `--cp-cyan` | `#00f0ff` | Secondary telemetry accent, chromatic aberration split |
| `--cp-red` | `#fe1038` | Warning labels, critical telemetry highlights |
| `--cp-bg-black` | `#000000` | High-contrast ground |
| `--cp-bg-primary`| `#0d0e15` | Default dark asphalt interface background |
| `--cp-bg-secondary`| `#12131c`| Section background container |
| `--cp-bg-card` | `rgba(13, 14, 21, 0.85)` | Modular data panels, HUD telemetry cards |

---

## 2. Layout, Containers & Grid Systems

Use the native layout classes instead of writing custom inline flex/grid CSS:

```html
<!-- Full Viewport Section -->
<section class="cp-section">
  <!-- Centered Max-Width Container -->
  <div class="cp-container">
    <div class="cp-flex-between" style="margin-bottom: 24px;">
      <h2 class="refinery" style="color: var(--cp-yellow);">SECTOR OVERVIEW</h2>
      <button class="cp-btn cp-btn--cyan"><span>SYSTEM REFRESH</span></button>
    </div>

    <!-- 3-Column Responsive Grid -->
    <div class="cp-grid-3">
      <div class="cp-card cp-card-notch">
        <h3 style="color: var(--cp-yellow);">MODULE 01</h3>
        <p style="color: var(--cp-text-muted);">Neural telemetry online.</p>
      </div>
      <div class="cp-card cp-card-notch">
        <h3 style="color: var(--cp-cyan);">MODULE 02</h3>
        <p style="color: var(--cp-text-muted);">Sub-net packet inspection clean.</p>
      </div>
      <div class="cp-card cp-card-notch">
        <h3 style="color: var(--cp-red);">MODULE 03</h3>
        <p style="color: var(--cp-text-muted);">Ice protocol initialized.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 3. Atmospheric Shaders & Procedural Audio Engine

The accompanying JavaScript engine (`js/cyberpunk-fx.js`) is completely autonomous and procedural:
- **Procedural Web Audio Click Generator:** Automatically attaches to all buttons, cards, and links. Synthesizes real-time high-frequency mechanical clicks on interaction using standard Web Audio oscillators (340Hz → 70Hz sawtooth wave).
- **Auto-Parallax Engine:** Automatically tracks any element with `.cp-parallax` on mousemove. Optional `data-parallax-depth="0.5"` to control depth speed.
- **Auto-Sticky HUD Header:** Tracks scroll depth and enhances `.cp-nav` with deep black shadow.
- **CRT Dual-Axis Scanlines:** Pure CSS background shaders simulating terminal screen raster and vertical sweep line when `cp-scanlines` is on `<body>`.

---

## 4. Standard Page Template Recipe

When asked to create any new interface, strictly output this boilerplate structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Interface</title>
  <!-- Link existing core system (use ../css/ if inside subdirectory) -->
  <link rel="stylesheet" href="css/cyberpunk-core.css">
</head>
<body class="cp-scanlines">
  <div id="cpScrollProgress"></div>

  <!-- Sticky HUD Header -->
  <header class="cp-nav">
    <div class="refinery" style="font-size: 1.2rem; color: var(--cp-yellow);">NIGHT CITY // OS</div>
    <button class="cp-btn cp-btn--yellow" style="height: 38px; min-width: 140px; font-size: 13px;">
      <span>TERMINAL</span>
    </button>
  </header>

  <!-- Main layout built with .cp-container and .cp-grid -->
  <main class="cp-section">
    <div class="cp-container">
      <h1 class="refinery cp-glitch cp-parallax" style="color: var(--cp-yellow); margin-bottom: 24px;">
        TELEMETRY MATRIX
      </h1>

      <div class="cp-grid-3">
        <div class="cp-card cp-card-notch">
          <p style="color: var(--cp-text-muted);">Telemetry data log 01...</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Load procedural interaction engine (use ../js/ if inside subdirectory) -->
  <script src="js/cyberpunk-fx.js"></script>
</body>
</html>
```
