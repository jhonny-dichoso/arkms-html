const toggleMenu = document.querySelector(".toggle-menu");
let isOpen = false;
toggleMenu.addEventListener("click", activeMenu);

function activeMenu() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (!isOpen) {
    header.style.height = "auto";
    nav.style.display="block";
    isOpen = true;
  } else {
    header.style.height = "7.3rem";
    nav.style.display="none";
    isOpen = false;
  }
}
