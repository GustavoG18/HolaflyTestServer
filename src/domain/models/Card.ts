interface Comsuption {
  totalComsumption: Number;
}
export class Card {
  constructor(
    status: string,
    dateStart: string,
    dateEnd: string,
    comsuption: Comsuption,
    flag: string,
    country: string,
    plan: string
  ) {}
}
