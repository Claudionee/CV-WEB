// ---------------------------------------------------- //
// 1. CONTROL DEL MENÚ HAMBURGUESA
// ---------------------------------------------------- //
const menu = document.getElementById('menu');
const toggleOpen = document.getElementById('toggle_open');
const toggleClose = document.getElementById('toggle_close');
const menuLinks = document.querySelectorAll('#menu li a');

// Función para abrir/cerrar menú
function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggleOpen.style.display = 'none';
    toggleClose.style.display = 'block';
  } else {
    toggleOpen.style.display = 'block';
    toggleClose.style.display = 'none';
  }
}

// Event Listeners para los botones
toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);

// ---------------------------------------------------- //
// 2. NAVEGACIÓN INTELIGENTE (SCROLL + AUTO-CLOSE)
// ---------------------------------------------------- //

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // A. Prevenir el salto brusco por defecto
    e.preventDefault();

    // B. Detectar a dónde queremos ir
    const targetId = link.getAttribute('href').slice(1); // quita el #
    const targetSection = document.getElementById(targetId);

    // C. Lógica especial para "About" (Mantiene tu lógica original mejorada)
    if (targetId === 'About' && window.matchMedia('(max-width: 968px)').matches) {
       // En móvil, quizás prefieras ir al texto y no a la foto
       // Ajusta este ID si el H2 tiene otro, o usa targetSection por defecto
       targetSection.scrollIntoView({ behavior: 'smooth' }); 
    } else if (targetSection) {
       targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // D. ¡IMPORTANTE! Cerrar el menú automáticamente si está abierto (Modo Móvil)
    if (menu.classList.contains('show-menu')) {
      toggleMenu(); 
    }
  });
});

