'use strict'

//Añadimos los datos capturados desde el formulario al localstorage
var form = document.querySelector("#form_peliculas");
form.addEventListener('submit',function(){
    var titulo = document.querySelector("#adpelicula").value;
    if(titulo.length >= 1){
    localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}