class Mascota{
    constructor(nombre, edad, especie, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.color = color;
        this.sexo = [];
    }
}
    
    let Tonny =new Mascota ("Tonny","3.5","canino","negri, blanco");
    Tonny.sexo = "m";

    let Doggi = new Mascota ("Doggi","1","canino","cafe");
    Doggi.sexo = "f";

    let Pastora = new Mascota ("Pastora","3","loro","verde, rojo");
    Pastora.sexo = "i";
    
console.log(Tonny, Doggi, Pastora)