(self["webpackChunkperfect_project"] = self["webpackChunkperfect_project"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    { path: '', redirectTo: '/topTrendingMedias', pathMatch: 'full' },
    { path: 'userList', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/user-list/user-list.module */ 66946)).then(m => m.UserListModule) },
    { path: 'topTrendingMedias', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home-page/home-page.module */ 23463)).then(m => m.HomePageModule) },
    {
        path: 'mediaResearch',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/media-research-page/media-research-page.module */ 99913)).then(m => m.MediaResearchPageModule),
    },
    { path: '**', redirectTo: 'topTrendingMedias' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 33252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



class AppComponent {
    constructor() {
        this.title = 'perfect-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _modules_user_list_user_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user-list/user-list.module */ 66946);
/* harmony import */ var _modules_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home-page/home-page.module */ 23463);
/* harmony import */ var _modules_media_research_page_media_research_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/media-research-page/media-research-page.module */ 99913);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/angular-ivy */ 47885);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/angular-ivy */ 97044);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 33252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);















_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_6__.init({
    dsn: "https://efbab6022aa575e103a01fcb9754b3c2@o28215.ingest.sentry.io/4505639759052800",
    integrations: [
        // Registers and configures the Tracing integration,
        // which automatically instruments your application to monitor its
        // performance, including custom Angular routing instrumentation
        new _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_7__.BrowserTracing({
            routingInstrumentation: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_6__.routingInstrumentation,
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/pierrebonny.github.io\/perfect-project/],
});
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_6__.TraceService,
            deps: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router],
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.APP_INITIALIZER,
            useFactory: () => () => { },
            deps: [_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_6__.TraceService],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_user_list_user_list_module__WEBPACK_IMPORTED_MODULE_2__.UserListModule,
            _modules_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_3__.HomePageModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _modules_media_research_page_media_research_page_module__WEBPACK_IMPORTED_MODULE_4__.MediaResearchPageModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _modules_user_list_user_list_module__WEBPACK_IMPORTED_MODULE_2__.UserListModule,
        _modules_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_3__.HomePageModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _modules_media_research_page_media_research_page_module__WEBPACK_IMPORTED_MODULE_4__.MediaResearchPageModule] }); })();


/***/ }),

/***/ 55113:
/*!***************************************************!*\
  !*** ./src/app/components/hook/hook.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HookComponent": function() { return /* binding */ HookComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tmdb/tmdb.service */ 20885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-buttons/list-buttons.component */ 82858);
/* harmony import */ var _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/tmdb-date/tmdb-date.pipe */ 50238);
/* harmony import */ var _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/tmdb-img-path/tmdb-img-path.pipe */ 42073);






function HookComponent_ng_container_1_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "tmdbImgPath");
} if (rf & 2) {
    const currentMedia_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, currentMedia_r1.backdrop_path), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function HookComponent_ng_container_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HookComponent_ng_container_1_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HookComponent_ng_container_1_ng_container_1_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HookComponent_ng_container_1_ng_container_1_ng_container_27_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function HookComponent_ng_container_1_ng_container_1_ng_container_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HookComponent_ng_container_1_ng_container_1_ng_container_27_span_1_ng_container_2_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actorName_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](actorName_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r15);
} }
function HookComponent_ng_container_1_ng_container_1_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HookComponent_ng_container_1_ng_container_1_ng_container_27_span_1_Template, 3, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const actorsNames_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", actorsNames_r12);
} }
function HookComponent_ng_container_1_ng_container_1_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-list-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currentMedia_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngIf;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mediaType", ctx_r10.mediaType)("currentMedia", currentMedia_r1);
} }
function HookComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HookComponent_ng_container_1_ng_container_1_img_1_Template, 2, 3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HookComponent_ng_container_1_ng_container_1_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HookComponent_ng_container_1_ng_container_1_ng_template_4_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "tmdbDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](19, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, HookComponent_ng_container_1_ng_container_1_span_22_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](26, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, HookComponent_ng_container_1_ng_container_1_ng_container_27_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, HookComponent_ng_container_1_ng_container_1_ng_container_28_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currentMediaCredits_r3 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const currentMedia_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", currentMedia_r1.backdrop_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.mediaType === "movie")("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((currentMedia_r1.title ? currentMedia_r1.title : currentMedia_r1.name).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](currentMedia_r1.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](currentMedia_r1.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 12, currentMedia_r1.release_date ? currentMedia_r1.release_date : currentMedia_r1.first_air_date, "YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", currentMedia_r1.runtime ? currentMedia_r1.runtime : currentMedia_r1.episode_run_time, " minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", currentMediaCredits_r3.directorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", currentMediaCredits_r3.directorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", currentMediaCredits_r3.actorsNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", currentMedia_r1);
} }
function HookComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HookComponent_ng_container_1_ng_container_1_Template, 29, 15, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.currentMediaCredits$));
} }
class HookComponent {
    constructor(tmdbService) {
        this.tmdbService = tmdbService;
    }
    ngOnChanges(changes) {
        if (!changes.topMedia) {
            return;
        }
        this.updateComponent();
    }
    updateComponent() {
        this.currentMedia$ = this.tmdbService.getMediaById(this.topMedia.id, this.mediaType);
        this.currentMediaCredits$ = this.tmdbService.getMediaBestCredits(this.topMedia.id, this.mediaType);
    }
}
HookComponent.ɵfac = function HookComponent_Factory(t) { return new (t || HookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_0__.TmdbService)); };
HookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HookComponent, selectors: [["app-hook"]], inputs: { topMedia: "topMedia", mediaType: "mediaType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_release_date$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___1 = goog.getMsg("Released on:");
        i18n_0 = MSG_EXTERNAL_hook_release_date$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `:@@hook.release-date␟27f7eb9e82f1a1897e44e8159229f9ce941d3b21␟3884180920484007123:Released on:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_duration$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___3 = goog.getMsg("Duration:");
        i18n_2 = MSG_EXTERNAL_hook_duration$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `:@@hook.duration␟e17a1d75189da843f541f7764f188f2b19a97df2␟4220765745195024064:Duration:`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_with$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___5 = goog.getMsg("With:");
        i18n_4 = MSG_EXTERNAL_hook_with$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize `:@@hook.with␟4ce0e94f7b214cab0ab3144cd8155d8dd1a5283a␟1966022227627809820:With:`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_movies$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____7 = goog.getMsg("MOVIES");
        i18n_6 = MSG_EXTERNAL_hook_movies$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____7;
    }
    else {
        i18n_6 = $localize `:@@hook.movies␟898fb6036cc5d15cc3b9fd81bf96d7437ab4e5de␟4914959751167092307:MOVIES`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_tv$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____9 = goog.getMsg("TV SHOWS");
        i18n_8 = MSG_EXTERNAL_hook_tv$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____9;
    }
    else {
        i18n_8 = $localize `:@@hook.tv␟b6a91027b82cbfb20aeff4e486c45b5d810c0cd7␟1345528848662541413:TV SHOWS`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_directorName$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____11 = goog.getMsg("Directed by:");
        i18n_10 = MSG_EXTERNAL_hook_directorName$$SRC_APP_COMPONENTS_HOOK_HOOK_COMPONENT_TS____11;
    }
    else {
        i18n_10 = $localize `:@@hook.directorName␟85f8c4c503b67f37f9354abcd342e4520c818e4a␟3097125217493878008:Directed by:`;
    } return [[1, "hook"], [4, "ngIf"], ["class", "hook__backdrop", 3, "src", 4, "ngIf"], [1, "hook__media-view"], ["class", "hook__media-type", 4, "ngIf", "ngIfElse"], ["tvLabel", ""], [1, "hook__title"], [1, "hook__popularity"], [1, "hook__overview"], [1, "hook__release-date"], [1, "hook__info-label"], i18n_0, [1, "hook__duration"], i18n_2, [1, "hook__director-name"], ["class", "hook__info-label", 4, "ngIf"], [1, "hook__cast"], i18n_4, [1, "hook__backdrop", 3, "src"], [1, "hook__media-type"], i18n_6, i18n_8, i18n_10, ["class", "hook__actor", 4, "ngFor", "ngForOf"], [1, "hook__actor"], [1, "hook__actions", 3, "mediaType", "currentMedia"]]; }, template: function HookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HookComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.currentMedia$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ListButtonsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_2__.TmdbDatePipe, _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_3__.TmdbImgPathPipe], styles: [".hook_media-view[_ngcontent-%COMP%]   .actor-name-div[_ngcontent-%COMP%]   .actor-name-comma[_ngcontent-%COMP%], .hook_media-view[_ngcontent-%COMP%]   .with[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.hook_media-view[_ngcontent-%COMP%]   .with[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.hook_media-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hook_media-view[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtBQUZKIiwiZmlsZSI6Imhvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9va19tZWRpYS12aWV3IHtcbiAgLmFjdG9yLW5hbWUtZGl2IC5hY3Rvci1uYW1lLWNvbW1hLFxuICAud2l0aCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAud2l0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBwLCBoMSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 32580:
/*!*****************************************************************!*\
  !*** ./src/app/components/list-button/list-button.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListButtonComponent": function() { return /* binding */ ListButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);



class ListButtonComponent {
    constructor() {
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onButtonClick($event) {
        $event.stopPropagation();
        this.buttonClicked.emit(this.listName);
    }
}
ListButtonComponent.ɵfac = function ListButtonComponent_Factory(t) { return new (t || ListButtonComponent)(); };
ListButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListButtonComponent, selectors: [["app-list-button"]], inputs: { label: "label", listName: "listName", mediaId: "mediaId", isSelected: "isSelected" }, outputs: { buttonClicked: "buttonClicked" }, decls: 3, vars: 4, consts: [[1, "list-button__list-item"], ["type", "button", 3, "ngClass", "click"]], template: function ListButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListButtonComponent_Template_button_click_1_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("list-button__button " + "list-button__button--" + (ctx.isSelected ? "already-added" : "not-added"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.listName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82858:
/*!*******************************************************************!*\
  !*** ./src/app/components/list-buttons/list-buttons.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListButtonsComponent": function() { return /* binding */ ListButtonsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8117);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_localstorage_localStorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/localstorage/localStorage.service */ 72481);
/* harmony import */ var _list_button_list_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-button/list-button.component */ 32580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);






class ListButtonsComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
        // Setting buttons state depending on localstorage lists
        this.seen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.localStorageService.isInList('seen', this.currentMedia.id)), this.localStorageService.localStorageNotifier.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((value) => {
            return this.updateButtonsState('seen', value);
        })));
        this.mustSee$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.localStorageService.isInList('mustSee', this.currentMedia.id)), this.localStorageService.localStorageNotifier.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((value) => {
            return this.updateButtonsState('mustSee', value);
        })));
    }
    updateButtonsState(buttonListName, event) {
        if (event.id !== this.currentMedia.id || event.listName !== buttonListName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event.isAdding);
    }
    /**
     * Adding or removing current media id to selected list into localstorage
     * Changing other button state if needed
     */
    updateList(type) {
        // updating button status
        this[type] = !this[type];
        // getting list from local storage
        let list = this.localStorageService.getList(type);
        const otherType = type === 'seen' ? 'mustSee' : 'seen';
        if (!list) {
            list = [];
        }
        if (list.find(media => media.id === this.currentMedia.id) !== undefined) {
            this.localStorageService.removeItem(type, this.currentMedia);
            return;
        }
        else {
            this.currentMedia.media_type = this.mediaType;
            this.localStorageService.addItem(type, this.currentMedia);
            this[otherType] = false;
            this.localStorageService.removeItem(otherType, this.currentMedia);
        }
    }
}
ListButtonsComponent.ɵfac = function ListButtonsComponent_Factory(t) { return new (t || ListButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_localstorage_localStorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
ListButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListButtonsComponent, selectors: [["app-list-buttons"]], inputs: { currentMedia: "currentMedia", mediaType: "mediaType" }, decls: 5, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_list_buttons_ever_seen$$SRC_APP_COMPONENTS_LIST_BUTTONS_LIST_BUTTONS_COMPONENT_TS_1 = goog.getMsg("Ever seen");
        i18n_0 = MSG_EXTERNAL_list_buttons_ever_seen$$SRC_APP_COMPONENTS_LIST_BUTTONS_LIST_BUTTONS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@list-buttons.ever-seen␟ff20121494a458fd59c86f9628c8e56e98f43c47␟8207030487770111450:Ever seen`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_list_buttons_to_see$$SRC_APP_COMPONENTS_LIST_BUTTONS_LIST_BUTTONS_COMPONENT_TS_3 = goog.getMsg("To see");
        i18n_2 = MSG_EXTERNAL_list_buttons_to_see$$SRC_APP_COMPONENTS_LIST_BUTTONS_LIST_BUTTONS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@list-buttons.to-see␟ac6c5089be213fef8e60fe10b290308bc0697bc8␟1022285616003268873:To see`;
    } return [[1, "list-buttons__buttons"], ["label", i18n_0, "listName", "seen", 1, "list-buttons__button-component", 3, "mediaId", "isSelected", "buttonClicked"], ["label", i18n_2, "listName", "mustSee", 1, "list-buttons__button-component", 3, "mediaId", "isSelected", "buttonClicked"]]; }, template: function ListButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-list-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClicked", function ListButtonsComponent_Template_app_list_button_buttonClicked_1_listener($event) { return ctx.updateList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-list-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClicked", function ListButtonsComponent_Template_app_list_button_buttonClicked_3_listener($event) { return ctx.updateList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mediaId", ctx.currentMedia.id)("isSelected", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx.seen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mediaId", ctx.currentMedia.id)("isSelected", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, ctx.mustSee$));
    } }, directives: [_list_button_list_button_component__WEBPACK_IMPORTED_MODULE_1__.ListButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 58806:
/*!***************************************************************************!*\
  !*** ./src/app/components/main-page-layout/main-page-layout.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageLayoutComponent": function() { return /* binding */ MainPageLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination/pagination.component */ 88601);
/* harmony import */ var _media_grid_media_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-grid/media-grid.component */ 92500);





const _c0 = ["paginator"];
function MainPageLayoutComponent_ng_container_6_app_media_grid_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-media-grid", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mediasList", ctx_r2.mediasList)("mediasType", ctx_r2.mediasType);
} }
function MainPageLayoutComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainPageLayoutComponent_ng_container_6_app_media_grid_1_Template, 1, 2, "app-media-grid", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.mediasList && ctx_r0.mediasList.length);
} }
const _c1 = [[["", "media-type-selection", ""]], [["", "search-bar", ""]], [["", "hook", ""]], [["", "results-count", ""]]];
const _c2 = ["[media-type-selection]", "[search-bar]", "[hook]", "[results-count]"];
class MainPageLayoutComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    changePage(pageIndex) {
        this.pageChanged.emit(pageIndex);
    }
    reset() {
        this.paginator.reset();
    }
}
MainPageLayoutComponent.ɵfac = function MainPageLayoutComponent_Factory(t) { return new (t || MainPageLayoutComponent)(); };
MainPageLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainPageLayoutComponent, selectors: [["app-main-page-layout"]], viewQuery: function MainPageLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { mediasList: "mediasList", totalPages: "totalPages", mediasType: "mediasType", additionalClass: "additionalClass" }, outputs: { pageChanged: "pageChanged" }, ngContentSelectors: _c2, decls: 9, vars: 4, consts: [[1, "layout"], [1, "layout__medias-list", 3, "ngClass"], [4, "ngIf"], [3, "totalPages", "currentPageIndex", "pageChanged"], ["paginator", ""], [3, "mediasList", "mediasType", 4, "ngIf"], [3, "mediasList", "mediasType"]], template: function MainPageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MainPageLayoutComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-pagination", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChanged", function MainPageLayoutComponent_Template_app_pagination_pageChanged_7_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.additionalClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mediasList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("totalPages", ctx.totalPages)("currentPageIndex", 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent, _media_grid_media_grid_component__WEBPACK_IMPORTED_MODULE_1__.MediaGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 78834:
/*!***********************************************************************************!*\
  !*** ./src/app/components/media-details-dialog/media-details-dialog.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaDetailsDialogComponent": function() { return /* binding */ MediaDetailsDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ 20885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-buttons/list-buttons.component */ 82858);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/tmdb-date/tmdb-date.pipe */ 50238);
/* harmony import */ var _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/tmdb-img-path/tmdb-img-path.pipe */ 42073);









function MediaDetailsDialogComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "tmdbImgPath");
} if (rf & 2) {
    const mediaDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, mediaDetails_r1.backdrop_path), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsDialogComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "tmdbImgPath");
} if (rf & 2) {
    const mediaDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, mediaDetails_r1.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsDialogComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediaDetailsDialogComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediaDetailsDialogComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediaDetailsDialogComponent_div_0_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediaDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mediaDetails_r1.vote_average);
} }
function MediaDetailsDialogComponent_div_0_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediaBestCredits_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mediaBestCredits_r15.directorName, " ");
} }
function MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_span_1_ng_container_2_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actorName_r21 = ctx.$implicit;
    const last_r22 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](actorName_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r22);
} }
function MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_span_1_Template, 3, 2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const actorsNames_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", actorsNames_r19);
} }
function MediaDetailsDialogComponent_div_0_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MediaDetailsDialogComponent_div_0_ng_container_21_div_1_Template, 4, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](4, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MediaDetailsDialogComponent_div_0_ng_container_21_ng_container_5_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const mediaBestCredits_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaBestCredits_r15.directorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaBestCredits_r15.actorsNames);
} }
function MediaDetailsDialogComponent_div_0_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediaDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mediaDetails_r1.overview);
} }
function MediaDetailsDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MediaDetailsDialogComponent_div_0_img_1_Template, 2, 3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MediaDetailsDialogComponent_div_0_img_2_Template, 2, 3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MediaDetailsDialogComponent_div_0_ng_template_3_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MediaDetailsDialogComponent_div_0_div_6_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MediaDetailsDialogComponent_div_0_ng_template_7_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MediaDetailsDialogComponent_div_0_p_11_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "tmdbDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](19, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MediaDetailsDialogComponent_div_0_ng_container_21_Template, 6, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, MediaDetailsDialogComponent_div_0_p_23_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-list-buttons", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MediaDetailsDialogComponent_div_0_Template_mat_icon_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediaDetails_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaDetails_r1.backdrop_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaDetails_r1.poster_path)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mediaType === "movie")("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((mediaDetails_r1.title ? mediaDetails_r1.title : mediaDetails_r1.name).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaDetails_r1.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 13, mediaDetails_r1.release_date ? mediaDetails_r1.release_date : mediaDetails_r1.first_air_date, "YYYY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mediaDetails_r1.runtime ? mediaDetails_r1.runtime : mediaDetails_r1.episode_run_time, " minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 16, ctx_r0.mediaBestCredits$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mediaDetails_r1.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mediaType", ctx_r0.mediaType)("currentMedia", mediaDetails_r1);
} }
class MediaDetailsDialogComponent {
    constructor(tmdbService, dialogRef, data) {
        this.tmdbService = tmdbService;
        this.dialogRef = dialogRef;
        // getting media details from previous component (media component)
        const mediaId = data.mediaId;
        this.mediaType = data.mediaType;
        /**
         * Recovering important cast and crew from TMDB
         */
        this.mediaBestCredits$ = this.tmdbService.getMediaBestCredits(mediaId, this.mediaType);
        // getting media 10 best actors and director's name
        this.mediaDetails$ = this.tmdbService.getMediaById(mediaId, this.mediaType);
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
MediaDetailsDialogComponent.ɵfac = function MediaDetailsDialogComponent_Factory(t) { return new (t || MediaDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_0__.TmdbService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
MediaDetailsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MediaDetailsDialogComponent, selectors: [["app-media-details-dialog"]], decls: 2, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_details_release_date$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS__1 = goog.getMsg("Released on:");
        i18n_0 = MSG_EXTERNAL_media_details_release_date$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@media-details.release-date␟27f7eb9e82f1a1897e44e8159229f9ce941d3b21␟3884180920484007123:Released on:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_details_duration$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS__3 = goog.getMsg("Duration:");
        i18n_2 = MSG_EXTERNAL_media_details_duration$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@media-details.duration␟e17a1d75189da843f541f7764f188f2b19a97df2␟4220765745195024064:Duration:`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_details_movies$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___5 = goog.getMsg("MOVIES");
        i18n_4 = MSG_EXTERNAL_media_details_movies$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize `:@@media-details.movies␟898fb6036cc5d15cc3b9fd81bf96d7437ab4e5de␟4914959751167092307:MOVIES`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_details_tv$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___7 = goog.getMsg("TV SHOWS");
        i18n_6 = MSG_EXTERNAL_media_details_tv$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:@@media-details.tv␟b6a91027b82cbfb20aeff4e486c45b5d810c0cd7␟1345528848662541413:TV SHOWS`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_with$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___9 = goog.getMsg("With:");
        i18n_8 = MSG_EXTERNAL_hook_with$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize `:@@hook.with␟4ce0e94f7b214cab0ab3144cd8155d8dd1a5283a␟1966022227627809820:With:`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_hook_directorName$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS____11 = goog.getMsg("Directed by:");
        i18n_10 = MSG_EXTERNAL_hook_directorName$$SRC_APP_COMPONENTS_MEDIA_DETAILS_DIALOG_MEDIA_DETAILS_DIALOG_COMPONENT_TS____11;
    }
    else {
        i18n_10 = $localize `:@@hook.directorName␟85f8c4c503b67f37f9354abcd342e4520c818e4a␟3097125217493878008:Directed by:`;
    } return [["class", "media-details", 4, "ngIf"], [1, "media-details"], ["class", "media-details__backdrop", 3, "src", 4, "ngIf"], ["class", "media-details__poster", "alt", "Media poster", 3, "src", 4, "ngIf", "ngIfElse"], ["warningTemplate", ""], [1, "media-details__infos"], ["class", "media-details__type", 4, "ngIf", "ngIfElse"], ["tvLabel", ""], [1, "media-details__title"], ["class", "media-details__popularity", 4, "ngIf"], [1, "media-details__release-date"], i18n_0, [1, "media-details__duration"], i18n_2, [4, "ngIf"], ["class", "media-details__overview", 4, "ngIf"], [1, "media-details__buttons", 3, "mediaType", "currentMedia"], [1, "media-details__close-icon", 3, "click"], [1, "media-details__backdrop", 3, "src"], ["alt", "Media poster", 1, "media-details__poster", 3, "src"], [1, "media-details__poster-placeholder"], ["src", "./../../../assets/Icon-emptyposter.svg", 1, "media-details__poster-placeholder-img"], [1, "media-details__type"], i18n_4, i18n_6, [1, "media-details__popularity"], ["class", "media-details__director-name", 4, "ngIf"], [1, "media-details__cast"], [1, "media-details__info-label"], i18n_8, [1, "media-details__director-name"], i18n_10, ["class", "media-details__actor", 4, "ngFor", "ngForOf"], [1, "media-details__actor"], [1, "media-details__overview"]]; }, template: function MediaDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MediaDetailsDialogComponent_div_0_Template, 27, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.mediaDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ListButtonsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_2__.TmdbDatePipe, _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_3__.TmdbImgPathPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92500:
/*!***************************************************************!*\
  !*** ./src/app/components/media-grid/media-grid.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaGridComponent": function() { return /* binding */ MediaGridComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ 85937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/media.component */ 34423);





function MediaGridComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-media", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentMedia", media_r1)("mediaType", ctx_r0.mediasType);
} }
class MediaGridComponent {
}
MediaGridComponent.ɵfac = function MediaGridComponent_Factory(t) { return new (t || MediaGridComponent)(); };
MediaGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MediaGridComponent, selectors: [["app-media-grid"]], inputs: { mediasList: "mediasList", mediasType: "mediasType" }, decls: 2, vars: 1, consts: [["gutterSize", "21px", "cols", "3", "rowHeight", "310px"], [4, "ngFor", "ngForOf"], [1, "media-grid__card"], [1, "media-grid__media", 3, "currentMedia", "mediaType"]], template: function MediaGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MediaGridComponent_mat_grid_tile_1_Template, 3, 2, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mediasList);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 48141:
/*!***********************************************************************************!*\
  !*** ./src/app/components/media-type-selection/media-type-selection.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaTypeSelectionComponent": function() { return /* binding */ MediaTypeSelectionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);



class MediaTypeSelectionComponent {
    constructor() {
        this.mediaChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.mediasType = 'movie';
    }
    mediaChange(type) {
        this.mediaChanged.emit(type);
        this.mediasType = type;
        // TODO this.reset();
    }
}
MediaTypeSelectionComponent.ɵfac = function MediaTypeSelectionComponent_Factory(t) { return new (t || MediaTypeSelectionComponent)(); };
MediaTypeSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaTypeSelectionComponent, selectors: [["app-media-type-selection"]], inputs: { additionalClass: "additionalClass" }, outputs: { mediaChanged: "mediaChanged" }, decls: 5, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_main_page_layout_movies$$SRC_APP_COMPONENTS_MEDIA_TYPE_SELECTION_MEDIA_TYPE_SELECTION_COMPONENT_TS_1 = goog.getMsg("Movies");
        i18n_0 = MSG_EXTERNAL_main_page_layout_movies$$SRC_APP_COMPONENTS_MEDIA_TYPE_SELECTION_MEDIA_TYPE_SELECTION_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@main-page-layout.movies␟f3cf8c938d96b18e76d3be07feffb2d57dedc37f␟8436385934277401930:Movies`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_main_page_layout_tv$$SRC_APP_COMPONENTS_MEDIA_TYPE_SELECTION_MEDIA_TYPE_SELECTION_COMPONENT_TS_3 = goog.getMsg("TV Shows");
        i18n_2 = MSG_EXTERNAL_main_page_layout_tv$$SRC_APP_COMPONENTS_MEDIA_TYPE_SELECTION_MEDIA_TYPE_SELECTION_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@main-page-layout.tv␟9ebef909f7fd0150e5c4a47b73361e89ed644706␟2325815383560299041:TV Shows`;
    } return [[1, "media-type-selection", 3, "ngClass"], [1, "media-type-selection__button", 3, "ngClass", "click"], i18n_0, i18n_2]; }, template: function MediaTypeSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaTypeSelectionComponent_Template_button_click_1_listener() { return ctx.mediaChange("movie"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaTypeSelectionComponent_Template_button_click_3_listener() { return ctx.mediaChange("tv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.additionalClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mediasType === "movie" ? "on" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mediasType === "tv" ? "on" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS10eXBlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 34423:
/*!*****************************************************!*\
  !*** ./src/app/components/media/media.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaComponent": function() { return /* binding */ MediaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _media_details_dialog_media_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media-details-dialog/media-details-dialog.component */ 78834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ 20885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-buttons/list-buttons.component */ 82858);
/* harmony import */ var _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/tmdb-date/tmdb-date.pipe */ 50238);
/* harmony import */ var _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/tmdb-img-path/tmdb-img-path.pipe */ 42073);









function MediaComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "tmdbImgPath");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r0.currentMedia.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function MediaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MediaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MediaComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MediaComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.currentMedia.overview);
} }
class MediaComponent {
    constructor(dialog, tmdbService) {
        this.dialog = dialog;
        this.tmdbService = tmdbService;
    }
    /**
     * open new dialog with media cast, crew and overview
     */
    openDetailsDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.width = '80%';
        dialogConfig.data = {
            mediaType: this.mediaType,
            mediaId: this.currentMedia.id,
        };
        this.dialog.open(_media_details_dialog_media_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MediaDetailsDialogComponent, dialogConfig);
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__.TmdbService)); };
MediaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], inputs: { currentMedia: "currentMedia", mediaType: "mediaType" }, decls: 20, vars: 13, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_release_date$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS_1 = goog.getMsg("Released on");
        i18n_0 = MSG_EXTERNAL_media_release_date$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@media.release-date␟cbacb73c587798aac1195f44c1fd4b2c79506fdc␟2763801974650882380:Released on`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_details_link$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS_3 = goog.getMsg("See more");
        i18n_2 = MSG_EXTERNAL_media_details_link$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@media.details-link␟96aa4deebf8536ae05e5f6dc8b0bdb23ec91c4b7␟4462165726005928867:See more`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_movies$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS__5 = goog.getMsg("MOVIES");
        i18n_4 = MSG_EXTERNAL_media_movies$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:@@media.movies␟898fb6036cc5d15cc3b9fd81bf96d7437ab4e5de␟4914959751167092307:MOVIES`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_tv$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS__7 = goog.getMsg("TV SHOWS");
        i18n_6 = MSG_EXTERNAL_media_tv$$SRC_APP_COMPONENTS_MEDIA_MEDIA_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:@@media.tv␟b6a91027b82cbfb20aeff4e486c45b5d810c0cd7␟1345528848662541413:TV SHOWS`;
    } return [[1, "media__vote"], ["class", "media__poster", "alt", "Media poster", 3, "src", 4, "ngIf", "ngIfElse"], ["warningTemplate", ""], [1, "media__infos"], ["class", "media__type", 4, "ngIf", "ngIfElse"], ["tvLabel", ""], [1, "media__title"], [1, "media__release-date"], i18n_0, ["class", "media__overview", 4, "ngIf"], [1, "media__details-link", 3, "click"], i18n_2, [1, "media__buttons", 3, "mediaType", "currentMedia"], ["alt", "Media poster", 1, "media__poster", 3, "src"], [1, "media__poster-placeholder"], ["src", "./../../../assets/Icon-emptyposter.svg", 1, "media__poster-placeholder-img"], [1, "media__type"], i18n_4, i18n_6, [1, "media__overview"]]; }, template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MediaComponent_img_2_Template, 2, 3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MediaComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, MediaComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MediaComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "tmdbDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MediaComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MediaComponent_Template_a_click_17_listener() { return ctx.openDetailsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-list-buttons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentMedia.vote_average ? ctx.currentMedia.vote_average : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentMedia.poster_path)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mediaType === "movie")("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.currentMedia.title ? ctx.currentMedia.title : ctx.currentMedia.name).toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 10, ctx.currentMedia.release_date ? ctx.currentMedia.release_date : ctx.currentMedia.first_air_date, "YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentMedia.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mediaType", ctx.mediaType)("currentMedia", ctx.currentMedia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ListButtonsComponent], pipes: [_pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_3__.TmdbDatePipe, _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_4__.TmdbImgPathPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 9348);



class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.avalaibleRoutes = ['topTrendingMedias', 'mediaResearch', 'userList/seenMedias', 'userList/mustSeeMedias'];
    }
    ngOnInit() {
        switch (window.location.pathname) {
            case '/mediaResearch':
                this.currentTabIndex = 1;
                break;
            case '/userList/seenMedias':
                this.currentTabIndex = 2;
                break;
            case '/userList/mustSeeMedias':
                this.currentTabIndex = 3;
                break;
            default:
                this.currentTabIndex = 0;
        }
    }
    changePage(event) {
        this.router.navigate([this.avalaibleRoutes[event.index]]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_navbar_top_trending$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_1 = goog.getMsg("Top Trending");
        i18n_0 = MSG_EXTERNAL_navbar_top_trending$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@navbar.top-trending␟1b4e0136470d82dbc2a57750f901033c4782dd2f␟3817410549401858463:Top Trending`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_navbar_search$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_3 = goog.getMsg("Search");
        i18n_2 = MSG_EXTERNAL_navbar_search$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@navbar.search␟7e892ba15f2c6c17e83510e273b3e10fc32ea016␟4580988005648117665:Search`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_navbar_ever_seen$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_5 = goog.getMsg("Ever seen");
        i18n_4 = MSG_EXTERNAL_navbar_ever_seen$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:@@navbar.ever-seen␟ff20121494a458fd59c86f9628c8e56e98f43c47␟8207030487770111450:Ever seen`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_navbar_to_see$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_7 = goog.getMsg("To see");
        i18n_6 = MSG_EXTERNAL_navbar_to_see$$SRC_APP_COMPONENTS_NAVBAR_NAVBAR_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:@@navbar.to-see␟ac6c5089be213fef8e60fe10b290308bc0697bc8␟1022285616003268873:To see`;
    } return [[1, "navbar"], [1, "navbar__title"], [3, "selectedIndex", "selectedTabChange"], ["label", i18n_0], ["label", i18n_2], ["label", i18n_4], ["label", i18n_6]]; }, template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PERFECTRENDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function NavbarComponent_Template_mat_tab_group_selectedTabChange_3_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.currentTabIndex);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 88601:
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": function() { return /* binding */ PaginationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);



function PaginationComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_div_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_ng_container_5_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const pageIndex_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.changePage(pageIndex_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageIndex_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pagination__page " + (pageIndex_r6 === ctx_r5.currentPageIndex ? "active" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageIndex_r6, " ");
} }
function PaginationComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_div_0_ng_container_5_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.displayedPagesIndex);
} }
function PaginationComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.changePage(ctx_r9.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pagination__page " + (ctx_r4.currentPageIndex === ctx_r4.totalPages ? "active" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.totalPages);
} }
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changePage(ctx_r11.currentPageIndex - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changePage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_div_0_div_4_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_div_0_div_6_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginationComponent_div_0_div_7_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changePage(ctx_r14.currentPageIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pagination__page " + (ctx_r0.currentPageIndex === 1 ? "active" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalPages > 2 && ctx_r0.currentPageIndex > 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalPages > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalPages > 6 && ctx_r0.currentPageIndex < ctx_r0.totalPages - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalPages > 1);
} }
class PaginationComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (!changes.totalPages) {
            return;
        }
        if (changes.pageIndex && this.currentPageIndex < 0) {
            this.currentPageIndex = 0;
        }
        this.totalPages = changes.totalPages.currentValue;
        this.pagesIndex = new Array(this.totalPages).fill(1).map((x, i) => i + 1);
        this.displayedPagesIndex = this.pagesIndex.slice(1, Math.min(6, this.pagesIndex.length - 1));
    }
    changePage(pageIndex) {
        if (!(0 < pageIndex && pageIndex <= this.totalPages)) {
            return;
        }
        this.currentPageIndex = pageIndex;
        this.computeDisplayedPagesIndex();
        this.pageChanged.emit(pageIndex);
    }
    computeDisplayedPagesIndex() {
        if (this.currentPageIndex <= 6) {
            this.displayedPagesIndex = this.pagesIndex.slice(1, Math.min(6, this.pagesIndex.length - 1));
        }
        else {
            const lastIndexToDisplay = this.currentPageIndex === this.totalPages ? this.currentPageIndex - 1 : this.currentPageIndex;
            this.displayedPagesIndex = this.pagesIndex.slice(this.currentPageIndex - 6, lastIndexToDisplay);
        }
    }
    reset() {
        this.currentPageIndex = 1;
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { totalPages: "totalPages", currentPageIndex: "currentPageIndex" }, outputs: { pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "pagination__arrow", "left", 3, "click"], [3, "click"], ["class", "pagination__three-points", 4, "ngIf"], [4, "ngIf"], [3, "class", "click", 4, "ngIf"], [1, "pagination__arrow", "right", 3, "click"], [1, "pagination__three-points"], [3, "class", "click", 4, "ngFor", "ngForOf"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 82082:
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarComponent": function() { return /* binding */ SearchBarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 52529);




class SearchBarComponent {
    constructor() {
        this.researchUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onResearchUpdate($event) {
        this.researchUpdated.emit($event);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], outputs: { researchUpdated: "researchUpdated" }, decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_research_research_placeHolder$$SRC_APP_COMPONENTS_SEARCH_BAR_SEARCH_BAR_COMPONENT_TS_1 = goog.getMsg("Search by title");
        i18n_0 = MSG_EXTERNAL_media_research_research_placeHolder$$SRC_APP_COMPONENTS_SEARCH_BAR_SEARCH_BAR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@media-research.research-placeHolder␟92f8b474ec6bdb8ee6dd6cd772f8a636b96d1a65␟3768264297677107657:Search by title`;
    } return [["search-bar", "", "color", "primary", 1, "media-research-page__search-bar"], ["matInput", "", "placeholder", i18n_0, "type", "text", "autocomplete", "off", "name", "research", "id", "research", "onfocus", "this.placeholder = ''", "onblur", "this.placeholder = 'Search by title'", 1, "media-research-page__input", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 1, "media-research-page__search-icon"]]; }, template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.research = $event; })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onResearchUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.research);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 77749:
/*!******************************************************************************!*\
  !*** ./src/app/modules/home-page/home-page-component/home-page.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": function() { return /* binding */ HomePageComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/main-page-layout/main-page-layout.component */ 58806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tmdb/tmdb.service */ 20885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_hook_hook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/hook/hook.component */ 55113);
/* harmony import */ var _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/media-type-selection/media-type-selection.component */ 48141);









function HomePageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-main-page-layout", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChanged", function HomePageComponent_ng_container_0_Template_app_main_page_layout_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-hook", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-media-type-selection", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mediaChanged", function HomePageComponent_ng_container_0_Template_app_media_type_selection_mediaChanged_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.changeType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const mediasList_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mediasList", mediasList_r1)("totalPages", ctx_r0.totalPages)("mediasType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, ctx_r0.changeType$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mediaType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, ctx_r0.changeType$))("topMedia", ctx_r0.hookMedia);
} }
class HomePageComponent {
    constructor(tmdbService) {
        this.tmdbService = tmdbService;
        this.currentPage = 1;
        this.totalPages = 0;
        this.changePage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.changeType$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('movie');
    }
    ngAfterViewInit() {
        this.mediasList$ = this.changeType$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((type) => {
            if (this.layoutComponent) {
                this.layoutComponent.reset();
            }
            return this.updateMediasListPage(type);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
        this.getTrendingMedias(1, 'movie');
    }
    /**
     * on click on paginator get next or previous page from TMDB
     */
    changePage(currentPageIndex) {
        this.currentPage = currentPageIndex;
        this.changePage$.next(currentPageIndex);
    }
    changeType(type) {
        this.currentPage = 1;
        this.changeType$.next(type);
        this.layoutComponent.reset();
    }
    getCurrentPage() {
        return this.currentPage;
    }
    updateMediasListPage(type) {
        return this.changePage$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((currentPage) => this.getTrendingMedias(currentPage, type)));
    }
    /**
     * getting trending medias list by type and page
     */
    getTrendingMedias(currentPage, type) {
        return this.tmdbService.getTrendingMedias(type, currentPage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(medias => {
            this.totalPages = medias.total_pages;
            if (currentPage === 1) {
                this.hookMedia = medias.results[0];
            }
            return medias.results;
        }));
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__.TmdbService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], viewQuery: function HomePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.layoutComponent = _t.first);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["additionalClass", "", 1, "home-page__main-page-layout", 3, "mediasList", "totalPages", "mediasType", "pageChanged"], ["hook", ""], [3, "mediaType", "topMedia"], ["media-type-selection", ""], ["additionalClass", "", 3, "mediaChanged"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HomePageComponent_ng_container_0_Template, 8, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.mediasList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, _components_hook_hook_component__WEBPACK_IMPORTED_MODULE_2__.HookComponent, _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_3__.MediaTypeSelectionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13250:
/*!***************************************************************!*\
  !*** ./src/app/modules/home-page/home-page-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page_component_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-component/home-page.component */ 77749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _home_page_component_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent }];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23463:
/*!*******************************************************!*\
  !*** ./src/app/modules/home-page/home-page.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-routing.module */ 13250);
/* harmony import */ var _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-type-selection/media-type-selection.module */ 43109);
/* harmony import */ var _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-layout/main-layout.module */ 66507);
/* harmony import */ var _home_page_component_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-component/home-page.component */ 77749);
/* harmony import */ var _components_hook_hook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hook/hook.component */ 55113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_1__.MediaTypeSelectionModule,
            _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__.MainLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent,
        _components_hook_hook_component__WEBPACK_IMPORTED_MODULE_4__.HookComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_1__.MediaTypeSelectionModule,
        _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__.MainLayoutModule] }); })();


/***/ }),

/***/ 66507:
/*!***********************************************************!*\
  !*** ./src/app/modules/main-layout/main-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutModule": function() { return /* binding */ MainLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/media/media.component */ 34423);
/* harmony import */ var _components_media_details_dialog_media_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/media-details-dialog/media-details-dialog.component */ 78834);
/* harmony import */ var _components_list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/list-buttons/list-buttons.component */ 82858);
/* harmony import */ var _components_media_grid_media_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/media-grid/media-grid.component */ 92500);
/* harmony import */ var _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/tmdb-date/tmdb-date.pipe */ 50238);
/* harmony import */ var _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/tmdb-img-path/tmdb-img-path.pipe */ 42073);
/* harmony import */ var _components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/main-page-layout/main-page-layout.component */ 58806);
/* harmony import */ var _components_list_button_list_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/list-button/list-button.component */ 32580);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ 88601);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 85937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);


















class MainLayoutModule {
}
MainLayoutModule.ɵfac = function MainLayoutModule_Factory(t) { return new (t || MainLayoutModule)(); };
MainLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: MainLayoutModule });
MainLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MainLayoutModule, { declarations: [_components_media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent,
        _components_media_details_dialog_media_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.MediaDetailsDialogComponent,
        _components_list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ListButtonsComponent,
        _components_media_grid_media_grid_component__WEBPACK_IMPORTED_MODULE_3__.MediaGridComponent,
        _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_4__.TmdbDatePipe,
        _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_5__.TmdbImgPathPipe,
        _components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_6__.MainPageLayoutComponent,
        _components_list_button_list_button_component__WEBPACK_IMPORTED_MODULE_7__.ListButtonComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule], exports: [_components_media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent,
        _components_media_details_dialog_media_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.MediaDetailsDialogComponent,
        _components_list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ListButtonsComponent,
        _components_media_grid_media_grid_component__WEBPACK_IMPORTED_MODULE_3__.MediaGridComponent,
        _pipes_tmdb_date_tmdb_date_pipe__WEBPACK_IMPORTED_MODULE_4__.TmdbDatePipe,
        _pipes_tmdb_img_path_tmdb_img_path_pipe__WEBPACK_IMPORTED_MODULE_5__.TmdbImgPathPipe,
        _components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_6__.MainPageLayoutComponent,
        _components_list_button_list_button_component__WEBPACK_IMPORTED_MODULE_7__.ListButtonComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent] }); })();


/***/ }),

/***/ 20883:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/media-research-page/media-research-page-component/media-research-page.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaResearchPageComponent": function() { return /* binding */ MediaResearchPageComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/main-page-layout/main-page-layout.component */ 58806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tmdb/tmdb.service */ 20885);
/* harmony import */ var _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/media-type-selection/media-type-selection.component */ 48141);
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/search-bar/search-bar.component */ 82082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);









function MediaResearchPageComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediaResearchPageComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MediaResearchPageComponent {
    constructor(tmdbService) {
        this.tmdbService = tmdbService;
        // research bar model
        this.mediaResearchUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.currentPage = 1;
        this.changePage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.changeType$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('movie');
    }
    ngOnInit() {
        this.mediasList$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.mediaResearchUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((mediaResearch) => {
                this.mediaResearch = mediaResearch;
            })),
            this.changeType$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([_, type]) => {
            this.layoutComponent.reset();
            return this.updateMediasListPage(type);
        }));
    }
    /**
     * on click on paginator get next or previous page from TMDB
     */
    changePage(currentPageIndex) {
        this.currentPage = currentPageIndex;
        this.changePage$.next(currentPageIndex);
    }
    changeType(type) {
        this.currentPage = 1;
        this.changeType$.next(type);
    }
    getCurrentPage() {
        return this.currentPage;
    }
    updateMediasListPage(type) {
        return this.changePage$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((currentPage) => this.filterMediasByUserEntry(currentPage, type)));
    }
    /**
     * filtering all current page medias by keeping only ones starting by user entry string
     */
    filterMediasByUserEntry(currentPage, type) {
        if (!(this.mediaResearch && this.mediaResearch.length)) {
            this.totalPages = 0;
            this.totalResults = 0;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
        }
        return this.tmdbService.getMediasByName(this.mediaResearch, type, currentPage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(medias => {
            this.totalPages = medias.total_pages;
            this.totalResults = medias.total_results;
            return medias.results;
        }));
    }
}
MediaResearchPageComponent.ɵfac = function MediaResearchPageComponent_Factory(t) { return new (t || MediaResearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_1__.TmdbService)); };
MediaResearchPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MediaResearchPageComponent, selectors: [["app-media-research-page"]], viewQuery: function MediaResearchPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.layoutComponent = _t.first);
    } }, decls: 13, vars: 10, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_research_results$$SRC_APP_MODULES_MEDIA_RESEARCH_PAGE_MEDIA_RESEARCH_PAGE_COMPONENT_MEDIA_RESEARCH_PAGE_COMPONENT_TS__1 = goog.getMsg("results");
        i18n_0 = MSG_EXTERNAL_media_research_results$$SRC_APP_MODULES_MEDIA_RESEARCH_PAGE_MEDIA_RESEARCH_PAGE_COMPONENT_MEDIA_RESEARCH_PAGE_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@media-research.results␟8950c34280e5982cdd465af5938bb86225430a96␟1338297011053827475:results`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_media_research_result$$SRC_APP_MODULES_MEDIA_RESEARCH_PAGE_MEDIA_RESEARCH_PAGE_COMPONENT_MEDIA_RESEARCH_PAGE_COMPONENT_TS__3 = goog.getMsg("result");
        i18n_2 = MSG_EXTERNAL_media_research_result$$SRC_APP_MODULES_MEDIA_RESEARCH_PAGE_MEDIA_RESEARCH_PAGE_COMPONENT_MEDIA_RESEARCH_PAGE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@media-research.result␟84da8fa504bee5d9fc67103f4f7b50a4c3ab0e60␟5172769349703733346:result`;
    } return [["additionalClass", "margin", 3, "mediasList", "totalPages", "mediasType", "pageChanged"], ["media-type-selection", ""], ["additionalClass", "margin", 3, "mediaChanged"], ["search-bar", ""], [3, "researchUpdated"], ["results-count", "", 1, "results-count"], [1, "results-count__count"], [4, "ngIf", "ngIfElse"], ["result", ""], i18n_0, i18n_2]; }, template: function MediaResearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-main-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChanged", function MediaResearchPageComponent_Template_app_main_page_layout_pageChanged_0_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-media-type-selection", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mediaChanged", function MediaResearchPageComponent_Template_app_media_type_selection_mediaChanged_4_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-search-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("researchUpdated", function MediaResearchPageComponent_Template_app_search_bar_researchUpdated_6_listener($event) { return ctx.mediaResearchUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MediaResearchPageComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MediaResearchPageComponent_ng_template_11_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mediasList", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx.mediasList$))("totalPages", ctx.totalPages)("mediasType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 8, ctx.changeType$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.totalResults ? ctx.totalResults : 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalResults && ctx.totalResults > 1)("ngIfElse", _r1);
    } }, directives: [src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelectionComponent, _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__.SearchBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS1yZXNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 99118:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/media-research-page/media-research-page-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaResearchPageRoutingModule": function() { return /* binding */ MediaResearchPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _media_research_page_component_media_research_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-research-page-component/media-research-page.component */ 20883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _media_research_page_component_media_research_page_component__WEBPACK_IMPORTED_MODULE_0__.MediaResearchPageComponent }];
class MediaResearchPageRoutingModule {
}
MediaResearchPageRoutingModule.ɵfac = function MediaResearchPageRoutingModule_Factory(t) { return new (t || MediaResearchPageRoutingModule)(); };
MediaResearchPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MediaResearchPageRoutingModule });
MediaResearchPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaResearchPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 99913:
/*!***************************************************************************!*\
  !*** ./src/app/modules/media-research-page/media-research-page.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaResearchPageModule": function() { return /* binding */ MediaResearchPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _media_research_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-research-page-routing.module */ 99118);
/* harmony import */ var _media_research_page_component_media_research_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-research-page-component/media-research-page.component */ 20883);
/* harmony import */ var _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-layout/main-layout.module */ 66507);
/* harmony import */ var _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media-type-selection/media-type-selection.module */ 43109);
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ 82082);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class MediaResearchPageModule {
}
MediaResearchPageModule.ɵfac = function MediaResearchPageModule_Factory(t) { return new (t || MediaResearchPageModule)(); };
MediaResearchPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MediaResearchPageModule });
MediaResearchPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _media_research_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaResearchPageRoutingModule,
            _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_3__.MediaTypeSelectionModule,
            _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__.MainLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MediaResearchPageModule, { declarations: [_media_research_page_component_media_research_page_component__WEBPACK_IMPORTED_MODULE_1__.MediaResearchPageComponent,
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__.SearchBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _media_research_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaResearchPageRoutingModule,
        _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_3__.MediaTypeSelectionModule,
        _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_2__.MainLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 43109:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/media-type-selection/media-type-selection.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaTypeSelectionModule": function() { return /* binding */ MediaTypeSelectionModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/media-type-selection/media-type-selection.component */ 48141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class MediaTypeSelectionModule {
}
MediaTypeSelectionModule.ɵfac = function MediaTypeSelectionModule_Factory(t) { return new (t || MediaTypeSelectionModule)(); };
MediaTypeSelectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MediaTypeSelectionModule });
MediaTypeSelectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaTypeSelectionModule, { declarations: [_components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_0__.MediaTypeSelectionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_0__.MediaTypeSelectionComponent] }); })();


/***/ }),

/***/ 44787:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user-list/user-list-component/user-list-page.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageComponent": function() { return /* binding */ UserListPageComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 94236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/main-page-layout/main-page-layout.component */ 58806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_localstorage_localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/localstorage/localStorage.service */ 72481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/media-type-selection/media-type-selection.component */ 48141);









function UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_ng_template_2_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_span_4_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_ng_template_5_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const mediaType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mediaType_r3 === "movie")("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.currentListName && ctx_r4.currentListName === "seen")("ngIfElse", _r11);
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_ng_template_2_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_span_4_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const mediaType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mediaType_r3 === "movie")("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.currentListName && ctx_r6.currentListName === "seen")("ngIfElse", _r18);
} }
function UserListPageComponent_app_main_page_layout_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserListPageComponent_app_main_page_layout_0_ng_container_6_div_1_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserListPageComponent_app_main_page_layout_0_ng_container_6_ng_template_2_Template, 7, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const mediasList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mediasList_r1.length > 1)("ngIfElse", _r5);
} }
function UserListPageComponent_app_main_page_layout_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-main-page-layout", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mediaChanged", function UserListPageComponent_app_main_page_layout_0_Template_app_main_page_layout_mediaChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.changeType($event); })("pageChanged", function UserListPageComponent_app_main_page_layout_0_Template_app_main_page_layout_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-media-type-selection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mediaChanged", function UserListPageComponent_app_main_page_layout_0_Template_app_media_type_selection_mediaChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.changeType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UserListPageComponent_app_main_page_layout_0_ng_container_6_Template, 4, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediasList_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mediasList", mediasList_r1)("totalPages", ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mediasList_r1 ? mediasList_r1.length : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, ctx_r0.changeType$));
} }
class UserListPageComponent {
    constructor(localStorageService, route) {
        this.localStorageService = localStorageService;
        this.route = route;
        this.currentPage = 1;
        this.totalPages = 0;
        // change this var to extend pages
        this.pagesSize = 20;
        this.changePage$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.changeType$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('movie');
        const listName$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)('listName'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(listName => this.currentListName = listName));
        const listChange$ = this.localStorageService.localStorageNotifier.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)('listName'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(listName => listName === this.currentListName));
        const mediaChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(listName$, listChange$);
        this.mediasList$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.changeType$, mediaChange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([type]) => this.localStorageService.getListAndFilterByMediaType(this.currentListName, type)));
        this.currentMediasList$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.changePage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(1)),
            this.mediasList$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([page, mediasList]) => {
            this.totalPages = Math.trunc(mediasList.length / this.pagesSize) + ((mediasList.length % this.pagesSize) > 0 ? 1 : 0);
            return mediasList.slice((page - 1) * this.pagesSize, Math.min(((page - 1) * this.pagesSize) + this.pagesSize, mediasList.length));
        }));
    }
    /**
     * on click on paginator get next or previous page from TMDB
     */
    changePage(currentPageIndex) {
        this.currentPage = currentPageIndex;
        this.changePage$.next(currentPageIndex);
    }
    changeType(type) {
        this.currentPage = 1;
        this.changeType$.next(type);
    }
    getCurrentPage() {
        return this.currentPage;
    }
}
UserListPageComponent.ɵfac = function UserListPageComponent_Factory(t) { return new (t || UserListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_localstorage_localStorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute)); };
UserListPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserListPageComponent, selectors: [["app-user-list-page"]], viewQuery: function UserListPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.layoutComponent = _t.first);
    } }, decls: 2, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_movies$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____1 = goog.getMsg("movies");
        i18n_0 = MSG_EXTERNAL_user_list_movies$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____1;
    }
    else {
        i18n_0 = $localize `:@@user-list.movies␟b9c9c972970c49c6eb738f1044e240b509f0f834␟6985693629268612750:movies`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_tvs$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____3 = goog.getMsg("TV Shows");
        i18n_2 = MSG_EXTERNAL_user_list_tvs$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____3;
    }
    else {
        i18n_2 = $localize `:@@user-list.tvs␟9ebef909f7fd0150e5c4a47b73361e89ed644706␟2325815383560299041:TV Shows`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_seen1$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____5 = goog.getMsg("ever seen");
        i18n_4 = MSG_EXTERNAL_user_list_seen1$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____5;
    }
    else {
        i18n_4 = $localize `:@@user-list.seen1␟04dc6eebbf6aada642b77a1778bb706af5d26e5a␟6730066523540397468:ever seen`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_toSee1$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____7 = goog.getMsg("to see");
        i18n_6 = MSG_EXTERNAL_user_list_toSee1$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____7;
    }
    else {
        i18n_6 = $localize `:@@user-list.toSee1␟66426ce89bc5e3f6a016b1c3965936e8a29d0093␟2617916829579892283:to see`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_movie$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____9 = goog.getMsg("movie");
        i18n_8 = MSG_EXTERNAL_user_list_movie$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____9;
    }
    else {
        i18n_8 = $localize `:@@user-list.movie␟2ab994592a45daa9b6a10eb46df85510b8955d56␟3993492738803322270:movie`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_tv$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____11 = goog.getMsg("TV Show");
        i18n_10 = MSG_EXTERNAL_user_list_tv$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____11;
    }
    else {
        i18n_10 = $localize `:@@user-list.tv␟2f84dfcc2c6abeaee8aa453c0c4786c7e1b80ad2␟3613348079859975417:TV Show`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_seen2$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____13 = goog.getMsg("ever seen");
        i18n_12 = MSG_EXTERNAL_user_list_seen2$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____13;
    }
    else {
        i18n_12 = $localize `:@@user-list.seen2␟04dc6eebbf6aada642b77a1778bb706af5d26e5a␟6730066523540397468:ever seen`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_user_list_toSee2$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____15 = goog.getMsg("to see");
        i18n_14 = MSG_EXTERNAL_user_list_toSee2$$SRC_APP_MODULES_USER_LIST_USER_LIST_COMPONENT_USER_LIST_PAGE_COMPONENT_TS_____15;
    }
    else {
        i18n_14 = $localize `:@@user-list.toSee2␟66426ce89bc5e3f6a016b1c3965936e8a29d0093␟2617916829579892283:to see`;
    } return [["additionalClass", "margin", 3, "mediasList", "totalPages", "mediaChanged", "pageChanged", 4, "ngIf"], ["additionalClass", "margin", 3, "mediasList", "totalPages", "mediaChanged", "pageChanged"], ["media-type-selection", ""], ["additionalClass", "margin", 3, "mediaChanged"], ["results-count", "", 1, "results-count"], [1, "results-count__count"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["result", ""], ["class", "user-list__media-type", 4, "ngIf", "ngIfElse"], ["tvs", ""], ["toSee", ""], [1, "user-list__media-type"], i18n_0, i18n_2, i18n_4, i18n_6, [1, "media-research-page__results_text"], ["tv", ""], i18n_8, i18n_10, i18n_12, i18n_14]; }, template: function UserListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UserListPageComponent_app_main_page_layout_0_Template, 8, 6, "app-main-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.currentMediasList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, src_app_components_main_page_layout_main_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainPageLayoutComponent, _components_media_type_selection_media_type_selection_component__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelectionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3764:
/*!***************************************************************!*\
  !*** ./src/app/modules/user-list/user-list-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListRoutingModule": function() { return /* binding */ UserListRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _user_list_component_user_list_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-component/user-list-page.component */ 44787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: 'seenMedias', component: _user_list_component_user_list_page_component__WEBPACK_IMPORTED_MODULE_0__.UserListPageComponent, data: { listName: 'seen' } },
    { path: 'mustSeeMedias', component: _user_list_component_user_list_page_component__WEBPACK_IMPORTED_MODULE_0__.UserListPageComponent, data: { listName: 'mustSee' } },
];
class UserListRoutingModule {
}
UserListRoutingModule.ɵfac = function UserListRoutingModule_Factory(t) { return new (t || UserListRoutingModule)(); };
UserListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserListRoutingModule });
UserListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 66946:
/*!*******************************************************!*\
  !*** ./src/app/modules/user-list/user-list.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListModule": function() { return /* binding */ UserListModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media-type-selection/media-type-selection.module */ 43109);
/* harmony import */ var _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-layout/main-layout.module */ 66507);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list-routing.module */ 3764);
/* harmony import */ var _user_list_component_user_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list-component/user-list-page.component */ 44787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class UserListModule {
}
UserListModule.ɵfac = function UserListModule_Factory(t) { return new (t || UserListModule)(); };
UserListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserListModule });
UserListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserListRoutingModule,
            _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_0__.MediaTypeSelectionModule,
            _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__.MainLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserListModule, { declarations: [_user_list_component_user_list_page_component__WEBPACK_IMPORTED_MODULE_3__.UserListPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _user_list_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserListRoutingModule,
        _media_type_selection_media_type_selection_module__WEBPACK_IMPORTED_MODULE_0__.MediaTypeSelectionModule,
        _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__.MainLayoutModule] }); })();


/***/ }),

/***/ 50238:
/*!***************************************************!*\
  !*** ./src/app/pipes/tmdb-date/tmdb-date.pipe.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmdbDatePipe": function() { return /* binding */ TmdbDatePipe; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class TmdbDatePipe {
    transform(dateStr, format = 'YYYY') {
        const momentDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateStr);
        return momentDate.format(format);
    }
}
TmdbDatePipe.ɵfac = function TmdbDatePipe_Factory(t) { return new (t || TmdbDatePipe)(); };
TmdbDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tmdbDate", type: TmdbDatePipe, pure: true });


/***/ }),

/***/ 42073:
/*!***********************************************************!*\
  !*** ./src/app/pipes/tmdb-img-path/tmdb-img-path.pipe.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmdbImgPathPipe": function() { return /* binding */ TmdbImgPathPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TmdbImgPathPipe {
    transform(imgPath) {
        return 'https://image.tmdb.org/t/p/original/' + imgPath;
    }
}
TmdbImgPathPipe.ɵfac = function TmdbImgPathPipe_Factory(t) { return new (t || TmdbImgPathPipe)(); };
TmdbImgPathPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tmdbImgPath", type: TmdbImgPathPipe, pure: true });


/***/ }),

/***/ 72481:
/*!***************************************************************!*\
  !*** ./src/app/services/localstorage/localStorage.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": function() { return /* binding */ LocalStorageService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * Service dedicated to communicate with the media DB API
 */
class LocalStorageService {
    constructor() {
        this.localStorageNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
     * Getting list from localstorage
     */
    getList(listName) {
        if (!localStorage.getItem(listName)) {
            return [];
        }
        return JSON.parse(localStorage.getItem(listName));
    }
    getListAndFilterByMediaType(listName, mediaType) {
        if (!mediaType) {
            return this.getList(listName);
        }
        return this.getList(listName).filter(media => media.media_type === mediaType);
    }
    /**
     * Removing current media id from localstorage list
     */
    removeItem(listName, currentMedia) {
        if (!localStorage.getItem(listName) || !currentMedia) {
            return;
        }
        const list = this.getList(listName);
        const index = list.findIndex(media => (media.media_type === currentMedia.media_type && media.id === currentMedia.id));
        if (index >= 0) {
            list.splice(index, 1);
        }
        localStorage.setItem(listName, JSON.stringify(list));
        this.localStorageNotifier.next({ id: currentMedia.id, listName, isAdding: false });
    }
    /**
     * Looking for current media id in localstorage list
     */
    isInList(listName, mediaId) {
        if (!localStorage.getItem(listName) || !mediaId) {
            return false;
        }
        const list = this.getList(listName);
        return list && list.find(media => media.id === mediaId) !== undefined;
    }
    /**
     * Adding current media id from localstorage list
     */
    addItem(listName, media) {
        if (!media) {
            return;
        }
        const list = this.getList(listName);
        list.push(media);
        localStorage.setItem(listName, JSON.stringify(list));
        this.localStorageNotifier.next({ id: media.id, listName, isAdding: true });
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20885:
/*!***********************************************!*\
  !*** ./src/app/services/tmdb/tmdb.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmdbService": function() { return /* binding */ TmdbService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 97859);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);





/**
 * Service dedicated to communicate with the media DB API
 */
class TmdbService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'https://api.themoviedb.org/3';
        this.apiKey = '0c6e72279935d4050e3042008b14802c';
    }
    /**
     * Recovering weekly trending movies from TMDB to display home screen list
     */
    getTrendingMedias(mediaType, currentPage = 1) {
        if (!mediaType) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
                page: 0,
                results: [],
                total_pages: 0,
                total_results: 0,
            });
        }
        return this.http
            .get(`${this.baseURL}/trending/${mediaType}/week?api_key=${this.apiKey}&page=${currentPage}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleHttpError));
    }
    /**
     * Get media details from TMDB thanks to media ID
     */
    getMediaById(id, mediaType) {
        if (!id || !mediaType) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
        }
        return this.http.get(`${this.baseURL}/${mediaType}/${id}?api_key=${this.apiKey}`);
    }
    /**
     * Get media director and 10 best actors names
     */
    getMediaBestCredits(id, mediaType) {
        if (!id || !mediaType) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
        }
        return this.http.get(`${this.baseURL}/${mediaType}/${id}/credits?api_key=${this.apiKey}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((mediaCredits) => {
            return this.parseMediaCredits(mediaCredits);
        }));
    }
    /**
     * Find any media by it's name
     */
    getMediasByName(mediaName, mediaType, page = 1) {
        if (!mediaName || !mediaType) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
                page: 0,
                results: [],
                total_pages: 0,
                total_results: 0,
            });
        }
        return this.http.get(`${this.baseURL}/search/${mediaType}?api_key=${this.apiKey}&page=${page}&include_adult=false&query=${mediaName}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleHttpError));
    }
    parseMediaCredits(mediaCredits) {
        const result = {};
        // filtering all crew to get media director
        if (mediaCredits.crew) {
            const director = mediaCredits.crew.find(crewMember => crewMember.job === 'Director');
            if (director) {
                result.directorName = director.name;
            }
        }
        if (mediaCredits.cast) {
            result.actorsNames = mediaCredits.cast
                .slice(0, Math.min(10, mediaCredits.cast.length)) // getting up to 10 actors
                .map(actorName => actorName.name); // getting actors names only
        }
        return result;
    }
    handleHttpError(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0,
        });
    }
}
TmdbService.ɵfac = function TmdbService_Factory(t) { return new (t || TmdbService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
TmdbService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TmdbService, factory: TmdbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 58256);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn-bd": 74477,
	"./bn-bd.js": 74477,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-mx": 56131,
	"./es-mx.js": 56131,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 27739,
	"./se.js": 27739,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map