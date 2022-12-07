import { dateToString } from '../generic-functions/dateToString';

export class Deuda {
  'docId': string;
  'amount': Amount;
  'label' = 'Compra de juguetes';
  'validPeriod': ValidPeriod;

  constructor(docId: string, monto: number, inicio: Date, fin: Date) {
    this.docId = docId;
    this.amount = new Amount(monto);
    this.validPeriod = new ValidPeriod(inicio, fin);
  }
}

export class Amount {
  'currency' = 'PYG';
  'value': string;

  constructor(monto: number) {
    this.value = monto.toString();
  }
}

export class ValidPeriod {
  'start': string;
  'end': string;

  constructor(inicio: Date, fin: Date) {
    this.start = dateToString(inicio);
    this.end = dateToString(fin); 
  }
}
