# Cyberpunk 2077 UI Kit & Agent Design System

<p align="center">
  <img src="https://img.shields.io/badge/VERSION-1.0.0-yellow.svg?style=for-the-badge&logo=cyberpunk2077&logoColor=black&color=fcee0a" alt="Version 1.0.0" />
  <img src="https://img.shields.io/badge/LICENSE-MIT-red.svg?style=for-the-badge&color=fe1038" alt="License MIT" />
  <img src="https://img.shields.io/badge/CORS-ZERO_DEPENDENCY-cyan.svg?style=for-the-badge&color=00f0ff" alt="Zero Dependency" />
  <img src="https://img.shields.io/badge/AUDIO-WEB_AUDIO_API-black.svg?style=for-the-badge&color=12131c" alt="Web Audio API" />
</p>

A production-grade, self-contained frontend design system and UI toolkit capturing the complete visual and interactive identity of CD PROJEKT RED's **Cyberpunk 2077** web portal (`https://www.cyberpunk.net/`).

Engineered for game developers, UI/UX designers, and autonomous AI agents building dark-future, sci-fi, HUD, and cyberpunk interfaces.

---

## Key Features

- **Genuine Typefaces (Offline & CORS-Free):**
  - High-impact display headlines: `Refinery-25` Semi-Bold (embedded Base64 binary)
  - UI, navigation, and badges: `BlenderProBold` 700 (embedded Base64 binary)
  - Body, lore, and terminal inputs: `BlenderProBook` 400 (embedded Base64 binary)
  - Zero external font fetching. Works identically offline and over `file:///`.
- **Parametric 45-Degree Chamfers:**
  - CSS `clip-path: polygon(...)` chamfer cuts across action buttons, cards, and input frames.
- **Atmospheric Netrunner Shaders:**
  - Dual-axis CRT scanline overlay with continuous vertical sweep animations.
  - Interactive chromatic aberration (`#00f0ff` / `#fe1038` RGB split) on hover.
- **Hardware Audio Synthesis (Zero Audio Files):**
  - Procedural Web Audio API oscillator synthesizing authentic tactile micro-clicks on hover without downloading `.mp3` or `.wav` assets.
- **AI Agent Skill Specification (`SKILL.md`):**
  - Native machine-readable specification allowing AI coding assistants (Antigravity, Claude, Cursor) to compose on-brand pages instantly.
- **Automated GitHub Pages:**
  - Includes ready-to-run GitHub Actions workflow deploying `demo/` with zero configuration.

---

## Repository Structure

```
cyberpunk-2077-ui-kit/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD
├── css/
│   ├── cyberpunk-core.css        # Core tokens, Base64 fonts, buttons, cards, CRT FX
│   └── cyberpunk-home.css        # Full CDPR production stylesheet
├── js/
│   ├── cyberpunk-fx.js           # Audio synthesis, parallax, glitch scrambler, scroll
│   └── *.js                      # Local Webpack bundles
├── fonts/                        # Raw .woff2 font binaries (Refinery, BlenderPro)
├── templates/
│   └── template-blank.html       # Minimal agent starter boilerplate
├── demo/
│   ├── index.html                # Full 1:1 Live Cyberpunk 2077 showcase clone
│   ├── css/
│   └── js/
├── SKILL.md                      # AI Agent specification and component recipes
├── README.md                     # Documentation
├── LICENSE                       # MIT License with fair-use attribution
└── package.json                  # Scripts & metadata
```

---

## Quickstart

### Option 1: Local Preview
```bash
# Clone the repository
git clone https://github.com/Aryansingh0783/cyberpunk-2077-ui-kit.git
cd cyberpunk-2077-ui-kit

# Launch the full showcase demo
npx serve demo
```

### Option 2: Starter Boilerplate
Open `templates/template-blank.html` in your browser. It includes fonts, tokens, and FX pre-linked.

---

## Design Tokens & Palette

| CSS Variable | Hex Code | Usage |
|---|---|---|
| `--cp-yellow` | `#fcee0a` | Primary CTA, marquee headlines, active borders |
| `--cp-cyan` | `#00f0ff` | Tech accent, glitch chromatic split, focus glow |
| `--cp-red` | `#fe1038` | Danger alerts, secondary punch, Edgerunners theme |
| `--cp-bg-primary`| `#0d0e15` | Default page background |
| `--cp-bg-card` | `rgba(13, 14, 21, 0.85)` | HUD panels, floating review cards |

---

## Component Usage

### 1. Chamfered Cyber Buttons (`.cp-btn`)
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
```

### 2. Chamfered Card Panels (`.cp-card`)
```html
<div class="cp-card cp-card-notch">
  <h3 style="color: var(--cp-yellow);">SECTOR 04 /// DOGTOWN</h3>
  <p>Militia patrol active. Netrunner clearance required.</p>
</div>
```

### 3. Glitch Text with Chromatic Aberration
```html
<h1 class="refinery cp-glitch">CYBERPUNK 2077</h1>
```

### 4. Atmospheric Shaders & Audio FX
```html
<!-- Add scanlines to body -->
<body class="cp-scanlines">
  <div id="cpScrollProgress"></div>

  <!-- Content -->

  <!-- Load procedural audio & interaction engine -->
  <script src="js/cyberpunk-fx.js"></script>
</body>
```

---

## AI Agent Integration

This kit includes a structured [`SKILL.md`](./SKILL.md). In an agentic environment (such as Google Antigravity, Claude, or Cursor), direct the agent to read `SKILL.md` to immediately unlock zero-shot generation of pixel-perfect Cyberpunk pages.

---

## License & Legal Attribution

Distributed under the [MIT License](./LICENSE).

**Disclaimer:** "Cyberpunk" and "Cyberpunk 2077" are registered trademarks of CD PROJEKT S.A. This project is an educational design system and developer research artifact.
