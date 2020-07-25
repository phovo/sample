import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HoangDucPipe } from '../convert.pipe';

@Component({
  selector: 'app-pipe-transform',
  templateUrl: './pipe-transform.component.html',
  styleUrls: ['./pipe-transform.component.css']
})
export class PipeTransformComponent implements OnInit {

  date: Date = new Date()

  myPipe: HoangDucPipe = new HoangDucPipe()

  giatri: number = 44;

  newmy: any;

  // newgiatri: any

  dateStr: any

  constructor() { }

  ngOnInit(): void {
    this.dateStr = new DatePipe("en-US").transform(this.date)
    //this.newgiatri = this.myPipe.transform(this.giatri, "C")
   // this.newmy = this.myPipe.transform(this.giatri, "D")
  }

  title: string = 'Angular Custom Pipe Example';

  Fahrenheit: number;
  Celsius: number;

}
