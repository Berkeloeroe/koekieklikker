let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesPerSeconde = 0;
let koekjesVeld = document.querySelector('h2');
let powerKlikPrijs = 20;
let autoKlikPrijs = 50;
const fps = 60;

// let developmentmode = true;

// if (developmentmode === true) {
//     aantalkoekjes = 1000000;
// }

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
        powerKlikPrijs = Math.round(powerKlikPrijs *1.7);
        // document.getElementById("test").innerHTML = "Power klik prijs: " + powerKlikPrijs;
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
        autoKlikPrijs = Math.round(autoKlikPrijs *1.7);
        document.getElementById("test2").innerHTML = minikoekfoto + autoKlikPrijs;
        shopify.play();

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
let shopify = document.getElementById("shopify");

    klikUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

let bakkerfoto = document.getElementById("autoUpgrade");

    autoUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});