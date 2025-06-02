# 🌟 Selectores Avanzados y Pseudo-clases en CSS

## 🎯 Objetivo de la Actividad

Crear un mini sitio web con estilos avanzados aplicando los conceptos de:

* Selectores avanzados (atributos, jerarquías, universales).
* Pseudo-clases dinámicas y estructurales.

---

## 📘 Teoría y Ejemplos

### 🔹 1. Selectores Avanzados

#### ✅ Selector de atributo

```css
a[href^="#"] {
  color: teal;
  font-weight: bold;
}
```

🧠 *Qué hace:* selecciona todos los `<a>` que tengan un atributo `href` que comience con `#`.

#### ✅ Selector por tipo de atributo

```css
input[type="email"] {
  border: 2px solid blue;
}
```

🧠 *Qué hace:* selecciona `<input>` que tenga el tipo `email`.

#### ✅ Selector hermano adyacente

```css
h2 + p {
  color: green;
  font-style: italic;
}
```

🧠 *Qué hace:* selecciona el primer `<p>` que esté inmediatamente después de un `<h2>`.

#### ✅ Selector de hermanos generales

```css
li ~ li {
  color: purple;
}
```

🧠 *Qué hace:* selecciona todos los `<li>` que sean hermanos del primero dentro del mismo `<ul>`.

#### ✅ Selector descendiente

```css
section p {
  font-size: 18px;
  line-height: 1.5;
}
```

🧠 *Qué hace:* selecciona todos los `<p>` dentro de un `<section>`, sin importar cuán profundo estén.

#### ✅ Selector de hijo directo

```css
ul > li {
  text-transform: uppercase;
}
```

🧠 *Qué hace:* selecciona solo los `<li>` que son hijos directos de un `<ul>`.

#### ✅ Selector universal

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

🧠 *Qué hace:* aplica estilos a todos los elementos del documento.

### 🔹 2. Pseudo-clases

#### ✅ Dinámicas

```css
button:hover {
  background-color: orange;
  cursor: pointer;
}

a:active {
  color: red;
}
```

🧠 `:hover`: cuando pasamos el mouse por encima.

🧠 `:active`: cuando el enlace está siendo clickeado.

#### ✅ Estructurales

```css
li:nth-child(2) {
  color: magenta;
}

p:nth-of-type(1) {
  background-color: lightblue;
}
```

🧠 `nth-child(2)`: selecciona el segundo hijo (sin importar el tipo de etiqueta).

🧠 `nth-of-type(1)`: selecciona el primer elemento del tipo especificado (por ejemplo, el primer `<p>`).

#### ✅ Validación y estado de formulario

```css
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}

input:placeholder-shown {
  color: gray;
  font-style: italic;
}
```

🧠 `:valid` y `:invalid`: se activan cuando un campo del formulario cumple o no con su tipo/validación.

🧠 `:placeholder-shown`: se aplica cuando el input está vacío y se muestra el placeholder.

---

## ❓ Preguntas de reflexión

1. **¿Qué selector usaste para estilizar el segundo elemento de una lista?**

   * **Respuesta:** `li:nth-child(2)`, que selecciona el segundo hijo de la lista.

2. **¿Qué sucede si cambias `nth-child` por `nth-of-type`?**

   * **Respuesta:**

     * `nth-child(n)` selecciona al n-ésimo hijo sin importar el tipo de etiqueta.
     * `nth-of-type(n)` selecciona al n-ésimo elemento del tipo específico (por ejemplo, el segundo `<p>` aunque no sea el segundo hijo).

   **Ejemplo:**

   ```html
   <div>
     <p>Uno</p>
     <span>Texto</span>
     <p>Dos</p>
   </div>
   ```

   ```css
   p:nth-child(2)   /* ❌ No selecciona nada (porque el segundo hijo es un <span>) */
   p:nth-of-type(2) /* ✅ Selecciona el segundo <p> */
   ```

3. **¿Qué ventajas tiene usar selectores avanzados y pseudo-clases en lugar de clases tradicionales?**

   * Permiten un CSS más inteligente y limpio.
   * Se adaptan a la estructura del HTML, reduciendo la necesidad de muchas clases.
   * Facilitan la interactividad sin JavaScript (`:hover`, `:focus`, etc.).
   * Hacen el código más semántico y reutilizable.
   * Ayudan a mantener el HTML más liviano y legible.
