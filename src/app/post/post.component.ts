import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Person } from '../person';
import { HttpRequest } from '@angular/common/http';
import { StringUtilsService } from '../utils/string-utils.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  nameSearch: string;
  loading: boolean;
  errorMessage;
  person: Person;
  personList: Person[];
  cc: Person = new Person()
  show = true;
  static user: string;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.cc.name = "Mot";
    this.cc.age = 10;
    this.getlistPerson()
    this.show = true;   
    // this.getPerson(10)      Teo      
    console.log('PostComponent:OnInit');
  }



  getlistPerson() {
    this.show = !this.show
    this.loading = true;
    this.postService.getPersons(StringUtilsService.removeSpaceAtBeginAndEnd(this.nameSearch))
      .then(res => {
        this.personList = res;
      }).catch(error => {
        this.errorMessage = error;
      }).finally(() => {
        this.loading = false;
      })

  }

  addPerson() {
    this.postService.addPerson(this.cc)
  }

  getPerson(id: number) {

    this.loading = true;
    this.postService.getPerson(id)
      .subscribe(
        res => {
          console.log(66666666)
          this.person = res
          this.loading = false;
        },
        err => {
          console.log(777777)
          this.errorMessage = err
          this.loading = false;
        }
      )
    console.log(22222222222)
  }

  deletePerson() {
    this.postService.deletePerson(7)
  }

  ngOnDestroy(): void {
    console.log('PostComponent:ngOnDestroy');
  }

}
