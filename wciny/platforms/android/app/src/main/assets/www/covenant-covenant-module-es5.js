function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covenant-covenant-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCovenantCovenantPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item hidden>\n    <ion-input readonly [(ngModel)]=\"selectedDate\"></ion-input>\n  </ion-item>\n  <img class=\"middlelogo\" src=\"assets/img/hr_of_prayer4.jpg\" alt=\"\">\n\n    <ion-button color=\"light\" expand=\"full\" (click)=\"openDatePicker()\">\n      Select Date\n      <ion-icon name=\"calendar\" class=\"ion-padding\"></ion-icon>\n      {{selectedDate}}\n    </ion-button>\n  <section>\n  </section>\n\n  <!--        <img class=\"middlelogo\" src=\"assets/img/Events.png\" alt=\"\"> {{item.images.imageMedium}}-->\n  <div *ngIf=\"showEvent\">\n    <ion-list class=\"remove-top\" *ngFor=\"let item of itemList\">\n<!--      <div>-->\n<!--        <img src=\"{{item.images.imageMedium}}\" alt=\"{{item.title}}\">-->\n<!--      </div>-->\n      <ion-item class=\"ion-padding\">\n        <ion-label>\n          <ion-text color=\"dark\">\n            <h2 class=\"ion-padding-bottom\"><b>Topic: {{item.title}}</b></h2>\n          </ion-text>\n          <h2 class=\"ion-padding-bottom\">Verse: {{item.bible_verse}}</h2>\n          <h2>{{item.content}}</h2>\n        </ion-label>\n      </ion-item>\n      <section>\n        <ion-button color=\"winners-red\" expand=\"block\" (click)=\"shareUs(item)\">\n          Share\n          <ion-icon name=\"share\" slot=\"end\"></ion-icon></ion-button>\n      </section>\n\n    </ion-list>\n  </div>\n  <ion-item *ngIf=\"!showEvent\"  >\n    <h3 style=\"text-align:center;\">There are no events to show</h3>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/covenant/covenant-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/covenant/covenant-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CovenantPageRoutingModule */

  /***/
  function srcAppCovenantCovenantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovenantPageRoutingModule", function () {
      return CovenantPageRoutingModule;
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


    var _covenant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./covenant.page */
    "./src/app/covenant/covenant.page.ts");

    var routes = [{
      path: '',
      component: _covenant_page__WEBPACK_IMPORTED_MODULE_3__["CovenantPage"]
    }];

    var CovenantPageRoutingModule = function CovenantPageRoutingModule() {
      _classCallCheck(this, CovenantPageRoutingModule);
    };

    CovenantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CovenantPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/covenant/covenant.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/covenant/covenant.module.ts ***!
    \*********************************************/

  /*! exports provided: CovenantPageModule */

  /***/
  function srcAppCovenantCovenantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovenantPageModule", function () {
      return CovenantPageModule;
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


    var _covenant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./covenant-routing.module */
    "./src/app/covenant/covenant-routing.module.ts");
    /* harmony import */


    var _covenant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./covenant.page */
    "./src/app/covenant/covenant.page.ts");

    var CovenantPageModule = function CovenantPageModule() {
      _classCallCheck(this, CovenantPageModule);
    };

    CovenantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _covenant_routing_module__WEBPACK_IMPORTED_MODULE_5__["CovenantPageRoutingModule"]],
      declarations: [_covenant_page__WEBPACK_IMPORTED_MODULE_6__["CovenantPage"]]
    })], CovenantPageModule);
    /***/
  },

  /***/
  "./src/app/covenant/covenant.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/covenant/covenant.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCovenantCovenantPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL2NvdmVuYW50L2NvdmVuYW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY292ZW5hbnQvY292ZW5hbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY292ZW5hbnQvY292ZW5hbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/covenant/covenant.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/covenant/covenant.page.ts ***!
    \*******************************************/

  /*! exports provided: CovenantPage */

  /***/
  function srcAppCovenantCovenantPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovenantPage", function () {
      return CovenantPage;
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


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @logisticinfotech/ionic4-datepicker */
    "./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js");

    var CovenantPage = /*#__PURE__*/function () {
      function CovenantPage(modalCtrl, apiCall, socialSharing) {
        _classCallCheck(this, CovenantPage);

        this.modalCtrl = modalCtrl;
        this.apiCall = apiCall;
        this.socialSharing = socialSharing;
        this.datePickerObj = {};
        this.thisDay = new Date();
      }

      _createClass(CovenantPage, [{
        key: "getItems",
        value: function getItems(a) {
          var _this = this;

          var e = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
          var params = 'cats=3&type=devotion&start=' + e;
          this.apiCall.fetchData('get/k2/items/', params, false).subscribe(function (data) {
            _this.showEvent = !!(Array.isArray(data['items']) && data['items'].length > 0);
            _this.itemList = data['items'];
            console.log(data['items']);
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get Devotions Completed');
          });
        }
      }, {
        key: "getDay",
        value: function getDay(str) {
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          return days[new Date(str).getDay()];
        }
      }, {
        key: "getMonth",
        value: function getMonth(str) {
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          return months[new Date(str).getMonth()];
        }
      }, {
        key: "getThumb",
        value: function getThumb(item) {
          var vid = "";

          switch (item.b) {
            case 1:
              vid = "assets/img/play.png";
              break;

            case 2:
              vid = "assets/img/play.png";
              break;

            default:
              vid = "assets/img/play.png"; //item.MediaThumb;

              break;
          }

          return vid;
        }
      }, {
        key: "playVid",
        value: function playVid(item) {
          var vid = "#";

          switch (item.Type) {
            case 1:
              vid = "http://www.youtube.com/embed/" + item.extra_fields[3].value + "?autoplay=1";
              break;

            case 2:
              vid = "http://www.dailymotion.com/video/" + item.extra_fields[3].value;
              break;

            default:
              vid = item.MediaLocation;
              break;
          }
        }
      }, {
        key: "doHTML",
        value: function doHTML(str) {
          return str.replace(/<(?:.|\n)*?>/gm, '');
        }
      }, {
        key: "getContent",
        value: function getContent(obj) {
          return obj.toString();
        }
      }, {
        key: "shareUs",
        value: function shareUs(item) {
          var options = {
            message: 'Verse: \n' + item.bible_verse,
            subject: item.title,
            files: [item.images.imageMedium],
            url: 'https://www.winnerschapelny.org',
            chooserTitle: 'WCINY' // Android only, you can override the default share sheet title

          };
          this.socialSharing.shareWithOptions(options)["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "openDatePicker",
        value: function openDatePicker() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modalCtrl;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("Open Date Picker");
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__["Ionic4DatepickerModalComponent"],
                      cssClass: "li-ionic4-datePicker",
                      componentProps: {
                        objConfig: this.datePickerObj
                      }
                    });

                  case 3:
                    modalCtrl = _context.sent;
                    _context.next = 6;
                    return modalCtrl.present();

                  case 6:
                    modalCtrl.onDidDismiss().then(function (data) {
                      // this.isModalOpen = false;
                      console.log(data);
                      var newDate = new Date(data.data.date);
                      _this2.selectedDate = newDate.toISOString().substr(0, 10);

                      _this2.getItems(newDate);
                    });

                  case 7:
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
          this.selectedDate = this.thisDay.toISOString().substr(0, 10);
          console.log(this.selectedDate);
          this.datePickerObj = {
            inputDate: this.thisDay,
            dateFormat: "DD MMM YYYY",
            closeOnSelect: true,
            setLabel: "OK",
            showTodayButton: false,
            titleLabel: this.selectedDate,
            yearInAscending: true
          };
          this.getItems(this.thisDay);
        }
      }]);

      return CovenantPage;
    }();

    CovenantPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
      }];
    };

    CovenantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-covenant',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./covenant.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./covenant.page.scss */
      "./src/app/covenant/covenant.page.scss"))["default"]]
    })], CovenantPage);
    /***/
  }
}]);
//# sourceMappingURL=covenant-covenant-module-es5.js.map