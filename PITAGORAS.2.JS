function calcular() {
    let cateto1 = document.getElementById("cateto1").value; 
    //la funcion 'calcular' toma 2 o mas numeros y realiza una operacion
    // la funcion 'var' se utiliza para definir variables
    let cateto2 = document.getElementById("cateto2").value;
    // la funcion 'document.getElementById' devuelve una referencia al elemento html
    try  {
      let resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
      document.getElementById("resultado").innerHTML = "La hipotenusa es: " + resultado;
      // la funcion 'innerHTML' sirve para insertar elementos
    } catch(err) {
      document.getElementById("resultado").innerHTML = "Ha ocurrido un error al calcular la hipotenusa.";
    }
  }