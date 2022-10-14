'use strict'
/*
1.- Crear un formulario con los campos: Nombre, Apellido y Edad **
2.- Boton de enviar el formulario: eventos submit **
3.- Mostrar datos por pantalla **
4.- Validadcion con javascript del formulario **
*/
window.addEventListener('load',function(){
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    
    formulario.addEventListener("submit", function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);//usamos parseInt para combertir el dato en un integer

        console.log(nombre);
        console.log(apellido);
        console.log(edad);
        
        // var datos_form = [nombre, apellido, edad];
        // console.log(datos_form);
        // var string = datos_form.join();
        // var caja = document.getElementById("resultados");
        // caja.innerHTML = string;
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("el nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es valido");
            return false;
        }else{
            document.querySelector("#error_apellido").style.display = "none";
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }
        
        var texto = `
        <h1>Hola que tal</h1>
        <h3>mi nombre es: ${nombre}</h3>
        <h3>Mi apellidos es: ${apellido}</h3>
        <h3>Mi edad es: ${edad}</h3>
        `;
        var caja = document.getElementById("resultados");
        caja.innerHTML = texto;
    });
    
});