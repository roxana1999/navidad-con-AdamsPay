import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearJugueteComponent } from './components/juguetes/crear-juguete/crear-juguete.component';
import { MostrarJuguetesComponent } from './components/juguetes/mostrar-juguetes/mostrar-juguetes.component';

const routes: Routes = [
  {path:'categorias', component: CategoriasComponent},
  {path:'juguetes', component: MostrarJuguetesComponent},
  {path:'juguetes/crearJuguete', component: CrearJugueteComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
