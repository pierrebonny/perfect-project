import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaTypeSelectionModule } from '../media-type-selection/media-type-selection.module';
import { MainLayoutModule } from '../main-layout/main-layout.module';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListPageComponent } from './user-list-component/user-list-page.component';


@NgModule({
  declarations: [
    UserListPageComponent,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MediaTypeSelectionModule,
    MainLayoutModule,
  ]
})
export class UserListModule { }
