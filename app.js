// app.js 
// app.js

// 1. Array que funcionará como base de datos temporal
let baseDeDatosProductos = [];

// Función de Daza para renderizar un producto


let baseDeDatosProductos = [];



// app.js 
// app.js
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

document.addEventListener('DOMContentLoaded', () => {


// Lógica principal que se ejecuta al 
document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la página de edición (editar_producto.html)
    const formEditar = document.querySelector('#form-editar-producto'); // Asegúrate que tu form de edición tenga este ID
    // Listener para el envio del formulario de edición
    if (formEditar) {
        const productId = localStorage.getItem('editProductId');
        const productoAEditar = baseDeDatosProductos.find(producto => producto.id == productId);

        if (productoAEditar) {
            document.querySelector('#edit-id').value = productoAEditar.id;
            document.querySelector('#nombre').value = productoAEditar.nombre;
            document.querySelector('#descripcion').value = productoAEditar.descripcion;
            document.querySelector('#precio').value = productoAEditar.precio;
            document.querySelector('#imagen').value = productoAEditar.imagen;
        }
        formEditar.addEventListener('submit', (evento) => {
            evento.preventDefault();
            console.log('Submit detectado en formulario de edición.');


        });
    }
});

    /* TAREAS DE CÉSAR */


ddocument.addEventListener('DOMContentLoaded', () => {
    /*  --FORMULARIO DE AGREGAR PRODUCTO  */
    /* TAREA 6 */

    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // TAREA 7
            // TAREA 7: 
            // Tarea 7: 
            // Tarea 7: Leer los datos de los inputs
            // TAREA 7 --
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            // TAREA 8: 
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                // Si algún campo está vacío, mostramos una 
                alert('Todos los campos son obligatorios.');
               
                return;
            }

            console.log('Validación pasada. Datos leídos:');
            console.log({ nombre, descripcion, precio, imagen });
            // TAREA 8:
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return; 
            }

            // TAREA 9: 
            const producto = {
                id: Date.now(), 
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio), 
                imagen: imagen
            };

            console.log('Objeto de producto creado:');
            console.log(producto);
            // Tarea 8:
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

            console.log('Base de datos actual:', baseDeDatosProductos);
            console.log('Datos leídos del formulario:');
            console.log({ nombre, descripcion, precio, imagen });
            
        });
    }
});
