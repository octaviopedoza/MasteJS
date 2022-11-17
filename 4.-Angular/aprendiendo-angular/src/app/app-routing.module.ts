// Modulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CosinaComponent } from './Components/cosina/cosina.component';
import { VideojuegoComponent } from './Components/videojuego/videojuego.component';
import { CursosComponent } from './Components/cursos/cursos.component';

// Array de rutas
const routes: Routes = [
  {path: '', component: CosinaComponent},
  {path: 'cosina', component: CosinaComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'videojuego/:nombre', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre', component: CursosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
