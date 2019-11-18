import { Component, Input } from '@angular/core';
import { Media } from '../../types';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss']
})
export class MediaGridComponent {

  @Input () mediasList: Array<Media>;
  @Input () mediasType: string;

}
