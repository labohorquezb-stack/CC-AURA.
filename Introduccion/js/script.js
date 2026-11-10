const botones = document.querySelectorAll(".agregar");
const contador = document.getElementById("contador");
let total = 0;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const nombre = boton.parentElement.querySelector("h3").textContent;
    total = total + 1;
    contador.textContent = total;
    boton.textContent = "Agregado ✔";
    alert("Agregaste al carrito: " + nombre);
  });
});
