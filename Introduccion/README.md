# CC AURA – Tienda virtual (versión HTML y CSS)
Proyecto de Introducción a la Ingeniería. Usa **HTML5, CSS3 y un poco de JavaScript**.

## Abrir el proyecto
Descomprime el ZIP y haz doble clic en `index.html`. En VS Code: File > Open Folder > clic derecho en `index.html` > Open with Live Server.

## Archivos
- `index.html`, `productos.html`, `nosotros.html`, `contacto.html`, `carrito.html`, `gracias.html`: las páginas.
- `css/estilos.css`: estilos de todas las páginas.
- `js/script.js`: JavaScript básico (contador del carrito y mensaje al presionar "Agregar al carrito").
- `imagenes/`: logo, banner y fotos de los productos. `video/ccaura.mp4`: video. `favicon.ico`: icono de la pestaña.

## Qué se usó (para explicar)
- **HTML:** header, nav, main, section, article, footer, h1–h3, p, listas ul/ol, tabla (tallas y carrito), imágenes con alt, video, formulario con label/input/textarea.
- **Enlaces internos:** `productos.html#ropa` lleva a la sección con `id="ropa"`.
- **Formulario:** `required`, `type="email"` y `minlength` hacen que el navegador valide solo; al enviar va a `gracias.html`.
- **CSS:** archivo externo, Flexbox (menú), Grid (tarjetas), `:hover` (efectos) y `@media` (celulares).
- **JavaScript:** `querySelectorAll` busca los botones, `addEventListener` detecta el clic, y al hacerlo se suma 1 al contador del menú, el botón cambia a "Agregado ✔" y `alert` muestra el nombre del producto.
- **Rutas relativas:** `css/estilos.css`, `imagenes/logo.png`, `carrito.html`...

## Limitaciones (decirlo en la sustentación)
- El carrito es una página de ejemplo estática: el contador del menú sube al agregar, pero vuelve a 0 al cambiar de página y no guarda productos (próxima versión).
- El formulario no envía mensajes reales: necesitaría un servicio adicional.

## Git
git init / git add . / git commit -m "CC AURA HTML, CSS y JS" / git remote add origin URL / git push -u origin main
