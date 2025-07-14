//----------------------guardian---------------------------
const auth = sessionStorage.getItem("auth");
if (auth != "true") {
    alert("Debes iniciar sesion para seguir");
    window.location = "../html/login.html";
}
//------------------cerrar sesion---------------------------
const SignOut = document.getElementById("SignOut");
SignOut.addEventListener("click", () => {
    alert("Acabas de cerrar sesion");
    sessionStorage.clear();
    window.location = "../html/login.html";
});
