'use strict'
// Switch
var edad = 46;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "tienes 18 ya eres mayor de edad"
        break;
    case 30:
        imprime = "ya eres un adulto";
        break;
    case 45:
        imprime = "ya estas viejo";
        break;
    case 50:
        imprime = "eres un anciano";
        break;
    default:
        imprime = "edad neutra";
        break;
}
console.log(imprime);