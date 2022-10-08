'use strict'

//Este es el documento que utiliza el DOM para hacer modificanes

// conseguir elementos por su ID concreto**********************************************************************
function cambiaColor(color){
    caja.style.background = color;
}

// var caja = document.getElementById("caja1");
var caja = document.querySelector("#caja1");
caja.innerHTML = "¡Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola2";

//conseguir elemento por su etiqueta ***************************************************************************
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var cont = todosLosDivs[2].textContent;
console.log(cont);


for(var valor in todosLosDivs){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

//conseguir elemento por tu clase css *****************************************************************************
var divsRojos = document.getElementsByClassName('rojo');
divsRojos[0].style.background = "red";
console.log(divsRojos);

var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";
console.log(divsAmarillos);
