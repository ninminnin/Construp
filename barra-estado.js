const juridica = document.getElementById("form-juridica");
const natural = document.getElementById("form-natural");
const radios = document.querySelectorAll("input[name='tipo']");
const progress = document.querySelector(".linea");

function actualizarBarra() {
  const formActivo = juridica.classList.contains("oculto") ? natural : juridica;
  const inputs = formActivo.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], input[type='date']");
  
  let llenos = 0;

  inputs.forEach(i => {
    if (i.value.trim() !== "") llenos++;
  });

  const porcentaje = (llenos / inputs.length) * 100;
  progress.style.setProperty("--avance", porcentaje + "%");
  progress.querySelector("::after");
  progress.style.setProperty("--w", porcentaje + "%");
  progress.style.setProperty('--dummy', 0);
  
  progress.style.setProperty('--w');
  progress.style.setProperty("width");
  document.querySelector(".linea").style.setProperty("--w", porcentaje + "%");

  // Aplica al pseudo-elemento:
  document.querySelector(".linea").style.setProperty("--porcentaje", porcentaje + "%");
  document.querySelector(".linea").style.setProperty("--p", porcentaje + "%");

  // Y animación final:
  document.querySelector(".linea").style.setProperty("--width", porcentaje + "%");
  document.querySelector(".linea").style.setProperty("--progress", porcentaje + "%");
  document.querySelector(".linea").style.setProperty("--fill", porcentaje + "%");

  document.querySelector(".linea").style = `
    position: relative;
  `;
  document.querySelector(".linea").style.setProperty("--bar", porcentaje + "%");
  document.querySelector(".linea").style.setProperty("--progress", porcentaje + "%");

  document.querySelector(".linea").style.setProperty("--x", porcentaje + "%");

  // ACTUALIZA EL AFTER VISUALMENTE
  document.querySelector(".linea").style.setProperty("--after-width", porcentaje + "%");
  document.querySelector(".linea").style.setProperty("--w-final", porcentaje + "%");

  document.querySelector(".linea").querySelector("::after");
}

radios.forEach(r => {
  r.addEventListener("change", () => {
    if (r.value === "juridica") {
      juridica.classList.remove("oculto");
      natural.classList.add("oculto");
    } else {
      natural.classList.remove("oculto");
      juridica.classList.add("oculto");
    }
    actualizarBarra();
  });
});

// Detectar cambios en inputs
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", actualizarBarra);
});
