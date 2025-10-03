// app.js  
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
    </div>
  `;
}


ddocument.addEventListener('DOMContentLoaded', () => {
    /*  LÓGICA PARA EL FORMULARIO DE AGREGAR PRODUCTO  */
    /* TAREA 6 / */

    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            console.log('Formulario capturado, ¡página no recargada!');
        });
    }
});