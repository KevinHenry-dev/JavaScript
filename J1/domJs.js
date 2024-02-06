let btnOpen = document.getElementById('open-btn');
let popup = document.getElementById('popup');
let onOffBtn = false;

// addEventListener est une fonction native ecouteur d'evenement.
// cet ecouteur prend 2 parametres obligatoir 1 parametre facultatif


/**
 *  addEventListener est une fonction native ecouteur d'evenement.
 *  cet ecouteur prend 2 parametres obligatoir 1 parametre facultatif
 * @param  {[string]} [le type d'evenement que l'on veut écouter]
 * @param  {[function]} [fonction anonyme qui va etre lancée lorsque l'evenment est intercepté]
 */
btnOpen.addEventListener('click',function(){
	ouverture();
});

function ouverture(){
	// if(onOffBtn){
	// 	popup.style.display = "none";
	// }else{
	// 	popup.style.display = "block";
	// }
	/**
	 * cette opperation dite ternaire permet de résumer et optimiser le code
	 * variable = (teste si true) alors(?) #code sinon(:)#code
	 */
	popup.style.display = onOffBtn ? "none" : "block";

	onOffBtn = !onOffBtn;
}

/**
 * Cette fonction utilse deux parametre pour etre réutilisé autant de fois que possible
 * @param  {[type]} chiffre1 [description]
 * @param  {[type]} chiffre2 [description]
 * @return {[type]}          [description]
 */
function mathToutBete(chiffre1,chiffre2){
	return chiffre1*chiffre2;
}

let result = mathToutBete(23,60);

let monResultat = mathToutBete(45,2333);





console.log(result,monResultat);

/**
 * recuperer le paragraphe en tete de document
 * - utiliser innerHTML pour mettre le resultat de la fonction 
 * mathTouBete() dans le paragraph
 */
let paragraphe = document.getElementById('result-text');
paragraphe.innerHTML = mathToutBete(23,65);

///////////////////////////////////////////////////////////
/**
 * [phrases description]
 * @type {Array} longeur 18 (de 0 à 17);
 */
const phrases = [
	'Alice au pays des merveilles : Et la reine répondit: «Nous courons pour rester à la même place.»',
	"Albert Einstein : Il n'existe que deux choses infinies, l'univers et la bêtise humaine... mais pour l'univers, je n'ai pas de certitude absolue",
	'Albert Einstein : Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui regardent faire.',
	'Albert Einstein : L’imagination est plus importante que le savoir.',
	'Petit prince : On ne voit bien qu\'avec le coeur. L\'essentiel est invisible pour les yeux.',
	"Coluche : Certains ont l'air honnête, mais quand ils te serrent la main, tu as intérêt à recompter tes doigts.",
	'Coluche : Quand j’étais petit à la maison, le plus dur c’était la fin du mois... Surtout les trente derniers jours !',
	"Coluche : La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
	'Desproges : Plus je connais les hommes, plus j’aime mon chien. Plus je connais les femmes, moins j’aime ma chienne.',
	'Sigmund Freud : Si tu veux pouvoir supporter la vie, sois prêt à accepter la mort !',
	'Bob Marley : Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.',
	'Oscar Wilde : Démocratie : l’oppression du peuple par le peuple pour le peuple.',
	"Oscar Wilde : Autant viser la lune, car même en cas d'échec on finit dans les étoiles.",
	'Charles de Gaulle : La guerre, c\'est comme la chasse, sauf qu\'à la guerre les lapins tirent.',
	"Pierre Dac : L'avenir, c'est du passé en preparation",
	"Pierre Dac : Il vaut mieux ne rien avoir que d'avoir des choses qui ne servent à rien.",
	"Gustave Parking : Des fois, il vaut mieux vaut ne rien dire et passer pour un con que de l'ouvrir et ne laisser aucun doute à ce sujet.",
	"Aristote:L'ignorant affirme, le savant doute, le sage réfléchit"];

/**
 * Button html dans le document
 * @type {[type]}
 */
let btnRandom = document.getElementById('random-btn');


/**
 * generer un nombre aléatoir
 * @param  {[number]} size [taille de l'array]
 * @return {[number]}      [nobre entier aléatoir]
 */
function randomize(size){
	// la fonction renvoie(return) un nombre aleatoir(random) dont la limite est size
	// (longueur du tableau) reduite à l'inferieur(floor)
	return Math.floor(Math.random()*size);
}
/**
 * methodes pour arrondire de l'objet "Math":
 * - floor() arrondire à l'inferieur
 * - ceil() arrondir au supperieur
 * - rand() arrondir soit a l'inférieur (de 0.1 à 0.5) soit au supperieur (de 0.5 à 1)
 */
//console.log(phrases)

/**
 * Lance la fonction aléatoir, utilise le chiffre aléatoir pour recuperer et afficher
 * dans "paragraphe" une phrase dont l'index correspond a ce chiffre.
 */
function afficheText(){
	let randNb = randomize(phrases.length);
	// "textContent" (comme innerHTML) est une propriété (variable interne) de 
	// l'objet "paragraphe"
	paragraphe.textContent = phrases[randNb];
}

/**
 * Ecouteur D'evenement de type click sur le boutton random qui 
 * lance la fonction "afficheText";
 */
btnRandom.addEventListener('click',function(){
	afficheText();
});





let nb1 = 100;
let nb2 = 10;

// si? teste = true                sinon(:)teste = false 
nb1===nb2      ?  alert("egale")            :             alert('pas egale');

if(nb1 === nb2){
	alert("egale");
}else{
	alert("pas egale");
}

alert(nb1===nb2?"egale":"pas egale");





/* Fonction interne à un objet = méthode.
Variable interne à un objet = propriété. */