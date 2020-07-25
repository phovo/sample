import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input() count: number = 0;

  @Output() coutChange: EventEmitter<number> = new EventEmitter<number>();

  giatri() {
    this.count ++;
    this.coutChange.emit(this.count)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
