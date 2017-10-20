webpackJsonp(["main"],{

/***/ "../../../../../src-corporate/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src-corporate/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src-corporate/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corporation_list_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__corporation_edit_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__corporation_add_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_list_component__ = __webpack_require__("../../../../../src-corporate/app/city-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__city_add_component__ = __webpack_require__("../../../../../src-corporate/app/city-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__city_edit_component__ = __webpack_require__("../../../../../src-corporate/app/city-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__country_list_component__ = __webpack_require__("../../../../../src-corporate/app/country-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__country_add_component__ = __webpack_require__("../../../../../src-corporate/app/country-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__country_edit_component__ = __webpack_require__("../../../../../src-corporate/app/country-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__location_list_component__ = __webpack_require__("../../../../../src-corporate/app/location-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/corporation-list', pathMatch: 'full' },
    { path: 'corporation-list', component: __WEBPACK_IMPORTED_MODULE_2__corporation_list_component__["a" /* CorporationListComponent */] },
    { path: 'corporation-edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__corporation_edit_component__["a" /* CorporationEditComponent */] },
    { path: 'corporation-add', component: __WEBPACK_IMPORTED_MODULE_4__corporation_add_component__["a" /* CorporationAddComponent */] },
    { path: 'location-list', component: __WEBPACK_IMPORTED_MODULE_11__location_list_component__["a" /* LocationListComponent */] },
    { path: 'city-list', component: __WEBPACK_IMPORTED_MODULE_5__city_list_component__["a" /* CityListComponent */] },
    { path: 'city-add', component: __WEBPACK_IMPORTED_MODULE_6__city_add_component__["a" /* CityAddComponent */] },
    { path: 'city-add/:id', component: __WEBPACK_IMPORTED_MODULE_6__city_add_component__["a" /* CityAddComponent */] },
    { path: 'city-edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__city_edit_component__["a" /* CityEditComponent */] },
    { path: 'country-list', component: __WEBPACK_IMPORTED_MODULE_8__country_list_component__["a" /* CountryListComponent */] },
    { path: 'country-add', component: __WEBPACK_IMPORTED_MODULE_9__country_add_component__["a" /* CountryAddComponent */] },
    { path: 'country-edit/:id', component: __WEBPACK_IMPORTED_MODULE_10__country_edit_component__["a" /* CountryEditComponent */] },
    { path: '**', redirectTo: 'location-list', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n   \n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <span class=\"h1\" class=\"navbar-brand mb-0\">{{title}}</span>\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    \n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/corporation-list\">Korporacje <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/city-list\">Miasta</a>\n        </li>\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/country-list\">Państwa</a>\n        </li>\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/location-list\">Lokalizacje</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n</section>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src-corporate/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CorpoList';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src-corporate/app/app.component.html"),
        styleUrls: [],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("../../../../../src-corporate/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src-corporate/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__corporation_list_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__corporation_add_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__corporation_edit_component__ = __webpack_require__("../../../../../src-corporate/app/corporation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__city_list_component__ = __webpack_require__("../../../../../src-corporate/app/city-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__city_add_component__ = __webpack_require__("../../../../../src-corporate/app/city-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__city_edit_component__ = __webpack_require__("../../../../../src-corporate/app/city-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__country_list_component__ = __webpack_require__("../../../../../src-corporate/app/country-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__country_add_component__ = __webpack_require__("../../../../../src-corporate/app/country-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__country_edit_component__ = __webpack_require__("../../../../../src-corporate/app/country-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__location_list_component__ = __webpack_require__("../../../../../src-corporate/app/location-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__("../../../../../src-corporate/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Imports for loading & configuring the in-memory web api

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__corporation_list_component__["a" /* CorporationListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__corporation_add_component__["a" /* CorporationAddComponent */],
            __WEBPACK_IMPORTED_MODULE_9__corporation_edit_component__["a" /* CorporationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__city_list_component__["a" /* CityListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__city_add_component__["a" /* CityAddComponent */],
            __WEBPACK_IMPORTED_MODULE_12__city_edit_component__["a" /* CityEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__country_list_component__["a" /* CountryListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__country_add_component__["a" /* CountryAddComponent */],
            __WEBPACK_IMPORTED_MODULE_15__country_edit_component__["a" /* CountryEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__location_list_component__["a" /* LocationListComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_17__corporation_service__["a" /* CorporationService */], __WEBPACK_IMPORTED_MODULE_18__city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_19__country_service__["a" /* CountryService */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/city-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n            <h5 class=\"edit-form-header\">Dodaj miasto</h5>\r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"inputCityName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                <input  [(ngModel)]=\"cityName\" type=\"text\" class=\"form-control\" id=\"inputCityName\" placeholder=\"nazwa miasta\" tabindex=\"1\" required/>\r\n            </div>\r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"inputCountrySelect\">Państwo: </label><label class=\"required\">( wymagane )</label>\r\n                <select [(ngModel)]=\"countryId\" class=\"form-control\" id=\"inputCountrySelect\" tabindex=\"2\" required>\r\n                    <option *ngFor=\"let country of countries\" value={{country.id}}>{{country.name}}</option>\r\n                </select>\r\n            </div>\r\n    \r\n            <div class=\"form-group clearfix\">\r\n                <button (click)=\"add(cityName,countryId)\" class=\"btn btn-primary float-right\" tabindex=\"3\">Dodaj</button> \r\n                <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/city-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CityAddComponent = (function () {
    function CityAddComponent(countryService, cityService, router, route, location) {
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    CityAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CityAddComponent.prototype.add = function (cityName, countryId) {
        cityName = cityName.trim();
        if (!cityName || !countryId) {
            return;
        }
        this.cityService.create(cityName, 1 * countryId);
        this.goBack();
    };
    CityAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.countryService.getCountry(+params.get('id')); })
            .subscribe(function (country) { return _this.country = country; });
        this.route.paramMap
            .switchMap(function (params) { return _this.countryService.getCountries(); })
            .subscribe(function (countries) { return _this.countries = countries; });
        this.countryId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    };
    return CityAddComponent;
}());
CityAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'city-add',
        template: __webpack_require__("../../../../../src-corporate/app/city-add.component.html"),
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _e || Object])
], CityAddComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=city-add.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/city-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"city\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n            <h5 class=\"edit-form-header\">Edytuj miasto: {{city.name}}</h5>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"inputCityName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                <input  [(ngModel)]=\"city.name\" type=\"text\" class=\"form-control\" id=\"inputCityName\" placeholder=\"nazwa miasta\" tabindex=\"1\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"inputCountrySelect\">Państwo: </label><label class=\"required\">( wymagane )</label>\r\n                <select [(ngModel)]=\"countryId\" class=\"form-control\" id=\"inputCountrySelect\" tabindex=\"2\" required>\r\n                    <option *ngFor=\"let country of countries\" value={{country.id}}>{{country.name}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group clearfix\">\r\n                <button (click)=\"save()\" class=\"btn btn-primary float-right\" tabindex=\"3\">Zapisz</button> \r\n                <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/city-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CityEditComponent = (function () {
    function CityEditComponent(cityService, countryService, route, location) {
        this.cityService = cityService;
        this.countryService = countryService;
        this.route = route;
        this.location = location;
    }
    CityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.cityService.getCity(+params.get('id')); })
            .subscribe(function (city) { return _this.city = city; });
        this.route.paramMap
            .switchMap(function (params) { return _this.cityService.getCity(+params.get('id')); })
            .subscribe(function (city) { return _this.countryId = city.country_id; });
        this.getCountries();
    };
    CityEditComponent.prototype.save = function () {
        var _this = this;
        this.city.name = this.city.name.trim();
        this.city.country_id = 1 * this.countryId;
        if (!this.city.name || !this.city.country_id) {
            return;
        }
        this.cityService.update(this.city)
            .then(function () { return _this.goBack(); });
    };
    CityEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    CityEditComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    return CityEditComponent;
}());
CityEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'city-edit',
        template: __webpack_require__("../../../../../src-corporate/app/city-edit.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__country_service__["a" /* CountryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], CityEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=city-edit.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/city-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tbody>tr{cursor:pointer}thead>tr>th:first-child{width:50px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-corporate/app/city-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>id</th>\r\n        <th>nazwa</th>\r\n        <th>państwo</th>\r\n        <th>&nbsp;</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let city of cities\">\r\n        <td (click)=\"onClick(city)\">{{city.id}}</td>\r\n        <td (click)=\"onClick(city)\">{{city.name}}</td>\r\n        <td (click)=\"onClick(city)\">{{countries.find(getCountry(city.country_id)).name}}</td>\r\n        <td><button *ngIf=\"!cityHasCorporations(city.id)\" (click)=\"deleteCity(city)\" class=\"btn btn-sm btn-danger float-right\">Usuń miasto</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"/city-add\" class=\"link-add\">[ dodaj miasto ]</a>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/city-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CityListComponent = (function () {
    function CityListComponent(cityService, countryService, corporationService, router) {
        this.cityService = cityService;
        this.countryService = countryService;
        this.corporationService = corporationService;
        this.router = router;
    }
    CityListComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService
            .getCities()
            .then(function (cities) { return _this.cities = cities; });
    };
    CityListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService
            .getCountries()
            .then(function (countries) { return _this.countries = countries; });
    };
    CityListComponent.prototype.getCorporations = function () {
        var _this = this;
        this.corporationService.getCorporations().then(function (corporations) { return _this.corporations = corporations; });
    };
    CityListComponent.prototype.ngOnInit = function () {
        this.getCorporations();
        this.getCountries();
        this.getCities();
    };
    CityListComponent.prototype.onClick = function (city) {
        this.router.navigate(['./city-edit/' + city.id]);
    };
    CityListComponent.prototype.getCity = function (city_id) {
        return function (element) {
            return element.id === city_id;
        };
    };
    CityListComponent.prototype.getCountry = function (country_id) {
        return function (element) {
            return element.id === country_id;
        };
    };
    CityListComponent.prototype.cityHasCorporations = function (city) {
        for (var i = 0; i < this.corporations.length; i++) {
            if (this.corporations[i].city === city) {
                return true;
            }
        }
        return false;
    };
    CityListComponent.prototype.deleteCity = function (city) {
        var _this = this;
        this.cityService
            .delete(city.id)
            .then(function () {
            _this.cities = _this.cities.filter(function (h) { return h !== city; });
        });
    };
    return CityListComponent;
}());
CityListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'city-list',
        template: __webpack_require__("../../../../../src-corporate/app/city-list.component.html"),
        styles: [__webpack_require__("../../../../../src-corporate/app/city-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__city_service__["a" /* CityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__corporation_service__["a" /* CorporationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__corporation_service__["a" /* CorporationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CityListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=city-list.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/city.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = (function () {
    function CityService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.citiesUrl = 'api/cities'; // url to web api
    }
    CityService.prototype.getCities = function () {
        return this.http.get(this.citiesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CityService.prototype.getCity = function (id) {
        var url = this.citiesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CityService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CityService.prototype.delete = function (id) {
        var url = this.citiesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CityService.prototype.create = function (cityName, countryId) {
        return this.http
            .post(this.citiesUrl, JSON.stringify({ name: cityName, country_id: countryId }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CityService.prototype.update = function (city) {
        var url = this.citiesUrl + "/" + city.id;
        return this.http
            .put(url, JSON.stringify(city), { headers: this.headers })
            .toPromise()
            .then(function () { return city; })
            .catch(this.handleError);
    };
    return CityService;
}());
CityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CityService);

var _a;
//# sourceMappingURL=city.service.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n                <h5 class=\"edit-form-header\">Dodaj korporację</h5>\r\n        \r\n                <div class=\"form-group\">\r\n                    <label for=\"inputCorporationName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                    <input  [(ngModel)]=\"corporationName\" \r\n                        type=\"text\" \r\n                        class=\"form-control\" \r\n                        id=\"inputCorporationName\" \r\n                        placeholder=\"nazwa korporacji\" \r\n                        tabindex=\"1\" \r\n                        value =\"\" required/>\r\n                </div>\r\n        \r\n                <div class=\"form-group\">\r\n                    <label for=\"inputCitySelect\">Miasto: </label><label class=\"required\">( wymagane )</label>\r\n                    <select [(ngModel)]=\"cityId\" class=\"form-control\" id=\"inputCitySelect\" tabindex=\"2\" required>\r\n                        <option value=0>--- wybierz ---</option>                        \r\n                        <option *ngFor=\"let city of cities\" value={{city.id}}>{{city.name}}</option>\r\n                    </select>\r\n                </div>\r\n    \r\n                <div class=\"form-group\">\r\n                        <label for=\"inputCEO\">CEO: </label>\r\n                        <input  #corporationCeoName type=\"text\" class=\"form-control\" id=\"inputCEO\" placeholder=\"CEO\" tabindex=\"3\" />\r\n                </div>\r\n    \r\n                <div class=\"form-group\">\r\n                        <label for=\"inputWWW\">www: </label>\r\n                        <input  #corporationWebsite type=\"text\" class=\"form-control\" id=\"inputWWW\" placeholder=\"www\" tabindex=\"4\" />\r\n                </div>\r\n    \r\n                <div class=\"form-group\">\r\n                        <label for=\"inputEmail\">e-mail: </label>\r\n                        <input  #corporationEmail type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"email kontaktowy\" tabindex=\"5\"/>\r\n                </div>\r\n    \r\n                <div class=\"form-group clearfix\">\r\n                    <button (click)=\"add(corporationName, corporationCeoName.value, corporationWebsite.value, corporationEmail.value)\" class=\"btn btn-primary float-right\" tabindex=\"6\">Zapisz</button> \r\n                    <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporationAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CorporationAddComponent = (function () {
    function CorporationAddComponent(cityService, corporationService, route, location) {
        this.cityService = cityService;
        this.corporationService = corporationService;
        this.route = route;
        this.location = location;
        this.cityId = 0;
    }
    CorporationAddComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    CorporationAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CorporationAddComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    CorporationAddComponent.prototype.add = function (name, ceoName, website, email) {
        name = name.trim();
        ceoName = ceoName.trim();
        website = website.trim();
        email = email.trim();
        if (!name || !this.cityId) {
            return;
        }
        this.corporationService.create(name, 1 * this.cityId, email, ceoName, website);
        this.goBack();
    };
    return CorporationAddComponent;
}());
CorporationAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'corporation-add',
        template: __webpack_require__("../../../../../src-corporate/app/corporation-add.component.html"),
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__city_service__["a" /* CityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__corporation_service__["a" /* CorporationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__corporation_service__["a" /* CorporationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], CorporationAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=corporation-add.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"corporation\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n            <h5 class=\"edit-form-header\">Edytuj korporację: {{corporation.name}}</h5>\r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"inputCorporationName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                <input  [(ngModel)]=\"corporation.name\" type=\"text\" class=\"form-control\" id=\"inputCorporationName\" placeholder=\"nazwa korporacji\" tabindex=\"1\" required/>\r\n            </div>\r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"inputCitySelect\">Miasto: </label><label class=\"required\">( wymagane )</label>\r\n                <select [(ngModel)]=\"cityId\" class=\"form-control\" id=\"inputCitySelect\" tabindex=\"2\">\r\n                    <option *ngFor=\"let city of cities\" value={{city.id}}>{{city.name}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                    <label for=\"inputCEO\">CEO: </label>\r\n                    <input  [(ngModel)]=\"corporation.ceo_name\" type=\"text\" class=\"form-control\" id=\"inputCEO\" placeholder=\"CEO\" tabindex=\"3\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                    <label for=\"inputWWW\">www: </label>\r\n                    <input  [(ngModel)]=\"corporation.website\" type=\"text\" class=\"form-control\" id=\"inputWWW\" placeholder=\"www\" tabindex=\"4\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                    <label for=\"inputEmail\">e-mail: </label>\r\n                    <input  [(ngModel)]=\"corporation.email\" type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"email kontaktowy\" tabindex=\"5\" />\r\n            </div>\r\n\r\n            <div class=\"form-group clearfix\">\r\n                <button (click)=\"save()\" class=\"btn btn-primary float-right\" tabindex=\"6\">Zapisz</button> \r\n                <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CorporationEditComponent = (function () {
    function CorporationEditComponent(corporationService, cityService, route, location) {
        this.corporationService = corporationService;
        this.cityService = cityService;
        this.route = route;
        this.location = location;
    }
    CorporationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.corporationService.getCorporation(+params.get('id')); })
            .subscribe(function (corporation) { return _this.corporation = corporation; });
        this.route.paramMap
            .switchMap(function (params) { return _this.corporationService.getCorporation(+params.get('id')); })
            .subscribe(function (corporation) { return _this.cityId = corporation.city; });
        this.getCities();
    };
    CorporationEditComponent.prototype.save = function () {
        var _this = this;
        this.corporation.name = this.corporation.name.trim();
        this.corporation.ceo_name = this.corporation.ceo_name.trim();
        this.corporation.website = this.corporation.website.trim();
        this.corporation.email = this.corporation.email.trim();
        this.corporation.city = 1 * this.cityId;
        if (!this.corporation.name || !this.corporation.city) {
            return;
        }
        this.corporationService.update(this.corporation)
            .then(function () { return _this.goBack(); });
    };
    CorporationEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    CorporationEditComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    return CorporationEditComponent;
}());
CorporationEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'corporation-edit',
        template: __webpack_require__("../../../../../src-corporate/app/corporation-edit.component.html"),
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__corporation_service__["a" /* CorporationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__corporation_service__["a" /* CorporationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__city_service__["a" /* CityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], CorporationEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=corporation-edit.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tbody>tr{cursor:pointer}thead>tr>th:first-child{width:50px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>id</th>\r\n        <th>nazwa</th>\r\n        <th>miasto</th>\r\n        <th>państwo</th>\r\n        <th>CEO</th>\r\n        <th>website</th>\r\n        <th>email</th>\r\n        <th>&nbsp;</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let corporation of corporations\">\r\n\r\n        <td (click)=\"onClick(corporation)\">{{corporation.id}}</td>\r\n        <td (click)=\"onClick(corporation)\">{{corporation.name}}</td>\r\n        <td (click)=\"onClick(corporation)\">{{cities.find(getCity(corporation.city)).name}}</td>\r\n        <td (click)=\"onClick(corporation)\">{{countries.find(getCountry(cities.find(getCity(corporation.city)).country_id)).name}}</td>\r\n        <td (click)=\"onClick(corporation)\">{{corporation.ceo_name}}</td>\r\n        <td><a href=\"http://{{corporation.website}}\">{{corporation.website}}</a></td>\r\n        <td><a href=\"mailto:{{corporation.email}}\">{{corporation.email}}</a></td>\r\n\r\n        <td><button (click)=\"deleteCorporation(corporation)\" class=\"btn btn-sm btn-danger float-right\">Usuń</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"/corporation-add\" class=\"link-add\">[ dodaj korporację ]</a>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/corporation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorporationListComponent = (function () {
    function CorporationListComponent(corporationService, cityService, countryService, router) {
        this.corporationService = corporationService;
        this.cityService = cityService;
        this.countryService = countryService;
        this.router = router;
    }
    CorporationListComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getCities();
        this.getCorporations();
    };
    CorporationListComponent.prototype.getCorporations = function () {
        var _this = this;
        this.corporationService
            .getCorporations()
            .then(function (corporations) { return _this.corporations = corporations; });
    };
    CorporationListComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService
            .getCities()
            .then(function (cities) { return _this.cities = cities; });
    };
    CorporationListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService
            .getCountries()
            .then(function (countries) { return _this.countries = countries; });
    };
    CorporationListComponent.prototype.onClick = function (corporation) {
        this.selectedCorporation = corporation;
        this.router.navigate(['./corporation-edit/' + this.selectedCorporation.id]);
    };
    CorporationListComponent.prototype.getCity = function (city_id) {
        return function (element) {
            return element.id === city_id;
        };
    };
    CorporationListComponent.prototype.getCountry = function (country_id) {
        return function (element) {
            return element.id === country_id;
        };
    };
    CorporationListComponent.prototype.deleteCorporation = function (corporation) {
        var _this = this;
        this.corporationService
            .delete(corporation.id)
            .then(function () {
            _this.corporations = _this.corporations.filter(function (h) { return h !== corporation; });
        });
    };
    return CorporationListComponent;
}());
CorporationListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'corporation-list',
        template: __webpack_require__("../../../../../src-corporate/app/corporation-list.component.html"),
        styles: [__webpack_require__("../../../../../src-corporate/app/corporation-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__corporation_service__["a" /* CorporationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__corporation_service__["a" /* CorporationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__city_service__["a" /* CityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CorporationListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=corporation-list.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/corporation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorporationService = (function () {
    function CorporationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.corporationsUrl = 'api/corporations'; // url to web api
    }
    CorporationService.prototype.getCorporations = function () {
        return this.http.get(this.corporationsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CorporationService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CorporationService.prototype.getCorporation = function (id) {
        return this.getCorporations()
            .then(function (corporations) { return corporations.find(function (corporation) { return corporation.id === id; }); });
    };
    CorporationService.prototype.update = function (corporation) {
        var url = this.corporationsUrl + "/" + corporation.id;
        return this.http
            .put(url, JSON.stringify(corporation), { headers: this.headers })
            .toPromise()
            .then(function () { return corporation; })
            .catch(this.handleError);
    };
    CorporationService.prototype.create = function (name, city, email, ceo_name, website) {
        return this.http
            .post(this.corporationsUrl, JSON.stringify({
            name: name, city: city, email: email, ceo_name: ceo_name, website: website
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CorporationService.prototype.delete = function (id) {
        var url = this.corporationsUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return CorporationService;
}());
CorporationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CorporationService);

var _a;
//# sourceMappingURL=corporation.service.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/country-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n            <h5 class=\"edit-form-header\">Dodaj państwo</h5>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"inputCountryName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                <input  [(ngModel)]=\"countryName\"  type=\"text\" class=\"form-control\" id=\"inputCountryName\" placeholder=\"nazwa państwa\" tabindex=\"1\" required />\r\n            </div>\r\n    \r\n            <div class=\"form-group clearfix\">\r\n                <button (click)=\"add(countryName)\" class=\"btn btn-primary float-right\" tabindex=\"2\">Zapisz</button> \r\n                <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/country-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryAddComponent = (function () {
    function CountryAddComponent(countryService, router, location) {
        this.countryService = countryService;
        this.router = router;
        this.location = location;
    }
    CountryAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CountryAddComponent.prototype.add = function (countryName) {
        countryName = countryName.trim();
        if (!countryName) {
            return;
        }
        this.countryService.create(countryName);
        this.location.back();
    };
    return CountryAddComponent;
}());
CountryAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'country-add',
        template: __webpack_require__("../../../../../src-corporate/app/country-add.component.html"),
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
], CountryAddComponent);

var _a, _b, _c;
//# sourceMappingURL=country-add.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/country-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"country\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 edit-form\">\r\n            <h5 class=\"edit-form-header\">Edytuj państwo: {{country.name}}</h5>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"inputCountryName\">Nazwa: </label><label class=\"required\">( wymagana )</label>\r\n                <input  [(ngModel)]=\"country.name\" type=\"text\" class=\"form-control\" id=\"inputCountryName\" placeholder=\"nazwa państwa\" tabindex=\"1\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group clearfix\">\r\n                <button (click)=\"save()\" class=\"btn btn-primary float-right\" tabindex=\"3\">Zapisz</button> \r\n                <button (click)=\"goBack()\" class=\"btn btn-danger float-left\" tabindex=\"0\">Powrót</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/country-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryEditComponent = (function () {
    function CountryEditComponent(countryService, route, location) {
        this.countryService = countryService;
        this.route = route;
        this.location = location;
    }
    CountryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.countryService.getCountry(+params.get('id')); })
            .subscribe(function (country) { return _this.country = country; });
    };
    CountryEditComponent.prototype.save = function () {
        var _this = this;
        this.country.name = this.country.name.trim();
        if (!this.country.name) {
            return;
        }
        this.countryService.update(this.country)
            .then(function () { return _this.goBack(); });
    };
    CountryEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CountryEditComponent;
}());
CountryEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'country-edit',
        template: __webpack_require__("../../../../../src-corporate/app/country-edit.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], CountryEditComponent);

var _a, _b, _c;
//# sourceMappingURL=country-edit.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/country-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tbody>tr{cursor:pointer}thead>tr>th:first-child{width:50px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-corporate/app/country-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>id</th>\r\n        <th>nazwa</th>\r\n        <th>&nbsp;</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let country of countries\">\r\n        <td (click)=\"onClick(country)\">{{country.id}}</td>\r\n        <td (click)=\"onClick(country)\">{{country.name}}</td>\r\n        <td><button *ngIf=\"!countryHasCities(country.id)\" (click)=\"deleteCountry(country)\" class=\"btn btn-sm btn-danger float-right\">Usuń państwo</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"/country-add\" class=\"link-add\">[ dodaj państwo ]</a>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src-corporate/app/country-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryListComponent = (function () {
    function CountryListComponent(countryService, cityService, router) {
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
    }
    CountryListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService
            .getCountries()
            .then(function (countries) { return _this.countries = countries; });
    };
    CountryListComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService
            .getCities()
            .then(function (cities) { return _this.cities = cities; });
    };
    CountryListComponent.prototype.ngOnInit = function () {
        this.getCities();
        this.getCountries();
    };
    CountryListComponent.prototype.onClick = function (country) {
        this.router.navigate(['./country-edit/' + country.id]);
    };
    CountryListComponent.prototype.countryHasCities = function (country_id) {
        for (var i = 0; i < this.cities.length; i++) {
            if ((1 * this.cities[i].country_id) === country_id) {
                return true;
            }
        }
        return false;
    };
    CountryListComponent.prototype.deleteCountry = function (country) {
        var _this = this;
        this.countryService
            .delete(country.id)
            .then(function () {
            _this.countries = _this.countries.filter(function (h) { return h !== country; });
        });
    };
    return CountryListComponent;
}());
CountryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'country-list',
        template: __webpack_require__("../../../../../src-corporate/app/country-list.component.html"),
        styles: [__webpack_require__("../../../../../src-corporate/app/country-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__city_service__["a" /* CityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CountryListComponent);

var _a, _b, _c;
//# sourceMappingURL=country-list.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.countriesUrl = 'api/countries'; // url to web api
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get(this.countriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryService.prototype.getCountry = function (id) {
        var url = this.countriesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CountryService.prototype.delete = function (id) {
        var url = this.countriesUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CountryService.prototype.create = function (countryName) {
        return this.http
            .post(this.countriesUrl, JSON.stringify({ name: countryName }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CountryService.prototype.update = function (country) {
        var url = this.countriesUrl + "/" + country.id;
        return this.http
            .put(url, JSON.stringify(country), { headers: this.headers })
            .toPromise()
            .then(function () { return country; })
            .catch(this.handleError);
    };
    return CountryService;
}());
CountryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CountryService);

var _a;
//# sourceMappingURL=country.service.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var countries = [
            { id: 1, name: 'Albania' },
            { id: 2, name: 'Belgia' },
            { id: 3, name: 'Chorwacja' },
            { id: 4, name: 'Dania' },
            { id: 5, name: 'Estonia' },
            { id: 6, name: 'Polska' },
            { id: 7, name: 'Rosja' }
        ];
        var cities = [
            { id: 1, name: 'Tirana', country_id: 1 },
            { id: 2, name: 'Bruksela', country_id: 2 },
            { id: 3, name: 'Dubrovnik', country_id: 3 },
            { id: 4, name: 'Kopenhaga', country_id: 4 },
            { id: 5, name: 'Tallin', country_id: 5 },
            { id: 6, name: 'Charelroi', country_id: 2 },
            { id: 7, name: 'Brugge', country_id: 2 },
            { id: 8, name: 'Warszawa', country_id: 6 },
            { id: 9, name: 'Wrocław', country_id: 6 },
            { id: 10, name: 'Gdańsk', country_id: 6 },
            { id: 11, name: 'Kraków', country_id: 6 },
            { id: 12, name: 'Poznań', country_id: 6 }
        ];
        var corporations = [
            { id: 1, name: 'Albanian Corp.', city: 1, ceo_name: 'Adalina Agalliu',
                website: 'www.albanian-corp.com', email: 'office@albanian-corp.com' },
            { id: 2, name: 'Belgian Choco', city: 2, ceo_name: 'Bruno Chocolatti',
                website: 'www.belgian-choco.com', email: 'bureau@belgian-choco.com' },
            { id: 3, name: 'Croatian Holidays', city: 3, ceo_name: 'Zarko Zeljic',
                website: 'www.croatian-holidays.com', email: 'office@croatian-holidays.com' },
            { id: 4, name: 'Kopenhagen Mermaid', city: 4, ceo_name: 'Stellan Hangvard',
                website: 'www.kopenhagen-mermaid.com', email: 'office@kopenhagen-mermaid.com' },
            { id: 5, name: 'Tallin Sound Systems', city: 5, ceo_name: 'Stobe Kvinuus',
                website: 'www.tallinss.com', email: 'office@tallinss.com' }
        ];
        return { countries: countries, cities: cities, corporations: corporations };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src-corporate/app/location-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tbody>tr>td button{float:none;font-size:1rem;padding:5px}tbody>tr>td:nth-child(1){padding-right:40px}.city-link{margin-right:20px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-corporate/app/location-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n            <th>państwo</th>\r\n            <th>miasta</th>\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n        <tr *ngFor=\"let country of countries\">\r\n            <td>\r\n                <a routerLink=\"/country-edit/{{country.id}}\">{{country.name}}</a>\r\n                <span class=\"button-delete\" title=\"usuń państwo: {{country.name}}\" *ngIf=\"countryHasCities(country.id)===false\" (click)=\"deleteCountry(country); $event.stopPropagation()\">&times;</span>\r\n            </td>\r\n            <td>\r\n                <ng-template ngFor let-city [ngForOf]=\"cities\">\r\n                    <span class=\"city-link\" *ngIf=\"city.country_id == country.id\">\r\n                        <a routerLink=\"/city-edit/{{city.id}}\">{{city.name}}</a>&nbsp;<span class=\"button-delete\" title=\"usuń miasto: {{city.name}}\" *ngIf=\"cityHasCorporations(city.id)==false\" (click)=\"deleteCity(city); $event.stopPropagation()\">&times;</span>\r\n                    </span>\r\n                </ng-template>\r\n                <a routerLink=\"/city-add/{{country.id}}\" class=\"link-add\">[&nbsp;dodaj&nbsp;miasto&nbsp;]</a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <a routerLink=\"/country-add\" class=\"link-add\">[&nbsp;dodaj&nbsp;państwo&nbsp;]</a>\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src-corporate/app/location-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__city_service__ = __webpack_require__("../../../../../src-corporate/app/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_service__ = __webpack_require__("../../../../../src-corporate/app/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__corporation_service__ = __webpack_require__("../../../../../src-corporate/app/corporation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationListComponent = (function () {
    function LocationListComponent(cityService, countryService, corporationService) {
        this.cityService = cityService;
        this.countryService = countryService;
        this.corporationService = corporationService;
    }
    LocationListComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    LocationListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    LocationListComponent.prototype.getCorporations = function () {
        var _this = this;
        this.corporationService.getCorporations().then(function (corporations) { return _this.corporations = corporations; });
    };
    LocationListComponent.prototype.ngOnInit = function () {
        this.getCorporations();
        this.getCities();
        this.getCountries();
    };
    LocationListComponent.prototype.findElement = function (arr, propName, propValue) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][propName] === propValue) {
                return arr[i];
            }
        }
        // will return undefined if not found; you could return a default instead
    };
    LocationListComponent.prototype.countryHasCities = function (country_id) {
        for (var i = 0; i < this.cities.length; i++) {
            if ((1 * this.cities[i].country_id) === country_id) {
                return true;
            }
        }
        return false;
    };
    LocationListComponent.prototype.cityHasCorporations = function (city) {
        for (var i = 0; i < this.corporations.length; i++) {
            if (this.corporations[i].city === city) {
                return true;
            }
        }
        return false;
    };
    LocationListComponent.prototype.deleteCountry = function (country) {
        var _this = this;
        this.countryService
            .delete(country.id)
            .then(function () {
            _this.countries = _this.countries.filter(function (h) { return h !== country; });
        });
    };
    LocationListComponent.prototype.deleteCity = function (city) {
        var _this = this;
        this.cityService
            .delete(city.id)
            .then(function () {
            _this.cities = _this.cities.filter(function (h) { return h !== city; });
        });
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'location-list',
        template: __webpack_require__("../../../../../src-corporate/app/location-list.component.html"),
        styles: [__webpack_require__("../../../../../src-corporate/app/location-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__city_service__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__city_service__["a" /* CityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__corporation_service__["a" /* CorporationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__corporation_service__["a" /* CorporationService */]) === "function" && _c || Object])
], LocationListComponent);

var _a, _b, _c;
//# sourceMappingURL=location-list.component.js.map

/***/ }),

/***/ "../../../../../src-corporate/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src-corporate/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src-corporate/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src-corporate/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src-corporate/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map