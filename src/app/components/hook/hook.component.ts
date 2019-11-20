import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Media, MediaBestCredits } from 'src/app/types';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss']
})

export class HookComponent implements OnChanges {

  @Input () topMedia: Media;
  @Input () mediaType: string;

  public currentMedia$: Observable<Media>;
  public currentMediaCredits$: Observable<MediaBestCredits>;

  constructor(private tmdbService: TmdbService) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (!changes.topMedia) {
      return;
    }

    this.updateComponent();
  }

  public updateComponent() {
    this.currentMedia$ = this.tmdbService.getMediaById(this.topMedia.id, this.mediaType);
    this.currentMediaCredits$ = this.tmdbService.getMediaBestCredits(this.topMedia.id, this.mediaType);
  }

}
