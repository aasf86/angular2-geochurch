webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <a class=\"navbar-brand\" href=\"#\">@aasf86</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n        <div class=\"navbar-nav\">\r\n          <a routerLinkActive=\"active\" routerLink=\"#/home\" class=\"nav-item nav-link\">Home</a>\r\n          <a routerLinkActive=\"active\" routerLink=\"#/crud\" class=\"nav-item nav-link\">Crud</a>          \r\n          <a routerLinkActive=\"active\" routerLink=\"#/report\" class=\"nav-item nav-link\">Report</a>                    \r\n          <a routerLinkActive=\"active\" routerLink=\"#/report/list\" class=\"nav-item nav-link\">Report list</a>\r\n          <a routerLinkActive=\"active\" routerLink=\"#/login\" class=\"nav-item nav-link\">Login</a>          \r\n        </div>\r\n      </div>\r\n      <!--span class=\"navbar-text\">\r\n        <a href=\"https://angular.io/\" target=\"-\"><strong>#angular</strong></a>\r\n      </span-->\r\n      <span class=\"navbar-text\">\r\n        <span [innerText]=\"user?.displayName+'('+user?.email+')'\"></span>\r\n      </span>\r\n      &nbsp;\r\n      <ul id=\"#js-popoverContent\" class=\"nav navbar-nav\">\r\n        <li class=\"md aax\">          \r\n            <img class=\"img-fluid\" style=\"border-radius: 50%;border-style: none; width: 35px; height: 35px;\" [src]=\"user?.photoURL\">\r\n        </li>\r\n      </ul>      \r\n    </nav>\r\n    <div class=\"container\">        \r\n      <!--app-courses></app-courses-->  \r\n      <!--app-crud></app-crud-->      \r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
        this.path = '';
        this.msg = 'message';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_crud_module__ = __webpack_require__("../../../../../src/app/crud/crud.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_report_module__ = __webpack_require__("../../../../../src/app/report/report.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { ReportModule } from './report/report.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__crud_crud_module__["a" /* CrudModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__report_report_module__["a" /* ReportModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
//was made refactoring for each module: ex: the crud module

//import { CrudComponent } from './crud/crud.component';

var AppRoutes = [
    //{ path: 'crud', component: CrudComponent },
    //{ path: 'crud/:id', component: CrudComponent },
    { path: '#/login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
];
var AppRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(AppRoutes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/crud/crud-list/crud-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crud/crud-list/crud-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Phone</th>\r\n        <th scope=\"col\" style=\"width: 1%\">@</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <th style=\"text-overflow: ellipsis; width: 20%\" scope=\"row\">guid</th>\r\n        <td><input type=\"text\" class=\"form-control\" placeholder=\"name\" (keyup)=\"searchName()\" [(ngModel)]=\"name\" name=\"name\"></td>\r\n        <td><input type=\"text\" class=\"form-control\" placeholder=\"email\" (keyup)=\"searchEmail()\" [(ngModel)]=\"email\" name=\"email\"></td>\r\n        <td><input type=\"text\" class=\"form-control\" placeholder=\"phone\" (keyup)=\"searchPhone()\" [(ngModel)]=\"phone\" name=\"phone\"></td>\r\n        <td>\r\n            <button class=\"btn btn-outline-warning\" tippy=\"clean all fields\" data-placement=\"top\" (click)=\"clearFilter()\">\r\n                <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </button>                                  \r\n        </td>\r\n      </tr>      \r\n      <tr *ngFor=\"let item of list\">\r\n        <th style=\"text-overflow: ellipsis; width: 20%\" scope=\"row\" [innerText]=\"item.guid.split('-')[0]\" ></th>\r\n        <td [innerText]=\"item.name\"></td>\r\n        <td [innerText]=\"item.email\"></td>\r\n        <td [innerText]=\"item.phone\"></td>\r\n        <td>            \r\n            <button class=\"btn btn-outline-danger\" (click)=\"removeUser(item)\">\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"list.length == 0\">\r\n          <td style=\"text-align: center\" colspan=\"5\" scope=\"row\"><strong class=\"badge badge-warning\">we dont found nuthing, sorry!!</strong></td>\r\n      </tr>      \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/crud/crud-list/crud-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_service__ = __webpack_require__("../../../../../src/app/crud/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SharedModule } from '../../shared/shared.module'
var CrudListComponent = (function () {
    function CrudListComponent(service) {
        this.service = service;
        this.tooltip = 'my messages';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.list = [];
        this.listBack = [];
    }
    CrudListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.selectAll(function (source) {
            _this.list = source;
            _this.listBack = source;
            _this.search();
        });
    };
    CrudListComponent.prototype.removeUser = function (item) {
        this.service.delete(item);
    };
    CrudListComponent.prototype.clearFilter = function () {
        this.name =
            this.email =
                this.phone = '';
        this.list = this.listBack;
    };
    CrudListComponent.prototype.searchName = function () {
        var _this = this;
        if (!this.name)
            this.list = this.listBack;
        this.list = this.listBack.filter(function (x) { return x.name.indexOf(_this.name) > -1; });
    };
    CrudListComponent.prototype.searchEmail = function () {
        var _this = this;
        if (!this.email)
            this.list = this.listBack;
        this.list = this.listBack.filter(function (x) { return x.email.indexOf(_this.email) > -1; });
    };
    CrudListComponent.prototype.searchPhone = function () {
        var _this = this;
        if (!this.phone)
            this.list = this.listBack;
        this.list = this.listBack.filter(function (x) { return x.phone.indexOf(_this.phone) > -1; });
    };
    CrudListComponent.prototype.search = function () {
        var _this = this;
        if (this.name) {
            this.list = this.list.filter(function (x) { return x.name.indexOf(_this.name) > -1; });
        }
        if (this.email) {
            this.list = this.list.filter(function (x) { return x.email.indexOf(_this.email) > -1; });
        }
        if (this.phone) {
            this.list = this.list.filter(function (x) { return x.phone.indexOf(_this.phone) > -1; });
        }
    };
    return CrudListComponent;
}());
CrudListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crud-list',
        template: __webpack_require__("../../../../../src/app/crud/crud-list/crud-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/crud/crud-list/crud-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], CrudListComponent);

var _a;
//# sourceMappingURL=crud-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/crud/crud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crud/crud.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">\n  Crud angular+firebase\n</h4>\n<form>\n  <div class=\"row\">\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\n    </div>\n    <div class=\"col\">\n      <input type=\"email\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\n    </div>\n    <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"phone\" [(ngModel)]=\"phone\" name=\"phone\">\n      </div>    \n    <div class=\"col\">\n      <button class=\"btn btn-dark btn-block\" (click)=\"addUser()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        Add\n      </button>\n    </div>    \n  </div>\n</form>\n<hr/>\n<app-crud-list></app-crud-list>\n"

/***/ }),

/***/ "../../../../../src/app/crud/crud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__("../../../../../src/app/crud/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudComponent = (function () {
    function CrudComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.name = '';
        this.email = '';
        this.phone = '';
    }
    CrudComponent.prototype.addUser = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */](this.name, this.email, this.phone);
        this.service.insert(user);
        this.name =
            this.email =
                this.phone = '';
    };
    CrudComponent.prototype.navigate = function () {
        this.id++;
        this.router.navigate(['/crud', this.id.toString()]);
    };
    CrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) { return _this.id = params.id; });
    };
    CrudComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CrudComponent;
}());
CrudComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crud',
        template: __webpack_require__("../../../../../src/app/crud/crud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/crud/crud.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */]) === "function" && _c || Object])
], CrudComponent);

var _a, _b, _c;
//# sourceMappingURL=crud.component.js.map

/***/ }),

/***/ "../../../../../src/app/crud/crud.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CrudRouterModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crud_component__ = __webpack_require__("../../../../../src/app/crud/crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crud_service__ = __webpack_require__("../../../../../src/app/crud/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crud_list_crud_list_component__ = __webpack_require__("../../../../../src/app/crud/crud-list/crud-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CrudRouterModule = (function () {
    function CrudRouterModule() {
    }
    return CrudRouterModule;
}());
CrudRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                { path: '#/crud', component: __WEBPACK_IMPORTED_MODULE_4__crud_component__["a" /* CrudComponent */] },
                { path: '#/crud/:id', component: __WEBPACK_IMPORTED_MODULE_4__crud_component__["a" /* CrudComponent */] },
                { path: '#/home', component: __WEBPACK_IMPORTED_MODULE_4__crud_component__["a" /* CrudComponent */] } /*,
                { path: '', component: CrudComponent }*/
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        declarations: []
    })
], CrudRouterModule);

var CrudModule = (function () {
    function CrudModule() {
    }
    return CrudModule;
}());
CrudModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            CrudRouterModule,
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__crud_component__["a" /* CrudComponent */], __WEBPACK_IMPORTED_MODULE_6__crud_list_crud_list_component__["a" /* CrudListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__crud_component__["a" /* CrudComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__crud_service__["a" /* CrudService */]]
    })
], CrudModule);

//# sourceMappingURL=crud.module.js.map

/***/ }),

/***/ "../../../../../src/app/crud/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_guid__ = __webpack_require__("../../../../guid/guid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_guid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_guid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudService = (function () {
    function CrudService() {
        this.database = null;
        this.provider = null;
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA5HL4YrjV6G4vLkFS6UMBmUQPsEy0KRyc",
            authDomain: "aasf86.firebaseapp.com",
            databaseURL: "https://aasf86.firebaseio.com",
            projectId: "aasf86",
            storageBucket: "aasf86.appspot.com",
            messagingSenderId: "91046757585"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
        this.database = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]();
        this.provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().languageCode = 'pt';
    }
    CrudService.prototype.insert = function (user) {
        if (user == null)
            return;
        user.guid = __WEBPACK_IMPORTED_MODULE_2_guid__["raw"]();
        this.database.ref('users/' + user.guid).set(user);
    };
    CrudService.prototype.delete = function (user) {
        this.database.ref('users/' + user.guid).remove();
    };
    CrudService.prototype.selectAll = function (callBack) {
        this.database.ref('users/').on('value', function (source) {
            var listResult = [];
            for (var key in source.val()) {
                listResult.push(source.val()[key]);
            }
            callBack(listResult);
        });
    };
    CrudService.prototype.login = function (callBack) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(this.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // ...
            console.log(result);
            callBack(user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.error(error);
        });
    };
    return CrudService;
}());
CrudService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CrudService);

//# sourceMappingURL=crud.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  login works!\n</h3>\n\n<form>\n  <div class=\"row\">\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"email\">\n    </div>\n    <div class=\"col\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"password\">\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-primary\" (click)=\"login()\">login</button>\n    </div>    \n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_crud_service__ = __webpack_require__("../../../../../src/app/crud/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_services) {
        this._services = _services;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this._services.login(function (user) {
            if (user != null)
                location.reload(true);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crud_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crud_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = (function () {
    function LoginService() {
    }
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/report/report-list/report-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report-list/report-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">\n  Report base\n </h4>\n<form>\n<table class=\"table table-dark table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Column heading</th>\n      <th scope=\"col\">Column heading</th>\n      <th scope=\"col\">Column heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"bg-primary\">\n      <th scope=\"row\">1</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr class=\"bg-success\">\n      <th scope=\"row\">3</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">4</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr class=\"bg-info\">\n      <th scope=\"row\">5</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">6</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr class=\"bg-warning\">\n      <th scope=\"row\">7</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">8</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n    <tr class=\"bg-danger\">\n      <th scope=\"row\">9</th>\n      <td>Column content</td>\n      <td>Column content</td>\n      <td>Column content</td>\n    </tr>\n  </tbody>\n</table>\n</form>"

/***/ }),

/***/ "../../../../../src/app/report/report-list/report-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportListComponent = (function () {
    function ReportListComponent() {
    }
    ReportListComponent.prototype.ngOnInit = function () {
    };
    return ReportListComponent;
}());
ReportListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-report-list',
        template: __webpack_require__("../../../../../src/app/report/report-list/report-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report/report-list/report-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportListComponent);

//# sourceMappingURL=report-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">\n  Report base\n</h4>\n<form>\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td colspan=\"2\">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td colspan=\"2\">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td colspan=\"2\">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td colspan=\"2\">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>            \n  </tbody>\n</table>\n</form>"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportRouterModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_list_report_list_component__ = __webpack_require__("../../../../../src/app/report/report-list/report-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportRouterModule = (function () {
    function ReportRouterModule() {
    }
    return ReportRouterModule;
}());
ReportRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
                { path: '#/report', component: __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */] },
                { path: '#/report/list', component: __WEBPACK_IMPORTED_MODULE_4__report_list_report_list_component__["a" /* ReportListComponent */] },
                { path: '#/report/:id', component: __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */] } /*,
                { path: '', component: ReportComponent }*/
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]],
        declarations: []
    })
], ReportRouterModule);

var ReportModule = (function () {
    function ReportModule() {
    }
    return ReportModule;
}());
ReportModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ReportRouterModule
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */], __WEBPACK_IMPORTED_MODULE_4__report_list_report_list_component__["a" /* ReportListComponent */]]
    })
], ReportModule);

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tippy_js__ = __webpack_require__("../../../../tippy.js/dist/tippy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tippy_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tippy_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var tooggleTooltip = 'tippy';
var DataToggleDirective = (function () {
    function DataToggleDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    DataToggleDirective.prototype.ngAfterViewInit = function () {
        if (this.msg)
            this._elementRef.nativeElement.setAttribute('title', this.msg);
        __WEBPACK_IMPORTED_MODULE_1_tippy_js__(this._elementRef.nativeElement, { theme: 'light', animation: 'scale', arrow: true });
    };
    return DataToggleDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(tooggleTooltip),
    __metadata("design:type", String)
], DataToggleDirective.prototype, "msg", void 0);
DataToggleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[' + tooggleTooltip + ']'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], DataToggleDirective);

var _a;
//# sourceMappingURL=directive.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_directive__ = __webpack_require__("../../../../../src/app/shared/directive.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__directive_directive__["a" /* DataToggleDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__directive_directive__["a" /* DataToggleDirective */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map