function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/events_side.jpg\" alt=\"\">\n    <ion-item color=\"light\">\n      <ion-button fill=\"clear\" (click)='goBack()'>\n        <ion-icon slot=\"icon-only\" name=\"caret-back-circle-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n      <div class=\"ion-text-center center-me\">\n        <h4>{{getMon(dates) +' '+dates.getFullYear()}}</h4>\n      </div>\n      <ion-button slot=\"end\" fill=\"clear\" (click)='goNext()'>\n        <ion-icon slot=\"icon-only\" name=\"caret-forward-circle-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <div *ngIf=\"showEvent\">\n      <ion-item *ngFor=\"let item of eventList\" class=\"card item-avatar item-text-wrap\" (click)=\"itemTapped(item)\">\n        <!-- <img ng-src=\"http://7thcolonnade.com/{{item.imageSmall}}\" alt=\"{{item.name}} Photo\"> -->\n        <ion-avatar slot=\"start\">\n          <bj-avatar  charcount=\"3\" height=\"100px\" width=\"100px\" numdata=\"{{getNum(item.event_date)}}\" textdata=\"{{getDay(item.event_date)}}\" shape=\"round\"></bj-avatar>\n        </ion-avatar>\n        <ion-label>\n        <h4>{{item.title}}</h4>\n        <h4>When: {{doDate(item.event_date, item.event_time)  | date:'short' }}</h4>\n        <h4>Where: {{item.event_venue}}</h4>\n        </ion-label>\n      </ion-item>\n    </div>\n    <ion-item *ngIf=\"!showEvent\"  >\n      <h3 style=\"text-align:center;\">There are no events to show</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/events/events-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
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


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");

    var routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

    EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/events/events.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/events.module.ts ***!
    \*****************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
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


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/events/events-routing.module.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_7__["EventsPage"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/events/events.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/events/events.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/events/events.page.ts":
  /*!***************************************!*\
    !*** ./src/app/events/events.page.ts ***!
    \***************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/info.service */
    "./src/app/services/info.service.ts");

    var EventsPage = /*#__PURE__*/function () {
      //selectedItem : any;
      function EventsPage(navCtrl, apiCall, infoService) {
        _classCallCheck(this, EventsPage);

        this.navCtrl = navCtrl;
        this.apiCall = apiCall;
        this.infoService = infoService;
        this.showEvent = true;
      }

      _createClass(EventsPage, [{
        key: "getEvents",
        value: function getEvents(a) {
          var _this = this;

          //let ld = new Date(a.getFullYear(), a.getMonth() + 1, 0);
          //let s = a.getFullYear() + '-' + (a.getMonth() + 1) + '-1';
          var e = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
          var params = 'cats=2&type=event&start=' + e;
          this.apiCall.fetchData('get/k2/items/', params, false).subscribe(function (data) {
            _this.showEvent = !!(Array.isArray(data['items']) && data['items'].length > 0);
            console.log(_this.showEvent);
            _this.eventList = data['items']; //this.normalize(data['items']);

            console.log(data['items']);
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('Fetch Ministries Completed');
          });
        }
      }, {
        key: "goNext",
        value: function goNext() {
          this.eventList = [];
          var CurrentDate = new Date(this.dates);
          CurrentDate.setMonth(CurrentDate.getMonth() + 1);
          this.dates = CurrentDate;
          this.getEvents(CurrentDate);
          console.log(CurrentDate);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.eventList = [];
          var CurrentDate = new Date(this.dates);
          CurrentDate.setMonth(CurrentDate.getMonth() - 1);
          this.dates = CurrentDate;
          this.getEvents(CurrentDate);
        }
      }, {
        key: "doHTML",
        value: function doHTML(str) {
          return str.replace(/<(?:.|\n)*?>/gm, '');
        }
      }, {
        key: "doDate",
        value: function doDate(d, t) {
          console.log(d);
          var str = d.slice(0, 10) + ' ' + t;
          return new Date(str.split("-").join("/"));
        }
      }, {
        key: "getDay",
        value: function getDay(str) {
          var days = ['SUNDAY', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
          var strDate = str instanceof Date ? str : new Date(str);
          return days[strDate.getDay()];
        }
      }, {
        key: "getMon",
        value: function getMon(str) {
          var strDate = str instanceof Date ? str : new Date(str);
          var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
          return months[strDate.getMonth()];
        }
      }, {
        key: "getNum",
        value: function getNum(str) {
          var strDate = str instanceof Date ? str : new Date(str);
          return strDate.getDate();
        }
      }, {
        key: "itemTapped",
        value: function itemTapped(item) {
          this.infoService.setData(item.id, item);
          this.navCtrl.navigateByUrl('/event/' + item.id);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dates = new Date();
          this.getEvents(new Date());
        }
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _services_info_service__WEBPACK_IMPORTED_MODULE_4__["InfoService"]
      }];
    };

    EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/events/events.page.scss"))["default"]]
    })], EventsPage);
    /***/
  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map