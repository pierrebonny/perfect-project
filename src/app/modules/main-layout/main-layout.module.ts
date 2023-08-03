import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from '../../components/media/media.component';
import { MediaDetailsDialogComponent } from '../../components/media-details-dialog/media-details-dialog.component';
import { ListButtonsComponent } from '../../components/list-buttons/list-buttons.component';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { MainPageLayoutComponent } from '../../components/main-page-layout/main-page-layout.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    MediaComponent,
    MediaDetailsDialogComponent,
    ListButtonsComponent,
    MediaGridComponent,
    TmdbDatePipe,
    TmdbImgPathPipe,
    MainPageLayoutComponent,
    ListButtonComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MediaComponent,
    MediaDetailsDialogComponent,
    ListButtonsComponent,
    MediaGridComponent,
    TmdbDatePipe,
    TmdbImgPathPipe,
    MainPageLayoutComponent,
    ListButtonComponent,
    PaginationComponent,
  ],
  entryComponents: [ MediaDetailsDialogComponent ]
})
export class MainLayoutModule { }
