import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
  items = [];
  public pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      isURL: false
    },{
      title: 'WOFBI',
      url: '/events',
      icon: 'school',
      isURL: false
    },
    {
      title: 'Winners Care',
      url: '/settings',
      icon: 'rose',
      isURL: false
    },
    {
      title: 'Get Connected',
      url: '/socials',
      icon: 'wifi',
      isURL: false
    },
    {
      title: 'Transport Request',
      url: '/notes',
      icon: 'bus',
      isURL: false
    },  {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications',
      isURL: false
    },
    {
      title: 'Domi Radio',
      url: 'http://www.domimedia.org/',
      icon: 'mic',
      isURL: true
    },
    {
      title: 'Bookstore',
      url: 'https://winnerschapelny.org/store',
      icon: 'library',
      isURL: true
    },
    {
      title: 'Resources',
      url: '/settings',
      icon: 'bulb',
      isURL: false
    },
    {
      title: 'Bible Study Note',
      url: '/notes',
      icon: 'tv',
      isURL: false
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;

      }
    });
  }

  ngOnInit() {
  }

}
