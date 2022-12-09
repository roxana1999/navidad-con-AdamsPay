import { Component, OnInit } from '@angular/core';
import { addDays } from 'src/app/generic-functions/addDays';
import { formatearNumero } from 'src/app/generic-functions/formatearNumero';
import { Carrito } from 'src/app/models/Carrito';
import { Deuda } from 'src/app/models/Deuda';
import { AdamspayService } from 'src/app/services/adamspay/adamspay.service';
import { LoginService } from 'src/app/services/login/login.service';
import { obtenerCarrito } from './functions/obtenerCarrito';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.css']
})
export class MiCarritoComponent implements OnInit {
  miCarrito = new Carrito;
  estaVacio!: boolean;
  warning!: boolean;
  mensaje="";
  formatearNumero = formatearNumero;

  constructor(private route: ActivatedRoute, private adamsPayService: AdamspayService, private loginService: LoginService){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    this.miCarrito = obtenerCarrito();
    if (this.miCarrito.total==0)
      this.mensaje="Carrito vacío."; this.estaVacio=true;
  }

  disminuirCantidad(i: number){
    if (this.miCarrito.detalles[i].cantidad==1) return;
    this.miCarrito.detalles[i].cantidad--;
    this.miCarrito.detalles[i].totalDetalle-= this.miCarrito.detalles[i].juguete.precioVenta;
    this.miCarrito.total-= this.miCarrito.detalles[i].juguete.precioVenta;
    localStorage.setItem('miCarrito', JSON.stringify(this.miCarrito));
  }

  aumentarCantidad(i: number){
    this.miCarrito.detalles[i].cantidad++;
    this.miCarrito.detalles[i].totalDetalle+= this.miCarrito.detalles[i].juguete.precioVenta;
    this.miCarrito.total+= this.miCarrito.detalles[i].juguete.precioVenta;
    localStorage.setItem('miCarrito', JSON.stringify(this.miCarrito));
  }

  quitarDelCarrito(i: number){
    this.miCarrito.total-=this.miCarrito.detalles[i].totalDetalle;
    this.miCarrito.detalles.splice(i, 1);
    localStorage.setItem('miCarrito', JSON.stringify(this.miCarrito));
    if (this.miCarrito.total==0){
      this.mensaje="Carrito vacío.";
      this.estaVacio=true;
    }
  }

  crearDeuda(){
    this.warning=false;
    if (!this.estaLogueado()){
      this.warning=true; this.mensaje="Debes iniciar sesión para realizar la compra."
      return;
    }
    if (this.miCarrito.userToken=='') this.miCarrito.userToken = this.loginService.getIdToken()!;
    
    const monto = this.miCarrito.total;
    const inicioValidez = new Date();
    const finValidez = addDays(inicioValidez,2);
    const deuda = new Deuda("", monto, inicioValidez, finValidez);
    // console.log(this.inicioValidez);
    // console.log(this.finValidez);
    // console.log(this.deuda);
    this.adamsPayService.postDeuda(deuda)
    .subscribe( 
      response => {
        console.log("Response", response.debt.payUrl);
        window.location.href = response.debt.payUrl;
      }
    );
  }

  estaLogueado(){
    const token = this.loginService.getIdToken();
    if (token == null || token=='') return false;
    return true;    
  }

}
