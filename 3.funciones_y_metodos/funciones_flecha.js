'use strict'

/*Una funcion flecha no es otra cosa que una forma compacta de precentar funciones, omitimos la palabra "functio" y la sustituimos 
por una flecha "=>" y en el caso de que lleve parametros no hace falta poner los parentesis si solo es 1 parametro, para dos o mas
ya es necesario el uso de los parentesis*/

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

sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: " + (dato * 2))
});


