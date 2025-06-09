
# 🧭 Guía de CSS: Position, Float y Clear

Este proyecto contiene ejemplos prácticos y explicaciones claras sobre las propiedades de **`position`**, **`float`** y **`clear`** en CSS. Ideal para entender cómo se comportan estos elementos en el flujo del documento.

---

## 📌 1. Position en CSS

### 🔹 Tipos de `position`

| Valor     | ¿Respecto a qué se posiciona?                   | Se mantiene en el flujo |
|-----------|--------------------------------------------------|--------------------------|
| `static`  | Es el valor por defecto. Sigue el flujo normal. | ✅ Sí                   |
| `relative`| A sí mismo. Permite moverlo desde su posición.  | ✅ Sí                   |
| `absolute`|Permite moverlo desde el borde sup izq dfel contenedor
| `fixed`   | A la ventana (viewport). No se mueve al hacer scroll. | ❌ No |
| `sticky`  | Es estático hasta cierto punto, luego se fija al scroll. | ✅ Parcialmente |

---

### ✅ Ejemplo comparativo: `fixed` vs `sticky`

```html
<div class="fixed">🔴 Fixed</div>
<div class="sticky">🔵 Sticky</div>

.fixed {
  position: fixed;
  top: 20px;
  left: 20px;
}

.sticky {
  position: sticky;
  top: 10px;
}
Explicación:

🔴 fixed: se mantiene siempre visible, sin importar el scroll. Se posiciona respecto al viewport.

🔵 sticky: se comporta como static hasta que el scroll lo empuja a top: 10px, donde se queda fijo dentro de su contenedor.

💡 2. Coordenadas y referencia
Cuando usamos top, left, bottom, o right:

En relative: se mueve desde su posición original.

En absolute, fixed: se posiciona respecto al contenedor posicionado o al viewport.

En sticky: comienza como flujo normal y se posiciona cuando se cumple la condición de scroll.

🌊 3. Float y Clear
🔹 ¿Qué hace float?
Permite que un elemento se saque del flujo normal y flote a la izquierda o derecha.

Los elementos siguientes fluyen al costado si hay espacio.

🔹 ¿Qué hace clear?
Restablece el flujo normal evitando que elementos flotantes se coloquen al lado.

Valores posibles: left, right, both.

✅ Ejemplo de float con clear
html

<div class="flotante">🔵 Flotante (float: left)</div>
<div class="contenido">Texto que fluye al lado del flotante.</div>

<div class="clear"></div>

<div class="contenido">Texto que aparece debajo gracias a clear: left.</div>

.flotante {
  float: left;
  width: 200px;
  height: 100px;
  background-color: lightblue;
}

.clear {
  clear: left;
}

Explicación:

.flotante flota a la izquierda.

El texto siguiente se acomoda al costado.

El div con clear: left fuerza al contenido a continuar por debajo, recuperando el flujo.



