let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesPerSeconde = 0;
let koekjesVeld = document.querySelector('h2');
let powerKlikPrijs = 20;
let autoKlikPrijs = 50;
const fps = 60;

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

// klein koek ikoontje bij prijs
let minikoekfoto = "<img src='media/fotos/koek.png' alt='Foto' class='minikoek'/>";

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
        document.getElementById("kps").innerHTML = koekjesPerSeconde + " " + " per seconden";

    } else {
        alert("Te weinig koekjes om te kopen")
    }
}

autoUpgrade.addEventListener('click', bakker);

// automatisch koekjes erbij per seconde 
setInterval(function() {
    aantalkoekjes += koekjesPerSeconde/fps;
    updateKoekjes();
// om de seconde
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

// Functie om gouden koekje te weergeven
function showgoudenkoekje() {
    document.getElementById('goudenkoekje').style.display = 'block';
    // Event listener toevoegen aan de foto om te luisteren naar klikgebeurtenissen
    document.getElementById('goudenkoekje').addEventListener('click', function() {
        // Verberg de foto wanneer erop wordt geklikt
        document.getElementById('goudenkoekje').style.display = 'none';
    });

    // Timer toevoegen om de foto te verbergen als er niet op wordt geklikt binnen 5 seconden
    setTimeout(function() {
        if (document.getElementById('goudenkoekje').style.display !== 'none') {
            console.log("Geen klik binnen 5 seconden. De foto wordt verborgen.");
            document.getElementById('goudenkoekje').style.display = 'none';
        }
    }, 5000);
}

// Functie om executeWithChance elke 10 seconden uit te voeren
function executePeriodically() {
    executeWithChance();
    setTimeout(executePeriodically, 10000);
}

// Functie om de showgoudenkoekje functie uit te voeren met een kans van 1 op 3
function executeWithChance() {
    // Genereren van een willekeurig getal tussen 1 en 10
    let randomChance = Math.floor(Math.random() * 10) + 1;
    // Als het willekeurige getal 1 is, voer dan de showgoudenkoekje functie uit
    if (randomChance === 1) {
        showgoudenkoekje();
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
// eventlisteren om code uit te voeren
goudenkoekje.addEventListener('click', gold);

      // Functie om een koopknop toe te voegen voor het wijzigen van de afbeeldingen
      function buyImageUpgrade() {
        let koekje = document.getElementById("koekje");
        if (aantalkoekjes >= 1000) {
          koekje.src = "media/fotos/regenboog.png"; // Verander de afbeelding naar een chocoladekoekje
          aantalkoekjes -= 1000; // Verminder het aantal koekjes met de kosten van de upgrade
          updateKoekjes(); // Update het aantal koekjes op het scherm
        } else {
          alert("Te weinig koekjes om te kopen");
        }
      }

      // Voeg een event listener toe aan de knop om de upgrade te kopen
      document.getElementById("buyUpgradeButton").addEventListener("click", buyImageUpgrade);

      // Functie om de afbeelding terug te veranderen naar de standaardafbeelding
      function resetCookieImage() {
        let koekje = document.getElementById("koekje");
        koekje.src = "media/fotos/koek.png"; // Verander de afbeelding terug naar de standaardafbeelding
      }

      // Voeg event listeners toe aan de knoppen
      document.getElementById("resetImageButton").addEventListener("click", resetCookieImage);

