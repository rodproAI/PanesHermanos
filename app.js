function renderProduct(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
      
      <button class="edit-btn">Editar</button>
    </div>
  `;
}