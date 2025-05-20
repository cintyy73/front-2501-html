# Bloque 2 – Unidades Relativas y `calc()`

## 🧠 Teoría

### ✅ Unidades relativas

- `%`: relativo al contenedor padre.
- `vh` y `vw`: 1% del alto o ancho de la ventana.
- `em`: relativo al tamaño de fuente del contenedor.
- `rem`: relativo al tamaño de fuente raíz (`html`).

### ✅ ¿Cuándo usar cada una?

- `%`: cuando se quiere que un elemento se adapte al espacio de su contenedor.
- `vh`/`vw`: para ocupar el alto/ancho completo del viewport.
- `em`/`rem`: para escalar tipografía o espaciados según contexto.

### ✅ `calc()`
Permite hacer cálculos directamente en CSS: `height: calc(100vh - 60px);`

---

## 🧪 Ejemplo
El archivo `unidades-relativas.html` contiene:
- Un `div` con `height: calc(100vh - 60px)`.
- Texto con fuente en `rem` y padding en `em`.
