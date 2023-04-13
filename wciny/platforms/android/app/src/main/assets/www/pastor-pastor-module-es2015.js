(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pastor-pastor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">SCHEDULE APPOINTMENT</h5>\n    </div>\n  </ion-item>\n  <ion-list class=\"remove-top\">\n <!--   <img class=\"middlelogo\" src=\"assets/img/prayer.png\" alt=\"\">-->\n    <form [formGroup]=\"scheduleForm\">\n      <ion-item>\n        <ion-label position=\"stacked\" >First Name:</ion-label>\n        <ion-input formControlName=\"fname\" type=\"text\" [class.invalid]=\"!scheduleForm.controls.fname.valid && (scheduleForm.controls.fname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.fname.valid  && (scheduleForm.controls.fname.dirty || submitAttempt)\">\n        <p>Please enter your first name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Last Name:</ion-label>\n        <ion-input formControlName=\"lname\" type=\"text\" [class.invalid]=\"!scheduleForm.controls.lname.valid && (scheduleForm.controls.lname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.lname.valid  && (scheduleForm.controls.lname.dirty || submitAttempt)\">\n        <p>Please enter your last name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email:</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [class.invalid]=\"!scheduleForm.controls.email.valid && (scheduleForm.controls.email.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.email.valid  && (scheduleForm.controls.email.dirty || submitAttempt)\">\n        <p>Please enter a valid email address.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Phone:</ion-label>\n        <ion-input formControlName=\"phone\" [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\" type=\"tel\" [class.invalid]=\"!scheduleForm.controls.phone.valid && (scheduleForm.controls.phone.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.phone.valid  && (scheduleForm.controls.phone.dirty || submitAttempt)\">\n        <p>Please enter your phone number.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Purpose / Information:</ion-label>\n        <ion-textarea autoGrow=\"true\" formControlName=\"comment\" [class.invalid]=\"!scheduleForm.controls.comment.valid && (scheduleForm.controls.comment.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.comment.valid  && (scheduleForm.controls.comment.dirty || submitAttempt)\">\n        <p>Please enter purpose / information.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Best Contact Date:</ion-label>\n        <ion-datetime formControlName=\"contact_date\" displayFormat=\"DD MMMM YYYY\" [class.invalid]=\"!scheduleForm.controls.contact_date.valid && (scheduleForm.controls.contact_date.dirty || submitAttempt)\"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.contact_date.valid  && (scheduleForm.controls.contact_date.dirty || submitAttempt)\">\n        <p>Please enter best contact date.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Best Contact Time:</ion-label>\n        <ion-datetime formControlName=\"contact_time\" displayFormat=\"hh:mm A\" [class.invalid]=\"!scheduleForm.controls.contact_time.valid && (scheduleForm.controls.contact_time.dirty || submitAttempt)\"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.contact_time.valid  && (scheduleForm.controls.contact_time.dirty || submitAttempt)\">\n        <p>Please enter best contact time.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n              Submit\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" [routerLink]=\"['','socials']\" routerDirection=\"back\">\n              Cancel\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pastor/pastor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pastor/pastor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PastorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastorPageRoutingModule", function() { return PastorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pastor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pastor.page */ "./src/app/pastor/pastor.page.ts");




const routes = [
    {
        path: '',
        component: _pastor_page__WEBPACK_IMPORTED_MODULE_3__["PastorPage"]
    }
];
let PastorPageRoutingModule = class PastorPageRoutingModule {
};
PastorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PastorPageRoutingModule);



/***/ }),

/***/ "./src/app/pastor/pastor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pastor/pastor.module.ts ***!
  \*****************************************/
/*! exports provided: PastorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastorPageModule", function() { return PastorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pastor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pastor-routing.module */ "./src/app/pastor/pastor-routing.module.ts");
/* harmony import */ var _pastor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pastor.page */ "./src/app/pastor/pastor.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");








let PastorPageModule = class PastorPageModule {
};
PastorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pastor_routing_module__WEBPACK_IMPORTED_MODULE_5__["PastorPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_pastor_page__WEBPACK_IMPORTED_MODULE_6__["PastorPage"]]
    })
], PastorPageModule);



/***/ }),

/***/ "./src/app/pastor/pastor.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pastor/pastor.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3Rvci9wYXN0b3IucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pastor/pastor.page.ts":
/*!***************************************!*\
  !*** ./src/app/pastor/pastor.page.ts ***!
  \***************************************/
/*! exports provided: PastorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastorPage", function() { return PastorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PastorPage = class PastorPage {
    constructor(formBuilder, apiCall, toastCtrl) {
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
    }
    save() {
        this.submitAttempt = true;
        if (!this.scheduleForm.valid) {
            console.log("INVALID SCHEDULE FORM!");
        }
        else {
            console.log(this.scheduleForm.value);
            let postData = this.scheduleForm.value;
            postData.opt = 'pastor';
            // submit form details add addItem(userId)
            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(data => {
                console.log(data);
                if (data['status'] === 'ko') {
                    this.presentToast('There was a problem with your submission: ' + data['error_description']);
                }
                else {
                    this.presentToast('Schedule Request successfully submitted');
                }
            }, err => this.presentToast('There was an error with your Schedule request submission: ' + err), () => console.log("Schedule Request submission Completed"));
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
                console.log('Toast Dismissed: ' + val);
            });
        });
    }
    ngOnInit() {
        this.scheduleForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
};
PastorPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
PastorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pastor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pastor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pastor.page.scss */ "./src/app/pastor/pastor.page.scss")).default]
    })
], PastorPage);



/***/ })

}]);
//# sourceMappingURL=pastor-pastor-module-es2015.js.map