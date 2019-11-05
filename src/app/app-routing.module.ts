import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';



const routes: Routes = [
  { path: 'topTrendingMedias', component: HomePageComponent },
  { path: '', redirectTo: '/topTrendingMedias', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }