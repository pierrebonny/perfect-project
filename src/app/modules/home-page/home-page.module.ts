import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { MediaTypeSelectionModule } from '../media-type-selection/media-type-selection.module';
import { MainLayoutModule } from '../main-layout/main-layout.module';
import { HomePageComponent } from './home-page-component/home-page.component';
import { HookComponent } from '../../components/hook/hook.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HookComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MediaTypeSelectionModule,
    MainLayoutModule,
  ]
})
export class HomePageModule { }
