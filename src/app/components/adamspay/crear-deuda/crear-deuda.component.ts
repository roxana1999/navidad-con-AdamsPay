import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { addDays } from 'src/app/generic-functions/addDays';
import { Carrito } from 'src/app/models/Carrito';
import { Deuda } from 'src/app/models/Deuda';
import { AdamspayService } from 'src/app/services/adamspay/adamspay.service';
import { obtenerCarrito } from '../../mi-carrito/functions/obtenerCarrito';

@Component({
  selector: 'app-crear-deuda',
  templateUrl: './crear-deuda.component.html',
  styleUrls: ['./crear-deuda.component.css']
})
export class CrearDeudaComponent implements OnInit {
  miCarrito!: Carrito;
  carritoVacio = false;
  deuda!: Deuda;
  idDeuda = "demo001";
  siExiste = "update";
  apiKey = "ap-6d8101268f0c992a874a8212";
  host = "staging.adamspay.com";
  path = "/api/v1/debts";

  inicioValidez!: Date;
  finValidez!:Date;


  constructor(private adamsPayService: AdamspayService){}

  ngOnInit(): void {
    this.miCarrito = obtenerCarrito();
    if (this.miCarrito.total == 0) return
    else {
      let monto = this.miCarrito.total;
      this.inicioValidez = new Date();
      this.finValidez = addDays(this.inicioValidez,2);
      console.log(this.inicioValidez);
      console.log(this.finValidez);
      this.deuda = new Deuda(this.idDeuda, monto, this.inicioValidez, this.finValidez);
      console.log(this.deuda);

      let post = {"debt":this.deuda};
      let headers = new HttpHeaders({"apikey": this.apiKey, "Content-Type": "application/json", "x-if-exists": this.siExiste});

      this.adamsPayService.postDeuda(this.deuda, headers).subscribe( response => console.log(response));
    }
  }

 
  
}

