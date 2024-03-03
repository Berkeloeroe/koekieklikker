let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesPerSeconde = 0;
let koekjesVeld = document.querySelector('h2');
let bakkerPrijs = 20;
let autoPrijs = 50;

// https://dlo.mijnhva.nl/d2l/le/content/536457/viewContent/1958535/View
function verhoogKoekjes(){
    aantalkoekjes += koekjesPerKlik;
    updateKoekjes();
}

// https://www.youtube.com/watch?v=9Fr5Q18rLcY
function bakker(){
    if(aantalkoekjes >= bakkerPrijs) {
        koekjesPerKlik += 1;
        aantalkoekjes -= bakkerPrijs;
        bakkerPrijs = Math.round(bakkerPrijs *1.7);
        document.getElementById("test").innerHTML = "Power klik prijs: " + bakkerPrijs;
        // werkt half
        shopify.play();

    } else {
        alert("Te weinig koekjes om te kopen")
    }

    updateKoekjes();
    
}

klikUpgrade.addEventListener('click', bakker);

// koop geluid wanneer je upgrade koopt
let powerklik = document.getElementById("klikUpgrade");
let shopify = document.getElementById("shopify");

    klikUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

// h2 updaten
function updateKoekjes() {
    koekjesVeld.textContent = aantalkoekjes + "-" + "Koekjes";
}

koekje.addEventListener('click', verhoogKoekjes);

// auto kliks upgrade
function koopAuto() {
    if(aantalkoekjes >= autoPrijs) {
        aantalkoekjes -= autoPrijs;
        koekjesPerSeconde += 1;
        autoPrijs = Math.round(autoPrijs *1.7);
        document.getElementById("test2").innerHTML = "Bakker prijs: " + autoPrijs;
        // werkt half
        shopify.play();

    } else {
        alert("Te weinig koekjes om te kopen")

    }
}

autoUpgrade.addEventListener('click', koopAuto);

// https://youtu.be/-YnocONplws
setInterval(function() {
    aantalkoekjes += koekjesPerSeconde;
    updateKoekjes();

}, 1000)

// chatgpt "schrijf voor mij in javascript hoe ik met een druk op een foto een geluid afspeel"
let image = document.getElementById("koekje");
let audio = document.getElementById("audio");

    koekje.addEventListener("click", function () {
    audio.currentTime = 0;

    audio.play();
});