let a = prompt ("Ingrese un valor para elvalor a");
let b = prompt ("Ingrese un valor para elvalor b");

let z = Number(a);
let x = Number(b);

if (z && x){
    let hipotenusa= math.sqrt(math.pow(z,2)+math.pow(x,2))
    console.log('la raiz cuadrada es: ${hipotenusa}')
}else{
    alert("Debe ingresar dos valores numericos")
} ;