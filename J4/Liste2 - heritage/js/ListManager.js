const List = function(name){
	this.listName = name;
	this.items = {};
	this.currentId = 0;
}

List.prototype.getStorage = function(){
	let storage = localStorage.getItem(this.listName);
	if(storage){
		this.createItemFromStorage(JSON.parse(storage));
	}else{
		localStorage.setItem(this.listName,JSON.stringify([]));
	}
	//console.log(localStorage);
}

List.prototype.addInStorage = function(){
	let tab = [];
	for(let key in this.items){
		tab.push(this.items[key].getData());
	}
	localStorage.setItem(this.listName,JSON.stringify(tab));
	//console.log(localStorage);
}
/** recuperation dans le doc */
List.prototype.getNodes = function(idOfParentNode){
	let listParentNode = document.querySelector('#'+idOfParentNode);
	//console.log(listParentNode)
	this.getTitleNode(listParentNode);
	this.getBtns(listParentNode);
	this.getCreateElements(listParentNode);
	this.getListContentNode(listParentNode);
	this.getMessageNode(listParentNode);
}
List.prototype.getTitleNode = function(listContainer){
	listContainer.children[0].children[0].textContent = `Liste : ${this.listName}`;
}
List.prototype.getBtns = function(listContainer){
	let btnCreate = listContainer.children[0].children[1].children[0];
	btnCreate.addEventListener('click',()=>{
		this.openCreate(true);
	});
	let btnDelete = listContainer.children[0].children[1].children[1];
	btnDelete.addEventListener('click',()=>{
		this.delete();
	});
}
List.prototype.getCreateElements = function(listContainer){
	this.createContainer = listContainer.children[1];
	let btnValide = this.createContainer.children[1];
	btnValide.addEventListener('click',()=>{
		this.createItemFromUser();
		this.clearCreation();
		this.openCreate(false);
	})
}
List.prototype.getListContentNode = function(listContainer){
	this.content = listContainer.children[2];
}
List.prototype.getMessageNode = function(listContainer){
	this.msgNode = listContainer.children[3].children[0];
}
/** gestion du clavier **/
List.prototype.controlManager = function(){
	document.addEventListener('keydown',(ev)=>{
		if(ev.key === "Enter"){
			this.createItemFromUser();
			this.clearCreation();
			this.openCreate(false);
		}
	});
}
/** creation d'item */
List.prototype.createItemFromUser = function(){
	let val = this.createContainer.children[0].value;
	// teste si l'input de create renvoi une chaine de caractère
	if(val !== ''){
		this.createItem({id:this.currentId,text:val});
		this.addInStorage();
		this.addMessage(`Un item a bien été créé dans la liste ${this.listName}.`);
	}
}
List.prototype.createItemFromStorage = function(arrayData){
	arrayData.forEach((data)=>{
		this.createItem(data);
	})
}

List.prototype.createItem = function(data){
	let item = new Item(data);
	item.create();
	this.items[this.currentId] = item;
	this.render(item);
	this.currentId++;
}
List.prototype.delete = function(){
	console.log(this.items);
	let nb = 0;
	for(let key in this.items){
		let it  = this.items[key];
		if(it.getIsChecked()){
			it.getBody().remove();
			delete this.items[key];
			nb++;
		}
	}
	this.addInStorage();
	this.addMessage(`${nb} Item(s) retiré(s) de la liste ${this.listName}`);
}
/** methode de modif */
List.prototype.openCreate = function(onOff){
	this.createContainer.style.display = onOff ? "flex" : "none";
}
List.prototype.render = function(item){
	this.content.appendChild(item.getBody());
}

List.prototype.clearCreation = function(){
	this.createContainer.children[0].value = "";
}

List.prototype.addMessage = function(msg){
	this.msgNode.textContent = msg;
	let t = setTimeout(()=>{
		this.msgNode.textContent = "";
		clearTimeout(t);
	},3000);
}
List.prototype.init = function(idOfParentNode){
	this.getNodes(idOfParentNode);
	this.getStorage();
	this.controlManager();
	//localStorage.clear();
	//console.log(localStorage)
}
///////////////////////////////////////////////////////
const ListUser = function(name){
	List.call(this,name);
	this.panelOnOff = true;
}
ListUser.prototype = Object.create(List.prototype);

ListUser.prototype.constructor = ListUser;

ListUser.prototype.getNodes = function(idOfParentNode){
	List.prototype.getNodes.call(this,idOfParentNode);
	this.getCreateAvatar();
}


ListUser.prototype.getCreateAvatar = function(){
	let selectAvt = this.createContainer.children[2];
	this.panelAvt = this.createContainer.children[3];
	let listOfAvatar = this.panelAvt.querySelectorAll('img');
	this.srcInput = this.createContainer.children[4];

	selectAvt.addEventListener('click',()=>{
		this.openPanel();
	})
	listOfAvatar.forEach((img)=>{
		img.addEventListener('click',()=>{
			this.srcInput.value = img.getAttribute('src');
			this.openPanel();
		})
	})
}


ListUser.prototype.openPanel = function(){
	this.panelAvt.style.display = this.panelOnOff ? "flex" : "none";
	this.panelOnOff = !this.panelOnOff;
}

ListUser.prototype.createItemFromUser = function(){
	let val = this.createContainer.children[0].value;
	// teste si l'input de create renvoi une chaine de caractère
	if(val !== ''){
		let data = {
			id:this.currentId,
			text:val,
			date:new Date().toLocaleDateString('fr'),
			avt:this.srcInput.value
		}
		this.createItem(data);
		this.addInStorage();
		this.addMessage(`Un Utilisateur a bien été créé dans la liste ${this.listName}.`);
	}
}

ListUser.prototype.createItem = function(data){
	let item = new ItemUser(data);
	item.create();
	this.items[this.currentId] = item;
	this.render(item);
	this.currentId++;
}

ListUser.prototype.clearCreation = function(){
	List.prototype.clearCreation.call(this);
	this.srcInput.value = "";
}