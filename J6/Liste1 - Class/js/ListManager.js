class List{
	constructor(name){

		this.listName = name;
		this.items = {};
		this.currentId = 0;
		this.parentNode;
	}
	/**** gestion du storage ****/
	getStorage(){
		let storage = localStorage.getItem(this.listName);
		if(storage){
			this.createItemFromStorage(JSON.parse(storage));
		}else{
			localStorage.setItem(this.listName,JSON.stringify([]));
		}
	}

	addInStorage(){
		let tab = [];
		for(let k in this.items){
			tab.push(this.items[k].getData);
		}
		localStorage.setItem(this.listName,JSON.stringify(tab));
	}

	getNodes(idParent){
		this.parentNode = document.querySelector('#'+idParent);
		this.getTitleNode(this.parentNode);		
		this.getBtns(this.parentNode);
		this.getCreateNodes(this.parentNode);
		this.getListContentNode(this.parentNode);
		this.getMessageNode(this.parentNode);
	}

	getTitleNode(parent){
		parent.children[0].children[0].textContent = `Liste : ${this.listName}`;
	}

	getBtns(parent){
		let btnCreate = parent.children[0].children[1].children[0]
		btnCreate.addEventListener('click',()=>{
			this.openCreatePanel(true);
		});

		let btnDelete = parent.children[0].children[1].children[1];
		btnDelete.addEventListener('click',()=>{
			this.deleteItems();
		});
	}

	getCreateNodes(parent){
		this.createContainer = parent.children[1];
		console.log(this.createContainer)
		let btnValide = this.createContainer.children[1];
		btnValide.addEventListener('click',()=>{
			this.createItemFromUser();
			this.clearTextCreation();
			this.openCreatePanel(false);
		});
	}

	controlManager(){
		document.addEventListener('keydown',(event)=>{
			if(event.key === "Enter"){
				this.createItemFromUser();
				this.clearTextCreation();
				this.openCreatePanel(false);
			}
		});
	}

	getListContentNode(parent){
		this.content = parent.children[2];
	}
	getMessageNode(parent){
		this.msgNode = parent.children[3].children[0];
	}
	createItemFromUser(){
		let val = this.createContainer.children[0].value;
		if(val !== ""){
			let data = {id:this.currentId,text:val}
			this.createItem(data);
			this.addInStorage();
			this.setMessage(`Un item a bien été créé dans la liste ${this.listName}.`);
		}
	}
	createItemFromStorage(arrayData){
		arrayData.forEach((data)=>{
			this.createItem(data);
		})
	}
	createItem(data){
		let item = new Item(data);
		item.createNodes();
		this.items[this.currentId] = item;
		this.render(item);
		this.currentId++;
	}
	render(item){
		this.content.appendChild(item.getBody);
	}

	deleteItems(){
		let nbIt = 0;
		for(let k in this.items){
			if(this.items[k].getIsChecked){
				this.items[k].getBody.remove();
				delete this.items[k];
				nbIt++
			}
		}
		this.addInStorage();
		this.setMessage(`${nbIt} item(s) retiré(s) de la liste ${this.listName}.`);
	}

	openCreatePanel(onOff){
		this.createContainer.style.display = onOff ? "block" : "none";
	}
	clearTextCreation(){
		this.createContainer.children[0].value = "";
	}
	setMessage(msg){
		this.msgNode.textContent = msg;
		let t = setTimeout(()=>{
			this.msgNode.textContent = "";
			clearTimeout(t);
		},3000);
	}

	init(idParent){
		this.getNodes(idParent);
		this.getStorage();
		this.controlManager();
	}
}
////////////////////////////// heritage depuis List ///////////
class ListUser extends List{
	constructor(name){
		super(name);
		this.panelOnOff = true;
	}

	getNodes(idParent){
		// surcharge de la metode de list
		super.getNodes(idParent)
		this.getCreateAvatar(this.parentNode);
	}

	getCreateAvatar(parent){
		let selectAvtBtn = this.createContainer.children[2];
		this.panelAvt = this.createContainer.children[3];
		let listOfAvatar = this.panelAvt.querySelectorAll('img');
		let srcInput = this.createContainer.children[4];

		selectAvtBtn.addEventListener('click',()=>{
			this.openPanel();
		});
		listOfAvatar.forEach((img)=>{
			img.addEventListener('click',()=>{
				srcInput.value = img.getAttribute('src');
				this.openPanel();
			});
		});
	}

	openPanel(){
		this.panelAvt.style.display = this.panelOnOff ? "flex" : "none";
		this.panelOnOff = !this.panelOnOff;
	}

	createItemFromUser(){
		let val = this.createContainer.children[0].value;
		if(val !== ""){
			let data = {
				id:this.currentId,
				text:val,
				date:new Date().toLocaleDateString('fr'),
				avt:this.createContainer.children[4].value
			}
			this.createItem(data);
			this.addInStorage();
			this.setMessage(`Un Client a bien été créé dans la liste ${this.listName}.`);
		}
	}

	createItem(data){
		let item = new ItemUser(data);
		item.createNodes();
		this.items[this.currentId] = item;
		this.render(item);
		this.currentId++;
	}

}