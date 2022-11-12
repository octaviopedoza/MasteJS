import {Component} from '@angular/core';
import {Configuracion} from './models/configuracion';

// Component es un decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer app Angular';
  descripcion: string;
  config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

}
