

	const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Mes variables
let nbSlides = slides.length;
let i = 0;

const bannerImg = document.querySelector(".banner-img")
const banner = document.getElementById("banner")
const txtBanner = document.querySelector("p")
const arrowLeft = document.getElementById("arrowLeft") 
const arrowRight = document.getElementById("arrowRight")
const dots = document.querySelector(".dots")

//-------------------------------------------------------



//----Fonctions----------

//Affichage des bullets points, 

function showDots() {
	const dots = document.querySelector('.dots');
	for (let a = 0; a < nbSlides; a++) {
	const dot = document.createElement('span');
	dot.id='span' + a;
    dot.addEventListener('click', function(event) {
      i = Number(event.target.id.replace('span', ''));
      showSlide();
	});
	dot.classList.add('dot');
	dots.appendChild(dot);
	if (a === 0) { 
		dots.children[a].classList.add('dot_selected');
	}
	}
 }
showDots();
//console.log("lol");



// Lier les images et le texte de la bannière du tableau au HTML, appel de la fonction selected ici

function showSlide () {
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	txtBanner.innerHTML = slides[i].tagLine;
	selected();
	//console.log("hello");
}
//appel de la fonction 
showSlide ();

// Lier les images aux bullets 
function selected() {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot_selected');
	}
	dot[i].classList.add('dot_selected');
 }

//console.log("mdr");



// Event Click flèches
arrowLeft.addEventListener("click", () => {
	
	console.log("Flèche gauche")
})

arrowRight.addEventListener("click", () => {

	console.log("Flèche droite")
})

// Fonction pour faire slide sur le click des flèches. (accessoirement les faire défiler automatiquement avec une intervalle de 2000ms avec setTimeout)
let goTimeout;
function arrowTimeout() {
goTimeout = setTimeout(function() {
	if (i === nbSlides - 1) {
		i = 0;
	} else {
		i++
	}
	showSlide();
	arrowTimeout();
},2000);
	
}
arrowTimeout();