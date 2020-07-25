import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from '../../movie-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;
  movie: Movie;
  constructor(private activatedroute: ActivatedRoute,
    private movieService: MovieServiceService) {
  }

  ngOnInit(): void {
    this.title = this.activatedroute.snapshot.paramMap.get('title');
    this.getMovie(this.title)
  }

  getMovie(title: string) {
    this.movie = this.movieService.getMovie(title);
  }

}
