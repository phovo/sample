import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  title: string = "ngIf Example";
  showMe: boolean;
  count = true;
  Meo = true;
 sotine = 100
  constructor() { }

  ngOnInit(): void {
  }

}