/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal nos pida ingresar nuevamente los valores
- En el cuerpo de la pagina, en una alerta y por la consola el resultado
sumar, restar, dividir y multiplicar los numeros ingresados
*/
var num1 = parseInt(prompt("ingresa el primer numero a evaluar:",1));
var num2 = parseInt(prompt("ingresa el segundo numero a evaluar:",1));
while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("ingresa un valor valido para el primer numero:",1));
    num2 = parseInt(prompt("ingresa un valor valido para el segundo numero:",1));
}
var suma = num1 + num2;
var resta = num1 - num2;
var divicion = num1 / num2;
var multi = num1 * num2;

document.write("La suma de "+num1+" + "+num2+" es: "+suma+"<br>");
document.write("La resta de "+num1+" - "+num2+" es: "+resta+"<br>");
document.write("La divicion de "+num1+" / "+num2+" es: "+divicion+"<br>");
document.write("La multiplicacion de "+num1+" * "+num2+" es: "+multi+"<br>");

console.log("La suma de "+num1+" + "+num2+" es: "+suma);
console.log("La resta de "+num1+" - "+num2+" es: "+resta);
console.log("La divicion de "+num1+" / "+num2+" es: "+divicion);
console.log("La multiplicacion de "+num1+" * "+num2+" es: "+multi);

alert("La suma de "+num1+" + "+num2+" es: "+suma);
alert("La resta de "+num1+" - "+num2+" es: "+resta);
alert("La divicion de "+num1+" / "+num2+" es: "+divicion);
alert("La multiplicacion de "+num1+" * "+num2+" es: "+multi);