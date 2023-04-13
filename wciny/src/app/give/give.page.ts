import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-give',
    templateUrl: './give.page.html',
    styleUrls: ['./give.page.scss'],
})
export class GivePage implements OnInit {
    clipSrc: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        if (this.route.snapshot.data.special) {
            const opt = this.route.snapshot.data.special;
            switch (opt) {
                case 'give':
                    this.clipSrc = 'https://forms.ministryforms.net/embed.aspx?formId=1ff80167-7159-4b4e-ae46-58674c3c5d9c';
                    break;
                case 'store':
                    this.clipSrc = 'https://winnerschapelny.org/store';
                    break;
                case 'radio':
                    this.clipSrc = 'http://www.domimedia.org/';
                    break;
                case 'live':
                    this.clipSrc = 'https://www.youtube.com/channel/UCcaUxWoaZRUhnwFfBkXTLPw';
                    break;
                case 'below':
                    this.clipSrc =  'https://winnerschapelny.org/get-connected/join-the-team';
                    break;
                default:
                    this.clipSrc = 'https://forms.ministryforms.net/embed.aspx?formId=1ff80167-7159-4b4e-ae46-58674c3c5d9c';
                    break;

            }
            console.log(this.clipSrc);
        }
    }
}
