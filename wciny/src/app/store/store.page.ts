import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  clipSrc: string;

  constructor() { }

  ngOnInit() {
    this.clipSrc = 'https://forms.ministryforms.net/embed.aspx?formId=1ff80167-7159-4b4e-ae46-58674c3c5d9c'
  }

}
