var eersteStreepjesButton = document.querySelector("header section button");

eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);

function eersteStreepjesButtonKlik() {
  eersteStreepjesButton.classList.toggle("menuOpen");
}
