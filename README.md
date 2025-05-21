# Consigna Clase 9: Crear una Landing Page básica con HTML y CSS

## Objetivo

Crear una página web sencilla que incluya:

- Encabezado con logo y menú de navegación
- Sección principal con título y texto descriptivo
- Lista de contenidos o características
- Galería de imágenes
- Pie de página con información de contacto

Además, aplicar estilos básicos en CSS para que la página tenga un diseño limpio y responsivo.

---

## Paso a paso

### 1. Estructura básica de HTML

- Crea un archivo llamado `index.html`.
- Añade la estructura básica HTML5 (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- En el `<head>` incluye:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - Un `<title>` para tu página.
  - El enlace a tu archivo CSS:
    ```html
    <link rel="stylesheet" href="styles.css" />
    ```

### 2. Encabezado con logo y menú

- Dentro del `<body>`, crea un `<header>`.
- Añade un `<div>` con clase `logo` para el nombre o logo.
- Crea un menú de navegación con `<nav>`, y dentro una lista `<ul>` con al menos 3 enlaces `<a>` a secciones internas (usa `href="#seccion"`).

### 3. Sección principal (Hero)

- Crea una sección con id `main-header` o `home`.
- Añade un título principal (`<h1>`) llamativo.
- Añade un párrafo descriptivo.
- Opcional: agrega una imagen de fondo con CSS.

### 4. Sección de contenidos

- Crea una sección con id `features`.
- Añade un título (`<h2>`) y una lista `<ul>` con 3 puntos que expliquen los temas o beneficios.

### 5. Galería de imágenes

- Crea una sección con clase `gallery`.
- Añade un título (`<h2>`).
- Dentro, crea un contenedor con clase `image-grid`.
- Añade al menos 3 imágenes (`<img>`).

### 6. Pie de página (Footer)

- Crea un `<footer>`.
- Añade un texto de copyright.
- Incluye un correo electrónico con enlace `mailto:`.

---

## Estilos CSS básicos (`styles.css`)

- Resetea márgenes y paddings:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  Define una fuente legible (ejemplo: Arial).
  ```

- Estiliza el header con fondo oscuro, texto blanco y menú horizontal.

- Dale estilo al título principal para que sea grande y llamativo.

- Estiliza las listas para que no tengan viñetas.

- Usa display: grid para la galería de imágenes con varias columnas.

- Estiliza el footer con fondo oscuro y texto blanco.

- Añade estilos responsivos con media queries para móviles (por ejemplo, menú vertical en pantallas pequeñas).

### Extras (Opcional)
- Efectos hover en enlaces e imágenes.

- Colores suaves y agradables.

- Scroll suave para enlaces internos:
  ```css
  html {
   scroll-behavior: smooth;
  }
 
  ```     

¡A programar y divertirse creando su primera landing page!
