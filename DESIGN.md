---
name: Dakterra
description: Silkscreen agrarian-reform poster system for the Dakterra pre-launch waitlist landing
colors:
  cream-paper: "#f0e8d4"
  terracotta-ink: "#c84a2e"
  avocado-ink: "#7d8c3f"
  ink-black: "#1f1a14"
  cobalt-blue: "#2a4d7c"
  ochre-mustard: "#c8954a"
typography:
  display:
    fontFamily: "Anton, Oswald, Impact, sans-serif"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0em"
  label:
    fontFamily: "Special Elite, Courier Prime, Courier, monospace"
    fontWeight: 400
  body:
    fontFamily: "Special Elite, Courier Prime, Courier, monospace"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  sm: "2px"
spacing:
  plate-pad: "24px"
  section-pad: "80px"
  container: "1200px"
components:
  press-mark-button:
    backgroundColor: "transparent"
    textColor: "{colors.terracotta-ink}"
    border: "2px solid {colors.terracotta-ink}"
    padding: "12px 32px"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  ficha-ruled-line:
    borderBottom: "1px solid {colors.ink-black}"
    backgroundColor: "transparent"
  plate-frame:
    backgroundColor: "{colors.cream-paper}"
    border: "1px solid {colors.ink-black}"
    padding: "{spacing.plate-pad}"
    rounded: "{rounded.none}"
  proof-frame:
    backgroundColor: "{colors.cream-paper}"
    border: "1px solid {colors.ink-black}"
    padding: "32px"
    rounded: "{rounded.none}"
  footer-frame:
    borderTop: "1px solid {colors.ink-black}"
    padding: "48px 0"
---

# Design System: Dakterra

## Overview

**Creative North Star: "El cartel de Reforma Agraria."**

A single-page web landing treated as a silkscreened bulletin from the INCORA-era Latin American agrarian reform movement: two-color press-print on cream paper stock, hand-set in a condensed display face with a typewriter running voice. Every mark is a press of ink; nothing is rendered, glows, or darkens. The visitor reads it like an institutional bulletin posted at the cooperative — not a SaaS landing. The brand does not perform; the form speaks for itself.

The committed first-surface expression is the equal-weight editorial stack (LA SECUENCIA): hero, three mechanism plates, proof beat, imprint footer all receive comparable scale and breathing room, top-to-bottom like reading a series of silkscreened plates.

**Key Characteristics:**
- Silkscreen press-print aesthetic, no digital ornament.
- Two-color printing: terracotta + avocado + ink-black on cream paper.
- Bold condensed display face at poster scale; typewriter face for everything else.
- Hand-drawn-feel arrows, numbered callouts, ruled registration lines.
- Halftone screen overlay on photographic content, applied in CSS for consistency.
- Flat, ink-on-paper: no shadows, no glow, no gradients, no dark mode.

## Colors

The palette is a four-color silkscreen run: cream paper, terracotta primary, avocado secondary, ink black, with cobalt and ochre reserved as occasional spot accents.

### Primary
- **Cream Paper** (`#f0e8d4`): the ground of every section. Warm, slightly yellowed newsprint. Never pure white, never gray. Sets the sun-readable contrast and the silkscreen feel.
- **Terracotta Ink** (`#c84a2e`): the primary accent. Carries subheads, callout numbers, the arrows between plates, the sun backdrop, the INSCRIBIRME button outline, the wordmark suffix split color, and the press-mark feedback. Saturated enough to feel like a press run, not a screen render.

### Secondary
- **Avocado Ink** (`#7d8c3f`): the secondary accent. Carries the "terra" half of the wordmark, the proof-beat quote mark, the SECTION labels in some treatments, the SINTÉTICO marker, and small institutional touches. Reads as printed olive, not as modern UI green.

### Tertiary
- **Ink Black** (`#1f1a14`): the type. Slightly warm, never neutral black. Carries every headline, every label, every body sentence. The deep ink that anchors the cream paper.

### Neutral
- Cream Paper serves as the only neutral. There is no gray, no off-gray, no neutral mid-tone in this system.

### Accent (reserved, use sparingly)
- **Cobalt Blue** (`#2a4d7c`): for occasional callouts in plates (e.g. NDVI map accent, weather alert triangle). Never used as a background, never used for headline type.
- **Ochre Mustard** (`#c8954a`): for warmth accents in secondary text or illustration. Reserved. Never used as a background.

### Named Rules

**The Press-Run Rule.** The palette is a four-color silkscreen run. Any fifth color in a render is a print error. Cobalt and ochre are spot accents, never page-scale.

**The Two-Color Rule.** Every plate uses at most two of {terracotta, avocado, ink} at full saturation, plus cream as ground. A plate that uses all three at full saturation has lost the print rhythm.

## Typography

**Display Font:** Anton (with Oswald / Impact / system condensed sans as fallback)
**Label Font:** Special Elite (with Courier Prime / Courier / monospace as fallback)
**Body Font:** Special Elite (with Courier Prime / Courier / monospace as fallback)

**Character:** Anton is a very condensed, near-vertical sans designed for poster scale. It has one weight, sits all-caps, and uses scale and line-height to carry hierarchy. Special Elite is a typewriter face based on an actual typewriter, slightly rough and uneven, with the press-printed cadence of a 1970s typewriter. The pairing says institutional bulletin, not SaaS dashboard.

### Hierarchy
- **Display** (Anton Regular, `clamp(2.5rem, 8vw, 5.5rem)`, line-height 0.95): hero headline, plate titles. Always uppercase. Tracking 0.
- **Section Label** (Special Elite, 1rem, uppercase, letter-spacing 0.06em): "CÓMO FUNCIONA", "FICHA DE INSCRIPCIÓN", "SINTÉTICO", "CONTACTO", "INSCRIBIRME".
- **Body** (Special Elite, 1rem-1.125rem, line-height 1.55): plate captions, ficha field labels, proof-beat quote, footer body. Left-aligned, ragged right.
- **Caption** (Special Elite, 0.875rem): small annotations ("Te avisamos cuando esté lista la app" stamp line), footer micro-copy.

### Named Rules

**The Anton-Only Rule.** Headlines use Anton or a fallback of the same family. They do not use a serif. They do not use a "modern grotesque." The display voice is one face, always.

**The Typewriter-Voice Rule.** Body, labels, captions, and annotations all use Special Elite. The cadence is one voice: the press-room typewriter. Mixing a humanist sans here breaks the bulletin.

## Layout

A vertical single-column stack on mobile, generous side margins on desktop. Sections stack from top to bottom with clear institutional separation.

- Container: max-width 1200px, centered.
- Section padding: 80px vertical on desktop, 48px on mobile.
- Plate padding: 24px internal.
- Hero: full-bleed left column, registration card overlaps right third.
- Plates: 3 columns on desktop (33.33% each, 24px gutters), stacked on mobile.
- Footer: 3 columns on desktop, stacked on mobile.

## Elevation & Depth

This system has no shadows. Depth is conveyed through:
- **Ink density** (heavy type reads as closer to the eye).
- **Overlap** (the registration card sits on top of the hero landscape strip).
- **Screen-print misregistration** (subtle 1-2px offset on the cream paper texture, evoking two-color press drift).
- **Halftone dot pattern** on photographic content (the printed dots read as physical texture).

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. The only depth cues are ink density, overlap, and the halftone screen. No `box-shadow`, no `backdrop-filter`, no glow.

## Shapes

The form language is silkscreen rectangularity:
- **Corners:** no rounded corners. Every rectangle is sharp. The only deviation is the terracotta sun circle in the hero, which is a deliberate print element.
- **Borders:** 1px ink-black or 2px terracotta. Used as ruled lines on the registration card and as plate frames.
- **Buttons:** press-mark rectangles, never pills. The INSCRIBIRME button is a 2px terracotta outline with terracotta type inside.

## Components

### Press-Mark Button (INSCRIBIRME)
- **Shape:** rectangle, 0px radius, 2px terracotta border.
- **Background:** transparent (lets the cream paper show).
- **Text:** Special Elite, terracotta, uppercase, letter-spacing 0.06em.
- **Padding:** 12px 32px.
- **Hover:** invert (terracotta fill, cream type).
- **Focus:** 2px ink-black outline, 2px offset.
- **Disabled:** terracotta outline at 50% opacity, type at 50% opacity.

### Registration Card (Ficha de Inscripción)
- **Shape:** rectangle, 0px radius, 1px ink-black border, cream background.
- **Internal structure:** terracotta section title at top, then ruled fields (1px ink-black bottom border on each), then a press-mark button at the bottom-right.
- **Field labels:** Special Elite, uppercase, 0.75rem, letter-spacing 0.06em, ink-black.
- **Checkbox:** small terracotta square (HTML `<input type="checkbox">` styled to match, 18x18 with 1px terracotta border).
- **Field input:** transparent background, no border, ink-black type, full-width.

### Numbered Plate (Cómo Funciona 01 / 02 / 03)
- **Shape:** rectangle, 0px radius, 1px ink-black border, cream background.
- **Internal structure:** large terracotta numeral, plate title in Anton (uppercase), halftone photographic crop, body caption in Special Elite, optional terracotta arrow on the right edge (between plates).
- **Number:** Anton, `clamp(3.5rem, 8vw, 5rem)`, terracotta, line-height 1.
- **Title:** Anton, ~1.5rem, ink-black, uppercase.
- **Crop:** square or 4:3 aspect, halftone screen applied via CSS.
- **Caption:** Special Elite, 1rem, ink-black, line-height 1.55.

### Proof Beat
- **Shape:** rectangle, 0px radius, 1px ink-black border, cream background.
- **Internal structure:** large avocado quotation mark icon (SVG, top-left), typewriter quote text in the body, terracotta signature line ("— Equipo Dakterra") at the bottom, small "SINTÉTICO" marker box at the top-right.
- **SINTÉTICO marker:** 1px avocado border, avocado type, Special Elite 0.75rem uppercase, positioned absolute top-right.

### Imprint Footer
- **Shape:** full-width rectangle, 1px ink-black border-top (no left/right/bottom border), cream background.
- **Internal structure:** two columns — wordmark + tagline (left), contact (right). All in Special Elite.
- **Section headers:** Special Elite, 0.875rem, uppercase, terracotta, letter-spacing 0.06em.
- **Body:** Special Elite, 0.875rem, ink-black.

### Signature: Dakterra Wordmark
- **Lockup:** "Dak" in ink-black Anton + "terra" in avocado Anton, with a small avocado leaf icon between or above the suffix.
- **Size:** scales from 2rem (mobile footer) to 3rem (desktop footer).

## Do's and Don'ts

### Do:
- **Do** use Anton for every headline, uppercase, no tracking adjustments.
- **Do** use Special Elite for every body, label, and caption.
- **Do** apply the halftone screen overlay in CSS to every photographic content (SVG filter or repeating-radial-gradient pattern at ~10% scale).
- **Do** use terracotta for primary accent work and avocado for secondary/wordmark/quote-mark work.
- **Do** use ruled lines (1px ink-black bottom border) for every input field in the registration card.
- **Do** mark all demonstrative data with a small "SINTÉTICO" marker in avocado.

### Don't:
- **Don't** use rounded corners anywhere except the deliberate terracotta sun circle in the hero.
- **Don't** use shadows, glows, gradients, glass, or blur as decoration.
- **Don't** use dark mode. The cream paper is the ground.
- **Don't** use modern grotesque sans (Inter, Roboto, DM Sans, Hanken Grotesk) for headlines or body.
- **Don't** use stock photos of farmers with smartphones — every raster asset must be a hand-curated print photograph or a hand-drawn SVG.
- **Don't** include the banned aspirational claims (the +2,400 stat, the 4.9★ rating, the three named testimonials Carlos Mendoza / Rosa Quispe / Javier Torres) anywhere.
- **Don't** add mock dashboards, fake percentages, or fake charts presented as real data.
- **Don't** add app store badges until the app is actually published.