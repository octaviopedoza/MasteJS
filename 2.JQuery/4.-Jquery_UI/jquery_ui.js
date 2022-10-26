$(document).ready(function(){
    //mover elementos por la pagina (metodo draggable)
    $('.elemento').draggable();

    //Redimencionar elementos
    $('.elemento').resizable();

    /*Lista seleccionable y ordenable
    Nota: solo podemos utilizar un metodo de estos a la vez *************************************************************************/
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log("ha cambiado el orden de la lista");
        }
    });

    //Drop****************************************************************************************************************************
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has sltado algo dentro del area");
        }
    });

    /* Efectos dentro de jQuery_UI **************************************************************************************************/
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("fade");//muestra el div al precionar el boton con un efecto de fade
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").toggle("blind");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("scale");
        // $(".caja-efectos").toggle("shake");
    /*de igual forma podemos pasar como 2° parametro el tiempo o velocidad que queremos para el efecto 
    ("shake",4000) o ("shake",slow)**************************************************************************************************/
    
    /* Plugins y Widgets dentro de jQuery_UI */
    $(document).tooltip();
    });

    /* Dialog o cuadros de texto */
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    /* Datepicker o calendario */
    $("#calendario").datepicker();
    
    /* Taps o pestañas */
    $("#pestanas").tabs();
});