const Item = function(data){
	this.id = data.id;// id
	this.body;// body
	this.text = data.text;// text
	this.isChecked = false;// isChecked
}
// create
Item.prototype.create = function(){
	this.createContainer();
	this.createText(this.body);
	this.createCheckbox(this.body);

}
// create body
Item.prototype.createContainer = function(){
	this.body = document.createElement('div');
	this.body.classList.add('item-list');
}

// create texte --> node et texte string
Item.prototype.createText = function(parentNode){
	let textZone = document.createElement('p');
	textZone.textContent = this.text;
	parentNode.appendChild(textZone);
}

// create  input type checkbox --> node listener change 
Item.prototype.createCheckbox = function(parentNode){
	let input = document.createElement('input');
	input.type = "checkbox";
	input.addEventListener('change',()=>{
		this.isChecked = input.checked;
	});
	parentNode.appendChild(input);
}
// getters / setter

// get id
Item.prototype.getId = function(){
	return this.id;
}
// get body
Item.prototype.getBody = function(){
	return this.body;
}
// get is checked 
Item.prototype.getIsChecked = function(){
	return this.isChecked;
}
// get Data
Item.prototype.getData = function(){
	return {id:this.id,text:this.text};
}

// pour l'eritage depuis item :
// copier le constructeur de item dans le nouvel objet
const ItemUser = function(data){
	Item.call(this,data);
	this.date = data.date;
	this.avatarSrc = data.avt;
}
ItemUser.prototype = Object.create(Item.prototype);
// copier le prototype de item dans  le nouvel objet : lier les deux objets par leur prototype

ItemUser.prototype.constructor = ItemUser;

ItemUser.prototype.create = function(){
	Item.prototype.create.call(this);
	this.createAvatar(this.body);
}

ItemUser.prototype.createAvatar = function(parentNode){
	let img = new Image();
	img.src = this.avatarSrc;
	parentNode.prepend(img);
}

ItemUser.prototype.createText = function(parent){
	// creation d'un div
	let containerText = document.createElement('div');
	// creation d'un h3 --> pseudo
	let textPseudo = document.createElement('h3');
	textPseudo.textContent = this.text;
	// cration p --> date
	let textDate = document.createElement('p');
	textDate.textContent = `Compte créé le ${this.date}`;
	containerText.appendChild(textPseudo);
	containerText.appendChild(textDate);
	parent.appendChild(containerText);
}

ItemUser.prototype.getData = function(){
	return {id:this.id,text:this.text,date:this.date,avt:this.avatarSrc};
}