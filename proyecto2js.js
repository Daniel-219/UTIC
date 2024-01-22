// Conversión de millas a kilómetros
let millas = 130;
let kilometros = millas * 1.60934;
console.log(`La distancia de ${millas} millas es igual a ${kilometros.toFixed(4)} kilómetros`);

// Calculadora de IMC
let peso = parseFloat(prompt("Ingrese su peso en Kg:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));
let imc = peso / (altura * altura);
console.log(`Su índice de masa corporal (IMC) es ${imc.toFixed(2)}`);
