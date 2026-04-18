const translations = {
    "en-US": {
        homeHello: "HELLO, I'M",
        homeName: "SAMUEL RODRIGUES",
        homeWork: "BACK-END DEVELOPER",
        homeScrollText: "Scroll to see more of my work",
        aboutmeHeader: "ABOUT ME",
        aboutmeText: "Hi! I’m Samuel, an 18-year-old student of Systems Analysis and Development at Fatec Mogi das Cruzes. I’m passionate about technology and love exploring how things work behind the scenes, especially in programming and software development.",
        skillsHeader: "MY SKILLS",
        projectsHeader: "MY PROJECTS",
        contactsHeader: "Contacts",
    },

    "pt-BR": {
        homeHello: "OLÁ, EU SOU",
        homeName: "SAMUEL RODRIGUES",
        homeWork: "DESENVOLVEDOR BACK-END",
        homeScrollText: "Role para ver mais do meu trabalho",
        aboutmeHeader: "SOBRE MIM",
        aboutmeText: "Olá! Meu nome é Samuel, tenho 18 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Mogi das Cruzes. Sou apaixonado por tecnologia e adoro explorar como as coisas funcionam nos bastidores, especialmente em programação e desenvolvimento de software.",
        skillsHeader: "MINHAS HABILIDADES",
        projectsHeader: "MEUS PROJETOS",
        contactsHeader: "Contatos",
    }
};

function changeTheme() {
    const themeIcon = document.getElementById('theme');

    if(themeIcon.className === 'fa-solid fa-moon') {
        themeIcon.className = 'fa-solid fa-sun';
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    }
}

function aplicarTema() {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const themeIcon = document.getElementById('theme');

    if (darkMode) {
        themeIcon.className = 'fa-solid fa-moon';
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    } else {
        themeIcon.className = 'fa-solid fa-sun';
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
    }
}

aplicarTema();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", aplicarTema);

function languageMenu() {
    const menuLanguages = document.getElementById('languages');

    if(menuLanguages.style.display === 'flex') {
        menuLanguages.className = 'animate__animated animate__fadeOut';
        menuLanguages.addEventListener('animationend', function hide() {
            menuLanguages.style.display = 'none';
            menuLanguages.removeEventListener('animationend', hide);
        });
    } else {
        menuLanguages.className += 'animate__animated animate__fadeIn';
        menuLanguages.style.display = 'flex';
    }
}

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    const homeHello = document.querySelector("#home h3");
    const homeName = document.querySelector("#home h1");
    const homeWork = document.querySelector("#home h2");
    const homeScrollText = document.querySelector("#home p");
    const aboutmeHeader = document.querySelector("#aboutme h1");
    const aboutmeText = document.querySelector("#aboutme p");
    const skillsHeader = document.querySelector("#skills h1");
    const projectsHeader = document.querySelector("#projects h1");
    const contactsHeader = document.querySelector("#contact h1");

    if (homeHello) homeHello.textContent = t.homeHello;
    if (homeName) homeName.textContent = t.homeName;
    if (homeWork) homeWork.textContent = t.homeWork;
    if (homeScrollText) homeScrollText.textContent = t.homeScrollText;
    if (aboutmeHeader) aboutmeHeader.textContent = t.aboutmeHeader;
    if (aboutmeText) aboutmeText.textContent = t.aboutmeText;
    if (skillsHeader) skillsHeader.textContent = t.skillsHeader;
    if (projectsHeader) projectsHeader.textContent = t.projectsHeader;
    if (contactsHeader) contactsHeader.textContent = t.contactsHeader;
}

function verifSection() {
  const height = window.scrollY;
  const vh = window.innerHeight;
  const about = document.getElementById('aboutme');
  const skill = document.getElementById('skills');
  const project = document.getElementById('projects')
  const contact = document.getElementById('contact')
  const indice = Math.round(height / vh);

  if(indice === 0) {
    about.className = 'disable';
    skill.className = 'disable';
    skill.className = 'disable';
    contact.className = 'disable';
  } else if (indice === 1) {
    about.className = 'active';
  } else if (indice === 2) {
    skill.className = 'active';
  } else if (indice === 3) {
    project.className = 'active';
  } else if (indice === 4) {
    contact.className = 'active';
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnPT = document.getElementById("btn-pt");
    const btnEN = document.getElementById("btn-en");

    if (btnPT) {
        btnPT.addEventListener("click", () => {
            setLanguage("pt-BR");
        });
    }

    if (btnEN) {
        btnEN.addEventListener("click", () => {
            setLanguage("en-US");
        });
    }

    setLanguage("en-US");
});

