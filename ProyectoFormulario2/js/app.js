window.addEventListener("load", function () {
    // Identificando elementos
    const inputNombre = document.querySelector("#nombre");
    const inputPass = document.querySelector("#password");
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const elFormulario=  document.querySelector("#formulario");
    const botonEnvio= document.querySelector("#formulario button[type='submit']");


    inputNombre.addEventListener("blur", validarFormulario);
    inputPass.addEventListener("blur", validarFormulario);
    inputEmail.addEventListener("blur", validarFormulario);
    inputAsunto.addEventListener("blur", validarFormulario);
    inputMensaje.addEventListener("blur", validarFormulario);
    
    const objFormulario={
        nombre: "",
        password:"",
        email:"",
        asunto:"",
        mensaje:""

    }

    // function pruebaBoton(e){

    //     botonEnvio.classList.remove("opacity-50");
    //     botonEnvio.disabled= false;
    // }
    
    function comprobarFormulario(){

        if (Object.values(objFormulario).includes('')){

            botonEnvio.classList.add("opacity-50");
            botonEnvio.disabled= true;
        }else{
            botonEnvio.classList.remove("opacity-50");
            botonEnvio.disabled= false;
        }
    }

function validarFormulario(e) {

    if(e.target.value.trim()==""){

        mostrarError(`El campo ${e.target.id} es requerido`, e.target.parentElement);

        return;
    }
    
    // else console.log("Hay texto");
    
    quitarAviso(e.target.parentElement);

    if (e.target.id=="email" && validarEmail(e.target.value)==false){
    mostrarError("El email no es correcto", e.target.parentElement);

    }
    objFormulario[e.target.name]=e.target.value;

    console.log(objFormulario);

    comprobarFormulario();
}



function mostrarError(mensaje, elemento){

    const alerta= elemento.querySelector(".bg-red-600")

    if(alerta) alerta.remove();

    const error=document.createElement("p");

    error.textContent=mensaje;

    error.classList.add("bg-red-600", "text-white", "text-center", "p-2");



    elemento.appendChild(error);

}


function quitarAviso(elemento){

    const alerta= elemento.querySelector(".bg-red-600")

    if(alerta) alerta.remove();
}

function validarEmail(email){

    const regex=  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    const resultado= regex.test(email);

    //console.log(resultado);

    return resultado;


}





});
