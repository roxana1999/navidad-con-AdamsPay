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
      this.mensaje="Carrito vacío";
      this.estaVacio=true;
    }
  }

}
