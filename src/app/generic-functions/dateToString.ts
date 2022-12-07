export function dateToString(date: Date) : string {
  let year = date.getFullYear().toString();
  let month = date.getDate().toString();
  let day = date.getDay().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();
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
    seconds;
  return dateString
}
