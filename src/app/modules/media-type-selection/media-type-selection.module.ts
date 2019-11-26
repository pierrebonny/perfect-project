import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaTypeSelectionComponent } from '../../components/media-type-selection/media-type-selection.component';

@NgModule({
  declarations: [ MediaTypeSelectionComponent, ],
  imports: [
    CommonModule
  ],
  exports: [ MediaTypeSelectionComponent, ],
})
export class MediaTypeSelectionModule { }
