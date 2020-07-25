import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  ten : string = "Meo"; 

  so:number = 2
dis : boolean = true

  obj : any = {ten: "aaaaa", tuoi : 19}

  oneway = 0;
  constructor() { }

  ngOnInit(): void {
    
  }


  ngIncr(e) {
    this.oneway = e.target.value
  }

  clickHanler() {
    console.log(this.so);
  }

  getOneWay() {
    return this.oneway
  }

  percent : 5

}
