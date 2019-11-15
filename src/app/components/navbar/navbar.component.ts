import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  private avalaibleRoutes = ['topTrendingMedias', 'mediaResearch'];

  public currentTabIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    switch (window.location.pathname) {
      case '/mediaResearch':
        this.currentTabIndex = 1;
        break;
      default:
        this.currentTabIndex = 0;
      }
  }

  public changePage(event: MatTabChangeEvent) {
    this.router.navigate([this.avalaibleRoutes[event.index]]);
  }

}
