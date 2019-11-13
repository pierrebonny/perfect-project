import { Component, Input, OnInit } from '@angular/core';
import { Media, MediaBestCredits } from 'src/app/types';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})

export class HookComponent implements OnInit {

  @Input () topMedia: Media;
  @Input () mediaType: string;

  public currentMedia$: Observable<Media>;
  public currentMediaCredits$: Observable<MediaBestCredits>;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.currentMediaCredits$ = this.tmdbService.getMediaBestCredits(this.topMedia.id, this.mediaType);
    this.currentMedia$ = this.tmdbService.getMediaById(this.topMedia.id, this.mediaType);
  }

}
