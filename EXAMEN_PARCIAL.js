// 1. Pedir al usuario sus datos
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let cedula = prompt("Ingrese su cédula:");

// 2. Guardar los datos del usuario como objeto
let usuario = {
  nombre: nombre,
  apellido: apellido,
  cedula: cedula
};

// 3. Crear un array para las verduras
let verduras = ["zanahoria", "espinaca", "brócoli"];

// 4. Crear un array para las frutas
let frutas = ["manzana", "banana", "uva"];

// 5. Agregar los arrays al objeto de usuario
usuario.verduras = verduras;
usuario.frutas = frutas;

// 6. Eliminar el último item de las verduras
verduras.pop();

// 7. Eliminar el primer item de las frutas
frutas.shift();

// 8. Mostrar el objeto usuario en la consola del navegador
console.log(usuario);
