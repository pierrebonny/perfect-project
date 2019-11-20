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
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatPaginatorModule
} from '@angular/material';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MediaComponent } from './components/media/media.component';
import { MediaDetailsDialogComponent } from './components/media-details-dialog/media-details-dialog.component';
import { FormsModule } from '@angular/forms';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';
import { AppRoutingModule } from './app-routing.module';
import { MediaGridComponent } from './components/media-grid/media-grid.component';
import { TmdbDatePipe } from './pipes/tmdb-date/tmdb -date.pipe';
import { TmdbImgPathPipe } from './pipes/tmdb-img-path/tmdb-img-path.pipe';
import { MediaResearchPageComponent } from './pages/media-research-page/media-research-page.component';
import { MainPageLayoutComponent } from './components/main-page-layout/main-page-layout.component';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { HookComponent } from './components/hook/hook.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MediaComponent,
    MediaDetailsDialogComponent,
    ListButtonsComponent,
    MediaGridComponent,
    TmdbDatePipe,
    TmdbImgPathPipe,
    MediaResearchPageComponent,
    MainPageLayoutComponent,
    ListButtonComponent,
    HookComponent,
    NavbarComponent,
    PaginationComponent,
    UserListPageComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatRadioModule,
    MatPaginatorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MediaDetailsDialogComponent]
})
export class AppModule { }
