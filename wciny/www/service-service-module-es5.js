function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServiceServicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--  <div id=\"mapcanvas\"></div>-->\n<!--  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/img/location_marker.png\" alt=\"marker\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>-->\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">SERVICE SCHEDULE</h5>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div class=\"ion-padding\">\n      <ion-text style=\"font-weight: bold\"><p>Sunday Worship Service</p></ion-text>\n      <ion-text>First Service : 09.00am</ion-text>\n      <p >Second Service : 11:15am</p>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div class=\"ion-padding\">\n      <ion-text style=\"font-weight: bold\"><p>Mid Week Service</p></ion-text>\n      <ion-text>Every Wednesday | Communion : 7pm</ion-text>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div class=\"ion-padding\">\n      <ion-text style=\"font-weight: bold\"><p>Daily Covenant Hour of Prayer</p></ion-text>\n      <ion-text>Every Morning : 6:00am</ion-text>\n    </div>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/service/service-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/service-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ServicePageRoutingModule */

  /***/
  function srcAppServiceServiceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicePageRoutingModule", function () {
      return ServicePageRoutingModule;
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


    var _service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service.page */
    "./src/app/service/service.page.ts");

    var routes = [{
      path: '',
      component: _service_page__WEBPACK_IMPORTED_MODULE_3__["ServicePage"]
    }];

    var ServicePageRoutingModule = function ServicePageRoutingModule() {
      _classCallCheck(this, ServicePageRoutingModule);
    };

    ServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/service/service.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/service.module.ts ***!
    \*******************************************/

  /*! exports provided: ServicePageModule */

  /***/
  function srcAppServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicePageModule", function () {
      return ServicePageModule;
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


    var _service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service-routing.module */
    "./src/app/service/service-routing.module.ts");
    /* harmony import */


    var _service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service.page */
    "./src/app/service/service.page.ts");

    var ServicePageModule = function ServicePageModule() {
      _classCallCheck(this, ServicePageModule);
    };

    ServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicePageRoutingModule"]],
      declarations: [_service_page__WEBPACK_IMPORTED_MODULE_6__["ServicePage"]]
    })], ServicePageModule);
    /***/
  },

  /***/
  "./src/app/service/service.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/service/service.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppServiceServicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/service/service.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/service.page.ts ***!
    \*****************************************/

  /*! exports provided: ServicePage */

  /***/
  function srcAppServiceServicePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicePage", function () {
      return ServicePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicePage = /*#__PURE__*/function () {
      function ServicePage() {
        _classCallCheck(this, ServicePage);
      }

      _createClass(ServicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicePage;
    }();

    ServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./service.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./service.page.scss */
      "./src/app/service/service.page.scss"))["default"]]
    })], ServicePage);
    /***/
  }
}]);
//# sourceMappingURL=service-service-module-es5.js.map