

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
let nbSlides = slides.length -1;
let i = 0;

const bannerImg = document.querySelector(".banner-img")
const banner = document.getElementById("banner")
const txtBanner = document.querySelector("p")
const arrowLeft = document.getElementById("arrowLeft") 
const arrowRight = document.getElementById("arrowRight")
const dots = document.querySelector(".dots")
const fullDots = document.querySelector(".dot_selected")






//-------------------------------------------------------------------
//BULLET POINTS



//Bullet points affichage

dots.addEventListener("click", function (){
	
})

for (let a = 0; a < slides.length; a++) {
	const dotCircle = document.createElement("span");
	dotCircle.classList.add("dot");
	dots.appendChild(dotCircle);
	//console.log("coucou");
}




//fonction pour lier tagLine et le HTML
function showSlide () {
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	txtBanner.innerHTML = slides[i].tagLine;
	//console.log("hello");
}

showSlide ();

// Event flèches
arrowLeft.addEventListener("click", () => {
	
	console.log("Flèche gauche")
})

arrowRight.addEventListener("click", () => {

	console.log("Flèche droite")
})