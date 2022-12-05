export function formatearNumero(num: number): string {
  let aux = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return aux;
}