const juridica = document.getElementById("form-juridica");
const natural = document.getElementById("form-natural");
const radios = document.querySelectorAll("input[name='tipo']");
const barra = document.querySelector(".linea");

function actualizarBarra() {
  const formActivo = juridica.classList.contains("oculto") ? natural : juridica;
  
  const inputs = formActivo.querySelectorAll("input");
  
  let llenos = 0;

  inputs.forEach(input => {
    if (input.value.trim() !== "") llenos++;
  });

  const porcentaje = (llenos / inputs.length) * 100;

  barra.style.setProperty("--progreso", porcentaje + "%");
}

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "juridica") {
      juridica.classList.remove("oculto");
      natural.classList.add("oculto");
    } else {
      natural.classList.remove("oculto");
      juridica.classList.add("oculto");
    }
    actualizarBarra();
  });
});

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", actualizarBarra);
});
