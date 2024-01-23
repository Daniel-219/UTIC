let arrDeFiguras = ["circulo", "triangulo", "rectangulo", "pentagono"];
console.log({arrDeFiguras});
/* splice recive varios argumentos, en la 
posicion 2 va aponer cuadrado y trapezoide y el 0 
significa que no va a remplazar lo que esraba rectangulo "circulo", "triangulo", 
<--"cuadrado", "trapezoide"--> "rectangulo", "pentagono"*/
arrDeFiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDeFiguras);

arrDeFiguras.splice(2, 1, "rombo");
console.log(arrDeFiguras);

//borrrar elemtos
arrDeFiguras.splice(2 , 4, "hexagono");
