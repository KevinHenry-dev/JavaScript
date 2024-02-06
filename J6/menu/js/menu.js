window.onload = function(){

	const menu = document.querySelector('#menu');
	
	const btnMenu = menu.children[0];

	btnMenu.addEventListener('click',()=>{
		menu.classList.toggle('actif');
	})


}