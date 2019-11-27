import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaResearchPageComponent } from './media-research-page-component/media-research-page.component';

const routes: Routes = [{ path: '', component: MediaResearchPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaResearchPageRoutingModule { }
