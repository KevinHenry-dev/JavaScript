const MAX_LIFE = 100;

let life = 150;

let maFunction = function(){
	//maFunction();
}
maFunction()

function test(){
	const MAX_MANA = 200;

}


// Création de deux objets littéraux
let enemy = {
	life:100,
	attack:200,
	name:'mechant',
	getName:function(){
		return this.name;
	}
}

let heros = {
	life:150,
	attack:100,
	name:'gentil',
	getName:function(){
		return this.name;
	}
}
// utilisation de leurs method getName();
console.log(enemy.getName(),heros.getName())

let arr = [];

let arr2 = new Array();
arr2.push('a');
arr2.push('b');
arr2.push('c');

console.log(arr2)


arr2.forEach(function(data){
	console.log(data)

});

arr2.pop()

//
arr2.unshift("w");

console.log(arr2)

arr2.shift();

console.log(arr2)
// methodes de suppression dans un tableau
// pop() --> enlève a la fin
// shift() --> enlève au début
// methodes d'ajout dans un tableau
// unshift() --> ajouter au début
// push() --> ajouter a la fin


let arr3 = ['a','b','c','d'];

let retrait = arr3.pop();

console.log(retrait)

let mail = 'email@ma@il.com';
// methode splite découpe une chaine selon le filter (un caracthère ou 
// une regex) et fourni en sortie un tableau avec le resultat de la découpe
let resultArro = mail.split('@');

let src = './img/galerie/vignettes/appareil.jpg';
// permet de chercher et remplacer un partie de chaine suivant un model (premier parametre 
// model a chercher, 2eme parametre replacement)
let newSrc = src.replace('/vignettes','/truck');

let mail2 = 'emailmail.com';
// search permet de rechercher un ou plusieur charactère (selon regex) et renvoi son index de placement dans 
// le chaine. s'il ne trouve rien search revoi -1;
console.log(mail2.search('@'));

console.log(src,newSrc)

console.log(resultArro)

