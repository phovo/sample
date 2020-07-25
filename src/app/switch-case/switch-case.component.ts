import { Component, OnInit } from '@angular/core';
import { Element } from '../models/element';
@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

  element: Element[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }, { name: 'Four', val: 3 }, { name: 'Five', val: 3 }]
  selectedValue1: string = 'One';
  selectedValue2: string = 'Two';
  selectedValue3: string = 'One';
  selectedValue4: string = 'One';
}
