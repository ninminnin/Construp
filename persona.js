const juridica = document.getElementById("form-juridica");
const natural = document.getElementById("form-natural");

document.querySelectorAll("input[name='tipo']").forEach(r => {
  r.addEventListener("change", e => {
    if (e.target.value === "juridica") {
      juridica.classList.remove("oculto");
      natural.classList.add("oculto");
    } else {
      natural.classList.remove("oculto");
      juridica.classList.add("oculto");
    }
  });
});
