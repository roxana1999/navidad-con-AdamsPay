import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearJugueteComponent } from './components/juguetes/crear-juguete/crear-juguete.component';

const routes: Routes = [
  {path:'categorias', component: CategoriasComponent},
  {path:'juguetes/crearJuguete', component: CrearJugueteComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
