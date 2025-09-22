// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
        do{

            if(nombreAmigo=="") {
                alert("Por favor, inserte un nombre.");
                break;
            }
            else{
                amigos.push(nombreAmigo);
            }
         } while(nombreAmigo === ""); // Validación del nombre amigo que no sea vacio

        document.querySelector('#amigo').value = ""; //Limpio la caja de texto en vacio
        actualizarListaAmigos();
}


