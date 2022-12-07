export function addDays(start: Date, days: number) {
  let date = new Date();
  date.setDate(start.getDate() + days);
  return date;
}
