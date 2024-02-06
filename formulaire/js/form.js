window.onload = function(){
	const form = document.querySelector('#form');
	const childsForm = form.querySelectorAll('textarea,input:not(.btn-send)');
	const popup = document.querySelector('#popupMessage');

	/**
	 * 1) Verifier si les inputs du form sont vide ou non
	 */
		function isEmpty(){
			let nbCh = childsForm.length;
			for(let i = 0; i < nbCh; i++) {
				if(childsForm[i].value === ""){
					popupOpenClose(true,`Le champs ${childsForm[i].name} ne doit pas être vide.`);
					return false;
				}
			}
			return true;
		}
	/**
	 * 2) verification de secu : si aucun script n'a étéinclu dans les messages
	 */
	function isSecure(){
		let nbCh = childsForm.length;
		for(let i = 0; i< nbCh; i++){
			if(childsForm[i].value.search(/[<\/>]/,'g') !== -1){
				popupOpenClose(true,`Interdiction d'inclure les caractères "</>"`);
				return false;
			}
		}
		return true;
	}
	/**
	 * 3) verifier la conformité du mail en utilisant la method "split()" sur la valeur de children mail
	 * à partir de @ : teste si le tableau renvoyé par split a une l'ongeur de 2 = true sinon = false 
	 */
	function validateMail(){
		// 1) stocker dans une variable le resultat du découpage du mail par split
		let resultArro = childsForm[1].value.split('@');
		console.log(resultArro)
		// 2 a) tester : si la longuer du tableau fourni par split est === a 2 ...
		if(resultArro.length === 2){
			// 		... 3) tester de la meme manière s'il y a un point apres @ (pour le nom de domaine)
			if(resultArro[1].split('.').length > 1){
				// 		... 4) si oui return true 
				return true;
			}else{
				popupOpenClose(true,"Il doit y avoir aumoins un nom de domain (.xxx) dans le mail");
			}
		}else{
			// 2 b) sinon envoyer le message dans le popup et return false
			popupOpenClose(true,`Il doit y avoir un "@" dans le champ mail`);
			return false;
		}
	}

	/**
	 * fonction qui ouvre / ferme (block / none) le popup et inject le 
	 * texte de msg
	 */
	function popupOpenClose(onoff,string){
		popup.style.display = onoff ? 'block' : 'none';
		popup.children[1].textContent = string || "";
	}

	function sendAjax(){
		let xhr = new XMLHttpRequest();
		let data = new FormData();
		childsForm.forEach((child)=>{
			data.append(child.name,child.value);
		});
		xhr.open(form.methode,form.action);
		xhr.onload = ()=>{
			if(xhr.readyState === 4 && xhr.status == 200){
				popupOpenClose(true,xhr.response);
			}else{
				popupOpenClose(true,"Une erreur s'est produite?")
				return false;
			}
		}
		
		
		
		console.log(xhr);
	}

	popup.addEventListener('click',()=>{
		popupOpenClose(false);
	});
	form.addEventListener('submit',(event)=>{
		event.preventDefault();
		if(isEmpty()){
			if(isSecure()){
				if(validateMail()){
					sendAjax();
				}
			}
		}

	});
}