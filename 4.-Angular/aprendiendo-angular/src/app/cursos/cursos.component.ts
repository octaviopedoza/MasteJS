import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public parrafo: string;

  constructor() { 
    this.titulo = "Componente de cursos listo";
    this.parrafo = "Componente trabajando";

    console.log("Componente de cursos cargado");
  }

  ngOnInit(): void {
    console.log("OnInit ejecutado!!");
  }

  ngDoCheck(): void {
    console.log("DoCheck ejecutado");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo de cursos";
  }
}
