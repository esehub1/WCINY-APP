function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["socials-socials-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/socials/socials.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socials/socials.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSocialsSocialsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"remove-top\">\n    <img class=\"middlelogo\" src=\"assets/img/pic4.jpg\">\n      <ion-card *ngFor=\"let c of itemColumns; let i = index\">\n        <ion-card-header color=\"light\"><span style=\"font-weight: bold; font-size: 16px\">{{c.title}}</span></ion-card-header>\n        <ion-card-content (click)=\"navigate(c.link,c.isURL)\">\n          <ion-item lines=\"none\">\n            {{c.text}}\n            <ion-icon slot=\"end\" name=\"{{c.icon}}\" (click)=\"navigate(c.link,c.isURL)\"></ion-icon>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/socials/socials-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/socials/socials-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SocialsPageRoutingModule */

  /***/
  function srcAppSocialsSocialsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialsPageRoutingModule", function () {
      return SocialsPageRoutingModule;
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


    var _socials_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./socials.page */
    "./src/app/socials/socials.page.ts");

    var routes = [{
      path: '',
      component: _socials_page__WEBPACK_IMPORTED_MODULE_3__["SocialsPage"]
    }];

    var SocialsPageRoutingModule = function SocialsPageRoutingModule() {
      _classCallCheck(this, SocialsPageRoutingModule);
    };

    SocialsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SocialsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/socials/socials.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/socials/socials.module.ts ***!
    \*******************************************/

  /*! exports provided: SocialsPageModule */

  /***/
  function srcAppSocialsSocialsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialsPageModule", function () {
      return SocialsPageModule;
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


    var _socials_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./socials-routing.module */
    "./src/app/socials/socials-routing.module.ts");
    /* harmony import */


    var _socials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./socials.page */
    "./src/app/socials/socials.page.ts");

    var SocialsPageModule = function SocialsPageModule() {
      _classCallCheck(this, SocialsPageModule);
    };

    SocialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _socials_routing_module__WEBPACK_IMPORTED_MODULE_5__["SocialsPageRoutingModule"]],
      declarations: [_socials_page__WEBPACK_IMPORTED_MODULE_6__["SocialsPage"]]
    })], SocialsPageModule);
    /***/
  },

  /***/
  "./src/app/socials/socials.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/socials/socials.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSocialsSocialsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbHMvc29jaWFscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/socials/socials.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/socials/socials.page.ts ***!
    \*****************************************/

  /*! exports provided: SocialsPage */

  /***/
  function srcAppSocialsSocialsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialsPage", function () {
      return SocialsPage;
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


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SocialsPage = /*#__PURE__*/function () {
      function SocialsPage(apiCall, appBrowser, navCtrl) {
        _classCallCheck(this, SocialsPage);

        this.apiCall = apiCall;
        this.appBrowser = appBrowser;
        this.navCtrl = navCtrl;
        this.itemColumns = [
        /*    {
              title: 'About WCINY',
              icon: 'information-circle-outline',
              text: 'Learn About Us',
              isURL: true,
              link: ''
            },*/
        {
          title: 'One on One with Our Resident Pastor',
          icon: 'information-circle',
          text: 'Schedule Pastoral Appointment',
          isURL: false,
          link: 'pastor'
        }, {
          title: 'Youtube',
          icon: 'logo-youtube',
          text: 'Watch Our Channel',
          isURL: true,
          link: 'https://www.youtube.com/channel/UCcaUxWoaZRUhnwFfBkXTLPw'
        }, {
          title: 'Twitter',
          icon: 'logo-twitter',
          text: 'Connect With Us',
          isURL: true,
          link: 'https://twitter.com/WINNERSCHAPELNY'
        }, {
          title: 'Facebook',
          icon: 'logo-facebook',
          text: 'Connect With Us',
          isURL: true,
          link: 'https://www.facebook.com/winners.chapelNewYork'
        }];
        this.options = {
          location: 'yes',
          hidden: 'no',
          clearcache: 'yes',
          clearsessioncache: 'yes',
          zoom: 'yes',
          hardwareback: 'yes',
          mediaPlaybackRequiresUserAction: 'no',
          shouldPauseOnSuspend: 'no',
          closebuttoncaption: 'Close',
          disallowoverscroll: 'no',
          toolbar: 'yes',
          enableViewportScale: 'no',
          allowInlineMediaPlayback: 'no',
          presentationstyle: 'pagesheet',
          fullscreen: 'yes'
        };
      }

      _createClass(SocialsPage, [{
        key: "cordovaBrowse",
        value: function cordovaBrowse(url) {
          var target = "_self";
          this.appBrowser.create(url, target, this.options);
        }
      }, {
        key: "systemBrowse",
        value: function systemBrowse(url) {
          var target = "_system";
          this.appBrowser.create(url, target, this.options);
        }
      }, {
        key: "navigate",
        value: function navigate(opt, isURL) {
          console.log(opt);
          /*switch (opt) {
            case 'twitter':
              link = 'https://twitter.com/WINNERSCHAPELNY';
              break;
            case 'facebook':
              link ='https://www.facebook.com/winners.chapelNewYork';
              break;
            case 'instagram':
              link ='https://www.instagram.com/winnerschapelny/';
              break;
            case 'transport':
              link = 'https://winnerschapelny.org/give';
              break;
            case 'testimony':
              link = '/testimony';
              break;
            case 'prayers':
              link = '/prayer';
              break;
            case 'pastor':
              link = '/pastor';
              break;
            default:
              link='/home';
              isURL=false;
              break;
          }*/

          isURL ? this.systemBrowse(opt) : this.navCtrl.navigate([opt]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialsPage;
    }();

    SocialsPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SocialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-socials',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./socials.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/socials/socials.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./socials.page.scss */
      "./src/app/socials/socials.page.scss"))["default"]]
    })], SocialsPage);
    /***/
  }
}]);
//# sourceMappingURL=socials-socials-module-es5.js.map