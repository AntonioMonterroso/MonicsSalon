/* Marca del salón — Monic's Belleza (prospecto). Lo único que cambia frente a la demo genérica. */
window.MARCA = {
  clave: "monics.demo",
  nombre: "Monic's Salón",
  corto: "Monic's",
  lema: "Belleza",
  ciudad: "San Juan Sacatepéquez",
  direccion: "4a. avenida 8-19, zona 4, San Juan Sacatepéquez",
  mapa: "https://maps.google.com/?q=4a+avenida+8-19+zona+4+San+Juan+Sacatep%C3%A9quez",
  telefono: "66303397",
  whatsapp: "50266303397", /* por confirmar si ese número tiene WhatsApp */
  facebook: "https://www.facebook.com/search/top?q=Monic%27s%20SAL%C3%93N",
  instagram: "",
  resena: "https://www.facebook.com/search/top?q=Monic%27s%20SAL%C3%93N",
  ejemplo: true, /* sin reseñas reales todavía: la página lo dice */
  /* Fotos de su Facebook: se activan (renombrar a «trabajos») cuando la dueña dé permiso. No se publican antes. */
  trabajosPendientes: [
    { src: "img/trabajos/rayitos-chocolate.jpg", alt: "Rayitos tono chocolate" },
    { src: "img/trabajos/pedicure-rojo-perlas.jpg", alt: "Pedicure rojo con perlas" },
    { src: "img/trabajos/balayage.jpg", alt: "Rayitos y planchado" },
    { src: "img/trabajos/pedicure-frances-flores.jpg", alt: "Francés con flores" },
    { src: "img/trabajos/pedicure-corazon.jpg", alt: "Corazón y glitter" },
    { src: "img/trabajos/pedicure-lila.jpg", alt: "Lila con francés" },
    { src: "img/trabajos/pedicure-flores-rojo.jpg", alt: "Flores sobre rojo" }
  ],
  /* Datos de ejemplo del salón. Servicios según su Facebook; precios, nombres del equipo y horario POR CONFIRMAR. */
  datos: {
    categorias: [
      { id: "cabello", nombre: "Cabello", sub: "Cortes, color y planchados", icono: "scissors", retoque: 35 },
      { id: "unas", nombre: "Uñas", sub: "Manos y pies", icono: "hand", retoque: 21 },
      { id: "mirada", nombre: "Maquillaje", sub: "Maquillaje y cejas", icono: "eye", retoque: 25 }
    ],
    horario: { 0: [8 * 60, 13 * 60], 1: [8 * 60, 18 * 60], 2: [8 * 60, 18 * 60], 3: [8 * 60, 18 * 60], 4: [8 * 60, 18 * 60], 5: [8 * 60, 18 * 60], 6: [8 * 60, 18 * 60] },
    estilistas: [
      { id: "e1", nombre: "Mónica", rol: "Dueña · color y planchados", cats: ["cabello", "mirada"], color: "#C9A24A", com_serv: 0, com_prod: 0, meta: 15000, dias: [0, 1, 2, 3, 4, 5, 6], entra: 8 * 60, sale: 18 * 60 },
      { id: "e2", nombre: "Ana", rol: "Uñas y pedicure", cats: ["unas"], color: "#D7A6AE", com_serv: 35, com_prod: 10, meta: 9000, dias: [1, 2, 3, 4, 5, 6], entra: 8 * 60, sale: 18 * 60 },
      { id: "e3", nombre: "Karla", rol: "Cortes y maquillaje", cats: ["cabello", "mirada"], color: "#A9BFA4", com_serv: 35, com_prod: 10, meta: 9000, dias: [0, 1, 2, 3, 5, 6], entra: 8 * 60, sale: 18 * 60 }
    ],
    estaciones: [
      { id: "x1", nombre: "Silla 1", tipo: "silla" }, { id: "x2", nombre: "Silla 2", tipo: "silla" }, { id: "x3", nombre: "Lavacabezas", tipo: "lavacabezas" },
      { id: "x4", nombre: "Mesa de uñas", tipo: "unas" }, { id: "x5", nombre: "Sillón de pedicure", tipo: "pedicure" }
    ],
    servicios: [
      { id: "s10", cat: "cabello", nombre: "Corte de dama", precio: 50, dur: 45, est: "silla", desc: "Lavado, corte y secado." },
      { id: "s18", cat: "cabello", nombre: "Corte de caballero", precio: 30, dur: 30, est: "silla" },
      { id: "s11", cat: "cabello", nombre: "Lavado y secado", precio: 50, dur: 40, est: "silla" },
      { id: "s19", cat: "cabello", nombre: "Planchado", precio: 75, dur: 60, est: "silla", desde: true, desc: "Liso y con brillo, el precio va según el largo." },
      { id: "s12", cat: "cabello", nombre: "Tinte", precio: 175, dur: 105, est: "silla", desde: true, pose: { ini: 30, min: 35 }, consumo: [["u6", 1], ["u7", 1]] },
      { id: "s13", cat: "cabello", nombre: "Rayitos", precio: 250, dur: 150, est: "silla", desde: true, pose: { ini: 40, min: 40 }, desc: "Pregunta por la promo de rayitos en tono chocolate.", consumo: [["u6", 2], ["u7", 1]] },
      { id: "s15", cat: "cabello", nombre: "Alisado con keratina", precio: 350, dur: 150, est: "silla", desde: true, pose: { ini: 45, min: 30 }, anticipo: 100, consumo: [["u10", 1]] },
      { id: "s16", cat: "cabello", nombre: "Base (permanente)", precio: 200, dur: 120, est: "silla", desde: true, pose: { ini: 30, min: 40 }, desc: "Rizos que duran meses." },
      { id: "s17", cat: "cabello", nombre: "Peinado", precio: 100, dur: 60, est: "silla" },
      { id: "s25", cat: "mirada", nombre: "Maquillaje social", precio: 150, dur: 60, est: "silla" },
      { id: "s26", cat: "mirada", nombre: "Maquillaje de novia o quinceañera", precio: 350, dur: 90, est: "silla", anticipo: 100, desc: "Incluye prueba previa." },
      { id: "s23", cat: "mirada", nombre: "Diseño de cejas", precio: 35, dur: 25, est: "silla" },
      { id: "s24", cat: "mirada", nombre: "Cejas con henna", precio: 60, dur: 40, est: "silla" },
      { id: "s01", cat: "unas", nombre: "Manicure", precio: 40, dur: 35, est: "unas", consumo: [["u1", 1]] },
      { id: "s02", cat: "unas", nombre: "Manicure en gel", precio: 75, dur: 50, est: "unas", diseno: true, consumo: [["u2", 1], ["u3", 1]] },
      { id: "s03", cat: "unas", nombre: "Uñas acrílicas", precio: 150, dur: 100, est: "unas", diseno: true, consumo: [["u4", 1]] },
      { id: "s05", cat: "unas", nombre: "Retoque de acrílico", precio: 100, dur: 75, est: "unas", diseno: true },
      { id: "s06", cat: "unas", nombre: "Pedicure", precio: 60, dur: 50, est: "pedicure" },
      { id: "s07", cat: "unas", nombre: "Pedicure con diseño", precio: 80, dur: 60, est: "pedicure", diseno: true, pies: true, desc: "Francés, flores, corazones o cristales." },
      { id: "s08", cat: "unas", nombre: "Retiro de gel o acrílico", precio: 25, dur: 20, est: "unas" }
    ],
    productos: [
      ["p1", "Shampoo para cabello teñido", "Profesional", 65, 35, 10, 4], ["p2", "Acondicionador", "Profesional", 65, 35, 8, 4],
      ["p3", "Tratamiento de keratina para casa", "Profesional", 95, 50, 5, 3], ["p4", "Aceite de argán", "Profesional", 75, 38, 2, 3],
      ["p5", "Crema para peinar", "Profesional", 45, 22, 12, 4], ["p6", "Aceite de cutícula", "Casa", 30, 12, 15, 5],
      ["p7", "Esmalte de uñas", "Casa", 35, 15, 20, 6], ["p8", "Kit de limas", "Casa", 25, 8, 14, 5]
    ],
    membresias: [
      { id: "m1", nombre: "Club Monic's", precio: 125, incluye: [{ servicio_id: "s07", cant: 1 }], descuento: 10, color: "#C9A24A", desc: "Un pedicure con diseño al mes y 10 % en todo lo demás." }
    ],
    paquetes: [
      { id: "q1", nombre: "5 cortes de dama", servicio_id: "s10", sesiones: 5, precio: 200, vigencia: 150, desc: "Ahorra Q50." },
      { id: "q2", nombre: "Paquete quinceañera", servicio_id: "s26", sesiones: 1, precio: 450, vigencia: 120, desc: "Maquillaje con prueba, peinado y manicure en gel.", extras: ["s17", "s02"] },
      { id: "q3", nombre: "4 pedicures", servicio_id: "s06", sesiones: 4, precio: 200, vigencia: 120, desc: "Uno al mes, pies siempre listos." }
    ],
    lealtad: { sellos: 8, premio: "Un pedicure de regalo" }
  },
  colores: {
    fondo: "#F5F4F0",
    fondo2: "#ECEAE2",
    tarjeta: "#FFFFFF",
    tinta: "#1E1B14",
    tinta2: "#58533F",
    tenue: "#87826F",
    linea: "#E3E0D3",
    acento: "#C2A71E",
    acentoTexto: "#7A6810",
    acentoSuave: "#F3EDCF",
    acentoSobre: "#1E1B14",
    nude: "#E8DDBE",
    oscuro: "#1E1B14"
  },
  fuentes: {
    titulo: "Bodoni Moda",
    texto: "Jost",
    url: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..600&family=Jost:wght@300..800&display=swap"
  },
  logoImg: "",
  monograma: "SM",
  /* Logo redibujado del original (monograma SM, MONIC'S, BELLEZA y anillos dorados) */
  logoSVG(tam = 40, anim = false) {
    const id = "mlg" + Math.random().toString(36).slice(2, 7);
    const detalle = tam >= 70;
    return `<svg class="logo ${anim ? "logo-anim" : ""}" width="${tam}" height="${tam}" viewBox="0 0 400 400" role="img" aria-label="Monic's Belleza">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3D86A"/><stop offset=".5" stop-color="#D9B52C"/><stop offset="1" stop-color="#A9861A"/></linearGradient></defs>
      <circle cx="200" cy="200" r="198" fill="#EEEEEC"/>
      <circle class="anillo a1" pathLength="100" cx="200" cy="200" r="186" fill="none" stroke="url(#${id})" stroke-width="${detalle ? 2.4 : 7}"/>
      ${detalle ? `<circle class="anillo a2" pathLength="100" cx="207" cy="194" r="176" fill="none" stroke="url(#${id})" stroke-width="1.6"/><circle class="anillo a2" pathLength="100" cx="194" cy="207" r="170" fill="none" stroke="url(#${id})" stroke-width="1.1"/>` : ""}
      <text x="200" y="${detalle ? 266 : 278}" text-anchor="middle" font-family="'Bodoni Moda', Didot, 'Bodoni 72', Georgia, serif" font-weight="700" font-size="${detalle ? 196 : 230}" letter-spacing="-8" fill="#C2A71E">SM</text>
      ${detalle ? `<rect x="58" y="172" width="284" height="40" fill="#EEEEEC"/>
      <text x="203" y="207" text-anchor="middle" font-family="'Bodoni Moda', Didot, 'Bodoni 72', Georgia, serif" font-weight="500" font-size="38" letter-spacing="15" fill="#C2A71E">MONIC'S</text>
      <text x="200" y="326" text-anchor="middle" font-family="'Bodoni Moda', Didot, 'Bodoni 72', Georgia, serif" font-weight="700" font-size="44" fill="#C2A71E">BELLEZA</text>` : ""}
    </svg>`;
  }
};

(function () {
  const m = window.MARCA, r = document.documentElement.style, c = m.colores;
  Object.entries(c).forEach(([k, v]) => r.setProperty("--" + k.replace(/[A-Z]/g, x => "-" + x.toLowerCase()), v));
  /* colores escogidos en la propuesta (se guardan en este navegador) */
  try { const t = JSON.parse(localStorage.getItem(m.clave + ".tema") || "null"); if (t) Object.entries(t).forEach(([k, v]) => r.setProperty("--" + k.replace(/[A-Z]/g, x => "-" + x.toLowerCase()), v)); } catch (e) {}
  r.setProperty("--f-titulo", `"${m.fuentes.titulo}", Georgia, serif`);
  r.setProperty("--f-texto", `"${m.fuentes.texto}", "Helvetica Neue", sans-serif`);
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = m.fuentes.url; document.head.appendChild(l);
  document.title = m.nombre;
})();
