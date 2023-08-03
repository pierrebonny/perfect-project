import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/topTrendingMedias', pathMatch: 'full' },
  { path: 'userList', loadChildren: () => import('./modules/user-list/user-list.module').then(m => m.UserListModule) },
  { path: 'topTrendingMedias', loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule) },
  {
    path: 'mediaResearch',
    loadChildren: () => import('./modules/media-research-page/media-research-page.module').then(m => m.MediaResearchPageModule),
  },
  { path: '**', redirectTo: 'topTrendingMedias' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
