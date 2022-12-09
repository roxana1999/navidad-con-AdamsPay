import { Component, OnInit } from '@angular/core';
import { categorias } from 'src/app/components/categorias/listaCategorias';
import { DataServices } from 'src/app/services/data.services';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listaCategorias: Categoria[] = categorias;

  constructor(private dataServices: DataServices) { }

  ngOnInit(): void {
    //this.dataServices.guardarCategorias(this.listaCategorias);
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.dataServices.cargarCategorias().subscribe((misCategorias) => {
      this.listaCategorias = Object.values(misCategorias);
      //console.log(this.listaCategorias);
    });
  }
}
