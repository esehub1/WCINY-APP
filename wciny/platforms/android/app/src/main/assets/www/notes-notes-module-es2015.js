(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/bible.jpg\" alt=\"\">\n    <ion-item color=\"light\">\n      <ion-button fill=\"clear\" (click)='goBack()'>\n        <ion-icon slot=\"icon-only\" name=\"caret-back-circle-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n      <div class=\"ion-text-center center-me\">\n        <h4>{{getMon(dates) +' '+dates.getFullYear()}}</h4>\n      </div>\n      <ion-button slot=\"end\" fill=\"clear\" (click)='goNext()'>\n        <ion-icon slot=\"icon-only\" name=\"caret-forward-circle-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <div class=\"ion-padding-top\" >\n      <ion-button color=\"light\" expand=\"full\" (click)=\"addNew()\"> <h4>Add New Note</h4></ion-button>\n    </div>\n\n    <div *ngIf=\"showNotes\">\n      <ion-card *ngFor=\"let note of notes\">\n\n        <ion-item>\n          <ion-avatar>\n            <bj-avatar  charcount=\"3\" height=\"80px\" width=\"80px\" numdata=\"{{getNum(note.date)}}\" textdata=\"{{getDay(note.date)}}\" shape=\"round\"></bj-avatar>\n          </ion-avatar>\n          <h1 class=\"ion-margin-start ion-text-capitalize\">{{note.topic}}</h1>\n        </ion-item>\n\n        <ion-card-content>\n          <p>{{note.content}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"winners-red\" (click)=\"editMe(note)\">\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <div>Edit</div>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"light\" (click)=\"onItemDelete(note)\">\n              <ion-icon slot=\"start\" name=\"remove-circle\"></ion-icon>\n              <div>Delete</div>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <ion-button color=\"dark\" (click)=\"shareMe(note)\">\n              <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n              <div>Share</div>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n<!--      <ion-item *ngFor=\"let item of notes\" class=\"card item-avatar item-text-wrap\" (click)=\"itemTapped(item)\">\n        &lt;!&ndash; <img ng-src=\"http://7thcolonnade.com/{{item.imageSmall}}\" alt=\"{{item.name}} Photo\"> &ndash;&gt;\n        <ion-avatar slot=\"start\">\n          <bj-avatar  charcount=\"3\" height=\"100px\" width=\"100px\" numdata=\"{{getNum(item.date)}}\" textdata=\"{{getDay(item.date)}}\" shape=\"round\"></bj-avatar>\n        </ion-avatar>\n        <ion-label>\n          <h4>{{item.topic}}</h4>\n       &lt;!&ndash;   <h4>When: {{doDate(item.event_date, item.event_time)  | date:'short' }}</h4>&ndash;&gt;\n          <h4>Where: {{item.content}}</h4>\n        </ion-label>\n      </ion-item>-->\n    </div>\n    <ion-item *ngIf=\"!showNotes\"  >\n      <h3 style=\"text-align:center;\">There are no archived notes to show</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<!--  <p *ngIf=\"submitAttempt\" style=\"color: #ea6153;\">Please fill out all details accurately.</p>-->\n  <ion-list lines=\"none\" class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/bible.jpg\" alt=\"\">\n    <ion-item color=\"light\">\n      <div class=\"ion-text-center center-me\">\n        <h4>New Note</h4>\n      </div>\n    </ion-item>\n    <form [formGroup]=\"noteForm\">\n      <ion-item>\n        <ion-label position=\"stacked\">Title:</ion-label>\n        <ion-input formControlName=\"topic\" type=\"text\" [class.invalid]=\"!noteForm.controls.topic.valid && (noteForm.controls.topic.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!noteForm.controls.topic.valid  && (noteForm.controls.topic.dirty || submitAttempt)\">\n        <p>Please enter a valid title.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Content:</ion-label>\n        <ion-textarea formControlName=\"content\" type=\"text\" [class.invalid]=\"!noteForm.controls.content.valid && (noteForm.controls.content.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!noteForm.controls.content.valid  && (noteForm.controls.content.dirty || submitAttempt)\">\n        <p>Content can not be empty.</p>\n      </ion-item>\n      <ion-item [hidden]=\"true\">\n        <ion-label position=\"stacked\">ID:</ion-label>\n        <ion-input formControlName=\"id\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item [hidden]=\"true\">\n        <ion-label position=\"stacked\">Date Created:</ion-label>\n        <ion-input formControlName=\"date\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"dismiss()\">\n              Go Back\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col>\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" (click)=\"dbSave()\">\n              Save Note\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/notes/notes-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/notes/notes-routing.module.ts ***!
  \***********************************************/
/*! exports provided: NotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageRoutingModule", function() { return NotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.page */ "./src/app/notes/notes.page.ts");




const routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"]
    }
];
let NotesPageRoutingModule = class NotesPageRoutingModule {
};
NotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotesPageRoutingModule);



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-routing.module */ "./src/app/notes/notes-routing.module.ts");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.page */ "./src/app/notes/notes.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/popover.module */ "./src/app/popover/popover.module.ts");









let NotesPageModule = class NotesPageModule {
};
NotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotesPageRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _popover_popover_module__WEBPACK_IMPORTED_MODULE_8__["PopoverPageModule"]
        ],
        declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]]
    })
], NotesPageModule);



/***/ }),

/***/ "./src/app/notes/notes.page.scss":
/*!***************************************!*\
  !*** ./src/app/notes/notes.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/notes/notes.page.ts":
/*!*************************************!*\
  !*** ./src/app/notes/notes.page.ts ***!
  \*************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/info.service */ "./src/app/services/info.service.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.page */ "./src/app/popover/popover.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");









let NotesPage = class NotesPage {
    //selectedItem : any;
    constructor(navCtrl, apiCall, sqlite, toastCtrl, infoService, modalCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.apiCall = apiCall;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.infoService = infoService;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.notes = [];
    }
    getNotes() {
        let mth = ("0" + (this.dates.getMonth() + 1)).slice(-2);
        //SELECT strftime('%s','now') SELECT id, date, topic, content FROM notes WHERE strftime('%m',date) > ? ORDER BY id DESC
        console.log(mth);
        this.sqlite.create({
            name: 'wciny.db',
            location: 'default'
        })
            .then((db) => {
            db.executeSql("SELECT id, date, topic, content FROM notes WHERE strftime('%m',date) = ? ORDER BY id DESC", [mth])
                .then((data) => {
                this.showNotes = true; //!!(Array.isArray(data.rows) && data.rows.length > 0);
                this.notes = [];
                if (data.rows.length > 0) {
                    console.log(data.rows);
                    for (let i = 0; i < data.rows.length; i++) {
                        this.notes.push(data.rows.item(i));
                    }
                }
            })
                .catch(e => console.log(e));
        })
            .catch(e => console.log(e));
    }
    shareMe(item) {
        let options = {
            message: 'Note: \n' + item.content,
            subject: item.topic,
            files: ['www/assets/img/logo22.png'],
            url: 'https://www.winnerschapelny.org',
            chooserTitle: 'WCINY' // Android only, you can override the default share sheet title
        };
        this.socialSharing.shareWithOptions(options).catch((err) => {
            console.log(err);
        });
    }
    editMe(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const modal = yield this.modalCtrl.create({
                component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'item': item
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            this.getNotes();
            console.log(data);
        });
    }
    addNew() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pageModal = yield this.modalCtrl.create({
                component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]
            });
            yield pageModal.present();
            const { data } = yield pageModal.onDidDismiss();
            this.getNotes();
            console.log(data);
        });
    }
    onModalDismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
    onItemDelete(item) {
        this.sqlite.create({
            name: 'wciny.db',
            location: 'default'
        })
            .then((db) => {
            db.executeSql('DELETE FROM notes WHERE id = ?', [item.id])
                .then((data) => {
                console.log(data);
                this.getNotes();
                this.presentToast('Note successfully deleted');
            })
                .catch(e => console.log(e));
        })
            .catch(e => console.log(e));
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            yield toast.present();
        });
    }
    goNext() {
        this.notes = [];
        this.dates = new Date(this.dates);
        this.dates.setMonth(this.dates.getMonth() + 1);
        this.getNotes();
        console.log(this.dates);
    }
    goBack() {
        this.notes = [];
        this.dates = new Date(this.dates);
        this.dates.setMonth(this.dates.getMonth() - 1);
        this.getNotes();
    }
    getDay(str) {
        let days = ['SUNDAY', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let strDate = (str instanceof Date) ? str : new Date(str);
        return days[strDate.getUTCDay()];
    }
    getMon(str) {
        let strDate = (str instanceof Date) ? str : new Date(str);
        let months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        return months[strDate.getMonth()];
    }
    getNum(str) {
        let strDate = (str instanceof Date) ? str : new Date(str);
        return strDate.getUTCDate();
    }
    ngOnInit() {
        this.dates = new Date();
        this.getNotes();
    }
};
NotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_info_service__WEBPACK_IMPORTED_MODULE_4__["InfoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] }
];
NotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notes.page.scss */ "./src/app/notes/notes.page.scss")).default]
    })
], NotesPage);



/***/ }),

/***/ "./src/app/popover/popover-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/popover/popover-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function() { return PopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.page */ "./src/app/popover/popover.page.ts");




const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
    }
];
let PopoverPageRoutingModule = class PopoverPageRoutingModule {
};
PopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopoverPageRoutingModule);



/***/ }),

/***/ "./src/app/popover/popover.module.ts":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-routing.module */ "./src/app/popover/popover-routing.module.ts");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "./src/app/popover/popover.page.ts");







let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "./src/app/popover/popover.page.scss":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/popover/popover.page.ts":
/*!*****************************************!*\
  !*** ./src/app/popover/popover.page.ts ***!
  \*****************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");





let PopoverPage = class PopoverPage {
    constructor(toastCtrl, sqlite, modalCtrl, formBuilder) {
        this.toastCtrl = toastCtrl;
        this.sqlite = sqlite;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
    }
    dbSave() {
        this.submitAttempt = true;
        if (!this.noteForm.valid) {
            console.log("INVALID DETAILS FORM!");
            console.log(this.noteForm.value);
            //this.signupSlider.slideTo(0);
        }
        else {
            console.log("success!");
            console.log(this.noteForm.value);
            this.postData = this.noteForm.value;
            this.postData.date = new Date().toISOString().slice(0, 10);
            this.sqlite.create({
                name: 'wciny.db',
                location: 'default'
            })
                .then((db) => {
                if (this.postData.id > 0) {
                    db.executeSql('UPDATE notes SET topic =?, content=? WHERE id = ?', [this.postData.topic, this.postData.content, this.postData.id])
                        .then(() => {
                        this.presentToast('Note Successfully saved').then(() => {
                            this.dismiss();
                        });
                    })
                        .catch(e => console.log(e));
                }
                else {
                    db.executeSql('INSERT INTO notes (date, topic, content) VALUES (?,?,?)', [this.postData.date, this.postData.topic, this.postData.content])
                        .then(() => {
                        this.presentToast('Note Successfully saved').then(() => {
                            this.dismiss();
                        });
                    })
                        .catch(e => console.log(e));
                }
            })
                .catch(e => {
                console.log(e);
            });
        }
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            yield toast.present();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true,
            'item': this.postData
        });
    }
    ngOnInit() {
        this.item = (this.item == null) ? { id: 0, topic: "", content: "", date: "" } : this.item;
        console.log(this.item);
        this.noteForm = this.formBuilder.group({
            topic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item['topic'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item['content'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item['id'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(5)])),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item['date'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]))
        });
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopoverPage.prototype, "item", void 0);
PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.page.scss */ "./src/app/popover/popover.page.scss")).default]
    })
], PopoverPage);



/***/ })

}]);
//# sourceMappingURL=notes-notes-module-es2015.js.map