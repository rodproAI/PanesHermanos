const products = []; 

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
