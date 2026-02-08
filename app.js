let API_URL = localStorage.getItem("url_google_sheets");
const db = new Dexie("PanaderiaDB");
db.version(1).stores({ productos: 'ID, Categoria', ventas: '++id' });
let carrito = [];

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js'); }

async function verificarConfiguracion() {
    if (!API_URL) {
        let urlPropuesta = prompt("BIENVENIDO\n\nPor favor, pega la URL de Google Sheets (/exec):");
        if (urlPropuesta && urlPropuesta.includes("script.google.com")) {
            localStorage.setItem("url_google_sheets", urlPropuesta);
            API_URL = urlPropuesta;
            location.reload();
        }
    }
}

async function sincronizar() {
    try {
        const res = await fetch(API_URL, { method: 'GET', redirect: 'follow' });
        if (!res.ok) throw new Error("Error en la respuesta de Google");
        
        const data = await res.json();
        
        if (data && data.length > 0) {
            await db.productos.clear();
            await db.productos.bulkAdd(data);
            console.log("✅ Sincronización exitosa");
        }
    } catch(e) { 
        console.error("❌ Error de sincronización:", e);
        // Si hay error de red, preguntamos si desea resetear la URL
        if (confirm("No se pudo conectar con Google Sheets. ¿Deseas borrar la URL guardada para intentar con una nueva?")) {
            localStorage.removeItem("url_google_sheets");
            location.reload();
        }
    }
}

window.onload = async () => {
    await verificarConfiguracion();
    if (API_URL) {
        if (navigator.onLine) await sincronizar();
        
        const prods = await db.productos.toArray();
        if (prods.length > 0) {
            const cats = [...new Set(prods.map(p => p.Categoria))];
            document.getElementById('categories-sidebar').innerHTML = cats.map(c => 
                `<button class="btn-cat" onclick="mostrarProductos('${c}')">${c}</button>`).join('');
            
            // Solo intentamos mostrar productos si existen categorías
            if (cats.length > 0) mostrarProductos(cats[0]);
        } else {
            document.getElementById('products-grid').innerHTML = "<h3>No hay productos. Revisa tu Excel y la URL de Google.</h3>";
        }
    }
};

async function mostrarProductos(cat) {
    const prods = await db.productos.where('Categoria').equals(cat).toArray();
    document.getElementById('products-grid').innerHTML = prods.map(p => `
        <div class="card" style="background:${p.Color_Boton || '#f4a460'}" onclick="add('${p.ID}','${p.Nombre}',${p.Precio_Venta})">
            ${p.Nombre}<br>$${p.Precio_Venta}
        </div>`).join('');
}

function add(id, nombre, precio) {
    const item = carrito.find(i => i.id === id);
    item ? item.cantidad++ : carrito.push({id, nombre, precio, cantidad:1});
    dibujarTicket();
}

function dibujarTicket() {
    let t = 0;
    document.getElementById('items-list').innerHTML = carrito.map(i => {
        t += i.precio * i.cantidad;
        return `<div class="ticket-item"><span>${i.nombre} x${i.cantidad}</span><span>$${i.precio * i.cantidad}</span></div>`;
    }).join('');
    document.getElementById('total-amount').innerText = t;
}

async function procesarPago() {
    if (carrito.length === 0) return;
    const venta = { id_venta: Date.now(), items: carrito, total: document.getElementById('total-amount').innerText, usuario: "Admin" };
    document.getElementById('p-fecha').innerText = new Date().toLocaleString();
    document.getElementById('p-total').innerText = venta.total;
    document.getElementById('p-items').innerHTML = document.getElementById('items-list').innerHTML;
    window.print();
    if (navigator.onLine) fetch(API_URL, { method: 'POST', body: JSON.stringify(venta) });
    carrito = []; dibujarTicket();
}
