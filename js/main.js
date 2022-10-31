"use strict";

//query selector.Llamamos a las clases con las que vamos a trabajar


const races = document.querySelector (".js-races");
const btnPlay = document.querySelector (".js-button");
const result = document.querySelector (".js-result");

// cuando hacemos click en batalla , se genera un número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//funcion para generar los numeros asociados a la raza

function racesComputer () {
    const randomNumber = 2;
    // getRandomNumber(5);
    let raceComp = "";
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 ){
    raceComp = 2;
    }
    else if(randomNumber === 4){
        raceComp = 3;
    }
    else if(randomNumber === 5){
        raceComp = 5;
    }
// console.log(raceComp);
return raceComp
}




// Razas bondadosas:
// Raza 1: Pelosos con fuerza (1),
// Raza 2: Sureños buenos con fuerza (2),
// Raza 3: Enanos con fuerza (3),
// Raza 4: Númenóreanos con fuerza (4),
// Raza 5: Elfos con fuerza (5).

//nombrar razas del jugador con sus correspondientes fuerzas para luego compararlas
function playerForces(){
    const racesValue = races.value;
    let forces = "";
    if (racesValue==="Pelosos con fuerza")
    forces = 1;
    else if (racesValue==="Sureños buenos con fuerza")
    forces = 2;
    else if (racesValue==="Enanos con fuerza")
    forces = 3;
    else if (racesValue==="Númenóreanos con fuerza")
    forces = 5;
    else if (racesValue==="Elfos con fuerza")
    forces = 5;
    
    // console.log (forces);
    return forces
}

//comparar razas para hacer ell resultado

function compareForces (){
 //llamamos a la funciones para comparar los resultados de cada una
    let player = playerForces();
    let computer =  racesComputer () 
    // console.log (computer);
    if (player === 5 && computer === 5){
        result.innerHTML = "Empate";
    }
    if (player > computer){
        result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena";
    }
    if (player < computer){
        result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
    }



}


//funcion manejadora

function handleClick(e) {
    e.preventDefault();
    racesComputer ();
    playerForces();
    compareForces ();
}

btnPlay.addEventListener("click", handleClick);