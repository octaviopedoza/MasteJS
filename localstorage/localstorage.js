'use strict'

//Local Storage es una memoria que se encuentra dentro del navegador

//Forma simple de verificar si local storage esta disponible en nuestro navegador
if(typeof(Storage) != 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");
}

//Almacenar datos dentro del localstorage
localStorage.setItem("titulo","Curso de JS");

//recuperar dato dentro del localstorage
console.log(localStorage.getItem("titulo"));
document.querySelector("#contenedor").innerHTML=localStorage.getItem("titulo");

//Guardar objetos en localstorage
var usuario = {
    nombre: "Octavio",
    edad: 31,
    web: "desarrollosweb.online"
};
/* combretimos el JSON a JSONstring ya que si no lo hacemos no es posible mandar la informacion al localstorage*/
localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto del localstorage
/* Para poder recuperar el objeto debemos de combertir el JSONstring a un JSON ordinario */
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

//Eliminar dato del localstorage
localStorage.removeItem("usuario");//elimina un dato preciso del localstorage
localStorage.clear(); // elimina todo dentro del localstorage
