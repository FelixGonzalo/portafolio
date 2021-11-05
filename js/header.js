const sections = document.querySelectorAll(".section_content");
const navlinks = document.querySelectorAll(".section_link");
const addCurrentLink = () => {
  let currentLink;
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 60) {
      currentLink = section.getAttribute("id");
    }
  })
  navlinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(currentLink)) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", addCurrentLink);