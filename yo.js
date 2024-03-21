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

// eventlisteneren om code uittevoeren met klik
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
        powerKlikPrijs = Math.round(powerKlikPrijs *1.2);
        document.getElementById("test").innerHTML = minikoekfoto + powerKlikPrijs;
        shopify.play();

    } else {
        alert("Te weinig koekjes om te kopen");
    }
    updateKoekjes();
}

 // eventlisteneren om code uittevoeren met klik
klikUpgrade.addEventListener('click', powerKlik);

// koop bakker upgrade 
function bakker() {
    if(aantalkoekjes >= autoKlikPrijs) {
        aantalkoekjes -= autoKlikPrijs;
        koekjesPerSeconde += 1;
        autoKlikPrijs = Math.round(autoKlikPrijs *1.3);
        document.getElementById("test2").innerHTML = minikoekfoto + autoKlikPrijs;
        shopify.play();
        // Koekjes per seconde updaten in html
        document.getElementById("kps").innerHTML = koekjesPerSeconde + " " + " per seconden";

    } else {
        alert("Te weinig koekjes om te kopen")
    }
}

// eventlisteneren om code uittevoeren met klik
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
    // 0 omdat je het geluid kan spammen
    audio.currentTime = 0;
    audio.play();
});

// koop geluid wanneer je powerklik upgrade koopt
let powerklik = document.getElementById("klikUpgrade");
let bakkerfoto = document.getElementById("autoUpgrade");
let shopify = document.getElementById("shopify");

    // klik geluid op middelvinger
    klikUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

    // klik geluid op bakker
    autoUpgrade.addEventListener("click", function () {
    shopify.currentTime = 0;

});

// Functie om gouden koekje te weergeven bron:chatgpt
function showgoudenkoekje() {
    document.getElementById('goudenkoekje').style.display = 'block';
    // Event listener toevoegen aan de foto om te luisteren naar klikgebeurtenissen
    document.getElementById('goudenkoekje').addEventListener('click', function() {
        // Verberg de foto wanneer erop wordt geklikt
        document.getElementById('goudenkoekje').style.display = 'none';
    });

    // Timer toevoegen om de foto te verbergen als er niet op wordt geklikt binnen 5 seconden bron:chatgpt
    setTimeout(function() {
        if (document.getElementById('goudenkoekje').style.display !== 'none') {
            // console.log("Geen klik binnen 5 seconden. De foto wordt verborgen.");
            document.getElementById('goudenkoekje').style.display = 'none';
        }
    }, 5000);
}

// Functie om executeWithChance elke 10 seconden uit te voeren bron:chatgpt
function executePeriodically() {
    executeWithChance();
    setTimeout(executePeriodically, 10000);
}

// Functie om de showgoudenkoekje functie uit te voeren met een kans van 1 op 10 bron:chatgpt 
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

// regenboog skin kopen bron chat gpt
let gekocht = false;
let regenboogPrijs = 1000;
let h3veld = document.getElementById('regenboogPreis');

function buyImageUpgrade() {
    let koekje = document.getElementById("koekje");
    if (!gekocht && aantalkoekjes >= regenboogPrijs) {
        koekje.src = "media/fotos/regenboogshadow.png"; 
        aantalkoekjes -= regenboogPrijs; 
        updateKoekjes(); 
        gekocht = true;
        h3veld.textContent = "In bezit";
    } else if (gekocht) {
        koekje.src = "media/fotos/regenboogshadow.png"; 
    } else {
        alert("Te weinig koekjes om te kopen");
    }
}

// eventlisteneren om code uit te voeren met klik
document.getElementById("buyUpgradeButton").addEventListener("click", buyImageUpgrade);

// Functie om de afbeelding terug te veranderen naar de standaardafbeelding
function resetCookieImage() {
    let koekje = document.getElementById("koekje");
    koekje.src = "media/fotos/koek.png";
}

// Voeg event listeners toe aan de knoppen
resetImageButton.addEventListener('click', resetCookieImage);

 // Simpel woordraadspelletje met forEach-loop en willekeurig juist antwoord, elke 60 seconden uitgevoerd bron chat gpt
      function raadHetWoord() {
        // Lijst van woorden om te raden
        var woorden = ["hopelijk", "heb", "ik", "een", "voldoende"];

        // Kies willekeurig één woord als het juiste antwoord
        var juistWoord = woorden[Math.floor(Math.random() * woorden.length)];
        // console.log(juistWoord)

        // Bericht voor de speler
        var bericht =
          "Welkom bij het raad het woord!\nWin 100000 of verlies 10000\n\nRaad een van de volgende woorden:\n";

        // Voeg de woorden toe aan het bericht
        woorden.forEach(function (woord) {
          bericht += "- " + woord + "\n";
        });

        // Vraag de speler om een woord te raden
        var gok = prompt(bericht);

        // Controleer of de speler een antwoord heeft gegeven
        if (gok !== null) {
          // Controleer of de gok overeenkomt met het juiste woord
          if (gok && gok.toLowerCase() === juistWoord) {
            alert(
              "Gefeliciteerd! Je hebt het juiste woord geraden: " + juistWoord + "" + "\nje wint 100000 koekjes\n"
            );
                aantalkoekjes += 100000;

          } else {
            alert(
              "Helaas, dat is niet correct. Het juiste woord was: " + juistWoord + "" + "\nje verliest 10000 koekjes\m"
            );
            aantalkoekjes -= 10000;

          }
        }
      }

      // Functie om raadHetWoord elke 60 seconden uit te voeren bron chatgpt
      function speelOmDe10Seconden() {
        // Voer raadHetWoord uit
        raadHetWoord();
        // Stel in dat deze functie elke 60 seconden wordt uitgevoerd
        setInterval(raadHetWoord, 60000); // 10 seconden = 10000 milliseconden
      }

      // Stel in dat de functie speelOmDe60Seconden 60 seconden na het laden van de pagina wordt uitgevoerd
      setTimeout(speelOmDe10Seconden, 60000); 
