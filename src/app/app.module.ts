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
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatPaginatorModule
} from '@angular/material';
import { MediaComponent } from './components/media/media.component';
import { MediaDetailsDialogComponent } from './components/media-details-dialog/media-details-dialog.component';
import { RatingComponent } from './components/rating/rating.component';
import {FormsModule} from '@angular/forms';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';
import {NgxStarsModule} from 'ngx-stars';
import { TmdbDatePipe } from './pipes/tmdb-date/tmdb-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MediaComponent,
    MediaDetailsDialogComponent,
    RatingComponent,
    ListButtonsComponent,
    TmdbDatePipe
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxStarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MediaDetailsDialogComponent]
})
export class AppModule { }
