import { Component } from '@angular/core';
import { Recipie } from './model/recipie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipie: Recipie;

  constructor() {
  this.recipie = new Recipie('Hyderabad Dum Biryani',
  'This is a south indian recipie very special dish in hyderabad and it is all over famous in the world ', null, null, null);
  }

}
