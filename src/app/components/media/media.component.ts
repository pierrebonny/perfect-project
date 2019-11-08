import { Component, Input, OnDestroy } from '@angular/core';
import { Media } from '../../types';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MediaDetailsDialogComponent } from '../media-details-dialog/media-details-dialog.component';
import { TmdbService } from '../../services/tmdb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnDestroy {

  @Input () currentMedia: Media;
  @Input () mediaType: string;

  private subscriptions = new Subscription();

  constructor(private dialog: MatDialog, private  tmdbService: TmdbService) {}

  /**
   * open new dialog with media cast, crew and overview
   */
  openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';

    // getting media 10 best actors and director's name
    const subscription = this.tmdbService.getMediaById(this.currentMedia.id, this.mediaType).subscribe(media => {
      dialogConfig.data = {
        mediaType: this.mediaType,
        media,
      };
      this.dialog.open(MediaDetailsDialogComponent, dialogConfig);
    });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
