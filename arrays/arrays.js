'use strict'
//Metodos dentro de los array
var nombre = "carlos";
var nombres = ["carlos","octavio","Pedro","Flor"];
var lenguajes = new Array("php","js","java");

console.log("********************************************************************");
console.log("***************** Mostrando un indice de un array ******************");
var elemento = parseInt(prompt("Ingresa el indice del elemento que quieres",0));
alert(nombres[elemento]);
console.log(nombres[elemento]);

//ver cuantos elementos tiene un array
console.log("********************************************************************");
console.log("***************** Mostrar longitud del array ***********************");
console.log(nombres.length);

//Array multidimencional
//Primeramente se debe de acceder a el indice del array principal del cine, y posterior el indice del array al que se accedio
console.log("********************************************************************");
console.log("******* Mostrar valor de un indice de array multidimencional *******");
var categoria = ["Accion", "Terror", "Comedia"];
var peliculas = ["FF7", "It", "Huevos"];
var cine = [categoria, peliculas];
console.log(cine[0][1]);//el indice [0] es para entrar en categorias y [1] para entrar en el indice 1 del array categorias

//añadir un elemento a un array
console.log("********************************************************************");
console.log("***************** Agregar elemento al array ************************");
nombres.push("Juan");
for (var elemento2 in nombres) {
    console.log(nombres[elemento2]);
}

//añadir un elemento a un array
console.log("********************************************************************");
console.log("************ Eliminar ultimo elemento del array ********************");
nombres.pop();
for (let elemento2 in nombres) {
    console.log(nombres[elemento2]);
}

//añadir un elemento a un array
console.log("********************************************************************");
console.log("************** Eliminar un elemento del array **********************");
var valor = prompt("Ingresa el valor a eliminar:",);
console.log(valor);

var indice = nombres.indexOf(valor);
console.log(indice);
console.log("********************************************************");

if(indice >= -1){
    nombres.splice(indice,1);
}
for (let elemento2 in nombres) {
    console.log(nombres[elemento2]);
}

//Convertir un array a string
console.log("********************************************************************");
console.log("**************** Convertir un array a string ************************");
var text1 = nombres.join();
console.log(text1);

//Convertir un string a un array
console.log("********************************************************************");
console.log("**************** Convertir un string a array ************************");
var cadena = "texto1 , texto2 , texto3";
console.log(cadena);
var cadena_array = cadena.split(", ");//Definimos cual es el separador de cada elemento que sera n indice dentro del array
console.log(cadena_array);

//Ordenar un array
console.log("********************************************************************");
console.log("********************* Ordenar un array *****************************");
var numeros = [1,3,5,2,6,4,9,7,8];
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());

//Busquedas dentro del array
console.log("********************************************************************");
console.log("*************** Busqueda dentro de un array ************************");
var busqueda = nombres.find(nombre => nombre == "Pedro");
console.log(busqueda);
var busqueda2 = nombres.findIndex (nombre => nombre == "Pedro");
console.log(busqueda2);