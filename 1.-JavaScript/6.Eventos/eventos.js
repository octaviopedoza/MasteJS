'use strict'
// eventos del mouse 
//Click
var boton = document.querySelector("#boton");
boton.addEventListener('click',function(){
    cambiarColor();
});

function cambiarColor(){
    console.log("hola");
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
return true;
}

//mouse hover
boton.addEventListener('mouseover',function(){
    boton.style.background = "blue";
});

//mouse out
boton.addEventListener('mouseout',function(){
    boton.style.background = "yellow";
});

//evento focus
var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus',function(){
    console.log("haces focus en input");
});

//evento blur
input.addEventListener('blur',function(){
    console.log("haces blur del input");
});

//evento keydown
input.addEventListener('keydown',function(){
    console.log("has pulsado una tecla dentro del input");
});

//evento keypress
input.addEventListener('keypress',function(event){
    console.log("tecla precionada", String.fromCharCode(event.keyCode));
});

//evento keyup
input.addEventListener('keyup',function(event){
    console.log("tecla soltada", String.fromCharCode(event.keyCode));
});