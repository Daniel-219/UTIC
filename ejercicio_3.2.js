//1. Crea un array vacío para usar en una lista de compras.
let listaDeCompras = [];

//2. Agregar leche, pan, manzanas a tu lista.
listaDeCompras.push("Leche", "Pan", "Manzanas");

//3. Actualizar pan con bananas y huevos.
listaDeCompras[1] = "Bananas";
listaDeCompras.push("Huevos");

//4. Remove el último elemento del array y muestra en consola.
console.log(listaDeCompras.pop());

//5. Ordenar la lista alfabéticamente
listaDeCompras.sort();

//6. Encuentra y muestra la salida del índice del valor "leche".
console.log(listaDeCompras.indexOf("Leche"));

//7. Después de bananas, agrega zanahorias y lechuga.
listaDeCompras.splice(listaDeCompras.indexOf("Bananas") + 1, 0, "Zanahorias", "Lechuga");

//8. Crea una nueva lista manteniendo jugo y pop.
let nuevaLista = ["Jugo", "Pop"];

//9. Combine ambas listas, agregue la nueva lista dos veces al final de la primera lista.
listaDeCompras = listaDeCompras.concat(nuevaLista, nuevaLista);

//10. Obtenga el último valor de índice de pop y muestra en consola.
console.log(listaDeCompras.lastIndexOf("Pop"));

//11. Tu lista final debería verse así:["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
console.log(listaDeCompras);
