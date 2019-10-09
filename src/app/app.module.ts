import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';

import {MatCardModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import { MovieComponent } from './components/movie/movie.component';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
