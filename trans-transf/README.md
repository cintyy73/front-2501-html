# 🎨 Transitions & Transformations en CSS

Este proyecto contiene ejemplos prácticos de transiciones y transformaciones usando solo HTML y CSS.

## ✅ Qué incluye

- Botones con `transition` + `hover`
- Tarjetas con `transform: scale`, `rotate`, `translate`
- Imágenes con zoom, rotación, deslizamiento y filtro invertido
- Flip cards 3D usando `transform-style` y `perspective`
- Clases reutilizables: `.text-large`, `.is-success`, `.effect-zoom`, etc.

## 📌 Buenas prácticas aplicadas

- Separación de contenido (`HTML`) y presentación (`CSS`)
- Nombres de clases en inglés con `kebab-case`
- Comentarios explicativos en CSS
- Código limpio y responsive
- Uso de modificadores con prefijo `is-` para estados


---

## 📘`transition` y `transform` en CSS

````markdown
# 🎨 Transiciones y Transformaciones en CSS

En este documento encontrarás una introducción clara y práctica a las propiedades **`transition`** y **`transform`** de CSS, usadas para crear efectos visuales y animaciones simples.

---

## 🎬 ¿Qué es `transition`?

La propiedad `transition` permite crear **efectos de cambio suave** entre valores de propiedades CSS, por ejemplo al pasar el mouse (`:hover`), enfocar un campo (`:focus`), o activar una clase con JavaScript.

### 📌 Sintaxis

```css
selector {
  transition: propiedad duración función_de_tiempo retraso;
}
````

* **propiedad**: cuál se va a animar (`color`, `background-color`, `transform`, etc.)
* **duración**: cuánto dura el cambio (ej. `0.3s`)
* **función\_de\_tiempo**: curva de velocidad (`ease`, `linear`, `ease-in`, `ease-out`, etc.)
* **retraso** *(opcional)*: cuánto esperar antes de empezar

### 🧪 Ejemplo

```css
.button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

.button:hover {
  background-color: green;
}
```

🔁 Al pasar el mouse, el fondo cambiará **suavemente** de azul a verde en 0.5 segundos.

---

## ✨ ¿Qué es `transform`?

La propiedad `transform` permite aplicar **cambios visuales directos** como mover, escalar, rotar o inclinar un elemento.

### 🧰 Funciones más comunes

* `translate(x, y)` → Mueve en el eje X e Y
* `scale(x)` → Escala (aumenta o reduce tamaño)
* `rotate(deg)` → Rota
* `skew(x, y)` → Inclina

### 🧪 Ejemplo

```css
.card {
  transform: rotate(10deg) scale(1.2);
}
```

🧭 Aplica **una rotación de 10°** y un **aumento del 20%** al elemento. El cambio es inmediato (sin transición).

---

## 🧪 Usar ambas juntas

```css
.box {
  transition: transform 0.4s ease;
}

.box:hover {
  transform: scale(1.2) rotate(5deg);
}
```

✔️ Aquí se usa `transition` para suavizar el efecto de `transform` al hacer `hover`.

---

## 📦 Buenas prácticas

* Usar `transition` solo cuando tenga sentido mejorar la experiencia visual.
* Siempre definir propiedades específicas en lugar de `all`, si es posible.
* Recordar que `transform` **no afecta el flujo del documento** (es decir, no empuja ni mueve otros elementos alrededor).
* Combinar con `:hover`, `:focus` o `clases dinámicas` para interacciones.

---


## 📚 Recursos adicionales

* [MDN Web Docs - transition](https://developer.mozilla.org/es/docs/Web/CSS/transition)
* [MDN Web Docs - transform](https://developer.mozilla.org/es/docs/Web/CSS/transform)
* [CSS Tricks - A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)
* [CSS Tricks - A Complete Guide to CSS Transforms](https://css-tricks.com/almanac/properties/t/transform/)

---

