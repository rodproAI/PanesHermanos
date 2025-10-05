// app.js
<<<<<<< Updated upstream
=======

// 1. Array que funcionará como base de datos temporal
let baseDeDatosProductos = [];

// 2. Función para renderizar un producto en el DOM
>>>>>>> Stashed changes
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
<<<<<<< Updated upstream
      <p class="product-price">${product.price}</p>
      // La siguiente línea es la que debes agregar:
      <button class="delete-btn" data-id="${product.id}">Eliminar</button>
=======
      <p class="product-price">$${product.price}</p>
      
      <div class="product-actions">
        <button class="edit-btn" data-id="${product.id}">Editar</button>
        <button class="delete-btn" data-id="${product.id}">Eliminar</button>
      </div>
>>>>>>> Stashed changes
    </div>
  `;
}

// Función para mostrar/refrescar todos los productos en el DOM
function displayProducts() {
    const productContainer = document.querySelector('#product-container');
    if (productContainer) {
        productContainer.innerHTML = '';
        baseDeDatosProductos.forEach(producto => {
            productContainer.innerHTML += renderProduct(producto);
        });
    }
}

// Función para eliminar un producto por su ID
function deleteProductById(id) {
    // Filtra el array, creando uno nuevo sin el producto a eliminar
    baseDeDatosProductos = baseDeDatosProductos.filter(producto => producto.id.toString() !== id);
    // Vuelve a "dibujar" los productos para que el cambio se refleje en la pantalla
    displayProducts();
}


// 3. Lógica principal que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {

<<<<<<< Updated upstream
    /* TAREA 6 DE CÉSAR (FUNCIONALIDAD CREATE)  */

=======
    /* ==============================================
       SECCIÓN DE CÉSAR - FORMULARIO DE AGREGAR PRODUCTO
       ============================================== */
>>>>>>> Stashed changes
    const formulario = document.querySelector('#form-agregar-producto');
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
<<<<<<< Updated upstream
            console.log('Formulario capturado, ¡página no recargada!');
        });
    }
=======
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return;
            }

            const producto = {
                id: Date.now(),
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                imagen: imagen
            };

            baseDeDatosProductos.push(producto);
            alert('¡Producto agregado con éxito!');
            formulario.reset();
            displayProducts(); // Actualiza la vista para mostrar el nuevo producto
        });
    }

    /* ==============================================
       SECCIÓN DE RODRIGO - LÓGICA PARA ELIMINAR
       ============================================== */
    const productContainer = document.querySelector('#product-container');
    if (productContainer) {
      productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
          const userConfirmed = confirm('¿Estás seguro de que quieres eliminar este producto?');
          
          if (userConfirmed) {
            const productId = event.target.dataset.id;
            deleteProductById(productId);
          } else {
            console.log("El usuario canceló el borrado.");
          }
        }
      });
    }

    // Carga inicial de productos (si es necesario)
    displayProducts();
>>>>>>> Stashed changes
});