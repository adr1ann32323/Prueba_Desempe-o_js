const auth = localStorage.getItem("auth");
if (auth == "true") {
    alert("has iniciado sesion, no puedes acceder a registro");
    window.location = "./home.html";
}

//------------------------------------------------------------------
const formRegister = document.getElementById("formRegister");
const APP_URL = "http://localhost:3000";

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    registerGet();
});

async function registerGet() {
    const nameRegister = formRegister.querySelector("#nameRegister").value;
    const emailRegister = formRegister.querySelector("#emailRegister").value;
    const passwordRegister = formRegister.querySelector("#passwordRegister").value;
    const confirmPassword = formRegister.querySelector("#confirmPassword").value;
    let rolRegister = formRegister.querySelector("#rolRegister").checked;
    
    if (rolRegister){
        rolRegister= "admin"
    }else{
        rolRegister="user"
    }

    try {
        const response = await fetch(APP_URL + "/users");
        const users = await response.json();

        if(passwordRegister !== confirmPassword){
            alert(" la contraseña no coincide")
            return
        }

        let exists = false;

        for (let user of users) {
            if (user.email === emailRegister) {
                alert("El email ya se encuentra registrado");
                exists = true;
                break;
            }
           
        }

        if (!exists) {
            const newUser = {
                name: nameRegister,
                email: emailRegister,
                password: passwordRegister,
                rol: rolRegister
            };
            await registerPost(newUser);
        }
    } catch (error) {
        console.error("ERROR", error);
        alert("Error al registrar el usuario");
    }
}

async function registerPost(newUser) {
    try {
        const response = await fetch(APP_URL + "/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            localStorage.setItem("name", newUser.name);
            localStorage.setItem("userId", newUser.id);
            localStorage.setItem("auth", "true");
            localStorage.setItem("email", newUser.email);
            alert("usuario creado correctamente, inicia sesion en login")
            window.location= "./home.html"
        } else {
            alert("Error al registrar el usuario");
        }
    } catch (error) {
        console.error("ERROR", error);
        alert("Error al registrar el usuario");
    }
}
