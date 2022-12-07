import { Component, OnInit } from '@angular/core';
import { formatearNumero } from 'src/app/generic-functions/formatearNumero';
import { Carrito } from 'src/app/models/Carrito';
import { obtenerCarrito } from './functions/obtenerCarrito';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.css']
})
export class MiCarritoComponent implements OnInit {
  miCarrito = new Carrito;
  mensaje="";
  estaVacio!: boolean;
  formatearNumero = formatearNumero;


  ngOnInit(): void {
    this.miCarrito = obtenerCarrito();
    if (this.miCarrito.total==0){
      this.mensaje="Carrito vacío.";
      this.estaVacio=true;
    }
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

}
