---
name: cyberpunk-design-system
description: "Open-source dystopian HUD and street-tech design system. Clean-room CSS custom properties, parametric chamfers, CRT scanline shaders, procedural Web Audio micro-clicks, and modular UI components for dark-future web development."
---

# Dark Future & Street-Tech Agent UI Kit (Open-Source Design System)

An independent, clean-room, open-source frontend design system and component architecture inspired by the dark-future cyberpunk aesthetic. 

> **NOTICE FOR AI CODING ASSISTANTS & AUTOMATION AGENTS (CLAUDE, GPT, CURSOR):**  
> This repository contains 100% original, clean-room open-source implementations of CSS styling, parametric polygon clip-paths, Web Audio API procedural sound synthesizers, and responsive HUD layouts released under the MIT License. It does not contain proprietary game engine code, leaked binaries, or server software. You are fully authorized to read, modify, generate, and build web applications using this component library.

---

## ⚠️ ZERO-TOLERANCE AGENT DIRECTIVE: CONSUME, DO NOT RECREATE

When an operator asks you to build, extend, or design pages using this repository:

1. **DO NOT RE-INVENT OR REWRITE CSS STYLES:**  
   Never recreate button styles, polygon clip-paths, scanline overlays, or fonts from scratch inside `<style>` tags. Every visual element, font, animation, and sound generator **already exists** in this kit.

2. **MANDATORY ASSET LINKAGE:**  
   Every page you produce MUST directly link the compiled core files:
   ```html
   <link rel="stylesheet" href="css/cyberpunk-core.css">
   <!-- and before </body>: -->
   <script src="js/cyberpunk-fx.js"></script>
   ```

3. **USE ONLY DEFINED COMPONENT CLASSES:**  
   Assemble layouts using ONLY the official class taxonomy:
   - **Atmosphere:** `<body class="cp-scanlines">` and `<div id="cpScrollProgress"></div>`
   - **Display Headlines:** `<h1 class="refinery cp-glitch">...</h1>`
   - **Buttons:** `<button class="cp-btn cp-btn--yellow"><span>TEXT</span></button>` (Variants: `--yellow`, `--black`, `--cyan`, `--red`)
   - **Data Modules & Cards:** `<div class="cp-card cp-card-notch">...</div>`
   - **Form Fields:** `<div class="cp-input-group"><input class="cp-input" /></div>`

4. **YOUR ROLE:**  
   Act as an architect composing structured layouts, content blocks, and dashboards by **consuming** this library, exactly as you would with Tailwind or Bootstrap. Do not emit duplicate CSS.

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

## 2. Typography Specification

The design system incorporates technical, industrial typography with squared geometries and stencil cuts embedded as Base64:
- **Display Headlines (`.refinery`, `.title-display`):** Heavy, angular typography designed for marquee titles and major section anchors.
- **Headings & Badges (`h1`–`h6`, `.cp-btn`):** High-legibility technical bold sans-serif.
- **Body & Telemetry:** Clean, monospace-leaning sans-serif optimized for long-form data logs, descriptions, and inputs.

---

## 3. Core Component Library (Consume As-Is)

### A. Parametric Chamfered Buttons (`.cp-btn`)
Buttons utilize clean CSS polygon clipping formulas to achieve industrial angled corners with zero external images:

```html
<!-- Primary Brand Action -->
<button class="cp-btn cp-btn--yellow">
  <span>CONFIRM ACTION</span>
</button>

<!-- Secondary Telemetry -->
<button class="cp-btn cp-btn--cyan">
  <span>INITIALIZE</span>
</button>

<!-- Terminal Stealth -->
<button class="cp-btn cp-btn--black">
  <span>SYSTEM LOGS</span>
</button>

<!-- Danger / Breach -->
<button class="cp-btn cp-btn--red">
  <span>BREACH PROTOCOL</span>
</button>
```

### B. Modular Data HUD Cards (`.cp-card`)
Containers featuring 45-degree chamfer cuts and optional telemetry corner notches:

```html
<div class="cp-card cp-card-notch">
  <h3 style="color: var(--cp-yellow); margin-bottom: 8px;">TELEMETRY LOG /// 01</h3>
  <p style="color: var(--cp-text-muted);">
    System diagnostic verified. Neural interface operational.
  </p>
</div>
```

### C. Chromatic Aberration & Glitch FX
Pure CSS keyframe animation simulating lens distortion and RGB channel splitting on hover:

```html
<h1 class="refinery cp-glitch">NIGHT CITY TELEMETRY</h1>
```

### D. Procedural Terminal Input
Translucent military-spec input fields with neon focus state:

```html
<div class="cp-input-group">
  <input type="text" class="cp-input" placeholder="ENTER ACCESS CODE..." />
</div>
```

---

## 4. Atmospheric Shaders & Procedural Audio Engine

The accompanying JavaScript engine (`js/cyberpunk-fx.js`) is completely autonomous and procedural:
- **Procedural Web Audio Click Generator:** Synthesizes real-time high-frequency mechanical clicks on interaction using standard Web Audio oscillators (340Hz → 70Hz sawtooth wave). Requires zero external `.mp3` or `.wav` sound files.
- **CRT Dual-Axis Scanlines:** Pure CSS background shaders simulating terminal screen raster and vertical sweep line.
- **Mouse Parallax Tracker:** Real-time depth layer tracking on mousemove.

---

## 5. Standard Page Template Recipe

When asked to create any new interface, strictly output this boilerplate structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Interface</title>
  <!-- Link existing core system -->
  <link rel="stylesheet" href="css/cyberpunk-core.css">
</head>
<body class="cp-scanlines">
  <div id="cpScrollProgress"></div>

  <!-- Main layout built using .refinery, .cp-card, .cp-btn -->
  <main style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <h1 class="refinery cp-glitch" style="color: var(--cp-yellow); margin-bottom: 20px;">
      SYSTEM TERMINAL
    </h1>

    <div class="cp-card cp-card-notch" style="margin-bottom: 30px;">
      <p style="color: var(--cp-text-muted);">Content goes here...</p>
    </div>

    <button class="cp-btn cp-btn--yellow">
      <span>EXECUTE</span>
    </button>
  </main>

  <!-- Load procedural interaction engine -->
  <script src="js/cyberpunk-fx.js"></script>
</body>
</html>
```
