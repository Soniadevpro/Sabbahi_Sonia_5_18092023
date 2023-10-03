

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
let departDot = 0;

const arrowLeft = document.getElementById("arrowLeft") //variables flèches
const arrowRight = document.getElementById("arrowRight")
const bannerImg = document.getElementById("banner-img")
const dots = document.querySelector(".dots")


// affichage BULLET POINTS
for (let pas = 0; pas <= nbSlides; pas++) {
    dots.innerHTML +=
      '<span id="dot' +
      pas +
      '" class="dot"  ' +
      (pas + 1) +
      '"></span>';
  }

  const dotList = document.querySelectorAll(".dot");


const dotSelected = () => {
	for (let i = 0; i <= nbSlides; i++) {
		if (i === departDot) {
			dotList[i].classList.remove("dot_selected");
		}
		else {
			dotList[i].classList.add("dot_selected"); }
		}
}











// Event flèches
arrowLeft.addEventListener("click", function (){
	
	console.log("Flèche gauche")
})

arrowRight.addEventListener("click", function (){
	
	console.log("Flèche droite")
})

// bullet points




