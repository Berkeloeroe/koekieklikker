let aantalkoekjes = 0;
let koekjesPerKlik = 1;
let koekjesVeld = document.querySelector('h2');
let bakkerPrijs = 20;

function verhoogKoekjes(){
    aantalkoekjes += koekjesPerKlik;
    updateKoekjes();
}

function bakker(){
    if(aantalkoekjes >= bakkerPrijs) {
        koekjesPerKlik += 1;
        aantalkoekjes -= bakkerPrijs;
        bakkerPrijs = Math.round(bakkerPrijs *1.7);
        document.getElementById("test").innerHTML = "Power klik prijs: " + bakkerPrijs;
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



img = document.getElementById("koekje");
console.log(img)

function enlargeImg() {

    img.style.transform = "scale(1.5)";

}

enlargeImg()
console.log(enlargeImg)


koekje.addEventListener('click', enlargeImg);



        