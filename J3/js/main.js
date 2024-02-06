const result = document.querySelector('#result')

let text1 = "un texte";
let text2 = ", un autre texte";

result.textContent = text1+text2+" c'est la fin";



/* let a = 100;

a++;

a -= 10; */


/**
 * --
 * ++
 * +=
 * -=
 * *=
 * /=
 */

/**
 * $r = 100;
 * $chain = "un truc $r";
 */
function test(){
	return 100;
}
let user = {
	nom:'jean',
	mail:"mail@mail.com"
}

let chaine  =  `Bonjour -- ${user.nom}`;

result.textContent = chaine;

let carre = {
	body:document.getElementById('block'),
	posX:0,
	time:null,
	limit:{left:0,right:window.innerWidth},
	animateX:function(x){
		this.time = setInterval(()=>{
			if(this.posX < this.limit.right-this.body.offsetWidth){
				this.posX += x;
				this.body.style.left = this.posX+"px";
			}else{
				clearInterval(this.time);
			}
		},30);
	}
}
console.log(carre.limit)
carre.animateX(10);

let capitaine = {
    age:70,
    nom:"haddock",
    consomation:30,
    parole:function(){
        alert("dauphin !!!");
    }
}
// utiliser l'objet " capitaine" pour afficher dans le paragraphe "result",
//l'age, la consomation et le nom.
//utiliser une boucle for in 
result.textContent = "";

console.log(typeof capitaine.tab)


for(let key in capitaine){
	if(typeof capitaine[key] !== 'function' && typeof capitaine[key] !== 'object'){
		result.textContent += `son ${key} : ${capitaine[key]}, `;
	}
}