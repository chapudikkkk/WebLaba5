import { Component } from '@angular/core';
import { Square } from '../Class/square';
import { Rectangle } from '../Class/rectangle';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  square_show: string = '';
  rectangle_show: string = '';

  calcFigures(
    name1: string,
    side1: string,
    name2: string,
    side2: string,
    diff: string
  ) {
    const a = Number(side1);
    const b = Number(side2);
    const d = Number(diff);

    const square = new Square(name1, a);
    const rectangle = new Rectangle(name2, b, d);

    this.square_show = 'Назва: ' + square.name + '. Сторона: ' + square.side +'. Площа: ' + square.S();

    this.rectangle_show = 'Назва: ' + rectangle.name + '. Перша сторона: ' + rectangle.side + '. Друга сторона: ' + (rectangle.side + rectangle.difference) + '. Різниця між сторонами: ' + rectangle.difference + '. Площа: ' + rectangle.S();}
}