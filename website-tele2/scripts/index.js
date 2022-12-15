var menuButton = document.querySelector("header li button");
var sideNav = document.querySelector("header nav > section");

menuButton.addEventListener("click", menuButtonKlik);

function menuButtonKlik() {
  menuButton.classList.toggle("menuOpen");
  menuButton.classList.toggle("open");
  sideNav.classList.toggle("open");
  document.body.classList.toggle("open");
}
