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

  /**
   * open new dialog with movie cast, crew and overview
   */
  openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';
    // getting movie details from TMDB
    this.tmdbService.getMovieById(this.currentMovie.id).subscribe(movie => {
      dialogConfig.data = {
        movie
      };
      this.dialog.open(MovieDetailsDialogComponent, dialogConfig);
    });
  }

  /**
   * Adding current movie id to selected list into localstorage
   */
  addToList(listKey: string) {
    let list = JSON.parse(localStorage.getItem(listKey));
    if (!list) {
      list = [];
    }
    list.push(this.currentMovie.id);
    localStorage.setItem(listKey, JSON.stringify(list));
  }

  /**
   * Checking whether or not current movie id is in selected list in local storage
   */
  isInList(listKey: string) {
    const list = JSON.parse(localStorage.getItem(listKey));
    return list && list.includes(this.currentMovie.id);
  }
}
