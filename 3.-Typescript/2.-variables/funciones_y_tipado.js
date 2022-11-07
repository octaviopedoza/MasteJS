var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Funciones
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es " + numero;
}
console.log(getNumero(10));
//Decoradores
/* Es un patrón de diseño que nos permite mediante unos metadatos que nosotros le definimos de acuerdo a una clase hacer una copia de
esa misma clase y modificarla o que haga una cosa u otras en función de los parámetros que le pase de acuerdo.*/
// function estampar(logo: string){
//     return function(target: Function){
//         target.prototype.estampacion = function():void{
//             console.log("Camiseta estampada "+logo);
//         }
//     }
// }
//Clases (modelo de objeto)
// @estampar('CK')
var Camiseta = /** @class */ (function () {
    /*Metodos (funciones o acciones del objeto)
    el Constructor es un metodo especial dentro de una clase y se utiliza para darle un valor inicial a los atributos
    o propiedades del objeto al crearlo, el constructor nunca devuelve ningun dato*/
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// Clase hija(Ejemplo de herencia)
// Es necesario agregar el extends para pder agregar las propiedades de la clase padre.
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
//Pasamos por parametro los atributos definidos dentro del constructor
var camiseta = new Camiseta("Rojo", "Manga costa", "Polo", "Grande", 14);
camiseta.setColor("Rojo");
console.log(camiseta);
var sudadera_nike = new Sudadera("Blanca", "Manga larga", "Sudadera", "Grande", 25);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
