// app.js
let baseDeDatosProductos = [];

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

function displayProducts() {
    const productContainer = document.querySelector('#product-container');
    if (productContainer) {
        productContainer.innerHTML = '';
        baseDeDatosProductos.forEach(producto => {
            productContainer.innerHTML += renderProduct(producto);
        });
    }
}

function deleteProductById(id) {
    baseDeDatosProductos = baseDeDatosProductos.filter(producto => producto.id.toString() !== id);
    displayProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#form-agregar-producto');
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;
            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return;
            }
            const producto = { id: Date.now(), nombre, descripcion, precio: parseFloat(precio), imagen };
            baseDeDatosProductos.push(producto);
            alert('¡Producto agregado con éxito!');
            formulario.reset();
            displayProducts();
        });
    }

    const productContainer = document.querySelector('#product-container');
    if (productContainer) {
      productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
          if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            const productId = event.target.dataset.id;
            deleteProductById(productId);
          }
          function showToast() {
  const toast = document.getElementById("toast-notification");
  toast.classList.add("show");
  setTimeout(function(){ toast.classList.remove("show"); }, 3000);
}

function deleteProductById(id) {
    baseDeDatosProductos = baseDeDatosProductos.filter(producto => producto.id.toString() !== id);
    displayProducts();
    showToast(); // <-- LÍNEA NUEVA
}
        }
      });
    }
    displayProducts();
});