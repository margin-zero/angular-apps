webpackJsonp(["main"],{

/***/ "../../../../../src-shoppingcart/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src-shoppingcart/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src-shoppingcart/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_catalog_component__ = __webpack_require__("../../../../../src-shoppingcart/app/product-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_preview_component__ = __webpack_require__("../../../../../src-shoppingcart/app/product-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppingcart_component__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_2__product_catalog_component__["a" /* ProductCatalogComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_preview_component__["a" /* ProductPreviewComponent */] },
    { path: 'product/:id/:cartId', component: __WEBPACK_IMPORTED_MODULE_3__product_preview_component__["a" /* ProductPreviewComponent */] },
    { path: 'shoppingcart', component: __WEBPACK_IMPORTED_MODULE_4__shoppingcart_component__["a" /* ShoppingcartComponent */] },
    { path: '**', redirectTo: '/catalog', pathMatch: 'full' },
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

/***/ "../../../../../src-shoppingcart/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-shoppingcart/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-12\"><h5>{{title}}</h5></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <a routerLink='/shoppingcart' class=\"shoppingcart-link\">koszyk ({{shoppingcartService.itemCount()}})</a>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src-shoppingcart/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(shoppingcartService) {
        this.shoppingcartService = shoppingcartService;
        this.title = 'Moduł: Shopping Cart';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src-shoppingcart/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src-shoppingcart/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("../../../../../src-shoppingcart/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src-shoppingcart/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_catalog_component__ = __webpack_require__("../../../../../src-shoppingcart/app/product-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_preview_component__ = __webpack_require__("../../../../../src-shoppingcart/app/product-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shoppingcart_component__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_service__ = __webpack_require__("../../../../../src-shoppingcart/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shoppingcart_service__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src-shoppingcart/app/app-routing.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__product_catalog_component__["a" /* ProductCatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_preview_component__["a" /* ProductPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shoppingcart_component__["a" /* ShoppingcartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_11__shoppingcart_service__["a" /* ShoppingcartService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            {
                id: 1, name: 'Kurtka KD-001 "Amanda"',
                category: ['kurtki', 'damskie'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['czarny', 'zielony', 'czerwony', 'turkus'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 121.95, vat: 23, priceBrutto: 150,
                previewFile: 'assets/images/kurtka01.jpg'
            },
            {
                id: 2, name: 'Kurtka KM-201 "Olivier"',
                category: ['kurtki', 'męskie'], sizes: ['M', 'L', 'XL', 'XXL'], colors: ['czarny', 'niebieski', 'czerwony'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 162.6, vat: 23, priceBrutto: 200,
                previewFile: 'assets/images/kurtka02.jpg'
            },
            {
                id: 3, name: 'Kurtka KD-002 "Joanna"',
                category: ['kurtki', 'damskie'], sizes: ['SM', 'M', 'L', 'XL', 'XXL'], colors: ['żółty', 'zielony', 'czerwony'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 143.08, vat: 23, priceBrutto: 176,
                previewFile: 'assets/images/kurtka03.jpg'
            },
            {
                id: 4, name: 'Sweter "Jonas"',
                category: ['swetry', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['niebieski', 'czerwony', 'zielony', 'lawendowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 179.67, vat: 23, priceBrutto: 221,
                previewFile: 'assets/images/sweter01.jpg'
            },
            {
                id: 5, name: 'Kurtka "Westman"',
                category: ['kurtki', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 125.2, vat: 23, priceBrutto: 154,
                previewFile: 'assets/images/kurtka04.jpg'
            },
            {
                id: 6, name: 'Legginsy LD-32',
                category: ['legginsy', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 147.96, vat: 23, priceBrutto: 182,
                previewFile: 'assets/images/legginsy01.jpg'
            },
            {
                id: 7, name: 'Spódnica "Fleur"',
                category: ['spódnice', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 154.47, vat: 23, priceBrutto: 190,
                previewFile: 'assets/images/spodnica01.jpg'
            },
            {
                id: 8, name: 'Spodnie SD-77',
                category: ['spodnie', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 79.67, vat: 23, priceBrutto: 98,
                previewFile: 'assets/images/spodnie01.jpg'
            },
            {
                id: 9, name: 'Spodnie SM-521',
                category: ['spodnie', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 100, vat: 23, priceBrutto: 123,
                previewFile: 'assets/images/spodnie02.jpg'
            },
            {
                id: 10, name: 'Spodnie SD-9',
                category: ['spodnie', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 134.95, vat: 23, priceBrutto: 166,
                previewFile: 'assets/images/spodnie03.jpg'
            },
            {
                id: 11, name: 'Sweter "Gordon"',
                category: ['swetry', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 106.5, vat: 23, priceBrutto: 131,
                previewFile: 'assets/images/sweter02.jpg'
            },
            {
                id: 12, name: 'Sweter "Vivian"',
                category: ['swetry', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. \n            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. \n            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, \n            dignissim tempor efficitur non, porta id lacus.",
                priceNetto: 82.92, vat: 23, priceBrutto: 102,
                previewFile: 'assets/images/sweter03.jpg'
            },
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product-catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let product of products\" class=\"col-6 col-sm-4 col-md-3 col-lg-2\">\r\n            <a routerLink='/product/{{product.id}}'>\r\n            <img [src]=\"product.previewFile\" width=\"100%\" /></a><br />\r\n            <p class=\"small\">{{product.name}}</p>\r\n            <p class=\"text-right\">{{product.priceBrutto.toFixed(2)}} PLN</p>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product-catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src-shoppingcart/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCatalogComponent = (function () {
    function ProductCatalogComponent(productService, router, route, location) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ProductCatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getProducts() // pobierz osoby z bazy danych...
            .then(function (products) { return _this.setProducts(products); }); // ...a potem wywołaj setPersons
    };
    ProductCatalogComponent.prototype.setProducts = function (products) {
        this.products = products; // przepisz pobrane osoby do lokalnej tablicy
    };
    return ProductCatalogComponent;
}());
ProductCatalogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-catalog',
        template: __webpack_require__("../../../../../src-shoppingcart/app/product-catalog.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], ProductCatalogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-catalog.component.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".required{float:right;font-size:.8rem;color:rgba(0,0,0,.5);font-style:oblique}.preview-price,.preview-value{float:right}.preview-price{font-size:1.2rem;clear:both}.preview-value{font-size:1.4rem}.item-price{height:100%}.item-value{margin-top:6px;margin-bottom:24px;background:#d0ffd0;line-height:1.4rem;padding-top:10px;padding-bottom:10px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"product\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h5 *ngIf=\"cartId >= 0; else add_product_header\">Edytuj pozycję z koszyka:</h5>\r\n            <ng-template #add_product_header>\r\n                <h5>Dodaj produkt do koszyka:</h5>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-5 col-md-5 col-lg-4\">\r\n            <img [src]=\"product.previewFile\" style=\"width: 100%\">            \r\n        </div>\r\n        \r\n        <div class=\"col-sm-7 col-md-7 col-lg-8\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h4>{{shoppingcartItem.name}}</h4>\r\n                    <p>{{product.description}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <form class=\"was-validated\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputSizeSelect\">rozmiar: </label>\r\n                        <select [(ngModel)]=\"shoppingcartItem.size\" class=\"form-control\" id=\"inputSizeSelect\" name=\"inputSizeSelect\" tabindex=\"2\" required>\r\n                            <option value=\"\">Wybierz rozmiar:</option>\r\n                            <option *ngFor=\"let rozmiar of product.sizes\" value=\"{{rozmiar}}\">{{rozmiar}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputColorSelect\">kolor: </label>\r\n                        <select [(ngModel)]=\"shoppingcartItem.color\" class=\"form-control\" id=\"inputColorSelect\" name=\"inputColorSelect\" tabindex=\"3\" required>\r\n                            <option value=\"\">Wybierz kolor:</option>\r\n                            <option *ngFor=\"let color of product.colors\" value={{color}}>{{color}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputCountSelect\">ilość: </label>\r\n                            <select [(ngModel)]=\"shoppingcartItem.itemCount\" class=\"form-control\" id=\"inputCountSelect\" name=\"inputCountSelect\" tabindex=\"4\" required>\r\n                                <option value=\"1\" selected>1</option>\r\n                                <option value=\"2\">2</option>\r\n                                <option value=\"3\">3</option>\r\n                                <option value=\"4\">4</option>\r\n                                <option value=\"5\">5</option>\r\n                                <option value=\"6\">6</option>\r\n                                <option value=\"7\">7</option>\r\n                                <option value=\"8\">8</option>\r\n                                <option value=\"9\">9</option>\r\n                                <option value=\"10\">10</option>\r\n                            </select>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"item-price\">\r\n                        <label>cena: </label><label class=\"required\"> ( brutto )</label>\r\n                        <p class=\"preview-price\">{{(shoppingcartItem.itemPrice).toFixed(2)}} PLN</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 item-value\">\r\n                    wartość: (brutto) <span class=\"preview-value\">{{(shoppingcartItem.itemCount * shoppingcartItem.itemPrice).toFixed(2)}} PLN</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 button-group\">\r\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"goBack()\" tabindex=\"6\">anuluj</button>\r\n                    <button *ngIf=\"cartId >= 0; else button_add_new_product\" class=\"btn btn-primary btn-sm\" (click)=\"updateShoppingcart(cartId)\" tabindex=\"5\">zapisz zmiany</button>\r\n                    \r\n                    <ng-template #button_add_new_product>\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"addToShoppingcart()\" tabindex=\"5\">dodaj do koszyka</button>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src-shoppingcart/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppingcart_item__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shoppingcart_service__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductPreviewComponent = (function () {
    function ProductPreviewComponent(productService, router, route, location, shoppingcartService) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.shoppingcartService = shoppingcartService;
        this.shoppingcartItem = new __WEBPACK_IMPORTED_MODULE_4__shoppingcart_item__["a" /* ShoppingcartItem */];
    }
    ProductPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // odczytujemy wartości parametrów z routera
        this.shoppingcartItem.productId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.cartId = parseInt(this.route.snapshot.paramMap.get('cartId'), 10);
        if ((this.cartId >= 0) && (!this.shoppingcartService.items[this.cartId])) {
            this.router.navigate(['/catalog']); // to przechodzimy do katalogu
        }
        this.productService
            .getProduct(this.shoppingcartItem.productId) // pobierz produkt z bazy danych...
            .then(function (product) { return _this.setProduct(product); }, // ... a potem wywołaj setProduct - jeśli sukces
        function (// ... a potem wywołaj setProduct - jeśli sukces
            msg) { return _this.location.back(); }); // ... albo przekieruj na poprzednią stronę - jeśli błąd
    };
    ProductPreviewComponent.prototype.setProduct = function (product) {
        this.product = product; // przepisz pobrane produkt do lokalnej zmiennej
        this.shoppingcartItem.name = this.product.name; // przepisz nazwę produktu do dodawanej pozycji koszyka
        this.shoppingcartItem.itemCount = 1;
        this.shoppingcartItem.itemPrice = this.product.priceBrutto;
        this.shoppingcartItem.previewFile = this.product.previewFile;
        if (this.cartId >= 0) {
            this.shoppingcartItem.itemCount = this.shoppingcartService.getItems()[this.cartId].itemCount;
            this.shoppingcartItem.color = this.shoppingcartService.getItems()[this.cartId].color;
            this.shoppingcartItem.size = this.shoppingcartService.getItems()[this.cartId].size;
        }
    };
    ProductPreviewComponent.prototype.addToShoppingcart = function () {
        this.shoppingcartItem.itemValue = this.shoppingcartItem.itemPrice * this.shoppingcartItem.itemCount;
        if (!this.shoppingcartItem.productId ||
            !this.shoppingcartItem.size ||
            !this.shoppingcartItem.color ||
            !this.shoppingcartItem.itemPrice ||
            !this.shoppingcartItem.itemCount) {
            alert('Podaj wszystkie informacje...');
        }
        else {
            this.shoppingcartService.putItem(this.shoppingcartItem);
            this.location.back();
        }
    };
    ProductPreviewComponent.prototype.updateShoppingcart = function (cartId) {
        this.shoppingcartItem.itemValue = this.shoppingcartItem.itemPrice * this.shoppingcartItem.itemCount;
        this.shoppingcartService.updateItem(this.shoppingcartItem, cartId);
        this.location.back();
    };
    ProductPreviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProductPreviewComponent;
}());
ProductPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-preview',
        template: __webpack_require__("../../../../../src-shoppingcart/app/product-preview.component.html"),
        styles: [__webpack_require__("../../../../../src-shoppingcart/app/product-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _e || Object])
], ProductPreviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-preview.component.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
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



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.productsUrl = 'api/products'; // url to web api
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/shoppingcart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartItem; });
var ShoppingcartItem = (function () {
    function ShoppingcartItem() {
    }
    return ShoppingcartItem;
}());

//# sourceMappingURL=shoppingcart-item.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/shoppingcart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shoppingcart-table{width:100%;font-size:.8rem}th.product-name{text-align:left}th.product-color,th.product-size{text-align:center}th.product-count,th.product-price,th.product-value{text-align:right}td.product-name{text-align:left}td.product-color,td.product-operation,td.product-size{text-align:center}td.product-count,td.product-price,td.product-value{text-align:right}td.total-value{text-align:right;font-weight:700}td.total-label{text-align:left;font-weight:700}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src-shoppingcart/app/shoppingcart.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"shoppingcartService.items.length==0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h5>Twój koszyk jest pusty...</h5>\r\n            <button class=\"btn btn-danger btn-sm\" (click)=\"goBack()\" tabindex=\"6\">powrót</button>\r\n        </div>\r\n        \r\n    </div>\r\n</section>\r\n\r\n<section *ngIf=\"shoppingcartService.items.length>0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\"><h5>Zawartość twojego koszyka:</h5></div>\r\n    </div>\r\n        \r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <table class=\"shoppingcart-table table table-sm table-striped\">\r\n                        \r\n                <thead class=\"thead-inverse\">\r\n                    <tr>\r\n                        <th class=\"product-name\">produkt</th>\r\n                        <th class=\"product-size\">rozmiar</th>\r\n                        <th class=\"product-color\">kolor</th>\r\n                        <th class=\"product-count\">ilość</th>\r\n                        <th class=\"product-price\">cena</th>\r\n                        <th class=\"product-value\">wartość</th>\r\n                        <th>&nbsp;</th>\r\n                        <th>&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                                   \r\n                <tbody>\r\n                    <tr *ngFor=\"let item of shoppingcartService.items; let i = index\">\r\n                        <td class=\"product-name\">{{item.name}}</td>\r\n                        <td class=\"product-size\">{{item.size}}</td>\r\n                        <td class=\"product-color\">{{item.color}}</td>\r\n                        <td class=\"product-count\">{{item.itemCount}}</td>\r\n                        <td class=\"product-price\">{{item.itemPrice.toFixed(2)}}</td>\r\n                        <td class=\"product-value\">{{item.itemValue.toFixed(2)}}</td>\r\n                        <td class=\"product-operation\">\r\n                            <a routerLink='/product/{{item.productId}}/{{i}}'>zmień</a>\r\n                        </td>\r\n                        <td class=\"product-operation\">\r\n                            <a href=\"#\" (click)=\"$event.preventDefault();shoppingcartService.deleteItem(i)\">usuń</a>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td colspan=\"5\" class=\"total-label\">RAZEM:</td>\r\n                        <td class=\"total-value\">{{shoppingcartService.totalValue().toFixed(2)}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>    \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n            <div class=\"col-12 button-group\">\r\n                <button class=\"btn btn-danger btn-sm\" (click)=\"goBack()\" tabindex=\"6\">powrót</button>\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"orderProducts()\" tabindex=\"5\">przejdź do zamówienia</button>\r\n            </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src-shoppingcart/app/shoppingcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoppingcart_service__ = __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingcartComponent = (function () {
    function ShoppingcartComponent(shoppingcartService, location) {
        this.shoppingcartService = shoppingcartService;
        this.location = location;
    }
    ShoppingcartComponent.prototype.goBack = function () {
        this.location.back();
    };
    ShoppingcartComponent.prototype.orderProducts = function () {
        alert('składamy zamówienie');
    };
    return ShoppingcartComponent;
}());
ShoppingcartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shoppingcart',
        template: __webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.component.html"),
        styles: [__webpack_require__("../../../../../src-shoppingcart/app/shoppingcart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object])
], ShoppingcartComponent);

var _a, _b;
//# sourceMappingURL=shoppingcart.component.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/app/shoppingcart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShoppingcartService = (function () {
    function ShoppingcartService() {
        this.items = [];
    }
    ShoppingcartService.prototype.getItems = function () {
        return this.items;
    };
    ShoppingcartService.prototype.putItem = function (item) {
        var i = this.items.length;
        this.items.push(item);
        if (this.items.length > i) {
            alert('pozycja została dodana do koszyka');
        }
        else {
            alert('pozycja nie została dodana do koszyka');
        }
    };
    ShoppingcartService.prototype.updateItem = function (item, cartId) {
        this.items[cartId] = item;
        alert('pozycja koszyka została zaktualizowana');
    };
    ShoppingcartService.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
    };
    ShoppingcartService.prototype.handleError = function (error) {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ShoppingcartService.prototype.itemCount = function () {
        return this.items.length;
    };
    ShoppingcartService.prototype.totalValue = function () {
        return this.items.reduce(function (a, b) { return a + b.itemValue; }, 0);
    };
    return ShoppingcartService;
}());
ShoppingcartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ShoppingcartService);

//# sourceMappingURL=shoppingcart.service.js.map

/***/ }),

/***/ "../../../../../src-shoppingcart/environments/environment.ts":
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

/***/ "../../../../../src-shoppingcart/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src-shoppingcart/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src-shoppingcart/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src-shoppingcart/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map