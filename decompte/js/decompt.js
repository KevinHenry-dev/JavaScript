// recuperation des span dans le document 
const spans = document.querySelector('#conteneurChrono').children
// recuperation de la date
//--> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
let date = new Date();
// extraire les heurs, minutes et secondes
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let timeLoop;

// fonction de décompte de seconde puis minutes, et heures
function decompteChrono(){
    s--;
    if(s<0){
        s=59;
        m--;
        m=59;
        h--;
        if(h===0){
            clearInterval(timeLoop);
            alert('BOOOM!!!');
            return;
        }
    }

}

// affiche les s,m,h dans span du cocument 
function afficheDecompt(){
    spans[0].textContent = formateTime(h);
    spans[1].textContent = formateTime(m);
    spans[2].textContent = formateTime(s);
}


// si le chiffre donné en parametre fait moins de deux caractères
// on rajoute un 0 devant sinon rien 
function formateTime(number){
    if(number.toString().length < 2){
        return "0"+number;
    }
    return number;
}



// fonction d'initialisation du décompte 
function init(){
afficheDecompt();

timeLoop = setInterval(function(){
    decompteChrono();
    afficheDecompt();
},1);
}


init();