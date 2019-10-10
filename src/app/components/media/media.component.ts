import {Component, Input, OnInit} from '@angular/core';
import { Media } from '../../types';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MediaDetailsDialogComponent} from '../media-details-dialog/media-details-dialog.component';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  @Input () currentMedia: Media;

  constructor(private dialog: MatDialog, private  tmdbService: TmdbService) { }

  ngOnInit() {
  }

  /**
   * open new dialog with media cast, crew and overview
   */
  openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    // getting media details from TMDB
    this.tmdbService.getMediaById(this.currentMedia.id, this.currentMedia.media_type).subscribe(media => {
      dialogConfig.data = {
        mediaType: this.currentMedia.media_type,
        media
      };
      this.dialog.open(MediaDetailsDialogComponent, dialogConfig);
    });
  }
}
