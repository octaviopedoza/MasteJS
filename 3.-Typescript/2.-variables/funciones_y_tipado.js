//Funciones
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es " + numero;
}
console.log(getNumero(10));
//Clases (modelo de objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.precio = 250;
var playera = new Camiseta();
playera.setColor("Azul");
playera.precio = 500;
console.log(camiseta);
console.log(playera);
