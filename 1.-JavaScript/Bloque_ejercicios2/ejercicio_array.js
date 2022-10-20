'use strict'
/*
1.- Pida 6 numeros por pantalla y los meta en un array **
2.- Mostrar el array entero en el cuerpo de la pagina y en consola **
3.- Ordenarlo y mostrarlo **
4.- Invertir su orden y mostrarlo **
5.- Mostrar cuantos elementos tiene el array **
6.- Buscar un valor introducido por el usuario, que nos diga si lo encuentra y su indice
7.- Se valora el uso de funciones para cada accion
*/
var datos = [];
for(var i=1; i<=6; i++){
    var elemento = parseInt(prompt("ingresa el "+i+"numero"));
    datos.push(elemento);
    console.log(elemento);
}
console.log(datos);
document.write(datos + "<br>");

var orden = datos.sort();
console.log(orden);
document.write(orden + "<br>");

var invertido = datos.reverse();
console.log(invertido);
document.write(invertido + "<br>");

var long = datos.length;1
console.log(long);
document.write("la longitud es: " + long + "<br>");
//---------------------------------------------------------------------------------------------
var x = parseInt(prompt("ingresa el numero a buscar dentro del arreglo:"));
while(x < 0 || isNaN(x)){
    x = parseInt(prompt("ingresa un numero valido a buscar dentro del arreglo:"));
}
console.log("********************************");
var busqueda = datos.findIndex(dato => dato == x);
console.log(busqueda);
if(busqueda == -1){
    alert("numero no encontrado");
}

