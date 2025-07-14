const botonCambiarTema = document.getElementById("btnToggleTheme");
const elementoHTML = document.documentElement;
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado) {
    elementoHTML.setAttribute("data-bs-theme", temaGuardado);
}

botonCambiarTema.addEventListener("click", () => {
    const temaActual = elementoHTML.getAttribute("data-bs-theme");
    const nuevoTema = temaActual === "light" ? "dark" : "light";

    elementoHTML.setAttribute("data-bs-theme", nuevoTema);
    localStorage.setItem("tema", nuevoTema);
});
