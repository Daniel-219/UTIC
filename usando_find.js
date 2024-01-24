//definiendo la funcion 
//funciones normales
function decirHola(){
    //bueno, aqui dentro vas a 
    // escribir las sentencias de tu progama o
    // algoritmo
    console.log("Hola");
}

function otraFuncion(){
    alert("soy una alerta");
}

//lo que esta adentro del parentesis so los parametros, y es por defecto
function decirNombre(nombre="no puso en nombre"){
    console.log(`El nombre ingresado es ${nombre}`);
}
function dameElNombreDeMiMascotaNormal (nombre){
    return nombre;
}

//funcion flecha, la flechita es el retorno
const dameElNombreDeMiMascota = (nombre)=> nombre;


//funciones anonimas
const recibiendoFuncionAnonima = function(){console("soy una funcion anonima")};


//invoco, llamo, call
decirHola();
otraFuncion();
recibiendoFuncionAnonima();
//lo que esta dentro del parentesis se llama argumento
decirNombre("Abigails");
const nombreDeMascota = dameElNombreDeMiMascota("firulais");
 
//al fin vamos a usar find
const frutas = ["pomelo", "manzana", "bananas"];
const frutaEncontrada = frutas.find(function(fruta){return fruta === "pomelo"});
const frutaEncontradaConFlecha = frutas.find ((fruta)=> fruta === "pomelo");
console.log (frutaEncontrada);
console.log (frutaEncontradaConFlecha);