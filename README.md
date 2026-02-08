# 🥖 PanPOS: Punto de Venta Gratuito 

¡Bienvenido! Este es un sistema de caja registradora sencillo, rápido y que funciona **sin internet**. Ideal para pequeñas panaderías y emprendimientos que quieren modernizarse sin pagar mensualidades.

---

## 🚀 Guía de Instalación "Paso a Paso"

Sigue estos 3 pasos y tendrás tu sistema funcionando en menos de 10 minutos.

### Paso 1: Tu Cuaderno Digital (Google Sheets)
Primero, necesitas una copia de la base de datos donde se guardarán tus ventas y productos.
1. Haz clic en este enlace: [👉 CREAR MI COPIA DE POS](https://docs.google.com/spreadsheets/d/1Wz6f-xEXLnf2Mz3So4kVbdnYkdvugc4ppo6fF7AZt00/copy)
2. Se abrirá una página de Google que dice "¿Quieres hacer una copia?". Haz clic en el botón azul **"Hacer una copia"**.
3. En tu nueva hoja, ve arriba al menú **Extensiones** -> **Apps Script**.
4. Se abrirá una ventana con código. Busca el botón azul arriba a la derecha que dice **Implementar** y elige **Nueva implementación**.
5. En el tipo de implementación, elige **App Web**.
6. En "Quién tiene acceso", cámbialo a **Cualquiera**.
7. Haz clic en **Implementar**. Google te pedirá permisos (elige tu cuenta y dale a "Permitir").
8. Al final, te dará una **URL de App Web** (un enlace largo). **¡CÓPIALO! Lo necesitarás en el paso 3.**

---

### Paso 2: Activar tu App
Si estás viendo esto en GitHub, ya tienes casi todo listo.
1. Ve a la pestaña **Settings** (Ajustes) de este repositorio.
2. En el menú de la izquierda, busca **Pages**.
3. Donde dice "Branch", selecciona **main** y dale a **Save**.
4. Espera un minuto. GitHub te dará un enlace (ejemplo: `https://tuusuario.github.io/pan-pos/`).
5. **Abre ese enlace en tu celular o tablet.**

---

### Paso 3: Conexión Final
1. Al abrir la página en tu celular, te aparecerá un cuadro pidiéndote la URL.
2. Pega el enlace largo que copiaste en el **Paso 1** (el que terminaba en `/exec`).
3. Dale a **Aceptar** y ¡LISTO! Tus productos aparecerán en pantalla.

---

## 📱 Cómo usarlo como una App real
Para que no tengas que abrir el navegador cada vez:
- **En Android (Chrome):** Toca los 3 puntitos arriba a la derecha y elige **"Instalar aplicación"** o **"Agregar a la pantalla de inicio"**.
- **En iPhone (Safari):** Toca el botón de compartir (el cuadradito con la flecha) y elige **"Agregar a inicio"**.

¡Ahora tendrás el icono de PanPOS junto a tus otras aplicaciones!

---

## 💡 Consejos de uso
* **Ventas sin internet:** Puedes vender todo el día aunque no tengas WiFi. Cuando vuelvas a tener internet, la App enviará solita las ventas a tu Google Sheets.
* **Cambiar Precios:** Cambia los precios o nombres en tu hoja de Google y luego, en la App, refresca la página para que se actualicen.
* **Inventario:** Si el stock de un producto baja de su límite, lo verás reflejado en tu panel de control.
