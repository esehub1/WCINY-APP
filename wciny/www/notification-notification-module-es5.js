function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/communion.jpg\" alt=\"\">\n    <ion-item color=\"light\">\n      <div class=\"ion-text-center center-me\">\n        <h4>Subscribe to be notified</h4>\n      </div>\n    </ion-item>\n    <ion-item *ngFor=\"let i of itemList\">\n      <ion-label>{{getValue(i,'Group_Name')}}</ion-label>\n      <ion-toggle checked=\"{{getValue(i,'Enabled')}}\" color=\"winners-red\" (ionChange)=\" onToggleChange(i,$event.detail)\"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notification/notification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/notification/notification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification/notification.page.ts");

    var routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notification/notification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notification/notification.module.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification/notification.page.ts");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/notification/notification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/notification/notification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/notification/notification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/notification/notification.page.ts ***!
    \***************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
    "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");

    var NotificationPage = /*#__PURE__*/function () {
      function NotificationPage(storage, push, apiCall) {
        _classCallCheck(this, NotificationPage);

        this.storage = storage;
        this.push = push;
        this.apiCall = apiCall;
      }

      _createClass(NotificationPage, [{
        key: "getItems",
        value: function getItems() {
          var env = this;
          this.storage.get('pushSettings').then(function (data) {
            console.log(data);
            env.itemList = JSON.parse(data); //).filter( x => typeof x === 'object');/
            // env.itemList = this.parseAddKey(JSON.parse(data));

            console.log(env.itemList);
          });
        }
      }, {
        key: "parseAddKey",
        value: function parseAddKey(item) {//Object.keys(item).
          //return item[Object.keys(item)[0]];
        }
      }, {
        key: "save",
        value: function save() {
          /*this.nativeStorage.setItem('profile', JSON.stringify(this.items));*/
          this.storage.set('profile', JSON.stringify(this.profile));
        }
      }, {
        key: "addItem",
        value: function addItem(idKey, val) {
          if (this.profile.length > 0) {
            var obj = this.profile.filter(function (o) {
              return o[idKey];
            })[0];
            console.log(obj);

            if (typeof obj !== 'undefined') {
              if (obj[idKey] !== val && idKey !== 'pushSettings') this.profile.push(_defineProperty({}, idKey, val));
            } else {
              this.profile.push(_defineProperty({}, idKey, val));
            }
          } else {
            this.profile.push(_defineProperty({}, idKey, val));
          }

          console.log(this.profile);
          this.save();
        }
      }, {
        key: "getValue",
        value: function getValue(item, t) {
          //console.log(item[Object.keys(item)[0]][t])
          return item[Object.keys(item)[0]][t];
        }
      }, {
        key: "onToggleChange",
        value: function onToggleChange(i, s) {
          var _this = this;

          Object.values(this.itemList).forEach(function (v) {
            var dKey = Object.keys(v)[0];
            var dVal = v[dKey];

            if (dVal.id === Object.keys(i)[0]) {
              dVal.Enabled = s.checked;

              _this.storage.set('pushSettings', JSON.stringify(_this.itemList)).then(function () {
                console.log(dVal.Group_Name);
                s.checked ? _this.push.subscribeToTopic(dVal.Group_Name.replace(/\s/g, "-")) : _this.push.unsubscribeFromTopic(dVal.Group_Name.replace(/\s/g, "-"));
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        }
      }]);

      return NotificationPage;
    }();

    NotificationPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__["FCM"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/notification/notification.page.scss"))["default"]]
    })], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=notification-notification-module-es5.js.map