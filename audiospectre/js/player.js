// console.log(); PERMET DE LIRE CE QU'IL Y A DANS LES DATA, VOIR LES ERREURS, LES ENLEVÉS QUAND LE SITE PASSE EN PROD

/**
 * recuperation des éléments du document 
 */
const btnPlay = document.querySelector('#audioBtn');
//--> queryselector : https://developer.mozilla.org/fr/docs/web/api/document/querySelector
// queryselectorall : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
const player = document.querySelector('audio');
const container = document.querySelector('#bandeContainer');

/**
 * 
 * Variables globales
 */
let bandes = [];
let onOff = false;
let timer;

//console.log(btnPlay,player,container);

/* Fonction de création des bandes dans le document.
 * Le nombre de bandes est déterminé par la largeur de l'écran divisée par la largeur d'une bande (5px). 
 *  => On divise le nombre de pixels de l'écran par le nombre de pixels d'une bande pour obtenir le nombre de bandes à afficher. */
function createBandes(){
	let nbBandes = Math.ceil(container.offsetWidth/5);
	for(let i = 0; i < nbBandes; i++){
		let b = document.createElement('div');
		// --> https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
		container.appendChild(b);
		// --> https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
		bandes.push(b);
	}
}

/**
 * 
 * fonction qui resize chaque bandes sur la hauteur grâce a un chiffre aléatoir compris entre 0 et la limite (limit est la hauteur max d'une bande)
 */
function setFrecency(limit){
    bandes.forEach(function(band){
        band.style.height = randomize(limit)+"px";
    });
}
/**
 * 
 * fonction d'animation timé ( micro-secondes ) qui va lancer setFrecency suivant un délai
 */
function animateFrecency(){
	container.style.opacity = 1;
	timer = setInterval(function(){
		// --> https://developer.mozilla.org/en-US/docs/Web/API/setInterval
		// --> https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
		setFrecency(300);
	},100);
}
/** 
 * arrêt de l'animation des bandes
*/
function stopFrecency(){
	container.style.opacity = 0;
	// --> https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/style
	clearInterval(timer);
	// --> https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
	// --> https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
	setFrecency(0);
}


function randomize(limit){
    return Math.floor(Math.random()*limit);
}







function playStop(){
    /**
     * faire une condition qui teste une variable pour savoir si le player son est déja lancer ou non
     * 
     */
    // si ma variable envoi false alors
    if(!onOff){
        //.. ouverture du if et lancement de la lecture
        player.play();
        animateFrecency();
    }
    else{
        //.. sinon stop la lecture du son
        player.pause();
        player.currentTime = 0;
        stopFrecency();
    }
    // fin de condition
    //
    //mise a jour de la variable
    onOff = !onOff;
    // classList : https://developer.mozilla.org/fr/docs/Web/API/Element/classList#replace_oldclass_newclass_
    // la methode de classList toggle permet, si une class est présente de la supprimer,ou, si elle n'est pas présente de la mettre, de façon a modifier le css de l'élément html concerné par classList
    btnPlay.classList.toggle('stop');
}



createBandes();
/**
 * ecouteur d'evenement sur le btn play
 */
btnPlay.addEventListener('click',function(event){
	//--> https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
	// --> https://developer.mozilla.org/fr/docs/Web/API/CustomEvent
	event.preventDefault();
	playStop();
});