/* El signo de dolar siempre se refiere al objeto JQuery, lo que pongamos despues del signo de dolar entre parentesis sera el selector
es decir, nosotros podemos seleccionar cualquier cosa y despues utilizar cualquier metodo y tiene una funcion anonima de callback
donde se ejecuta lo que necesitamos.

Al utilizar el selector document nos estamos refiriendo a toda la pagina web en general y espera a que se carguen todo los script
y luego utilizamos el metodo "ready" y despues tiene una funcion de callback y aqui dentro ejecutamos la funcionalidad que nosotros queramos
en este caso es un "console.log" */

$(document).ready(function(){
    console.log("Estamos listos");
});