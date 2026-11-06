import { randomInt } from './randomInt';
export class ArrayTwo {
 a: number[][] = [];
 sum: number = 0;

   constructor() {
    this.a = [];
  }

   genArray() {
    this.a = [];
    this.sum = 0;
    let rnd = new randomInt();
   for (let i = 0; i < 5; i++) {
    this.a[i] = [];
    for (let j = 0; j < 5; j++) {
     this.a[i][j] = rnd.randomInteger(-10, 10);
        if (j > i) {
         this.sum += this.a[i][j];
        }
     }
    }
   }
}