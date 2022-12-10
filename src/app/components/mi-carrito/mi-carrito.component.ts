import { Component, OnInit } from '@angular/core';
import { addDays } from 'src/app/generic-functions/addDays';
import { formatearNumero } from 'src/app/generic-functions/formatearNumero';
import { Carrito } from 'src/app/models/Carrito';
import { Deuda } from 'src/app/models/Deuda';
import { AdamspayService } from 'src/app/services/adamspay/adamspay.service';
import { LoginService } from 'src/app/services/login/login.service';
import { obtenerCarrito } from './functions/obtenerCarrito';

import { ActivatedRoute } from '@angular/router';
import { vaciarCarrito } from './functions/vaciarCarrito';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.css']
})
export class MiCarritoComponent implements OnInit {
  miCarrito = new Carrito;
  warning!: boolean;
  mensaje="";
  formatearNumero = formatearNumero;

  constructor(private route: ActivatedRoute, private adamsPayService: AdamspayService, private loginService: LoginService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params);
      if (params['doc_id']) this.leerDeuda(params['doc_id']);
    });
    this.miCarrito = obtenerCarrito();
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
  }

  crearDeuda(){
    this.warning=false;
    if (!this.estaLogueado()){
      this.warning=true; 
      this.mensaje="Debes iniciar sesión para realizar la compra.";
      return;
    }
    if (this.miCarrito.userToken=='') this.miCarrito.userToken = this.loginService.getIdToken()!;
    if (this.miCarrito.idDeuda!='') this.adamsPayService.goToPaymentLink(this.miCarrito.idDeuda);
    
    else {
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
          this.miCarrito.idDeuda=response.debt.docId;
          console.log(this.miCarrito.idDeuda);
          localStorage.setItem('miCarrito',JSON.stringify(this.miCarrito));
          window.location.href = response.debt.payUrl;
        }
      );
    }
  }

  leerDeuda(idDeuda : string){
    this.adamsPayService.readDeuda(idDeuda).subscribe(
      response => {
        // console.log(this.miCarrito.idDeuda);
        // console.log("Response de leer deuda: ", response);
        if (response['debt']){
          const debt = response['debt'];
          const idDeuda = debt['docId'];
          const objStatus = debt['objStatus']['status'];
          // console.log(objStatus);
          const payStatus = debt['payStatus']['status'];
          // console.log(payStatus);
          const isActive = (objStatus == 'active' || objStatus == 'alert' || objStatus == 'success');
          // console.log("Activa: ",isActive);
          const isPaid = payStatus == 'paid';
          // if (isPaid){
          //   const date = new Date(debt["payStatus"]["time"]);
          //   console.log("Pagada en fecha: ", date);
          // }
          // else console.log("No pagada.");
          // console.log("docid", idDeuda);
          // console.log('docId', this.miCarrito.idDeuda);
          if (isPaid && objStatus=='success' && idDeuda==this.miCarrito.idDeuda) {vaciarCarrito(); this.miCarrito= new Carrito()}
        }
        else if (response['meta']) console.log(response['meta']);
      }
    )
  }

  estaLogueado(){
    const token = this.loginService.getIdToken();
    if (token == null || token=='') return false;
    return true;
  }

}
