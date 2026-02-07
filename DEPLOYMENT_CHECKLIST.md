# CBS Symposium 2026 - Deployment Checklist

## ✅ Pre-Deployment Configuration
- [x] **Favicons Configurados**
  - `/public/favicon.ico` - Favicon estándar
  - `/public/favicon.svg` - Favicon SVG
  - `/public/images/logos/cbs_logo.png` - Apple touch icon

- [x] **OpenGraph Meta Tags**
  - og:title, og:description, og:image
  - og:url, og:type, og:site_name
  - og:locale (es_PE / en_US)

- [x] **Twitter Card Meta Tags**
  - twitter:card (summary_large_image)
  - twitter:title, twitter:description, twitter:image

- [x] **PWA Configuration**
  - `/public/manifest.json` - Web app manifest
  - Theme color: #0EA5E9

- [x] **SEO Optimization**
  - `/public/robots.txt` - Archivo de robots
  - `/public/sitemap.xml` - Mapa del sitio XML
  - Canonical URLs configuradas

## 📋 Archivos Modificados

### MainLayout.astro
- Actualizados meta tags de OpenGraph
- Agregados favicon links con base path
- Agregado manifest.json reference
- Agregados theme-color y canonical URL

### Nuevos Archivos
- `public/manifest.json` - Web App Manifest para PWA
- `public/robots.txt` - Configuración de robots
- `public/sitemap.xml` - Mapa del sitio

## 🚀 Pasos para Deployment

### 1. Validar Compilación Local
```bash
npm run build
npm run preview
```

### 2. Verificar Archivos de Deployment
- Asegurar que `/dist/` contiene todos los archivos
- Verificar que los favicons estén en `/dist/`
- Verificar que `/dist/sitemap.xml` exista

### 3. Push a GitHub
```bash
git add .
git commit -m "Deploy: Configure favicon, OpenGraph, and PWA support"
git push origin main
```

### 4. Monitorear Deploy
- Ir a: https://github.com/markoazr/symposium-cbs/actions
- Esperar a que el workflow Complete
- Verificar en: https://markoazr.github.io/symposium-cbs/

### 5. Validar après Deployment
- [ ] Verificar favicon en navegador
- [ ] Compartir URLs en redes sociales para verificar OpenGraph preview
- [ ] Verificar mobile app install option
- [ ] Validar sitemap en: https://markoazr.github.io/symposium-cbs/sitemap.xml

## 🔧 Configuración de Astro
- **Base Path**: `/symposium-cbs/`
- **Site URL**: `https://markoazr.github.io/symposium-cbs/`
- **Output**: `static`
- **Astro Version**: ^5.17.1

## 📱 Meta Tags por Página

Cada página debe pasar los siguientes props a MainLayout:
```astro
<MainLayout
  title="Página Title"
  description="Descripción de la página"
  image="/symposium-cbs/images/logos/cbs_logo.png"
  url="https://cbs-unmsm.org/symposium-cbs/[path]"
  currentPage="[page-id]"
  lang="es|en"
/>
```

## 🎨 Colores de Branding
- **Primary Blue**: #0EA5E9
- **Dark Blue**: #1E3A8A
- **Accent Green**: #10B981
- **Lime**: #84CC16

## 📊 Performance Tips
- Images optimizadas (usar `/public/images/`)
- CSS en tailwind.config.mjs
- Fonts preconectados en MainLayout
- Material Icons cargados desde Google Fonts
