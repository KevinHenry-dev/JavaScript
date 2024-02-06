window.onload = function(){
	/* recuperation des elements du dom */
	let onglets = document.querySelectorAll('.onglets');
	let panels = document.querySelectorAll('.pannel');
	console.log(onglets,panels)




	function openPanels(index){
		panels.forEach((panel,ind)=>{
			// if(ind !== index){
			// 	panel.style.display = "none";
			// }else{
			// 	panel.style.display ="block";
			// }
			panel.style.display = ind !== index ? "none" : "block";
		});

	}

	function activeOnglets(index){
		onglets.forEach((onglet,ind)=>{
			if(ind !== index){
				onglet.classList.remove('active');
			}else{
				onglet.classList.add('active');
			}
		})
	}

	function resizePanels(){
		let sizeH = 0;
		panels.forEach((panel)=>{
			if(sizeH < panel.offsetHeight){
				sizeH = panel.offsetHeight;
			}
		});
		panels.forEach((panel)=>{
			panel.style.height = sizeH+"px";
		});
	}



	function addEvent(){
		onglets.forEach((onglet,index)=>{
			onglet.addEventListener('click',(event)=>{
				event.preventDefault();
				openPanels(index);
				activeOnglets(index);
			});
		});
	}

// travail : lancer la lecture du sprite
// buton
// recuperer sprite --> variable = sprite
// ecouter le click





	function init(){
		resizePanels();
		openPanels(0);
		activeOnglets(0);
		addEvent();
	}

	init();
}