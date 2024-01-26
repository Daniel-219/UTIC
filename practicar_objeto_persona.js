function crearPersona(nombre, apellidos, cedula){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cedula = cedula;
}

//una instancia, creacion antigua
let achar = new crearPersona("Marcelo","Achar","9645558");
achar.cedula = "321654789";
console.log(achar);

//creacion de clase
class Persona{
    constructor(nombre, apellidos, cedula) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.altura = altura;
        this.sexo = ["f","m","i"];
        this.amigos =[]

    }

agregarAmigos(amigo){
if(amigo){
    this.amigos.push(amigo)
        }
    }
}
//como creo unainstancia de persona
let giovani = new Persona ("giovani","gonzalez","963582", 1.72);
giovani.sexo="m";
let maryeli = new Persona("Maryeli","Torres","5698452",1.62);
maryeli.sexo="f";
let sebastian = new Persona ("sebastian","santacruz","500000",1.81);
giovani.agregarAmigos(maryeli);
giovani.agregarAmigos(sebastian);

console.log(giovani, maryeli);