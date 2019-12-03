import { Component, Input, ChangeDetectorRef, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { Media } from '../../types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MediaDetailsDialogComponent } from '../media-details-dialog/media-details-dialog.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent implements AfterViewChecked {

  @Input () currentMedia: Media;
  @Input () mediaType: string;

  public overviewOverflow: boolean;

  constructor(private dialog: MatDialog, private cdRef: ChangeDetectorRef) {}

  /**
   * open new dialog with media cast, crew and overview
   */
  public openDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.data = {
      mediaType: this.mediaType,
      mediaId: this.currentMedia.id,
    };
    this.dialog.open(MediaDetailsDialogComponent, dialogConfig);
  }

  public isOverflow(elementId: string) {
    const element = document.getElementById(elementId);
    return element && element.clientHeight < element.scrollHeight;
  }

  ngAfterViewChecked() {
    this.overviewOverflow = this.isOverflow('ov_' + this.currentMedia.id);
    this.cdRef.detectChanges();
  }
}
