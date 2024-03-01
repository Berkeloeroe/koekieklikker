let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesVeld = document.querySelector('h1');

function verhoogKoekjes(){

    aantalkoekjes += koekjesPerKlik;
    updateKoekjes();
    
}

function bakker(){

    if(aantalkoekjes >= 100) {
        koekjesPerKlik += 1;
        aantalkoekjes -= 100;
    } else {
        alert("te weinng koekjes om te kopen")
    }

    updateKoekjes();
    
}

function updateKoekjes() {
    koekjesVeld.textContent = aantalkoekjes + "Koekjes";
}

koekje.addEventListener('click', verhoogKoekjes);
klikUpgrade.addEventListener('click', bakker);