import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MediaResearchPageRoutingModule } from './media-research-page-routing.module';
import { MediaResearchPageComponent } from './media-research-page-component/media-research-page.component';
import { MainLayoutModule } from '../main-layout/main-layout.module';
import { MediaTypeSelectionModule } from '../media-type-selection/media-type-selection.module';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

import {
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [
    MediaResearchPageComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    MediaResearchPageRoutingModule,
    MediaTypeSelectionModule,
    MainLayoutModule,
    MatIconModule,
    FormsModule,
  ]
})
export class MediaResearchPageModule { }
