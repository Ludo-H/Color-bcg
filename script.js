// ****** Réussi ! ******

// créer 3 variables pour stocker 3 chiffres aléatoires
// donner au body une couleur de fond en rgb
// montrer sur le body la couleur en rgb

// Variables
let para = document.querySelector(".para-rgb");

const body = document.querySelector("body");

// Fonctions
function bcg(){
        setInterval(() => {
            let numLeft = Math.floor(Math.random() * 255);
            let numCenter = Math.floor(Math.random() * 255);
            let numRight = Math.floor(Math.random() * 255);
            body.style.backgroundColor = `rgb(${numLeft}, ${numCenter}, ${numRight})`
            para.textContent = `RGB(${numLeft}, ${numCenter}, ${numRight})`
        }, 1000);    
}
bcg();


// Evenements