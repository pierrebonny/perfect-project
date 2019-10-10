import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Media, MovieBestCredits} from '../../types';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-media-details-dialog',
  templateUrl: './media-details-dialog.component.html',
  styleUrls: ['./media-details-dialog.component.css']
})
export class MediaDetailsDialogComponent implements OnInit {

  mediaDetails: Media;
  mediaType: string;
  mediaBestCredits: MovieBestCredits;

  constructor(private tmdbService: TmdbService, private dialogRef: MatDialogRef<MediaDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    // getting media details from previous component (media component)
    this.mediaDetails = data.media;
    this.mediaType = data.mediaType;
    // recovering important cast and crew from TMDB
    this.tmdbService.getMediaBestCredits(this.mediaDetails.id, this.mediaType).subscribe((movieBestCredits: MovieBestCredits) => {
      this.mediaBestCredits = movieBestCredits;
    });
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
