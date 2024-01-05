//Identificando elementos

const carro = document.querySelector("#carro");

const listaCursos= document.querySelector("#lista-cursos");

const botonVaciarCarro= document.querySelector("#vaciar-carro");

const contenidoCarro= document.querySelector("#carro tbody");

let productosCarro= [];


listaCursos.addEventListener("click", agregarCurso);

//botonVaciarCarro.addEventListener("click", limpiarCarro);

botonVaciarCarro.addEventListener("click", ()=>{
    productosCarro=[];
    limpiarCarro();
});

carro.addEventListener("click", eliminarCurso);


function agregarCurso(e){

    e.preventDefault();

    if (e.target.classList.contains("agregar-carro")){

        getDatosCursos(e.target.parentElement.parentElement);
    }
}



function getDatosCursos(c){

    const datosCursos={
        imagen:c.querySelector('img').src,
        titulo_curso: c.querySelector('h4').textContent,
        precio_curso: c.querySelector('.precio span').textContent,
        id_curso:c.querySelector('a').getAttribute('data-id'),
        cantidad:1


    }

    for(let i=0; i<productosCarro.length; i++){

        if (productosCarro[i].id_curso== datosCursos.id_curso){
            productosCarro[i].cantidad++;
            agregarACarro();

            return;
        }
    }


    productosCarro.push(datosCursos);

    agregarACarro();

}

function agregarACarro(){

    limpiarCarro();

    console.log(productosCarro);

    productosCarro.forEach(curso=>{

        const filaTabla=document.createElement('tr');

        filaTabla.innerHTML= `<td><img src= "${curso.imagen}" width="150%"/></td>
        <td style= "text-align:center; font-size:0.8em">${curso.titulo_curso}</td>
        <td style= "text-align:center">${curso.precio_curso}</td>
        <td style= "text-align:center">${curso.cantidad}</td>
        <td><a href="#" class="borrar-curso" dataId="${curso.id_curso}">X</a></td>`;

        contenidoCarro.appendChild(filaTabla);

    });

    mostrarTotal();

}    


function eliminarCurso(e){

    if(e.target.classList.contains("borrar-curso")){
    
        const cursoId = e.target.getAttribute("dataId");

        productosCarro= productosCarro.filter(curso=>curso.id_curso!=cursoId);
    
        agregarACarro();
    }
}



function limpiarCarro(){

    contenidoCarro.innerHTML="";


}

function calcularTotal(){

    let total=0;

    productosCarro.forEach(producto=>{

        total+= parseFloat( producto.precio_curso) * producto.cantidad;
    });

    return total
}

function mostrarTotal(){

    const elemTotal=document.querySelector("#total-carro span");
    elemTotal.textContent=calcularTotal();
}