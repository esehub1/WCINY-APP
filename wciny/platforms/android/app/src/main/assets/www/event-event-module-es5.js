function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventEventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"card remove-top\">\n    <img class=\"middlelogo\" src=\"{{headerImage}}\" alt=\"\">\n    <div class=\"ion-padding-horizontal\">\n      <h2>{{ item.introtext}}</h2>\n      <h4>{{doHTML(item.content,item.introtext)}}</h4>\n      <p>Date: {{doDate(item.event_date, item.event_time) | date:'short' }}</p>\n<!--      <p>Ends: {{doDate(item.event_date, item.event_time) | date:'short' }}</p>-->\n      <p>Venue: {{ item.event_venue }}</p>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"5\">\n        <section>\n          <ion-button color=\"winners-red\" expand=\"block\" (click)=\"shareUs(item)\">\n            Share\n            <ion-icon name=\"share\" slot=\"end\"></ion-icon>\n          </ion-button>\n        </section>\n      </ion-col>\n      <ion-col size=\"7\">\n        <section>\n          <ion-button color=\"light\" expand=\"block\" (click)=\"createEvent(item)\">\n            Save the Date\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n          </ion-button>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/event/event-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/event/event-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: EventPageRoutingModule */

  /***/
  function srcAppEventEventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function () {
      return EventPageRoutingModule;
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


    var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event.page */
    "./src/app/event/event.page.ts");

    var routes = [{
      path: '',
      component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }];

    var EventPageRoutingModule = function EventPageRoutingModule() {
      _classCallCheck(this, EventPageRoutingModule);
    };

    EventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/event/event.module.ts":
  /*!***************************************!*\
    !*** ./src/app/event/event.module.ts ***!
    \***************************************/

  /*! exports provided: EventPageModule */

  /***/
  function srcAppEventEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventPageModule", function () {
      return EventPageModule;
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


    var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./event-routing.module */
    "./src/app/event/event-routing.module.ts");
    /* harmony import */


    var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event.page */
    "./src/app/event/event.page.ts");

    var EventPageModule = function EventPageModule() {
      _classCallCheck(this, EventPageModule);
    };

    EventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"]],
      declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })], EventPageModule);
    /***/
  },

  /***/
  "./src/app/event/event.page.scss":
  /*!***************************************!*\
    !*** ./src/app/event/event.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventEventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".middlelogo {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXZlbnQvZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBOztFQUVFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGVsb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuIiwiLm1pZGRsZWxvZ28ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/event/event.page.ts":
  /*!*************************************!*\
    !*** ./src/app/event/event.page.ts ***!
    \*************************************/

  /*! exports provided: EventPage */

  /***/
  function srcAppEventEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventPage", function () {
      return EventPage;
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


    var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/calendar/ngx */
    "./node_modules/@ionic-native/calendar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { SocialSharing, Calendar } from '@ionic-native/social-sharing';


    var EventPage = /*#__PURE__*/function () {
      function EventPage(socialSharing, calendar, route, router, alertCtrl) {
        _classCallCheck(this, EventPage);

        this.socialSharing = socialSharing;
        this.calendar = calendar;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
      } // shareMe(msg, subject, image, link) {
      //   console.log(msg + ' , ' + subject + ' , ' + image + ' , ' + link);
      //   this.socialSharing.share(msg, subject, 'file:///'+image, link);
      // }


      _createClass(EventPage, [{
        key: "shareUs",
        value: function shareUs(item) {
          var options = {
            message: 'Event: \n' + item.title,
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
        key: "doHTML",
        value: function doHTML(str, rem) {
          console.log(str);
          return str.replace(/<(?:.|\n)*?>/gm, '').replace(rem, '');
        }
      }, {
        key: "doDate",
        value: function doDate(d, t) {
          var str = d.slice(0, 10) + ' ' + t;
          console.log(str);
          return new Date(str);
        }
      }, {
        key: "createEvent",
        value: function createEvent(item) {
          var _this = this;

          var start = this.doDate(item.event_date, item.event_time);
          var end = this.doDate(item.event_date, item.event_time);
          this.calendar.createEventInteractively(item.introtext, item.event_venue, this.doHTML(item.content, item.introtext), new Date(start), new Date(end)).then(function (msg) {
            _this.presentAlert('Event Calendar', item.introtext + " has been added to your calendar.");

            console.log(msg);
          }, function (err) {
            console.log("Calendar fail " + err);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      //cssClass: 'my-custom-class',
                      header: title,
                      //subHeader: 'Subtitle',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

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
          if (this.route.snapshot.data['special']) {
            this.item = this.route.snapshot.data['special'];
            this.headerImage = this.item.images.imageLarge ? this.item.images.imageLarge : 'assets/img/events_side.jpg';
          }
        }
      }]);

      return EventPage;
    }();

    EventPage.ctorParameters = function () {
      return [{
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
      }, {
        type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    EventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./event.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./event.page.scss */
      "./src/app/event/event.page.scss"))["default"]]
    })], EventPage);
    /***/
  }
}]);
//# sourceMappingURL=event-event-module-es5.js.map