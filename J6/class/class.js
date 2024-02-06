class Forme{
    constructor(hauteur,largeur){
        this._name = "Rectangle"
        this._h = hauteur;
        this._l = largeur;
        this._body;
    }

    get hauteur(){
        return this._h;
    }

    get largeur(){
        return this._l;
    }

    set largeur(l){
        this._l = l;
    }
    set hauteur(h){
        this._h = h;
    }

    get body(){
        return this._body;
    }


    area(){
        console.log(this._h*this._l);
        return this;
    }

    draw(parentNode){
        this._body = document.createElement('div');
        this._body.textContent = this._name;			
        this._body.style.backgroundColor = this._color || "#ff0";
        this._body.style.height = this._h+"px";
        this._body.style.width = this._l+"px";
        parentNode.appendChild(this._body);
        return this;
    }

}

class Rond extends Forme{
    constructor(longueur,color){
        super(longueur, longueur);
        this._color = color;
        this._name = "Carré";
    }

    draw(parentNode){
        super.draw(parentNode);
        this._body.style.color = "#fff";
        this._body.style.borderRadius = "50%";
    }
    // area(){
    // 	console.log(this.color)
    // 	super.area();			
    // }
}

const f = new Forme(75,200);
const r = new Rond(0,"#f00");





f.area().draw(document.body);
r.area().draw(f.body);

r.hauteur = 400;
console.log(r,c)