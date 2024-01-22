//variables normales y sus tipos 
let UnaVariable = "naranja";

//array 
let razasDePerros = ["labrador", "gran danes", "pitbul", "husky", "pastor aleman", 1200, false, null ];

//sobrescribiendo un array en la posicision -36
razasDePerros [-36]= null;
razasDePerros [1]= "dalmata";

//const ultimoElemento = razasDePerros -length
//console.log(ultimoElemento);

console.log ({razasDePerros});

console.log (typeof(razasDePerros[5])); 

//uso de la propiedad length
const contidadDeRazaDePerros = razasDePerros.length;
console.log(razasDePerros.length);

//agregando nuevos elemtos a la array
razasDePerros.push("delmer");
console.log({razasDePerros});
console.log(`hemos agregado un delmer a la raza ${razasDePerros}`);