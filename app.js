//daza tarea 1
function renderProduct(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
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