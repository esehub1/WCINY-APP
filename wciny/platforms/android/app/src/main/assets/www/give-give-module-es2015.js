(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["give-give-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <iframe id=\"modalFrame\" class=\"centerme\"  [src]=\"clipSrc | safe\"  allowfullscreen></iframe>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/give/give-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/give/give-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GivePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivePageRoutingModule", function() { return GivePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _give_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./give.page */ "./src/app/give/give.page.ts");




const routes = [
    {
        path: '',
        component: _give_page__WEBPACK_IMPORTED_MODULE_3__["GivePage"]
    }
];
let GivePageRoutingModule = class GivePageRoutingModule {
};
GivePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GivePageRoutingModule);



/***/ }),

/***/ "./src/app/give/give.module.ts":
/*!*************************************!*\
  !*** ./src/app/give/give.module.ts ***!
  \*************************************/
/*! exports provided: GivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivePageModule", function() { return GivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _give_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./give-routing.module */ "./src/app/give/give-routing.module.ts");
/* harmony import */ var _give_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./give.page */ "./src/app/give/give.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








let GivePageModule = class GivePageModule {
};
GivePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _give_routing_module__WEBPACK_IMPORTED_MODULE_5__["GivePageRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_give_page__WEBPACK_IMPORTED_MODULE_6__["GivePage"]]
    })
], GivePageModule);



/***/ }),

/***/ "./src/app/give/give.page.scss":
/*!*************************************!*\
  !*** ./src/app/give/give.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iframe {\n  overflow: hidden;\n  border: none;\n}\n\n.centerme {\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n}\n\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWJhdHVuZGUvRG9jdW1lbnRzL21vYmlsZS93Y2lueS9zcmMvYXBwL2dpdmUvZ2l2ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dpdmUvZ2l2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9naXZlL2dpdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jZW50ZXJtZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG59XG5cbi52aWRlby1jb250YWluZXIgaWZyYW1lLCAudmlkZW8tY29udGFpbmVyIG9iamVjdCwgLnZpZGVvLWNvbnRhaW5lciBlbWJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiaWZyYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2VudGVybWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsIC52aWRlby1jb250YWluZXIgb2JqZWN0LCAudmlkZW8tY29udGFpbmVyIGVtYmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/give/give.page.ts":
/*!***********************************!*\
  !*** ./src/app/give/give.page.ts ***!
  \***********************************/
/*! exports provided: GivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivePage", function() { return GivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let GivePage = class GivePage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (this.route.snapshot.data.special) {
            const opt = this.route.snapshot.data.special;
            switch (opt) {
                case 'give':
                    this.clipSrc = 'https://forms.ministryforms.net/embed.aspx?formId=1ff80167-7159-4b4e-ae46-58674c3c5d9c';
                    break;
                case 'store':
                    this.clipSrc = 'https://winnerschapelny.org/store';
                    break;
                case 'radio':
                    this.clipSrc = 'http://www.domimedia.org/';
                    break;
                case 'live':
                    this.clipSrc = 'https://www.youtube.com/channel/UCcaUxWoaZRUhnwFfBkXTLPw';
                    break;
                case 'below':
                    this.clipSrc = 'https://winnerschapelny.org/get-connected/join-the-team';
                    break;
                default:
                    this.clipSrc = 'https://forms.ministryforms.net/embed.aspx?formId=1ff80167-7159-4b4e-ae46-58674c3c5d9c';
                    break;
            }
            console.log(this.clipSrc);
        }
    }
};
GivePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GivePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-give',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./give.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./give.page.scss */ "./src/app/give/give.page.scss")).default]
    })
], GivePage);



/***/ })

}]);
//# sourceMappingURL=give-give-module-es2015.js.map