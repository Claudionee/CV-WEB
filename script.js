document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
});

/**
 * 1. Lógica del Menú Hamburguesa (Mobile)
 * Incluye abrir/cerrar, cambio de iconos y "click outside".
 */
function initMobileMenu() {
    const menu = document.getElementById('menu');
    const toggleOpen = document.getElementById('toggle_open');
    const toggleClose = document.getElementById('toggle_close');
    
    // Si falta algún elemento crítico, no ejecutamos nada para evitar errores
    if (!menu || !toggleOpen || !toggleClose) return;

    // Función unificada para alternar estado
    const toggleState = (forceClose = false) => {
        const isOpening = forceClose ? false : !menu.classList.contains('show-menu');
        
        if (isOpening) {
            menu.classList.add('show-menu');
            toggleOpen.style.display = 'none';
            toggleClose.style.display = 'block';
        } else {
            menu.classList.remove('show-menu');
            toggleOpen.style.display = 'block';
            toggleClose.style.display = 'none';
        }
    };

    // Event Listeners para los botones
    toggleOpen.addEventListener('click', () => toggleState());
    toggleClose.addEventListener('click', () => toggleState());

    // MEJORA UX: Cerrar menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnToggle = toggleOpen.contains(e.target) || toggleClose.contains(e.target);
        
        if (menu.classList.contains('show-menu') && !isClickInsideMenu && !isClickOnToggle) {
            toggleState(true); // Forzar cierre
        }
    });

    // Cerrar menú al hacer click en cualquier enlace del menú
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleState(true));
    });
}

/**
 * 2. Navegación Suave (Smooth Scroll)
 * Maneja el desplazamiento y el ajuste específico para móviles.
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return; // Ignorar enlaces vacíos

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();

                // Lógica específica para ajustar la posición en móviles si es necesario
                // (Mantenemos tu lógica original de ajustar 'About')
                if (targetId === '#About' && window.matchMedia('(max-width: 968px)').matches) {
                    const offsetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 80; // Ajuste de header
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
