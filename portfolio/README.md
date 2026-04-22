# Portfolio · Claudio González Gaete

Portafolio personal y case studies de **Claudio González Gaete** — Cloud Engineer / HCCDP Solution Architect.

🌐 **Producción:** [cvclaudio.netlify.app](https://cvclaudio.netlify.app)

---

## Estructura

```
.
├── index.html          # Página principal (Home · About · Stack · Experiencia · Certs · Contacto)
├── case-studies.html   # Página de proyectos (5 case studies detallados)
├── styles.css          # Stylesheet compartido
├── netlify.toml        # Config de Netlify (headers de seguridad + URLs limpias)
└── README.md           # Este archivo
```

## Stack

- HTML5 semántico
- CSS puro (custom properties, grid, flexbox)
- Google Fonts: Fraunces (display serif) · JetBrains Mono (técnica) · Public Sans (body)
- Sin dependencias JS — todo es HTML/CSS estático

## Despliegue en Netlify

### Opción A · Drag & drop (lo más rápido)

1. Entra a [app.netlify.com/projects/cvclaudio/deploys](https://app.netlify.com/projects/cvclaudio/deploys)
2. Arrastra **toda la carpeta** (no el ZIP) a la zona de drag & drop
3. Netlify desplegará automáticamente

### Opción B · Vía GitHub (recomendado)

1. Sube estos archivos al repo `Claudionee/CV-WEB` (reemplazando los actuales o en una rama nueva)
2. Asegúrate de que en Netlify el proyecto `cvclaudio` esté conectado a ese repo
3. Haz push a `main` → deploy automático

### Opción C · Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify link   # selecciona "cvclaudio"
netlify deploy --prod --dir=.
```

## URLs

Una vez desplegado, las páginas quedan accesibles en:

- `/` → portafolio principal
- `/case-studies.html` → página de proyectos
- `/proyectos` → alias que redirige a case-studies (configurado en netlify.toml)
- `/case-studies` → alias sin extensión

## Personalización

### Cambiar colores

Todos los tokens están en `styles.css` en el bloque `:root`. Modifica estas variables:

```css
:root {
  --cyan: #7ee7f7;      /* acento principal */
  --amber: #f5c66b;     /* acento secundario */
  --bg: #0a0e17;        /* fondo */
  /* ... */
}
```

### Agregar un nuevo case study

Copia y pega uno de los bloques `<article class="case">` en `case-studies.html` y ajusta el número, título, contenido y el link en el índice (TOC).

### Agregar el CV descargable

1. Sube `Claudio.pdf` a la raíz del proyecto
2. Descomenta el redirect `/cv → /Claudio.pdf` en `netlify.toml`
3. Agrega un botón `<a href="Claudio.pdf" download class="btn btn-ghost">Descargar CV</a>` donde lo necesites

## Checklist antes de publicar

- [ ] Revisar que los enlaces a LinkedIn, GitHub y email sean los correctos
- [ ] Confirmar que ningún case study expone info confidencial de clientes de SEIDOR
- [ ] Probar en móvil (el diseño es responsive, pero vale la pena verificar)
- [ ] Validar que las fechas en Experiencia estén actualizadas

---

*Hecho con atención al detalle. 2026.*
