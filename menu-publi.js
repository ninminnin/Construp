document.addEventListener("click", function (e) {
  const button = e.target.closest(".menu-btn");
  const menus = document.querySelectorAll(".menu-opciones");

  // Cierra anteriores
  menus.forEach(m => (m.style.display = "none"));

  if (button) {
    const menu = button.parentElement.querySelector(".menu-opciones");

    // MUESTRA MENU
    if (menu) {
      menu.style.display = "block";
    }
  }
});
