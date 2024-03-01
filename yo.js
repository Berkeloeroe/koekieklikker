let getal = 1;
let mysteryNumber = Math.random() * 6;
mysteryNumber = Math.round(mysteryNumber);
// console.log(mysteryNumber);

const plusknop = document.querySelector("#plus");

const minKnop = document.querySelector('#min');

let getalVeld = document.querySelector('h1');

const controleerKnop = document.querySelector("#controleer");

const pElement = document.querySelector('#para');


function verhoogGetal(){

getal = getal + 1;
updateGetal();
    
}

function verlaagGetal(){

    getal = getal - 1;
    updateGetal();
        
}

function updateGetal() {
    // console.log("getal: " + getal);
    getalVeld.textContent = getal + "Koekjes";
}

verhoogGetal();
verlaagGetal();
updateGetal();

plusknop.addEventListener('click', verhoogGetal);
minKnop.addEventListener('click', verlaagGetal);

function controleerGetal(){

    if(getal === mysteryNumber){
        pElement.textContent = ("Goed geraden");

        } else if (getal > mysteryNumber){
        pElement.textContent = ("Helaas, te hoog.");
        } else {
            
            pElement.textContent = ("Helaas, te laag.");

        }
    
        
}

controleerKnop.addEventListener('click', controleerGetal);

pElement.textContent = ("Helaas, te hoog.");

// console.log(pElement);
