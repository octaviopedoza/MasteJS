'use strict'

function porConsola(num1, num2){
    console.log("suma: " + (num1 + num2));
    console.log("resta: " + (num1 - num2));
    console.log("multipicacion: " + (num1 * num2));
    console.log("************************************************************************");
}

function porPantalla(num1, num2){
    document.write("suma: " + (num1 + num2) + "<br/>");
    document.write("resta: " + (num1 - num2) + "<br/>");
    document.write("multipicacion: " + (num1 * num2) + "<br/>");
    document.write("************************************************************************");
}

// funcion principal que llamara a cada una de las funciones anteriores dentro de ella
function calculadora(num1, num2, mostrar = false){
    if(mostrar == false){
        porConsola(num1, num2);
    }else{
        porPantalla(num1, num2);
    }
    return true;
}

calculadora(1 , 4);
calculadora(2, 5, true);