// Cargar productos de ejemplo
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("productos-container");
  
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>S/ ${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      container.appendChild(div);
    });
  });
  
  function agregarAlCarrito(id) {
    alert(`Producto ${id} agregado al carrito (aquí irá la lógica real luego)`);
  }
  