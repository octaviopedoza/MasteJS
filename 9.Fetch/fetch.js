'use strict';

/*Fetch es un metodo que nos permite hacer peticiones Ajax de una manera mucho más simple de como se hacia anteriormente en 
JS clásico, una peticion ajax es simplemente una llamada a un servicio Rest o a una API de un Backend que nos devuelve un 
resultado con el cual podemos hacer lo que necesitemo con el */

//Ejercicio con fetch y peticiones a servicios api/rest

console.log("online");//prueba de que el archivo esta bien cargado dentro del html.

var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://reqres.in/api/users')
    .then(data => data.json())//primeramente se capturan los datos dentro de la promesa "data" y se combierte a un json
    .then(users => {
        usuarios = users.data; //guardamos los datos de "data" dentro de la variable usuarios
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement("h3");
            nombre.innerHTML = i + ".- " + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);
        })
    });
