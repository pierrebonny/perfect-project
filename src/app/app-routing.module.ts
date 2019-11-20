import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MediaResearchPageComponent } from './pages/media-research-page/media-research-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';



const routes: Routes = [
  { path: 'mediaResearch', component: MediaResearchPageComponent },
  { path: 'topTrendingMedias', component: HomePageComponent },
  { path: 'seenMedias', component: UserListPageComponent, data: { listName: 'seen' } },
  { path: 'mustSeeMedias', component: UserListPageComponent, data: { listName: 'mustSee' } },
  { path: '', redirectTo: '/topTrendingMedias', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
