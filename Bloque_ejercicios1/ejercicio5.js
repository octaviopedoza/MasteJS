//Ejercicio 5: Muestre todos los numeros divisores de un numero introducido por prompt
var num = parseInt(prompt("Ingrese el numero a evaluar:",1));

for(var i = 1; i <= num; i++){
    if(num % i == 0){
        console.log(i);
    }
}