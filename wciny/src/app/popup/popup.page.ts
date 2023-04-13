import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
  clipSrc;
  constructor() { }

  ngOnInit() {

    this.clipSrc = 'https://www.youtube.com/c/WinnersChapelIntlNY'

  }

}
