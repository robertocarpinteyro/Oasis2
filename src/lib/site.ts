/**
 * Contenido del sitio de Oasis Creativa.
 * Sintetizado del Documento Fundacional. Los assets visuales son placeholders
 * que más tarde se reemplazan por URLs de Cloudinary (ver `media`).
 */

export const site = {
  name: "Oasis Creativa",
  short: "Oasis",
  location: "Puebla, México",
  tagline: "Productora audiovisual premium",
  email: "hola@oasiscreativa.mx",
  logo: "https://res.cloudinary.com/dwxns5ke0/image/upload/v1782362557/1_jvg8jy.png",
  navlinks: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Estudio", href: "#estudio" },
    { label: "Paquetes", href: "#paquetes" },
  ],
  cta: { label: "Inicia tu proyecto", href: "#contacto" },
};

/**
 * Placeholders de media. Sustituir `src` por la URL de Cloudinary cuando esté lista.
 * Tipos: "video" (mp4/hls) o "image".
 */
export const media = {
  heroVideo: {
    type: "video" as const,
    src: "", // p.ej. https://res.cloudinary.com/<cloud>/video/upload/oasis/reel-hero.mp4
    poster: "", // p.ej. https://res.cloudinary.com/<cloud>/image/upload/oasis/hero-poster.jpg
    label: "Reel principal — Oasis Creativa",
  },
  // Demo reel VERTICAL del hero. Reemplazar `src` por tu URL de Cloudinary.
  // Mientras esté vacío se muestra un placeholder con la paleta de marca.
  heroReel: {
    type: "video" as const,
    src: "https://res.cloudinary.com/dwxns5ke0/video/upload/v1782362643/Oasis-Demoreel_1_1_1_yq9az5.mp4",
    poster: "",
    label: "Demo reel vertical",
  },
};

/** Copy del hero (estilo conversacional Mainframe, adaptado a Oasis). */
export const heroIntro = {
  introLines: [
    "Hola, somos Oasis Creativa,",
    "productora audiovisual premium en Puebla.",
  ],
  typed:
    "Qué bueno que llegaste. El buen contenido encuentra a quien lo busca. ¿Qué vamos a crear?",
  pills: [
    "Cuéntanos tu idea",
    "Trabaja con nosotros",
    "Envía un hola",
    "Mira cómo operamos",
  ],
  contactEmail: "hola@oasiscreativa.mx",
};

export const hero = {
  eyebrow: "Productora audiovisual · Puebla, México",
  titleLines: ["Contenido", "premium", "que proyecta", "autoridad."],
  subtitle:
    "Producimos contenido audiovisual de calidad premium que hace que tu marca se vea a la altura de las grandes en redes — con un nivel de producción por encima del estándar de tu categoría.",
  stats: [
    { value: "Premium", label: "en todas las producciones" },
    { value: "Puebla", label: "sede · alcance regional" },
    { value: "Drone FPV", label: "+ tomas aéreas" },
  ],
};

export const clients = [
  "Marca A",
  "Marca B",
  "Estudio C",
  "Label D",
  "Grupo E",
  "Brand F",
  "Co. G",
  "Studio H",
];

export type Project = {
  title: string;
  category: string;
  year: string;
  // Placeholder de media — reemplazar por Cloudinary.
  poster: string;
  video?: string;
};

export const projects: Project[] = [
  { title: "Campaña de lanzamiento", category: "Spot · Reels", year: "2025", poster: "" },
  { title: "Identidad en movimiento", category: "Branding · VFX", year: "2025", poster: "" },
  { title: "Línea de producto", category: "Fotografía · Lifestyle", year: "2024", poster: "" },
  { title: "Aéreas FPV", category: "Drone · Cinemático", year: "2025", poster: "" },
  { title: "Cineminuto de marca", category: "Institucional", year: "2024", poster: "" },
  { title: "Serie de contenido", category: "Reels · TikTok", year: "2025", poster: "" },
];

/** Diferenciadores premium concretos y defendibles. */
export const premium = {
  eyebrow: "Por qué Oasis",
  title: "Premium no es una palabra. Es el estándar de cada producción.",
  body: "Todas nuestras producciones — en todos los niveles — incluyen el mismo equipo y acabado de alta gama. Los niveles cambian en volumen, nunca en calidad.",
  features: [
    { name: "Cámaras de alta gama", desc: "Equipo cinematográfico para una imagen con factura de cine." },
    { name: "Iluminación profesional", desc: "Esquemas de luz que dan dimensión, textura y mood a cada toma." },
    { name: "Creatividad y conceptualización", desc: "Ideas con dirección de arte, no solo cámara encendida." },
    { name: "VFX / SFX", desc: "Efectos visuales y sonoros que elevan el resultado final." },
    { name: "Color grading profesional", desc: "Una identidad de color consistente y de alto valor." },
    { name: "Audio de calidad", desc: "Sonido limpio y diseño sonoro que se siente premium." },
    { name: "Drone FPV y tomas aéreas", desc: "Movimiento y perspectivas imposibles con cámara en mano." },
  ],
};

export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "001",
    title: "Video corto para redes",
    description:
      "Reels, TikToks y shorts pensados para detener el scroll y construir autoridad de marca, con volumen constante mes a mes.",
    tags: ["Reels", "TikTok", "Shorts", "Guion & concepto"],
  },
  {
    index: "002",
    title: "Fotografía de producto & lifestyle",
    description:
      "Imagen fija premium para catálogo, campañas y redes, con dirección de arte y color que refuerzan tu identidad.",
    tags: ["Producto", "Lifestyle", "Dirección de arte"],
  },
  {
    index: "003",
    title: "Postproducción, edición & color",
    description:
      "Edición, color grading y diseño sonoro profesionales que llevan el material crudo a un acabado de alto valor.",
    tags: ["Edición", "Color grading", "Audio"],
  },
  {
    index: "004",
    title: "VFX / SFX & Drone FPV",
    description:
      "Efectos visuales y sonoros, más tomas aéreas y FPV cinematográficas para diferenciar tu contenido del resto.",
    tags: ["VFX", "SFX", "Drone FPV", "Aéreas"],
  },
  {
    index: "005",
    title: "Producción de mayor escala",
    description:
      "Videos institucionales, cineminutos, spots grandes y para TV. Proyectos a medida de alto ticket y alto impacto.",
    tags: ["Institucional", "Cineminuto", "Spot TV", "Campaña"],
  },
];

export const about = {
  eyebrow: "El estudio",
  title: "Creamos identidades de calidad y alto valor para las marcas con las que trabajamos.",
  mission:
    "Escalar la productora a nivel estatal y competir en producción audiovisual a nivel regional para ser referentes.",
  vision:
    "Ser la productora de referencia en producción audiovisual premium en la región.",
  values: [
    { name: "Progreso", desc: "Subimos el nivel en cada proyecto y cada entrega." },
    { name: "Compañerismo", desc: "Convertimos fortalezas individuales en éxito compartido." },
    { name: "Pasión", desc: "Hacemos esto porque amamos crear impacto con imagen." },
  ],
  positioning:
    "Para marcas medianas regionales y nacionales que quieren verse a la altura de las grandes en redes, sin la inconsistencia de freelancers sueltos ni el costo y la lentitud de las agencias grandes.",
};

/** Propuesta personalizada. */
export const proposal = {
  client: "Isabela Rossano",
};

export const pricing = {
  eyebrow: "Inversión",
  title:
    "Contenido premium con un punto de entrada pensado para arrancar con ventaja.",
  intro:
    "Un esquema simple y transparente: un paquete de entrada con todo el estándar premium de Oasis, la opción de sumar producción cuando la necesites y proyectos a medida para lo que quieras llevar más lejos.",
  tax: "+ IVA",
  note:
    "Precios en pesos mexicanos (MXN); no incluyen IVA. Todas las producciones —sin excepción— incluyen el estándar premium de Oasis: cámaras de alta gama, iluminación profesional, drone FPV, VFX/SFX, color grading y audio de calidad.",
};

export const entryPlan = {
  name: "Paquete de entrada",
  badge: "Empieza aquí",
  price: "$10,000",
  currency: "MXN",
  tagline:
    "Todo lo que tu marca necesita para verse premium desde el primer día.",
  includes: [
    { value: "2", label: "Producciones premium" },
    { value: "4", label: "Reels" },
  ],
  gifts: [
    { value: "+1", label: "Reel adicional" },
    { value: "+20", label: "Fotografías" },
  ],
  giftLine: "Y porque queremos que arranques con ventaja, van de regalo:",
  cta: "Quiero este paquete",
};

export const extraPlan = {
  name: "Producción extra",
  price: "$5,000",
  currency: "MXN",
  tagline:
    "¿Necesitas más volumen? Suma producción cuando lo pidas, al mismo nivel premium.",
  includes: ["1 producción", "2 reels"],
  cta: "Agregar producción",
};

export const customPlan = {
  name: "Producción a medida",
  tagline:
    "Institucionales, cineminutos, spots y campañas de mayor escala, cotizados de forma individual según tu objetivo.",
  price: "Cotización individual",
  cta: "Solicitar cotización",
};

export const pricingClose =
  "este es el punto de partida. Cuando quieras, ajustamos el alcance a los objetivos de tu marca y crecemos desde ahí.";

export const process = {
  eyebrow: "Cómo trabajamos",
  title: "Un proceso claro, de la idea a la entrega.",
  steps: [
    { n: "01", name: "Descubrimiento", desc: "Entendemos tu marca, objetivos y audiencia." },
    { n: "02", name: "Concepto", desc: "Dirección de arte, guion y plan de producción." },
    { n: "03", name: "Producción", desc: "Rodaje premium: cámara, luz, audio, drone FPV." },
    { n: "04", name: "Postproducción", desc: "Edición, VFX/SFX y color grading profesional." },
    { n: "05", name: "Entrega", desc: "Formatos listos para cada canal, a tiempo." },
  ],
};

export const stats = [
  { value: "7", suffix: "", label: "diferenciadores premium en cada producción" },
  { value: "3", suffix: "", label: "niveles de iguala + producción a medida" },
  { value: "100", suffix: "%", label: "del material con color grading profesional" },
  { value: "24", suffix: "h", label: "para responder a tu solicitud" },
];

export const faqs = [
  {
    q: "¿Qué hace que una producción sea \"premium\" en Oasis?",
    a: "Cámaras de alta gama, iluminación profesional, audio de calidad, color grading, VFX/SFX y drone FPV — incluidos en todas las producciones de todos los niveles. La calidad no cambia entre paquetes; cambia el volumen.",
  },
  {
    q: "¿Cómo funcionan las igualas mensuales?",
    a: "Eliges un nivel (Origen, Impulso o Referente) y cada mes entregamos un número fijo de producciones, reels y fotos. Es ingreso recurrente para ti como marca: contenido constante sin coordinar a nadie.",
  },
  {
    q: "¿Cuántas rondas de revisión incluye?",
    a: "Cada producción incluye rondas de revisión definidas por escrito (por ejemplo, 2). Las revisiones adicionales se cotizan aparte para mantener tiempos y calidad.",
  },
  {
    q: "¿Trabajan proyectos grandes fuera de iguala?",
    a: "Sí. Producción a Medida cubre videos institucionales, cineminutos, spots para TV y campañas. Se cotiza por proyecto desde $40,000 MXN.",
  },
  {
    q: "¿Cómo empezamos?",
    a: "Nos escribes, agendamos una llamada de descubrimiento y te enviamos una propuesta con plan y tiempos claros. Con un anticipo arrancamos producción.",
  },
];

export const contact = {
  title: ["Hagamos", "que pase."],
  subtitle: "¿Tienes una marca que merece verse premium? Cuéntanos tu proyecto.",
  promises: [
    { title: "Respuesta rápida", desc: "Te contactamos en menos de 24 horas para conocer tus objetivos." },
    { title: "Siguiente paso claro", desc: "Tras la llamada recibes un plan y tiempos detallados." },
  ],
  socials: ["Instagram", "TikTok", "YouTube", "Behance", "LinkedIn"],
};
