// import del objeto component y le indicamos la ruta donde esta el componente
import { Component, OnInit } from "@angular/core";
import { Videojuego } from "../models/videojuego";

// definimos el decorador, los decoradores de clase nunca se cierran con ";"
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

// definimos la clase con el mismo nombre que nuestro componente
export class VideojuegoComponent implements OnInit{
    public titulo: string;
    public listado: string;
    public videojuego: Array <Videojuego>
    public juegos: string[];
    public solicitar_juego: string;

    constructor(){
        this.solicitar_juego = "FreeFire";
        this.juegos = new Array();
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";

        this.videojuego = [
            new Videojuego('COD mobile', 'Microsoft', 'Shoter', 5),
            new Videojuego('GTA', 'RockStar Game', 'MA', 1),
            new Videojuego('Mario bross', 'Nintendo', 'Arcade', 2)
        ];   
        
        this.juegos = ["Zelda","Sonic","GTA","COD","Mario Bros"];

        console.log("videojuego componente cargado");
        console.log(this.juegos);
    }

    ngOnInit(): void {
        console.log(this.videojuego);
    }

    //Metodo para solicitar juego por input
    getJuegos(){
        alert(this.solicitar_juego);
    }

    // Metodo para agregar el juego pasado por imput al array de juegos mas solicitados
    addJuegos(){
        this.juegos.push(this.solicitar_juego);
    }
}

// una vez creado nuestro archivo es necesario darlo de alta dentro del modulo principal "app.module.ts" y ademas lo agregamos dentro
// del "@NGmodule" en las "declarations"