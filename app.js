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
            
            // TAREA 7: Leer los datos de los inputs
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            // TAREA 8:
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return; 
            }

            // TAREA 9: Crear un objeto con los datos del producto
            const producto = {
                id: Date.now(), 
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio), 
                imagen: imagen
            };

            console.log('Objeto de producto creado:');
            console.log(producto);
        });
    }
});