// funciones.js

window.addEventListener("DOMContentLoaded", function () {
    let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    const mensajeLogin = document.getElementById('mensajeLogin');
    const contenidoPagina = document.getElementById('contenidoPagina');

    if (!usuarioActivo) {
        // No hay usuario: Mostrar mensaje y ocultar el contenido
        if (mensajeLogin) {
            mensajeLogin.style.display = 'flex';
        }
        if (contenidoPagina) {
            contenidoPagina.style.display = 'none';
        }
    } else {
        // Hay usuario: Mostrar contenido y ocultar mensaje
        if (mensajeLogin) {
            mensajeLogin.style.display = 'none';
        }
        if (contenidoPagina) {
            contenidoPagina.style.display = 'block';
        }
    }
});
