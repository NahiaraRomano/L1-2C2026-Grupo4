
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(pregunta => {

    const boton = pregunta.querySelector(".pregunta-btn");

    boton.addEventListener("click", () => {

        pregunta.classList.toggle("activa");

        const simbolo = boton.querySelector("span");

        if (pregunta.classList.contains("activa")) {
            simbolo.textContent = "-";
        } else {
            simbolo.textContent = "+";
        }

    });

});
