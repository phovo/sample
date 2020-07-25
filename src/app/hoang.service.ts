import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HoangService {

  dulieu: any[];
  userName: string = "tektutorialshub"
  baseUrl: string = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any[]>(this.baseUrl + 'users/' + this.userName + '/repos')
   
    
  }
}
