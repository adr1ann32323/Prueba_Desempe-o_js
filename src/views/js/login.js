
export function login (){
    container.innerHTML =`<div id="containerLogin">
        <form class="formLogin" id="formLogin">
            <h2 class="h2">Login</h2>
            <div class="mb-3">
                <label for="email" class="form-label">Email: </label>
            <input type="email" id="emailLogin" class="form-control">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            
            <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        <a class="a" href="#/register">Don't have an account? Register</a>
    </div>`

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
                window.location= "../html/home.html"
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

}