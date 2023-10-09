const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Mes variables
let nbSlides = slides.length;
let currentSlide = 0;
let goTimeout;

const bannerImg = document.querySelector(".banner-img");
const txtBanner = document.querySelector("p");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const dots = document.querySelector(".dots");

//-------------------------------------------------------

//----Fonctions----------

//Affichage des bullets points avec la création des éléments <span></span> avec un id dot +a (dot0, dot1 ...) (avec une boucle for)
// Création d'un eventListener par click sur dot nouvellement créée,

function showDots() {
  // const dots = document.querySelector(".dots");
  for (let a = 0; a < nbSlides; a++) {
    const dot = document.createElement("span");
    dot.id = "dot" + a;
    dot.addEventListener("click", function (event) {
      currentSlide = Number(event.target.id.replace("dot", ""));
      showSlide();
    });
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (a === 0) {
      dots.children[a].classList.add("dot_selected");
    }
  }
}
showDots();
//console.log("lol");

// Lier les images et le texte de la bannière du tableau au HTML, appel de la fonction selected ici

function showSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  txtBanner.innerHTML = slides[currentSlide].tagLine;
  selected();
  //console.log("hello");
}
//appel de la fonction
showSlide();

// Lier les images aux bullets
function selected() {
  const dotsElt = document.getElementsByClassName("dot");
  for (const dot of dotsElt) {
    dot.classList.remove("dot_selected");
  }
  // for (let i = 0; i < dot.length; i++) {
  //   dot[i].classList.remove("dot_selected");
  // }
  dotsElt[currentSlide].classList.add("dot_selected");
}

//console.log("mdr");

// Event Click flèches

// au click de la souris le clearTimeout annule le setTimeout pour faire défilé le slide au click

arrowLeft.addEventListener("click", () => {
  clearTimeout(goTimeout);
  if (currentSlide === 0) {
    currentSlide = nbSlides - 1;
  } else {
    currentSlide--;
  }
  showSlide();
  slideTimeout();
  console.log("Flèche gauche");
});

arrowRight.addEventListener("click", () => {
  clearTimeout(goTimeout);
  nextSlide();
  console.log("Flèche droite");
});

// Fonction pour faire défiler les slides automatiquement toutes les 2000ms s
function slideTimeout() {
  goTimeout = setTimeout(function () {
    nextSlide();
    console.log("Défilement au bout de 2 secondes !");
  }, 3000);
}

slideTimeout();

function nextSlide() {
  if (currentSlide === nbSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide();
  slideTimeout();
}
