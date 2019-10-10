import {Component, Input, OnInit} from '@angular/core';
import { Movie } from '../../types';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MovieDetailsDialogComponent} from '../movie-details-dialog/movie-details-dialog.component';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input () currentMovie: Movie;

  constructor(private dialog: MatDialog, private  tmdbService: TmdbService) { }

  ngOnInit() {
  }

  openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    this.tmdbService.getMovieById(this.currentMovie.id).subscribe(movie => {
      dialogConfig.data = {
        movie
      };
      this.dialog.open(MovieDetailsDialogComponent, dialogConfig);
    });
  }
}
