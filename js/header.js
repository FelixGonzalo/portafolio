const sections = [
  document.getElementById("about"),
  document.getElementById("proyectos"),
  document.getElementById("hablemos"),
];
const navItems = {
  about: document.getElementsByClassName("header_menu_about"),
  proyectos: document.getElementsByClassName("header_menu_proyectos"),
  hablemos: document.getElementsByClassName("header_menu_hablemos"),
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navItem = navItems[entry.target.id];
      navItem[0].classList.add("active");
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item[0].classList.remove("active");
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
