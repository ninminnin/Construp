document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-corazon")) {
      e.target.classList.toggle("favorito");
    }
  });
