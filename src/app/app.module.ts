import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatPaginatorModule
} from '@angular/material';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MediaComponent } from './components/media/media.component';
import { MediaDetailsDialogComponent } from './components/media-details-dialog/media-details-dialog.component';
import { RatingComponent } from './components/rating/rating.component';
import {FormsModule} from '@angular/forms';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';
import {NgxStarsModule} from 'ngx-stars';
import { AppRoutingModule } from './app-routing.module';
import { MediaGridComponent } from './components/media-grid/media-grid.component';
import { TmdbDatePipe } from './pipes/tmdb-date/tmdb -date.pipe';
import { TmdbImgPathPipe } from './pipes/tmdb-img-path/tmdb-img-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MediaComponent,
    MediaDetailsDialogComponent,
    RatingComponent,
    ListButtonsComponent,
    MediaGridComponent,
    TmdbDatePipe,
    TmdbImgPathPipe,
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
    MatRadioModule,
    MatPaginatorModule,
    NgxStarsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MediaDetailsDialogComponent]
})
export class AppModule { }
