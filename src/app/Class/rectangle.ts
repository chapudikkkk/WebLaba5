import { Square } from './square';

export class Rectangle extends Square {
  difference: number;

  constructor(name1: string, side1: number, difference1: number) {
    super(name1, side1);

    if (name1 === '' || side1 <= 0) {
    this.name = 'Прямокутник';
    } else {
    this.name = name1;
    }

    if (difference1 >= 0) {
      this.difference = difference1;
    } else {
      this.difference = 0;
    }
  }

  override S() {
    return this.side * (this.side + this.difference);
  }
}