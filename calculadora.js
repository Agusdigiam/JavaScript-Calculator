function calcular() {
    // Obtener los valores de los inputs y la operación seleccionada
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var operacion = document.getElementById("operacion").value;
  
    // Calcular el resultado de la operación seleccionada
    var resultado;
    if (operacion === "sumar") {
      resultado = valor1 + valor2;
    } else if (operacion === "restar") {
      resultado = valor1 - valor2;
    } else if (operacion === "multiplicar") {
      resultado = valor1 * valor2;
    } else if (operacion === "dividir") {
      resultado = valor1 / valor2;
    }
  
    // Mostrar el resultado en el elemento "resultado"
    document.getElementById("resultado").innerHTML = resultado;
  }
  