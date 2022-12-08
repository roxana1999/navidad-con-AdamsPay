import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearJugueteComponent } from './components/juguetes/crear-juguete/crear-juguete.component';
import { MostrarJuguetesComponent } from './components/juguetes/mostrar-juguetes/mostrar-juguetes.component';
import { MiCarritoComponent } from './components/mi-carrito/mi-carrito.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  // {path:'categorias', component: CategoriasComponent},
  {path:'', redirectTo:'juguetes', pathMatch: 'full'},
  {path:'juguetes', component: MostrarJuguetesComponent},
  {path:'juguetes/crearJuguete', component: CrearJugueteComponent},
  {path:'miCarrito', component: MiCarritoComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
