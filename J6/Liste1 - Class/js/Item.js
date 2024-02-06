class Item{
	constructor(data){
		this.id = data.id;
		this.text = data.text;
		this.body;
		this.isChecked = false;
	}
	createNodes(){
		this.createContainer();
		this.createText(this.body);
		this.createCheckbox(this.body);
	}
	createContainer(){
		this.body = document.createElement('div');
		this.body.classList.add('item-list');
	}
	createText(parent){
		let textZone = document.createElement('p');
		textZone.textContent = this.text;
		parent.appendChild(textZone);
	}
	createCheckbox(parent){
		let input = document.createElement('input');
		input.type  = "checkbox";
		input.addEventListener('change',()=>{
			this.isChecked = input.checked;
		});
		parent.appendChild(input);
	}
	/*** getter **/
	get getId(){
		return this.id;
	}
	get getBody(){
		return this.body;
	}
	get getIsChecked(){
		return this.isChecked;
	}
	get getData(){
		return {id:this.id,text:this.text};
	}
}
//////////// heritage depuis Item ///////////////
class ItemUser extends Item{
	constructor(data){
		super(data);
		this.date = data.date;
		this.avatarSrc = data.avt;
	}
	createNodes(){
		super.createNodes();
		this.createAvatar(this.body);
	}
	createText(parent){
		let container = document.createElement('div');
		let textZone = document.createElement('h3');
		textZone.textContent = this.text;
		let textDate = document.createElement('p');
		textDate.textContent = `Compte créé le ${this.date}.`;
		container.appendChild(textZone);
		container.appendChild(textDate);
		parent.appendChild(container);
	}
	createAvatar(parent){
		let img = new Image();
		img.src = this.avatarSrc;
		parent.prepend(img);
	}
	get getData(){
		return {
			id:this.id,
			text:this.text,
			date:this.date,
			avt:this.avatarSrc
		};
	}
}