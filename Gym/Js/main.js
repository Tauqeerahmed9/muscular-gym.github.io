const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);




