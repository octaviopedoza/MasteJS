'use strict'

//Plantillas de texto
var nombre = prompt("Mete tu nombre");
var apellido = prompt("Ingresa tus apellidos");

var texto = `
    <h1>Hola que tal</h1>
    <h3>mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellido}</h3>
`;

document.write(texto);
console.log(texto);