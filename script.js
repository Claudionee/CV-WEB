document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar Datos
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderProfile(data.profile);
            renderAbout(data.about);
            renderProjects(data.projects);
            renderFooter(data.profile);
        })
        .catch(err => console.error('Error cargando el perfil:', err));

    // 2. Lógica del Menú Hamburguesa (Mantenida de tu versión original)
    initMenuLogic();
});

// --- FUNCIONES DE RENDERIZADO ---

function renderProfile(profile) {
    // Hero Section
    document.getElementById('hero-greeting').textContent = profile.hero_greeting;
    document.getElementById('hero-name').textContent = profile.name.split(" ")[0]; // Solo primer nombre
    
    // Social Icons (Hero)
    const socialDiv = document.getElementById('social-container');
    socialDiv.innerHTML = `
        <a href="${profile.social.linkedin}" target="_blank" style="color: white;">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="${profile.social.github}" target="_blank" style="color: white; margin-left: 15px;">
            <i class="fab fa-github"></i>
        </a>
    `;

    document.getElementById('hero-summary-highlight').textContent = profile.summary_highlight;
    document.getElementById('hero-summary-text').textContent = profile.summary_text;
    document.getElementById('cv-download-btn').href = profile.cv_link;
}

function renderAbout(about) {
    document.getElementById('about-p1').innerHTML = about.description_p1;
    document.getElementById('about-p2').innerHTML = about.description_p2;

    // Certificaciones
    const certList = document.getElementById('certifications-list');
    about.certifications.forEach(cert => {
        const li = document.createElement('li');
        li.style.fontWeight = 'bold';
        li.textContent = cert;
        certList.appendChild(li);
    });

    // Skills
    const skillsList = document.getElementById('skills-list');
    about.skills.forEach(skill => {
        const li = document.createElement('li');
        li.style.fontWeight = 'bold';
        li.innerHTML = `<strong>${skill.category}:</strong> ${skill.techs}`;
        skillsList.appendChild(li);
    });
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    
    projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card__img">
                <img style="margin-top: 6px;" src="${proj.img_src}" alt="${proj.title}">
            </div>
            <div class="card__title">
                <h2 style="text-align: center;">${proj.title}</h2>
                <h3 style="text-align: center;">${proj.subtitle}</h3>
                <h6 style="text-align: center;">${proj.tags}</h6>
            </div>
            <div class="card__proyect-links">
                <a href="${proj.link_repo}" target="_blank">
                    <i class="${proj.icon_class}"></i>
                </a>
            </div>
            <div class="button-content">
                <button class="project-details-button">
                    <a href="${proj.link_action}" target="_blank">${proj.action_text}</a>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderFooter(profile) {
    document.getElementById('footer-name').textContent = profile.name;
    document.getElementById('footer-role').textContent = profile.role_title;
    
    const footerSocial = document.getElementById('footer-social');
    footerSocial.innerHTML = `
        <a href="${profile.social.linkedin}" target="_blank">
            <i class="fab fa-linkedin" style="display: inline-block; vertical-align: middle; font-size: 30px; margin-top: 20px;"></i>
        </a>
    `;
}

// --- LÓGICA DE INTERACCIÓN (UI) ---

function initMenuLogic() {
    const menu = document.getElementById('menu');
    const toggleOpen = document.getElementById('toggle_open');
    const toggleClose = document.getElementById('toggle_close');
    const menuLinks = document.querySelectorAll('#menu li a');

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
