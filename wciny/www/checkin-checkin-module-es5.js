function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-checkin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkin/checkin.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkin/checkin.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckinCheckinPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">CHECK-IN FORM</h5>\n    </div>\n  </ion-item>\n  <ion-list>\n    <form [formGroup]=\"checkinForm\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">First Name:</ion-label>\n            <ion-input formControlName=\"Fname\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.Fname.valid && (checkinForm.controls.Fname.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Fname.valid  && (checkinForm.controls.Fname.dirty || submitAttempt)\">\n            <p>Please enter a valid name.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Last Name:</ion-label>\n            <ion-input formControlName=\"Lname\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.Lname.valid && (checkinForm.controls.Lname.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Lname.valid  && (checkinForm.controls.Lname.dirty || submitAttempt)\">\n            <p>Please enter a valid name.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Telephone:</ion-label>\n            <ion-input formControlName=\"Phone\" type=\"tel\"\n                       [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\"\n                       [class.invalid]=\"!checkinForm.controls.Phone.valid && (checkinForm.controls.Phone.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Phone.valid  && (checkinForm.controls.Phone.dirty || submitAttempt)\">\n            <p>Please enter a valid phone number.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Email:</ion-label>\n            <ion-input formControlName=\"Email\" type=\"email\"\n                       [class.invalid]=\"!checkinForm.controls.Email.valid && (checkinForm.controls.Email.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Email.valid  && (checkinForm.controls.Email.dirty || submitAttempt)\">\n            <p>Please enter a valid email address.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Address:</ion-label>\n        <ion-input formControlName=\"Address\" type=\"text\"\n                   [class.invalid]=\"!checkinForm.controls.Address.valid && (checkinForm.controls.Address.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item\n              *ngIf=\"!checkinForm.controls.Address.valid  && (checkinForm.controls.Address.dirty || submitAttempt)\">\n        <p>Please enter a valid address.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">City:</ion-label>\n            <ion-input formControlName=\"City\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.City.valid && (checkinForm.controls.City.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.City.valid  && (checkinForm.controls.City.dirty || submitAttempt)\">\n            <p>Please enter a valid city.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">State:</ion-label>\n            <ion-input formControlName=\"State\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.State.valid && (checkinForm.controls.State.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.State.valid  && (checkinForm.controls.State.dirty || submitAttempt)\">\n            <p>Please enter a valid state / province.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Zip code:</ion-label>\n            <ion-input formControlName=\"Zip\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.Zip.valid && (checkinForm.controls.Zip.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Zip.valid  && (checkinForm.controls.Zip.dirty || submitAttempt)\">\n            <p>Please enter a valid zip code.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Country:</ion-label>\n            <ion-input formControlName=\"Country\" type=\"text\"\n                       [class.invalid]=\"!checkinForm.controls.Country.valid && (checkinForm.controls.Country.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.Country.valid  && (checkinForm.controls.Country.dirty || submitAttempt)\">\n            <p>Please enter a country.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\"\n                   style=\"margin-bottom: 10px\">First time worshipping with us?\n        </ion-label>\n        <ion-select formControlName=\"Firsttimer\" interface=\"action-sheet\">\n          <ion-select-option value=\"Yes\">Yes</ion-select-option>\n          <ion-select-option value=\"No\">No</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item\n              *ngIf=\"!checkinForm.controls.Firsttimer.valid  && (checkinForm.controls.Firsttimer.dirty || submitAttempt)\">\n        <p>Please select an option.</p>\n      </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\"\n                       style=\"margin-bottom: 10px\">How many people are watching including yourself?\n            </ion-label>\n            <ion-select formControlName=\"People\" interface=\"action-sheet\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item\n                  *ngIf=\"!checkinForm.controls.People.valid  && (checkinForm.controls.People.dirty || submitAttempt)\">\n            <p>Please select an option.</p>\n          </ion-item>\n      <section>\n        <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n          Submit\n        </ion-button>\n      </section>\n    </form>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/checkin/checkin-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/checkin/checkin-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CheckinPageRoutingModule */

  /***/
  function srcAppCheckinCheckinRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckinPageRoutingModule", function () {
      return CheckinPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _checkin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkin.page */
    "./src/app/checkin/checkin.page.ts");

    var routes = [{
      path: '',
      component: _checkin_page__WEBPACK_IMPORTED_MODULE_3__["CheckinPage"]
    }];

    var CheckinPageRoutingModule = function CheckinPageRoutingModule() {
      _classCallCheck(this, CheckinPageRoutingModule);
    };

    CheckinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckinPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/checkin/checkin.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/checkin/checkin.module.ts ***!
    \*******************************************/

  /*! exports provided: CheckinPageModule */

  /***/
  function srcAppCheckinCheckinModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function () {
      return CheckinPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkin-routing.module */
    "./src/app/checkin/checkin-routing.module.ts");
    /* harmony import */


    var _checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkin.page */
    "./src/app/checkin/checkin.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");

    var CheckinPageModule = function CheckinPageModule() {
      _classCallCheck(this, CheckinPageModule);
    };

    CheckinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
      declarations: [_checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"]]
    })], CheckinPageModule);
    /***/
  },

  /***/
  "./src/app/checkin/checkin.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/checkin/checkin.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckinCheckinPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  font-size: 0.8em;\n  color: #ea6153;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\nion-input, ion-select, ion-textarea {\n  padding: 5px 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNlYTYxNTM7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4iLCJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNlYTYxNTM7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/checkin/checkin.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/checkin/checkin.page.ts ***!
    \*****************************************/

  /*! exports provided: CheckinPage */

  /***/
  function srcAppCheckinCheckinPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckinPage", function () {
      return CheckinPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var CheckinPage = /*#__PURE__*/function () {
      function CheckinPage(nCtrl, toastCtrl, apiCall, formBuilder) {
        _classCallCheck(this, CheckinPage);

        this.nCtrl = nCtrl;
        this.toastCtrl = toastCtrl;
        this.apiCall = apiCall;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
      }

      _createClass(CheckinPage, [{
        key: "save",
        value: function save() {
          var _this = this;

          this.submitAttempt = true;

          if (!this.checkinForm.valid) {
            console.log("INVALID Check In FORM!");
          } else {
            console.log(this.checkinForm.value);
            var postData = this.checkinForm.value;
            postData.opt = 'checkin';
            /*      this.presentToast('Prayer request successfully submitted');*/
            // submit form details add addItem(userId)

            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(function (data) {
              console.log(data);

              if (data['status'] === 'ko') {
                _this.presentToast('There was a problem with your submission: ' + data['error_description']);
              } else {
                _this.presentToast('Check-In Form successfully submitted');

                _this.checkinForm.reset();
              }
            }, function (err) {
              return _this.presentToast('There was an error with your Winners Care Program submission: ' + err);
            }, function () {
              return console.log("Winners Care Program submission Completed");
            });
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context.sent;
                    _context.next = 5;
                    return toast.present();

                  case 5:
                    toast.onDidDismiss().then(function (val) {
                      console.log('Toast Dismissed ' + val);
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkinForm = this.formBuilder.group({
            Fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(300)])),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])),
            Zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])),
            People: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Firsttimer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }]);

      return CheckinPage;
    }();

    CheckinPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CheckinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkin/checkin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkin.page.scss */
      "./src/app/checkin/checkin.page.scss"))["default"]]
    })], CheckinPage);
    /***/
  }
}]);
//# sourceMappingURL=checkin-checkin-module-es5.js.map