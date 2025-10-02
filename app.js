// app.js
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">${product.price}</p>
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

    // ==========================================================
    // == TAREA 3 DE RODRIGO (FUNCIONALIDAD DELETE)            ==
    // ==========================================================

    const productContainer = document.querySelector('#product-container');

    // Solo añadimos el listener si el contenedor de productos existe en la página actual
    if (productContainer) {
      productContainer.addEventListener('click', (event) => {
        // Verificamos si el elemento donde se hizo clic tiene la clase 'delete-btn'
        if (event.target.classList.contains('delete-btn')) {
          console.log('¡Se hizo clic en un botón de eliminar!');
        }
      });
    }
});