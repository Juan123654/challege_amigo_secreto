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


/*function escogerJugador(){
    for(i = 0;i<nombreUsuarios.length;i++){
        console.log(`jugador: ${i} -> ${nombreUsuarios[i]}`);
    }
}*/




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

