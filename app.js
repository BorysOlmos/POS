// 1. Configuración de la Base de Datos Local
const db = new Dexie("PanaderiaDB");
db.version(1).stores({ productos: 'ID, Categoria', ventas: '++id' });

// 2. Variable Global (Solo declarada una vez)
let API_URL = localStorage.getItem("url_google_sheets");

// 3. Verificación de la URL
async function verificarConfiguracion() {
    // Si la URL es la vieja o no existe, limpiar
    if (!API_URL || API_URL.includes("C0egYc")) {
        localStorage.removeItem("url_google_sheets");
        let urlPropuesta = prompt("SISTEMA DE RECUPERACIÓN\n\nPor favor, pega la NUEVA URL (la que termina en _o7I/exec):");
        
        if (urlPropuesta && urlPropuesta.includes("script.google.com")) {
            localStorage.setItem("url_google_sheets", urlPropuesta);
            API_URL = urlPropuesta;
            location.reload();
        }
    }
}

// 4. Sincronización con Google
async function sincronizar() {
    try {
        const res = await fetch(API_URL, { method: 'GET', redirect: 'follow' });
        const data = await res.json();
        if (data && data.length > 0) {
            await db.productos.clear();
            await db.productos.bulkAdd(data);
            console.log("✅ Datos actualizados");
        }
    } catch(e) { 
        console.error("Modo Offline: Usando datos locales"); 
    }
}

// 5. Carga de la Aplicación
window.onload = async () => {
    await verificarConfiguracion();
    if (API_URL) {
        if (navigator.onLine) await sincronizar();
        
        const prods = await db.productos.toArray();
        if (prods.length > 0) {
            const cats = [...new Set(prods.map(p => p.Categoria))];
            document.getElementById('categories-sidebar').innerHTML = cats.map(c => 
                `<button class="btn-cat" onclick="mostrarProductos('${c}')">${c}</button>`).join('');
            mostrarProductos(cats[0]);
        } else {
            document.getElementById('products-grid').innerHTML = "<h3>No hay productos. Revisa tu Excel.</h3>";
        }
    }
};

// 6. Funciones de la Interfaz
async function mostrarProductos(cat) {
    const prods = await db.productos.where('Categoria').equals(cat).toArray();
    document.getElementById('products-grid').innerHTML = prods.map(p => `
        <div class="card" style="background:${p.Color_Boton || '#f4a460'}" onclick="add('${p.ID}','${p.Nombre}',${p.Precio_Venta})">
            ${p.Nombre}<br>$${p.Precio_Venta}
        </div>`).join('');
}

let carrito = [];
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
    const venta = { id_venta: Date.now(), items: carrito, total: document.getElementById('total-amount').innerText };
    window.print();
    if (navigator.onLine) fetch(API_URL, { method: 'POST', body: JSON.stringify(venta) });
    carrito = []; dibujarTicket();
}
