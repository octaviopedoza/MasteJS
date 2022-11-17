import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public parrafo: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ){ 
    this.titulo = "Componente de cursos listo";
    this.parrafo = "Componente trabajando";

    console.log("Componente de cursos cargado");
  }

  ngOnInit(): void {
    console.log("OnInit ejecutado!!");
    this._route.params.subscribe()
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
