webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<app-places></app-places>\n\n<!-- Page Content -->\n<div class=\"container\">\n\n  <!-- Jumbotron Header -->\n  <header class=\"jumbotron my-4\">\n    <h1 class=\"display-3\">A Warm Welcome!</h1>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit\n      vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>\n    <a href=\"#\" class=\"btn btn-primary btn-lg\">Call to action!</a>\n  </header>\n\n  <!-- Page Features -->\n  <div class=\"row text-center\">\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa\n            natus architecto.</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa\n            natus architecto.</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.row -->\n\n</div>\n<!-- /.container -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_header_menu_header_menu_component__ = __webpack_require__("../../../../../src/app/shared/menu/header-menu/header-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__places_places_component__ = __webpack_require__("../../../../../src/app/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_footer_menu_footer_menu_component__ = __webpack_require__("../../../../../src/app/shared/menu/footer-menu/footer-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_header_menu_header_menu_component__["a" /* HeaderMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__places_places_component__["a" /* PlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_footer_menu_footer_menu_component__["a" /* FooterMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/mock-places.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [
    {
        id: 1,
        name: 'Odense Zoo',
        latitude: 55.378785,
        longitude: 10.37126,
        imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Denmark-Odense_Zoo.jpg/1200px-Denmark-Odense_Zoo.jpg',
        rating: 3.4
    },
    {
        id: 2,
        name: 'Assistens Cemetery',
        latitude: 55.403755999999994,
        longitude: 10.40237,
        imgSource: 'https://files.guidedanmark.org/files/382/152501_15294_Assistens-Kirkegrd_Kim-Wyon.jpg?qfix',
        rating: 2.9
    },
    {
        id: 3,
        name: 'Skallebølle Slagtehus',
        latitude: 55.38739,
        longitude: 10.192035,
        imgSource: 'http://detfynske.dk/imagegen.ashx?width=555&height=355&constrain=true&image=/media/855152/skalleboelle-slagtehus.jpg',
        rating: 4.2
    }
];


/***/ }),

/***/ "../../../../../src/app/places/places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <h2>Mine steder</h2>\n    <ul class=\"places\">\n      <li *ngFor=\"let pla of places\" (click)=\"onSelect(pla)\">\n        <span class=\"badge\">{{pla.id}}</span> {{pla.name}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <div *ngIf=\"selectedPlace\" class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"{{selectedPlace.imgSource}}\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"># {{selectedPlace.id}} - {{ selectedPlace.name | uppercase }}</h5>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n      <div class=\"card-body\">\n        <ul>\n          <li>Latitude: {{selectedPlace.latitude}}</li>\n          <li>Longitude: {{selectedPlace.longitude}}</li>\n        </ul>\n        <p class=\"card-text\">blah blah blah</p>\n        <a href=\"#\" class=\"card-link\">Reviews</a>\n        <a href=\"#\" class=\"card-link\">Hjemmeside</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mock_places__ = __webpack_require__("../../../../../src/app/models/mock-places.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesComponent = /** @class */ (function () {
    function PlacesComponent() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__models_mock_places__["a" /* PLACES */];
    }
    PlacesComponent.prototype.onSelect = function (place) {
        this.selectedPlace = place;
    };
    PlacesComponent.prototype.ngOnInit = function () {
    };
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-places',
            template: __webpack_require__("../../../../../src/app/places/places.component.html"),
            styles: [__webpack_require__("../../../../../src/app/places/places.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/menu/footer-menu/footer-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/menu/footer-menu/footer-menu.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Footer -->\n    <footer class=\"py-5 bg-dark\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2018</p>\n      </div>\n      <!-- /.container -->\n    </footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/menu/footer-menu/footer-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterMenuComponent = /** @class */ (function () {
    function FooterMenuComponent() {
    }
    FooterMenuComponent.prototype.ngOnInit = function () {
    };
    FooterMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer-menu',
            template: __webpack_require__("../../../../../src/app/shared/menu/footer-menu/footer-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/menu/footer-menu/footer-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterMenuComponent);
    return FooterMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/menu/header-menu/header-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.dropdown-header{\r\n  padding: 0rem 1.0rem;\r\n  font-size: 0.9rem;\r\n}\r\na.dropdown-item{\r\n  padding: 0rem 1.5rem;\r\n  font-size: 0.9rem;\r\n}\r\n.dropdown-divider{\r\n  margin: .25rem 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/menu/header-menu/header-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../../../assets/brand/brand.png\" width=\"30\" height=\"30\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Nyheder<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" ngbDropdown >\n          <a class=\"nav-link\" ngbDropdownToggle href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Admin</a>\n          <div ngbDropdownMenu  aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-header\">Steder</a>\n            <a class=\"dropdown-item\" href=\"#\">Vis Steder</a>\n            <a class=\"dropdown-item\" href=\"#\">Opret Sted</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-header\">Profil</a>\n            <a class=\"dropdown-item\" href=\"#\">Vis Profiler</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-header\">Andet</a>\n            <a class=\"dropdown-item\" href=\"#\">Test #1</a>\n            <a class=\"dropdown-item\" href=\"#\">Test #2</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Steder</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/menu/header-menu/header-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent() {
    }
    HeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header-menu',
            template: __webpack_require__("../../../../../src/app/shared/menu/header-menu/header-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/menu/header-menu/header-menu.component.css")]
        })
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map