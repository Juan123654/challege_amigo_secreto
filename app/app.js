console.log("Hola Mundo");
let nombreUsuarios = [];

function nombreUsuario(){
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    if(nombreUsuario == ""){
        alert("Nombre de jugador vacio");
    }else{
        nombreUsuarios.push(nombreUsuario);
        verNombres();
        //escogerJugador();
    }
    
}
function verNombres(){
    let nombres = "";
    for(i = 0;i<nombreUsuarios.length;i++){
        nombres += `Jugador: ${i+1} -> ${nombreUsuarios[i]}</br>`;
    }
    asignarTextoElemento('p',`</br> ${nombres}`);
}


function escogerJugador(){
    let seleccionJugador = "";
    seleccionJugador = nombreUsuarios[Math.floor(Math.random()*nombreUsuarios.length)];
    console.log(seleccionJugador);
}




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

