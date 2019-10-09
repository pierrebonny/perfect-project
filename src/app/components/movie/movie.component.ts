import {Component, Input, OnInit} from '@angular/core';
import { Movie } from '../../types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input () currentMovie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
