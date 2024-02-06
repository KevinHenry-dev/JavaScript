let o = {
	ar:[10,5,3],
	h:100,
	pos:{x:10,y:60},
	material:"red_pbr",
	roule:function(){
		alert(this.material)
	}
}

/**
 * object litteral : un paire clef : valeur
 *
 * recuperation par syntax pointé monObjet.laClef
 * recup par crochet a la manière d'un array monObjet['laClef'];
 */


o.roule()

o.material

o['material'];



router({
	path:"127.0.0.1",
	index:140
});

function router(object){
	for(let key in object){
		if(key == "path"){
			if(object[key] !== ''){
				alert("connexion")
			}
		}
	}
}