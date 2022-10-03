'use strict'

/* La funcion forEach de los array itera en todo el elemento array y nos regresa los datos, va a recibir un valor o un elemento, 
va a recibir el indice del dato iterado que es el numero de indice recorrido y el valor total del array (podemos no hacer uso de 
todos los datos) es una forma mas simple y limpia de recorrer arrays*/

var nombres = ['carlos', 'octavio', 'antonio', 'juan'];

nombres.forEach((elemento, index, data) =>{
    console.log(data);
    console.log(index + " " + elemento);

});

/*for...in recorre un array y nos regresa el numero del indice de cada elemento, recibe dos elementos para funcionar, el primero
es una variable la cual sera la encargada de recorrero y recolectar todos los indices y el array mismo a recorrer este bucle funciona 
de igual forma dentro de los objetos de JS */
for(let nombre in nombres){
    console.log(nombres[nombre]);
}