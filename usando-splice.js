let arrDeFiguras = ["circulo", "triangulo", "rectangulo", 
                     "pentagono"];
console.log({arrDeFiguras});
debugger;
//la maquinita de afeitar
const valorObtenidoDeSplice = arrDeFiguras.splice(2);

/* splice recive varios argumentos, en la 
posicion 2 va aponer cuadrado y trapezoide y el 0 
significa que no va a remplazar lo que esraba rectangulo "circulo", "triangulo", 
<--"cuadrado", "trapezoide"--> "rectangulo", "pentagono"*/
arrDeFiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDeFiguras);

//el experimento de traer solamente
//"circulo", "tringulo", "cuadrado"
debugger;
const cortadito_1 = arrDeFiguras.splice(0 , 2);
const cortadito_2 =arrDeFiguras[0];
const mezclar = cortadito_1.concat(cortadito_2);
debugger;

arrDeFiguras.splice(2, 1, "rombo");
console.log(arrDeFiguras);

//borrrar elemtos
arrDeFiguras.splice(2 , 4, "hexagono");
