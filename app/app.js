let nombreUsuarios = [];

//funcion para obtener el nombre de los jugadores
function nombreUsuario(){
    let nombreUsuario = document.getElementById('nombre-jugador').value;
    if(nombreUsuario == ""){
        alert("Nombre de jugador vacio");
    }else{
        nombreUsuarios.push(nombreUsuario);
        limpiarCaja();
        verNombres();
    }
}

//funcion para ver los nombres de los jugadores
function verNombres(){
    let nombres = "";
    for(let i = 0;i<nombreUsuarios.length;i++){
        nombres += `Jugador: ${i+1} -> ${nombreUsuarios[i]}</br>`;
    }
    asignarTextoByID('jugadores',`</br> ${nombres}`);
}

//funcion para obtener en random el nombre del jugador
function escogerJugador(){
    let seleccionJugador = "";
    if(nombreUsuarios.length === 0){
        alert("No hay jugadores");
        return;
    }else{
        seleccionJugador = nombreUsuarios[Math.floor(Math.random()*nombreUsuarios.length)];
        asignarTextoByID('seleccion-jugador',`Jugador: ${seleccionJugador}`); 
    }
}


//funciona para reutilizar
function asignarTextoByID(id,texto){
    let idHTML = document.getElementById(id);
    idHTML.innerHTML = texto;
    return;
}

//funcion para limpar input de texto
function limpiarCaja(){
    let valorCaja = document.getElementById('nombre-jugador');
    valorCaja.value = ""; 
    valorCaja.focus();
}