// CONFIGURACIÓN BÁSICA
const API_URL = "https://script.google.com/macros/s/AKfycbz6nN5IzQCxv0wjjdIhqCBPoVrMKD6lH0GflTtRk0VYx0DwOdTlYNu9pInYRHEr_o7I/exec";

async function probarConexion() {
    console.log("Intentando conectar a:", API_URL);
    
    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        
        console.log("¡CONEXIÓN EXITOSA!", datos);
        
        if (datos.length > 0) {
            document.body.innerHTML = `
                <h1 style="color: green;">✅ ¡Conexión Exitosa!</h1>
                <p>Se encontraron ${datos.length} productos en tu Excel.</p>
                <pre>${JSON.stringify(datos[0], null, 2)}</pre>
                <button onclick="location.reload()">Probar de nuevo</button>
            `;
        } else {
            document.body.innerHTML = `<h1 style="color: orange;">⚠️ Conectado, pero el Excel está vacío.</h1>`;
        }
    } catch (error) {
        console.error("Error detallado:", error);
        document.body.innerHTML = `
            <h1 style="color: red;">❌ Error de Conexión</h1>
            <p>El navegador bloqueó la respuesta o la URL es incorrecta.</p>
            <p>Detalle: ${error.message}</p>
            <br>
            <small>Revisa que en Google Sheets hayas puesto: 'Cualquiera' en el acceso.</small>
        `;
    }
}

// Ejecutar la prueba al cargar la página
window.onload = probarConexion;
