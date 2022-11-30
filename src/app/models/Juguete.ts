import { Categoria } from './Categoria';

export class Juguete {
  categoria!: Categoria;
  nombre: string = "";
  descripcion: string = "";
  url_imagen: string = "";
  precioVenta!: number;
}