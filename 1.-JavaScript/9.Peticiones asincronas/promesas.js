'suse strict'

console.log("online");//prueba de que el archivo esta bien cargado dentro del html.

//Links de servicios API/Rest externos para consumirlos
const link = "https://jsonplaceholder.typicode.com/users";
const link2 = "https://reqres.in/api/users/2";

//fetch nos permite acceder a datos fuera de nuestra aplicación
/* Lo que nos regresa fetch es una promesa pendiente, para poder interactuar con el resultado de fetch tenemo que esperar 
a que los datos nos lleguen y para eso podemos hacer uso de los siguientes metodos:

then: su traducccion es luego de que pase fetch vamos a hacer esto, no es mas que una funcion anonima que resive los datos de fetch
y ese dato lo va a transformar en un json para poder leerlo, pero para trabajarlo es necesario realizar un segundo callback para 
poder trabajarlo */

fetch(link)
.then(res => res.json())
.then(data => console.log(data));

fetch(link2)
.then(resp => resp.json())
.then(data2 => console.log(data2));

/* Otra forma de trabajar con fetch es con el metodo async y await, los cuales son muy paresidos pero son un poco mas sencillos ya que
no hacemos uso de tantas funciones en una sola */
const hola = async() =>{
    const rest = await fetch(link2)
    const data3 = await rest.json()
    console.log(data3)
}
hola();

/* Ejercicio para mostrar los datos de un usuario pasados por fetch */
var x = [];
var div_ejercicio = document.querySelector("#ejercicio");

fetch(link2)
.then(user => user.json())
.then(dt => {
    x = dt.data; // "x" ya tiene guardados los datos en formato JSON de la consulta externa
    console.log(x.email);
});

fetch(link)//solicitamos los datos al api externa
.then(user => user.json())//combertimos los datos que nos regresa en formato json para poder trabajarlos
.then(dt => {// En el segundo callback pasamos los datos a la variable "x"
    x = dt; // "x" ya tiene guardados los datos en formato JSON de la consulta externa y se pueden trabajar sin problemas
    for(let i in x){//hacemos un ciclo for...in para acceder a los datos de cada indice del objeto "x"
        let nombre = document.createElement("h3");//Creamos en el documento los elementos h3
            nombre.innerHTML = i + ".- " + x[i].name + " " + x[i].username;//pasamo los datos a mostrar
            div_ejercicio.appendChild(nombre);//Los mostramos en e div seleccionado
       // console.log(x[i].name);//imprimimos los mismos resultados pero en consola
    }
});


//Crear promesas desde Cero
/* Si hacemos un portero de discoteca que controle el acceso de las personas restringiendo a los menos de 18. Un ejemplo 
podría ser: 

Las promesas se crean llamando al constructor Promise y pasándole una función que recibe dos parámetros: resolve y reject, 
que nos permiten indicarle a esta que se resolvió o se rechazó.

Actualmente las promesas suelen trabajarse con arrow function (funciones de flecha) ya que son la manera moderna de trabajar. 
Hacen lo mismo con menos código y de una forma más visual. 

Si combinamos una función y una promesa con arrow function devemos aregrar un return para tener la posivilidad de almacenar 
las promesas dentro de una función y podremos pasarle parámetros y además, estarán mejor estructuradas.*/

function porteroDiscoteca(edad){
    return new Promise((resolve, reject) => {
        if(edad >= 18){
            resolve("Puedes pasar");
        }
        else{
            reject("No puedes pasar");
        }
    });
};

porteroDiscoteca(16)
.then( (msg) => {console.log(msg);} )
.catch( (err) => {console.log(err);});
