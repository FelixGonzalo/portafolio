const projects = [
  {
    title: 'Sitio Web de Albattria',
    abstract: 'Sitio Web de Albattria realizado con PUG, Sass y JavaScript.',
    image: {
      url: './assets/img/albattria.PNG',
      description: 'sitrio web de Albattria',
    },
    demo: 'https://albattria.com/',
    code: '',
  },
  {
    title: 'Where In The World',
    abstract:
      'Frontend Mentor Challenge. Proyecto con React, Sass, webpack, REST Countries.',
    image: {
      url: './assets/img/whereintheworld.PNG',
      description: 'Frontend Mentor Challenge',
    },
    demo: 'https://quirky-yonath-fc759e.netlify.app/',
    code: 'https://github.com/FelixGonzalo/WhereInTheWorld',
  },
  {
    title: 'Lista de tareas',
    abstract:
      'Sistema para gestionar tareas individuales. Proyecto con React, CSS, Firebase, Bootstrap.',
    image: {
      url: './assets/img/listatareas.PNG',
      description: 'Lista de tareas',
    },
    demo: 'https://first-react-3da9c.web.app/login',
    code: 'https://github.com/FelixGonzalo/ListaTareas-React-Firebase',
  },
  {
    title: 'Platzi Games',
    abstract: 'Proyecto de maquetación CSS con Sass.',
    image: {
      url: './assets/img/platzigames.PNG',
      description: 'sistema menu express',
    },
    demo: 'https://felixgonzalo.github.io/platzi_games/',
    code: 'https://github.com/FelixGonzalo/platzi_games',
  },
  {
    title: 'Mi primer taller virtual',
    abstract:
      'Taller ¿Qué es una API? ejemplo práctico con JavaScript gracias a GDG Chimbote.',
    image: {
      url: './assets/img/dogapi.PNG',
      description: 'Taller ¿Qué es una API? ejemplo práctico con JavaScript',
    },
    demo: 'https://www.facebook.com/gdgchimbote/videos/1481509778889481',
    code: 'https://github.com/FelixGonzalo/Taller_API_GDG_Chimbote',
  },
  {
    title: 'Mi Portafolio',
    abstract:
      'Proyecto para presentarme y mostrarte mis habilidades que estoy mejorando cada día.',
    image: {
      url: './assets/img/miportafolio.PNG',
      description: 'portafolio de Felix Castro',
    },
    demo: 'https://felixgonzalo.github.io/portafolio/',
    code: 'https://github.com/FelixGonzalo/portafolio',
  },
]

const projects_list = document.getElementById("projects_list");

projects_list.innerHTML = "";
projects.map((project) => {
  projects_list.innerHTML += `
    <div class="project">
      <h3 class="project_title">${project.title}</h3>
      <div class="project_information">
        <img
          class="project_image"
          src="${project.image.url}"
          alt="${project.image.description}"
        />
        <p class="project_abstract">
          ${project.abstract}
        </p>
        <div class="project_links">
          ${
            project.demo !== ""
              ? `
              <a class="project_links_demo" href="${project.demo}" target="_blank" rel="noopener noreferrer">
                Demo disponible
              </a>
            `
              : ""
          }
          ${
            project.code !== ""
            ? `<a class="project_links_code" href="${project.code}" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>`
            : ''
          }
        </div>
      </div>
    </div>
  `;
});
