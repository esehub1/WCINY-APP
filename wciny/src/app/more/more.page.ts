import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser/ngx";
import {Router} from "@angular/router";

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  public itemColumns = [
    {
      leftOpt: 'events',
      leftText: 'Events',
      leftIsURL: false,
      leftBackground: 'bg-orange',
      leftIcon: 'calendar',
      rightOpt: 'social',
      rightText: 'Connect',
      rightIsURL: false,
      rightBackground: 'bg-connect',
      rightIcon: ''
    },
    {
      leftOpt: 'radio',
      leftText: 'Domi Radio',
      leftIsURL: true,
      leftBackground: 'bg-domi',
      leftIcon: '',
      rightOpt: 'store',
      rightText: 'Book Store',
      rightIsURL: true,
      rightBackground: 'bg-red',
      rightIcon: 'school'
    },
    {
      leftOpt: 'units',
      leftText: 'Service Units',
      leftIsURL: false,
      leftBackground: 'bg-darken',
      leftIcon: 'flame',
      rightOpt: 'settings',
      rightText: 'Settings',
      rightIsURL: true,
      rightBackground: 'bg-pinkDark',
      rightIcon: 'cog'
    }
  ];

  constructor(private apiCall:DataService, private appBrowser: InAppBrowser, public navCtrl: Router) { }

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  public cordovaBrowse(url : string){
    let target = "_self";
    this.appBrowser.create(url,target,this.options);
  }

  navigate(opt, isURL) {
    let link ="";
    console.log(opt)
    switch (opt) {
      case 'events':
        link = '/events';
        break;
      case 'social':
        link ='/socials';
        break;
      case 'radio':
        link ='http://www.domimedia.org/';
        break;
      case 'store':
        link = 'https://winnerschapelny.org/give';
        break;
      case 'units':
        link = '/units';
        break;
      case 'settings':
        link = '/settings';
        break;
      default:
        link='/home';
        break;
    }
    isURL ? this.cordovaBrowse(link) : this.navCtrl.navigate([link]);

  }

  ngOnInit() {
  }

}
