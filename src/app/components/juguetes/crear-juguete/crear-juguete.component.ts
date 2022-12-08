import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataServices } from 'src/app/services/data.services';
import { Categoria } from 'src/app/models/Categoria';
import { Juguete } from 'src/app/models/Juguete';

@Component({
  selector: 'app-crear-juguete',
  templateUrl: './crear-juguete.component.html',
  styleUrls: ['./crear-juguete.component.css']
})
export class CrearJugueteComponent implements OnInit {
  juguete = new Juguete();
  categoria = new Categoria("");
  categoriaControl = new FormControl<string | null>(null, Validators.required);
  listaCategorias: Categoria[] = [];
  listaJuguetes: Juguete[] = [];
  success!: boolean;
  warning!: boolean;
  mensaje!: string;

  constructor(private dataServices: DataServices) { }
  
  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.dataServices.cargarCategorias().subscribe((misCategorias) => {
      this.listaCategorias = Object.values(misCategorias);
    });
    this.dataServices.cargarJuguetes().subscribe((misJuguetes) => {
      this.listaJuguetes = Object.values(misJuguetes);
    });
  }

  crearJuguete(){
    //TODO: Validar inputs de juguete
    this.listaJuguetes.push(this.juguete);
    this.dataServices.guardarJuguetes(this.listaJuguetes);
    this.success=true; this.mensaje="Juguete creado exitosamente";
  }

}
