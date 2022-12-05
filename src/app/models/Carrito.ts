import { Juguete } from "./Juguete";

export class Carrito {
    detalles : Detalle[] = [];
    total = 0;
}

export class Detalle {
    "juguete": Juguete;
    "cantidad": number;
    "totalDetalle" : number;

    constructor (juguete: Juguete, cantidad: number){
        this.juguete = juguete;
        this.cantidad = cantidad;
        this.totalDetalle = juguete.precioVenta * cantidad;
    }
}