import { randomInt } from './randomInt';
export class ArrayOne {
 a: number[] = [];
 count: number = 0;

  constructor() {
    this.a = [];
   }

  genArray() {
    this.a = [];
    this.count = 0;
    let rnd = new randomInt();
    for (let i = 0; i < 10; i++) {
     this.a.push(rnd.randomInteger(10, 30));
     if (this.a[i] >= 20) {
      this.count++;
     }
    }
  }
}