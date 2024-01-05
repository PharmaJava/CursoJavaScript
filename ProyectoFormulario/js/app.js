window.addEventListener("load", function () {
    // Identificando elementos
    const inputNombre = document.querySelector("#nombre");
    const inputPass = document.querySelector("#password");
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");

    inputNombre.addEventListener("blur", validarFormulario);
    inputPass.addEventListener("blur", validarFormulario);
    inputEmail.addEventListener("blur", validarFormulario);
    inputAsunto.addEventListener("blur", validarFormulario);
    inputMensaje.addEventListener("blur", validarFormulario);

    function validarFormulario(e) {
        inputNombre.style.color = "black";

        // Con la función trim recortamos espacios en blanco
        if (e.target.value.trim() === "") {
            e.target.value = "Campo requerido";
            mostrarAlerta(e);
        }

        if (e.target === inputEmail && !validarEmail(inputEmail.value)) {
            if (!inputEmail.value.includes("Este email no es valido")) {
                inputEmail.value += "Este email no es valido";
            }
            mostrarAlerta(e);
        } else {
            resetearEstilo(inputEmail);
        }
    }

    function validarEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    }

    function mostrarAlerta(e) {
        e.target.style.color = "rgba(255, 0, 0, 0.5)";
    }

    function resetearEstilo(elemento) {
        elemento.style.color = "black";
        elemento.style.fontWeight = "normal";
    }
});
