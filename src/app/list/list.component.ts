import { Component, OnInit } from '@angular/core';
import { Vidu } from '../models/vidu';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cssClass: Vidu = new Vidu();

  constructor() { }

  ngOnInit(): void {
  }

}
