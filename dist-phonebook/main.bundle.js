webpackJsonp(["main"],{

/***/ "../../../../../src-phonebook/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src-phonebook/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src-phonebook/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonebook_component__ = __webpack_require__("../../../../../src-phonebook/app/phonebook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/phonebook/1', pathMatch: 'full' },
    { path: 'phonebook', redirectTo: '/phonebook/1', pathMatch: 'full' },
    { path: 'phonebook/:page', component: __WEBPACK_IMPORTED_MODULE_2__phonebook_component__["a" /* PhonebookComponent */] },
    { path: '**', redirectTo: '/phonebook/1', pathMatch: 'full' },
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

/***/ "../../../../../src-phonebook/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h5 class=\"phonebook-title\">{{title}}</h5>\n        </div>\n    </div>\n</section>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src-phonebook/app/app.component.ts":
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
        this.title = 'Książka telefoniczna';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src-phonebook/app/app.component.html"),
        styleUrls: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("../../../../../src-phonebook/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src-phonebook/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phonebook_component__ = __webpack_require__("../../../../../src-phonebook/app/phonebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__person_service__ = __webpack_require__("../../../../../src-phonebook/app/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__person_generator__ = __webpack_require__("../../../../../src-phonebook/app/person-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src-phonebook/app/app-routing.module.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__phonebook_component__["a" /* PhonebookComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__person_service__["a" /* PersonService */], __WEBPACK_IMPORTED_MODULE_9__person_generator__["a" /* PersonGenerator */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var persons = [
            { id: 1, name: 'Jan', surname: 'Kowalski', department: 'PZ/HR', internal: '2547',
                phone: '+48 (022) 55-44-234', cellular: '110 254 325',
                email: 'jan.kowalski@some-corporation.com', position: 'Specjalista ds. HR' }
        ];
        return { persons: persons };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/person-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__("../../../../../src-phonebook/app/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PersonGenerator = (function () {
    function PersonGenerator() {
        this.surnames = [
            { male: 'Nowak', female: 'Nowak' },
            { male: 'Kowalski', female: 'Kowalska' },
            { male: 'Wiśniewski', female: 'Wiśniewska' },
            { male: 'Wójcik', female: 'Wójcik' },
            { male: 'Kowalczyk', female: 'Kowalczyk' },
            { male: 'Kamiński', female: 'Kamińska' },
            { male: 'Lewandowski', female: 'Lewandowska' },
            { male: 'Zieliński', female: 'Zielińska' },
            { male: 'Szymański', female: 'Szymańska' },
            { male: 'Woźniak', female: 'Woźniak' },
            { male: 'Dąbrowski', female: 'Dąbrowska' },
            { male: 'Kozłowski', female: 'Kozłowska' },
            { male: 'Jankowski', female: 'Jankowska' },
            { male: 'Mazur', female: 'Mazur' },
            { male: 'Wojciechowski', female: 'Wojciechowska' },
            { male: 'Kwiatkowski', female: 'Kwiatkowska' },
            { male: 'Krawczyk', female: 'Krawczyk' },
            { male: 'Kaczmarek', female: 'Kaczmarek' },
            { male: 'Piotrowski', female: 'Piotrowska' },
            { male: 'Grabowski', female: 'Grabowska' },
            { male: 'Zając', female: 'Zając' },
            { male: 'Pawłowski', female: 'Pawłowska' },
            { male: 'Michalski', female: 'Michalska' },
            { male: 'Król', female: 'Król' },
            { male: 'Wieczorek', female: 'Wieczorek' },
            { male: 'Jabłoński', female: 'Jabłońska' },
            { male: 'Wróbel', female: 'Wróbel' },
            { male: 'Nowakowski', female: 'Nowakowska' },
            { male: 'Majewski', female: 'Majewska' },
            { male: 'Olszewski', female: 'Olszewska' },
            { male: 'Stępień', female: 'Stępień' },
            { male: 'Malinowski', female: 'Malinowska' },
            { male: 'Jaworski', female: 'Jaworska' },
            { male: 'Adamczyk', female: 'Adamczyk' },
            { male: 'Dudek', female: 'Dudek' },
            { male: 'Nowicki', female: 'Nowicka' },
            { male: 'Pawlak', female: 'Pawlak' },
            { male: 'Górski', female: 'Górska' },
            { male: 'Witkowski', female: 'Witkowska' },
            { male: 'Walczak', female: 'Walczak' },
            { male: 'Sikora', female: 'Sikora' },
            { male: 'Baran', female: 'Baran' },
            { male: 'Rutkowski', female: 'Rutkowska' },
            { male: 'Michalak', female: 'Michalak' },
            { male: 'Szewczyk', female: 'Szewczyk' },
            { male: 'Ostrowski', female: 'Ostrowska' },
            { male: 'Tomaszewski', female: 'Tomaszewska' },
            { male: 'Pietrzak', female: 'Pietrzak' },
            { male: 'Zalewski', female: 'Zalewska' },
            { male: 'Wróblewski', female: 'Wróblewska' },
            { male: 'Marciniak', female: 'Marciniak' },
            { male: 'Jasiński', female: 'Jasińska' },
            { male: 'Zawadzki', female: 'Zawadzka' },
            { male: 'Bąk', female: 'Bąk' },
            { male: 'Jakubowski', female: 'Jakubowska' },
            { male: 'Sadowski', female: 'Sadowska' },
            { male: 'Duda', female: 'Duda' },
            { male: 'Włodarczyk', female: 'Włodarczyk' },
            { male: 'Wilk', female: 'Wilk' },
            { male: 'Chmielewski', female: 'Chmielewska' },
            { male: 'Borkowski', female: 'Borkowska' },
            { male: 'Sokołowski', female: 'Sokołowska' },
            { male: 'Szczepański', female: 'Szczepańska' },
            { male: 'Sawicki', female: 'Sawicka' },
            { male: 'Kucharski', female: 'Kucharska' },
            { male: 'Lis', female: 'Lis' },
            { male: 'Maciejewski', female: 'Maciejewska' },
            { male: 'Kubiak', female: 'Kubiak' },
            { male: 'Kalinowski', female: 'Kalinowska' },
            { male: 'Mazurek', female: 'Mazurek' },
            { male: 'Wysocki', female: 'Wysocka' },
            { male: 'Kołodziej', female: 'Kołodziej' },
            { male: 'Kaźmierczak', female: 'Kaźmierczak' },
            { male: 'Czarnecki', female: 'Czarnecka' },
            { male: 'Sobczak', female: 'Sobczak' },
            { male: 'Konieczny', female: 'Konieczna' },
            { male: 'Urbański', female: 'Urbańska' },
            { male: 'Głowacki', female: 'Głowacka' },
            { male: 'Wasilewski', female: 'Wasilewska' },
            { male: 'Sikorski', female: 'Sikorska' },
            { male: 'Zakrzewski', female: 'Zakrzewska' },
            { male: 'Krajewski', female: 'Krajewska' },
            { male: 'Krupa', female: 'Krupa' },
            { male: 'Laskowski', female: 'Laskowska' },
            { male: 'Ziółkowski', female: 'Ziółkowska' },
            { male: 'Gajewski', female: 'Gajewska' },
            { male: 'Mróz', female: 'Mróz' },
            { male: 'Brzeziński', female: 'Brzezińska' },
            { male: 'Szulc', female: 'Szulc' },
            { male: 'Szymczak', female: 'Szymczak' },
            { male: 'Makowski', female: 'Makowska' },
            { male: 'Baranowski', female: 'Baranowska' },
            { male: 'Przybylski', female: 'Przybylska' },
            { male: 'Kaczmarczyk', female: 'Kaczmarczyk' },
            { male: 'Borowski', female: 'Borowska' },
            { male: 'Błaszyk', female: 'Błaszyk' },
            { male: 'Adamski', female: 'Adamska' },
            { male: 'Górecki', female: 'Górecka' },
            { male: 'Chojnacki', female: 'Chojnacka' },
            { male: 'Kania', female: 'Kania' },
            { male: 'Leszczyński', female: 'Leszczyńska' },
            { male: 'Janik', female: 'Janik' },
            { male: 'Szczepaniak', female: 'Szczepaniak' },
            { male: 'Czerwiński', female: 'Czerwińska' },
            { male: 'Kozioł', female: 'Kozioł' },
            { male: 'Mucha', female: 'Mucha' },
            { male: 'Lipiński', female: 'Lipińska' },
            { male: 'Wesołowski', female: 'Wesołowska' },
            { male: 'Kozak', female: 'Kozak' },
            { male: 'Cieślak', female: 'Cieślak' },
            { male: 'Kowalewski', female: 'Kowalewska' },
            { male: 'Andrzejewski', female: 'Andrzejewska' },
            { male: 'Mikołajczyk', female: 'Mikołajczyk' },
            { male: 'Jarosz', female: 'Jarosz' },
            { male: 'Musiał', female: 'Musiał' },
            { male: 'Zięba', female: 'Zięba' },
            { male: 'Kowalik', female: 'Kowalik' },
            { male: 'Kołodziejczyk', female: 'Kołodziejczyk' },
            { male: 'Markowski', female: 'Markowska' },
            { male: 'Brzozowski', female: 'Brzozowska' },
            { male: 'Kopeć ', female: 'Kopeć ' },
            { male: 'Nowacki ', female: 'Nowacka ' },
            { male: 'Orłowski ', female: 'Orłowska ' },
            { male: 'Domański ', female: 'Domańska ' },
            { male: 'Żak', female: 'Żak' },
            { male: 'Tomczyk', female: 'Tomczyk' },
            { male: 'Kurek', female: 'Kurek' },
            { male: 'Piątek', female: 'Piątek' },
            { male: 'Pawlik', female: 'Pawlik' },
            { male: 'Tomczak', female: 'Tomczak' },
            { male: 'Markiewicz', female: 'Markiewicz' },
            { male: 'Ciesielski', female: 'Ciesielska' },
            { male: 'Wawrzyniak', female: 'Wawrzyniak' },
            { male: 'Kot', female: 'Kot' },
            { male: 'Wójtowicz', female: 'Wójtowicz' },
            { male: 'Polak', female: 'Polak' },
            { male: 'Wolski', female: 'Wolska' },
            { male: 'Kruk', female: 'Kruk' },
            { male: 'Stasiak', female: 'Stasiak' },
            { male: 'Stankiewicz', female: 'Stankiewicz' },
            { male: 'Sowa', female: 'Sowa' },
            { male: 'Łuczak', female: 'Łuczak' },
            { male: 'Wierzbicki', female: 'Wierzbicka' },
            { male: 'Jastrzębski', female: 'Jastrzębska' },
            { male: 'Urbaniak', female: 'Urbaniak' },
            { male: 'Karpiński', female: 'Karpińska' },
            { male: 'Czajkowski', female: 'Czajkowska' },
            { male: 'Piasecki', female: 'Piasecka' },
            { male: 'Gajda', female: 'Gajda' },
            { male: 'Nawrocki', female: 'Nawrocka' },
            { male: 'Bednarek', female: 'Bednarek' },
            { male: 'Stefański', female: 'Stefańska' },
            { male: 'Klimek', female: 'Klimek' },
            { male: 'Janicki', female: 'Janicka' },
            { male: 'Jóźwiak', female: 'Jóźwiak' },
            { male: 'Dziedzic', female: 'Dziedzic' },
            { male: 'Sosnowski', female: 'Sosnowska' },
            { male: 'Bielecki', female: 'Bielecka' },
            { male: 'Majchrzak', female: 'Majchrzak' },
            { male: 'Madej', female: 'Madej' },
            { male: 'Leśniak', female: 'Leśniak' },
            { male: 'Milewski', female: 'Milewska' },
            { male: 'Maj', female: 'Maj' },
            { male: 'Kowal', female: 'Kowal' },
            { male: 'Małecki', female: 'Małecka' },
            { male: 'Śliwiński', female: 'Śliwińska' },
            { male: 'Socha', female: 'Socha' },
            { male: 'Skiba', female: 'Skiba' },
            { male: 'Marek', female: 'Marek' },
            { male: 'Dobrowolski', female: 'Dobrowolska' },
            { male: 'Domagała', female: 'Domagała' },
            { male: 'Bednarczyk', female: 'Bednarczyk' },
            { male: 'Wrona', female: 'Wrona' },
            { male: 'Urban', female: 'Urban' },
            { male: 'Olejniczak', female: 'Olejniczak' },
            { male: 'Pająk', female: 'Pająk' },
            { male: 'Matuszewski', female: 'Matuszewska' },
            { male: 'Romanowski', female: 'Romanowska' },
            { male: 'Kasprzak', female: 'Kasprzak' },
            { male: 'Świątek', female: 'Świątek' },
            { male: 'Wilczyński', female: 'Wilczyńska' },
            { male: 'Ratajczak', female: 'Ratajczak' },
            { male: 'Kurowski', female: 'Kurowska' },
            { male: 'Michalik', female: 'Michalik' },
            { male: 'Owczarek', female: 'Owczarek' },
            { male: 'Orzechowski', female: 'Orzechowska' },
            { male: 'Grzelak', female: 'Grzelak' },
            { male: 'Łukasik', female: 'Łukasik' },
            { male: 'Olejnik', female: 'Olejnik' },
            { male: 'Sobolewski', female: 'Sobolewska' },
            { male: 'Rogowski', female: 'Rogowska' },
            { male: 'Mazurkiewicz', female: 'Mazurkiewicz' },
            { male: 'Barański', female: 'Barańska' },
            { male: 'Bukowski', female: 'Bukowska' },
            { male: 'Matusiak', female: 'Matusiak' },
            { male: 'Sroka', female: 'Sroka' },
            { male: 'Kosiński', female: 'Kosińska' },
            { male: 'Kędzierski', female: 'Kędzierska' },
            { male: 'Skowroński', female: 'Skowrońska' },
            { male: 'Marcinkowski', female: 'Marcinkowska' },
            { male: 'Sobczyk', female: 'Sobczyk' },
            { male: 'Kozieł', female: 'Kozieł' },
            { male: 'Marszałek', female: 'Marszałek' },
            { male: 'Zych', female: 'Zych' },
            { male: 'Chrzanowski', female: 'Chrzanowska' },
            { male: 'Bednarski', female: 'Bednarska' },
            { male: 'Rybak', female: 'Rybak' },
            { male: 'Lisowski', female: 'Lisowska' },
            { male: 'Bednarz', female: 'Bednarz' },
            { male: 'Janiszewski', female: 'Janiszewska' },
            { male: 'Pluta', female: 'Pluta' },
            { male: 'Kasprzyk', female: 'Kasprzyk' },
            { male: 'Muszyński', female: 'Muszyńska' },
            { male: 'Kwiecień', female: 'Kwiecień' },
            { male: 'Kuczyński', female: 'Kuczyńska' },
            { male: 'Świderski', female: 'Świderska' },
            { male: 'Paluch', female: 'Paluch' },
            { male: 'Morawski', female: 'Morawska' },
            { male: 'Białek', female: 'Białek' },
            { male: 'Grzybowski', female: 'Grzybowska' },
            { male: 'Witek', female: 'Witek' },
            { male: 'Turek', female: 'Turek' },
            { male: 'Marczak', female: 'Marczak' },
            { male: 'Jędrzejewski', female: 'Jędrzejewska' },
            { male: 'Osiński', female: 'Osińska' },
            { male: 'Marzec', female: 'Marzec' },
            { male: 'Chmiel', female: 'Chmiel' },
            { male: 'Czajka', female: 'Czajka' },
            { male: 'Kaczor', female: 'Kaczor' },
            { male: 'Małek', female: 'Małek' },
            { male: 'Kubicki', female: 'Kubicka' },
            { male: 'Krzemiński', female: 'Krzemińska' },
            { male: 'Łukowski', female: 'Łukowska' },
            { male: 'Piekarski', female: 'Piekarska' },
            { male: 'Michałowski', female: 'Michałowska' },
            { male: 'Szczęsny', female: 'Szczęsna' },
            { male: 'Szydłowski', female: 'Szydłowska' },
            { male: 'Biernacki', female: 'Biernacka' },
            { male: 'Śliwa', female: 'Śliwa' },
            { male: 'Janowski', female: 'Janowska' },
            { male: 'Stefaniak', female: 'Stefaniak' },
            { male: 'Lechicki', female: 'Lechicka' },
            { male: 'Przybysz', female: 'Przybysz' },
            { male: 'Lewicki', female: 'Lewicka' },
            { male: 'Gołębiewski', female: 'Gołębiewska' },
            { male: 'Murawski', female: 'Murawska' },
            { male: 'Dębski', female: 'Dębska' },
            { male: 'Kulesza', female: 'Kulesza' },
            { male: 'Popławski', female: 'Popławska' },
            { male: 'Staniszewski', female: 'Staniszewska' }
        ];
        this.names = [
            { male: 'Jakub', female: 'Zuzanna' },
            { male: 'Antoni', female: 'Lena' },
            { male: 'Szymon', female: 'Julia' },
            { male: 'Jan', female: 'Maja' },
            { male: 'Filip', female: 'Zofia' },
            { male: 'Kacper', female: 'Hanna' },
            { male: 'Aleksander', female: 'Amelia' },
            { male: 'Franciszek', female: 'Aleksandra' },
            { male: 'Mikołaj', female: 'Alicja' },
            { male: 'Wojciech', female: 'Natalia' },
            { male: 'Adam', female: 'Wiktoria' },
            { male: 'Michał', female: 'Oliwia' },
            { male: 'Marcel', female: 'Maria' },
            { male: 'Wiktor', female: 'Emilia' },
            { male: 'Piotr', female: 'Nikola' },
            { male: 'Igor', female: 'Liliana' },
            { male: 'Mateusz', female: 'Anna' },
            { male: 'Bartosz', female: 'Antonina' },
            { male: 'Stanisław', female: 'Nadia' },
            { male: 'Alan', female: 'Gabriela' },
            { male: 'Nikodem', female: 'Laura' },
            { male: 'Dawid', female: 'Milena' },
            { male: 'Miłosz', female: 'Iga' },
            { male: 'Maksymilian', female: 'Martyna' },
            { male: 'Leon', female: 'Pola' },
            { male: 'Oliwier', female: 'Kornelia' },
            { male: 'Karol', female: 'Magdalena' },
            { male: 'Oskar', female: 'Karolina' },
            { male: 'Maciej', female: 'Michalina' },
            { male: 'Tomasz', female: 'Weronika' },
            { male: 'Natan', female: 'Marcelina' },
            { male: 'Dominik', female: 'Agata' },
            { male: 'Krzysztof', female: 'Jagoda' },
            { male: 'Tymon', female: 'Helena' },
            { male: 'Fabian', female: 'Nina' },
            { male: 'Hubert', female: 'Barbara' },
            { male: 'Paweł', female: 'Blanka' },
            { male: 'Ignacy', female: 'Kinga' },
            { male: 'Tymoteusz', female: 'Paulina' },
            { male: 'Julian', female: 'Łucja' },
            { male: 'Kamil', female: 'Joanna' },
            { male: 'Patryk', female: 'Kaja' },
            { male: 'Gabriel', female: 'Małgorzata' },
            { male: 'Bartłomiej', female: 'Marta' },
            { male: 'Ksawery', female: 'Patrycja' },
            { male: 'Sebastian', female: 'Katarzyna' },
            { male: 'Adrian', female: 'Anastazja' },
            { male: 'Krystian', female: 'Dominika' },
            { male: 'Kajetan', female: 'Klaudia' },
            { male: 'Olaf', female: 'Lilianna' },
            { male: 'Łukasz', female: 'Aniela' },
            { male: 'Błażej', female: 'Klara' },
            { male: 'Marcin', female: 'Nela' },
            { male: 'Borys', female: 'Sara' },
            { male: 'Eryk', female: 'Izabela' },
            { male: 'Kuba', female: 'Ewa' },
            { male: 'Artur', female: 'Eliza' },
            { male: 'Daniel', female: 'Kamila' },
            { male: 'Bruno', female: 'Matylda' },
            { male: 'Grzegorz', female: 'Olga' },
            { male: 'Damian', female: 'Kalina' },
            { male: 'Przemysław', female: 'Urszula' },
            { male: 'Rafał', female: 'Daria' },
            { male: 'Tobiasz', female: 'Adrianna' },
            { male: 'Cezary', female: 'Malwina' },
            { male: 'Olivier', female: 'Dorota' },
            { male: 'Konrad', female: 'Lidia' },
            { male: 'Emil', female: 'Sandra' },
            { male: 'Radosław', female: 'Bianka' },
            { male: 'Nataniel', female: 'Liwia' },
            { male: 'Alex', female: 'Roksana' },
            { male: 'Marek', female: 'Rozalia' },
            { male: 'Robert', female: 'Karina' },
            { male: 'Witold', female: 'Marianna' },
            { male: 'Gracjan', female: 'Marika' },
            { male: 'Tadeusz', female: 'Justyna' },
            { male: 'Kornel', female: 'Mia' },
            { male: 'Milan', female: 'Natasza' },
            { male: 'Jerzy', female: 'Aurelia' },
            { male: 'Aleks', female: 'Ada' },
            { male: 'Mieszko', female: 'Nicola' },
            { male: 'Andrzej', female: 'Vanessa' },
            { male: 'Arkadiusz', female: 'Monika' },
            { male: 'Iwo', female: 'Agnieszka' },
            { male: 'Stefan', female: 'Inga' },
            { male: 'Alexander', female: 'Olivia' },
            { male: 'Dorian', female: 'Emma' },
            { male: 'Ryszard', female: 'Jowita' },
            { male: 'Brajan', female: 'Marlena' },
            { male: 'Jacek', female: 'Melania' },
            { male: 'Leonard', female: 'Elena' },
            { male: 'Gustaw', female: 'Dagmara' },
            { male: 'Kazimierz', female: 'Diana' },
            { male: 'Konstanty', female: 'Victoria' },
            { male: 'Juliusz', female: 'Julita' },
            { male: 'Józef', female: 'Nel' },
            { male: 'Norbert', female: 'Apolonia' },
            { male: 'Jeremi', female: 'Luiza' },
            { male: 'Seweryn', female: 'Sonia' },
            { male: 'Feliks', female: 'Lilia' },
            { male: 'Henryk', female: 'Ewelina' },
            { male: 'Teodor', female: 'Rita' },
            { male: 'Oliver', female: 'Ida' },
            { male: 'Jędrzej', female: 'Anita' },
            { male: 'Albert', female: 'Zoja' },
            { male: 'Samuel', female: 'Jessica' },
            { male: 'Cyprian', female: 'Julianna' },
            { male: 'Remigiusz', female: 'Elżbieta' },
            { male: 'Dariusz', female: 'Jadwiga' },
            { male: 'Ernest', female: 'Tola' },
            { male: 'Florian', female: 'Gaja' },
            { male: 'Leo', female: 'Krystyna' },
            { male: 'Ludwik', female: 'Wanda' },
            { male: 'Aleksy', female: 'Janina' },
            { male: 'Mariusz', female: 'Sabina' },
            { male: 'Maksym', female: 'Alina' },
            { male: 'Maurycy', female: 'Adela' },
            { male: 'Kordian', female: 'Paula' },
            { male: 'Lucjan', female: 'Amanda' },
            { male: 'David', female: 'Izabella' },
            { male: 'Fryderyk', female: 'Celina' },
            { male: 'Maximilian', female: 'Antonia' },
            { male: 'Tytus', female: 'Sylwia' },
            { male: 'Hugo', female: 'Angelika' },
            { male: 'Beniamin', female: 'Nicole' },
            { male: 'Władysław', female: 'Stefania' },
            { male: 'Xavier', female: 'Lea' },
            { male: 'Kevin', female: 'Lila' },
            { male: 'Nathan', female: 'Judyta' },
            { male: 'Szczepan', female: 'Faustyna' },
            { male: 'Jeremiasz', female: 'Magda' },
            { male: 'Ksawier', female: 'Teresa' },
            { male: 'Nicolas', female: 'Otylia' },
            { male: 'Max', female: 'Jagna' },
            { male: 'Sylwester', female: 'Estera' },
            { male: 'Joachim', female: 'Konstancja' },
            { male: 'Sławomir', female: 'Mila' },
            { male: 'Sergiusz', female: 'Jaśmina' },
            { male: 'Olgierd', female: 'Ines' },
            { male: 'Oliwer', female: 'Aneta' },
            { male: 'Zbigniew', female: 'Noemi' },
            { male: 'Amadeusz', female: 'Tatiana' },
            { male: 'Vincent', female: 'Inez' },
            { male: 'Jonasz', female: 'Viktoria' },
            { male: 'Aron', female: 'Tamara' },
            { male: 'Brayan', female: 'Hana' },
            { male: 'Maks', female: 'Livia' },
            { male: 'Marceli', female: 'Edyta' },
            { male: 'Edward', female: 'Malina' },
            { male: 'Oktawian', female: 'Beata' },
            { male: 'Ivo', female: 'Samanta' },
            { male: 'Kosma', female: 'Marcela' },
            { male: 'Oleg', female: 'Danuta' },
            { male: 'Jarosław', female: 'Sofia' },
            { male: 'Miron', female: 'Irena' },
            { male: 'Nikolas', female: 'Klementyna' },
            { male: 'Janusz', female: 'Olimpia' },
            { male: 'Benjamin', female: 'Lucyna' },
            { male: 'Jonatan', female: 'Oktawia' },
            { male: 'Roman', female: 'Felicja' },
            { male: 'Kasjan', female: 'Berenika' },
            { male: 'Leonardo', female: 'Gloria' },
            { male: 'Victor', female: 'Ola' },
            { male: 'Bernard', female: 'Franciszka' },
            { male: 'Michael', female: 'Halina' },
            { male: 'Emilian', female: 'Lara' },
            { male: 'Korneliusz', female: 'Larysa' },
            { male: 'Kaspian', female: 'Marzena' },
            { male: 'Bolesław', female: 'Andżelika' },
            { male: 'Gniewko', female: 'Jolanta' },
            { male: 'Oscar', female: 'Adriana' },
            { male: 'Leszek', female: 'Jana' },
            { male: 'Maxymilian', female: 'Stella' },
            { male: 'Bronisław', female: 'Ilona' },
            { male: 'Martin', female: 'Melisa' },
            { male: 'Zygmunt', female: 'Emilia' },
            { male: 'Aaron', female: 'Inka' },
            { male: 'Kewin', female: 'Lilla' },
            { male: 'Wincenty', female: 'Alicja' },
            { male: 'Denis', female: 'Cecylia' },
            { male: 'Brian', female: 'Mira' },
            { male: 'Nathaniel', female: 'Oksana' },
            { male: 'Roch', female: 'Honorata' },
            { male: 'Ziemowit', female: 'Ksenia' },
            { male: 'Bryan', female: 'Żaneta' },
            { male: 'Cyryl', female: 'Florentyna' },
            { male: 'Gniewomir', female: 'Lilia' },
            { male: 'Leopold', female: 'Roma' },
            { male: 'Viktor', female: 'Wioletta' },
            { male: 'Allan', female: 'Aleksandra' },
            { male: 'Ariel', female: 'Greta' },
            { male: 'Bogumił', female: 'Idalia' },
            { male: 'Klemens', female: 'Ina' },
            { male: 'Marian', female: 'Iwona' },
            { male: 'Ryan', female: 'Marcjanna' },
            { male: 'Xawery', female: 'Nikola' },
            { male: 'Eliasz', female: 'Sara' },
            { male: 'Jonathan', female: 'Zofia' },
            { male: 'Wincent', female: 'Aurora' },
            { male: 'Alek', female: 'Carmen' }
        ];
        this.departments = [
            'PZ', 'PZ/DF', 'PZ/DT', 'PZ/DR', 'PZ/DW',
            'PZ/DF/FK', 'PZ/DF/EA', 'PZ/DF/RP',
            'PZ/DT/WT', 'PZ/DT/WM', 'PZ/DT/EL', 'PZ/DT/BK',
            'PZ/DR/HR', 'PZ/DR/DS', 'PZ/DR/BH',
            'PZ/DW/DO', 'PZ/DW/RP', 'PZ/DW/KG', 'PZ/DW/ZL', 'PZ/DW/JG'
        ];
        this.positions = [
            'Specjalista', 'Młodszy Specjalista', 'Starszy Specjalista', 'Analityk', 'Koordynator', 'Asystent',
            'Kierownik Zespołu', 'Referent', 'Młodszy Referent'
        ];
    }
    PersonGenerator.prototype.getRandom = function (start, end) {
        return Math.floor((Math.random() * (end - start + 1)) + start);
    };
    PersonGenerator.prototype.makeEmail = function (email) {
        return email
            .replace(/ą/ig, 'a').replace(/Ą/ig, 'A')
            .replace(/ć/ig, 'c').replace(/Ć/ig, 'C')
            .replace(/ę/ig, 'e').replace(/Ę/ig, 'E')
            .replace(/ł/ig, 'l').replace(/Ł/ig, 'L')
            .replace(/ń/ig, 'n').replace(/Ń/ig, 'N')
            .replace(/ó/ig, 'o').replace(/Ó/ig, 'O')
            .replace(/ś/ig, 's').replace(/Ś/ig, 'S')
            .replace(/ż/ig, 'z').replace(/Ż/ig, 'Z')
            .replace(/ź/ig, 'z').replace(/Ź/ig, 'Z');
    };
    PersonGenerator.prototype.generatePerson = function () {
        var newPerson = new __WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */]();
        var gender = this.getRandom(1, 2);
        if (gender === 1) {
            newPerson.name = this.names[this.getRandom(0, this.names.length - 1)].male.trim();
            newPerson.surname = this.surnames[this.getRandom(0, this.surnames.length - 1)].male.trim();
        }
        else {
            newPerson.name = this.names[this.getRandom(0, this.names.length - 1)].female.trim();
            newPerson.surname = this.surnames[this.getRandom(0, this.surnames.length - 1)].female.trim();
        }
        newPerson.department = this.departments[this.getRandom(0, this.departments.length - 1)].trim();
        newPerson.position = this.positions[this.getRandom(0, this.positions.length - 1)].trim();
        newPerson.internal = '' + this.getRandom(1000, 9999);
        newPerson.phone = '+48 (022) ' + this.getRandom(510, 597) + '-' + this.getRandom(10, 99) + '-' + this.getRandom(10, 99);
        newPerson.cellular = '' + this.getRandom(750, 882) + ' ' + this.getRandom(100, 999) + ' ' + this.getRandom(100, 999);
        newPerson.email = (newPerson.name.toLowerCase() + '.' + newPerson.surname.toLowerCase() + '@' + 'some-corporation.com');
        newPerson.email = this.makeEmail(newPerson.email);
        return newPerson;
    };
    return PersonGenerator;
}());
PersonGenerator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], PersonGenerator);

//# sourceMappingURL=person-generator.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
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



var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.personsUrl = 'api/persons'; // url to web api
    }
    PersonService.prototype.getPersons = function () {
        return this.http.get(this.personsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.getPerson = function (id) {
        var url = this.personsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.create = function (person) {
        return this.http
            .post(this.personsUrl, JSON.stringify({
            name: person.name,
            surname: person.surname,
            department: person.department,
            position: person.position,
            internal: person.internal,
            phone: person.phone,
            cellular: person.cellular,
            email: person.email
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PersonService;
}());
PersonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PersonService);

var _a;
//# sourceMappingURL=person.service.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = (function () {
    function Person() {
    }
    return Person;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ "../../../../../src-phonebook/app/phonebook.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n        \r\n                <div class=\"card text-red warning-card\" id=\"warningCard\">\r\n                    <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">UWAGA!</h4>\r\n                    <p class=\"card-text text-danger\">Dane wyświetlane w książce zostały wygenerowane losowo dla potrzeb demonstracji, na podstawie informacji statystycznych dot. imion w Polsce publikowanych\r\n                        przez <a href=\"https://www.gov.pl/cyfryzacja/statystyki-imion\">Ministerstwo Cyfryzacji</a> oraz informacji dot. nazwisk w Polsce\r\n                        publikowanych przez <a href=\"http://www.gloswielkopolski.pl/artykul/668769,250-najpopularniejszych-nazwisk-w-polsce-jestes-w-tej-grupie-sprawdz-lista,id,t.html\">Głos Wielkopolski</a>.\r\n                        Dane te nie są w żaden sposób powiązane z realnymi osobami - nie są danymi osobowymi.\r\n                    </p>\r\n                    <button class=\"btn btn-primary close-warning\" (click)=\"closeWarning()\">zamknij ten komunikat</button>\r\n                </div>\r\n            </div>\r\n        \r\n        </div>\r\n    </div>    \r\n\r\n    <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n\r\n                <input  [(ngModel)]=\"filter\" (dblclick)=\"filter='';filterData()\" (ngModelChange)=\"filterData()\" type=\"text\" class=\"form-control\" id=\"inputFilter\" placeholder=\"szukaj... (dwuklik usuwa wprowadzony filtr)\" tabindex=\"1\" />\r\n                <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                    <th (click)=\"sortBy('name')\" class=\"clickable\">nazwisko</th>\r\n                    <th (click)=\"sortBy('position')\" class=\"clickable\">stanowisko</th>\r\n                    <th (click)=\"sortBy('department')\" class=\"clickable\">oddział</th>\r\n                    <th (click)=\"sortBy('internal')\" class=\"clickable\">tel. wewn.</th>\r\n                    <th (click)=\"sortBy('phone')\" class=\"clickable\">tel.</th>\r\n                    <th (click)=\"sortBy('cellular')\" class=\"clickable\">cell.</th>\r\n                    <th (click)=\"sortBy('email')\" class=\"clickable\">email</th>\r\n                    </tr>\r\n                </thead>\r\n            \r\n                <tbody>\r\n\r\n                    <ng-template ngFor  let-i=\"index\" let-person [ngForOf]=\"filteredPersons\">\r\n                    <tr *ngIf=\"i>=((page-1)*10) && i<(page*10)\">\r\n                        <td>{{person.name}} {{person.surname}}</td>\r\n                        <td (click)=\"filter=person.position;filterData()\" class=\"clickable\">{{person.position}}</td>\r\n                        <td (click)=\"filter=person.department;filterData()\" class=\"clickable\">{{person.department}}</td>\r\n                        <td (click)=\"filter=person.internal;filterData()\" class=\"clickable\">{{person.internal}}</td>\r\n                        <td (click)=\"filter=person.phone;filterData()\" class=\"clickable\">{{person.phone}}</td>\r\n                        <td (click)=\"filter=person.cellular;filterData()\" class=\"clickable\">{{person.cellular}}</td>\r\n                        <td><a href='mailto:{{person.email}}'>{{person.email}}</a></td>\r\n                    </tr>\r\n                    </ng-template>\r\n\r\n                </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n\r\n                <nav aria-label=\"strony\">\r\n                <ul class=\"pagination justify-content-center\">\r\n\r\n                    <ng-template [ngIf]=\"page<2\" [ngIfElse]=\"previousActive\">\r\n                        <li class=\"page-item disabled\">\r\n                            <span class=\"page-link\">&laquo;</span>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                    <ng-template #previousActive>\r\n                        <li class=\"page-item\">\r\n                            <a class=\"page-link\" routerLink='/phonebook/{{page-1}}' aria-label=\"Poprzednia\">\r\n                                <span aria-hidden=\"true\">&laquo;</span>\r\n                                <span class=\"sr-only\">Poprzednia</span>\r\n                            </a>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                    <ng-template ngFor let-i=\"index\" let-p [ngForOf]=\"paginator\">\r\n                        <ng-template [ngIf]=\"p==page\" [ngIfElse]=\"notActivePage\">\r\n                            <li class=\"page-item active\">\r\n                                <a class=\"page-link\" routerLink='/phonebook/{{p}}'>{{p}}<span class=\"sr-only\">(current)</span></a>\r\n                            </li>\r\n                        </ng-template>\r\n\r\n                        <ng-template #notActivePage>\r\n                            <li class=\"page-item\"><a class=\"page-link\" routerLink='/phonebook/{{p}}'>{{p}}</a></li>\r\n                        </ng-template>\r\n                    </ng-template>\r\n\r\n                    <ng-template [ngIf]=\"page>totalPages-1\" [ngIfElse]=\"nextActive\">\r\n                        <li class=\"page-item disabled\">\r\n                            <span class=\"page-link\">&raquo;</span>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                    <ng-template #nextActive>\r\n                        <li class=\"page-item\">\r\n                            <a class=\"page-link\" routerLink='/phonebook/{{1*page+1}}' aria-label=\"Następna\">\r\n                                <span aria-hidden=\"true\">&raquo;</span>\r\n                                <span class=\"sr-only\">Następna</span>\r\n                            </a>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                </ul>\r\n                </nav>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src-phonebook/app/phonebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_service__ = __webpack_require__("../../../../../src-phonebook/app/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_generator__ = __webpack_require__("../../../../../src-phonebook/app/person-generator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhonebookComponent = (function () {
    function PhonebookComponent(personService, router, route, location, personGenerator) {
        this.personService = personService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.personGenerator = personGenerator;
        this.filter = '';
        this.page = 1;
        this.orderBy = ' ';
        this.sortOrder = 'ascending';
    }
    PhonebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generatePersons(); // wygeneruj losowe osoby w bazie danych
        this.personService
            .getPersons() // pobierz osoby z bazy danych...
            .then(function (persons) { return _this.setPersons(persons); }); // ...a potem wywołaj setPersons
        this.sub = this.route.params.subscribe(function (params) {
            _this.page = params['page'];
        });
    };
    PhonebookComponent.prototype.setPersons = function (persons) {
        this.persons = persons; // przepisz pobrane osoby do lokalnej tablicy
        this.filterData(); // przygotuj tablicę z odfiltrowanymi osobami
        this.sortBy('name'); // posortuj wstępnie wg nazwiska
        this.totalPages = Math.ceil(this.filteredPersons.length / 10); // oblicz ilość stron potrzebną
        // do wyświetlenia przefiltrowanych wyników
        this.paginator = []; // czyścimy tablicę z numerami stron
        for (var i = 1; i <= this.totalPages; i++) {
            this.paginator.push(i); // wypełniamy tablicę numerami stron
        }
    };
    // funkcja wypełniająca książkę telefoniczną danymi losowych osób
    PhonebookComponent.prototype.generatePersons = function () {
        var i;
        for (i = 1; i <= 100; i++) {
            this.personService.create(this.personGenerator.generatePerson());
        }
    };
    // funkcja aktualizująca filteredPersons[] po każdej zmianie wartości pola filtra
    PhonebookComponent.prototype.filterData = function () {
        this.filteredPersons = this.persons.filter(this.filterArray, this);
        var ob = this.orderBy; // zapamiętujemy kolejność sortowania
        this.orderBy = 'x'; // ustawiamy tymczasowo kolejność na pustą, żeby wymusić sortowanie
        this.sortBy(ob); // po zaktualizowaniu filteredPersons[] wywołujemy sortowanie w/g aktualnych kryteriów
    };
    // funkcja filtrująca - definicja filtra dla funkcji persons.filter[]
    PhonebookComponent.prototype.filterArray = function (element, index, array) {
        return (((element.name + ' ' +
            element.surname + ' ' +
            element.position + ' ' +
            element.department + ' ' +
            element.internal + ' ' +
            element.phone + ' ' +
            element.cellular + ' ' +
            element.email)
            .toLowerCase().indexOf(this.filter.toLowerCase().trim()) > -1));
    };
    // funkcja sortująca przefiltrowane dane
    PhonebookComponent.prototype.sortBy = function (orderBy) {
        orderBy = orderBy.trim().toLowerCase();
        if (orderBy !== this.orderBy) {
            this.sortOrder = 'ascending';
        }
        else {
            this.filteredPersons.reverse(); // odwróć kolejność tablicy i zmień wartość this.sortOrder na odwrotną
            if (this.sortOrder === 'ascending') {
                this.sortOrder = 'descending';
            }
            else {
                this.sortOrder = 'ascending';
            }
        }
        if (orderBy !== this.orderBy) {
            switch (orderBy) {
                case 'name':
                    this.filteredPersons.sort(this.compareNamesAsc);
                    break;
                case 'position':
                    this.filteredPersons.sort(this.comparePositionsAsc);
                    break;
                case 'department':
                    this.filteredPersons.sort(this.compareDepartmentsAsc);
                    break;
                case 'internal':
                    this.filteredPersons.sort(this.compareInternalsAsc);
                    break;
                case 'phone':
                    this.filteredPersons.sort(this.comparePhonesAsc);
                    break;
                case 'cellular':
                    this.filteredPersons.sort(this.compareCellularsAsc);
                    break;
                case 'email':
                    this.filteredPersons.sort(this.compareEmailsAsc);
                    break;
            }
            this.orderBy = orderBy; // ostatecznie wpisujemy aktualną kolejność w this.orderBy
        }
        this.resetPage();
    };
    // funkcja odświeżająca paginację po każdej zmianie filtra
    PhonebookComponent.prototype.resetPage = function () {
        this.page = 1;
        this.totalPages = Math.ceil(this.filteredPersons.length / 10);
        this.paginator = []; // czyścimy tablicę z numerami stron
        for (var i = 1; i <= this.totalPages; i++) {
            this.paginator.push(i); // wypełniamy tablicę numerami stron
        }
        this.router.navigate(['phonebook', this.page]);
    };
    // funkcje sortujące rosnąco wg określonych kryteriów / kolumn
    PhonebookComponent.prototype.compareNamesAsc = function (person1, person2) {
        return (person1.name + ' ' + person1.surname).localeCompare(person2.name + ' ' + person2.surname);
    };
    PhonebookComponent.prototype.comparePositionsAsc = function (person1, person2) {
        return person1.position.localeCompare(person2.position);
    };
    PhonebookComponent.prototype.compareDepartmentsAsc = function (person1, person2) {
        return person1.department.localeCompare(person2.department);
    };
    PhonebookComponent.prototype.compareInternalsAsc = function (person1, person2) {
        return person1.internal.localeCompare(person2.internal);
    };
    PhonebookComponent.prototype.comparePhonesAsc = function (person1, person2) {
        return person1.phone.localeCompare(person2.phone);
    };
    PhonebookComponent.prototype.compareCellularsAsc = function (person1, person2) {
        return person1.cellular.localeCompare(person2.cellular);
    };
    PhonebookComponent.prototype.compareEmailsAsc = function (person1, person2) {
        return person1.email.localeCompare(person2.email);
    };
    // funkcja zamykająca komunikat
    PhonebookComponent.prototype.closeWarning = function () {
        document.getElementById('warningCard').style.display = 'none';
    };
    return PhonebookComponent;
}());
PhonebookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'phonebook',
        template: __webpack_require__("../../../../../src-phonebook/app/phonebook.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__person_service__["a" /* PersonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__person_generator__["a" /* PersonGenerator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__person_generator__["a" /* PersonGenerator */]) === "function" && _e || Object])
], PhonebookComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=phonebook.component.js.map

/***/ }),

/***/ "../../../../../src-phonebook/environments/environment.ts":
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

/***/ "../../../../../src-phonebook/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src-phonebook/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src-phonebook/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src-phonebook/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map