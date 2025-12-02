document.addEventListener("click", function (e) {
  const button = e.target.closest(".menu-btn");
  const menus = document.querySelectorAll(".menu-opciones");

  // Cerrar todos los menús antes de abrir otro
  menus.forEach(m => (m.style.display = "none"));

  // Si se hace clic en el botón de 3 puntos
  if (button) {
    const menu = button.parentElement.querySelector(".menu-opciones");

    // Mostrar el menú correspondiente
    if (menu) {
      menu.style.display = "block";
    }
  }
});
