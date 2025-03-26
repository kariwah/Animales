import Leon from './leon.js';
import Lobo from './lobo.js';
import Oso from './oso.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

let btn = document.getElementById('btnRegistrar');
btn.addEventListener('click', registarAnimal);
let registroAnimal = document.getElementById('Animales');
let contadorModal=0;

//array con datos de la api
let copiaResultadoApi;

//let imgPrevia = document.getElementById('preview');

//consulta api animales.json - funcion IIFE
(() => {
    console.log('Funcion IIFE')

    const url = 'animales.json'
    const consultarApi = async () => {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        //clonacion de array resultado
        copiaResultadoApi = resultado;
        console.log(copiaResultadoApi);
        
    }
    consultarApi();
})();

function registarAnimal(event) {

    event.preventDefault();

    //declaracion de variables a usar al crear un objeto
    let nombreAnimal = document.getElementById('animal').value;
    let aniosAnimal = document.getElementById('edad').value;
    let imagenAnimal;
    let comentariosAnimal = document.getElementById('comentarios').value;
    let sonidoAnimal;
    let claseAnimal = nombreAnimal;

    //asigno valor a las variables imagen y sonido en base al animal selecionado
    copiaResultadoApi.animales.forEach(e => {
        if (e.name == claseAnimal) {
            imagenAnimal = e.imagen;
            sonidoAnimal = e.sonido;
        }
    });

    //registro de animales
    //Cuando se ingresa un Leon
    if (claseAnimal == 'Leon') {
        let nuevoAnimal = new Leon(nombreAnimal, aniosAnimal, imagenAnimal, comentariosAnimal, sonidoAnimal);
        console.log(nuevoAnimal);
        pintaAnimal(nuevoAnimal) ;       
        limpiarFormulario();
    } else {
        //Cuando se ingresa un Lobo
        if (claseAnimal == 'Lobo') {
            let nuevoAnimal = new Lobo(nombreAnimal, aniosAnimal, imagenAnimal, comentariosAnimal, sonidoAnimal);
            console.log(nuevoAnimal);
            pintaAnimal(nuevoAnimal) ;       
            limpiarFormulario();
        } else {
            //Cuando se ingresa un Oso
            if (claseAnimal == 'Oso') {
                let nuevoAnimal = new Oso(nombreAnimal, aniosAnimal, imagenAnimal, comentariosAnimal, sonidoAnimal);
                console.log(nuevoAnimal);
                pintaAnimal(nuevoAnimal) ;       
                limpiarFormulario();
            } else {
                //Cuando se ingresa una Serpiente
                if (claseAnimal == 'Serpiente') {
                    let nuevoAnimal = new Serpiente(nombreAnimal, aniosAnimal, imagenAnimal, comentariosAnimal, sonidoAnimal);
                    console.log(nuevoAnimal);
                    pintaAnimal(nuevoAnimal) ;       
                    limpiarFormulario();
                } else {
                    //Cuando se ingresa un Aguila
                    if (claseAnimal == 'Aguila') {
                        let nuevoAnimal = new Aguila(nombreAnimal, aniosAnimal, imagenAnimal, comentariosAnimal, sonidoAnimal);
                        console.log(nuevoAnimal);
                        pintaAnimal(nuevoAnimal) ;       
                        limpiarFormulario();
                    }
                }
            }
        }
    }

}//funcion registrarAnimal


function pintaAnimal(animal) {

    let rutaImg;
    let rutaAudio;

    //obtener ruta de la imagen
    if (animal.nombre == 'Leon') {
        rutaImg = '/assets/imgs/Leon.png';
        rutaAudio = '/assets/sounds/Rugido.mp3';
        contadorModal++;
    } else {
        if (animal.nombre == 'Lobo') {
            rutaImg = '/assets/imgs/Lobo.jpg';
            rutaAudio = '/assets/sounds/Aullido.mp3';
            contadorModal++;
        } else {
            if (animal.nombre == 'Oso') {
                rutaImg = '/assets/imgs/Oso.jpg';
                rutaAudio = '/assets/sounds/Gruñido.mp3';               
                contadorModal++;
            } else {
                if (animal.nombre == 'Serpiente') {
                    rutaImg = '/assets/imgs/Serpiente.jpg';
                    rutaAudio = '/assets/sounds/Siseo.mp3';
                    contadorModal++;
                } else {
                    if (animal.nombre == 'Aguila') {
                        rutaImg = '/assets/imgs/Aguila.png';
                        rutaAudio = '/assets/sounds/Chillido.mp3';
                        contadorModal++;
                    }
                }
            }
        }
    }

    //crear ventana modal y asignacion de datos en base al animal ingresado
    registroAnimal.innerHTML += `<div><img class="" src="${rutaImg}" style ="height:150px; width:150px;" data-toggle="modal" data-target="#exampleModal${contadorModal}"/>
                                    <audio controls  style ="width:100%;">
                                        <source src="${rutaAudio}" type="audio/mpeg">
                                    </audio></div>
                                    <!-- Modal -->
                                    <div class="modal fade edit" id="exampleModal${contadorModal}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header bg-dark">
                                        <h5 class="modal-title text-white" id="exampleModalLabel">${animal.nombre}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div class="modal-body bg-dark">
                                        <img src="${rutaImg}" style ="height:450px; width:450px;"/>
                                        <h1 class="text-center text-white">${animal.edad}</h1>
                                        <h2 class="text-center text-white">Comentarios</h2>
                                        <h2 class="text-center text-white">${animal.comentarios}<h2>     
                                        </div>
                                    </div>
                                    </div>
                                    </div>`;                                                                   

}//funcion pintaAnimal


function limpiarFormulario() {

    document.getElementById('miform').reset();

  }//limpiarFormulario
