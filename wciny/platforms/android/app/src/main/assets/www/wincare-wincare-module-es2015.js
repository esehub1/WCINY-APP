(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wincare-wincare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wincare/wincare.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wincare/wincare.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"winners-red\">\n        <ion-text>\n            <div class=\"ion-text-wrap ion-text-end ion-padding\">\n                WINNERS CHAPEL INT'L <br> NEW YORK\n            </div>\n        </ion-text>\n        <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n        </ion-buttons>\n        <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item color=\"light\">\n        <div class=\"ion-text-left\">\n            <h5 style=\"font-weight: bold\">WINNERS CARE PROGRAM</h5>\n        </div>\n    </ion-item>\n    <ion-list>\n        <form [formGroup]=\"wincareForm\">\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">First Name:</ion-label>\n                            <ion-input formControlName=\"Fname\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.Fname.valid && (wincareForm.controls.Fname.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Fname.valid  && (wincareForm.controls.Fname.dirty || submitAttempt)\">\n                            <p>Please enter a valid name.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">Last Name:</ion-label>\n                            <ion-input formControlName=\"Lname\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.Lname.valid && (wincareForm.controls.Lname.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Lname.valid  && (wincareForm.controls.Lname.dirty || submitAttempt)\">\n                            <p>Please enter a valid name.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">Telephone:</ion-label>\n                            <ion-input formControlName=\"Phone\" type=\"tel\"\n                                       [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\"\n                                       [class.invalid]=\"!wincareForm.controls.Phone.valid && (wincareForm.controls.Phone.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Phone.valid  && (wincareForm.controls.Phone.dirty || submitAttempt)\">\n                            <p>Please enter a valid phone number.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">Email:</ion-label>\n                            <ion-input formControlName=\"Email\" type=\"email\"\n                                       [class.invalid]=\"!wincareForm.controls.Email.valid && (wincareForm.controls.Email.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Email.valid  && (wincareForm.controls.Email.dirty || submitAttempt)\">\n                            <p>Please enter a valid email address.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Address:</ion-label>\n                    <ion-input formControlName=\"Address\" type=\"text\"\n                               [class.invalid]=\"!wincareForm.controls.Address.valid && (wincareForm.controls.Address.dirty || submitAttempt)\"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wincareForm.controls.Address.valid  && (wincareForm.controls.Address.dirty || submitAttempt)\">\n                    <p>Please enter a valid address.</p>\n                </ion-item>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">City:</ion-label>\n                            <ion-input formControlName=\"City\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.City.valid && (wincareForm.controls.City.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.City.valid  && (wincareForm.controls.City.dirty || submitAttempt)\">\n                            <p>Please enter a valid city.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">State:</ion-label>\n                            <ion-input formControlName=\"State\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.State.valid && (wincareForm.controls.State.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.State.valid  && (wincareForm.controls.State.dirty || submitAttempt)\">\n                            <p>Please enter a valid state / province.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">Zip code:</ion-label>\n                            <ion-input formControlName=\"Zip\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.Zip.valid && (wincareForm.controls.Zip.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Zip.valid  && (wincareForm.controls.Zip.dirty || submitAttempt)\">\n                            <p>Please enter a valid zip code.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"floating\" color=\"primary\">Country:</ion-label>\n                            <ion-input formControlName=\"Country\" type=\"text\"\n                                       [class.invalid]=\"!wincareForm.controls.Country.valid && (wincareForm.controls.Country.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Country.valid  && (wincareForm.controls.Country.dirty || submitAttempt)\">\n                            <p>Please enter a country.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\"\n                                       style=\"margin-bottom: 10px\">Member?\n                            </ion-label>\n                            <ion-select formControlName=\"Member\" interface=\"action-sheet\">\n                                <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                                <ion-select-option value=\"No\">No</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Member.valid  && (wincareForm.controls.Member.dirty || submitAttempt)\">\n                            <p>Please select an option.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\"\n                                       style=\"margin-bottom: 10px\">Gender\n                            </ion-label>\n                            <ion-select formControlName=\"Gender\" interface=\"action-sheet\">\n                                <ion-select-option value=\"Male\">Male</ion-select-option>\n                                <ion-select-option value=\"Female\">Female</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wincareForm.controls.Gender.valid  && (wincareForm.controls.Gender.dirty || submitAttempt)\">\n                            <p>Please select an option.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\" style=\"margin-bottom: 10px\">\n                        Situation\n                    </ion-label>\n                    <ion-select formControlName=\"Situation\" interface=\"action-sheet\" multiple=\"true\">\n                        <ion-select-option value=\"Widower\">Widow(er)</ion-select-option>\n                        <ion-select-option value=\"Senior Citizen (65yrs and above)\">Senior Citizen (65yrs and above)\n                        </ion-select-option>\n                        <ion-select-option value=\"Single Parent\">Single Parent</ion-select-option>\n                        <ion-select-option value=\"Student Visa\">Student Visa</ion-select-option>\n                        <ion-select-option value=\"Low Income\">Low Income</ion-select-option>\n                        <ion-select-option value=\"Unemployment\">Unemployment</ion-select-option>\n                        <ion-select-option value=\"Undocumented\">Undocumented</ion-select-option>\n                        <ion-select-option value=\"Other\">Other</ion-select-option>\n\n                    </ion-select>\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wincareForm.controls.Situation.valid  && (wincareForm.controls.Situation.dirty || submitAttempt)\">\n                    <p>Please select one or more option(s).</p>\n                </ion-item>\n                <section>\n                    <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n                        Submit\n                    </ion-button>\n                </section>\n        </form>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/wincare/wincare-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/wincare/wincare-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WincarePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WincarePageRoutingModule", function() { return WincarePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wincare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wincare.page */ "./src/app/wincare/wincare.page.ts");




const routes = [
    {
        path: '',
        component: _wincare_page__WEBPACK_IMPORTED_MODULE_3__["WincarePage"]
    }
];
let WincarePageRoutingModule = class WincarePageRoutingModule {
};
WincarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WincarePageRoutingModule);



/***/ }),

/***/ "./src/app/wincare/wincare.module.ts":
/*!*******************************************!*\
  !*** ./src/app/wincare/wincare.module.ts ***!
  \*******************************************/
/*! exports provided: WincarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WincarePageModule", function() { return WincarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wincare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wincare-routing.module */ "./src/app/wincare/wincare-routing.module.ts");
/* harmony import */ var _wincare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wincare.page */ "./src/app/wincare/wincare.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");








let WincarePageModule = class WincarePageModule {
};
WincarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wincare_routing_module__WEBPACK_IMPORTED_MODULE_5__["WincarePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_wincare_page__WEBPACK_IMPORTED_MODULE_6__["WincarePage"]]
    })
], WincarePageModule);



/***/ }),

/***/ "./src/app/wincare/wincare.page.scss":
/*!*******************************************!*\
  !*** ./src/app/wincare/wincare.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\nion-input, ion-select, ion-textarea {\n  padding: 5px 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\np {\n  color: #ea6153;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL3dpbmNhcmUvd2luY2FyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dpbmNhcmUvd2luY2FyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBOztFQUVFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3dpbmNhcmUvd2luY2FyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5we1xuICBjb2xvcjogI2VhNjE1Mztcbn1cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiIsInAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbGFiZWwsIC5zZWxlY3QtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbnAge1xuICBjb2xvcjogI2VhNjE1Mztcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/wincare/wincare.page.ts":
/*!*****************************************!*\
  !*** ./src/app/wincare/wincare.page.ts ***!
  \*****************************************/
/*! exports provided: WincarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WincarePage", function() { return WincarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let WincarePage = class WincarePage {
    constructor(nCtrl, toastCtrl, apiCall, formBuilder) {
        this.nCtrl = nCtrl;
        this.toastCtrl = toastCtrl;
        this.apiCall = apiCall;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
    }
    save() {
        this.submitAttempt = true;
        if (!this.wincareForm.valid) {
            console.log("INVALID WINCARE FORM!");
        }
        else {
            console.log(this.wincareForm.value);
            let postData = this.wincareForm.value;
            postData.Situation = postData.Situation.join("|");
            postData.opt = 'wincare';
            console.log(postData);
            /*      this.presentToast('Prayer request successfully submitted');*/
            // submit form details add addItem(userId)
            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(data => {
                console.log(data);
                if (data['status'] === 'ko') {
                    this.presentToast('There was a problem with your submission: ' + data['error_description']);
                }
                else {
                    this.presentToast('Winners Care Program Form successfully submitted');
                    this.wincareForm.reset();
                }
            }, err => this.presentToast('There was an error with your Winners Care Program submission: ' + err), () => console.log("Winners Care Program submission Completed"));
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
            toast.onDidDismiss().then((val) => {
                console.log('Toast Dismissed ' + val);
            });
        });
    }
    ngOnInit() {
        this.wincareForm = this.formBuilder.group({
            Fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(300)])),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)])),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)])),
            Zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)])),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Member: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            Situation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
        });
    }
};
WincarePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
WincarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wincare',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wincare.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wincare/wincare.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wincare.page.scss */ "./src/app/wincare/wincare.page.scss")).default]
    })
], WincarePage);



/***/ })

}]);
//# sourceMappingURL=wincare-wincare-module-es2015.js.map