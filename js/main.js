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
    const randomNumber = 1;
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
    const optionsValue = options.value;
    let forces = "";
    if (optionsValue==="Pelosos con fuerza")
    forces = 1;
    else if (optionsValue==="Sureños buenos con fuerza")
    forces = 2;
    else if (optionsValue==="Enanos con fuerza")
    forces = 3;
    else if (optionsValue==="Númenóreanos con fuerza")
    forces = 5;
    else if (optionsValue==="Elfos con fuerza")
    forces = 5;
}

//comparar razas para hacer ell resultado

//funcion manejadora

function handleClick(e) {
    e.preventDefault();
    racesComputer ();
}

btnPlay.addEventListener("click", handleClick);