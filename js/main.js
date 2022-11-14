"use strict";

//query selector.Llamamos a las clases con las que vamos a trabajar


const races = document.querySelector (".js-races");
const btnPlay = document.querySelector (".js-button");
const result = document.querySelector (".js-result");
const userCounterElement = document.querySelector(".js-userCounterElement");
const pcCounterElement = document.querySelector(".js-pcCounterElement");
const btnReset = document.querySelector(".js-buttonReset");

// CONTADORES

let userPoints = 0;
let pcPoints = 0;
let movesCount = 0;


// cuando hacemos click en batalla , se genera un número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//funcion para generar los numeros asociados a la raza

function getComputerForces() {
    const randomNumber = getRandomNumber(5);
    let forceComp = "";
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 ){
        forceComp = 2;
    }
    else if(randomNumber === 4){
        forceComp= 3;
    }
    else{
        forceComp = 5;
    }

return forceComp
}


//nombrar razas del jugador con sus correspondientes fuerzas para luego compararlas
function getUserRace(){
    const racesValue = races.value;
    let forces = "";
    if (racesValue==="1")
    forces = 1;
    else if (racesValue==="2")
    forces = 2;
    else if (racesValue==="3")
    forces = 3;
    else if (racesValue==="4")
    forces = 5;
    else if (racesValue==="5")
    forces = 5;
    
    return forces
}

//comparar razas para hacer el resultado

function compareForces (computer, player){

     if(player > computer){
        result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena";
        userPoints++
        userCounterElement.innerHTML = `Jugadora:  ${userPoints}`;
    }
    else if (player < computer){
        result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
        pcPoints++
        pcCounterElement.innerHTML = `Ordenador: ${pcPoints}`;
    }
    else {
        result.innerHTML = "Empate";
    }

}


// funcion para sumar los movimientos y reiniciar el juego

function renderMoves (){
    movesCount++
    if (movesCount === 10){
        btnPlay.classList.add ("hidden");
        btnReset.classList.remove("hidden");
        // Resultado de la partida
    if(userPoints>pcPoints){
        result.innerHTML= "¡Has ganado la partida!";
    }
    else if (userPoints<pcPoints){
        result.innerHTML= "El ordenado ganó esta partida, vuelve a intentarlo";
    }
    else{
        result.innerHTML = "Empate";
    }
    }
    
}





//funcion manejadora

function handleClick(e) {
    e.preventDefault();
    // es mejor ejecutarlo aquí para que no sume movimientos si le das al botón y no seleccionas ninguna opción.
    const racesValue = races.value;
    if(  racesValue === "0"){
        result.innerHTML = "Seleccione la raza con la que va a jugar";
    } 
    else  {
        const computer = getComputerForces ();
        const player = getUserRace();
        compareForces (computer, player);
        renderMoves ();
    }
    
}

btnPlay.addEventListener("click", handleClick);