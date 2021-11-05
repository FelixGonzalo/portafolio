const projects = [
  {
    title: "Mi Portafolio",
    abstract: "Proyecto sencillo y eficaz para presentarme",
    image: {
      url: "https://picsum.photos/200/300",
      description: "portafolio de Felix Castro",
    },
    demo: "",
    code: "https://github.com/FelixGonzalo/portafolio",
  },
  {
    title: "Menu express",
    abstract: "Sistema para administrar la carta de un menu.",
    image: {
      url: "https://picsum.photos/200/300",
      description: "sistema menu express",
    },
    demo: "https://felixgonzalo.github.io/menu_delivery/",
    code: "https://github.com/FelixGonzalo/menu_delivery",
  },
  {
    title: "Mi Portafolio",
    abstract: "Proyecto sencillo y eficaz para presentarme",
    image: {
      url: "https://picsum.photos/200/300",
      description: "portafolio de Felix Castro",
    },
    demo: "",
    code: "https://github.com/FelixGonzalo/portafolio",
  },
  {
    title: "Menu express",
    abstract: "Sistema para administrar la carta de un menu.",
    image: {
      url: "https://picsum.photos/200/300",
      description: "sistema menu express",
    },
    demo: "https://felixgonzalo.github.io/menu_delivery/",
    code: "https://github.com/FelixGonzalo/menu_delivery",
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
          src="https://picsum.photos/200/300"
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
