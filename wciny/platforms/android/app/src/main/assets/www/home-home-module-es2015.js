(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col (click)=\"navigate('prayer',false)\" size=\"5\"><h4 class=\"ion-text-center\">Prayer Request</h4></ion-col>\n    <ion-col size=\"1\"><h4 class=\"ion-text-right\">|</h4></ion-col>\n    <ion-col (click)=\"navigate('testimony',false)\" size=\"6\"><h4 class=\"ion-text-center\">Submit Testimony</h4></ion-col>\n  </ion-row>\n  <ion-row class=\"small-pad-bott\">\n    <div class=\"flexItemWidth\">\n    <ion-slides [options]=\"{autoplay:true, slidesPerView:1, speed:500}\" pager=\"true\">\n      <ion-slide *ngFor=\"let s of itemSlide; let i = index\">\n        <img src=\"assets/img/{{s.pix}}\" alt=\"\">\n      </ion-slide>\n    </ion-slides>\n    </div>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"small-pad-right\" size=\"6\">\n    <div class=\"bg-wsf flexItemBig\" (click)=\"navigate('wsf',true)\">\n\n    </div>\n    </ion-col>\n    <ion-col class=\"small-pad-left\" size=\"6\">\n      <div class=\"bg-prayer flexItemBig\" (click)=\"navigate('covenant',false)\">\n\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <div class=\"bg-live flexItemWide\" (click)=\"navigate('live',true)\">\n\n      </div>\n  </ion-row>\n  <ion-row>\n    <div class=\"bg-below flexItemWide\" (click)=\"navigate('below',false)\">\n\n    </div>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/info.service */ "./src/app/services/info.service.ts");


// import { NavController} from 'ionic-angular';







let HomePage = class HomePage {
    constructor(apiCall, appBrowser, navCtrl, storage, sqlite, infoService, push) {
        this.apiCall = apiCall;
        this.appBrowser = appBrowser;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.sqlite = sqlite;
        this.infoService = infoService;
        this.push = push;
        this.itemSlide = [
            {
                pix: 'slider.png'
            }
            // },
            // {
            //     pix: "slide2.png"
            // }
        ];
        this.options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    systemBrowse(url) {
        const target = '_system';
        this.appBrowser.create(url, target, this.options);
    }
    appBrowse(url) {
        const target = '_blank';
        this.appBrowser.create(url, target, this.options);
    }
    cordovaBrowse(url) {
        const target = '_self';
        this.appBrowser.create(url, target, { location: 'no' });
    }
    navigate(opt, isURL) {
        let link = '';
        console.log(opt);
        switch (opt) {
            case 'event':
                link = '/events';
                break;
            case 'connect':
                link = '/socials';
                break;
            case 'contacts':
                link = '/contacts';
                break;
            case 'covenant':
                link = '/covenant';
                break;
            case 'give':
            case 'below':
            case 'radio':
                this.infoService.setData(2, opt);
                link = '/give/2';
                break;
            case 'wsf':
                link = 'https://wsf4u.com';
                break;
            case 'live':
                link = 'https://www.youtube.com/channel/UCcaUxWoaZRUhnwFfBkXTLPw';
                break;
            case 'testimony':
                link = '/testimony';
                break;
            case 'devotions':
                link = '/devotions';
                break;
            case 'prayer':
                link = '/prayer';
                break;
            default:
                link = '/home';
                break;
        }
        isURL ? this.systemBrowse(link) : this.navCtrl.navigate([link]);
    }
    createDbs() {
        this.sqlite.create({
            name: 'wciny.db',
            location: 'default'
        })
            .then((db) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS messages (id integer primary key, date text, title text, message text)', [])
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS notes (id integer primary key, date text, topic text, content text)', [])
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
        })
            .catch(e => console.log(e));
    }
    setPushThings() {
        const params = 'opt=notifications';
        this.apiCall.fetchData('get/nubia/pull/', params, false).subscribe(data => {
            // console.log(data['data']);
            /*Start*/
            const upData = data['data'];
            const env = this;
            if (upData.length > 0) { /*Do we have Push settings from server?*/
                this.storage.get('pushSettings')
                    .then((dat) => {
                    // console.log(upData);
                    const downData = (dat === null) ? [] : JSON.parse(dat);
                    // downData[0] = "Nothing"
                    /*Update Push settings*/
                    Object.keys(upData).forEach((k) => {
                        const pik = downData.filter((o) => o[upData[k].id])[0];
                        // console.log(pik);
                        if (env.push.hasPermission() && upData[k].Enabled) { // Subscribe to Topic
                            env.push.subscribeToTopic((upData[k].Group_Name).replace(/\s/g, '-'));
                        }
                        if (typeof pik !== 'undefined') {
                            if (pik[upData[k].id].Group_Name !== upData[k].Group_Name) {
                                pik[upData[k].id].Group_Name = upData[k].Group_Name;
                                // downData.push({[[upData[k]['id']]['Group_Name']] : upData[k]['Group_Name']});
                                // /downData[upData[k]['id']]['Group_Name'] = upData[k]['Group_Name'];
                            }
                        }
                        else {
                            // downData[upData[k]['id']] = upData[k];
                            downData.push({ [upData[k].id]: upData[k] });
                        }
                    });
                    // console.log(downData);
                    env.storage.set('pushSettings', JSON.stringify(downData));
                }, (error) => {
                    console.log('No Push Settings Stored ' + error);
                });
            }
        }, err => console.error(err), () => console.log('Fetch Notifications Completed'));
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        /*Get Notification Data and Subscribe to topics here*/
        console.log('Now we Did Enter');
        this.createDbs();
        this.setPushThings();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"] },
    { type: _services_info_service__WEBPACK_IMPORTED_MODULE_8__["InfoService"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__["FCM"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map