let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesPerSeconde = 0;
let koekjesVeld = document.querySelector('h2');
let powerKlikPrijs = 20;
let autoKlikPrijs = 50;
const fps = 60;

// zo kan ik makkelijker dingen kopen om code te testen
let developmentmode = false;

if (developmentmode === true) {
    aantalkoekjes = 1000000;
}

// verhoog het aantal koekjes
function verhoogKoekjes(){
    aantalkoekjes += koekjesPerKlik;
    updateKoekjes();
}

koekje.addEventListener('click', verhoogKoekjes);

// h2 updaten naar aantal koekjes
function updateKoekjes() {
    koekjesVeld.textContent = Math.round(aantalkoekjes) + " " + "-" + " Koekjes!";
}

let minikoekfoto = "<img src='media/koek.png' alt='Foto' class='minikoek'/>";

// powerklik upgrade
function powerKlik(){
    if(aantalkoekjes >= powerKlikPrijs) {
        koekjesPerKlik += 1;
        aantalkoekjes -= powerKlikPrijs;
        powerKlikPrijs = Math.round(powerKlikPrijs *1.4);
        document.getElementById("test").innerHTML = minikoekfoto + powerKlikPrijs;
        shopify.play();

    } else {
        alert("Te weinig koekjes om te kopen");
    }
    updateKoekjes();
}

klikUpgrade.addEventListener('click', powerKlik);

// koop bakker upgrade 
function bakker() {
    if(aantalkoekjes >= autoKlikPrijs) {
        aantalkoekjes -= autoKlikPrijs;
        koekjesPerSeconde += 1;
        autoKlikPrijs = Math.round(autoKlikPrijs *1.4);
        document.getElementById("test2").innerHTML = minikoekfoto + autoKlikPrijs;
        shopify.play();
        // Koekjes per seconde updaten in html
        let kps = document.getElementById("kps")
        document.getElementById("kps").innerHTML = koekjesPerSeconde + " " + "Koekjes per seconden";

    } else {
        alert("Te weinig koekjes om te kopen")
    }
}

autoUpgrade.addEventListener('click', bakker);

// automatisch koekjes erbij per seconde 
setInterval(function() {
    aantalkoekjes += koekjesPerSeconde/fps;
    updateKoekjes();

}, 1000/fps)

// chatgpt "schrijf voor mij in javascript hoe ik met een druk op een foto een geluid afspeel"
let image = document.getElementById("koekje");
let audio = document.getElementById("eetGeluid");

    koekje.addEventListener("click", function () {
    audio.currentTime = 0;

    audio.play();
});

// koop geluid wanneer je powerklik upgrade koopt
let powerklik = document.getElementById("klikUpgrade");
let bakkerfoto = document.getElementById("autoUpgrade");
let shopify = document.getElementById("shopify");

    klikUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

    autoUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

// Functie om de foto te weergeven
function showPhoto() {
    document.getElementById('photo').style.display = 'block';
    // Event listener toevoegen aan de foto om te luisteren naar klikgebeurtenissen
    document.getElementById('photo').addEventListener('click', function() {
        // Verberg de foto wanneer erop wordt geklikt
        document.getElementById('photo').style.display = 'none';
    });

    // Timer toevoegen om de foto te verbergen als er niet op wordt geklikt binnen 5 seconden
    setTimeout(function() {
        if (document.getElementById('photo').style.display !== 'none') {
            console.log("Geen klik binnen 5 seconden. De foto wordt verborgen.");
            document.getElementById('photo').style.display = 'none';
        }
    }, 5000);
}

// Functie om executeWithChance elke 10 seconden uit te voeren
function executePeriodically() {
    executeWithChance();
    setTimeout(executePeriodically, 10000);
}

// Functie om de showPhoto functie uit te voeren met een kans van 1 op 3
function executeWithChance() {
    // Genereren van een willekeurig getal tussen 1 en 3
    let randomChance = Math.floor(Math.random() * 3) + 1;
    // Als het willekeurige getal 1 is, voer dan de showPhoto functie uit
    if (randomChance === 1) {
        showPhoto();
    } else {
        console.log("Random nummer was niet 1. Opnieuw proberen...");
    }
}

// Roep de functie aan om de code uit te voeren
executePeriodically();

// extra koekjes door gouden koekje
function gold() {
    aantalkoekjes += 1000;
}

photo.addEventListener('click', gold);

