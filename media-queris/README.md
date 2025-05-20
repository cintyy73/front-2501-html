# Bloque 4 – Media Queries y Breakpoints

## 🧠 Teoría

### ✅ Media Queries
Permiten aplicar diferentes estilos según:
- Ancho de pantalla
- Orientación
- Resolución, etc.

```css
@media (max-width: 768px) {
  body {
    background-color: red;
  }
}
```

### ✅ Breakpoints comunes
- Móviles: 0 – 768px
- Tablets: 769 – 1024px
- Desktop: 1025px en adelante

### ✅ Meta Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Necesario para que el diseño se vea bien en móviles.

---

## 🧪 Ejemplo
El archivo `breakpoints.html` cambia el color de fondo según el tamaño de pantalla, usando tres media queries.
