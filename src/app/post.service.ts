import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = "http://localhost:3000/";
  observe: Person[];
  req: HttpRequest<any>;
  
  constructor(private http: HttpClient) { }

  addPerson(person: Person): any {
    const headers = { 'content-type': 'application/json' } // const headers = new HttpHeaders().set('content-type','application/json')
    const body = JSON.stringify(person)
    this.http.post(this.baseUrl + 'people', body, {'headers': headers, observe: 'response' })
      .subscribe(response => {
        console.log(response)
        if (response?.status == 201) {
          return response.body
        }

        return {}
      })
  }

  // getPersons(): Person[] {
  //   let personList: Person[]
  //   this.http.get<Person[]>(this.baseUrl + 'people').subscribe(data => {
  //     personList = data;
  //   });

  //   return personList;
  // }

  async getPersons(input?: string): Promise<Person[]> {
    let params = {}
    if(input) {
      params = new HttpParams()
      .set('name', input)
    }
    
    //let req: HttpRequest<any> = req.clone({headers: req.headers.set('Content-type', 'application/json')})
    let headers = new HttpHeaders()
   .set('content-type','application/json')
   .set('Access-Control-Allow-Origin', '*');
    let personList: Person[] = await this.http.get<Person[]>(this.baseUrl + 'people', {"headers": headers, 'params': params }).toPromise()
    
    return personList;
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.baseUrl + 'people' + '/' + id)
  }

  deletePerson(id: number) {
    this.http.delete(this.baseUrl + 'people' + '/' + id)
  }
}
