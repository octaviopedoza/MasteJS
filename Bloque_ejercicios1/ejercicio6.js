/*que nos diga si un numero es par o impar
1. Ventana prompt
2. si no es valido que nos pida de nuevo el numero */

var num = parseInt(prompt("Ingresa el numero a evaluar:",2));
while(num <= 0 || isNaN(num)){
    num = parseInt(prompt("Ingresa un numero correcto a evaluar:",2));
}
if(num % 2 == 0){
    document.write("El numero ingresado es un numero PAR");
    console.log(num % 2);
}else{
    document.write("El numero ingresado es IMPAR");
    console.log(num % 2);
}
