import { Component, OnInit } from '@angular/core';
import { HoangService } from '../hoang.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  dulieu: any[];
  constructor(private hoangService: HoangService) { }

  ngOnInit(): void {
    console.log('ChildComponent:OnInit');
    this.hoangService.getData().subscribe(data => {
      this.dulieu = data;
      console.log(this.dulieu);
    })
  }

  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }
}
