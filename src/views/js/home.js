import { showEvents } from "./components/showEvents.js";
import { routes } from "./router.js";
const auth = localStorage.getItem("auth");
if (auth != "true") {
    alert("Debes iniciar sesion para seguir");
    window.location = "../../../public/index.html";
}


//----------------------------------------------------------------
const SignOut = document.getElementById("SignOut");
SignOut.addEventListener("click", () => {
    alert("Acabas de cerrar sesion");
    localStorage.clear();
    window.location = "../../../public/index.html";
});
//-----------------------------------------------------------------
const containerEvents = document.getElementById('containerEvents');
if (!containerEvents.innerHTML.trim()) {
  showEvents()
}
//-----------------------------------------------------------------
document.addEventListener("click", (event) => {
    if(event.target.matches("a[data-link]")) {
        event.preventDefault();

        window.location.hash = event.target.getAttribute("href");
        render();
    }

});

window.addEventListener("hashchange", render); 

function render() {
    let patch = window.location.hash;
    routes[patch]();
}

