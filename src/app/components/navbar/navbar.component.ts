import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  private avalaibleRoutes = ['topTrendingMedias', 'mediaResearch', 'seenMedias', 'mustSeeMedias'];

  public currentTabIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    switch (window.location.pathname) {
      case '/mediaResearch':
        this.currentTabIndex = 1;
        break;
      case '/seenMedias':
        this.currentTabIndex = 2;
        break;
      case '/mustSeeMedias':
        this.currentTabIndex = 3;
        break;
      default:
        this.currentTabIndex = 0;
      }
  }

  public changePage(event: MatTabChangeEvent) {
    this.router.navigate([this.avalaibleRoutes[event.index]]);
  }

}
