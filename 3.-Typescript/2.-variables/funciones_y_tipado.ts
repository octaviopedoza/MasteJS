//Funciones
function getNumero(numero: number = 12):string{ //aqui asignamos al argumento un tipo number y nos tiene que responder con un string
    return "el numero es "+ numero;
}
console.log(getNumero(10));

//Interface
// Para hacer uso de una interface es necesario utilizar la palabra interface y asignar los valores que debe de tener la interface definidos
interface CamisetaBase{
    setColor(color);
    getColor();
}

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
class Camiseta implements CamisetaBase{
    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    public precio: number;

    /*Metodos (funciones o acciones del objeto)
    el Constructor es un metodo especial dentro de una clase y se utiliza para darle un valor inicial a los atributos
    o propiedades del objeto al crearlo, el constructor nunca devuelve ningun dato*/
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}
// Clase hija(Ejemplo de herencia)
// Es necesario agregar el extends para pder agregar las propiedades de la clase padre.
class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

//Pasamos por parametro los atributos definidos dentro del constructor
var camiseta = new Camiseta("Rojo", "Manga costa", "Polo","Grande", 14);
camiseta.setColor("Rojo");
console.log(camiseta);

var sudadera_nike = new Sudadera("Blanca", "Manga larga", "Sudadera", "Grande", 25);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);