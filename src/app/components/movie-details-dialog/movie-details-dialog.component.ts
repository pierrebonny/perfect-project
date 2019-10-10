import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Movie, MovieBestCredits} from '../../types';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html',
  styleUrls: ['./movie-details-dialog.component.css']
})
export class MovieDetailsDialogComponent implements OnInit {

  movieDetails: Movie;
  movieBestCredits: MovieBestCredits;

  constructor(private tmdbService: TmdbService, private dialogRef: MatDialogRef<MovieDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    // getting movie details from previous component (movie component)
    this.movieDetails = data.movie;
    // recovering important cast and crew from TMDB
    this.tmdbService.getMovieBestCredits(this.movieDetails.id).subscribe((movieBestCredits: MovieBestCredits) => {
      this.movieBestCredits = movieBestCredits;
    });
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
