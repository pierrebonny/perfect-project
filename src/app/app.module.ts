import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';

import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { MediaComponent } from './components/media/media.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { MediaDetailsDialogComponent } from './components/media-details-dialog/media-details-dialog.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MediaComponent,
    MediaDetailsDialogComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    BarRatingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MediaDetailsDialogComponent]
})
export class AppModule { }
