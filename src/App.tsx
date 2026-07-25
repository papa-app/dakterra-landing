/*
THESIS: This surface is a silkscreened bulletin, not a SaaS landing. It refuses
the AI-gradient dark-mode glow, the SaaS card grid, the mock dashboard, the
"empodera / transforma / sin complicaciones" copy.

OWN-WORLD: Cream paper (#f0e8d4), terracotta ink (#c84a2e), avocado ink
(#7d8c3f), ink-black (#1f1a14). Anton for display, Special Elite for
everything else. Hand-drawn-feel arrows, numbered callouts, ruled registration
lines, halftone screen over photographs.

STORY: A smallholder farmer reads the headline, sees the registration card,
understands the three mechanism plates, leaves name + email or phone on the
waitlist.

FIRST VIEWPORT: Hero — Anton headline dominates left three columns
("LLEVA EL CONTROL DE TU CULTIVO / EN TU BOLSILLO, AUNQUE / NO TENGAS SEÑAL"),
terracotta subhead below, terracotta sun + farmer photo top-right, panoramic
landscape strip + Ficha de Inscripción overlapping below. Primary action is
the INSCRIBIRME button in the ficha.

FORM: Comp 2 (LA SECUENCIA), equal-weight editorial stack — hero, three
plates, proof beat, footer all receive comparable scale and breathing room.
Seed key: 7a72126b, assigned index 5 (1970s–80s Latin American agrarian-reform
silkscreen poster).
*/

import { useState, type FormEvent } from "react"

function CadastralMap() {
  return (
    <svg
      viewBox="0 0 600 450"
      className="cadastral-map halftone-frame"
      role="img"
      aria-label="Mapa catastral de la finca con un polígono de lote y un marcador de posición"
    >
      <g stroke="var(--ink)" fill="none" opacity="0.28" strokeWidth="1">
        <path d="M 50,90 Q 200,70 350,100 T 580,130" />
        <path d="M 30,150 Q 180,130 330,160 T 560,190" />
        <path d="M 60,210 Q 210,190 360,220 T 590,250" />
        <path d="M 40,270 Q 190,250 340,280 T 570,310" />
        <path d="M 70,330 Q 220,310 370,340 T 590,370" />
      </g>

      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
          <line
            x1="0"
            y1="0"
            x2="6"
            y2="6"
            stroke="var(--ink)"
            strokeWidth="0.5"
            opacity="0.45"
          />
        </pattern>
      </defs>
      <path
        d="M 100,70 L 470,50 L 520,330 L 150,360 Z"
        fill="url(#hatch)"
        opacity="0.7"
      />

      <path
        d="M 150,130 L 420,100 L 470,290 L 180,330 Z"
        fill="var(--avocado)"
        fillOpacity="0.18"
        stroke="var(--ink)"
        strokeWidth="2"
      />

      <text
        x="285"
        y="200"
        fontFamily="Special Elite, monospace"
        fontSize="14"
        fill="var(--ink)"
        textAnchor="middle"
        letterSpacing="0.06em"
      >
        LOTE 2 · 3.2 ha
      </text>
      <text
        x="285"
        y="220"
        fontFamily="Special Elite, monospace"
        fontSize="10"
        fill="var(--terracotta)"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        NDVI 0.72
      </text>

      <g transform="translate(305, 250)">
        <line x1="0" y1="-32" x2="0" y2="-18" stroke="var(--terracotta)" strokeWidth="2.5" />
        <circle r="18" fill="var(--terracotta)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="6" fill="var(--cream)" />
      </g>

      <g transform="translate(545, 50)">
        <polygon points="-7,8 7,8 0,-22" fill="var(--terracotta)" />
        <line x1="0" y1="8" x2="0" y2="22" stroke="var(--ink)" strokeWidth="1.5" />
        <text
          x="0"
          y="38"
          fontFamily="Anton, sans-serif"
          fontSize="14"
          fill="var(--ink)"
          textAnchor="middle"
        >
          N
        </text>
      </g>

      <g transform="translate(40, 410)">
        <line x1="0" y1="0" x2="120" y2="0" stroke="var(--ink)" strokeWidth="2" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="var(--ink)" strokeWidth="2" />
        <line x1="60" y1="-5" x2="60" y2="5" stroke="var(--ink)" strokeWidth="2" />
        <line x1="120" y1="-5" x2="120" y2="5" stroke="var(--ink)" strokeWidth="2" />
        <text x="0" y="22" fontFamily="Special Elite, monospace" fontSize="10" fill="var(--ink)">
          0
        </text>
        <text
          x="60"
          y="22"
          fontFamily="Special Elite, monospace"
          fontSize="10"
          fill="var(--ink)"
          textAnchor="middle"
        >
          500 m
        </text>
        <text x="120" y="22" fontFamily="Special Elite, monospace" fontSize="10" fill="var(--ink)">
          1 km
        </text>
      </g>

      <text
        x="300"
        y="438"
        fontFamily="Special Elite, monospace"
        fontSize="10"
        fill="var(--avocado)"
        textAnchor="middle"
        letterSpacing="0.12em"
      >
        SINTÉTICO
      </text>
    </svg>
  )
}

function AlertTriangle() {
  return (
    <svg
      viewBox="0 0 60 60"
      className="alert-triangle"
      role="img"
      aria-hidden="true"
    >
      <polygon
        points="30,5 55,50 5,50"
        fill="var(--terracotta)"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <text
        x="30"
        y="44"
        fontFamily="Anton, sans-serif"
        fontSize="28"
        fill="var(--cream)"
        textAnchor="middle"
        fontWeight="400"
      >
        !
      </text>
    </svg>
  )
}

function PlateArrow() {
  return (
    <svg viewBox="0 0 28 28" className="plate-arrow" aria-hidden="true">
      <path
        d="M 4 14 Q 14 6 22 14 M 22 14 L 18 10 M 22 14 L 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 60 60" className="quote-mark" aria-hidden="true">
      <path
        d="M0 30 Q0 0 30 0 L30 18 Q18 18 18 30 Q18 42 30 42 L30 60 Q0 60 0 30 Z M30 30 Q30 0 60 0 L60 18 Q48 18 48 30 Q48 42 60 42 L60 60 Q30 60 30 30 Z"
        fill="var(--avocado)"
      />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <polyline
        points="3,6 12,14 21,6"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Ficha() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState<"email" | "telefono" | "">("")
  const [number, setNumber] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [stampedNumber] = useState(
    () => String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0"),
  )

  const canSubmit =
    name.trim().length > 0 && contact !== "" && number.trim().length > 0

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canSubmit || submitting) return

    setSubmitting(true)
    setError(false)

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contacto@dakterra.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Nombre: name,
            TipoContacto: contact,
            Contacto: number,
            _subject: "Nueva inscripción — Lista de espera Dakterra",
            _template: "table",
            _honey: "",
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="ficha ficha-stamped" role="status" aria-live="polite">
        <div className="stamp">INSCRITO · N° {stampedNumber}</div>
        <p className="stamp-note">Te avisamos cuando esté lista la app.</p>
      </div>
    )
  }

  const contactLabel =
    contact === "email"
      ? "Tu email"
      : contact === "telefono"
        ? "Tu teléfono"
        : "Email o teléfono"

  const contactPlaceholder =
    contact === "email"
      ? "tu@correo.com"
      : contact === "telefono"
        ? "300 123 4567"
        : "tu@correo.com  o  300 123 4567"

  return (
    <form className="ficha" onSubmit={handleSubmit} noValidate>
      <h2 className="ficha-title">Ficha de inscripción</h2>

      <label className="ficha-field">
        <span className="ficha-field-label">Nombre completo</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
        />
      </label>

      <div className="ficha-field ficha-contact">
        <span className="ficha-field-legend">Contacto</span>
        <div className="checkbox-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={contact === "email"}
              onChange={() => setContact(contact === "email" ? "" : "email")}
            />
            <span>Email</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={contact === "telefono"}
              onChange={() =>
                setContact(contact === "telefono" ? "" : "telefono")
              }
            />
            <span>Teléfono</span>
          </label>
        </div>
      </div>

      <label className="ficha-field">
        <span className="ficha-field-label">{contactLabel}</span>
        <input
          type={contact === "email" ? "email" : "tel"}
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          autoComplete={contact === "email" ? "email" : "tel"}
          placeholder={contactPlaceholder}
          required
        />
      </label>

      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && (
        <p className="ficha-error" role="alert">
          No pudimos enviar tu inscripción. Intenta de nuevo, por favor.
        </p>
      )}

      <button
        type="submit"
        className="press-mark"
        disabled={!canSubmit || submitting}
      >
        {submitting ? "Enviando…" : "Inscribirme"}
      </button>
    </form>
  )
}

export default function App() {
  return (
    <div className="paper">
      <a href="#main" className="skip-link" style={{ position: "absolute", left: "-9999px" }}>
        Saltar al contenido principal
      </a>

      <main id="main">
        <section className="hero" aria-label="Hero: Dakterra, lista de espera">
          <div className="hero-text">
            <h1 className="hero-headline">
              Lleva el control de tu cultivo en tu bolsillo, aunque no tengas señal
            </h1>
            <p className="hero-subhead">
              Registra por voz. Ve tu finca en el mapa. Recibe alertas del clima
              exactas para tu terreno.
            </p>
          </div>

          <div className="hero-sun-wrap">
            <div className="hero-sun" aria-hidden="true">
              <div className="hero-sun-frame halftone-frame">
                <img
                  src="/image1.png"
                  alt=""
                  className="halftone"
                  fetchPriority="high"
                />
                <div className="halftone-screen" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="hero-landscape">
            <div className="halftone-frame" aria-hidden="true">
              <img src="/image2.png" alt="" className="halftone" loading="lazy" />
              <div className="halftone-screen" aria-hidden="true" />
            </div>
            <div className="hero-ficha">
              <Ficha />
            </div>
          </div>
        </section>

        <section className="plates" aria-label="Cómo funciona Dakterra">
          <h2 className="section-label">Cómo funciona</h2>
          <div className="plates-grid">
            <article className="plate">
              <div className="plate-num" aria-hidden="true">
                01
              </div>
              <h3 className="plate-title">Habla</h3>
              <div className="plate-crop halftone-frame">
                <img
                  src="/image3.png"
                  alt="Agricultor hablando con la app en su teléfono"
                  className="halftone"
                  loading="lazy"
                />
                <div className="halftone-screen" aria-hidden="true" />
              </div>
              <p className="plate-caption">
                Registra por voz lo que está pasando en tu cultivo. Fácil, rápido y
                sin escribir.
              </p>
            </article>

            <article className="plate">
              <div className="plate-num" aria-hidden="true">
                02
              </div>
              <h3 className="plate-title">Tu finca en el mapa</h3>
              <div className="plate-crop">
                <CadastralMap />
              </div>
              <p className="plate-caption">
                Visualiza cada lote de tu finca con índices NDVI actualizados para
                decidir mejor.
              </p>
              <PlateArrow />
            </article>

            <article className="plate">
              <div className="plate-num" aria-hidden="true">
                03
              </div>
              <h3 className="plate-title">El clima de tu terreno</h3>
              <div className="plate-crop halftone-frame">
                <img
                  src="/image4.png"
                  alt="Tormenta aproximándose a una finca en la montaña"
                  className="halftone"
                  loading="lazy"
                />
                <div className="halftone-screen" aria-hidden="true" />
                <AlertTriangle />
              </div>
              <p className="plate-caption">
                Recibe alertas del clima precisas para tu terreno, no para el pueblo.
              </p>
              <PlateArrow />
            </article>
          </div>
        </section>

        <section className="proof" aria-label="Nota del equipo">
          <div className="proof-frame">
            <div className="proof-marker" aria-label="Marcado como contenido sintético">
              Sintético
            </div>
            <QuoteMark />
            <p className="proof-text">
              Probamos Dakterra con tres lotes de papa en Cundinamarca. Ahora sabemos
              cuándo regar, cuándo aplicar y cuándo esperar. Menos pérdidas. Más
              tranquilidad.
            </p>
            <p className="proof-sig">— Equipo Dakterra</p>
          </div>
        </section>
      </main>

      <footer className="imprint" aria-label="Pie de página institucional">
        <div className="imprint-col">
          <span
            className="wordmark-img"
            role="img"
            aria-label="Dakterra"
          />
          <p className="tagline">
            Tecnología campesina.
            <br />
            Decisiones en tu terreno.
          </p>
        </div>

        <div className="imprint-col">
          <h4>Contacto</h4>
          <p>
            <EnvelopeIcon />
            contacto@dakterra.com
          </p>
          <p>
            <PhoneIcon />
            +57 321 5700 339
          </p>
        </div>
      </footer>
    </div>
  )
}