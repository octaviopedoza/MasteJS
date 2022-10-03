//Ejercicio 4: Mostrar todos los numeros impares entre dos numeros introducidos por el usuario
var num1 = parseInt(prompt("ingresa el primer numero a evaluar:",1));
var num2 = parseInt(prompt("ingresa el primer numero a evaluar:",1));
var i = 0;

if(num1 < num2){
    document.write("<h1>De numero 1 a numero 2 estan estos numeros:</h1><br>");
    for(i = num1; i <= num2; i++){
        if(i % 2 != 0)
        document.write(i+"<br>");
        console.log(i);
    }
}else if(num1 > num2){
    document.write("<h1>De numero 2 a numero 1 estan estos numeros:</h1><br>");
    for(i = num2; i <= num1; i++){
        if(i % 2 != 0)
        document.write(i+"<br>");
        console.log(i);
    }
}