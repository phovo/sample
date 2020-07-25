import { Component, OnInit } from '@angular/core';
import { HoangDucPipe } from '../convert.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-service-pipe',
  templateUrl: './service-pipe.component.html',
  styleUrls: ['./service-pipe.component.css']
})
export class ServicePipeComponent implements OnInit {
  so: number = 77;

  date: Date = new Date();

  bien: any;
  toDate: any;
  pipe: HoangDucPipe = new HoangDucPipe();
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.bien = this.pipe.transform(this.so, 'C')
    this.toDate = this.datePipe.transform(this.date)
  }

}
