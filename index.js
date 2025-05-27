document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Detiene el envío tradicional

    const formData = new FormData(form);
    const datos = {};

    for (const [clave, valor] of formData.entries()) {
      // Agrupar datos repetidos (ej: checkboxes)
      if (datos[clave]) {
        if (Array.isArray(datos[clave])) {
          datos[clave].push(valor);
        } else {
          datos[clave] = [datos[clave], valor];
        }
      } else {
        datos[clave] = valor;
      }
    }

    console.log("📋 Datos del formulario:", datos);
  });
});
