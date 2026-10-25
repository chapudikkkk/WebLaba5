export class Square {
  name: string;
  side: number;

  constructor(name1: string, side1: number) {
    if (name1 !== '' && side1 > 0) {
      this.name = name1;
      this.side = side1;
    } else {
      this.name = 'Квадрат';
      this.side = 1;
    }
  }

  S() {
    return this.side * this.side;
  }
}