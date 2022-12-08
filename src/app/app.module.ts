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
import { MiCarritoComponent } from './components/mi-carrito/mi-carrito.component';
import { LoginComponent } from './components/login/login.component';
import { AdamspayService } from './services/adamspay/adamspay.service';
import { LoginService } from './services/login/login.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CrearJugueteComponent,
    MostrarJuguetesComponent,
    MiCarritoComponent,
    LoginComponent,
    LogoutComponent,
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
    DataServices,
    AdamspayService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
