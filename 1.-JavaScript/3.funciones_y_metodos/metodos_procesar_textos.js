'use strict'
//Transformacion de textos
var numero = 444;
var texto1 = "bienvenido a clases y este es un segundo clases";
var texto2 = "HOLA";
var array = [1,2,3,4,5];

var dato = numero.toString();//combierte un tipo de dato a string
console.log(typeof dato, dato);

dato = texto1.toUpperCase();//combierte un texto en mayusculas
console.log(dato);
dato = texto2.toLowerCase();//combierte un texto a minusculas
console.log(dato);
console.log("***************************************************************************");

//Calcular longitud de un texto
console.log("CALCULAR LONGITUD");
console.log(texto2.length);//calcula la longitud de un texto, cuenta el numero de letras dentro del string
console.log(array.length);//en arreglos cuenta el numero de elementos dentro del array
console.log("***************************************************************************");

//Busquedas dentro de un string
console.log("BUSQUEDA DE TEXTO");
var busqueda = texto1.indexOf("clases");//Nos indica apartir de que caracter comienza la palabra encontrada, de no ser encontrada regresa -1
console.log(busqueda);
busqueda = texto1.lastIndexOf("clases");//Nos indica la apartir de que caracter se encuentra la ultima coincidencia encontrada
console.log(busqueda);
busqueda = texto1.search("clases");//Nos regresa el mismo resultado que indexOf
console.log(busqueda);
busqueda = texto1.match("clases");//Nos debuelve un array con las palabras encontradas
console.log(busqueda);
busqueda = texto1.startsWith("clases");//Nos regresa TRUE si encuentra el texto al inicio del string ó FALSE si no lo encuentra
console.log(busqueda);
busqueda = texto1.endsWith("clases");//Nos regresa TRUE si encuentra el texto al final del string ó FALSE si no lo encuentra
console.log(busqueda);
busqueda = texto1.includes("clases");//Nos regresa TRUE si encuentra el texto dentro del string ó FALSE si no lo encuentra
console.log(busqueda);
console.log("***************************************************************************");

//Obtener string
console.log("OBTENER TEXTO");
busqueda = texto1.substr(13);//nos debuelbe el string que se encuentra apartir del caracter indicado, podemos pasar un segundo argumento indicando el numero de caracteres a imprimir a partir del primer parametro
console.log(busqueda);
busqueda = texto1.substr(13,6);
console.log(busqueda);
busqueda = texto1.charAt(13);//Nos debuelve una letra especifica indicandole la posicion del caracter en donde se encuentra
console.log(busqueda);
console.log("***************************************************************************");

//Remplazar texto 
console.log("Reemplazar texto");
busqueda = texto1.replace("clases","cursos");//Reemplaza el texto del primer parametro por el del segundo parametro dentro de la primer coincidencia dentro de string
console.log(busqueda);
busqueda = texto1.slice(13);//corta el texto desde el inicio hasta el numero de caracter que se pasa como parametro
console.log(busqueda);
busqueda = texto1.slice(13,18);//podemos pasar un segundo parametro para que corte apartir de este numero en delante
console.log(busqueda);
busqueda = texto1.split(" ");//Mete todo el string dentro de un array y como parametro se pasa la manera de separar el string dentro del array
console.log(busqueda);
busqueda = texto1.trim();//elimina los espacios que tenga por delante y por detras el string
console.log(busqueda);
console.log("***************************************************************************");
