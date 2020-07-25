import { Component } from '@angular/core';
import { Item } from './models/item'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

count: number = 10;

clearCount() {
  this.count = 0;
}
 
}
