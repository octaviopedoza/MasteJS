//Ejercicio 2: utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir el numero 0 y
//mostrar el resultado

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Ingresa el numero a sumar:",0));
    if(isNaN(numero)) {
        numero = 0;
    }else if(numero >= 1){
        suma += numero;
        contador ++;
    }
} while (numero >= 1);
var media = suma/contador;
console.log(suma);
console.log(media);

alert("La suma de todos los numeros es: "+suma);
alert("La media de los numeros ingresados es de: "+media);