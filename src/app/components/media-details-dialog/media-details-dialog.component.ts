import { Observable } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Media, MediaBestCredits } from '../../types';
import { TmdbService } from '../../services/tmdb/tmdb.service';

@Component({
  selector: 'app-media-details-dialog',
  templateUrl: './media-details-dialog.component.html',
  styleUrls: ['./media-details-dialog.component.scss']
})
export class MediaDetailsDialogComponent {

  public mediaDetails$: Observable<Media>;
  public mediaType: string;
  public mediaBestCredits$: Observable<MediaBestCredits>;

  constructor(

    private tmdbService: TmdbService,
    private dialogRef: MatDialogRef<MediaDetailsDialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    data: {
      mediaType: string;
      mediaId: number;
    }) {

    // getting media details from previous component (media component)
    const mediaId = data.mediaId;
    this.mediaType = data.mediaType;

    /**
     * Recovering important cast and crew from TMDB
     */
    this.mediaBestCredits$ = this.tmdbService.getMediaBestCredits(mediaId, this.mediaType);
    // getting media 10 best actors and director's name
    this.mediaDetails$ = this.tmdbService.getMediaById(mediaId, this.mediaType);
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
