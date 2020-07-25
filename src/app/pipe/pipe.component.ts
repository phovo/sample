import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Pipe Example';
  toDate: Date = new Date();
  num: number = 9542.14554;
  per: number = .7414;2;
  cur: number = 175;
  numDate=1590319189931;
  strDate="Sun May 24 2020 19:16:23"
  msg: string = 'Welcome to Angular';

}
