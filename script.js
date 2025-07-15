document.addEventListener('DOMContentLoaded', () => {
    // --- Variables para el Modal de Inicio de Sesión ---
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    // Usamos una clase específica para el botón de cerrar del login
    const closeLoginButton = loginModal ? loginModal.querySelector('.login-close-button') : null;
    const loginForm = document.getElementById('login-form'); // Nuevo: ID para el formulario de login

    // --- Variables para el Modal de Registro ---
    const registerBtn = document.getElementById('register-btn');
    const registerModal = document.getElementById('register-modal');
    // Usamos una clase específica para el botón de cerrar del registro
    const closeRegisterButton = registerModal ? registerModal.querySelector('.register-close-button') : null;
    const registerForm = document.getElementById('register-form'); // Nuevo: ID para el formulario de registro

    // --- Manejo del modal de inicio de sesión ---
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginModal) {
                loginModal.style.display = 'flex';
            }
        });
    }

    if (closeLoginButton) {
        closeLoginButton.addEventListener('click', () => {
            if (loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // --- Manejo del modal de registro ---
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (registerModal) {
                registerModal.style.display = 'flex';
            }
        });
    }

    if (closeRegisterButton) {
        closeRegisterButton.addEventListener('click', () => {
            if (registerModal) {
                registerModal.style.display = 'none';
            }
        });
    }

    // --- Cerrar CUALQUIER modal haciendo clic fuera de él ---
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // --- Funcionalidad de "Explorar Cursos" ---
    const exploreCoursesBtn = document.getElementById('explore-courses');
    if (exploreCoursesBtn) {
        exploreCoursesBtn.addEventListener('click', () => {
            alert('¡Explorando nuestros cursos! (Simulación: Esto te llevaría a la página de cursos)');
            // En una app real, podrías redirigir: window.location.href = 'cursos.html';
        });
    }

    // --- Botón específico "Ver Curso" para "Inteligencia Artificial" ---
    const btnVerIA = document.getElementById('btn-ver-ia');
    if (btnVerIA) {
        btnVerIA.addEventListener('click', () => {
            // Ejemplo de redirección a una página específica
            window.location.href = 'Estrategias.html'; // Asegúrate de tener este archivo
        });
    }

    // --- Funcionalidad de los otros botones "Ver Curso" genéricos ---
    const genericCourseButtons = document.querySelectorAll('.course-button:not(#btn-ver-ia)');
    genericCourseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const courseTitle = e.target.closest('.course-card').querySelector('h4').textContent;
            alert(`Has hecho clic en "Ver Curso" para: ${courseTitle}. (Simulación: Esto te llevaría a la página de detalles del curso)`);
        });
    });

    // --- Simulación de navegación para los enlaces del menú ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.id !== 'login-btn' && link.id !== 'register-btn') {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita el comportamiento por defecto del enlace
                const linkText = e.target.textContent;
                alert(`Navegando a: ${linkText}. (Esto es una simulación de navegación)`);
                // En una app real, aquí se gestionaría la navegación SPA o la redirección
                // Ejemplo: if (linkText === "Cursos") window.location.href = 'cursos.html';
            });
        }
    });


    // --- MANEJO DEL ENVÍO DEL FORMULARIO DE REGISTRO (CON VALIDACIÓN Y SIMULACIÓN DE BACKEND) ---
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            const regUsername = document.getElementById('reg-username').value;
            const regEmail = document.getElementById('reg-email').value;
            const regPassword = document.getElementById('reg-password').value;
            const regConfirmPassword = document.getElementById('reg-confirm-password').value;

            // Validaciones Front-end
            if (!regUsername || !regEmail || !regPassword || !regConfirmPassword) {
                alert('Por favor, completa todos los campos del registro.');
                return;
            }

            // Validación alfanumérica para la contraseña
            const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$/; // Mínimo 6 caracteres, al menos una letra y un número
            if (!alphanumericRegex.test(regPassword)) {
                alert('La contraseña debe tener al menos 6 caracteres y contener letras y números. No se permiten caracteres especiales.');
                return;
            }

            if (regPassword !== regConfirmPassword) {
                alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
                return;
            }

            // SIMULACIÓN DE CONEXIÓN AL BACKEND PARA REGISTRO
            console.log('Intentando registrar usuario...');
            try {
                // En un escenario real, 'register.php' o '/api/register' sería tu endpoint de servidor
                const response = await fetch('/api/register', { // Esta es la URL de tu backend
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: regUsername,
                        email: regEmail,
                        password: regPassword
                    })
                });

                const data = await response.json(); // Asume que el backend responde con JSON

                if (response.ok) { // Si la respuesta HTTP es 200-299
                    alert(`¡${data.message || 'Usuario registrado exitosamente!'} Ahora puedes iniciar sesión.`);
                    if (registerModal) {
                        registerModal.style.display = 'none'; // Cierra el modal de registro
                        registerForm.reset(); // Limpia el formulario
                    }
                    if (loginModal) { // Opcional: Abre el modal de inicio de sesión después del registro
                        setTimeout(() => {
                            loginModal.style.display = 'flex';
                        }, 500);
                    }
                } else {
                    alert(`Error en el registro: ${data.message || 'Ocurrió un error desconocido.'}`);
                    console.error('Error de registro:', data);
                }
            } catch (error) {
                console.error('Error de conexión o de red:', error);
                alert('No se pudo conectar con el servidor para el registro. Inténtalo de nuevo más tarde.');
            }
        });
    }

    // --- MANEJO DEL ENVÍO DEL FORMULARIO DE LOGIN (SIMULACIÓN DE BACKEND) ---
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Por favor, ingresa tu usuario y contraseña.');
                return;
            }

            // SIMULACIÓN DE CONEXIÓN AL BACKEND PARA LOGIN
            console.log('Intentando iniciar sesión...');
            try {
                // En un escenario real, 'login.php' o '/api/login' sería tu endpoint de servidor
                const response = await fetch('/api/login', { // Esta es la URL de tu backend
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json(); // Asume que el backend responde con JSON

                if (response.ok) { // Si la respuesta HTTP es 200-299
                    alert(`${data.message || 'Inicio de sesión exitoso.'} ¡Bienvenido, ${username}!`);
                    if (loginModal) {
                        loginModal.style.display = 'none'; // Cierra el modal de login
                        loginForm.reset(); // Limpia el formulario
                    }
                    // En una app real: redirigir a un dashboard, guardar token de sesión, etc.
                    // window.location.href = 'dashboard.html';
                } else {
                    alert(`Error al iniciar sesión: ${data.message || 'Usuario o contraseña incorrectos.'}`);
                    console.error('Error de login:', data);
                }
            } catch (error) {
                console.error('Error de conexión o de red:', error);
                alert('No se pudo conectar con el servidor para iniciar sesión. Inténtalo de nuevo más tarde.');
            }
        });
    }

});