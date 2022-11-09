// import del objeto component y le indicamos la ruta donde esta el componente
import { Component } from "@angular/core";

// definimos el decorador, los decoradores de clase nunca se cierran con ";"
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

// definimos la clase con el mismo nombre que nuestro componente
export class VideojuegoComponent {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";
        console.log("videojuego componente cargado");
    }
}

// una vez creado nuestro archivo es necesario darlo de alta dentro del modulo principal "app.module.ts" y ademas lo agregamos dentro
// del "@NGmodule" en las "declarations"