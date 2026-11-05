---
name: cyberpunk-design-system
description: "Production-ready Cyberpunk 2077 design system kit. Includes genuine Refinery-25 & BlenderPro Base64-embedded fonts, CRT scanline shaders, chamfer polygon clip-paths, Web Audio micro-clicks, and cyber UI components."
---

# Cyberpunk 2077 Agent UI Kit & Design System

A self-contained, offline-capable, production-grade frontend kit replicating the official CD PROJEKT RED *Cyberpunk 2077* aesthetic. Designed for AI agents, developers, and interface designers building dark-future, sci-fi, HUD, or gaming web experiences.

## Architecture & File Structure

```
cyberpunk-kit/
├── SKILL.md                   # Agent instruction manual and component specs
├── README.md                  # Quickstart guide & documentation
├── package.json               # Manifest metadata
├── css/
│   └── cyberpunk-core.css     # Design tokens, base64 embedded fonts, buttons, cards, CRT FX
├── js/
│   └── cyberpunk-fx.js        # Web Audio synthesizer, glitch scrambler, parallax, scroll
├── fonts/                     # Raw .woff2 binaries (Refinery, BlenderProBold, BlenderProBook)
└── templates/
    ├── template-blank.html    # Clean starter boilerplate
    └── template-showcase.html # 1:1 Live Cyberpunk.net clone reference
```

---

## 1. Design Tokens & Color Palette

| Token | Hex Value | Semantic Role |
|---|---|---|
| `--cp-yellow` | `#fcee0a` | Primary brand accent, primary CTA, headline focus |
| `--cp-cyan` | `#00f0ff` | Secondary tech accent, glitch split, active hover |
| `--cp-red` | `#fe1038` | Danger, warning tags, chromatic split, Edgerunners theme |
| `--cp-bg-black` | `#000000` | Pure contrast black |
| `--cp-bg-primary`| `#0d0e15` | Default page background |
| `--cp-bg-secondary`| `#12131c`| Section background |
| `--cp-bg-card` | `rgba(13, 14, 21, 0.85)` | Card panels, floating modules |

---

## 2. Typography Hierarchy

The kit embeds genuine CDPR font binaries encoded as Base64 in `cyberpunk-core.css`:
- **`Refinery-25` (Semi-Bold):** Apply with class `.refinery` or `.title-display`. Used for major display titles, banners, and game logos.
- **`BlenderProBold` (700):** Default for all headings (`h1`–`h6`), `.cp-btn`, navigation links, and emphasis.
- **`BlenderProBook` (400):** Default for `body`, long-form paragraph lore, form inputs, and legal copy.

---

## 3. Core Component Library

### A. Chamfered Cyber Buttons (`.cp-btn`)
Buttons feature the signature military 45-degree polygon corner cuts and an animated glitch sweep on hover:

```html
<!-- Primary Brand Yellow -->
<button class="cp-btn cp-btn--yellow">
  <span>BUY NOW</span>
</button>

<!-- Tech Cyan -->
<button class="cp-btn cp-btn--cyan">
  <span>INITIALIZE</span>
</button>

<!-- Stealth Dark -->
<button class="cp-btn cp-btn--black">
  <span>WATCH TRAILER</span>
</button>

<!-- Warning Red -->
<button class="cp-btn cp-btn--red">
  <span>BREACH PROTOCOL</span>
</button>
```

### B. Chamfered Card Panels (`.cp-card`)
Data modules and news tiles with corner notches:

```html
<div class="cp-card cp-card-notch">
  <h3 style="color: var(--cp-yellow); margin-bottom: 8px;">DATA MODULE /// 01</h3>
  <p style="color: var(--cp-text-muted);">
    System diagnostic complete. Neural link calibrated.
  </p>
</div>
```

### C. Glitch Text & Chromatic Aberration
Triggers continuous RGB split on hover:

```html
<h1 class="refinery cp-glitch">NIGHT CITY 2077</h1>
```

### D. Cyber Terminal Input
Dark translucent field with neon-cyan focus outline:

```html
<div class="cp-input-group">
  <input type="text" class="cp-input" placeholder="ENTER ACCESS CODE..." />
</div>
```

---

## 4. Atmospheric Shaders & Interactive FX

Include `cyberpunk-core.css` and `cyberpunk-fx.js`:

```html
<!-- Activate CRT scanlines & grain by adding class to body -->
<body class="cp-scanlines">
  <!-- Top scroll progress bar -->
  <div id="cpScrollProgress"></div>

  <!-- Page Content -->

  <!-- Interactive Audio, Parallax & Scrambler Engine -->
  <script src="../js/cyberpunk-fx.js"></script>
</body>
```

### What `cyberpunk-fx.js` provides automatically:
1. **Zero-Audio File Synthesis:** Generates authentic tactile high-frequency micro-clicks on hover using procedural Web Audio oscillators.
2. **Viewport Mouse Parallax:** Depth tracking on mousemove across designated layers.
3. **Decryption Scrambler:** Calling `CyberpunkKit.scramble.scramble(element)` animates alphanumeric noise before resolving text.
4. **Resilient Autoplay:** Automatically unlocks background video streams even under strict browser autoplay policies.

---

## 5. Agent Instructions for Building New Cyberpunk Pages

When asked to build a page, dashboard, or component with this kit:
1. Link `css/cyberpunk-core.css` in the `<head>`.
2. Add class `cp-scanlines` to `<body>`.
3. Add `<div id="cpScrollProgress"></div>` directly beneath `<body>`.
4. Compose layout using `.refinery` for headlines, `.cp-btn` for actions, and `.cp-card` for content modules.
5. Link `js/cyberpunk-fx.js` before `</body>`.
