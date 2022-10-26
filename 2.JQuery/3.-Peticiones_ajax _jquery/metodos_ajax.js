$(document).ready(function(){
    
//Load
// $("#datos").load("https://reqres.in/");

//Get y Post
    // $.get("https://reqres.in/api/users", {page:3}, function(response){
    //     console.log(response);
    //     response.data.forEach((element, index) => {
    //         $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
    //     });
    // });

    
    $("#formulario").submit(function(e){
        e.preventDefault();
        
        var usuario = {
            name: $('input[name = "nombre"]').val(),
            web: $('input[name = "web"]').val()
        };
        console.log(usuario);
    
        // $.post($(this).attr("action"), usuario, function(response){
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario añadido correctamente");
        // });

//Metodo ajax: este es el mejor metodo ya que se puede hacer una manejo mas amplio de los datos que seran enviados por ajax **********
    $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando usuario...");
        },
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log("A ocurrido un error...");
        },
        timeout: 2000
    });
        return(false);
    });
});