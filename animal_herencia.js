class Animal {
    #patas = 4
    constructor(patas){
        this.#patas = patas;
    }
    get patas(){
        return this.#patas;
    }
}

class Mamifero extends Animal {
    constructor(patas) {
        //cuando se hace herencia, es obligatorio esto
        super (patas);
    }
}

class Pez extends Animal {
    constructor(patas) {
        //cuando se hace herencia, es obligatorio esto
        super (patas);
    }
}

class Peptil extends Animal {
    constructor(patas) {
        //cuando se hace herencia, es obligatorio esto
        super (patas);
    }
}

class Ave extends Animal {
    constructor(patas) {
        //cuando se hace herencia, es obligatorio esto
        super (patas);
    }
}

//creacion de instancias
const pez = new Pez(0);
console.log (pez.patas);
const man = new Mamifero(2);
console.log (man.patas);