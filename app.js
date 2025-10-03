//daza tarea 1


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

const products = []; // Array de prueba

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>Aún no hay panes registrados</p>";
    return;
  }

  products.forEach(product => {
    container.innerHTML += renderProduct(product);
  });
}
//cargar pagina
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar productos al cargar la página
  displayProducts();

  /* TAREA 6 DE CÉSAR (FUNCIONALIDAD CREATE)  */
  const formulario = document.querySelector('#form-agregar-producto');

  if (formulario) {
      formulario.addEventListener('submit', (evento) => {
          evento.preventDefault();
          console.log('Formulario capturado, ¡página no recargada!');
      });
  }
});

// Lógica principal que se ejecuta al 
document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('DOMContentLoaded', () => {

    /* TAREAS DE CÉSAR */


ddocument.addEventListener('DOMContentLoaded', () => {
    /*  --FORMULARIO DE AGREGAR PRODUCTO  */
    /* TAREA 6 */

    const formulario = document.querySelector('#form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // Tarea 7: Leer los datos de los inputs
            // TAREA 7 --
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
            console.log('Datos leídos del formulario:');
            console.log({ nombre, descripcion, precio, imagen });
            
        });
    }
});
