# 🧪 Pseudo-clases CSS — Guía paso a paso

## 🔹 1. `:not()` — Excluir un selector
**Ubicación:** Justo después del título "1. :not()".

**Acción:** Mostrar ambos botones.

✅ El botón sin clase `.primary` se ve con fondo gris y texto negro.

📌 *Explicación:* `button:not(.primary)` aplica estilos a todos los botones que **no tienen** la clase `primary`.

---

## 🔹 2. `:nth-child(n)` — Hijo n-ésimo
**Ubicación:** En la lista `<ul>`.

✅ El segundo `<li>` se ve azul y en negrita.

📌 *Explicación:* `li:nth-child(2)` selecciona el segundo hijo en el orden en que aparecen en el padre.

---

## 🔹 3. `:nth-of-type(n)` — n-ésimo de su tipo
**Ubicación:** Dentro del `<section>` con párrafos.

✅ El segundo `<p>` se ve en color púrpura y cursiva.

📌 *Explicación:* `p:nth-of-type(2)` selecciona el segundo elemento `<p>`, sin importar otros hijos de distinto tipo.

---

## 🔹 4. `:hover` — Al pasar el mouse
**Ubicación:** En el enlace.

🖱 Pasá el cursor sobre el enlace.

✅ Cambia a color naranja y se subraya.

📌 *Explicación:* `a:hover` se activa cuando el cursor está encima del enlace.

---

## 🔹 5. `:active` — Al hacer clic
**Ubicación:** En el botón.

🖱 Hacé clic y mantenelo presionado.

✅ El botón se achica y cambia el fondo.

📌 *Explicación:* `button:active` aplica estilo **mientras se hace clic**.

---

## 🔹 6. `:focus` — Al enfocar un input
**Ubicación:** En el campo de texto.

🖱 Hacé clic dentro del input.

✅ Se dibuja un borde azul.

📌 *Explicación:* `input:focus` se activa cuando el campo recibe el foco.

---

## 🔹 7. `:target` — Enlace anclado
**Ubicación:** En el link "Ver más información".

🖱 Hacé clic en el enlace.

✅ Se resalta el bloque con fondo amarillo.

📌 *Explicación:* `#info:target` aplica estilo cuando el elemento con id `info` es el destino de un enlace.

---

## 🔹 8. `:checked` — Elemento marcado
**Ubicación:** Casilla de verificación.

🖱 Marcá el checkbox.

✅ El `label` se pone verde con texto blanco.

📌 *Explicación:* `input[type="checkbox"]:checked + label` aplica estilo al `label` cuando el `checkbox` está marcado.

---

## 🔹 9. `:valid / :invalid` — Validación del input
**Ubicación:** En el campo de email.

🖱 Probá escribir:
- Una dirección válida (`ej@ej.com`) → ✅ borde verde.
- Una inválida (`texto`) → ❌ borde rojo.

📌 *Explicación:* El navegador aplica validación HTML5; CSS lo resalta con `:valid` y `:invalid`.

---

## 🔹 10. `:placeholder-shown` — Mientras el placeholder está visible
**Ubicación:** En el input de texto con placeholder.

✅ Mientras no escribas nada, el texto es gris.

📌 *Explicación:* `input:placeholder-shown` aplica estilo solo cuando el placeholder es visible (es decir, el campo está vacío).

---


