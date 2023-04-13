(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayer-prayer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer/prayer.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prayer/prayer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/prayer.png\" alt=\"\">\n    <form [formGroup]=\"prayerForm\">\n      <ion-item>\n        <ion-label position=\"stacked\" >First Name:</ion-label>\n        <ion-input formControlName=\"firstname\" type=\"text\" [class.invalid]=\"!prayerForm.controls.firstname.valid && (prayerForm.controls.firstname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!prayerForm.controls.firstname.valid  && (prayerForm.controls.firstname.dirty || submitAttempt)\">\n        <p>Please enter your first name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Last Name:</ion-label>\n        <ion-input formControlName=\"lastname\" type=\"text\" [class.invalid]=\"!prayerForm.controls.lastname.valid && (prayerForm.controls.lastname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!prayerForm.controls.lastname.valid  && (prayerForm.controls.lastname.dirty || submitAttempt)\">\n        <p>Please enter your last name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email:</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [class.invalid]=\"!prayerForm.controls.email.valid && (prayerForm.controls.email.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!prayerForm.controls.email.valid  && (prayerForm.controls.email.dirty || submitAttempt)\">\n        <p>Please enter a valid email address.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Phone:</ion-label>\n        <ion-input formControlName=\"phone\" [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\" type=\"tel\" [class.invalid]=\"!prayerForm.controls.phone.valid && (prayerForm.controls.phone.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!prayerForm.controls.phone.valid  && (prayerForm.controls.phone.dirty || submitAttempt)\">\n        <p>Please enter your phone number.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Prayer Request:</ion-label>\n        <ion-textarea autoGrow=\"true\" formControlName=\"prayer\" [class.invalid]=\"!prayerForm.controls.prayer.valid && (prayerForm.controls.prayer.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!prayerForm.controls.prayer.valid  && (prayerForm.controls.prayer.dirty || submitAttempt)\">\n        <p>Please enter your prayer request.</p>\n      </ion-item>\n      <ion-item [hidden]=\"true\">\n        <ion-label position=\"floating\">UserId:</ion-label>\n        <ion-input formControlName=\"approved\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n              Submit\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" [routerLink]=\"['','tabs']\" routerDirection=\"back\">\n              Cancel\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/prayer/prayer-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/prayer/prayer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PrayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerPageRoutingModule", function() { return PrayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prayer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prayer.page */ "./src/app/prayer/prayer.page.ts");




const routes = [
    {
        path: '',
        component: _prayer_page__WEBPACK_IMPORTED_MODULE_3__["PrayerPage"]
    }
];
let PrayerPageRoutingModule = class PrayerPageRoutingModule {
};
PrayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrayerPageRoutingModule);



/***/ }),

/***/ "./src/app/prayer/prayer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/prayer/prayer.module.ts ***!
  \*****************************************/
/*! exports provided: PrayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerPageModule", function() { return PrayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prayer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prayer-routing.module */ "./src/app/prayer/prayer-routing.module.ts");
/* harmony import */ var _prayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayer.page */ "./src/app/prayer/prayer.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");








let PrayerPageModule = class PrayerPageModule {
};
PrayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prayer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrayerPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_prayer_page__WEBPACK_IMPORTED_MODULE_6__["PrayerPage"]]
    })
], PrayerPageModule);



/***/ }),

/***/ "./src/app/prayer/prayer.page.scss":
/*!*****************************************!*\
  !*** ./src/app/prayer/prayer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\nion-input, ion-select, ion-textarea {\n  padding: 5px 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL3ByYXllci9wcmF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wcmF5ZXIvcHJheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUVFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJheWVyL3ByYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4iLCJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/prayer/prayer.page.ts":
/*!***************************************!*\
  !*** ./src/app/prayer/prayer.page.ts ***!
  \***************************************/
/*! exports provided: PrayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerPage", function() { return PrayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let PrayerPage = class PrayerPage {
    constructor(apiCall, toastCtrl, formBuilder) {
        this.apiCall = apiCall;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
    }
    save() {
        this.submitAttempt = true;
        if (!this.prayerForm.valid) {
            console.log("INVALID PRAYER FORM!");
        }
        else {
            console.log(this.prayerForm.value);
            let postData = this.prayerForm.value;
            postData.opt = 'prayers';
            /*      this.presentToast('Prayer request successfully submitted');*/
            // submit form details add addItem(userId)
            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(data => {
                console.log(data);
                if (data['status'] === 'ko') {
                    this.presentToast('There was a problem with your submission: ' + data['error_description']);
                }
                else {
                    this.presentToast('Prayer successfully submitted');
                }
            }, err => this.presentToast('There was an error with your Prayer request submission: ' + err), () => console.log("Prayer Request submission Completed"));
        }
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            toast.onDidDismiss().then((val) => {
                console.log('Toast Dismissed');
            });
        });
    }
    ngOnInit() {
        let UserId = 0; //localStorage.getItem("ProfileId");
        this.prayerForm = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            prayer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            approved: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](UserId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]))
        });
    }
};
PrayerPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PrayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prayer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer/prayer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prayer.page.scss */ "./src/app/prayer/prayer.page.scss")).default]
    })
], PrayerPage);



/***/ })

}]);
//# sourceMappingURL=prayer-prayer-module-es2015.js.map