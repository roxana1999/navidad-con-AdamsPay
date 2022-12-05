import { Carrito } from "src/app/models/Carrito";

export function obtenerCarrito() : Carrito {
    if (localStorage.getItem('miCarrito')==null) 
        localStorage.setItem('miCarrito', JSON.stringify(new Carrito));
    return JSON.parse(localStorage.getItem('miCarrito')!);
}