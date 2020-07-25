import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  person: Person;
  id: string;

  constructor(private postService: PostService,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.getPerson(parseInt(this.id))
  }

  getPerson(id: number) {
    this.postService.getPerson(id)
      .subscribe(
        res => {
          this.person = res
        },
        err => {
        }
      )
  }
}
