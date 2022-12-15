var menuButton = document.querySelector("header section > button");

menuButton.addEventListener("click", menuButtonKlik);

function menuButtonKlik() {
  menuButton.classList.toggle("menuOpen");
}
