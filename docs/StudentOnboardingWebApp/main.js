(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"router.url !== '/login'\"></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Welcome Students Onboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _modules_login_login_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/login/login.module */ "./src/app/modules/login/login.module.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _modules_login_login_module__WEBPACK_IMPORTED_MODULE_9__["LoginModule"],
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");




/* class implements CanActivate and guards in deciding if a route can be activated.
 * If return `true`, navigation will continue. If returns `false`,
 * navigation will be cancelled */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /* method is used to decide if a route can be activated.
    @param:
    @return: returns the boolean value indicating if the route can be activated
    */
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('');
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




/* class includes all the modules for from material library */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_student_list_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/student-list/student-list/student-list.component */ "./src/app/modules/home/pages/student-list/student-list/student-list.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _pages_onboarding_form_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/onboarding-form/onboarding-form/onboarding-form.component */ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.ts");






var routes = [
    { path: 'onboard', component: _pages_onboarding_form_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_5__["OnboardingFormComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'onboard/:op/:id', component: _pages_onboarding_form_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_5__["OnboardingFormComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'list', component: _pages_student_list_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _pages_onboarding_form_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/onboarding-form/onboarding-form/onboarding-form.component */ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.ts");
/* harmony import */ var _pages_student_list_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/student-list/student-list/student-list.component */ "./src/app/modules/home/pages/student-list/student-list/student-list.component.ts");
/* harmony import */ var _pages_student_list_student_list_card_student_list_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/student-list/student-list-card/student-list-card.component */ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.ts");
/* harmony import */ var _pages_student_list_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/student-list/dialog/dialog.component */ "./src/app/modules/home/pages/student-list/dialog/dialog.component.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "./src/app/modules/home/shared/pipes/filter.pipe.ts");
/* harmony import */ var _shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/document/document.service */ "./src/app/modules/home/shared/services/document/document.service.ts");
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/student/student.service */ "./src/app/modules/home/shared/services/student/student.service.ts");













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_onboarding_form_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingFormComponent"],
                _pages_student_list_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_7__["StudentListComponent"],
                _pages_student_list_student_list_card_student_list_card_component__WEBPACK_IMPORTED_MODULE_8__["StudentListCardComponent"],
                _pages_student_list_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
                _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [],
            providers: [
                _shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_11__["DocumentService"],
                _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"]
            ],
            entryComponents: [_pages_student_list_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    margin: 0.2%;\n    color: white;\n}\n\na:hover {\n    background-color: white;\n    color: slateblue;\n}\n\n.active{\n    background-color: white;\n    color: slateblue;\n}\n\nbutton{\n    margin: 1%;\n}\n\nform{\n    width: 80%;\n    margin-left: 10%;\n    margin-top: 5%;\n}\n\nmat-form-field{\n    width: 100%;\n}\n\ninput{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2hvbWUvcGFnZXMvb25ib2FyZGluZy1mb3JtL29uYm9hcmRpbmctZm9ybS9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9vbmJvYXJkaW5nLWZvcm0vb25ib2FyZGluZy1mb3JtL29uYm9hcmRpbmctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgbWFyZ2luOiAwLjIlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHNsYXRlYmx1ZTtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogc2xhdGVibHVlO1xufVxuXG5idXR0b257XG4gICAgbWFyZ2luOiAxJTtcbn1cblxuZm9ybXtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <a class=\"nav-link active\" routerLink=\"/onboard\">OnBoardForm</a>\n    <a class=\"nav-link\" routerLink=\"/list\">StudentList</a>\n</mat-toolbar>\n\n<form [formGroup]=\"onboardForm\" (ngSubmit)=\"insert()\">\n    <mat-form-field>\n        <input matInput id=\"username\" placeholder=\"Student name\" formControlName=\"username\">\n        <mat-error *ngIf=\"onboardForm.controls['username'].invalid && (onboardForm.controls['username'].dirty || onboardForm.controls['username'].touched)\">\n            Please enter a valid name with only letter(a-z)\n        </mat-error>\n    </mat-form-field>\n    \n    <mat-select style=\"margin:1%;\" placeholder=\"Category of Student\" formControlName=\"category\" (selectionChange)=\"onCategorySelection()\" matTooltip=\"Select the category of the applicant\">\n        <mat-option *ngFor=\"let category of categories\" value=\"{{category.name}}\">\n            {{category.name}}\n        </mat-option>\n    </mat-select><br/><br/>\n    \n    <label matTooltip=\"Select the documents presented by the applicant\">Documents:</label>\n    <div *ngFor=\"let control of documentArray.controls; let i=index\">\n        <mat-checkbox color=\"primary\" [formControl]=\"control\">\n            {{documentsToShow[i].name}}\n            <label *ngIf=\"documentsToShow[i].mandatory\">*</label>\n        </mat-checkbox>\n    </div>\n    <mat-error *ngIf=\"!validCheckboxes\">\n        a mandatory document is not checked\n    </mat-error>\n    \n    <mat-form-field>\n        <input [min]=\"minDate\" [max]=\"maxDate\" style=\"width:96%;margin-bottom: 1%;margin-top: 1%;\" matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"dob\" matTooltip=\"Enter the date of birth of the applicant\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    \n    <mat-form-field>\n        <input matInput id=\"father_name\" placeholder=\"Father's name\" formControlName=\"father_name\">\n        <mat-error *ngIf=\"onboardForm.controls['father_name'].invalid && (onboardForm.controls['father_name'].dirty || onboardForm.controls['father_name'].touched)\">\n            Please enter a valid name with only letter(a-z)\n        </mat-error>\n    </mat-form-field>\n    \n    <mat-form-field>\n        <input matInput id=\"mother_name\" placeholder=\"Mother's name\" formControlName=\"mother_name\">\n        <mat-error *ngIf=\"onboardForm.controls['mother_name'].invalid && (onboardForm.controls['mother_name'].dirty || onboardForm.controls['mother_name'].touched)\">\n            Please enter a valid name with only letter(a-z)\n        </mat-error>\n    </mat-form-field>\n    \n    <mat-form-field>\n        <input matInput id=\"marks\" type=\"number\" placeholder=\"% Marks\" formControlName=\"marks\">\n        <mat-error *ngIf=\"onboardForm.controls['marks'].invalid && (onboardForm.controls['marks'].dirty || onboardForm.controls['marks'].touched)\">\n            Please enter a valid number between 1-100\n        </mat-error>\n    </mat-form-field>\n    \n    <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!onboardForm.valid\">ONBOARD</button>\n    \n</form>"

/***/ }),

/***/ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OnboardingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingFormComponent", function() { return OnboardingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/student/student.service */ "./src/app/modules/home/shared/services/student/student.service.ts");
/* harmony import */ var _shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/document/document.service */ "./src/app/modules/home/shared/services/document/document.service.ts");







/* Displays the UI on the basis of url,
* If the url does not include any parameters, Its assumed to be an insert form for the details of students onboarding,
* If the url includes operation as view, The details of a student with the respective id passed in the parameters is displayed,
* If the url includes operation as edit, The details of a student with the respective id passed in parameters is presented as editable.
*/
var OnboardingFormComponent = /** @class */ (function () {
    function OnboardingFormComponent(activatedRoute, formBuilder, studentService, documentService, snackbar) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.documentService = documentService;
        this.snackbar = snackbar;
        this.minDate = new Date(1992, 0, 1);
        this.maxDate = new Date(2000, 0, 1);
        this.regexForNames = "^[a-zA-Z]+(([ ][a-zA-Z])?[a-zA-Z]*)*$";
        this.categories = [
            { 'id': 1, 'name': 'Domestic' },
            { 'id': 2, 'name': 'International' }
        ];
        this.default = "Domestic";
        this.validCheckboxes = true;
        this.id = null;
        this.op = null;
    }
    OnboardingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.insertMockData();
        this.documentService.fetchDocuments().subscribe(function (observer) {
            _this.domesticDocuments = observer['domestic'];
            _this.internationalDocuments = observer['international'];
            _this.setId();
        });
        this.createForm(null);
    };
    /* Extracts the id from the url parameters to fetch the operation to be performed and id of the student on whose details operation needs to be performed.
    */
    OnboardingFormComponent.prototype.setId = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = (params['id']);
            _this.op = (params['op']);
        });
        if (this.id != null) {
            var student = this.studentService.fetchStudentWithId(parseInt(this.id));
            console.log(student);
            this.createForm(student);
        }
        else {
            this.createForm(null);
        }
    };
    /* Creates an onboarding form for the details of the given student
    * In case null is provides, a form with empty fields is created
    * In case a student object is provided, the form is provided with pre-filled fields
    * @param    student   instance of class Student
    */
    OnboardingFormComponent.prototype.createForm = function (student) {
        if (student == null) {
            this.createFormWithout();
        }
        else {
            this.createFormWithFields(student);
        }
        if (this.op == "view") {
            this.disableForm();
        }
    };
    /* Disables the form in case the operation on the form is view */
    OnboardingFormComponent.prototype.disableForm = function () {
        this.onboardForm.disable();
    };
    /* Creates an onboarding form with the given student instance
    *@param     student    instance of class Student
    */
    OnboardingFormComponent.prototype.createFormWithFields = function (student) {
        this.student = student;
        this.onboardForm = this.formBuilder.group({
            username: [student.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            category: [student.category],
            document_checkboxes: this.addCheckboxesForStudent(student),
            dob: [student.dob],
            father_name: [student.father_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            mother_name: [student.mother_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            marks: [student.marks, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]]
        });
    };
    /* Creates an onboarding form with empty fields */
    OnboardingFormComponent.prototype.createFormWithout = function () {
        this.onboardForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            category: [this.default],
            document_checkboxes: this.addCheckboxes(this.default),
            dob: '',
            father_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            mother_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regexForNames)]],
            marks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]]
        });
    };
    /* Creates checkboxes on the onboarding form */
    OnboardingFormComponent.prototype.addCheckboxes = function (category) {
        var _this = this;
        if (category == "Domestic") {
            this.documentsToShow = this.domesticDocuments;
        }
        else {
            this.documentsToShow = this.internationalDocuments;
        }
        if (this.documentsToShow !== undefined) {
            var checkboxes = this.documentsToShow.map(function (element) {
                if (element.isChecked == null) {
                    return _this.formBuilder.control(false);
                }
                else {
                    return _this.formBuilder.control(element.isChecked);
                }
            });
            return this.formBuilder.array(checkboxes);
        }
        else {
            console.log('documents r undefined');
        }
    };
    /* Creates checkboxes on the onboarding form */
    OnboardingFormComponent.prototype.addCheckboxesForStudent = function (student) {
        var _this = this;
        if (student == null || student.category == 'Domestic') {
            this.documentsToShow = this.domesticDocuments;
        }
        else {
            this.documentsToShow = this.internationalDocuments;
        }
        if (this.documentsToShow !== undefined) {
            var checkboxes = student.documentsList.map(function (element) {
                if (element.isChecked == null) {
                    return _this.formBuilder.control(false);
                }
                else {
                    return _this.formBuilder.control(element.isChecked);
                }
            });
            return this.formBuilder.array(checkboxes);
        }
        else {
            console.log('documents r undefined');
        }
    };
    /* Called when a category is selected */
    OnboardingFormComponent.prototype.onCategorySelection = function () {
        var categorySelected = this.onboardForm.controls['category'].value;
        this.onboardForm.controls['document_checkboxes'] = this.addCheckboxes(categorySelected);
    };
    Object.defineProperty(OnboardingFormComponent.prototype, "documentArray", {
        /* getter for FormArray of form controls */
        get: function () {
            return this.onboardForm.get('document_checkboxes');
        },
        enumerable: true,
        configurable: true
    });
    /* Called on submission of the form */
    OnboardingFormComponent.prototype.insert = function () {
        var username = this.onboardForm.controls['username'].value;
        var category = this.onboardForm.controls['category'].value;
        var father_name = this.onboardForm.controls['father_name'].value;
        var mother_name = this.onboardForm.controls['mother_name'].value;
        var marks = this.onboardForm.controls['marks'].value;
        var document_checkboxes = this.onboardForm.controls['document_checkboxes'].value;
        var dob = this.onboardForm.controls['dob'].value;
        this.validCheckboxes = this.checkIfCheckedDocumentsAreValid(document_checkboxes);
        if (this.validCheckboxes) {
            var student = {
                id: this.student ? this.student.id : -1,
                name: username,
                category: category,
                documentsList: this.fetchDocumentsToInsert(document_checkboxes),
                dob: dob,
                father_name: father_name,
                mother_name: mother_name,
                marks: marks
            };
            if (this.id != null) {
                this.studentService.updateLocalStorage(student);
            }
            else {
                this.studentService.insertStudentInLocalStorage(student);
            }
            var matSnackBarConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
            matSnackBarConfig.horizontalPosition = "center";
            matSnackBarConfig.verticalPosition = "top";
            this.snackbar.open("Successfully inserted a student record", "", matSnackBarConfig);
            setTimeout(function () {
                location.reload();
            }, 2000);
        }
        else {
            console.log('a mandatory doc is not checked');
        }
    };
    /* get the documents to be inserted in the student record
    * @param:   document_checkboxes   An array of boolean values of the checkboxes on the form
    * @return:   IDocument[]           An array of documents
    */
    OnboardingFormComponent.prototype.fetchDocumentsToInsert = function (document_checkboxes) {
        var documentsToInsert = [];
        for (var index = 0; index < this.documentsToShow.length; index++) {
            documentsToInsert.push({
                name: this.documentsToShow[index].name,
                mandatory: this.documentsToShow[index].mandatory,
                isChecked: document_checkboxes[index]
            });
        }
        return documentsToInsert;
    };
    /* Checks if the documents checked are valid by matching the mandatory field and the checkbox value
    * @param:   document_checkboxes   An array of boolean values of the checkboxes on the form
    * @return:  Boolean               True in case checkboxes are valiue else false
    */
    OnboardingFormComponent.prototype.checkIfCheckedDocumentsAreValid = function (document_checkboxes) {
        for (var index = 0; index < this.documentsToShow.length; index++) {
            if ((this.documentsToShow[index].mandatory !== document_checkboxes[index])) {
                if (this.documentsToShow[index].mandatory) {
                    return false;
                }
            }
        }
        return true;
    };
    OnboardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-form',
            template: __webpack_require__(/*! ./onboarding-form.component.html */ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-form.component.css */ "./src/app/modules/home/pages/onboarding-form/onboarding-form/onboarding-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"],
            _shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], OnboardingFormComponent);
    return OnboardingFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/student-list/dialog/dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/dialog/dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3R1ZGVudC1saXN0L2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0dWRlbnQtbGlzdC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgbWFyZ2luOiAxJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/dialog/dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/dialog/dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6>Are you sure want to delete this record?</h6>\n  \n  <div style=\"margin-left:50%;\">\n    <mat-dialog-actions class=\"actions\">\n      <button mat-flat-button color=\"accent\" (click)=\"closeDialog()\">No</button>\n      <button mat-flat-button color=\"accent\" (click)=\"delete()\">Yes</button>\n    </mat-dialog-actions>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/dialog/dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/dialog/dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/student/student.service */ "./src/app/modules/home/shared/services/student/student.service.ts");




/* Creates a dialog to ask for confirmation from the user to delete the information related to a student.
* If 'Yes' pressed deletes the student details from the local storage
*/
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data, studentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.studentService = studentService;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    /* closes the dialog */
    DialogComponent.prototype.closeDialog = function () {
        return this.dialogRef.close();
    };
    /* deleted the user from the local storage */
    DialogComponent.prototype.delete = function () {
        this.studentService.updateLocalStorage(this.data);
        this.closeDialog();
        location.reload();
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/modules/home/pages/student-list/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/modules/home/pages/student-list/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    width:25%;\n    float: left;\n    padding: 2%;\n    margin: 3%;\n}\n\nbutton{\n    background-color: white; \n    color: black; \n    border: 2px solid #e7e7e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC1jYXJkL3N0dWRlbnQtbGlzdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LWNhcmQvc3R1ZGVudC1saXN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB3aWR0aDoyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMiU7XG4gICAgbWFyZ2luOiAzJTtcbn1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"card\">\n    <label *ngIf='student.category == \"International\"' style=\"color:royalblue; text-align:center;\">{{student.category}}</label>\n    <label *ngIf='student.category == \"Domestic\"' style=\"color:deeppink; text-align:center;\">{{student.category}}</label>\n    <label>Name: {{student.name}}</label>\n    <label>Marks: {{student.marks}}</label>\n    <button mat-stroked-button [routerLink]=\"['/onboard/view',student.id]\" matTooltip=\"Click to view the details\">View</button>\n    <button mat-stroked-button [routerLink]=\"['/onboard/edit',student.id]\" matTooltip=\"Click to update the details\">Edit</button>\n    <button mat-stroked-button (click)=\"delete()\" matTooltip=\"click to delete the details\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: StudentListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListCardComponent", function() { return StudentListCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../dialog/dialog.component */ "./src/app/modules/home/pages/student-list/dialog/dialog.component.ts");





/* Creates a card layout to display details of a student and an option to view, edit or delete the details of the student */
var StudentListCardComponent = /** @class */ (function () {
    /* ctor to initialize an instance of Router and MatDialog */
    function StudentListCardComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    StudentListCardComponent.prototype.ngOnInit = function () {
    };
    /* Navigates to the onboard form with the details of the student clicked in uneditable mode*/
    StudentListCardComponent.prototype.view = function () {
        this.router.navigateByUrl("/onboard/:" + String(this.student.id));
    };
    /* Navigates to the onboard form with the details of the student clicked in editable mode */
    StudentListCardComponent.prototype.edit = function () {
        this.router.navigateByUrl("/onboard/:" + String(this.student.id));
    };
    /* Opens dialog with dialog configurations to ask the user for confirmation to delete the details of the student */
    StudentListCardComponent.prototype.delete = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.height = '20%';
        dialogConfig.width = '30%';
        dialogConfig.data = this.student;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], dialogConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentListCardComponent.prototype, "student", void 0);
    StudentListCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list-card',
            template: __webpack_require__(/*! ./student-list-card.component.html */ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.html"),
            styles: [__webpack_require__(/*! ./student-list-card.component.css */ "./src/app/modules/home/pages/student-list/student-list-card/student-list-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], StudentListCardComponent);
    return StudentListCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list/student-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list/student-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    margin: 0.2%;\n    color: white;\n}\n\na:hover {\n    background-color: white;\n    color: slateblue;\n}\n\n.active{\n    background-color: white;\n    color: slateblue;\n}\n\nbutton{\n    margin: 1%;\n}\n\n#studentListHeader{\n    width:100%;\n    text-align: center;\n    margin-top: 1%;\n    margin-bottom: 2%;\n}\n\n#studentListCard{\n    width:100%;\n    height: 100%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSiIsImZpbGUiOiJhcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBtYXJnaW46IDAuMiU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogc2xhdGVibHVlO1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBzbGF0ZWJsdWU7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW46IDElO1xufVxuXG4jc3R1ZGVudExpc3RIZWFkZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbiNzdHVkZW50TGlzdENhcmR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCVcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list/student-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list/student-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <a class=\"nav-link\" routerLink=\"/onboard\">OnBoardForm</a>\n    <a class=\"nav-link active\" routerLink=\"/list\">StudentList</a>\n</mat-toolbar>\n\n<div id = \"studentListHeader\">\n    <div style=\"float:left; width:50%\">\n        <select id=\"category\" style=\"width:30%;\" (change)=\"onCategorySelection($event.target.value)\">\n          <option *ngFor=\"let category of categories;let i=index\" value=\"{{i}}\">\n            {{category}}\n          </option>\n        </select>\n      </div>\n      \n      <div style=\"float: right;width: 50%;\">\n        <input type=\"text\" style=\"text-align:center;\" placeholder=\"search student\" [(ngModel)] = \"searchText\" matTooltip=\"Search the name of the student\">\n      </div>\n</div>\n\n<div id=\"studentListCard\">\n    <app-student-list-card *ngFor=\"let student of studentsToShow | filter:searchText\" [student]=\"student\"></app-student-list-card>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/pages/student-list/student-list/student-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/pages/student-list/student-list/student-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/student/student.service */ "./src/app/modules/home/shared/services/student/student.service.ts");



/*   */
var StudentListComponent = /** @class */ (function () {
    /* ctor to initialize student service */
    function StudentListComponent(studentService) {
        this.studentService = studentService;
        this.categories = ['All', 'Domestic', 'International'];
    }
    /* fetches all the students stored in local storage */
    StudentListComponent.prototype.ngOnInit = function () {
        var students = this.studentService.fetchAllStudents();
        this.students = students;
        this.studentsToShow = students;
    };
    /* Retrieves the value of the category selected from the drop down and filters the students on the basis of category selected
    * @param:   categoryValue   The value of the dropdown selected
    */
    StudentListComponent.prototype.onCategorySelection = function (categoryValue) {
        var category = this.categories[categoryValue];
        switch (category) {
            case "All":
                this.studentsToShow = this.students;
                break;
            case "Domestic":
                var students = this.students;
                var studentsToShow = [];
                students.filter(function (value, index, array) {
                    if (value.category == "Domestic") {
                        studentsToShow.push(value);
                    }
                });
                this.studentsToShow = studentsToShow;
                ;
                break;
            case "International":
                var students = this.students;
                var studentsToShow = [];
                students.filter(function (value, index, array) {
                    if (value.category == "International") {
                        studentsToShow.push(value);
                    }
                });
                this.studentsToShow = studentsToShow;
                ;
                break;
        }
    };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/modules/home/pages/student-list/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/modules/home/pages/student-list/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/shared/pipes/filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/home/shared/pipes/filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* Filters an array of Students on the basis of a text provided */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /* Checks if a given text is present in the username of the students in Student array
    * @param:   values      An array of students
    *           searchText  The text on the basis of which array is filtered
    * @return:  any         An array of students containing the given text in username field
    */
    FilterPipe.prototype.transform = function (values, searchText) {
        if (!values)
            return [];
        if (!searchText)
            return values;
        searchText = searchText.toLocaleLowerCase();
        return values.filter(function (value) {
            return value.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/modules/home/shared/services/document/document.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/shared/services/document/document.service.ts ***!
  \***************************************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/network-request/network-request.service */ "./src/app/shared/services/network-request/network-request.service.ts");



var DocumentService = /** @class */ (function () {
    function DocumentService(networkRequestService) {
        this.networkRequestService = networkRequestService;
        this.url = "assets/files/documents.json";
    }
    /* Retrieves the list of documents from the url */
    DocumentService.prototype.fetchDocuments = function () {
        return this.networkRequestService.fetchData(this.url);
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_2__["NetworkRequestService"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/modules/home/shared/services/student/student.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/home/shared/services/student/student.service.ts ***!
  \*************************************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/local-storage/local-storage.service */ "./src/app/shared/services/local-storage/local-storage.service.ts");
/* harmony import */ var _shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/network-request/network-request.service */ "./src/app/shared/services/network-request/network-request.service.ts");




/* Class provides methods to perform CRUD operations on local storage for students */
var StudentService = /** @class */ (function () {
    function StudentService(localStorageService, networkRequestService) {
        this.localStorageService = localStorageService;
        this.networkRequestService = networkRequestService;
        this.url = "assets/files/students.json";
        this.key = "students";
    }
    StudentService.prototype.insertMockData = function () {
        var _this = this;
        if (!this.localStorageService.fetchDataFromLocalStorage(this.key)) {
            this.networkRequestService.fetchData(this.url).subscribe(function (observer) {
                var students = observer[_this.key];
                var data = JSON.stringify(students);
                _this.localStorageService.storeInLocalStorage(_this.key, data);
            });
        }
    };
    /* Returns all the students from the local storage
    * in case, the students are present in local storage, stores mock data in local storage
    * @return: An array of students stored in the local storage
    */
    StudentService.prototype.fetchAllStudents = function () {
        var data = localStorage.getItem(this.key);
        if (!data) {
            this.insertMockData();
        }
        else {
            return JSON.parse(data);
        }
    };
    /* Returns a student with the given id
    * @param:   id        Id of the student whose details needs to be retrived
    * @return   student   Student instance of the given id
    */
    StudentService.prototype.fetchStudentWithId = function (id) {
        var data = this.fetchAllStudents();
        if (data != undefined || data != null) {
            return data[id - 1];
        }
    };
    /* Insert a student in the local storage
    * If there is no data in local storage, it creates a new array with the student and stores the array in local storage
    * If there is data in local storage, method increment the length of the array and assigns it as id of the student and stores data in local storage
    * @param: an instance of Student class*/
    StudentService.prototype.insertStudentInLocalStorage = function (student) {
        var students = this.fetchAllStudents();
        if (students !== null) {
            student.id = students.length + 1;
            students.push(student);
        }
        else {
            students = [student];
        }
        var data = JSON.stringify(students);
        this.localStorageService.removeFromLocalStorage(this.key);
        this.localStorageService.storeInLocalStorage(this.key, data);
    };
    /* Updates a student in the local storage
    * @param: an instance of Student class
    */
    StudentService.prototype.updateLocalStorage = function (student) {
        var students = this.fetchAllStudents();
        var id = student.id;
        students.splice(id - 1, 1, student);
        this.localStorageService.removeFromLocalStorage(this.key);
        var data = JSON.stringify(students);
        this.localStorageService.storeInLocalStorage(this.key, data);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_3__["NetworkRequestService"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/modules/login/login-form-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/login/login-form-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormRoutingModule", function() { return LoginFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/modules/login/login-form/login-form.component.ts");




var routes = [
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"] },
];
var LoginFormRoutingModule = /** @class */ (function () {
    function LoginFormRoutingModule() {
    }
    LoginFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginFormRoutingModule);
    return LoginFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login-form/login-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/login/login-form/login-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    border-radius: 8px;\n    opacity: 0.9;\n}\n\n#imgdiv{\n    float:left; \n    width: 50%;\n}\n\n.example-container{\n    float:right; \n    text-align: center;\n    width: 50%;\n    padding: 8%;\n}\n\nbutton{\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cbiNpbWdkaXZ7XG4gICAgZmxvYXQ6bGVmdDsgXG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVye1xuICAgIGZsb2F0OnJpZ2h0OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiA4JTtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogMSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/login/login-form/login-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/login/login-form/login-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 4%\">\n  <div id=\"imgdiv\">\n    <img src=\"assets/images/login.png\" width=\"100%\">\n  </div>\n  \n  <div class=\"example-container\">\n    <form [formGroup]=\"loginForm\"  (ngSubmit)=\"login()\">\n      <mat-form-field style=\"width: 100%;\">\n        <input matInput type=\"text\" formControlName=\"username\" placeholder=\"username\">\n      </mat-form-field><br/>\n      <mat-form-field style=\"width: 100%;\">\n        <input matInput type=\"password\" formControlName=\"password\" placeholder=\"password\">\n      </mat-form-field>\n      <div>\n        <button mat-raised-button color=\"accent\" [disabled]=\"!loginForm.valid\">LOGIN</button>\n        <button mat-raised-button color=\"accent\" (click)=\"reset()\">RESET</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/login/login-form/login-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/login/login-form/login-form.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/network-request/network-request.service */ "./src/app/shared/services/network-request/network-request.service.ts");
/* harmony import */ var _shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/local-storage/local-storage.service */ "./src/app/shared/services/local-storage/local-storage.service.ts");






/* Creates a login form and stores a value with name of the user if the user is authenticated*/
var LoginFormComponent = /** @class */ (function () {
    /* ctor with a private instance of the router for navigation */
    function LoginFormComponent(router, networkRequestService, localStorageService) {
        this.router = router;
        this.networkRequestService = networkRequestService;
        this.localStorageService = localStorageService;
        this.url = "assets/files/users.json";
    }
    /* Creates a form with username and password controls at the time of initialization */
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkRequestService.fetchData(this.url).subscribe(function (observer) {
            _this.users = observer['users'];
        });
        this.createForm();
    };
    /* Creates a form group with username and password fields. Both username and password are required fields */
    LoginFormComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /* Called when a user has entered username and password.
    * if the user is authenticated, saves the value in the local storage and
    * navigate to home page of the application
    */
    LoginFormComponent.prototype.login = function () {
        var username = this.loginForm.get('username').value;
        var password = this.loginForm.get('password').value;
        var userAuthenticated = this.checkIfUserAuthenticated(username, password);
        if (userAuthenticated) {
            this.localStorageService.storeInLocalStorage("authenticated", username);
            this.router.navigateByUrl('/onboard');
        }
    };
    /* Checks if the user is authenticated
    * @param:   username    username entered by the user
    * @param:   password    password entered by the user
    * return:   boolean     true in case user is authenticated
    */
    LoginFormComponent.prototype.checkIfUserAuthenticated = function (username, password) {
        var response = false;
        this.users.forEach(function (user) {
            if (user.username == username && user.password == password) {
                response = true;
            }
        });
        return response;
    };
    /* Resets the fields on the login form */
    LoginFormComponent.prototype.reset = function () {
        this.loginForm.reset({ 'username': '', 'password': '' });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/modules/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/modules/login/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_4__["NetworkRequestService"],
            _shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/modules/login/login-form/login-form.component.ts");
/* harmony import */ var _login_form_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form-routing.module */ "./src/app/modules/login/login-form-routing.module.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _login_form_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginFormRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Displays footer for the application */\nfooter{\n    background-color: dimgrey;\n    color: white;\n    text-align: center;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    font-size: 18px;\n    padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4QztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEaXNwbGF5cyBmb290ZXIgZm9yIHRoZSBhcHBsaWNhdGlvbiAqL1xuZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- displays the name of the author as footer -->\n<footer class=\"page-footer font-small pt-4\">\n  <p>&#169; 2019 - DEEPIKA</p>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* Displays footer for the application with the name of the author */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\n    background-color:white;\n}\n\na {\n    float: left;\n    text-align: center;\n    padding: 1%;\n    text-decoration: none;\n}\n\nimg{\n    width:32px;\n}\n\n.example-fill-remaining-space {\n    flex: 1 1 auto;\n}\n\n.icon {\n    padding: 0 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG5hIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMSU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6MzJweDtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaWNvbiB7XG4gICAgcGFkZGluZzogMCAxJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Displays the icon and name of the user -->\n<mat-toolbar>\n  <mat-toolbar-row>\n    <a mat-stroked-button matTooltip=\"Home\" class=\"navbar-brand\" href=\"/onboard\">\n      <img src=\"assets/images/backpack.jpg\" alt=\"Logo\" >\n    </a>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span mat-color=\"{color:'primary'}\">{{username}}</span>\n\n\n    <button mat-button [matMenuTriggerFor]=\"menu\" mat-mini-fab matTooltip=\"Account Info\" style=\"margin-left:1%\">\n        <mat-icon color=\"primary\" class=\"icon\" aria-hidden=\"false\" aria-label=\"user account circle\">\n            account_circle\n          </mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\"> \n      <a mat-menu-item style=\"width: 100%;\" (click)=\"logout()\"> Logout</a>\n    </mat-menu>\n\n    \n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/local-storage/local-storage.service */ "./src/app/shared/services/local-storage/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




/* Displays heafder for the application with the name stored in the local storage when the user logs in */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
    }
    /*
    method is used to diplay the name of the user at the time of initialization in the header which was set in local storage while the user logs in
    @param:
    @return:
    */
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem("authenticated");
    };
    /* Logs out the user by removing the username from the local storage */
    HeaderComponent.prototype.logout = function () {
        this.localStorageService.removeFromLocalStorage("authenticated");
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/images/PageNotFound.png\" style=\"width:100%;\">"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication/authentication.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/authentication/authentication.service.ts ***!
  \**************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* Authenticates the user on the basis of value in local storage */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    /*
    Resturns a boolean value representing if the user has been authenticated on the basis of value in local storage
    @param:
    @return: boolean value indicating if the user is authenticated
    */
    AuthenticationService.prototype.isAuthenticated = function () {
        var isAuthenticated = localStorage.getItem("authenticated");
        if (isAuthenticated) {
            return true;
        }
        return false;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-storage/local-storage.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/local-storage/local-storage.service.ts ***!
  \************************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* Performs operations on the local storage */
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /* Retreives the data from the local storage with the given key
    * @param:   key       Key for the local storage
    * @return:  string    String value retrived from the local storage
    */
    LocalStorageService.prototype.fetchDataFromLocalStorage = function (key) {
        return localStorage.getItem(key);
    };
    /* Stores the data with the respective key in the local storage
    * @param:   key       Key for the local storage
    * @param:   value     Value to be stored in the local storage against the key
    * @return:  string    String value retrived from the local storage
    */
    LocalStorageService.prototype.storeInLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    /* Deletes the data from the local storage with the given key
    * @paarm:   key       Key for the local storage
    */
    LocalStorageService.prototype.removeFromLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/network-request/network-request.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/network-request/network-request.service.ts ***!
  \****************************************************************************/
/*! exports provided: NetworkRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkRequestService", function() { return NetworkRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



/* Performs operations on the network */
var NetworkRequestService = /** @class */ (function () {
    function NetworkRequestService(httpClient) {
        this.httpClient = httpClient;
    }
    /* Fetch the data from the given url and returns an observable for that value
    * @param:    fromUrl           Url from which data needs to be fetched
    * @return    Observable<any>   Observable of type any
    */
    NetworkRequestService.prototype.fetchData = function (fromUrl) {
        return this.httpClient.get(fromUrl);
    };
    NetworkRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NetworkRequestService);
    return NetworkRequestService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/local-storage/local-storage.service */ "./src/app/shared/services/local-storage/local-storage.service.ts");
/* harmony import */ var _services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/network-request/network-request.service */ "./src/app/shared/services/network-request/network-request.service.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../material/material.module */ "./src/app/material/material.module.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
            ],
            providers: [
                _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
                _services_network_request_network_request_service__WEBPACK_IMPORTED_MODULE_8__["NetworkRequestService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deepika/Documents/NAGP/angular/StudentOnboardingWebApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map