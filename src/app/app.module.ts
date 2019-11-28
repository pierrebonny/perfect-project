import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {
  MatTabsModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule } from './modules/user-list/user-list.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { MediaResearchPageModule } from './modules/media-research-page/media-research-page.module';

import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    UserListModule,
    HomePageModule,
    MatTabsModule,
    MediaResearchPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
