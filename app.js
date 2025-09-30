// app.js
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">${product.price}</p>
      // La siguiente línea es la que debes agregar:
      <button class="delete-btn" data-id="${product.id}">Eliminar</button>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {

    /* TAREA 6 DE CÉSAR (FUNCIONALIDAD CREATE)  */

    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            console.log('Formulario capturado, ¡página no recargada!');
        });
    }
});