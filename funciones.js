const carousel = document.getElementById('carousel');
const totalSlides = 3; // 12 productos / 4 por slide
let currentSlide = 0;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  const offset = -(currentSlide * 100);
  carousel.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
const toggleButton = document.getElementById('toggleOpciones');
const opciones = document.getElementById('navbarOpciones');

toggleButton.addEventListener('click', function () {
  opciones.classList.toggle('show'); // Bootstrap usa esta clase para mostrar
});
});

window.addEventListener("load", function () {
window.scrollTo(0, 0);
});

// script inicio y registro

const openBtn = document.getElementById("openAuthModal");
const closeBtn = document.getElementById("closeAuthModal");
const modal = document.getElementById("authModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const goToRegister = document.getElementById("goToRegister");
const goToLogin = document.getElementById("goToLogin");

openBtn.addEventListener("click", () => {
modal.classList.add("active");
loginForm.style.display = "block";
loginForm.classList.add("show");
registerForm.style.display = "none";
registerForm.classList.remove("show");
});

closeBtn.addEventListener("click", () => {
modal.classList.remove("active");
loginForm.classList.remove("show");
registerForm.classList.remove("show");
});

window.addEventListener("click", (e) => {
if (e.target === modal) {
  modal.classList.remove("active");
  loginForm.classList.remove("show");
  registerForm.classList.remove("show");
}
});

goToRegister.addEventListener("click", (e) => {
e.preventDefault();
loginForm.classList.remove("show");
setTimeout(() => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  setTimeout(() => registerForm.classList.add("show"), 10);
}, 300);
});

goToLogin.addEventListener("click", (e) => {
e.preventDefault();
registerForm.classList.remove("show");
setTimeout(() => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  setTimeout(() => loginForm.classList.add("show"), 10);
}, 300);
});

function togglePasswordVisibility(inputId, iconId) {
const passwordInput = document.getElementById(inputId);
const eyeIcon = document.getElementById(iconId);

if (passwordInput.type === "password") {
  passwordInput.type = "text";
  eyeIcon.innerHTML = `
    <path d="M1 12s3.369 7 11 7 11-7 11-7-3.369-7-11-7-11 7-11 7zm11 5
    c-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>`;
} else {
  passwordInput.type = "password";
  eyeIcon.innerHTML = `
    <path d="M12 5c-7.633 0-11 6.999-11 6.999s3.38 7.001 11 7.001 
    11-6.999 11-6.999-3.38-7.001-11-7.001zm0 
    12c-2.761 0-5-2.239-5-5 
    0-2.761 2.239-5 5-5 
    2.761 0 5 2.239 5 5 
    0 2.761-2.239 5-5 5zm0-8c-1.657 0-3 1.343-3 3 
    0 1.657 1.343 3 3 3 
    1.657 0 3-1.343 3-3 
    0-1.657-1.343-3-3-3z"/>`;
}
}

/* Reiniciar la pagina */

window.addEventListener("load", function () {
window.scrollTo(0, 0);
});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    const captcha = document.getElementById('captcha').checked;

    if (!nombre || !correo || !mensaje || !captcha) {
      alert('Por favor completa todos los campos requeridos y verifica el captcha.');
      return false;
    }

    alert("Mensaje enviado con éxito ✨");
    return true;
  }

  function mostrarMasPosts() {
    document.getElementById('morePosts').classList.remove('d-none');
  }

  function mostrarMas() {
    document.getElementById('productos-extra').classList.remove('oculto');
    event.target.style.display = 'none';
  }

  function changeQuantity(change) {
    let input = document.getElementById('quantity');
    let current = parseInt(input.value);
    let updated = current + change;
    if (updated >= 1 && updated <= 99) {
      input.value = updated;
    }
  }

  function toggleAdditionalInfo() {
    const info = document.getElementById('additional-info');
    const arrow = document.getElementById('arrow');
    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      arrow.innerText = '▲';
    } else {
      info.style.display = 'none';
      arrow.innerText = '▼';
    }
  }

  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Guarda el estado (slide actual) de cada carrusel
  const slidesState = {};

  function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const totalSlides = Math.ceil(carousel.querySelectorAll('.product').length / 4); // asumiendo 4 por slide

    // Inicializa si no existe
    if (!(carouselId in slidesState)) {
      slidesState[carouselId] = 0;
    }

    slidesState[carouselId] += direction;

    if (slidesState[carouselId] < 0) slidesState[carouselId] = totalSlides - 1;
    if (slidesState[carouselId] >= totalSlides) slidesState[carouselId] = 0;

    const offset = -(slidesState[carouselId] * 100);
    carousel.style.transform = `translateX(${offset}%)`;
  }

    document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleOpciones');
    const opciones = document.getElementById('navbarOpciones');

    toggleButton.addEventListener('click', function () {
      opciones.classList.toggle('show'); // Bootstrap usa esta clase para mostrar
    });
  });

  document.addEventListener("DOMContentLoaded", function () {

    /////////// Función Iniciar Sesión
  
    // Lista simulada de usuarios (puede venir del JSON Server luego)
    const usuarios = [
      {
        nombre: "admin",
        correo: "admin@correo.com",
        contraseña: "admin123",
        rol: "administrador"
      },
      {
        nombre: "usuario",
        correo: "usuario@correo.com",
        contraseña: "usuario123",
        rol: "visualizador"
      }
    ];
  
    // Escuchar cuando alguien intenta iniciar sesión
    document.getElementById("form-login").addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que la página se recargue
  
      const correo = document.getElementById("correo").value;
      const contraseña = document.getElementById("contraseña").value;
  
      // Buscar usuario que coincida
      const usuarioEncontrado = usuarios.find(
        user => user.correo === correo && user.contraseña === contraseña
      );
  
      if (usuarioEncontrado) {
        // Guardar la sesión en el navegador
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
  
        document.getElementById("mensaje").innerText =
          `Bienvenido, ${usuarioEncontrado.nombre} (${usuarioEncontrado.rol})`;
  
        // Redirigir dependiendo del rol
        if (usuarioEncontrado.rol === "administrador") {
          window.location.href = "index.html";
        } else {
          window.location.href = "visualizador.html";
        }
      } else {
        document.getElementById("mensaje").innerText = "Correo o contraseña incorrectos.";
      }
    });
  
  });


  /////Resgistro de Usuarios
  document.addEventListener("DOMContentLoaded", function () {
    // Recuperar usuarios desde localStorage (si existen)
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Escuchar el submit del formulario de registro
    document.getElementById("form-register").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevenir recarga de la página
  
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo-register").value.trim();
      const contraseña = document.getElementById("contraseña-register").value.trim();
      const confirmarContraseña = document.getElementById("confirmar-contraseña").value.trim();
      const mensajeRegistro = document.getElementById("mensaje-registro"); // Mensaje de registro
  
      // Comprobar si el correo ya existe
      const correoExistente = usuarios.find(user => user.correo === correo);
  
      if (correoExistente) {
        // Mostrar mensaje de correo ya existente
        mensajeRegistro.innerText = "Este correo ya está registrado.";
        mensajeRegistro.style.color = "red";
      } else if (contraseña !== confirmarContraseña) {
        // Verificar si las contraseñas coinciden
        mensajeRegistro.innerText = "Las contraseñas no coinciden.";
        mensajeRegistro.style.color = "red";
      } else {
        // Crear nuevo usuario
        const nuevoUsuario = {
          nombre: nombre,
          correo: correo,
          contraseña: contraseña,
          rol: "visualizador" // Aquí asignas el rol según lo que necesites
        };
  
        // Agregar nuevo usuario a la lista de usuarios
        usuarios.push(nuevoUsuario);
  
        // Guardar la lista actualizada de usuarios en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
        // Mostrar mensaje de éxito
        mensajeRegistro.innerText = "¡Registro exitoso! Ahora puedes iniciar sesión.";
        mensajeRegistro.style.color = "green";
  
        // Limpiar los campos del formulario
        document.getElementById("form-register").reset();
      }
    });
  
    // Escuchar el submit del formulario de login
    document.getElementById("form-login").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevenir recarga de la página
  
      const correo = document.getElementById("correo").value.trim();
      const contraseña = document.getElementById("contraseña").value.trim();
      const mensaje = document.getElementById("mensaje"); // Mensaje de error o éxito
  
      // Buscar el usuario que coincida
      const usuarioEncontrado = usuarios.find(user => user.correo === correo && user.contraseña === contraseña);
  
      if (usuarioEncontrado) {
        // Guardar usuario activo en el localStorage
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
  
        // Mostrar mensaje de bienvenida
        mensaje.innerText = `Bienvenido, ${usuarioEncontrado.nombre} (${usuarioEncontrado.rol})`;
        mensaje.style.color = "green";
  
        // Redirigir según el rol
        if (usuarioEncontrado.rol === "administrador") {
          window.location.href = "index.html"; // Si es admin, redirige al admin
        } else {
          window.location.href = "index.html"; // Si es visualizador, redirige al visualizador
        }
      } else {
        // Si no se encuentra el usuario
        mensaje.innerText = "Correo o contraseña incorrectos.";
        mensaje.style.color = "red";
      }
    });
  
    // Evento beforeunload para limpiar los formularios al cerrar o recargar la página
    window.addEventListener('beforeunload', function () {
      // Limpiar campos de los formularios de login y registro
      document.getElementById("form-login").reset();
      document.getElementById("form-register").reset();
    });
  });

  
// Cerrar modal
document.getElementById('closeAuthModal').addEventListener('click', function() {
  location.reload(); // Esto recarga la página
});



// Cerrar Sesión

// Al cargar la página, revisar si hay un usuario activo
let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

// Función para actualizar el navbar
function actualizarNavbar() {
  const loginButton = document.getElementById('openAuthModal');

  if (usuarioActivo && loginButton) {
    loginButton.outerHTML = `
      <button class="btn btn-outline-danger" id="cerrarSesion">Cerrar sesión</button>
    `;

    // Agregar evento para cerrar sesión
    setTimeout(() => {
      document.getElementById('cerrarSesion').addEventListener('click', () => {
        cerrarSesion();
      });
    }, 100);
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem('usuarioActivo');
  window.location.href = 'index.html';
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarNavbar);


// Mostrar botones especiales solo para el usuario administrador
window.addEventListener("DOMContentLoaded", function () {
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

  // Validar si el usuario es admin
  if (usuarioActivo && usuarioActivo.correo === "admin@correo.com") {
      const btnAgregarProducto = document.getElementById("btnAgregarProducto");
      const btnAgregarPublicacion = document.getElementById("btnAgregarPublicacion");

      if (btnAgregarProducto) {
          btnAgregarProducto.style.display = "inline-block";
          btnAgregarProducto.addEventListener("click", function () {
              window.location.href = "ups.html";
          });
      }

      if (btnAgregarPublicacion) {
          btnAgregarPublicacion.style.display = "inline-block";
          btnAgregarPublicacion.addEventListener("click", function () {
              window.location.href = "ups.html";
          });
      }
  }
});

