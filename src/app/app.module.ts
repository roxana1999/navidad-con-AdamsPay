import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServices } from './services/data.services';
import { AppRoutingModule } from './app-routing.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CrearJugueteComponent } from './components/juguetes/crear-juguete/crear-juguete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MostrarJuguetesComponent } from './components/juguetes/mostrar-juguetes/mostrar-juguetes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CrearJugueteComponent,
    MostrarJuguetesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
