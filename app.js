

let baseDeDatosProductos = [];



function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
      
      <div class="product-actions">
        <button class="edit-btn" data-id="${product.id}">Editar</button>
      </div>
    </div>
  `;
}


// Lógica principal que se ejecuta al cargar l
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // Tarea 7: Leer los datos de los inputs
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            // Tarea 8: Validar que los campos no estén vacíos
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return; // Detiene la ejecución si hay un error
            }

            // Tarea 9: Crear un objeto con los datos del producto
            const producto = {
                id: Date.now(),
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                imagen: imagen
            };

            // Tarea 10: Guardar el producto y limpiar el formulario
            baseDeDatosProductos.push(producto);
            alert('¡Producto agregado con éxito!');
            formulario.reset();

            console.log('Base de datos actual:', baseDeDatosProductos);
        });
    }
});
