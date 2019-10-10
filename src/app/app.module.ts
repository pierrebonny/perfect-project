import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';

import {MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatDialogModule} from '@angular/material';
import { MovieComponent } from './components/movie/movie.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { MovieDetailsDialogComponent } from './components/movie-details-dialog/movie-details-dialog.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieComponent,
    MovieDetailsDialogComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailsDialogComponent]
})
export class AppModule { }
