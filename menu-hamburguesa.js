// Selecciona el botón hamburguesa
const btn = document.querySelector(".menu-hamburguesa");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-Horizontal");

// Al hacer clic en el botón hamburguesa
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
