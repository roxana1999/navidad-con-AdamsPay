import { formatCurrency } from "@angular/common";

export function dateToString(date: Date) : string {
  let year = date.getFullYear().toString();
  let month = format((date.getMonth()+1).toString());
  let day = format(date.getDate().toString());
  let hours = format(date.getHours().toString());
  let minutes = format(date.getMinutes().toString());
  let seconds = format(date.getSeconds().toString());
  let dateString =
    year +
    '-' +
    month +
    '-' +
    day +
    'T' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    '+00:00';
  return dateString
}


function format( d : string){
  if (d.length <2) d = '0' + d;
  return d;
}
