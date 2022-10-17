'use strict'

//Este es el documento que utiliza el DOM para hacer modificanes

// conseguir elementos por su ID concreto**********************************************************************
// EL document.getElementById() nos sirve para seleccionar elementos html por su id el cual se ingresa dentro de los parentesis
var box = document.getElementById("micaja");
console.log(box);

//con el innerHTML devolvemos lo que tiene guardado el elemento html con el id ingresado
var box2 = document.getElementById("micaja").innerHTML;
console.log(box2);

//Cambiar texto de un elemento seleccionado por id con innerHTML desde JS
box.innerHTML = "Nuevo texto en Mi caja";//como ya existe la variable solo accedemos a su metodo .innerHTML.


function cambiaColor(color){
    caja.style.background = color;
}

/* Practicamente es lo mismo que getElementById solo que es mas parecido a CSS, para seleccionar un id debemos usar "#" y 
para seleccionar alguna clase debemos usar ".", es solo una manera mas elegante de hacer las cosas*/
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

//conseguir elemento por su nombre *********************************************************************************
var nombreElemento = document.getElementsByName("cuarto");
nombreElemento[0].style.color = "green";


