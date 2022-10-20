//ejercicio 1: programa que pida dos numeros y que nos diga cual es el mayor y cual es el menor o si son iguales
//Plus: si los numeros no son un numero o son menores o iguales a cero nos pida ingresar nuevamete los datos

var num1 = parseInt(prompt("ingresa tu primer numero",1));
var num2  = parseInt(prompt("Ingresa el segundo numero",1));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("ingresa tu primer numero",1));
    num2  = parseInt(prompt("Ingresa el segundo numero",1));
}

if (num1 > num2) {
    alert("el numero mayor es: "+num1+" el numero menor es: "+num2);
}
else if (num1 < num2) {
    alert("el numero mayor es: "+num2+" el numero menor es: "+num1);
}
else if(num1 == num2){
    alert("Los numeros son iguales");
}
console.log(num1);
console.log(num2);
