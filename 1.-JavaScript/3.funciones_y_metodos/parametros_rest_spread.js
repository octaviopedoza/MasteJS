'use strict'

//Parametros REST y SPREAD
/*Rest permite guardar en un array todos los valores que se le pasen a una funcion que no se encuentren dentro de un parametro,
es muy comunmente utilizado para capturar un numero indefinido de parametros dentro de un array de valores*/
function listadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(resto_frutas);
}
listadoFrutas("naranja","melon","manzana","pera","limon","platano");

//Parametros SPREAD
/*Spread permite pasar los datos de un array como parametro a una funcion*/
var frutas = ["naranja","Manzana"];
listadoFrutas(...frutas,"Sandia","Pera","Fresa");