import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {


  obs: Observable<any> = new Observable(obser => {
    obser.next({ name: "meo", age: 6 })
    setTimeout(() => { obser.next({ name: "cu", age: 1 }) }, 5000);

  })

  obsValue: Observable<any> = new Observable((observer) => {
    observer.next({ name: "Teo", age: 23 })
    setTimeout(() => { observer.next(121212) }, 7000);
  })

  constructor() { }

  ngOnInit(): void {

  }

}
