// ---------------------------------------------------- //

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}

// ---------------------------------------------------- //

// Obtener los elementos del menú
const menuItems = document.querySelectorAll('#menu li a');

// Agregar un event listener a cada elemento del menú
menuItems.forEach(item => {
  // Obtener el id de la sección correspondiente
  const sectionId = item.getAttribute('href').slice(1);

  // Agregar un event listener para hacer scroll a la sección correspondiente
  item.addEventListener('click', () => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------------------------------------------------- //

const aboutLink = document.getElementById('About-link');
const miImagen = document.getElementById('mi-imagen');
const miH2 = document.getElementById('About');

// Agregar event listener al enlace "About"
aboutLink.addEventListener('click', function(event) {
  if (window.matchMedia('(max-width: 800px)').matches) {
    // Si la pantalla es móvil, desplazar a la sección de <h2>
    event.preventDefault();
    miH2.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Si la pantalla es de escritorio, desplazar a la imagen
    event.preventDefault();
    miImagen.scrollIntoView({ behavior: 'smooth' });
  }
});

// Agregar atributo data-target al enlace "About" si la pantalla es móvil
if (window.matchMedia('(max-width: 800px)').matches) {
  aboutLink.setAttribute('data-target', 'about');
}

// ---------------------------------------------------- //

