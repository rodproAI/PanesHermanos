// app.js 
// app.js
function renderProduct(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
      
      <button class="edit-btn">Editar</button>
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', () => {

    /* TAREAS DE CÉSAR (FUNCIONALIDAD CREATE) */
    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // TAREA 7
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;
            console.log('Datos leídos del formulario:');
            console.log({ nombre, descripcion, precio, imagen });
            
        });
    }
});
