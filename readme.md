
# 📦 Guía Básica de Flexbox en CSS

Flexbox (Flexible Box) es un modelo de diseño en CSS que permite alinear y distribuir espacio entre elementos dentro de un contenedor, facilitando la creación de diseños responsivos y flexibles.

---

## 🧱 Estructura básica

Para usar Flexbox, aplicá `display: flex` al contenedor:

```css
.contenedor {
  display: flex;
}
````

Los elementos hijos se convierten automáticamente en ítems flexibles.

---

## 🔧 Propiedades del contenedor (padre)

### `display: flex`

Activa el modo Flexbox.

### `flex-direction`

Define la dirección del eje principal:

* `row` (por defecto)
* `row-reverse`
* `column`
* `column-reverse`

```css
.contenedor {
  flex-direction: row;
}
```

### `justify-content`

Alinea los ítems en el eje principal:

* `flex-start`
* `center`
* `flex-end`
* `space-between`
* `space-around`
* `space-evenly`

```css
.contenedor {
  justify-content: space-between;
}
```

### `align-items`

Alinea los ítems en el eje cruzado:

* `stretch` (por defecto)
* `flex-start`
* `center`
* `flex-end`
* `baseline`

```css
.contenedor {
  align-items: center;
}
```

### `flex-wrap`

Permite que los ítems salten a la siguiente línea:

* `nowrap` (por defecto)
* `wrap`
* `wrap-reverse`

```css
.contenedor {
  flex-wrap: wrap;
}
```

---

## ⚙️ Propiedades de los ítems (hijos)

### `flex-grow`

Cuánto puede crecer un ítem en proporción a los demás:

```css
.item {
  flex-grow: 1;
}
```

### `flex-shrink`

Cuánto puede encogerse un ítem:

```css
.item {
  flex-shrink: 1;
}
```

### `flex-basis`

Tamaño base del ítem:

```css
.item {
  flex-basis: 200px;
}
```

### `flex`

Atajo de las tres anteriores:

```css
.item {
  flex: 1 1 200px;
}
```

### `align-self`

Sobrescribe el `align-items` para un ítem específico:

```css
.item {
  align-self: flex-end;
}
```

---

## 💡 Ejemplo completo

```html
<div class="contenedor">
  <div class="item">Uno</div>
  <div class="item">Dos</div>
  <div class="item">Tres</div>
</div>
```

```css
.contenedor {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
}

.item {
  background: #2196f3;
  color: white;
  padding: 20px;
  border-radius: 8px;
}
```

---

## 📚 Recursos recomendados

* 🎮 [Flexbox Froggy](https://flexboxfroggy.com/)
* 📘 [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* 📖 [MDN Web Docs - Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/flex)




