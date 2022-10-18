'use strict'

function miPromesa(){
    return new Promise((resolve, reject) =>{
        //que me vas a prometer?
    });
}
console.log(miPromesa());

/*Ejercicio 1 ejemplo con una promesa declarada con function. 
Imaginaos que os prometo que si lanzamos una moneda al aire saldrá 
cara, aunque es una promesa con una probabilidad del 50 % existe otro 50 % de que no se cumpla. */

const caraCruz = new Promise(function(resolve, reject){
//numero aleatorio (0 o 1)
let numeroAleatorio = Math.floor(Math.random()*2);
    if(numeroAleatorio === 0){ //si el numero es 0 es "Cara"
        resolve("Cara"); // fulfilled successfully
    }else{ //Si el numero es igual a 1 es "Cruz"
        reject("Cruz"); //error, rejected
    }
});
// para evaluar correctamente el resultado una promesa tenemos que utilizar los métodos .then y .catch sobre la promesa en sí.
caraCruz
    .then( (resolveMsg) => {console.log(resolveMsg); }) //captura el valor cuando se cumple la promesa (fullfilled)
    .catch( (err) => {console.log(err); }); //captura el valor cuando se produce un error o no se cumple la promesa (rejected)

console.log(caraCruz);

/*Ejercicio 2 portero de discoteca con una promesa dentro de una function:
Si hacemos un portero de discoteca que controle el acceso de las personas restringiendo a los menos de 18.*/
function mayorEdad(edad){
    return new Promise ((resolve, reject) => {
        if(typeof edad == "number"){
            if(edad >= 18){
                resolve("Mayor de edad, puedes entrar");
            }else{
                reject("No tienes la edad suficiente");
            }
        }else{
            throw new Error("La edad tiene que ser en un numero valido");
        }
    });
}
mayorEdad("dos")
    .then((resolveMsg) => {console.log(resolveMsg);})
    .catch((err) => {console.log(err);});

//Promise chaining manera asíncrona, pero todas a la vez*******************************************************************************
/*Si el parametro de la función inputNumber es un tipo numérico podemos ver que la pantalla se muestra en blanco y 
Y tras dos segundos (el tiempo que hemos definido en la función asíncrona setTimeOut), nos devuelve los tres valores a la vez */
function inputNumber(num){
    return new Promise((resolve, reject) => {
        if(typeof num == "number"){
            setTimeout(() => {
                resolve(num);
            }, 2000); //dos segundos de espera
        }else{
            reject("No has introducido un numero");
        }
    })
};
inputNumber(5).then((resultado) => {
    console.log(resultado); //5
    return resultado * 2; //10
}).then((resultado) => {
    console.log(resultado); //10
    return resultado *3; //30
}).then((resultado) => {
    console.log(resultado); //30
    return resultado *4; //120
}).catch((err) => console.error("Error: " + err));

//Promise chaining manera asíncrona, pero de una a una *******************************************************************************
function inputNumber2(num){
    return new Promise ((resolve, reject) => {
        if(typeof num == "number"){
            resolve(num);
        }else{
            reject("No se a ingresado un numero valido");
        }
    })
};
inputNumber2(10)
    .then((resp) => {
        console.log(resp);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resp * 2);
            }, 3 * 1000);
        });
    })
    .then((resp) =>{
        console.log(resp);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resp * 3);
            }, 3 * 1000);
        });
    })
    .then((resp) => {
        console.log(resp);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resp * 4);
            }, 3 * 1000);
        });
    })
    .catch((err) => console.log("Error: " + err))
    .finally((end) => {console.log("Fin del programa");});