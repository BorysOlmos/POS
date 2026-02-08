// 1. Tu URL de Google (la que ya tenemos)
const URL_ORIGINAL = "https://script.google.com/macros/s/AKfycbzXOaRPWuOVn5NzKIvbVGMp-1LDbsr2wBwUS3rCK-nhoAPm7YtMB1lAkZ6RQAvRosu5/exec";

// 2. Usamos un Proxy para saltar el bloqueo de CORS
const API_URL = "https://corsproxy.io/?" + encodeURIComponent(URL_ORIGINAL);

async function probarConexion() {
    console.log("Intentando conectar a través de Proxy...");
    
    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        
        console.log("¡CONEXIÓN EXITOSA!", datos);
        
        document.body.innerHTML = `
            <h1 style="color: green;">✅ ¡CONEXIÓN LOGRADA CON PROXY!</h1>
            <p>Se encontraron ${datos.length} productos.</p>
            <button onclick="location.reload()">Refrescar</button>
        `;
    } catch (error) {
        console.error("Error:", error);
        document.body.innerHTML = `
            <h1 style="color: red;">❌ El Proxy no pudo entrar</h1>
            <p>Google sigue pidiendo inicio de sesión.</p>
            <p>Probemos lo siguiente: <a href="${URL_ORIGINAL}" target="_blank">Haz clic aquí para loguearte en Google</a> y luego refresca esta página.</p>
        `;
    }
}

window.onload = probarConexion;
