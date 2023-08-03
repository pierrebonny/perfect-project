import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  private avalaibleRoutes = ['topTrendingMedias', 'mediaResearch', 'userList/seenMedias', 'userList/mustSeeMedias'];

  public currentTabIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    switch (window.location.pathname) {
      case '/mediaResearch':
        this.currentTabIndex = 1;
        break;
      case '/userList/seenMedias':
        this.currentTabIndex = 2;
        break;
      case '/userList/mustSeeMedias':
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
