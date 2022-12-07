import { Component, OnInit } from '@angular/core';
import { formatearNumero } from 'src/app/generic-functions/formatearNumero';
import { Detalle } from 'src/app/models/Carrito';
import { Juguete } from 'src/app/models/Juguete';
import { DataServices } from 'src/app/services/data.services';
import { obtenerCarrito } from '../../mi-carrito/functions/obtenerCarrito';

@Component({
  selector: 'app-mostrar-juguetes',
  templateUrl: './mostrar-juguetes.component.html',
  styleUrls: ['./mostrar-juguetes.component.css']
})
export class MostrarJuguetesComponent implements OnInit {
  listaJuguetes: Juguete[] = [];
  success!: boolean;
  mensaje!: string;
  formatearNumero = formatearNumero;
  
  constructor(private dataServices: DataServices){}

  ngOnInit(): void {
    this.dataServices.cargarJuguetes().subscribe((misJuguetes) => {
      this.listaJuguetes = Object.values(misJuguetes);
    });
  }

  agregarAlCarrito(juguete: Juguete){
    let miCarrito = obtenerCarrito();
    let index = miCarrito.detalles.findIndex( detalle => detalle.juguete.nombre == juguete.nombre);
    console.log(index);
    if (index == -1){
      miCarrito.detalles.push(new Detalle(juguete, 1));
    }
    else {
      miCarrito.detalles[index].cantidad++;
      miCarrito.detalles[index].totalDetalle+=juguete.precioVenta;
    }
    miCarrito.total+=juguete.precioVenta;
    localStorage.setItem('miCarrito', JSON.stringify(miCarrito));
    this.success=true;
    this.mensaje="Añadido al carrito";
  }
}
