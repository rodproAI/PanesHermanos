// Simulación de Base de Datos - Array de Productos
// Lo llenamos con algunos datos de ejemplo para que la página no aparezca vacía.
let baseDeDatosProductos = [
    {
        id: Date.now() + 1,
        nombre: 'Concha de Vainilla',
        descripcion: 'Pan dulce tradicional con una costra de azúcar sabor vainilla.',
        precio: 8.50,
        imagen: 'https://www.panaderiabistro702.mx/cdn/shop/files/Disenosintitulo_50_037df50c-5b00-431e-8537-400db574a819_900x.png?v=1729724326'
    },
    {
        id: Date.now() + 2,
        nombre: 'Dona de Chocolate',
        descripcion: 'Dona esponjosa cubierta con un glaseado de chocolate intenso.',
        precio: 12.00,
        imagen: 'https://cdn7.kiwilimon.com/recetaimagen/39525/640x426/51668.png.webp'
    },
    {
        id: Date.now() + 3,
        nombre: 'Baguette Rústica',
        descripcion: 'Pan salado de corteza crujiente y miga suave, ideal para acompañar comidas.',
        precio: 25.00,
        imagen: 'https://abmauri.es/wp-content/uploads/2019/04/baguete-rustica-pt-600x400.jpg'
    }
];

// LÓGICA PRINCIPAL - Se ejecuta cuando el HTML está completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // LÓGICA DE READ (DAZA)
    // ===============================================
    const productContainer = document.querySelector('#product-container');

    function renderProducts() {
        if (productContainer) {
            productContainer.innerHTML = ''; // Limpiamos el contenedor
            if (baseDeDatosProductos.length === 0) {
                productContainer.innerHTML = '<p>No hay productos para mostrar.</p>';
                return;
            }
            baseDeDatosProductos.forEach(producto => {
                const productoHTML = `
                    <div class="product-card">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h2 class="product-name">${producto.nombre}</h2>
                        <p class="product-price">$${producto.precio.toFixed(2)}</p>
                        <div class="product-actions">
                            <button class="edit-btn" data-id="${producto.id}">Editar</button>
                            <button class="delete-btn" data-id="${producto.id}">Eliminar</button>
                        </div>
                    </div>
                `;
                productContainer.insertAdjacentHTML('beforeend', productoHTML);
            });
        }
    }
    
    // Mostramos los productos al cargar la página index.html
    renderProducts();

    // ===============================================
    // LÓGICA DE CREATE (CÉSAR)
    // ===============================================
    const formAgregar = document.querySelector('#form-agregar-producto');

    if (formAgregar) {
        formAgregar.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;

            if (nombre.trim() === '' || descripcion.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
                alert('Todos los campos son obligatorios.');
                return;
            }

            const nuevoProducto = {
                id: Date.now(),
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                imagen: imagen
            };

            baseDeDatosProductos.push(nuevoProducto);
            // Guardamos en localStorage para simular persistencia
            localStorage.setItem('productos', JSON.stringify(baseDeDatosProductos));

            alert('¡Producto agregado con éxito!');
            formAgregar.reset();
            window.location.href = 'index.html'; // Redirigir a la página principal
        });
    }

    // ===============================================
    // LÓGICA DE UPDATE Y DELETE (DAVID Y RODRIGO)
    // ===============================================
    if (productContainer) {
        productContainer.addEventListener('click', (evento) => {
            // Lógica de DELETE (Rodrigo)
            if (evento.target.classList.contains('delete-btn')) {
                const idProducto = parseInt(evento.target.getAttribute('data-id'));
                const confirmacion = confirm('¿Estás seguro de que quieres eliminar este producto?');
                if (confirmacion) {
                    baseDeDatosProductos = baseDeDatosProductos.filter(producto => producto.id !== idProducto);
                    renderProducts(); // Volvemos a dibujar los productos
                }
            }
            // Lógica de UPDATE (David - Parte 1)
            if (evento.target.classList.contains('edit-btn')) {
                const idProducto = evento.target.getAttribute('data-id');
                localStorage.setItem('editProductId', idProducto);
                window.location.href = 'editar_producto.html';
            }
        });
    }
    
    // Lógica de UPDATE (David - Parte 2)
    const formEditar = document.querySelector('#form-editar-producto');
    if (formEditar) {
        const idProducto = localStorage.getItem('editProductId');
        const productoAEditar = baseDeDatosProductos.find(producto => producto.id == idProducto);

        if (productoAEditar) {
            document.querySelector('#edit-id').value = productoAEditar.id;
            document.querySelector('#nombre').value = productoAEditar.nombre;
            document.querySelector('#descripcion').value = productoAEditar.descripcion;
            document.querySelector('#precio').value = productoAEditar.precio;
            document.querySelector('#imagen').value = productoAEditar.imagen;
        }

        formEditar.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const id = document.querySelector('#edit-id').value;
            const nombre = document.querySelector('#nombre').value;
            const descripcion = document.querySelector('#descripcion').value;
            const precio = document.querySelector('#precio').value;
            const imagen = document.querySelector('#imagen').value;
            
            const indice = baseDeDatosProductos.findIndex(p => p.id == id);
            if(indice !== -1) {
                baseDeDatosProductos[indice] = { id: parseInt(id), nombre, descripcion, precio: parseFloat(precio), imagen };
            }

            alert('Producto actualizado correctamente.');
            window.location.href = 'index.html';
        });
    }
});