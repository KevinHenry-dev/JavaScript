const Item = function(data){
    this.id = data.id;  // id 
    this.body; // Body
    this.text= data.text; // text
    this.isChecked = false ; // isChecked
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
Item.prototype.createText = function(ParentNode){
    let textZone = document.createElement('p');
    textZone.textContent = this.text;
    ParentNode.appendChild(textZone);
}

// create input type checkbox --> node lister change 
    Item.prototype.createCheckbox = function(ParentNode){
        let input = document.createElement('input');
        input.type = "checkbox";
        input.addEventListener('change',()=>{
            this.isChecked = input.checked;
        });
        ParentNode.appendChild(input);
    }
// getters / setter

// get id
    Item.prototype.getID = function(){
        return this.Id;
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