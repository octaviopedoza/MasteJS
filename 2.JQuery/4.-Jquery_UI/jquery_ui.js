$(document).ready(function(){
    //mover elementos por la pagina (metodo draggable)
    $('.elemento').draggable();

    //Redimencionar elementos
    $('.elemento').resizable();

    /*Lista seleccionable y ordenable
    Nota: solo podemos utilizar un metodo de estos a la vez */
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log("ha cambiado el orden de la lista");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable();
});