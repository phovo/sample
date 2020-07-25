import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ng-for-pipe',
  templateUrl: './ng-for-pipe.component.html',
  styleUrls: ['./ng-for-pipe.component.css']
})
export class NgForPipeComponent implements OnInit {
  npm: Observable<any> = this.getHouse();
  node: Observable<any> = this.getWhat();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getHouse(): Observable<any> {
    return this.http.get<any>("https://dog.ceo/api/breed/hound/list");
  }
  getWhat(): Observable<any>   {
    return this.http.get<any>("https://dog.ceo/api/breeds/image/random")
  }

}
