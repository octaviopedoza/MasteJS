'use strict'
function calculadora(num1, num2) {
    console.log("Suma de los numeros: "+(num1+num2));
    console.log("Resta de los numeros: "+(num1-num2));
    console.log("Multiplicacion de los numeros: "+(num1*num2));
    console.log("Divicion de los numeros: "+(num1/num2));
}
calculadora(10,5);
for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);
}