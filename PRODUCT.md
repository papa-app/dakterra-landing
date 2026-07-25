# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

This repo is the public marketing landing for the Dakterra mobile app. The web surface is the landing itself; the mobile app is not in this repo.

## Users

Smallholder farmers across Colombia and Latin America (B2C). They own or manage one to ten small fincas — coffee, papa, arroz, mixed livestock-and-crop — and run their temporada largely by hand, on foot, and with intermittent or no mobile signal. They hire Dakterra to keep a usable record of their farm (events, money, crop health) without needing to type, without needing signal, and without needing to be tech experts.

Audience language: Spanish. Default dialect is Colombian (`es-CO`), but copy is accessible across Latin American Spanish.

## Product Purpose

Dakterra is an agricultural management app that lets a smallholder farmer:

- Log events — siembras, gastos, cosechas — by voice into a digital bitácora that persists offline.
- Monitor the health of each plot via NDVI satellite imagery drawn on a map of the finca.
- Receive weather alerts (rain, frost, heat) for the exact polygon of their farm, not the region.
- See a financial breakdown of each temporada: distribución de gastos (insumos vs. jornales), ganancia por lote.

Success means a smallholder farmer can run a temporada with dirty hands, no signal, and end it knowing exactly what they spent and what they earned.

## Positioning

Dakterra's meaningfully different position is the combination, in the **free tier**, of:

1. Voice-first logging (input of record is the voice, not the keyboard).
2. Full offline persistence with later sync.
3. Per-plot NDVI satellite monitoring.
4. Plot-specific (polygon-precise) weather alerts, not regional forecasts.

A neighboring agrotech product could not truthfully copy all four. Large-enterprise farm tools are not built for offline use or voice input; consumer farm apps typically do not offer per-plot NDVI or polygon-precise weather; and the combination is rarely free. The "free" qualifier is load-bearing: this stack must remain reachable without payment.

## Operating Context

- Field environment: bright sun, dirty hands, intermittent or absent mobile signal, hands frequently full.
- Workflow: short voice-led interactions during the day (log a gasto, mark a fumigación) plus seasonal planning around siembra and cosecha.
- Tools Dakterra replaces: the cuaderno and hoja de cálculo the farmer currently uses; regional weather apps that don't know the polygon.
- Rituals: a temporada starts with a siembra and ends with a cosecha and a financial reckoning.
- Languages: Spanish only at launch. Copy uses a field-worker register, not an enterprise-buyer register.

## Capabilities and Constraints

Confirmed capabilities the product (or its public landing) represents today:

- Voice-driven event logging with AI structuring.
- Offline-first persistence; sync on reconnect.
- NDVI satellite health monitoring per user-drawn polygon.
- Plot-specific weather alerts for rain, frost, and heat.
- Financial breakdown: distribución de gastos, ganancia por lote.
- Multi-plot support and comparison between fincas or temporadas.
- Public marketing landing in Spanish, optimized for Colombian and broader LatAm reach.

Confirmed constraints:

- Spanish-only at launch; no English-localized copy committed.
- No real published app store links yet. The landing carries placeholder "Próximamente en Google Play / App Store" markers.
- The web repo only contains the landing; the mobile app code lives elsewhere.

Explicitly undecided product facts (do not invent answers):

- Paid plan structure beyond "a free tier exists with the full differentiator stack."
- Launch date for the mobile app.
- Whether a desktop or web app will accompany the mobile app.
- Whether the app store launch will be Colombia-first or multi-country.
- Specific pricing, customer count, or retention numbers.

## Brand Commitments

- Name: **Dakterra** (Dak + terra).
- Voice: warm, practical, jargon-light Spanish. Uses "tú". Speaks to the field worker, not to enterprise buyers. No SaaS-speak.
- Identity accents: leaf iconography and a green-accent wordmark splitting "Dak" from "terra".
- Spanish-only at launch.
- The incumbent landing already commits to a dark theme with high-contrast green for sun-readable use; this is an incumbent visual choice and is documented in DESIGN.md when one is written, not invented here.

## Evidence on Hand

None currently verified. Future work must not invent evidence.

**Aspirational claims explicitly out of bounds.** The following items on the incumbent landing are aspirational and must not appear in the product record or be presented as verified evidence in any future work:

- "+2.400 agricultores activos" stat.
- "4.9★ valoración promedio" rating.
- The three named testimonials: Carlos Mendoza (Productor de Café · Huila, Colombia), Rosa Quispe (Agricultora de Papa · Puno, Perú), Javier Torres (Ganadero y Arrocero · Meta, Colombia).

Any future work that touches the landing must remove, replace, or leave an explicit placeholder marker for these items. They must not be silently preserved as if real, and they must not be quietly upgraded to look more real without the user's confirmation that real evidence exists.

Assets physically present in the repo (existence verified, content meaning unverified unless stated):

- `/public/hero-phone.webp`, `/public/satellite-map.webp`, `/public/farmer-field.webp` — image files. Whether they depict real Dakterra UI/photography vs. generic mocks is unverified.
- `/public/vite.svg` — Vite logo, dev artifact.
- `/public/auth/confirmed.html` — placeholder auth confirmation page.

External assets referenced but not verified:

- `https://dakterra.com/og-image.png` — referenced in meta tags; existence not verified.
- App store listings — none yet.

## Product Principles

1. Built FROM the campo, not adapted to it. The farmer's reality — sun, dirt, no signal, hands full — sets the constraints; the interface adapts to them.
2. Free is the primary tier. The differentiator stack (voice + offline + per-plot NDVI + polygon-precise weather) is usable without payment. Paid plans add scale and operational depth, never access to the core capability.
3. Voice over typing, always. Voice is the input of record; typing is fallback.
4. Data fidelity over feature breadth. The farmer trusts Dakterra because the numbers — cuánto gastó, cuánto ganó, dónde está la plaga — are honest. Surface real data, even when incomplete.
5. Spanish of the field worker, not of the enterprise buyer. Jargon-light, second person, no SaaS-speak.

## Accessibility & Inclusion

- High-contrast UI legible under direct sunlight (dark theme is incumbent).
- Voice-first interaction removes the requirement to type, supporting users with low tech literacy or with hands occupied in the field.
- Large hit targets (44px minimum is incumbent convention).
- Offline-first means users in low-connectivity regions are not excluded.
- Spanish-first content at launch; no English-localized copy is committed.