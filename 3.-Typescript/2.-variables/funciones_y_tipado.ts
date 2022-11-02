//Funciones
function getNumero(numero: number = 12):string{ //aqui asignamos al argumento un tipo number y nos tiene que responder con un string
    return "el numero es "+ numero;
}
console.log(getNumero(10));

//Clases (modelo de objeto)
class Camiseta{
    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    public precio: number;

    //Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.precio = 250;

var playera = new Camiseta();
playera.setColor("Azul");
playera.precio = 500;

console.log(camiseta);
console.log(playera);