'use strict'
console.log("js funcionando");

//Para trabajar con fechas dentro de JS es necesario hacer uso del objeto "date"
var fecha = new Date();

var año = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();

var textoFecha = 
`El año es: ${año}
El mes es: ${mes}
El dia es: ${dia}
la hora es: ${hora}`;

console.log(textoFecha);