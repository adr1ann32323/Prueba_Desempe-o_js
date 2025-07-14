const loginForm = document.getElementById("formLogin");

const APP_URL = "http://localhost:3000";

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hola")
    auth();
});
async function auth() {
    const userEmail = document.getElementById("emailLogin").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(APP_URL + "/users");
        const users = await response.json();

        let exists = false;

        for (let user of users) {
            if (password === user.password && userEmail === user.email) {
                exists = true;
                localStorage.setItem("name", user.name);
                localStorage.setItem("userId", user.id)
                localStorage.setItem("email", user.email);
                localStorage.setItem("rol", user.rol)
                break;
            }
        }
        if (exists) {
            localStorage.setItem("auth", "true");
            alert("hola mundo inicie sesion")
        } else {
            alert("Usuario o contraseña incorrecto");
        }
    } catch (error) {
        console.error("ERROR", error);
    }
}
//--------------------------------------------------------------------------------
