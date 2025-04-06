// Cargar productos de ejemplo
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("productos-container");
  
    // Simulación de productos (más adelante puedes usar fetch a productos.json)
    const productos = [
      {
        id: 1,
        nombre: "Eau de Parfum Rosa",
        precio: 120.0,
        imagen: "assets/img/perfume1.jpg"
      },
      {
        id: 2,
        nombre: "Aroma del Bosque",
        precio: 99.99,
        imagen: "assets/img/perfume2.jpg"
      },
      {
        id: 3,
        nombre: "Essence Gold",
        precio: 150.5,
        imagen: "assets/img/perfume3.jpg"
      }
    ];
  
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
  