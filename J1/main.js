// alert('Bonjour');


//console.log('bonjour');
// iohndkjldnbcf

// trois façon de creer une variable : avec "let", "var", "const"
// var est une anciène façon d'ecrire des variables 
var test = 100;
let truc = "100";
// const variable de type constante (ne change jamais)
const MAX_LIFE = 600;
let onOff = false;

// le javascript type automatiquement les valeurs contenu dans une variable :
/*
    type --> string
    type --> number 
    type --> object
    type --> null
    type --> undefined
    type --> boolean


*/

/* opperateur de comparaison : test avec if ou switch 
== --> Permet de tester l’égalité sur les valeurs
=== --> Permet de tester l’égalité sur les valeurs et le types
!= --> Permet de tester la différence en valeurs
!== -- Permet de tester la différence en valeurs et le types
< --> Permet de tester si une valeur est strictement inférieure à une autre
> --> Permet de tester si une valeur est strictement supérieure à une autre
<= --> Permet de tester si une valeur est inférieure ou égale à une autre
>= --> Permet de tester si une valeur est supérieure ou égale à une autre
*/

let vignettes = 100;
let currentVignettes = 10;

// attention le rendu d'un teste est toujour une valeur boolean true ou false 
if(!(false === false)){
    
}
/* opperateurs logique
 AND - ET &&
 OR  - OU ||
 NOT - NON !

/* pour ET (AND) &&
true - false = false
false - true = false
false - false = false
true - true = true;

pour ou (OR) ||
true - false = true
false - true = true
false - false = false
true - true = true;


// opperateurs mathematique
    + 
    -
    /
    * 
    % --> modulo (reste division euclidiène)
    ** --> elevation a la puissance (15² = 15**2)

*/

// boucle for (native)
for (let index = 0; index < 10; index++) {
   console.log(index%2)// modulo renvoi le reste donc une fois sur deux 0 ou 1
}

// creation d'un tableau verssssion classique
let tableau = new Array("a","b","c","d");
// le tableau prend tout type de data
let tableau2 = new Array(10,"gtt",new Array('jnfdj','hfhf'),{});
// version raccourcie
let users2 = [['jean','truc.mail@google.com','avatar.png'],['pierre','mail@mail.com','pika.jpg']];

// tableau imbriqué
let users = new Array(
    new Array('jean','truc.mail@google.com','avatar.png'),
    new Array('pierre','mail@mail.com','pika.jpg')
); // longueur length = 2


// boucle multiple travaillant sur le premier tableau
for(let i = 0;i < users2.length;i++){
   // console.log(users2[i])
   // ... puis sur les tableau imbriqués
    for(let a = 0;a < users2[i].length;a++){
       // console.log(users2[i][a]);
    }
}




let b = 0; // initialisation d'une variable qui va servir de compteur
while(b < users.length){ // la boucle teste le compteur et la longueur du tableau
    // ... si ok execute le code
    console.log(users[b]);
    b++;
}


let c = 1;
// cette boucle vas executer(do) une première fois le code puis faire le teste. 
do{
    console.log(users2[c]);
    c++;
}
while(c < users2.length);


// cette boucle permet de parcourir le tableau et de renvoyer les données extraite dans "val" (valeurs de(of) tableau) 
for(val of users){
    //console.log(val)
}
// cette boucle permet de parcourir le tableau et de renvoyer les index extraite dans "key" (clef dans(in) tableau) 
for(key in users){
    //console.log(key,users[key])
}

// console.log("je m'appelle")
// console.log('il me dit : "rien"');



let glob = 10;


function bidule(){
    //let glob = 100; 
    let ici = "--------------machin";
    console.log(ici)
    console.log(glob);
    if(false){
        var t = "variable t"
        let b = 20;

    }
    console.log(t)
    console.log(b)

}

bidule();
var toto = 'toto';

if(toto === 'tata'){
    // code
}else if(toto === 'tutu'){
    // code
}else{
    // code
}

switch (keyboard){
    case 48:
        up();
    break;
    case 56:
        down();
        break;
    case 47:
        forward();
        break;
    default :
        idel();
}