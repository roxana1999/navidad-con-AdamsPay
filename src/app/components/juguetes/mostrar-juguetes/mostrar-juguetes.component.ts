import { Component, OnInit } from '@angular/core';
import { formatearNumero } from 'src/app/generic-functions/formatearNumero';
import { Juguete } from 'src/app/models/Juguete';
import { DataServices } from 'src/app/services/data.services';

@Component({
  selector: 'app-mostrar-juguetes',
  templateUrl: './mostrar-juguetes.component.html',
  styleUrls: ['./mostrar-juguetes.component.css']
})
export class MostrarJuguetesComponent implements OnInit {
  listaJuguetes: Juguete[] = [];
  formatearNumero = formatearNumero;
  
  constructor(private dataServices: DataServices){}

  ngOnInit(): void {
    this.dataServices.cargarJuguetes().subscribe((misJuguetes) => {
      this.listaJuguetes = Object.values(misJuguetes);
    });
  }

}
