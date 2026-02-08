# POS
Punto de Venta (POS) gratuito. Funciona sin internet (Offline-First) y usa Google Sheets como base de datos. ¡Fácil de usar e instalar!
# 🥖 PanPOS: Tu Panadería en tu Celular (Gratis y Fácil)

¡Bienvenido! Este sistema es para ti que quieres organizar tu panadería sin pagar programas caros. Funciona aunque no tengas internet y se instala en tu celular como cualquier otra aplicación.

---

## 🎁 Paso 1: Prepara tu "Cuaderno Digital" (Google Sheets)

Imagínate que Google Sheets es tu cuaderno donde anotarás todo.

1. Abre tu cuenta de Google (Gmail).
2. Haz una copia de nuestra plantilla aquí: [PONER AQUÍ TU LINK DE COPIA]
3. En tu hoja de Google, arriba a la derecha, verás un botón que dice **Extensiones** -> luego **Apps Script**.
4. Se abrirá una ventana nueva con un código. No toques nada, solo busca un botón arriba que dice **Implementar** (color azul) y elige **Nueva implementación**.
5. En la tuerca de configuración, elige **App Web**.
6. **MUY IMPORTANTE:** Donde dice "Quién tiene acceso", cámbialo a **Cualquiera**.
7. Dale clic a **Implementar**. Google te dará un enlace largo que termina en `/exec`. **CÓPIALO Y GUÁRDALO.**

---

## 🚀 Paso 2: Pon tu App en Internet (GitHub)

1. Crea una cuenta en GitHub.com (es gratis).
2. Crea un "Nuevo Repositorio" llamado `mipanaderia`.
3. Sube los archivos que descargaste aquí (`index.html`, `app.js`, `estilos.css`, `sw.js`).
4. Ve a la pestaña **Settings** (Ajustes) -> **Pages**.
5. Donde dice "None", cámbialo por **main** y dale a **Save** (Guardar).
6. Espera un minuto y GitHub te dará una dirección de internet (ejemplo: `https://tuusuario.github.io/mipanaderia`). **¡Esa es tu App!**

---

## 📱 Paso 3: ¡A vender! (Configuración Final)

1. Abre el enlace que te dio GitHub desde tu celular.
2. La App te saludará y te pedirá un dato: **"Pega aquí la URL de Google Sheets"**.
3. Pega el enlace largo que guardaste en el **Paso 1** (el que terminaba en `/exec`).
4. ¡Listo! Automáticamente verás tus panes y precios en la pantalla.
5. **Para instalar:** En tu celular busca la opción "Agregar a la pantalla de inicio" en el menú del navegador. ¡Ahora aparecerá el icono junto a tu WhatsApp o Facebook!

---

## 💡 Consejos de Oro
* **Sin Internet:** Puedes seguir vendiendo todo el día. Cuando llegues a un lugar con WiFi, la App enviará solita todas las ventas a tu Google Sheets.
* **Inventario:** Si un cuadrito de pan se pone **ROJO**, ¡corre a comprar ingredientes porque se te está acabando!
* **Precios:** Si quieres cambiar un precio, cámbialo en tu Google Sheets y luego en la App dale a "Sincronizar" o reiníciala.
