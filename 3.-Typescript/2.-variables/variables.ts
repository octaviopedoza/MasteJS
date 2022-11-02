//Strings
let cadena: string = "Octavio pedroza";

//Number
let numero: number = 12;

//Boleano
let verdaro_falso: boolean = true;

//Any
let cualquiera: any ="hola";
cualquiera = 77;

//Array
var lenguajes: Array <string> = ["PHP", "JS", "HTML"];
let years: number[] = [12, 13, 15];

//Multiple tipo de datos
var cadena2: string | number = 15;

//Tipos de datos personalizados
type alfanumerico = string | number;
var cadena3: alfanumerico = "hola";

console.log(cadena, numero, verdaro_falso, cualquiera, lenguajes, years, cadena2, cadena3);