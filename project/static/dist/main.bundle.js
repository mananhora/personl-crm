webpackJsonp(["main"],{

/***/ "./project/static/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./project/static/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./project/static/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n.mylabel {\n  font-size: 1.25rem;\n  color: rgba(0,0,0,0.87);\n  opacity: 1;\n}\n\n.mylabel .mat-tab-label-active {\n  opacity: 1;\n}\n\nh1 {\n  text-align: center;\n  font-family: 'justbecool';\n  font-size: 3.25rem;\n}\n\nh2 {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-top: 1rem;\n  margin-bottom: 2.5rem;\n}\n\np {\n  margin-bottom: 0em;\n}\n\n.myChipList {\n  display: block;\n}\n\n.myChipList input {\n  border-bottom: none;\n  margin-right: 0.75rem;\n}\n\n.myChipList input:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.mat-toolbar-row i {\n  color: #00796b;\n}\n\n#finish {\n  background-color: #26a69a;\n  color: #fff;\n}\n\n#finish:hover {\n  color: #fff;\n  background-color: #2bbbad; /* #80cbc4 */\n}\n"

/***/ }),

/***/ "./project/static/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"secondary\" routerLink=\"/app/home\">myVillage</span>\n      <span class=\"example-spacer\"></span>\n      <div *ngIf=\"loggedIn == true\">\n        <a routerLink=\"/app/notifications\"><i class=\"material-icons\">notifications</i></a>\n        <span class=\"example-spacer\"></span>\n        <a routerLink=\"/app/friends\"><i class=\"material-icons\">contacts</i></a>\n        <span class=\"example-spacer\"></span>\n        <!-- <a routerLink=\"/app/profile/0\"><i class=\"material-icons\">person</i></a>\n        <span class=\"example-spacer\"></span> -->\n        <a href='/logout'><i class=\"material-icons\">power_settings_new</i></a>\n        <span class=\"example-spacer\"></span>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div *ngIf=\"loggedIn == false\">\n    <div class=\"container\" id=\"splash\">\n      <h1>Welcome to myVillage!</h1>\n      <h2>get started with your community</h2>\n\n      <mat-tab-group>\n        <div class=\"label\">\n          <mat-tab label=\"login\">\n            <ng-template mat-tab-label>\n              <span class=\"mylabel\">login</span>\n            </ng-template>\n            <form class=\"col s8 offset-s2 card-panel form-signin\"\n                  (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput type=\"email\" validate\n                        placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput type=\"password\" placeholder=\"password\"\n                        [(ngModel)]=\"password\" name=\"password\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                        [disabled]=\"!loginForm.form.valid\" >\n                  Sign in <i class=\"material-icons right\">send</i>\n                </button>\n              </div>\n            </form>\n          </mat-tab>\n        </div>\n\n        <mat-tab  label=\"register\">\n          <ng-template mat-tab-label>\n            <span class=\"mylabel\">register</span>\n          </ng-template>\n          <mat-horizontal-stepper #stepper=\"matHorizontalStepper\">\n            <ng-template matStepperIcon=\"edit\">\n              <mat-icon>done</mat-icon>\n            </ng-template>\n            <!-- @TODO figure out formgroup to make registration linear & required -->\n            <mat-step label=\"Login Details\">\n              <p>First, please enter your basic login information.</p>\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput type=\"email\" validate\n                        placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput type=\"password\" placeholder=\"password\"\n                        [(ngModel)]=\"password\" name=\"password\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <!-- @TODO confirm password functionality -->\n                <!-- <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"password\" class=\"validate\" id=\"confirmPassword\" required\n                            [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\">\n                    <label for=\"confirmPassword\">Confirm Password</label>\n                  </div>\n                </div> -->\n              </div>\n              <div>\n                <button mat-button matStepperNext class=\"right\">Next</button>\n              </div>\n            </mat-step>\n            <mat-step label=\"Personal Info\">\n              <p>Tell us a little more about yourself</p>\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Where's your hometown?\"\n                        [(ngModel)]=\"hometown.name\" name=\"hometown\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Where did you go to school?\"\n                        [(ngModel)]=\"school.name\" name=\"school\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div>\n                <!-- @TODO show 'skip' unless text is inputted -->\n                <button mat-button matStepperNext class=\"right\">Next</button>\n                <button mat-button matStepperPrevious class=\"right\">Back</button>\n              </div>\n            </mat-step>\n            <mat-step label=\"Circles\">\n              <div *ngFor=\"let circle of circles\">\n                <p>Who are you closest friends from <strong>{{circle.name}}</strong>?</p>\n                <mat-form-field class=\"myChipList\">\n                  <mat-chip-list #friendList>\n                    <mat-chip *ngFor=\"let friend of circle.friends\" [removable]=\"removable\"\n                      (remove)=\"removeFriend(friend, circle)\">\n                        {{friend.name}}\n                      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <input [matChipInputFor]=\"friendList\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                      (matChipInputTokenEnd)=\"addFriend($event, circle)\">\n                  </mat-chip-list>\n                </mat-form-field>\n              </div>\n\n              <div>\n                <button id=\"finish\" mat-button matStepperNext class=\"right btn waves-effect waves-light\"\n                  (click)=\"register()\">Finish</button>\n                <button mat-button matStepperPrevious class=\"right\">Back</button>\n              </div>\n            </mat-step>\n            <mat-step>\n              <ng-template matStepLabel>Done</ng-template>\n              <!-- <mat-spinner></mat-spinner> -->\n              <div class=\"row center-align\">\n                <h4>Congratulations! You're all set up.</h4>\n                <a class=\"btn waves-effect waves-light\" (click)=\"login()\">Go to Dashboard</a>\n              </div>\n            </mat-step>\n          </mat-horizontal-stepper>\n\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n\n  <div *ngIf=\"loggedIn == true\" class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./project/static/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circles_circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(appService, friendsService, circlesService) {
        this.appService = appService;
        this.friendsService = friendsService;
        this.circlesService = circlesService;
        this.loggedIn = false;
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.removable = true;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["c" /* COMMA */]];
    }
    /**
     * @function isLoggedIn
     * sets loggedIn variable
     */
    AppComponent.prototype.isLoggedIn = function () {
        var _this = this;
        this.appService.isLoggedIn()
            .subscribe(function (data) {
            _this.loggedIn = data['is_logged_in'];
        });
    };
    /**
     * @function login
     * login user from email and password. redirect to homepage
     */
    AppComponent.prototype.login = function () {
        this.appService.login(this.email, this.password)
            .subscribe(function (data) {
            location.href = 'http://0.0.0.0:5000/';
        });
    };
    /**
     * @function register
     * registers a new user account
     */
    AppComponent.prototype.register = function () {
        var _this = this;
        this.appService.register(this.name, this.email, this.password, this.confirmPassword)
            .subscribe(function (data) {
            _this.appService.login(_this.email, _this.password)
                .subscribe(function (data) {
                var _loop_1 = function (i) {
                    _this.circlesService.addCircle(_this.circles[i].name)
                        .subscribe(function (data) {
                        _this.circles[i].id = data['circle_id'];
                        for (var i_1 = 0; i_1 < _this.circles[i_1].friends.length; i_1++) {
                            _this.friendsService.addFriend(_this.circles[i_1].friends[i_1].name, '', [_this.circles[i_1]]);
                        }
                    });
                };
                for (var i = 0; i < _this.circles.length; i++) {
                    _loop_1(i);
                }
            });
        });
    };
    /**
     * @function addFriend
     * @param {MatChipInputEvent} event - event triggered at chip input
     * @param {Circle} circle - circle to which chip data (friends) will be added
     */
    AppComponent.prototype.addFriend = function (event, circle) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            var friend = new __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* Profile */](value.trim(), '', 0);
            if (circle.friends) {
                circle.friends.push(friend);
            }
            else {
                circle.friends = [friend];
            }
        }
        if (input)
            input.value = '';
    };
    /**
     * @function removeFriend
     * @param {any} friend - friend we would like to remove
     * @TODO change from any to Profile for more consistent
     * @param {Circle} circle - circle we are removing the friend from
     */
    AppComponent.prototype.removeFriend = function (friend, circle) {
        var index = circle.friends.indexOf(friend);
        if (index >= 0)
            circle.friends.splice(index, 1);
    };
    /**
     * @function ngOnInit
     * checks if logged in. sets empty values for circles
     */
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn();
        this.school = new __WEBPACK_IMPORTED_MODULE_4__circles_circle__["a" /* Circle */]('', 1);
        this.hometown = new __WEBPACK_IMPORTED_MODULE_4__circles_circle__["a" /* Circle */]('', 2);
        this.circles = [this.hometown, this.school];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./project/static/app/app.component.html"),
            styles: [__webpack_require__("./project/static/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__friends_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_2__circles_circles_service__["a" /* CirclesService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./project/static/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./project/static/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ng2_vis__ = __webpack_require__("./node_modules/ng2-vis/ng2-vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ng2_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__node_modules_ng2_vis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./project/static/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__circles_circles_component__ = __webpack_require__("./project/static/app/circles/circles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__circles_add_circles_add_component__ = __webpack_require__("./project/static/app/circles/add/circles.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__ = __webpack_require__("./project/static/app/circles/edit/circles.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__ = __webpack_require__("./project/static/app/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__friends_add_friends_add_component__ = __webpack_require__("./project/static/app/friends/add/friends.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("./project/static/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__ = __webpack_require__("./project/static/app/profile/edit/profile.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__ = __webpack_require__("./project/static/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_service__ = __webpack_require__("./project/static/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__circles_circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__friends_friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile_service__ = __webpack_require__("./project/static/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__notifications_notifications_service__ = __webpack_require__("./project/static/app/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    { path: 'app/home', component: __WEBPACK_IMPORTED_MODULE_9__circles_circles_component__["a" /* CirclesComponent */] },
    { path: 'app/home/add', component: __WEBPACK_IMPORTED_MODULE_10__circles_add_circles_add_component__["a" /* CirclesAddComponent */] },
    { path: 'app/circles/:id/edit', component: __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__["b" /* CirclesEditComponent */] },
    { path: 'app/home/:id', component: __WEBPACK_IMPORTED_MODULE_9__circles_circles_component__["a" /* CirclesComponent */] },
    { path: 'app/friends', component: __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__["a" /* FriendsComponent */] },
    { path: 'app/friends/add', component: __WEBPACK_IMPORTED_MODULE_13__friends_add_friends_add_component__["a" /* FriendsAddComponent */] },
    { path: 'app/friends/:id', component: __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__["a" /* FriendsComponent */] },
    { path: 'app/profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["b" /* ProfileComponent */] },
    { path: 'app/profile/:id', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["b" /* ProfileComponent */] },
    { path: 'app/profile/:id/edit', component: __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["c" /* ProfileEditComponent */] },
    { path: 'app/notifications', component: __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__["a" /* NotificationsComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__circles_circles_component__["a" /* CirclesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__circles_add_circles_add_component__["a" /* CirclesAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__["b" /* CirclesEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__friends_add_friends_add_component__["a" /* FriendsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["b" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* DialogOverviewExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["c" /* ProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["b" /* PhotoDialog */],
                __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__["a" /* AddDialog */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["a" /* CirclesDialog */],
                __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__["a" /* NotificationsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7__node_modules_ng2_vis__["VisModule"],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* DialogOverviewExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["b" /* PhotoDialog */],
                __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__["a" /* AddDialog */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["a" /* CirclesDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_18__circles_circles_service__["a" /* CirclesService */],
                __WEBPACK_IMPORTED_MODULE_19__friends_friends_service__["a" /* FriendsService */],
                __WEBPACK_IMPORTED_MODULE_20__profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_21__notifications_notifications_service__["a" /* NotificationsService */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__circles_circles_component__["a" /* CirclesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__circles_add_circles_add_component__["a" /* CirclesAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__circles_edit_circles_edit_component__["b" /* CirclesEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__friends_add_friends_add_component__["a" /* FriendsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["b" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_edit_profile_edit_component__["c" /* ProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__["a" /* NotificationsComponent */],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./project/static/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @function isLoggedIn
     * Gets /isloggedin
     */
    AppService.prototype.isLoggedIn = function () {
        return this.http.get('/isloggedin');
    };
    /**
     * @function login
     * @param {string} email - user inputted email
     * @param {string} password - user inputted password
     *
     * @example
     * {
        username: email,
        password: password
      }
     */
    AppService.prototype.login = function (email, password) {
        var object = {
            username: email,
            password: password,
        };
        return this.http.post('/login', object, this.httpOptions);
    };
    /**
     * @function register
     * @param {string} name - user inputted (full) name
     * @param {string} email - user inputted email
     * @param {string} password - user inputted password
     * @param {string} confirmPassword - user inputted password confirmation
     *
     * @example
     * {
         name: name,
         email: email,
         password: password,
         confirmPassword: confirmPassword,
       }
     */
    AppService.prototype.register = function (name, email, password, confirmPassword) {
        var object = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };
        return this.http.post('/register', object, this.httpOptions);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.css":
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n\n/*\n.card-panel .row {\n  margin-bottom: 0;\n}\n\n.card-panel .mat-form-field {\n  width: 90%;\n  margin: 1em\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\ninput.mat-input-element {\n  border-bottom: none;\n  margin: -0.0625em 0 0 0;\n  height: 100%;\n}\ninput.mat-input-element:focus,\ninput[type=email].mat-input-element:focus,\ninput[type=tel].mat-input-element:focus,\ninput[type=date].mat-input-element:focus {\n  box-shadow: none;\n  border-bottom: none;\n  height: 100%;\n} */\n"

/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n    <i class=\"material-icons\">navigate_before</i>\n  </a>\n\n  <div class=\"row\">\n    <h2 class=\"center\">add circle</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\"\n          (ngSubmit)=\"addCircle()\" #addCircleForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <input matInput placeholder=\"circle name\" [(ngModel)]=\"circle.name\" name=\"circle.name\">\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <table cellspacing=\"0\">\n              <tr>\n                <td>\n                  <mat-form-field>\n                    <mat-select placeholder=\"does this belong to a group?\" multiple [(value)]=\"selectedParentCircles\">\n                      <mat-option *ngFor=\"let circle of allCircles\" [value]=\"circle\">{{circle.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field>\n                    <mat-select placeholder=\"does it have any subgroups?\" multiple [(value)]=\"selectedChildCircles\">\n                      <mat-option *ngFor=\"let circle of allCircles\" [value]=\"circle\">{{circle.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <mat-select placeholder=\"add friends to your circle\" multiple [(value)]=\"selectedFriends\">\n                <mat-option *ngFor=\"let friend of friends\" [value]=\"friend\">{{friend.name}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                    [disabled]=\"!addCircleForm.form.valid\">\n              Add Circle <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CirclesAddComponent = /** @class */ (function () {
    function CirclesAddComponent(circlesService, friendsService, router, location) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.router = router;
        this.location = location;
    }
    CirclesAddComponent.prototype.addCircle = function () {
        var _this = this;
        this.circlesService.addCircle(this.circle.name)
            .subscribe(function (data) {
            _this.circle.id = data['id'];
            // add friends to circle
            for (var i = 0; i < _this.selectedFriends.length; i++) {
                _this.circlesService.addFriendToCircle(_this.selectedFriends[i].id, _this.circle.id).subscribe();
            }
            // add circle as a child
            for (var i = 0; i < _this.selectedParentCircles.length; i++) {
                _this.circlesService.assignChildCircle(_this.selectedParentCircles[i].id, _this.circle.id).subscribe();
            }
            // add children circles
            for (var i = 0; i < _this.selectedChildCircles.length; i++) {
                _this.circlesService.assignChildCircle(_this.circle.id, _this.selectedChildCircles[i].id).subscribe();
            }
            _this.router.navigate(['/app/friends/', _this.circle.id]);
        });
    };
    CirclesAddComponent.prototype.getAllCircles = function () {
        var _this = this;
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var circle = new __WEBPACK_IMPORTED_MODULE_5__circle__["a" /* Circle */](name_1, id);
                if (_this.allCircles) {
                    _this.allCircles.push(circle);
                }
                else {
                    _this.allCircles = [circle];
                }
            }
        });
    };
    CirclesAddComponent.prototype.getAllFriends = function () {
        var _this = this;
        this.friendsService.getAllFriends()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_2 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var id = data['json_list'][i]['id'];
                var profile = new __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* Profile */](name_2, email, id);
                if (_this.friends) {
                    _this.friends.push(profile);
                }
                else {
                    _this.friends = [profile];
                }
            }
        });
    };
    CirclesAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CirclesAddComponent.prototype.ngOnInit = function () {
        this.circle = new __WEBPACK_IMPORTED_MODULE_5__circle__["a" /* Circle */]('', 123);
        this.selectedParentCircles = [];
        this.selectedChildCircles = [];
        this.selectedFriends = [];
        this.getAllCircles();
        this.getAllFriends();
    };
    CirclesAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-circles-add',
            template: __webpack_require__("./project/static/app/circles/add/circles.add.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/add/circles.add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__circles_service__["a" /* CirclesService */],
            __WEBPACK_IMPORTED_MODULE_4__friends_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], CirclesAddComponent);
    return CirclesAddComponent;
}());



/***/ }),

/***/ "./project/static/app/circles/circle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
var Circle = /** @class */ (function () {
    function Circle(name, _id, _friends, _parentCircles, _childCircles) {
        this.name = name;
        this._id = _id;
        this._friends = _friends;
        this._parentCircles = _parentCircles;
        this._childCircles = _childCircles;
    }
    Object.defineProperty(Circle.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "friends", {
        get: function () {
            return this._friends;
        },
        set: function (friends) {
            this._friends = friends;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "parentCircles", {
        get: function () {
            return this.parentCircles;
        },
        set: function (parentCircles) {
            this.parentCircles = parentCircles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "childCircles", {
        get: function () {
            return this.childCircles;
        },
        set: function (childCircles) {
            this.childCircles = childCircles;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());



/***/ }),

/***/ "./project/static/app/circles/circles.component.css":
/***/ (function(module, exports) {

module.exports = ".circles {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\nspan.badge {\n  line-height: 44px;\n}\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n}\n.network-canvas {\n  width: 100%;\n  height: 100vh;\n}\n"

/***/ }),

/***/ "./project/static/app/circles/circles.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"network-canvas\"\n    [visNetwork]=\"visNetwork\"\n    [visNetworkData]=\"visNetworkData\"\n    [visNetworkOptions]=\"visNetworkOptions\"\n    (initialized)=\"networkInitialized()\"></div>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a routerLink=\"/app/home/add\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">add</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/circles/circles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network__ = __webpack_require__("./node_modules/ng2-vis/components/network/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExampleNetworkData = /** @class */ (function () {
    function ExampleNetworkData() {
    }
    return ExampleNetworkData;
}());
var CirclesComponent = /** @class */ (function () {
    function CirclesComponent(circlesService, friendsService, visNetworkService, router) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.visNetworkService = visNetworkService;
        this.router = router;
        this.nodes = new __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network__["VisNodes"]([]);
        this.edges = new __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network__["VisEdges"]([]);
        this.visNetwork = 'networkId1';
    }
    CirclesComponent.prototype.getAllCircles = function () {
        var _this = this;
        var myVillageNode = {
            id: 0,
            label: 'myVillage',
            color: '#80ccc5',
            mass: 1,
            shape: 'circle',
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.5)',
                size: 10,
                x: -3,
                y: 3,
            },
            font: {
                face: 'sayless',
                size: 20,
            },
        };
        this.nodes.add(myVillageNode);
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var parent_id = (data['json_list'][i]['parent_id']) ?
                    data['json_list'][i]['parent_id'] : 0;
                var myNode = {
                    id: id,
                    label: name_1,
                    color: '#80ccc5',
                    mass: 2,
                    shape: 'circle',
                    shadow: {
                        enabled: true,
                        color: 'rgba(0,0,0,0.2)',
                        size: 10,
                        x: -3,
                        y: 3,
                    },
                    font: {
                        face: 'Roboto',
                        size: 18,
                    },
                };
                _this.nodes.add(myNode);
                _this.edges.add({ from: parent_id, to: id });
            }
            _this.visNetworkService.fit(_this.visNetwork);
        });
    };
    CirclesComponent.prototype.networkInitialized = function () {
        var _this = this;
        this.visNetworkService.on(this.visNetwork, 'click');
        this.visNetworkService.click
            .subscribe(function (eventData) {
            if (eventData[0] === _this.visNetwork) {
                var id = eventData[1].nodes[0];
                _this.router.navigate(['/app/friends/', id]);
            }
        });
    };
    CirclesComponent.prototype.ngOnInit = function () {
        this.getAllCircles();
        var nodes = this.nodes;
        var edges = this.edges;
        this.visNetworkData = {
            nodes: nodes,
            edges: edges,
        };
        this.visNetworkOptions = {};
    };
    CirclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-circles',
            template: __webpack_require__("./project/static/app/circles/circles.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/circles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__circles_service__["a" /* CirclesService */],
            __WEBPACK_IMPORTED_MODULE_2__friends_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_vis_components_network__["VisNetworkService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CirclesComponent);
    return CirclesComponent;
}());



/***/ }),

/***/ "./project/static/app/circles/circles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CirclesService = /** @class */ (function () {
    function CirclesService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @function getCircles
     * get ALL circles
     */
    CirclesService.prototype.getCircles = function () {
        return this.http.get('/showallcircles/');
    };
    /**
     * @function getChildCircles
     * @param {number} id - get children for this circle ID
     * @example
     * {
        circle_id: id
       }
     */
    CirclesService.prototype.getChildCircles = function (id) {
        var object = {
            circle_id: id
        };
        return this.http.post('/getchildcircles', object, this.httpOptions);
    };
    /**
     * @function getCircleInfo
     * @param {number} id - get name for this circle ID
     * @example
     * {
       id: id
     }
     */
    CirclesService.prototype.getCircleInfo = function (id) {
        var object = {
            circle_id: id
        };
        return this.http.post('/getcircleinfo', object, this.httpOptions);
    };
    /**
     * @function addCircle
     * @param {string} name - name of circle to add
     * @example
     * {
         circle_name: name,
       }
     */
    CirclesService.prototype.addCircle = function (name) {
        var object = {
            circle_name: name,
        };
        return this.http.post('/addcircle/', object, this.httpOptions);
    };
    /**
     * @function addChildCircle
     * @param {number} parent_id - parent circle
     * @param {number} child_id - child circle
     * @example
     * {
         parent_id: parent_id,
         child_id: child_id,
       }
     */
    CirclesService.prototype.addChildCircle = function (parent_id, child_id) {
        var object = {
            parent_id: parent_id,
            circle_name: child_id,
        };
        return this.http.post('/addchildcircle/', object, this.httpOptions);
    };
    /**
     * @function assignChildCircle
     * @param {number} parent_id - parent circle
     * @param {number} child_id - child circle
     * @example
     * {
         parent_id: parent_id,
         child_id: child_id,
       }
     */
    CirclesService.prototype.assignChildCircle = function (parent_id, child_id) {
        var object = {
            parent_id: parent_id,
            child_id: child_id,
        };
        return this.http.post('/assignchildcircle', object, this.httpOptions);
    };
    /**
     * @function addFriendToCircle
     * @param {number} friend_id - ID of friend to add
     * @param {number} circle_id - ID of circle to add friend to
     * @example
     * {
         friend_id: friend_id,
         circle_id: circle_id,
       }
     */
    CirclesService.prototype.addFriendToCircle = function (friend_id, circle_id) {
        var object = {
            friend_id: friend_id,
            circle_id: circle_id,
        };
        return this.http.post('/addtocircle/', object, this.httpOptions);
    };
    /**
     * @function removeFriendFromCircle
     * @param {number} friend_id - ID of friend to remove
     * @param {number} circle_id - ID of circle to remove friend from
     * @example
     * {
         friend_id: friend_id,
         circle_id: circle_id,
       }
     */
    CirclesService.prototype.removeFriendFromCircle = function (friend_id, circle_id) {
        var object = {
            friend_id: friend_id,
            circle_id: circle_id,
        };
        return this.http.post('/removefriendfromcircle', object, this.httpOptions);
    };
    /**
     * @function deleteCircle
     * @param {number} id - ID of circle to be deleted
     * @example
     * {
         circle_id: id,
       }
     */
    CirclesService.prototype.deleteCircle = function (id) {
        var object = {
            circle_id: id,
        };
        return this.http.post('/deletecircle', object, this.httpOptions);
    };
    CirclesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CirclesService);
    return CirclesService;
}());



/***/ }),

/***/ "./project/static/app/circles/edit/circles.edit.component.css":
/***/ (function(module, exports) {

module.exports = "\n.full-width {\n  width: 100%;\n}\n\n.delete {\n  color: #9e9e9e;\n  margin-left: 1em;\n}\n\n.delete:hover {\n  text-decoration: underline;\n}\n\n/* card panel UI */\n\n.card-panel .row {\n  margin-bottom: 0;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\n.chipListRow {\n  margin-left: 0em;\n  margin-bottom: 1.5em!important;\n}\n\nbutton {\n  margin-bottom: 1.5em;\n}\n"

/***/ }),

/***/ "./project/static/app/circles/edit/circles.edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n    <i class=\"material-icons\">navigate_before</i>\n  </a>\n\n  <div class=\"row\">\n    <h2 class=\"center\">edit circle</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <mat-form-field>\n            <input matInput placeholder=\"circle name\" [(ngModel)]=\"name\" name=\"name\">\n          </mat-form-field>\n        </div>\n\n        <h4>subgroups <span class=\"badge\" (click)=\"openChildCirclesDialog()\"><a><i class=\"material-icons\">add</i></a></span></h4>\n        <div *ngIf=\"childCircles\" class=\"row chipListRow\">\n          <mat-chip-list #childCirclesList>\n            <mat-chip *ngFor=\"let circle of childCircles\" (remove)=\"removeChildCircle(circle)\">\n                {{circle.name}}\n              <mat-icon matChipRemove>cancel</mat-icon>\n            </mat-chip>\n          </mat-chip-list>\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h4>parent groups <span class=\"badge\"><a (click)=\"openParentCirclesDialog()\"><i class=\"material-icons\">add</i></a></span></h4>\n        <div *ngIf=\"parentCircles\" class=\"row chipListRow\">\n          <mat-chip-list #childCirclesList>\n            <mat-chip *ngFor=\"let circle of parentCircles\" (remove)=\"removeParentCircle(circle)\">\n                {{circle.name}}\n              <mat-icon matChipRemove>cancel</mat-icon>\n            </mat-chip>\n          </mat-chip-list>\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h4>friends <span class=\"badge\"><a (click)=\"openFriendsDialog()\"><i class=\"material-icons\">add</i></a></span></h4>\n        <div *ngIf=\"friends\" class=\"row chipListRow\">\n          <mat-chip-list #childCirclesList>\n            <mat-chip *ngFor=\"let friend of friends\" (remove)=\"removeFriend(friend)\">\n                {{friend.name}}\n              <mat-icon matChipRemove>cancel</mat-icon>\n            </mat-chip>\n          </mat-chip-list>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button routerLink=\"/app/friends/{{routeId}}\" class=\"btn waves-effect waves-light\" name=\"action\">Done</button>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <a class=\"delete\" (click)=\"deleteCircle()\">Delete circle</a>\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/circles/edit/circles.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CirclesEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CirclesEditComponent = /** @class */ (function () {
    function CirclesEditComponent(circlesService, friendsService, router, route, location, dialog) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
    }
    CirclesEditComponent.prototype.getCircleInfo = function (id) {
        var _this = this;
        this.circlesService.getCircleInfo(id)
            .subscribe(function (data) {
            _this.name = data['circle_name'];
        });
    };
    CirclesEditComponent.prototype.getChildCircles = function (id) {
        var _this = this;
        this.circlesService.getChildCircles(id)
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i].circle_name;
                var id_1 = data['json_list'][i].id;
                var circle = new __WEBPACK_IMPORTED_MODULE_6__circle__["a" /* Circle */](name_1, id_1);
                if (_this.childCircles) {
                    _this.childCircles.push(circle);
                }
                else {
                    _this.childCircles = [circle];
                }
            }
        });
    };
    CirclesEditComponent.prototype.getFriendsForCircle = function (circle_id) {
        var _this = this;
        this.friendsService.getFriends(circle_id)
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var friend_id = data['json_list'][i]['id'];
                var name_2 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* Profile */](name_2, email, friend_id);
                if (_this.friends) {
                    _this.friends.push(friend);
                }
                else {
                    _this.friends = [friend];
                }
            }
        });
    };
    CirclesEditComponent.prototype.getAllCircles = function () {
        var _this = this;
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_3 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var circle = new __WEBPACK_IMPORTED_MODULE_6__circle__["a" /* Circle */](name_3, id);
                if (_this.allCircles) {
                    _this.allCircles.push(circle);
                }
                else {
                    _this.allCircles = [circle];
                }
            }
        });
    };
    CirclesEditComponent.prototype.getAllFriends = function () {
        var _this = this;
        this.friendsService.getAllFriends()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var id = data['json_list'][i]['id'];
                var name_4 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* Profile */](name_4, email, id);
                if (_this.allFriends) {
                    _this.allFriends.push(friend);
                }
                else {
                    _this.allFriends = [friend];
                }
            }
        });
    };
    CirclesEditComponent.prototype.removeFriend = function (friend) {
        var index = this.friends.indexOf(friend);
        if (index >= 0)
            this.friends.splice(index, 1);
        this.circlesService.removeFriendFromCircle(friend.id, this.routeId)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    CirclesEditComponent.prototype.removeChildCircle = function (circle) {
        var index = this.childCircles.indexOf(circle);
        if (index >= 0)
            this.childCircles.splice(index, 1);
        //@TODO backend
    };
    CirclesEditComponent.prototype.removeParentCircle = function (circle) {
        var index = this.parentCircles.indexOf(circle);
        if (index >= 0)
            this.parentCircles.splice(index, 1);
        //@TODO backend
    };
    CirclesEditComponent.prototype.deleteCircle = function () {
        if (confirm('Are you sure you want to delete this circle?')) {
            this.circlesService.deleteCircle(this.routeId).subscribe();
            this.router.navigate(['/app/home']);
        }
    };
    CirclesEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    CirclesEditComponent.prototype.ngOnInit = function () {
        this.name = 'this circle';
        this.routeId = +this.route.snapshot.paramMap.get('id');
        if (this.routeId) {
            this.getCircleInfo(this.routeId);
            this.getFriendsForCircle(this.routeId);
            this.getChildCircles(this.routeId);
            this.getAllCircles();
            this.getAllFriends();
        }
    };
    CirclesEditComponent.prototype.openChildCirclesDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddDialog, {
            width: '30em',
            data: { for: 'sub groups', list: this.allCircles, selected: this.childCircles }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                for (var i = 0; i < result.selected.length; i++) {
                    _this.circlesService.assignChildCircle(_this.routeId, result.selected[i].id).subscribe();
                }
            }
        });
    };
    CirclesEditComponent.prototype.openParentCirclesDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddDialog, {
            width: '30em',
            data: { for: 'parent groups', list: this.allCircles, selected: this.parentCircles }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                for (var i = 0; i < result.selected.length; i++) {
                    _this.circlesService.assignChildCircle(result.selected[i].id, _this.routeId).subscribe();
                }
            }
        });
    };
    CirclesEditComponent.prototype.openFriendsDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddDialog, {
            width: '30em',
            data: { for: 'friends', list: this.allFriends, selected: this.friends }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                for (var i = 0; i < result.selected.length; i++) {
                    // @TODO 500 error on this response?!
                    _this.circlesService.addFriendToCircle(result.selected[i].id, _this.routeId).subscribe();
                }
            }
        });
    };
    CirclesEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-circles-edit',
            template: __webpack_require__("./project/static/app/circles/edit/circles.edit.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/edit/circles.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__circles_service__["a" /* CirclesService */], __WEBPACK_IMPORTED_MODULE_5__friends_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], CirclesEditComponent);
    return CirclesEditComponent;
}());

var AddDialog = /** @class */ (function () {
    function AddDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-dialog',
            template: "\n  <h2 mat-dialog-title>Add {{data.for}}</h2>\n  <mat-dialog-content>\n    <mat-form-field>\n      <mat-select placeholder=\"Add {{data.for}}\" multiple name=\"data.selected\" [(value)]=\"data.selected\">\n        <mat-option *ngFor=\"let x of data.list\" [value]=\"x\">{{x.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"right\">\n    <button mat-button (click)=onNoClick()>Cancel</button>\n    <button mat-button (click)=\"dialogRef.close(data)\">Done</button>\n  </mat-dialog-actions>\n",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], AddDialog);
    return AddDialog;
}());



/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.css":
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n    <i class=\"material-icons\">navigate_before</i>\n  </a>\n\n  <div class=\"row\">\n    <h2 class=\"center\">add friend</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\"\n          (ngSubmit)=\"addFriend()\" #addFriendForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <input matInput placeholder=\"name\" [(ngModel)]=\"friend.name\" name=\"friend.name\">\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <input matInput type=\"email\" placeholder=\"email\" [(ngModel)]=\"friend.email\" name=\"friend.email\">\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <mat-select placeholder=\"add to a circle\" multiple [(value)]=\"friend.circles\">\n                <mat-option *ngFor=\"let circle of circles\" [value]=\"circle\">{{circle.name}}</mat-option>\n                <!-- <mat-option>\n                  <input matInput placeholder=\"Add a new circle\">\n                </mat-option> -->\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                    [disabled]=\"!addFriendForm.form.valid\">\n              Add Friend <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circles_circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FriendsAddComponent = /** @class */ (function () {
    function FriendsAddComponent(circlesService, friendsService, router, location) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.router = router;
        this.location = location;
    }
    FriendsAddComponent.prototype.addFriend = function () {
        this.friendsService.addFriend(this.friend.name, this.friend.email, this.friend.circles)
            .subscribe();
        // @TODO: for some reason, causes a post error to add this nav into subsrcibe()
        this.router.navigate(['/app/friends']);
    };
    FriendsAddComponent.prototype.getAllCircles = function () {
        var _this = this;
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var circle = new __WEBPACK_IMPORTED_MODULE_6__circles_circle__["a" /* Circle */](name_1, id);
                if (_this.circles) {
                    _this.circles.push(circle);
                }
                else {
                    _this.circles = [circle];
                }
            }
        });
    };
    FriendsAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    FriendsAddComponent.prototype.ngOnInit = function () {
        this.friend = new __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* Profile */]('', '', 0);
        this.getAllCircles();
    };
    FriendsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends-add',
            template: __webpack_require__("./project/static/app/friends/add/friends.add.component.html"),
            styles: [__webpack_require__("./project/static/app/friends/add/friends.add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__circles_circles_service__["a" /* CirclesService */],
            __WEBPACK_IMPORTED_MODULE_3__friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], FriendsAddComponent);
    return FriendsAddComponent;
}());



/***/ }),

/***/ "./project/static/app/friends/friends.component.css":
/***/ (function(module, exports) {

module.exports = ".friends {\n  width: 23em;\n}\n\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n}\n\n.mat-raised-button {\n  margin-left: 1.5em;\n}\n"

/***/ }),

/***/ "./project/static/app/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col\">\n      <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n        <i class=\"material-icons\">navigate_before</i>\n      </a>\n    </div>\n    <div class=\"col-1\" *ngIf=\"name\">\n      <h1 class=\"center\">{{name}}</h1>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"childCircles\">\n    <mat-tab-group>\n      <mat-tab label=\"all {{name}} friends\">\n        <mat-grid-list cols=\"2\" rowHeight=\"2.5:1\">\n          <mat-grid-tile  *ngFor=\"let friend of friends\">\n            <mat-card class=\"friends\" routerLink=\"/app/profile/{{friend.id}}\">\n              <mat-card-title-group>\n                <img mat-card-sm-image *ngIf=\"friend.img\" src=\"{{friend.img}}\" alt=\"Photo of {{friend.name}}\">\n                <mat-card-title>{{friend.name}}</mat-card-title>\n              </mat-card-title-group>\n            </mat-card>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n      <span *ngFor=\"let child of childCircles\">\n        <mat-tab label=\"{{child.name}}\">\n          <mat-grid-list cols=\"2\" rowHeight=\"2.5:1\">\n            <mat-grid-tile  *ngFor=\"let friend of child.friends\">\n              <mat-card class=\"friends\" routerLink=\"/app/profile/{{friend.id}}\">\n                <mat-card-title-group>\n                  <img mat-card-sm-image *ngIf=\"friend.img\" src=\"{{friend.img}}\" alt=\"Photo of {{friend.name}}\">\n                  <mat-card-title>{{friend.name}}</mat-card-title>\n                </mat-card-title-group>\n              </mat-card>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </mat-tab>\n      </span>\n    </mat-tab-group>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!childCircles\">\n    <mat-grid-list cols=\"2\" rowHeight=\"2.5:1\">\n      <mat-grid-tile  *ngFor=\"let friend of friends\">\n        <mat-card class=\"friends\" routerLink=\"/app/profile/{{friend.id}}\">\n          <mat-card-title-group>\n            <img mat-card-sm-image *ngIf=\"friend.img\" src=\"{{friend.img}}\" alt=\"Photo of {{friend.name}}\">\n            <mat-card-title>{{friend.name}}</mat-card-title>\n          </mat-card-title-group>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a *ngIf=\"routeId\" routerLink=\"/app/circles/{{routeId}}/edit\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons teal lighten-2\">edit</i>\n    </a>\n    <a *ngIf=\"!routeId\" routerLink=\"/app/friends/add\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons teal lighten-2\">add</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_service__ = __webpack_require__("./project/static/app/friends/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__circles_circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(friendsService, circlesService, route, location) {
        this.friendsService = friendsService;
        this.circlesService = circlesService;
        this.route = route;
        this.location = location;
    }
    FriendsComponent.prototype.showAllFriends = function () {
        var _this = this;
        this.friendsService.getAllFriends()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var id = data['json_list'][i]['id'];
                var name_1 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* Profile */](name_1, email, id);
                if (_this.friends) {
                    _this.friends.push(friend);
                }
                else {
                    _this.friends = [friend];
                }
            }
        });
    };
    FriendsComponent.prototype.getFriendsForCircle = function (circle_id) {
        var _this = this;
        this.friendsService.getFriends(circle_id)
            .subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data['json_list'].length; i++) {
                var friend_id = data['json_list'][i]['id'];
                var name_2 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* Profile */](name_2, email, friend_id);
                if (_this.friends) {
                    _this.friends.push(friend);
                }
                else {
                    _this.friends = [friend];
                }
            }
        });
    };
    FriendsComponent.prototype.getFriendsForChildCircle = function (circle) {
        var _this = this;
        this.friendsService.getFriends(circle.id)
            .subscribe(function (data) {
            var _loop_1 = function (i) {
                var id = data['json_list'][i]['id'];
                if (_this.friends.find(function (match) { return match.id === id; })) {
                    var name_3 = data['json_list'][i]['name'];
                    var email = data['json_list'][i]['email'];
                    var friend = new __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* Profile */](name_3, email, id);
                    if (circle.friends) {
                        circle.friends.push(friend);
                    }
                    else {
                        circle.friends = [friend];
                    }
                }
            };
            for (var i = 0; i < data['json_list'].length; i++) {
                _loop_1(i);
            }
        });
        return circle;
    };
    FriendsComponent.prototype.getCircleInfo = function (id) {
        var _this = this;
        this.circlesService.getCircleInfo(id)
            .subscribe(function (data) {
            _this.name = data['circle_name'];
        });
    };
    FriendsComponent.prototype.getChildCircles = function (id) {
        var _this = this;
        this.circlesService.getChildCircles(id)
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_4 = data['json_list'][i].circle_name;
                var id_1 = data['json_list'][i].id;
                var circle = new __WEBPACK_IMPORTED_MODULE_5__circles_circle__["a" /* Circle */](name_4, id_1);
                circle = _this.getFriendsForChildCircle(circle);
                if (_this.childCircles) {
                    _this.childCircles.push(circle);
                }
                else {
                    _this.childCircles = [circle];
                }
            }
        });
    };
    FriendsComponent.prototype.goBack = function () {
        this.location.back();
    };
    FriendsComponent.prototype.ngOnInit = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
        if (this.routeId) {
            this.getCircleInfo(this.routeId);
            this.getFriendsForCircle(this.routeId);
            this.getChildCircles(this.routeId);
        }
        else {
            this.name = "all friends";
            this.showAllFriends();
        }
    };
    FriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__("./project/static/app/friends/friends.component.html"),
            styles: [__webpack_require__("./project/static/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_4__circles_circles_service__["a" /* CirclesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./project/static/app/friends/friends.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @function getAllFriends
     * get ALL friends
     */
    FriendsService.prototype.getAllFriends = function () {
        return this.http.get('/showallfriends/');
    };
    /**
     * @function getFriends
     * @param {number} id - get friends for this circle ID
     * @example
     * {
       id: id
     }
     */
    FriendsService.prototype.getFriends = function (id) {
        var object = {
            id: id
        };
        return this.http.post('/friendsincircle/', object, this.httpOptions);
    };
    /**
     * @function addFriend
     * @param {string} name - friend's (full) name
     * @param {string} email - friend's email
     * @param {Circle[]} circles - circles to add friend to
     * @example
     * {
         name: name,
         email: email,
         addToCircle: addToCircle,
         circles: backendCircles,
       }
     */
    FriendsService.prototype.addFriend = function (name, email, circles) {
        var addToCircle = 0;
        var backendCircles = [];
        if (circles) {
            addToCircle = 1;
            for (var i = 0; i < circles.length; i++) {
                backendCircles.push(circles[i].id);
            }
        }
        var object = {
            name: name,
            email: email,
            addToCircle: addToCircle,
            circles: backendCircles,
        };
        return this.http.post('/addfriend/', object, this.httpOptions);
    };
    /**
     * @function addToCircle
     * @param {string} circle
     * @example
     * {
         circle_name: circle,
       }
     */
    FriendsService.prototype.addToCircle = function (circle) {
        var object = {
            circle_name: circle,
        };
        return this.http.post('/addtocircle/', object, this.httpOptions);
    };
    FriendsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./project/static/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./project/static/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ".friends {\n  width: 23em;\n}\n\n.mat-raised-button {\n  margin-left: 1.5em;\n}\n"

/***/ }),

/***/ "./project/static/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col\">\n      <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n        <i class=\"material-icons\">navigate_before</i>\n      </a>\n    </div>\n    <div class=\"col-1\" *ngIf=\"name\">\n      <h1 class=\"center\">this week's notifications</h1>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"notifications\">\n\n  </div>\n\n  <div class=\"row\" *ngIf=\"!notifications\">\n\n  </div>\n"

/***/ }),

/***/ "./project/static/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_service__ = __webpack_require__("./project/static/app/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notificationsService, route, location) {
        this.notificationsService = notificationsService;
        this.route = route;
        this.location = location;
    }
    NotificationsComponent.prototype.getReminders = function () {
        this.notificationsService.getReminders()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    NotificationsComponent.prototype.setLastContact = function (date, id) {
        this.notificationsService.setLastContact(date, id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    NotificationsComponent.prototype.setReminder = function (frequency, id) {
        var _this = this;
        this.notificationsService.setReminder(frequency, id)
            .subscribe(function (data) {
            console.log(data);
            _this.getReminders();
        });
    };
    NotificationsComponent.prototype.goBack = function () {
        this.location.back();
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getReminders();
        this.setReminder(1, 11);
        this.setLastContact(new Date(), 11);
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./project/static/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./project/static/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./project/static/app/notifications/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @function getReminders
     */
    NotificationsService.prototype.getReminders = function () {
        return this.http.get('/getreminders');
    };
    /**
     * @function setReminder
     * @param {number} frequency - frequency
     * @param {number} id - friend ID
     * @example
     * {
         date: frequency,
         friend_id: id
       }
     */
    NotificationsService.prototype.setReminder = function (frequency, id) {
        var id_object = {
            frequency: frequency,
            friend_id: id
        }; //create JSON object
        return this.http.post('/setreminderfrequency', id_object, this.httpOptions);
    };
    /**
     * @function setReminder
     * @param {number} frequency - frequency
     * @param {number} id - friend ID
     * @example
     * {
         date: frequency,
         friend_id: id
       }
     */
    NotificationsService.prototype.setLastContact = function (date, id) {
        var id_object = {
            date: date,
            friend_id: id
        }; //create JSON object
        return this.http.post('/setlastcontacted', id_object, this.httpOptions);
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\nh4 {\n  font-size: 1.64rem;\n}\n\n.label {\n  font-size: .8rem;\n  color: rgba(0, 0, 0, 0.54)!important;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.delete {\n  color: #9e9e9e;\n}\n\n.delete:hover {\n  text-decoration: underline;\n}\n\n/* card panel UI */\n\n.card-panel .row {\n  margin-bottom: 0;\n}\n\n.card-panel .mat-form-field {\n  width: 90%;\n  margin: 1em\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.card-panel h5 {\n  margin-left: 0.5rem;\n  margin-top: 1.5rem;\n}\n\n.card-panel table {\n  margin-left: .5em;\n}\n\n.card-panel table .mat-form-field {\n  margin: 0;\n}\n\n/* card action UI */\n\nmat-icon {\n  margin-right: 0.5em;\n}\n\ninput.mat-input-element {\n  border-bottom: none;\n  margin: -0.0625em 0 0 0;\n  height: 100%;\n}\n\ninput.mat-input-element:focus,\ninput[type=email].mat-input-element:focus,\ninput[type=tel].mat-input-element:focus,\ninput[type=date].mat-input-element:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-bottom: none;\n  height: 100%;\n}\n\n.card-action {\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\" >\n    <i class=\"material-icons\">navigate_before</i>\n  </a>\n\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <div class=\"card body-font\">\n        <div class=\"card-image\">\n          <img (click)='openPhotoDialog()' src=\"{{model._img}}\">\n        </div>\n        <div id=\"sidebar-content\">\n          <div class=\"card-content\">\n            <h4>circles <span class=\"badge\" (click)=\"openCirclesDialog()\"><a><i class=\"material-icons\">add</i></a></span></h4>\n            <div class=\"row chipListRow\">\n              <mat-chip-list>\n                <mat-chip *ngFor=\"let circle of model.circles\" (remove)=\"removeCircle(circle)\">\n                    {{circle.name}}\n                  <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n              </mat-chip-list>\n            </div>\n          </div>\n          <div class=\"card-action\">\n            <div class=\"row\">\n              <mat-form-field>\n                <mat-icon matPrefix>email</mat-icon>\n                <input type=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"model.email\" name=\"email\">\n              </mat-form-field>\n            </div>\n\n            <div class=\"row\">\n              <mat-form-field>\n                <mat-icon matPrefix>phone</mat-icon>\n                <input type=\"tel\" matInput placeholder=\"Phone\" [(ngModel)]=\"model.phone\" name=\"phone\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <mat-divider></mat-divider>\n\n          <div class=\"card-content\">\n            <a class=\"delete\" (click)=\"deleteProfile()\">Delete {{model.name}}'s profile</a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s1\"></div>\n\n    <div class=\"col s7\">\n      <div class=\"card-panel\">\n        <div class=\"row\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"row\">\n          <mat-form-field>\n            <input matInput placeholder=\"Job\" [(ngModel)]=\"model.job\" name=\"job\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"row\">\n          <mat-form-field>\n            <input matInput placeholder=\"Location\" [(ngModel)]=\"model.location\" name=\"location\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"row\">\n          <h5 class=\"body-font\">\n            important dates <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </h5>\n          <table cellspacing=\"0\">\n            <tr>\n              <td><mat-form-field>\n                <input matInput placeholder=\"Occassion\">\n              </mat-form-field></td>\n              <td><mat-form-field>\n                <input type=\"date\" matInput>\n              </mat-form-field></td>\n            </tr>\n          </table>\n        </div>\n\n        <div class=\"row\">\n          <h5 class=\"body-font\">\n            important names <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </h5>\n          <table cellspacing=\"0\">\n            <tr>\n              <td><mat-form-field>\n                <input matInput placeholder=\"Relationship\">\n              </mat-form-field></td>\n              <td><mat-form-field>\n                <input matInput placeholder=\"Name\">\n              </mat-form-field></td>\n            </tr>\n        </table>\n        </div>\n\n        <div class=\"row\">\n          <h5 class=\"body-font\">notes</h5>\n          <mat-form-field>\n            <textarea matInput [(ngModel)]=\"model.notes\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div class=\"row\">\n          <button class=\"btn waves-effect waves-light right\" (click)=\"editProfile()\">Save Changes</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProfileEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhotoDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("./project/static/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__circles_circles_service__ = __webpack_require__("./project/static/app/circles/circles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__circles_circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(profileService, circlesService, route, router, location, dialog) {
        this.profileService = profileService;
        this.circlesService = circlesService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.dialog = dialog;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__profile__["a" /* Profile */]('', '', 0);
    }
    ProfileEditComponent.prototype.getProfile = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
    };
    ProfileEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProfileEditComponent.prototype.getMyProfile = function () {
        var _this = this;
        this.profileService.getMyProfile()
            .subscribe(function (data) {
            if (data['name'])
                _this.model.name = data['name'];
            if (data['email'])
                _this.model.email = data['email'];
            if (data['id'])
                _this.model.id = data['id'];
            (data['img']) ? _this.model.img = data['img'] :
                _this.model.img = 'assets/images/profile.png';
            if (data['circles'])
                _this.model.circles = data['circles'];
            if (data['phone_number'])
                _this.model.phone = data['phone_number'];
            if (data['location'])
                _this.model.location = data['location'];
            if (data['notes'])
                _this.model.notes = data['notes'];
            if (data['job'])
                _this.model.job = data['job'];
        });
    };
    ProfileEditComponent.prototype.getFriendProfile = function (id) {
        var _this = this;
        this.profileService.getFriendProfile(id)
            .subscribe(function (data) {
            if (data['name'])
                _this.model.name = data['name'];
            if (data['email'])
                _this.model.email = data['email'];
            if (data['id'])
                _this.model.id = data['id'];
            (data['img']) ? _this.model.img = data['img'] :
                _this.model.img = 'assets/images/profile.png';
            if (data['circles'])
                _this.model.circles = data['circles'];
            if (data['phone_number'])
                _this.model.phone = data['phone_number'];
            if (data['location'])
                _this.model.location = data['location'];
            if (data['notes'])
                _this.model.notes = data['notes'];
            if (data['job'])
                _this.model.job = data['job'];
        });
        this.getCirclesForFriend(this.routeId);
    };
    ProfileEditComponent.prototype.getCirclesForFriend = function (id) {
        var _this = this;
        this.profileService.getCirclesForFriend(id)
            .subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data['json_list'].length; i++) {
                if (_this.model.circles) {
                    _this.model.circles.push(new __WEBPACK_IMPORTED_MODULE_7__circles_circle__["a" /* Circle */](data['json_list'][i].circle_name, data['json_list'][i].id));
                }
                else {
                    _this.model.circles = [new __WEBPACK_IMPORTED_MODULE_7__circles_circle__["a" /* Circle */](data['json_list'][i].circle_name, data['json_list'][i].id)];
                }
            }
            console.log(_this.model.circles);
        });
    };
    ProfileEditComponent.prototype.getAllCircles = function () {
        var _this = this;
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var circle = new __WEBPACK_IMPORTED_MODULE_7__circles_circle__["a" /* Circle */](name_1, id);
                if (_this.allCircles) {
                    _this.allCircles.push(circle);
                }
                else {
                    _this.allCircles = [circle];
                }
            }
        });
    };
    ProfileEditComponent.prototype.editProfile = function () {
        if (!this.model.location) {
            this.model.location = '';
        }
        if (!this.model.phone) {
            this.model.phone = '';
        }
        if (!this.model.job) {
            this.model.job = '';
        }
        if (!this.model.notes) {
            this.model.notes = '';
        }
        this.profileService.updateProfile(this.model.id, this.model.location, this.model.notes, this.model.phone, this.model.job).subscribe();
        this.router.navigate(['/app/profile/', this.routeId]);
    };
    ProfileEditComponent.prototype.removeCircle = function (circle) {
        var index = this.model.circles.indexOf(circle);
        if (index >= 0)
            this.model.circles.splice(index, 1);
        this.circlesService.removeFriendFromCircle(this.routeId, circle.id).subscribe();
    };
    ProfileEditComponent.prototype.deleteProfile = function () {
        if (confirm('Are you sure you want to delete this profile?')) {
            this.profileService.deleteProfile(this.routeId).subscribe();
            this.router.navigate(['/app/friends']);
        }
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        this.getProfile();
        if (this.routeId == 0) {
            this.getMyProfile();
        }
        else {
            this.getFriendProfile(this.routeId);
            this.getAllCircles();
        }
    };
    ProfileEditComponent.prototype.openPhotoDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(PhotoDialog, {
            width: '30em',
            data: this.model.img
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.model.img = result;
            }
        });
    };
    ProfileEditComponent.prototype.openCirclesDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CirclesDialog, {
            width: '30em',
            data: { name: this.model.name, list: this.allCircles, selected: this.model.circles }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                for (var i = 0; i < result.selected.length; i++) {
                    // @TODO 500 error on this response?!
                    _this.circlesService.addFriendToCircle(_this.routeId, result.selected[i].id).subscribe();
                }
            }
        });
    };
    ProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__("./project/static/app/profile/edit/profile.edit.component.html"),
            styles: [__webpack_require__("./project/static/app/profile/edit/profile.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5__circles_circles_service__["a" /* CirclesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());

var PhotoDialog = /** @class */ (function () {
    function PhotoDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PhotoDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PhotoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-dialog',
            template: "\n    <h2 mat-dialog-title>Add or update profile photo</h2>\n    <mat-dialog-content>\n      <input matInput type=\"url\" name=\"data\" [(ngModel)]=\"data\">\n    </mat-dialog-content>\n    <mat-dialog-actions class=\"right\">\n      <button mat-button (click)=onNoClick()>Cancel</button>\n      <button mat-button (click)=\"dialogRef.close(data)\">Done</button>\n    </mat-dialog-actions>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], PhotoDialog);
    return PhotoDialog;
}());

var CirclesDialog = /** @class */ (function () {
    function CirclesDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CirclesDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CirclesDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'circles-dialog',
            template: "\n    <h2 mat-dialog-title>Add {{name}} to new circles</h2>\n    <mat-dialog-content>\n      <mat-form-field>\n        <mat-select placeholder=\"Add to circles\" multiple name=\"data.selected\" [(value)]=\"data.selected\">\n          <mat-option *ngFor=\"let x of data.list\" [value]=\"x\">{{x.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-actions class=\"right\">\n      <button mat-button (click)=onNoClick()>Cancel</button>\n      <button mat-button (click)=\"dialogRef.close(data)\">Done</button>\n    </mat-dialog-actions>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], CirclesDialog);
    return CirclesDialog;
}());



/***/ }),

/***/ "./project/static/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 0rem;\n}\nh4 {\n  margin: 0 0 1.6rem 0;\n}\nh5 {\n  font-style: italic;\n  margin: 0rem 0 1.6rem 0;\n  color: #526165;\n}\n#sidebar-content>div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.card-action>a {\n  margin-right: 0!important;\n}\n"

/***/ }),

/***/ "./project/static/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a (click)=\"goBack()\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\" style=\"top: 14px; left: -135px;\">\n    <i class=\"material-icons\">navigate_before</i>\n  </a>\n\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <div class=\"card body-font\">\n        <div class=\"card-image\">\n          <img src=\"{{model._img}}\">\n        </div>\n        <div id=\"sidebar-content\">\n          <div class=\"card-content\">\n            <div class=\"chip\" *ngFor=\"let circle of model._circles\">\n              <a routerLink=\"/app/friends/{{circle.id}}\">{{circle.name}}</a>\n            </div>\n          </div>\n          <div class=\"card-action\">\n            <a *ngIf=\"model._email\" href=\"mailto:{{model._email}}\"><i class=\"material-icons\">email</i></a>\n            <a *ngIf=\"model._phone\" href=\"tel:{{model._phone}}\"><i class=\"material-icons\">phone</i></a>\n            <a *ngIf=\"model._extra\" href=\"{{model._extra}}\"><i class=\"material-icons\">explicit</i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s1\"></div>\n\n    <div class=\"col s7\">\n      <h1 class=\"secondary\">{{model._name}}</h1>\n      <h5 *ngIf=\"model._job\">{{model._job}}</h5>\n      <h4 *ngIf=\"model._location\"><i class=\"material-icons\">location_on</i> {{model._location}}</h4>\n      <p *ngIf=\"model._reminder\" class=\"body-font\">reminder set for every {{model._reminder}}</p>\n\n      <!-- dates -->\n      <div *ngIf=\"model._dates\" class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">important dates\n            <!-- <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span> -->\n          </span>\n          <ul *ngFor=\"let date of model._dates\" class=\"collection\">\n            <li class=\"collection-item\">{{date}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <!-- notes -->\n      <div *ngIf=\"model._notes\" class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">notes</span>\n          <p>{{model._notes}}</p>\n          <!-- <mat-form-field>\n            <textarea matInput>{{notes}}</textarea>\n          </mat-form-field> -->\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a routerLink=\"/app/profile/{{routeId}}/edit\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">edit</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("./project/static/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile__ = __webpack_require__("./project/static/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circles_circle__ = __webpack_require__("./project/static/app/circles/circle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, route, router, location, dialog) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.dialog = dialog;
        this.model = new __WEBPACK_IMPORTED_MODULE_5__profile__["a" /* Profile */]('', '', 0);
    }
    ProfileComponent.prototype.getMyProfile = function () {
        var _this = this;
        this.profileService.getMyProfile()
            .subscribe(function (data) {
            if (data['name'])
                _this.model.name = data['name'];
            if (data['email'])
                _this.model.email = data['email'];
            if (data['id'])
                _this.model.id = data['id'];
            if (data['img'])
                _this.model.img = data['img'];
            if (data['circles'])
                _this.model.circles = data['circles'];
            if (data['phone_number'])
                _this.model.phone = data['phone_number'];
            if (data['location'])
                _this.model.location = data['location'];
            if (data['job'])
                _this.model.job = data['job'];
        });
    };
    ProfileComponent.prototype.getFriendProfile = function (id) {
        var _this = this;
        this.profileService.getFriendProfile(id)
            .subscribe(function (data) {
            if (data['name'])
                _this.model.name = data['name'];
            if (data['email'])
                _this.model.email = data['email'];
            if (data['id'])
                _this.model.id = data['id'];
            (data['img']) ? _this.model.img = data['img'] :
                _this.model.img = 'assets/images/profile.png';
            if (data['circles'])
                _this.model.circles = data['circles'];
            if (data['phone_number'])
                _this.model.phone = data['phone_number'];
            if (data['location'])
                _this.model.location = data['location'];
            if (data['notes'])
                _this.model.notes = data['notes'];
            if (data['job'])
                _this.model.job = data['job'];
        });
        this.getCirclesForFriend(id);
    };
    ProfileComponent.prototype.getCirclesForFriend = function (id) {
        var _this = this;
        this.profileService.getCirclesForFriend(id)
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                if (_this.model.circles) {
                    _this.model.circles.push(new __WEBPACK_IMPORTED_MODULE_6__circles_circle__["a" /* Circle */](data['json_list'][i].circle_name, data['json_list'][i].id));
                }
                else {
                    _this.model.circles = [new __WEBPACK_IMPORTED_MODULE_6__circles_circle__["a" /* Circle */](data['json_list'][i].circle_name, data['json_list'][i].id)];
                }
            }
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.router.navigate(['/app/friends']);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
        if (this.routeId) {
            this.getFriendProfile(this.routeId);
        }
        else {
            this.getMyProfile();
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./project/static/app/profile/profile.component.html"),
            styles: [__webpack_require__("./project/static/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: "\n    <h2 mat-dialog-title>Add a note</h2>\n    <mat-dialog-content>\n      <textarea id=\"data\" name=\"data\" [(ngModel)]=\"data\">{{data}}</textarea>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button (click)=onNoClick()>Cancel</button>\n      <button mat-button (click)=\"dialogRef.close(data)\">Done</button>\n    </mat-dialog-actions>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./project/static/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @function getMyProfile
     * gets profile info for logged in user
     */
    ProfileService.prototype.getMyProfile = function () {
        return this.http.get('/userinfo');
    };
    /**
     * @function getFriendProfile
     * @param {number} id - friend ID
     * @example
     * {
         friend_id: id
       }
     */
    ProfileService.prototype.getFriendProfile = function (id) {
        var id_object = { friend_id: id }; //create JSON object
        return this.http.post('/friendinfo/', id_object, this.httpOptions);
    };
    /**
     * @function getCirclesForFriend
     * @param {number} id - friend ID
     * @example
     * {
        friend_id: id
      }
     */
    ProfileService.prototype.getCirclesForFriend = function (id) {
        var id_object = { friend_id: id }; //create JSON object
        return this.http.post('/circlesforfriend/', id_object, this.httpOptions);
    };
    /**
     * @function addNote
     * @param {string} note - new note
     * @example
     * {
         friend_id: id,
         note: note
       }
     */
    ProfileService.prototype.addNote = function (id, note) {
        var id_object = { friend_id: id, note: note }; //create JSON object
        return this.http.post('/addnote', id_object, this.httpOptions);
    };
    /**
     * @function updateProfile
     * @param {number} id - ID of profile being edited
     * @param {string} [location=''] - new location value
     * @param {string} [notes=''] - new notes value
     * @param {string} [phone=''] - new phone value
     * @param {string} [job=''] - new job value
     * @example
     * {
         friend_id: id,
         location: location,
         notes: notes,
         phone_number: phone,
         job: job
       }
     */
    ProfileService.prototype.updateProfile = function (id, location, notes, phone, job) {
        var id_object = {
            friend_id: id,
            location: location,
            notes: notes,
            phone_number: phone,
            job: job
        };
        return this.http.post('/updatefriendinfo', id_object, this.httpOptions);
    };
    /**
     * @function deleteProfile
     * @param {number} id - ID of profile to be deleted
     * @example
     * {
         friend_id: id,
       }
     */
    ProfileService.prototype.deleteProfile = function (id) {
        var object = {
            friend_id: id,
        };
        return this.http.post('/deletefriend', object, this.httpOptions);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./project/static/app/profile/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(_name, _email, _id, _img, _circles, _phone, _location, _reminder, // < an object?
        _notes, _job) {
        this._name = _name;
        this._email = _email;
        this._id = _id;
        this._img = _img;
        this._circles = _circles;
        this._phone = _phone;
        this._location = _location;
        this._reminder = _reminder;
        this._notes = _notes;
        this._job = _job;
        this.img = 'assets/images/profile.png';
    }
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "img", {
        get: function () {
            return this._img;
        },
        set: function (img) {
            this._img = img;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "circles", {
        get: function () {
            return this._circles;
        },
        set: function (circles) {
            this._circles = circles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (phone) {
            this._phone = phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (location) {
            this._location = location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (notes) {
            this._notes = notes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "job", {
        get: function () {
            return this._job;
        },
        set: function (job) {
            this._job = job;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());



/***/ }),

/***/ "./project/static/environments/environment.ts":
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

/***/ "./project/static/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./project/static/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./project/static/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./project/static/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map