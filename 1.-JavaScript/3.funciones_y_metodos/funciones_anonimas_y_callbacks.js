'use strict'

/*Una funcion anonima no es mas que una funcion que no tiene nombre, por lo cual podemos guardarlo dentro de una variable y esto se 
utiliza principalmente para hacer callbacks.
Un callback es una funcion anonima que se ejecuta dentro de otra como argumento*/

//funcion anonima
var pelicula = function(nombre){
    return "la pelicula es " + nombre;
}

//callback
function sumame(num1, num2, sumaYmuestra, sumaPorDor){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDor(sumar);

    return sumar; 
}

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: " + (dato * 2))
});


