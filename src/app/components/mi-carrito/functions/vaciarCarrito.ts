import { Carrito } from "src/app/models/Carrito";

export function vaciarCarrito(){
    localStorage.setItem('miCarrito', JSON.stringify(new Carrito));
}