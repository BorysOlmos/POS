// 1. Tu URL de Google (la que ya tenemos)
const URL_ORIGINAL = "https://script.google.com/macros/s/AKfycbzXOaRPWuOVn5NzKIvbVGMp-1LDbsr2wBwUS3rCK-nhoAPm7YtMB1lAkZ6RQAvRosu5/exec";

function conectarConGoogle() {
    console.log("Iniciando conexión por salto de valla (JSONP)...");
    
    // Creamos una función que recibirá los datos
    window.recibirDatos = function(datos) {
        console.log("¡DATOS RECIBIDOS!", datos);
        document.body.innerHTML = `
            <h1 style="color: green;">✅ ¡CONECTADO!</h1>
            <p>Se cargaron ${datos.length} productos con éxito.</p>
            <pre>${JSON.stringify(datos[0], null, 2)}</pre>
        `;
    };

    // Creamos el "puente"
    const script = document.createElement('script');
    script.src = URL_GOOGLE + "?callback=recibirDatos";
    document.body.appendChild(script);
}

window.onload = conectarConGoogle;
