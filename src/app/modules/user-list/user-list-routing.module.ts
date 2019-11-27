import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPageComponent } from './user-list-component/user-list-page.component';

const routes: Routes = [
  { path: 'seenMedias', component: UserListPageComponent, data: { listName: 'seen' } },
  { path: 'mustSeeMedias', component: UserListPageComponent, data: { listName: 'mustSee' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
