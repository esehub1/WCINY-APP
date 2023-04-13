function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wofbi-wofbi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wofbi/wofbi.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wofbi/wofbi.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWofbiWofbiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"winners-red\">\n        <ion-text>\n            <div class=\"ion-text-wrap ion-text-end ion-padding\">\n                WINNERS CHAPEL INT'L <br> NEW YORK\n            </div>\n        </ion-text>\n        <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n        </ion-buttons>\n        <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item color=\"light\">\n        <div class=\"ion-text-left\">\n            <h5 style=\"font-weight: bold\">WOFBI FORM</h5>\n        </div>\n    </ion-item>\n    <ion-list>\n        <form [formGroup]=\"wofbiForm\">\n            <div [hidden]=\"isPageTwo\">\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" >First Name:\n                            </ion-label>\n                            <ion-input formControlName=\"Fname\" type=\"text\"\n                                       [class.invalid]=\"!wofbiForm.controls.Fname.valid && (wofbiForm.controls.Fname.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wofbiForm.controls.Fname.valid  && (wofbiForm.controls.Fname.dirty || submitAttempt)\">\n                            <p>Please enter a valid name.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" >Last Name:\n                            </ion-label>\n                            <ion-input formControlName=\"Lname\" type=\"text\"\n                                       [class.invalid]=\"!wofbiForm.controls.Lname.valid && (wofbiForm.controls.Lname.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wofbiForm.controls.Lname.valid  && (wofbiForm.controls.Lname.dirty || submitAttempt)\">\n                            <p>Please enter a valid name.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" >Telephone:\n                            </ion-label>\n                            <ion-input formControlName=\"Phone\" type=\"tel\"\n                                       [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\"\n                                       [class.invalid]=\"!wofbiForm.controls.Phone.valid && (wofbiForm.controls.Phone.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wofbiForm.controls.Phone.valid  && (wofbiForm.controls.Phone.dirty || submitAttempt)\">\n                            <p>Please enter a valid phone number.</p>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-item>\n                            <ion-label position=\"stacked\" color=\"primary\" >Email:</ion-label>\n                            <ion-input formControlName=\"Email\" type=\"email\"\n                                       [class.invalid]=\"!wofbiForm.controls.Email.valid && (wofbiForm.controls.Email.dirty || submitAttempt)\"></ion-input>\n                        </ion-item>\n                        <ion-item\n                                *ngIf=\"!wofbiForm.controls.Email.valid  && (wofbiForm.controls.Email.dirty || submitAttempt)\">\n                            <p>Please enter a valid email address.</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\" >\n                        Select WOFBI Certificate Course\n                    </ion-label>\n                    <ion-select formControlName=\"Course\" interface=\"action-sheet\">\n                        <ion-select-option value=\"Basic Certificate Course (BCC)\">Basic Certificate Course (BCC)\n                        </ion-select-option>\n                        <ion-select-option value=\"Leadership Diploma Course (LDC)\">Leadership Diploma Course (LDC)\n                        </ion-select-option>\n                        <ion-select-option value=\"Leadership Certificate Course (LCC)\">Leadership Certificate Course\n                            (LCC)\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wofbiForm.controls.Course.valid  && (wofbiForm.controls.Course.dirty || submitAttempt)\">\n                    <p>Please select a course.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\" >\n                        Give details of your New Birth experience:\n                    </ion-label>\n                    <ion-textarea rows=\"2\" autoGrow=\"true\" formControlName=\"Comments\"\n                                  [class.invalid]=\"!wofbiForm.controls.Comments.valid && (wofbiForm.controls.Comments.dirty || submitAttempt)\"></ion-textarea>\n                  <!--  <ion-textarea rows=\"2\" autoGrow=\"true\" formControlName=\"Comments\" tooltip=\"{{detailsTooltip}}\" hideOthers=\"true\" positionV=\"top\" [arrow]=\"showArrow\" [event]=\"tEvent\" [duration]=\"duration\"\n                                  [class.invalid]=\"!wofbiForm.controls.Comments.valid && (wofbiForm.controls.Comments.dirty || submitAttempt)\"></ion-textarea>-->\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wofbiForm.controls.Comments.valid  && (wofbiForm.controls.Comments.dirty || submitAttempt)\">\n                    <p>Please provide details.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\" class=\"ion-text-wrap\" >Have\n                        you attended any other Bible College or Institution in the Past?\n                    </ion-label>\n                    <ion-select formControlName=\"PastCollege\" interface=\"action-sheet\">\n                        <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                        <ion-select-option value=\"No\">No</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wofbiForm.controls.PastCollege.valid  && (wofbiForm.controls.PastCollege.dirty || submitAttempt)\">\n                    <p>Please select an option.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"primary\" class=\"ion-text-wrap\" style=\"font-size: 13.3px\">I accept honesty declaration\n                    </ion-label>\n                    <ion-checkbox slot=\"start\" formControlName=\"Terms\"\n                                  [class.invalid]=\"!wofbiForm.controls.Terms.valid && (wofbiForm.controls.Terms.dirty || submitAttempt)\">\n                    </ion-checkbox>\n                </ion-item>\n                <ion-item\n                        *ngIf=\"!wofbiForm.controls.Terms.valid  && (wofbiForm.controls.Terms.dirty || submitAttempt)\">\n                    <p>This field is mandatory</p>\n                </ion-item>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <section>\n                            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n                                Submit\n                            </ion-button>\n                        </section>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <section>\n                            <ion-button color=\"light\" expand=\"block\" slot=\"start\" (click)=\"prev()\">\n                                Go Back\n                            </ion-button>\n                        </section>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </form>\n    </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/wofbi/wofbi-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/wofbi/wofbi-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: WofbiPageRoutingModule */

  /***/
  function srcAppWofbiWofbiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WofbiPageRoutingModule", function () {
      return WofbiPageRoutingModule;
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


    var _wofbi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wofbi.page */
    "./src/app/wofbi/wofbi.page.ts");

    var routes = [{
      path: '',
      component: _wofbi_page__WEBPACK_IMPORTED_MODULE_3__["WofbiPage"]
    }];

    var WofbiPageRoutingModule = function WofbiPageRoutingModule() {
      _classCallCheck(this, WofbiPageRoutingModule);
    };

    WofbiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WofbiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wofbi/wofbi.module.ts":
  /*!***************************************!*\
    !*** ./src/app/wofbi/wofbi.module.ts ***!
    \***************************************/

  /*! exports provided: WofbiPageModule */

  /***/
  function srcAppWofbiWofbiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WofbiPageModule", function () {
      return WofbiPageModule;
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


    var _wofbi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wofbi-routing.module */
    "./src/app/wofbi/wofbi-routing.module.ts");
    /* harmony import */


    var _wofbi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wofbi.page */
    "./src/app/wofbi/wofbi.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic4-tooltips */
    "./node_modules/ionic4-tooltips/__ivy_ngcc__/fesm2015/ionic4-tooltips.js");

    var WofbiPageModule = function WofbiPageModule() {
      _classCallCheck(this, WofbiPageModule);
    };

    WofbiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wofbi_routing_module__WEBPACK_IMPORTED_MODULE_5__["WofbiPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__["TooltipsModule"]],
      declarations: [_wofbi_page__WEBPACK_IMPORTED_MODULE_6__["WofbiPage"]]
    })], WofbiPageModule);
    /***/
  },

  /***/
  "./src/app/wofbi/wofbi.page.scss":
  /*!***************************************!*\
    !*** ./src/app/wofbi/wofbi.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppWofbiWofbiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\nion-input, ion-select, ion-textarea {\n  padding: 5px 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\np {\n  color: #ea6153;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL3dvZmJpL3dvZmJpLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd29mYmkvd29mYmkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBRUUsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTs7RUFFRSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC93b2ZiaS93b2ZiaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbnB7XG4gIGNvbG9yOiAjZWE2MTUzO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4iLCJwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xufVxuXG5wIHtcbiAgY29sb3I6ICNlYTYxNTM7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/wofbi/wofbi.page.ts":
  /*!*************************************!*\
    !*** ./src/app/wofbi/wofbi.page.ts ***!
    \*************************************/

  /*! exports provided: WofbiPage */

  /***/
  function srcAppWofbiWofbiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WofbiPage", function () {
      return WofbiPage;
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

    var WofbiPage = /*#__PURE__*/function () {
      function WofbiPage(nCtrl, toastCtrl, apiCall, formBuilder) {
        _classCallCheck(this, WofbiPage);

        this.nCtrl = nCtrl;
        this.toastCtrl = toastCtrl;
        this.apiCall = apiCall;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.hideVerify = false;
        this.isPageTwo = false;
        this.showArrow = true;
        this.duration = 5000;
        this.tEvent = 'click';
        this.termsTooltip = 'I, the above designated, declare this information is true to the best of my knowledge. I am aware that if it is found to be untrue, I may be disqualified. I also agree to abide by the rules and regulations governing the Course.';
        this.detailsTooltip = 'Please give details of your New Birth experience and state where and when it occurred';
      }

      _createClass(WofbiPage, [{
        key: "save",
        value: function save() {
          var _this = this;

          this.submitAttempt = true;

          if (!this.wofbiForm.valid) {
            console.log("INVALID WOFBI FORM!");
          } else {
            console.log(this.wofbiForm.value);
            var postData = this.wofbiForm.value;
            postData.opt = 'wofbi';
            /*      this.presentToast('Prayer request successfully submitted');*/
            // submit form details add addItem(userId)

            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(function (data) {
              console.log(data);

              if (data['status'] === 'ko') {
                _this.presentToast('There was a problem with your submission: ' + data['error_description']);
              } else {
                _this.presentToast('WOFBI Form successfully submitted');

                _this.wofbiForm.reset();
              }
            }, function (err) {
              return _this.presentToast('There was an error with your Prayer request submission: ' + err);
            }, function () {
              return console.log("WOFBI Form submission Completed");
            });
          }
        }
      }, {
        key: "prev",
        value: function prev() {
          this.isPageTwo = false;
        }
      }, {
        key: "next",
        value: function next() {
          console.log("Going on Next");
          this.isPageTwo = true;
          /*    if (!this.wofbiForm.valid) {//
                console.log(this.wofbiForm)
                console.log("INVALID first FORM!")
                this.presentToast('Invalid entries, Please fill all required Information');
              } else {
                console.log("Going on Next");
                this.isPageTwo = true;
              }*/
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
          this.wofbiForm = this.formBuilder.group({
            Fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Course: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            PastCollege: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]))
          });
        }
      }]);

      return WofbiPage;
    }();

    WofbiPage.ctorParameters = function () {
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

    WofbiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wofbi',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wofbi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wofbi/wofbi.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wofbi.page.scss */
      "./src/app/wofbi/wofbi.page.scss"))["default"]]
    })], WofbiPage);
    /***/
  }
}]);
//# sourceMappingURL=wofbi-wofbi-module-es5.js.map