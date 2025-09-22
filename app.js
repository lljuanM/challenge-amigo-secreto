// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function actualizarListaAmigos(){
    //Limpia la lista de amigos
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        //Crea la lista de amigos
        for(i=0;i < amigos.length; i++){
            const li = document.createElement("li"); //Crea elemento HTML de tipo li 
            li.textContent = amigos[i]; // Asignar el nombre a la etiqueta li
            lista.appendChild(li); // Agregar el <li> a la lista
        }
        //Por si ya sorteo una vez limpia el anterior sorteo y permite mostrar la lista de amigos
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
}

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


