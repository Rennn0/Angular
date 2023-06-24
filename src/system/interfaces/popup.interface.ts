export interface popupField {
  country: string;
  capital: string;
  visitorsN: number;
  date: Date;
  time: string;
  guide: boolean;
}

export interface finalData extends popupField {
  cardNum: number;
  mmyy: string;
  cvc: number;
}
