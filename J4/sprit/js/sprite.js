// 1) recuperer les element du doc

let containerSprite = document.querySelector('#sprite');
let spriteData = {
	delta:0,step:12
};
let loop;
let img;
let onOff = false;
//console.log(containerSprite)




// 2) fonction de modif ou integration
function createSprite(){
	// creer une image 
	img = new Image();
	img.addEventListener('load',function(){
		img.style.height = containerSprite.offsetHeight+'px';
		spriteData.delta = img.offsetWidth/spriteData.step;
		//console.log(spriteData);
	});
	img.src = './img/metalSlugExplosion-01_L55-H65-X12.png';

	// 
	// injecter l'image dans son conteneur
	containerSprite.appendChild(img);
}




// 3) fonctions d'animation
	function animateSprite(){
		//let left = img.offsetLeft;
		let left = 0;
		loop = setInterval(function(){
			left -= spriteData.delta;
			if(left === img.offsetWidth*-1){
				left = 0;
			}
			img.style.left = left+"px";
		},100);
	}

//  integrer l'image dans le document 

	function stopAnimate(){
		clearInterval(loop);
	}


//  animer le sprite

// 4) fonction d'interaction

// fin : initialisation
// 2)

function init(){
	createSprite();
// listener de click sur le conteur de la sprite 
// pour lancer l'animation ou la stopper
	containerSprite.addEventListener('click',function(){
		if(onOff === true){
			stopAnimate();
		}else{
			animateSprite();
		}
		onOff = !onOff;
	});
}

init();