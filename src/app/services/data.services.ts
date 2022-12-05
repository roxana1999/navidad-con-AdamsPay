import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { Juguete } from '../models/Juguete';

@Injectable()
export class DataServices {
  db_url = 'https://salvar-la-navidad-default-rtdb.firebaseio.com/datos/';
  constructor(private httpClient: HttpClient) {}

  guardarCategorias(categorias: Categoria[]) {
    this.httpClient.put(this.db_url + 'categorias.json', categorias).subscribe({
      next: (response) =>
        console.log('Se han guardado las categorias, ', response),
      error: (error) => console.log('Error', error),
    });
  }

  cargarCategorias() {
    return this.httpClient.get(this.db_url + 'categorias.json');
  }

  guardarJuguetes(juguetes: Juguete[]) {
    this.httpClient.put(this.db_url + 'juguetes.json', juguetes).subscribe({
      next: (response) =>
        console.log('Se han guardado los juguetes, ', response),
      error: (error) => console.log('Error', error),
    });
  }

  cargarJuguetes() {
    return this.httpClient.get(this.db_url + 'juguetes.json');
  }
}
