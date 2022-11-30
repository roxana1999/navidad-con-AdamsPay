import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DataServices } from 'src/app/data.services';
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
  listaCategorias!: Categoria[];
  colorControl = new FormControl('primary' as ThemePalette);
  success!: boolean;
  warning!: boolean;
  mensaje!: boolean;

  constructor(private dataServices: DataServices) { }
  
  ngOnInit(): void {
    console.log("Obtener categorías")
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.dataServices.cargarCategorias().subscribe((misCategorias) => {
      this.listaCategorias = Object.values(misCategorias);
    });
  }

  crearJuguete(){

  }

}
