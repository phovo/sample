import { Component, OnInit } from '@angular/core';
import { StyleClass } from '../models/style-class';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  size: number = 100;
  cssStyle: StyleClass = new StyleClass()
  constructor() { }

  ngOnInit(): void {
  }

}
