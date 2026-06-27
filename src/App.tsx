import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Mic,
  Satellite,
  CloudLightning,
  BarChart3,
  ShieldCheck,
  Sun,
  Star,
  Smartphone,
  ChevronRight,
  Leaf,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Users,
  MapPin,
  MessageSquareQuote,
} from "lucide-react"

const features = [
  {
    icon: Mic,
    badge: "Sin conexion",
    badgeColor: "text-[#4ade80] border-[#4ade80]",
    title: "Bitácora Digital Inteligente",
    description:
      "Habla con la app para registrar eventos: siembras, gastos y cosechas. Nuestra inteligencia artificial escucha tu voz y organiza todo automáticamente.",
    highlight: "Funciona aunque no tengas señal.",
    highlightColor: "text-[#4ade80]",
    glow: "glow-border",
  },
  {
    icon: Satellite,
    badge: "Imagenes Satelitales",
    badgeColor: "text-[#60a5fa] border-[#60a5fa]",
    title: "Monitor de Salud de tu Finca",
    description:
      "Dibuja el contorno de tu parcela en el mapa. El satélite analiza la salud de tus cultivos y te muestra qué zonas necesitan riego o tienen plagas.",
    highlight: "Detecta problemas antes de que sea tarde.",
    highlightColor: "text-[#60a5fa]",
    glow: "glow-border",
    glowStyle: { boxShadow: "0 0 0 1px #60a5fa, 0 0 12px rgba(96,165,250,0.25)" },
  },
  {
    icon: CloudLightning,
    badge: "Clima Exacto",
    badgeColor: "text-[#f59e0b] border-[#f59e0b]",
    title: "Alertas del Tiempo para tu Terreno",
    description:
      "Recibe avisos automáticos de lluvias fuertes, heladas o calor extremo basados en la ubicación exacta de tu finca. No para la región, para TU campo.",
    highlight: "Protege tu fertilización y tus cosechas.",
    highlightColor: "text-[#f59e0b]",
    glow: "glow-border-amber",
  },
]

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Productor de Café · Huila, Colombia",
    avatar: "CM",
    text: "Antes perdía plata porque no llevaba bien las cuentas. Con Dakterra sé exactamente cuánto me gasta cada lote y cuánto gano. Fue un cambio total.",
    stars: 5,
  },
  {
    name: "Rosa Quispe",
    role: "Agricultora de Papa · Puno, Perú",
    avatar: "RQ",
    text: "Lo que más me gustó es que puedo hablar con la app en vez de escribir. En el campo uno tiene las manos ocupadas y llenas de tierra. Facilísimo.",
    stars: 5,
  },
  {
    name: "Javier Torres",
    role: "Ganadero y Arrocero · Meta, Colombia",
    avatar: "JT",
    text: "Las alertas del tiempo me salvaron dos veces de perder la fumigación. Me avisó antes de una lluvia que no salía en el pronóstico normal.",
    stars: 5,
  },
]

const trustPoints = [
  {
    icon: Sun,
    title: "Pantalla legible bajo el sol",
    desc: "Letras grandes y colores de alto contraste para usar incluso a pleno sol del mediodía.",
  },
  {
    icon: Mic,
    title: "Sin necesidad de escribir",
    desc: "La app funciona principalmente por voz. Ideal cuando tienes las manos ocupadas en el campo.",
  },
  {
    icon: ShieldCheck,
    title: "Tus datos son solo tuyos",
    desc: "La información de tu finca va cifrada y protegida. Nadie más puede verla.",
  },
  {
    icon: Smartphone,
    title: "Funciona sin señal",
    desc: "Todos tus registros se guardan en el teléfono y se sincronizan solos cuando vuelve el internet.",
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#040504] text-white overflow-x-hidden">
      <Helmet>
        <title>Dakterra — Gestión Agrícola Inteligente para el Campo Latinoamericano</title>
        <meta
          name="description"
          content="Dakterra es la app agrícola con bitácora de voz, monitoreo satelital NDVI y alertas climáticas para tu finca. Funciona sin internet. Diseñada para el campo colombiano y latinoamericano."
        />
<meta
  name="keywords"
  content="app agrícola, monitoreo satelital, NDVI, bitácora de voz, agricultura inteligente, gestión de fincas, alertas climáticas, agrotech, campo colombiano, agricultura latinoamericana, Dakterra, finanzas de cultivo, rentabilidad agrícola, salud del cultivo, fitosanitario, gestión financiera campo, presupuesto agrícola, análisis de cosecha, control de gastos agrícolas"
/>
        <meta name="author" content="Dakterra" />
        <meta property="og:title" content="Dakterra — Controla tu cultivo desde tu bolsillo, incluso sin internet" />
        <meta
          property="og:description"
          content="App agrícola con bitácora por voz, monitoreo satelital NDVI y alertas climáticas para tu finca. Funciona sin internet."
        />
        <meta property="og:image" content="https://dakterra.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://dakterra.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Dakterra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dakterra — Controla tu cultivo desde tu bolsillo, incluso sin internet" />
        <meta
          name="twitter:description"
          content="App agrícola con bitácora por voz, monitoreo satelital NDVI y alertas climáticas para tu finca. Todo offline."
        />
        <meta name="twitter:image" content="https://dakterra.com/og-image.png" />
      </Helmet>

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#4ade80]/20 bg-[#040504]/90 backdrop-blur-md">
        <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2" aria-label="Dakterra, ir al inicio">
            <Leaf className="size-6 text-[#4ade80]" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight text-white">
              Dak<span className="text-[#4ade80]">terra</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#a1a1aa]">
            <a href="#funciones" className="hover:text-[#4ade80] transition-colors">Funciones</a>
            <a href="#analisis" className="hover:text-[#4ade80] transition-colors">Análisis</a>
            <a href="#testimonios" className="hover:text-[#4ade80] transition-colors">Testimonios</a>
            <a href="#modo-campo" className="hover:text-[#4ade80] transition-colors">Modo Campo</a>
          </div>
          <Button
            className="bg-[#4ade80] text-black font-bold hover:bg-[#22c55e] text-sm px-4 py-2 h-10 min-h-[44px] rounded-lg"
            asChild
          >
            <a href="#cta" aria-label="Prueba Dakterra gratis, ir al formulario">Prueba Gratis</a>
          </Button>
        </nav>
      </header>

      <main id="contenido-principal">

      {/* ── HERO ── */}
      <section aria-label="Hero: presentación de Dakterra" className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden grid-texture">
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4ade80]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-7 text-center lg:text-left">
              <Badge
                variant="outline"
                className="border-[#4ade80]/50 text-[#4ade80] bg-[#4ade80]/10 text-sm px-4 py-1.5 rounded-full font-medium inline-flex gap-2"
              >
                <Leaf className="size-3.5" aria-hidden="true" />
                App pensada para el campo colombiano y latinoamericano
              </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Lleva el control de tu{" "}
              <span className="text-[#4ade80] glow-text">cultivo en tu bolsillo</span>
              {", "}
              incluso sin internet.
            </h1>

            <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dakterra es la app diseñada para el campo. Registra por voz, monitorea la salud
              de tus fincas con imágenes satelitales y recibe alertas climáticas exactas para
              tu terreno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#4ade80] text-black font-extrabold text-lg px-8 py-4 h-14 rounded-xl hover:bg-[#22c55e] transition-all pulse-cta min-w-[220px]"
                asChild
              >
                <a href="#cta" aria-label="Prueba Dakterra gratis ahora">
                  Prueba Dakterra Gratis
                  <ChevronRight className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#4ade80]/40 text-[#4ade80] font-bold text-lg px-8 py-4 h-14 rounded-xl hover:bg-[#4ade80]/10 bg-transparent min-w-[180px]"
                asChild
              >
                <a href="#funciones" aria-label="Ver cómo funciona Dakterra">Ver cómo funciona</a>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2">
              {[
                { val: "+2.400", label: "Agricultores activos" },
                { val: "100%", label: "Sin conexión" },
                { val: "4.9★", label: "Valoración promedio" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#4ade80]">{s.val}</div>
                  <div className="text-xs text-[#a1a1aa] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – phone mockup */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-[#4ade80]/10 rounded-full blur-[80px] scale-75" />
            <img
              src="/hero-phone.webp"
              alt="Pantalla del dashboard de Dakterra mostrando gráficos de salud del cultivo"
              className="relative z-10 max-h-[520px] w-auto drop-shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="funciones" aria-label="Funciones principales de Dakterra" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Badge variant="outline" className="border-[#4ade80]/40 text-[#4ade80] mb-4 text-sm px-4 py-1.5">
              Lo que hace Dakterra
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Todo lo que necesitas,{" "}
              <span className="text-[#4ade80]">sin complicaciones</span>
            </h2>
            <p className="mt-4 text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              Tres herramientas pensadas para el trabajo del campo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <Card
                  key={f.title}
                  className={`bg-[#0d110c] border border-[#4ade80]/30 rounded-2xl p-0 ${f.glow} transition-all hover:scale-[1.02] duration-300`}
                  style={f.glowStyle}
                >
                  <CardContent className="p-7 space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="size-14 rounded-xl bg-[#1a1d19] border border-[#4ade80]/20 flex items-center justify-center">
                        <Icon className="size-7 text-[#4ade80]" aria-hidden="true" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs px-3 py-1 rounded-full border ${f.badgeColor} bg-transparent`}
                      >
                        {f.badge}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                      <p className="text-[#a1a1aa] text-base leading-relaxed">{f.description}</p>
                    </div>

                    <div className={`text-sm font-bold flex items-center gap-2 ${f.highlightColor}`}>
                      <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                      {f.highlight}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ANALYTICS DASHBOARD ── */}
      <section id="analisis" aria-label="Panel de análisis y datos de cultivo" className="py-20 sm:py-28 bg-[#0d110c] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <div className="space-y-7">
              <Badge variant="outline" className="border-[#4ade80]/40 text-[#4ade80] text-sm px-4 py-1.5">
                Panel de Análisis
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Toma decisiones basadas en{" "}
                <span className="text-[#4ade80]">datos reales</span>
                {", no en adivinanzas."}
              </h2>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Dakterra te muestra en un solo lugar cuánto gastaste, cuánto ganaste
                y qué tan rentable fue tu cosecha. Sin hojas de cálculo ni cuadernos.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Wallet, text: "Distribución de gastos: insumos vs. jornales" },
                  { icon: TrendingUp, text: "Cálculo automático de ganancia por lote" },
                  { icon: BarChart3, text: "Progreso de tu cosecha en tiempo real" },
                  { icon: Users, text: "Comparativa entre fincas o temporadas" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.text} className="flex items-center gap-4">
                      <div className="size-10 rounded-lg bg-[#4ade80]/15 border border-[#4ade80]/30 flex items-center justify-center shrink-0">
                        <Icon className="size-5 text-[#4ade80]" aria-hidden="true" />
                      </div>
                      <span className="text-white font-medium text-base">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right – dashboard mockup */}
            <div className="space-y-4">
              {/* Satellite map card */}
              <Card className="bg-[#040504] border border-[#4ade80]/30 rounded-2xl overflow-hidden glow-border">
                <CardContent className="p-0">
                  <img
                    src="/satellite-map.webp"
                    alt="Mapa satelital con análisis de vegetación de la finca mostrando zonas saludables y zonas con riesgo"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#a1a1aa] uppercase tracking-wider">Salud del Cultivo</p>
                      <p className="text-lg font-bold text-[#4ade80]">Finca El Porvenir</p>
                    </div>
                    <Badge className="bg-[#4ade80]/20 text-[#4ade80] border border-[#4ade80]/40">
                      Saludable 87%
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Financial breakdown */}
              <Card className="bg-[#040504] border border-[#4ade80]/30 rounded-2xl glow-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Distribución de Gastos</h4>
                    <span className="text-xs text-[#a1a1aa]">Temporada actual</span>
                  </div>

                  {[
                    { label: "Insumos y abonos", value: 64, color: "#4ade80" },
                    { label: "Mano de obra", value: 28, color: "#f59e0b" },
                    { label: "Otros gastos", value: 8, color: "#60a5fa" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#a1a1aa]">{item.label}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1d19] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}

                  <Separator className="bg-[#4ade80]/10 my-2" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0d110c] rounded-xl p-4 border border-[#4ade80]/20">
                      <p className="text-xs text-[#a1a1aa] mb-1">Ganancia estimada</p>
                      <p className="text-2xl font-extrabold text-[#4ade80]">+34%</p>
                    </div>
                    <div className="bg-[#0d110c] rounded-xl p-4 border border-[#f59e0b]/20">
                      <p className="text-xs text-[#a1a1aa] mb-1">Reporte completado</p>
                      <p className="text-2xl font-extrabold text-[#f59e0b]">78%</p>
                      <Progress value={78} className="h-1.5 mt-2 bg-[#1a1d19] [&>div]:bg-[#f59e0b]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODO CAMPO / TRUST ── */}
      <section id="modo-campo" aria-label="Modo Campo: diseñada para trabajar bajo el sol" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Badge variant="outline" className="border-[#4ade80]/40 text-[#4ade80] mb-4 text-sm px-4 py-1.5">
              Diseñada para el campo
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Por qué Dakterra es{" "}
              <span className="text-[#4ade80]">diferente</span>
            </h2>
            <p className="mt-4 text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              No es una app de escritorio adaptada. Fue construida desde cero pensando
              en el agricultor que trabaja bajo el sol, sin señal y con las manos ocupadas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon
              return (
                <Card
                  key={tp.title}
                  className="bg-[#0d110c] border border-[#4ade80]/25 rounded-2xl hover:border-[#4ade80]/60 transition-all duration-300 glow-border"
                >
                  <CardContent className="p-7 space-y-4 text-center">
                    <div className="size-14 rounded-2xl bg-[#4ade80]/15 border border-[#4ade80]/30 flex items-center justify-center mx-auto">
                      <Icon className="size-7 text-[#4ade80]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{tp.title}</h3>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">{tp.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Farmer photo banner */}
          <div className="mt-14 rounded-3xl overflow-hidden relative border border-[#4ade80]/30 glow-border">
            <img
              src="/farmer-field.webp"
              alt="Agricultor usando la app Dakterra en medio del cultivo, con el teléfono en mano"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040504]/90 via-[#040504]/60 to-transparent flex items-center">
              <div className="px-8 sm:px-14 max-w-lg space-y-3">
                <p className="text-[#4ade80] font-bold text-sm uppercase tracking-widest">Modo Campo</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Hecha para funcionar donde más la necesitas.
                </h3>
                <p className="text-[#a1a1aa] text-base">
                  En el cafetal, el arrozal o la finca ganadera. Sin importar la señal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" aria-label="Testimonios de agricultores que usan Dakterra" className="py-20 sm:py-28 bg-[#0d110c] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Badge variant="outline" className="border-[#4ade80]/40 text-[#4ade80] mb-4 text-sm px-4 py-1.5">
              Lo que dicen nuestros agricultores
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Historias reales del{" "}
              <span className="text-[#4ade80]">campo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="bg-[#040504] border border-[#4ade80]/25 rounded-2xl glow-border hover:border-[#4ade80]/60 transition-all duration-300"
              >
                <CardContent className="p-7 space-y-5">
                  <MessageSquareQuote className="size-8 text-[#4ade80]/60" aria-hidden="true" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="size-4 fill-[#f59e0b] text-[#f59e0b]" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="text-[#d4d4d8] text-base leading-relaxed italic">
                    "{t.text}"
                  </p>

                  <Separator className="bg-[#4ade80]/10" />

                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full bg-[#4ade80]/20 border border-[#4ade80]/40 flex items-center justify-center text-[#4ade80] font-bold text-sm shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-[#a1a1aa] text-xs flex items-center gap-1">
                        <MapPin className="size-3" aria-hidden="true" />
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="cta" aria-label="Llamado a la acción: prueba Dakterra gratis" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4ade80]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <Badge variant="outline" className="border-[#4ade80]/40 text-[#4ade80] text-sm px-4 py-1.5">
            Empieza hoy, gratis
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Empieza a digitalizar tu finca{" "}
            <span className="text-[#4ade80] glow-text">hoy mismo.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed">
            Únete a más de 2.400 agricultores que ya toman mejores decisiones
            con Dakterra. Sin costos de instalación. Sin necesidad de ser experto en tecnología.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              aria-label="Prueba Dakterra gratis, empieza ahora"
              className="bg-[#4ade80] text-black font-extrabold text-xl px-10 py-5 h-16 rounded-xl hover:bg-[#22c55e] pulse-cta min-w-[260px]"
            >
              Prueba Dakterra Gratis
              <ChevronRight className="size-5" aria-hidden="true" />
            </Button>
          </div>

          {/* App store placeholders */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            {[
              { store: "Google Play", sub: "Disponible en" },
              { store: "App Store", sub: "Descarga en" },
            ].map((s) => (
              <button
                key={s.store}
                aria-label={`${s.sub} ${s.store}`}
                className="flex items-center gap-3 px-6 py-3.5 bg-[#0d110c] border border-[#4ade80]/30 rounded-xl hover:border-[#4ade80] transition-colors text-left min-w-[180px]"
              >
                <Smartphone className="size-7 text-[#4ade80] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#a1a1aa] text-xs">{s.sub}</p>
                  <p className="text-white font-bold text-sm">{s.store}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* ── FOOTER ── */}
      <footer aria-label="Pie de página de Dakterra" className="bg-[#0d110c] border-t border-[#4ade80]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Leaf className="size-6 text-[#4ade80]" aria-hidden="true" />
                <span className="text-xl font-bold">
                  Dak<span className="text-[#4ade80]">terra</span>
                </span>
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
                La app de gestión agrícola diseñada para el campo. Registra, analiza y decide
                mejor, con o sin internet.
              </p>
              <div className="flex gap-3">
                {["Próximamente en Google Play", "Próximamente en App Store"].map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 bg-[#1a1d19] border border-[#4ade80]/20 rounded-lg text-[#a1a1aa]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Producto</h4>
              {["Funciones", "Precios", "Novedades", "Hoja de ruta"].map((l) => (
                <a key={l} href="#" className="block text-[#a1a1aa] text-sm hover:text-[#4ade80] transition-colors">
                  {l}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Soporte</h4>
              {["Centro de ayuda", "Contáctanos", "Términos y Condiciones", "Privacidad de datos"].map((l) => (
                <a key={l} href="#" className="block text-[#a1a1aa] text-sm hover:text-[#4ade80] transition-colors">
                  {l}
                </a>
              ))}
              <div className="pt-2 space-y-1">
                <p className="text-[#a1a1aa] text-xs">
                  <span className="text-[#4ade80] font-medium">Email:</span>{" "}
                   contacto@dakterra.com
                </p>
                <p className="text-[#a1a1aa] text-xs">
                  <span className="text-[#4ade80] font-medium">WhatsApp:</span>{" "}
                  +57 321 570 0339
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-[#4ade80]/10 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#a1a1aa] text-xs">
            <p>© 2026 Dakterra. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#4ade80] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
