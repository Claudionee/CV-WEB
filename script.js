document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar el JSON
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar data.json");
            return response.json();
        })
        .then(data => {
            cargarPerfil(data.profile);
            cargarAbout(data.about);
            cargarProyectos(data.projects);
        })
        .catch(error => console.error('Error cargando datos:', error));

    // 2. Iniciar menú hamburguesa
    initMenu();
});

function cargarPerfil(profile) {
    // Usamos ?. para evitar errores si el ID no existe en el HTML
    safeSetText('hero-greeting', profile.greeting);
    safeSetText('hero-name', profile.name);
    
    // HTML en párrafos para permitir colores/negritas
    const p1 = document.getElementById('hero-p1');
    if(p1) p1.innerHTML = profile.summary_p1;
    
    const p2 = document.getElementById('hero-p2');
    if(p2) p2.innerHTML = profile.summary_p2;

    const cvBtn = document.getElementById('hero-cv');
    if(cvBtn) cvBtn.href = profile.cv_link;

    // Redes Sociales Hero
    const socialDiv = document.getElementById('hero-social');
    if(socialDiv) {
        socialDiv.innerHTML = `
            <a href="${profile.social.linkedin}" target="_blank" style="color: white;"><i class="fab fa-linkedin"></i></a>
            <a href="${profile.social.github}" target="_blank" style="color: white; margin-left: 15px;"><i class="fab fa-github"></i></a>
        `;
    }
    
    // Redes Sociales Footer
    const footerSocial = document.getElementById('footer-social');
    if(footerSocial) {
        footerSocial.innerHTML = `
            <a href="${profile.social.linkedin}" target="_blank">
                <i class="fab fa-linkedin" style="display: inline-block; vertical-align: middle; font-size: 30px; margin-top: 20px;"></i>
            </a>
        `;
    }
}

function cargarAbout(about) {
    const p1 = document.getElementById('about-p1');
    if(p1) p1.innerHTML = about.p1;
    
    const p2 = document.getElementById('about-p2');
    if(p2) p2.innerHTML = about.p2;

    const certList = document.getElementById('about-certs');
    if(certList) {
        certList.innerHTML = ''; // Limpiar
        about.certifications.forEach(cert => {
            const li = document.createElement('li');
            li.style.fontWeight = 'bold';
            li.textContent = cert;
            certList.appendChild(li);
        });
    }

    const stackList = document.getElementById('about-stack');
    if(stackList) {
        stackList.innerHTML = '';
        about.stack.forEach(item => {
            const li = document.createElement('li');
            li.style.fontWeight = 'bold';
            li.innerHTML = item;
            stackList.appendChild(li);
        });
    }
}

function cargarProyectos(projects) {
    const container = document.getElementById('projects-container');
    if(!container) return;

    container.innerHTML = ''; // Limpiar contenido previo
    
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="card__img">
                <img style="margin-top: 6px;" src="${proj.img}" alt="${proj.title}">
            </div>
            <div class="card__title">
                <h2 style="text-align: center;">${proj.title}</h2>
                <h3 style="text-align: center;">${proj.subtitle}</h3>
                <h6 style="text-align: center;">${proj.tags}</h6>
            </div>
            <div class="card__proyect-links">
                <a href="${proj.repo}" target="_blank">
                    <i class="${proj.icon}"></i>
                </a>
            </div>
            <div class="button-content">
                <button class="project-details-button">
                    <a href="${proj.repo}" target="_blank">${proj.btnText}</a>
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

// Función auxiliar para seguridad
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// Lógica original del Menú
function initMenu() {
    const menu = document.getElementById('menu');
    const toggleOpen = document.getElementById('toggle_open');
    const toggleClose = document.getElementById('toggle_close');
    const menuLinks = document.querySelectorAll('#menu li a');

    if(!menu || !toggleOpen || !toggleClose) return;

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

    toggleOpen.addEventListener('click', toggleMenu);
    toggleClose.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('show-menu')) {
                toggleMenu(); 
            }
        });
    });
}
