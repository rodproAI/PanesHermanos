// app.js

// Array de datos (simulación de base de datos)
let baseDeDatosProductos = [];

// Función para renderizar una tarjeta de producto
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
      <div class="product-actions">
        <button class="edit-btn" data-id="${product.id}">Editar</button>
        <button class="delete-btn" data-id="${product.id}">Eliminar</button>
      </div>
    </div>
  `;
}

// Función para mostrar todos los productos
function displayProducts() {
    const productContainer = document.querySelector('#product-container');
    if (productContainer) {
        productContainer.innerHTML = '';
        baseDeDatosProductos.forEach(producto => {
            productContainer.innerHTML += renderProduct(producto);
        });
    }
}

// Lógica que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {

    const productContainer = document.querySelector('#product-container');
    if (productContainer) {

      productContainer.addEventListener('click', (event) => {
        // Verificamos si el clic fue en un botón de eliminar
        if (event.target.classList.contains('delete-btn')) {
          
          // ==============================================
          // == INICIA CÓDIGO DE LA TAREA 5              ==
          // ==============================================
          if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            const productId = event.target.dataset.id;
            console.log('Usuario confirmó. ID a eliminar:', productId);
          }
          // ==============================================
          // == TERMINA CÓDIGO DE LA TAREA 5             ==
          // ==============================================

        }
      });

    }

    // Carga inicial de productos
    displayProducts();
});