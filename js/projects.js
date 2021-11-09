const projects = [
  {
    title: "Mi Portafolio",
    abstract:
      "Proyecto para presentarme y mostrarte mis habilidades que estoy mejorando cada día.",
    image: {
      url: "../assets/img/miportafolio.png",
      description: "portafolio de Felix Castro",
    },
    demo: "https://felixgonzalo.github.io/portafolio/",
    code: "https://github.com/FelixGonzalo/portafolio",
  },
  {
    title: "Mi primer taller virtual",
    abstract:
      "Taller ¿Qué es una API? ejemplo práctico con JavaScript gracias a GDG Chimbote.",
    image: {
      url: "../assets/img/dogapi.png",
      description: "Taller ¿Qué es una API? ejemplo práctico con JavaScript",
    },
    demo: "https://felixgonzalo.github.io/Taller_API_GDG_Chimbote/",
    code: "https://github.com/FelixGonzalo/Taller_API_GDG_Chimbote",
  },
  {
    title: "Lista de tareas",
    abstract: "Sistema para gestionar tareas individuales.",
    image: {
      url: "../assets/img/listatareas.png",
      description: "Lista de tareas",
    },
    demo: "https://first-react-3da9c.web.app/login",
    code: "https://github.com/FelixGonzalo/ListaTareas-React-Firebase",
  },
  {
    title: "Platzi Games",
    abstract: "Proyecto de maquetación CSS con Sass.",
    image: {
      url: "../assets/img/platzigames.png",
      description: "sistema menu express",
    },
    demo: "https://felixgonzalo.github.io/platzi_games/",
    code: "https://github.com/FelixGonzalo/platzi_games",
  },
];

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
          <a class="project_links_code" href="${
            project.code
          }" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  `;
});
