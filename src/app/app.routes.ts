import { Routes } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';

export const routes: Routes = [
  { path: '', component: SquareComponent },
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent }
];