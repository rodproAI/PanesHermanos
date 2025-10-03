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

document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // TAREA 7
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            // TAREA 8: 
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                // Si algún campo está vacío, mostramos una alerta
                alert('Todos los campos son obligatorios.');
               
                return;
            }

            // Si la validación pasa, continuamos y mostramos los datos
            console.log('Validación pasada. Datos leídos:');
            console.log({ nombre, descripcion, precio, imagen });
        });
    }
});