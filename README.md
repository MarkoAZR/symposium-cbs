# 🧬 I Simposio Internacional Virtual de Biología Sintética 2026

[![Astro](https://img.shields.io/badge/Astro-5.17.1-FF5D01?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat-square&logo=github)](https://markoazr.github.io/symposium-cbs/)

Sitio web oficial del **I Simposio Internacional Virtual de Biología Sintética** organizado por la Comunidad de Biología Sintética (CBS) de la Universidad Nacional Mayor de San Marcos (UNMSM).

## 📅 Evento

**Fecha**: 5-7 de Marzo de 2026  
**Ubicación**: Virtual (En línea)  
**Idiomas**: Español e Inglés  
**Audiencia**: Investigadores, estudiantes y profesionales en biología sintética de América Latina y el mundo

### 🎯 Objetivo

Promover la investigación, educación e innovación en biología sintética a través de un simposio virtual internacional que integre a estudiantes, investigadores y profesionales de latinoamérica.

### 🌟 Tres Días Temáticos

- **Día 1 (5 de Marzo)**: Fronteras Globales - Perspectivas Internacionales (Sesiones en Inglés)
- **Día 2 (6 de Marzo)**: Hub de Investigación en Perú - Enfoque Local (Sesiones en Español)
- **Día 3 (7 de Marzo)**: Ecosistema Regional (LatAm) - Colaboración Regional (Sesiones en Español)

## 🚀 Características del Sitio

- ✅ **Bilingüe**: Español e Inglés con cambio automático
- ✅ **Responsive Design**: Optimizado para desktop, tablet y móvil
- ✅ **Dark Mode**: Soporte completo para modo oscuro
- ✅ **PWA Ready**: Aplicación web progresiva instalable
- ✅ **SEO Optimizado**: Meta tags OpenGraph, Sitemap, Robots.txt
- ✅ **Accesible**: Cumple con estándares WCAG
- ✅ **Performance**: Construido con Astro para máxima velocidad

## 📁 Estructura del Proyecto

```
symposium-cbs-astro/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Card.astro
│   │   ├── TeamMemberCard.astro
│   │   └── ...
│   ├── layouts/
│   │   └── MainLayout.astro    # Layout principal con meta tags
│   ├── pages/
│   │   ├── index.astro         # Redirección a /es/
│   │   ├── es/                 # Páginas en Español
│   │   │   ├── index.astro     # Home
│   │   │   ├── programa/       # Schedule
│   │   │   ├── recursos/       # Resources
│   │   │   ├── equipo/         # Team
│   │   │   └── registro/       # Registration
│   │   └── en/                 # English Pages
│   │       └── ...
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   └── logos/
│   │       ├── cbs_logo.png
│   │       ├── unmsm_logo.png
│   │       └── ...
│   └── docs/                   # Documentos descargables
│       └── guide_*.pdf
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.mjs         # Configuración de Tailwind
├── tsconfig.json               # TypeScript config con path aliases
└── package.json
```

## 🛠️ Tecnología

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Icons**: [Material Icons](https://fonts.google.com/icons) - Google's icon library
- **Fonts**: [Google Fonts](https://fonts.google.com) - Playfair Display & Inter
- **Deployment**: [GitHub Pages](https://pages.github.com)
- **CI/CD**: GitHub Actions

## 📦 Instalación y Desarrollo

### Requisitos
- Node.js 18+ 
- npm o yarn

### Setup Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/markoazr/symposium-cbs.git
cd symposium-cbs

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo local |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Vista previa local del build |
| `npm run astro -- --help` | Ver opciones de CLI de Astro |

## 🚀 Deployment

El sitio se despliega automáticamente en GitHub Pages cuando hay un push a `main`:

```bash
# 1. Realizar cambios locales
git add .
git commit -m "tu mensaje"

# 2. Subir a GitHub
git push

# 3. GitHub Actions automáticamente:
#    - Compila el proyecto
#    - Genera los archivos estáticos
#    - Publica en GitHub Pages

# 4. Ver en vivo
# https://markoazr.github.io/symposium-cbs/
```

## 🎨 Configuración

### Colores de Branding

```css
--primary: #0EA5E9    /* Azul CBS */
--secondary: #10B981  /* Verde */
--accent: #84CC16     /* Lime */
--tertiary: #06B6D4   /* Cyan */
```

### Base Path

El sitio está configurado con base path `/symposium-cbs/` para GitHub Pages:
- **Site URL**: `https://markoazr.github.io/symposium-cbs/`
- **All internal links** usan `/symposium-cbs/` como prefijo

Si cambias el repositorio, actualiza en `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://tu-github-username.github.io/symposium-cbs/',
  base: '/symposium-cbs/',
});
```

## 📝 Contenido y Edición

### Agregar Contenido

Las páginas están organizadas por idioma:
- Páginas en Español: `src/pages/es/**`
- Páginas en Inglés: `src/pages/en/**`

Cada página importa `MainLayout` que proporciona el header, footer y meta tags automáticamente.

### Actualizar Meta Tags

En cada página, pasa props al layout:

```astro
<MainLayout
  title="Titulo de la Página"
  description="Descripción para OpenGraph"
  image="/symposium-cbs/images/logos/cbs_logo.png"
  url="https://cbs-unmsm.org/symposium-cbs/[path]"
  lang="es"
/>
```

## 🔐 SEO y Meta Tags

- ✅ OpenGraph configurado para redes sociales (Facebook, LinkedIn, etc.)
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Locale alternates para búsqueda multiidioma
- ✅ Sitemap.xml dinámico
- ✅ Robots.txt configurado
- ✅ PWA Manifest para instalación en dispositivos

Valida los meta tags aquí: https://www.opengraph.xyz/

## 👥 Equipo

**Organizadores**: Comunidad de Biología Sintética (CBS-UNMSM)
- **Presidente**: Marko Zapata
- **Coordinador General**: Valery Velasquez
- **Coordinador Académico**: Rodrigo Puertas

Y más miembros del equipo en la página "Equipo"

## 📧 Contacto

- **Email**: cbsunmsm@gmail.com
- **Facebook**: [CBS-UNMSM](https://www.facebook.com/cbsunmsm)
- **Instagram**: [@cbsunmsm](https://www.instagram.com/cbsunmsm/)
- **LinkedIn**: [CBS-UNMSM](https://www.linkedin.com/company/cbs-unmsm/)

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🙏 Créditos

- Desarrollado con [Astro](https://astro.build)
- Diseño con [Tailwind CSS](https://tailwindcss.com)
- Hospedado en [GitHub Pages](https://pages.github.com)
- Organizado por la Comunidad de Biología Sintética UNMSM

---

**Última actualización**: 6 de Febrero, 2026  
**Status**: ✅ En vivo en GitHub Pages  
**Sitio**: https://markoazr.github.io/symposium-cbs/
