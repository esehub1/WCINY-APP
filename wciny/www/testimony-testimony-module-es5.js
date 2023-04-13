function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimony-testimony-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/testimony/testimony.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimony/testimony.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestimonyTestimonyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/testimony.png\" alt=\"\">\n    <form [formGroup]=\"testimonyForm\">\n      <ion-item>\n        <ion-label position=\"stacked\" >First Name:</ion-label>\n        <ion-input formControlName=\"firstname\" type=\"text\" [class.invalid]=\"!testimonyForm.controls.firstname.valid && (testimonyForm.controls.firstname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!testimonyForm.controls.firstname.valid  && (testimonyForm.controls.firstname.dirty || submitAttempt)\">\n        <p>Please enter your first name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Last Name:</ion-label>\n        <ion-input formControlName=\"lastname\" type=\"text\" [class.invalid]=\"!testimonyForm.controls.lastname.valid && (testimonyForm.controls.lastname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!testimonyForm.controls.lastname.valid  && (testimonyForm.controls.lastname.dirty || submitAttempt)\">\n        <p>Please enter your last name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email:</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [class.invalid]=\"!testimonyForm.controls.email.valid && (testimonyForm.controls.email.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!testimonyForm.controls.email.valid  && (testimonyForm.controls.email.dirty || submitAttempt)\">\n        <p>Please enter a valid email address.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Phone:</ion-label>\n        <ion-input formControlName=\"phone\" [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\" type=\"tel\" [class.invalid]=\"!testimonyForm.controls.phone.valid && (testimonyForm.controls.phone.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!testimonyForm.controls.phone.valid  && (testimonyForm.controls.phone.dirty || submitAttempt)\">\n        <p>Please enter your phone number.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Testimonies:</ion-label>\n        <ion-textarea autoGrow=\"true\" formControlName=\"testimony\" [class.invalid]=\"!testimonyForm.controls.testimony.valid && (testimonyForm.controls.testimony.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!testimonyForm.controls.testimony.valid  && (testimonyForm.controls.testimony.dirty || submitAttempt)\">\n        <p>Please enter your testimonies.</p>\n      </ion-item>\n      <ion-item [hidden]=\"true\">\n        <ion-label position=\"floating\">UserId:</ion-label>\n        <ion-input formControlName=\"approved\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n              Submit\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" [routerLink]=\"['','tabs']\" routerDirection=\"back\">\n              Cancel\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/testimony/testimony-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/testimony/testimony-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: TestimonyPageRoutingModule */

  /***/
  function srcAppTestimonyTestimonyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonyPageRoutingModule", function () {
      return TestimonyPageRoutingModule;
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


    var _testimony_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./testimony.page */
    "./src/app/testimony/testimony.page.ts");

    var routes = [{
      path: '',
      component: _testimony_page__WEBPACK_IMPORTED_MODULE_3__["TestimonyPage"]
    }];

    var TestimonyPageRoutingModule = function TestimonyPageRoutingModule() {
      _classCallCheck(this, TestimonyPageRoutingModule);
    };

    TestimonyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestimonyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/testimony/testimony.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/testimony/testimony.module.ts ***!
    \***********************************************/

  /*! exports provided: TestimonyPageModule */

  /***/
  function srcAppTestimonyTestimonyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonyPageModule", function () {
      return TestimonyPageModule;
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


    var _testimony_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./testimony-routing.module */
    "./src/app/testimony/testimony-routing.module.ts");
    /* harmony import */


    var _testimony_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./testimony.page */
    "./src/app/testimony/testimony.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");

    var TestimonyPageModule = function TestimonyPageModule() {
      _classCallCheck(this, TestimonyPageModule);
    };

    TestimonyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _testimony_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestimonyPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
      declarations: [_testimony_page__WEBPACK_IMPORTED_MODULE_6__["TestimonyPage"]]
    })], TestimonyPageModule);
    /***/
  },

  /***/
  "./src/app/testimony/testimony.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/testimony/testimony.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestimonyTestimonyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9ueS90ZXN0aW1vbnkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/testimony/testimony.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/testimony/testimony.page.ts ***!
    \*********************************************/

  /*! exports provided: TestimonyPage */

  /***/
  function srcAppTestimonyTestimonyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonyPage", function () {
      return TestimonyPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TestimonyPage = /*#__PURE__*/function () {
      function TestimonyPage(apiCall, toastCtrl, formBuilder) {
        _classCallCheck(this, TestimonyPage);

        this.apiCall = apiCall;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
      }

      _createClass(TestimonyPage, [{
        key: "save",
        value: function save() {
          var _this = this;

          this.submitAttempt = true;

          if (!this.testimonyForm.valid) {
            console.log("INVALID TESTIMONY FORM!");
          } else {
            //console.log(this.testimonyForm.value);
            var postData = this.testimonyForm.value;
            postData.opt = 'testimonials';
            postData.approved = 1;
            /*  this.presentToast('Testimony successfully submitted');*/
            // submit form details add addItem(userId)

            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(function (data) {
              console.log(data);

              if (data['status'] === 'ko') {
                _this.presentToast('There was a problem with your submission: ' + data['error_description']);
              } else {
                _this.presentToast('Testimony successfully submitted');
              }
            }, function (err) {
              console.warn(err);

              _this.presentToast('There was an error with your Testimony submission: ' + err.message);
            }, function () {
              return console.log("Testimony submission Completed");
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
                      duration: 5000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();
                    toast.onDidDismiss().then(function (val) {
                      console.log('Toast Dismissed');
                    });

                  case 5:
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
          var UserId = 0; //localStorage.getItem("ProfileId");

          this.testimonyForm = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            testimony: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            approved: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](UserId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]))
          });
        }
      }]);

      return TestimonyPage;
    }();

    TestimonyPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    TestimonyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-testimony',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./testimony.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/testimony/testimony.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./testimony.page.scss */
      "./src/app/testimony/testimony.page.scss"))["default"]]
    })], TestimonyPage);
    /***/
  }
}]);
//# sourceMappingURL=testimony-testimony-module-es5.js.map