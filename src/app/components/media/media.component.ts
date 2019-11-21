import { Component, Input } from '@angular/core';
import { Media } from '../../types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MediaDetailsDialogComponent } from '../media-details-dialog/media-details-dialog.component';
import { TmdbService } from '../../services/tmdb/tmdb.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  @Input () currentMedia: Media;
  @Input () mediaType: string;

  constructor(private dialog: MatDialog, private  tmdbService: TmdbService) {}

  /**
   * open new dialog with media cast, crew and overview
   */
  openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.data = {
      mediaType: this.mediaType,
      mediaId: this.currentMedia.id,
    };
    this.dialog.open(MediaDetailsDialogComponent, dialogConfig);
  }
}
