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

module.exports = "\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"secondary\" routerLink=\"/app/home\">myVillage</span>\n      <span class=\"example-spacer\"></span>\n      <div *ngIf=\"loggedIn == true\">\n        <a routerLink=\"/app/friends\"><i class=\"material-icons\">contacts</i></a>\n        <span class=\"example-spacer\"></span>\n        <a routerLink=\"/app/profile/0\"><i class=\"material-icons\">person</i></a>\n        <span class=\"example-spacer\"></span>\n        <a href='/logout'><i class=\"material-icons\">power_settings_new</i></a>\n        <span class=\"example-spacer\"></span>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div *ngIf=\"loggedIn == false\">\n    <div class=\"container\" id=\"splash\">\n      <h1>Welcome to myVillage!</h1>\n      <h2>get started with your community</h2>\n\n      <mat-tab-group>\n        <div class=\"label\">\n          <mat-tab label=\"login\">\n            <ng-template mat-tab-label>\n              <span class=\"mylabel\">login</span>\n            </ng-template>\n            <form class=\"col s8 offset-s2 card-panel form-signin\"\n                  (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"text\" class=\"validate\" id=\"email\" required\n                            [(ngModel)]=\"email\" name=\"email\">\n                    <label for=\"email\">Email</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"password\" class=\"validate\" id=\"password\" required\n                            [(ngModel)]=\"password\" name=\"password\">\n                    <label for=\"password\">Password</label>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                        [disabled]=\"!loginForm.form.valid\" >\n                  Sign in <i class=\"material-icons right\">send</i>\n                </button>\n              </div>\n            </form>\n          </mat-tab>\n        </div>\n\n        <mat-tab  label=\"register\">\n          <ng-template mat-tab-label>\n            <span class=\"mylabel\">register</span>\n          </ng-template>\n          <mat-horizontal-stepper #stepper=\"matHorizontalStepper\">\n            <ng-template matStepperIcon=\"edit\">\n              <mat-icon>done</mat-icon>\n            </ng-template>\n            <!-- @TODO figure out formgroup to make registration linear & required -->\n            <mat-step label=\"Login Details\">\n              <p>First, please enter your basic login information.</p>\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"text\" class=\"validate\" id=\"name\" required\n                            [(ngModel)]=\"name\" name=\"name\">\n                    <label for=\"name\">Name</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"email\" class=\"validate\" id=\"email\" required\n                            [(ngModel)]=\"email\" name=\"email\">\n                    <label for=\"email\">Email</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"password\" class=\"validate\" id=\"password\" required\n                            [(ngModel)]=\"password\" name=\"password\">\n                    <label for=\"password\">Password</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"password\" class=\"validate\" id=\"confirmPassword\" required\n                            [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\">\n                    <label for=\"confirmPassword\">Confirm Password</label>\n                  </div>\n                </div>\n              </div>\n              <div>\n                <button mat-button matStepperNext class=\"right\">Next</button>\n              </div>\n            </mat-step>\n            <mat-step label=\"Personal Info\">\n              <p>Tell us a little more about yourself</p>\n              <div class=\"section\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"text\" id=\"hometown\"\n                            [(ngModel)]=\"hometown.name\" name=\"hometown\">\n                    <label for=\"hometown\">Where's your hometown?</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input type=\"text\" id=\"school\"\n                            [(ngModel)]=\"school.name\" name=\"school\">\n                    <label for=\"school\">Where did you go to school?</label>\n                  </div>\n                </div>\n              </div>\n              <div>\n                <button mat-button matStepperNext class=\"right\">Next</button>\n                <button mat-button matStepperPrevious class=\"right\">Back</button>\n              </div>\n            </mat-step>\n            <mat-step label=\"Circles\">\n              <div *ngFor=\"let circle of circles\">\n                <p>Who are you closest friends from <strong>{{circle.name}}</strong>?</p>\n                <mat-form-field class=\"myChipList\">\n                  <mat-chip-list #friendList>\n                    <mat-chip *ngFor=\"let friend of circle.friends\" [removable]=\"removable\"\n                      (remove)=\"removeFriend(friend, circle)\">\n                        {{friend}}\n                      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <input [matChipInputFor]=\"friendList\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                      (matChipInputTokenEnd)=\"addFriend($event, circle)\">\n                  </mat-chip-list>\n                </mat-form-field>\n              </div>\n\n              <div>\n                <button id=\"finish\" mat-button matStepperNext class=\"right btn waves-effect waves-light\"\n                  (click)=\"register()\">Finish</button>\n                <button mat-button matStepperPrevious class=\"right\">Back</button>\n              </div>\n            </mat-step>\n            <mat-step>\n              <ng-template matStepLabel>Done</ng-template>\n              <!-- <mat-spinner></mat-spinner> -->\n              <div class=\"row center-align\">\n                <h4>Congratulations! You're all set up.</h4>\n                <a class=\"btn waves-effect waves-light\" (click)=\"login()\">Go to Dashboard</a>\n              </div>\n            </mat-step>\n          </mat-horizontal-stepper>\n\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n\n  <div *ngIf=\"loggedIn == true\" class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_service_1 = __webpack_require__("./project/static/app/app.service.ts");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var keycodes_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(appService, circlesService) {
        this.appService = appService;
        this.circlesService = circlesService;
        this.loggedIn = false;
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.removable = true;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
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
                for (var i = 0; i < _this.circles.length; i++) {
                    _this.circlesService.addCircle(_this.circles[i].name).subscribe();
                    // for (let i = 0; i < this.circles[i].friends.length; i++) {
                    //   this.circlesService.addFriendToCircle(this.circles[i].friends[i], this.circles[i]);
                    // }
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
            if (circle.friends) {
                circle.friends.push(value.trim());
            }
            else {
                circle.friends = [value.trim()];
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
        this.school = new circle_1.Circle('', 1);
        this.hometown = new circle_1.Circle('', 2);
        this.circles = [this.hometown, this.school];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./project/static/app/app.component.html"),
            styles: [__webpack_require__("./project/static/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService,
            circles_service_1.CirclesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./project/static/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_module_1 = __webpack_require__("./project/static/app/material.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./project/static/app/app.component.ts");
var circles_component_1 = __webpack_require__("./project/static/app/circles/circles.component.ts");
var circles_add_component_1 = __webpack_require__("./project/static/app/circles/add/circles.add.component.ts");
var friends_component_1 = __webpack_require__("./project/static/app/friends/friends.component.ts");
var friends_add_component_1 = __webpack_require__("./project/static/app/friends/add/friends.add.component.ts");
var profile_component_1 = __webpack_require__("./project/static/app/profile/profile.component.ts");
var profile_component_2 = __webpack_require__("./project/static/app/profile/profile.component.ts");
var profile_edit_component_1 = __webpack_require__("./project/static/app/profile/edit/profile.edit.component.ts");
var app_service_1 = __webpack_require__("./project/static/app/app.service.ts");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var friends_service_1 = __webpack_require__("./project/static/app/friends/friends.service.ts");
var profile_service_1 = __webpack_require__("./project/static/app/profile/profile.service.ts");
var appRoutes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    { path: 'app/home', component: circles_component_1.CirclesComponent },
    { path: 'app/home/add', component: circles_add_component_1.CirclesAddComponent },
    { path: 'app/home/:id', component: circles_component_1.CirclesComponent },
    { path: 'app/friends', component: friends_component_1.FriendsComponent },
    { path: 'app/friends/add', component: friends_add_component_1.FriendsAddComponent },
    { path: 'app/friends/:id', component: friends_component_1.FriendsComponent },
    { path: 'app/profile', component: profile_component_1.ProfileComponent },
    { path: 'app/profile/:id', component: profile_component_1.ProfileComponent },
    { path: 'app/profile/:id/edit', component: profile_edit_component_1.ProfileEditComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                circles_component_1.CirclesComponent,
                circles_add_component_1.CirclesAddComponent,
                friends_component_1.FriendsComponent,
                friends_add_component_1.FriendsAddComponent,
                profile_component_1.ProfileComponent,
                profile_component_2.DialogOverviewExampleDialog,
                profile_edit_component_1.ProfileEditComponent
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            entryComponents: [
                profile_component_2.DialogOverviewExampleDialog
            ],
            providers: [
                app_service_1.AppService,
                circles_service_1.CirclesService,
                friends_service_1.FriendsService,
                profile_service_1.ProfileService,
            ],
            bootstrap: [
                app_component_1.AppComponent,
                circles_component_1.CirclesComponent,
                circles_add_component_1.CirclesAddComponent,
                friends_component_1.FriendsComponent,
                friends_add_component_1.FriendsAddComponent,
                profile_component_1.ProfileComponent,
                profile_edit_component_1.ProfileEditComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./project/static/app/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.css":
/***/ (function(module, exports) {

module.exports = "/* .circles {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n} */\n\nh1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <h2 class=\"center\">add circle</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\"\n          (ngSubmit)=\"addCircle()\" #addCircleForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"circle.name\" required\n                    [(ngModel)]=\"circle.name\" name=\"circle.name\">\n            <label for=\"circle.name\">circle name</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <mat-select placeholder=\"add friends to your circle\" multiple [(value)]=\"selectedFriends\">\n                <mat-option *ngFor=\"let friend of friends\" [value]=\"friend\">{{friend.name}}</mat-option>\n                <!-- <mat-option>\n                  <input matInput placeholder=\"Add a new friend\">\n                </mat-option> -->\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                    [disabled]=\"!addCircleForm.form.valid\">\n              Add Circle <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/circles/add/circles.add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var friends_service_1 = __webpack_require__("./project/static/app/friends/friends.service.ts");
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var profile_1 = __webpack_require__("./project/static/app/profile/profile.ts");
var CirclesAddComponent = /** @class */ (function () {
    function CirclesAddComponent(circlesService, friendsService, router) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.router = router;
    }
    CirclesAddComponent.prototype.addCircle = function () {
        var _this = this;
        this.circlesService.addCircle(this.circle.name)
            .subscribe(function (data) {
            // if successful,
            // @TODO should return ID of the circle
            _this.router.navigate(['/app/home']);
        });
        // for (friend in selectedFriends) {
        //   this.circlesService.addFriendToCircle({
        //     friend_id: friend,
        //     circle_id: circle_id,
        //   });
        // }
    };
    CirclesAddComponent.prototype.getAllFriends = function () {
        var _this = this;
        this.friendsService.getAllFriends()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var id = data['json_list'][i]['id'];
                var profile = new profile_1.Profile(name_1, id, email);
                if (_this.friends) {
                    _this.friends.push(profile);
                }
                else {
                    _this.friends = [profile];
                }
            }
        });
    };
    CirclesAddComponent.prototype.ngOnInit = function () {
        this.circle = new circle_1.Circle('', 123);
        this.getAllFriends();
    };
    CirclesAddComponent = __decorate([
        core_1.Component({
            selector: 'app-circles-add',
            template: __webpack_require__("./project/static/app/circles/add/circles.add.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/add/circles.add.component.css")]
        }),
        __metadata("design:paramtypes", [circles_service_1.CirclesService,
            friends_service_1.FriendsService,
            router_1.Router])
    ], CirclesAddComponent);
    return CirclesAddComponent;
}());
exports.CirclesAddComponent = CirclesAddComponent;


/***/ }),

/***/ "./project/static/app/circles/circle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(name, _id, _friends, parentCircles, childCircles) {
        this.name = name;
        this._id = _id;
        this._friends = _friends;
        this.parentCircles = parentCircles;
        this.childCircles = childCircles;
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
    return Circle;
}());
exports.Circle = Circle;


/***/ }),

/***/ "./project/static/app/circles/circles.component.css":
/***/ (function(module, exports) {

module.exports = ".circles {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\nspan.badge {\n  line-height: 44px;\n}\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n}\n"

/***/ }),

/***/ "./project/static/app/circles/circles.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-card  *ngFor=\"let circle of circles\" class=\"circles\" routerLink=\"/app/friends/{{circle.id}}\">\n    <mat-card-title>{{circle.name}}</mat-card-title>\n    <!-- <span class=\"badge\" data-badge-caption=\"friends\">4</span> -->\n  </mat-card>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a routerLink=\"/app/home/add\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">add</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/circles/circles.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var friends_service_1 = __webpack_require__("./project/static/app/friends/friends.service.ts");
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var CirclesComponent = /** @class */ (function () {
    function CirclesComponent(circlesService, friendsService) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
    }
    CirclesComponent.prototype.showAllCircles = function () {
        var _this = this;
        this.circlesService.getCircles()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var name_1 = data['json_list'][i]['circle_name'];
                var id = data['json_list'][i]['id'];
                var circle = new circle_1.Circle(name_1, id);
                if (_this.circles) {
                    _this.circles.push(circle);
                }
                else {
                    _this.circles = [circle];
                }
            }
        });
    };
    // getFriends(id: number) {
    //   console.log('yo: tryna get friends');
    //   this.friendsService.getFriends(id)
    //     .subscribe(data => {
    //       console.log('yo: found ', data['json_list']);
    //       for (let i = 0; i < data['json_list'].length; i++) {
    //         if (this.friends) {
    //           this.friends.push(data['json_list'][i]['name']);
    //         } else {
    //           this.friends = [ data['json_list'][i]['name'] ];
    //         }
    //       }
    //       if (this.friends) {
    //         this.friends.push('example name');
    //       } else {
    //         this.friends = [ 'example name' ];
    //       }
    //   });
    // }
    CirclesComponent.prototype.ngOnInit = function () {
        this.showAllCircles();
    };
    CirclesComponent = __decorate([
        core_1.Component({
            selector: 'app-circles',
            template: __webpack_require__("./project/static/app/circles/circles.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/circles.component.css")]
        }),
        __metadata("design:paramtypes", [circles_service_1.CirclesService,
            friends_service_1.FriendsService])
    ], CirclesComponent);
    return CirclesComponent;
}());
exports.CirclesComponent = CirclesComponent;


/***/ }),

/***/ "./project/static/app/circles/circles.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var CirclesService = /** @class */ (function () {
    function CirclesService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
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
    CirclesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CirclesService);
    return CirclesService;
}());
exports.CirclesService = CirclesService;


/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.css":
/***/ (function(module, exports) {

module.exports = "/* .circles {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n} */\n\nh1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <h2 class=\"center\">add friend</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\"\n          (ngSubmit)=\"addFriend()\" #addFriendForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"friend.name\" required\n                    [(ngModel)]=\"friend.name\" name=\"friend.name\">\n            <label for=\"friend.name\">name</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"email\" class=\"validate\" id=\"friend.email\" required\n                    [(ngModel)]=\"friend.email\" name=\"friend.email\">\n            <label for=\"friend.email\">email</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <mat-form-field>\n              <mat-select placeholder=\"add to a circle\" multiple [(value)]=\"friend.circles\">\n                <mat-option *ngFor=\"let circle of circles\" [value]=\"circle\">{{circle.name}}</mat-option>\n                <!-- <mat-option>\n                  <input matInput placeholder=\"Add a new circle\">\n                </mat-option> -->\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                    [disabled]=\"!addFriendForm.form.valid\">\n              Add Friend <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/friends/add/friends.add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var friends_service_1 = __webpack_require__("./project/static/app/friends/friends.service.ts");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var profile_1 = __webpack_require__("./project/static/app/profile/profile.ts");
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var FriendsAddComponent = /** @class */ (function () {
    function FriendsAddComponent(circlesService, friendsService, router) {
        this.circlesService = circlesService;
        this.friendsService = friendsService;
        this.router = router;
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
                var circle = new circle_1.Circle(name_1, id);
                if (_this.circles) {
                    _this.circles.push(circle);
                }
                else {
                    _this.circles = [circle];
                }
            }
        });
    };
    // do i want this function to draw straight from the global friend object?
    // or from parameters we're passing in?
    // addToCircle(id: number, circles: Circle[]) {
    //   for (let i = 0; i < circles.length; i++) {
    //     let circle = circles[i];
    //     console.log('yo: add to ', circle.name, ', #', circle.id);
    //     this.circlesService.addFriendToCircle(id, circle.id)
    //       .subscribe();
    //     console.log('yo: added for friend #', id);
    //   }
    // }
    FriendsAddComponent.prototype.ngOnInit = function () {
        this.friend = new profile_1.Profile('', '', 555);
        this.getAllCircles();
    };
    FriendsAddComponent = __decorate([
        core_1.Component({
            selector: 'app-friends-add',
            template: __webpack_require__("./project/static/app/friends/add/friends.add.component.html"),
            styles: [__webpack_require__("./project/static/app/friends/add/friends.add.component.css")]
        }),
        __metadata("design:paramtypes", [circles_service_1.CirclesService,
            friends_service_1.FriendsService,
            router_1.Router])
    ], FriendsAddComponent);
    return FriendsAddComponent;
}());
exports.FriendsAddComponent = FriendsAddComponent;


/***/ }),

/***/ "./project/static/app/friends/friends.component.css":
/***/ (function(module, exports) {

module.exports = ".friends {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n}\n"

/***/ }),

/***/ "./project/static/app/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-card  *ngFor=\"let friend of friends\" class=\"friends\" routerLink=\"/app/profile/{{friend.id}}\">\n    <mat-card-title-group>\n      <img mat-card-sm-image *ngIf=\"friend.img\" src=\"{{friend.img}}\" alt=\"Photo of {{friend.name}}\">\n      <mat-card-title>{{friend.name}}</mat-card-title>\n      <!-- <mat-card-subtitle>{{friend.email}}</mat-card-subtitle> -->\n    </mat-card-title-group>\n  </mat-card>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a routerLink=\"/app/friends/add\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons teal lighten-2\">add</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/friends/friends.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var friends_service_1 = __webpack_require__("./project/static/app/friends/friends.service.ts");
var profile_1 = __webpack_require__("./project/static/app/profile/profile.ts");
var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(friendsService, route) {
        this.friendsService = friendsService;
        this.route = route;
    }
    FriendsComponent.prototype.showAllFriends = function () {
        var _this = this;
        this.friendsService.getAllFriends()
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var id = data['json_list'][i]['id'];
                var name_1 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new profile_1.Profile(name_1, email, id);
                if (_this.friends) {
                    _this.friends.push(friend);
                }
                else {
                    _this.friends = [friend];
                }
            }
        });
    };
    FriendsComponent.prototype.getFriendsForCircle = function (id) {
        var _this = this;
        this.friendsService.getFriends(id)
            .subscribe(function (data) {
            for (var i = 0; i < data['json_list'].length; i++) {
                var id_1 = data['json_list'][i]['id'];
                var name_2 = data['json_list'][i]['name'];
                var email = data['json_list'][i]['email'];
                var friend = new profile_1.Profile(name_2, email, id_1);
                if (_this.friends) {
                    _this.friends.push(friend);
                }
                else {
                    _this.friends = [friend];
                }
            }
        });
    };
    FriendsComponent.prototype.ngOnInit = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
        if (this.routeId) {
            this.getFriendsForCircle(this.routeId);
        }
        else {
            this.showAllFriends();
        }
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: 'app-friends',
            template: __webpack_require__("./project/static/app/friends/friends.component.html"),
            styles: [__webpack_require__("./project/static/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [friends_service_1.FriendsService,
            router_1.ActivatedRoute])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;


/***/ }),

/***/ "./project/static/app/friends/friends.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FriendsService);
    return FriendsService;
}());
exports.FriendsService = FriendsService;


/***/ }),

/***/ "./project/static/app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatOptionModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatTabsModule,
                material_1.MatExpansionModule,
                material_1.MatStepperModule,
                material_1.MatChipsModule,
                material_1.MatProgressSpinnerModule,
            ],
            exports: [
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatOptionModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatTabsModule,
                material_1.MatExpansionModule,
                material_1.MatStepperModule,
                material_1.MatChipsModule,
                material_1.MatProgressSpinnerModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: 'justbecool', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.delete {\n  color: #9e9e9e;\n}\n\n.delete:hover {\n  text-decoration: underline;\n}\n"

/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <h2 class=\"center\">edit profile</h2>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel\"\n          (ngSubmit)=\"editProfile()\" #editProfileForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"model.name\"\n                    [(ngModel)]=\"model.name\" name=\"model.name\">\n            <label for=\"model.name\">Name</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"email\" class=\"validate\" id=\"model.email\"\n                    [(ngModel)]=\"model.email\" name=\"model.email\">\n            <label for=\"model.email\">Email</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"tel\" class=\"validate\" id=\"model.phone\"\n                    [(ngModel)]=\"model.phone\" name=\"model.phone\">\n            <label for=\"model.phone\">Phone</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"model.location\"\n                    [(ngModel)]=\"model.location\" name=\"model.location\">\n            <label for=\"model.location\">Location</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"model.job\"\n                    [(ngModel)]=\"model.job\" name=\"model.job\">\n            <label for=\"model.job\">Job</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-s4\">\n            <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                    [disabled]=\"!editProfileForm.form.valid\">\n              Finish Editing <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"divider\"></div>\n\n      <div class=\"section\">\n        <a class=\"delete\" (click)=\"deleteProfile()\">Delete this profile</a>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/profile/edit/profile.edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var profile_service_1 = __webpack_require__("./project/static/app/profile/profile.service.ts");
var profile_1 = __webpack_require__("./project/static/app/profile/profile.ts");
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(profileService, route, router) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.model = new profile_1.Profile('', '', 555);
    }
    ProfileEditComponent.prototype.getProfile = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
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
    };
    /**
     * @function updateProfile
     * @param {number} id - ID of profile being edited
     * @param {string} [location=''] - new location value
     * @param {string[]} [notes=[]] - new notes value
     * @param {string} [phone=''] - new phone value
     * @param {string} [job=''] - new job value
     */
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
            this.model.notes = [];
        }
        this.profileService.updateProfile(this.model.id, this.model.location, this.model.notes, this.model.phone, this.model.job).subscribe();
        this.router.navigate(['/app/profile/', this.routeId]);
    };
    ProfileEditComponent.prototype.deleteProfile = function () {
        alert('deleted');
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        this.getProfile();
        if (this.routeId == 0) {
            this.getMyProfile();
        }
        else {
            this.getFriendProfile(this.routeId);
        }
    };
    ProfileEditComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-edit',
            template: __webpack_require__("./project/static/app/profile/edit/profile.edit.component.html"),
            styles: [__webpack_require__("./project/static/app/profile/edit/profile.edit.component.css")]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            router_1.ActivatedRoute,
            router_2.Router])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());
exports.ProfileEditComponent = ProfileEditComponent;


/***/ }),

/***/ "./project/static/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 0rem;\n}\nh4 {\n  margin: 0 0 1.6rem 0;\n}\nh5 {\n  font-style: italic;\n  margin: 0rem 0 1.6rem 0;\n  color: #526165;\n}\n#sidebar-content>div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.card-action>a {\n  margin-right: 0!important;\n}\n"

/***/ }),

/***/ "./project/static/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div class=\"fixed-action-btn\" style=\"top: 70px; left: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\"\n        routerLink=\"/app/home\">\n      <i class=\"material-icons\">arrow_back</i>\n    </a>\n  </div> -->\n\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <div class=\"card body-font\">\n        <div class=\"card-image\">\n          <img src=\"{{model._img}}\">\n        </div>\n        <div id=\"sidebar-content\">\n          <div class=\"card-content\">\n            <div class=\"chip\" *ngFor=\"let circle of model._circles\">\n              <a routerLink=\"/app/friends/{{circle.id}}\">{{circle.name}}</a>\n            </div>\n          </div>\n          <div class=\"card-action\">\n            <a *ngIf=\"model._email\" href=\"mailto:{{model._email}}\"><i class=\"material-icons\">email</i></a>\n            <a *ngIf=\"model._phone\" href=\"tel:{{model._phone}}\"><i class=\"material-icons\">phone</i></a>\n            <a *ngIf=\"model._extra\" href=\"{{model._extra}}\"><i class=\"material-icons\">explicit</i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s1\"></div>\n\n    <div class=\"col s7\">\n      <h1 class=\"secondary\">{{model._name}}</h1>\n      <h5 *ngIf=\"model._job\">{{model._job}}</h5>\n      <h4 *ngIf=\"model._location\"><i class=\"material-icons\">location_on</i> {{model._location}}</h4>\n      <p *ngIf=\"model._reminder\" class=\"body-font\">reminder set for every {{model._reminder}}</p>\n\n      <!-- dates -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">important dates\n            <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model._dates\">\n            <ul *ngFor=\"let date of model._dates\" class=\"collection\">\n              <li class=\"collection-item\">{{date}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <!-- names -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">important names\n            <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model._names\">\n            <ul *ngFor=\"let name of model._names\" class=\"collection\">\n              <li class=\"collection-item\">{{name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <!-- notes -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">notes\n            <span class=\"badge\"><a (click)=\"openDialog()\"><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model._notes\">\n            <ul *ngFor=\"let note of model._notes\" class=\"collection\">\n              <li class=\"collection-item\">{{note}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a routerLink=\"/app/profile/{{routeId}}/edit\" class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">edit</i>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var profile_service_1 = __webpack_require__("./project/static/app/profile/profile.service.ts");
var profile_1 = __webpack_require__("./project/static/app/profile/profile.ts");
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, route, dialog) {
        this.profileService = profileService;
        this.route = route;
        this.dialog = dialog;
        this.model = new profile_1.Profile('', '', 0);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.routeId = +this.route.snapshot.paramMap.get('id');
        if (this.routeId) {
            this.getFriendProfile(this.routeId);
        }
        else {
            this.getMyProfile();
        }
    };
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
                    _this.model.circles.push(new circle_1.Circle(data['json_list'][i].circle_name, data['json_list'][i].id));
                }
                else {
                    _this.model.circles = [new circle_1.Circle(data['json_list'][i].circle_name, data['json_list'][i].id)];
                }
            }
        });
    };
    ProfileComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: 'boo'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (_this.model.notes) {
                _this.model.notes.push(result);
            }
            else if (result) {
                _this.model.notes = [result];
            }
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./project/static/app/profile/profile.component.html"),
            styles: [__webpack_require__("./project/static/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            router_1.ActivatedRoute, material_1.MatDialog])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        core_1.Component({
            selector: 'dialog-overview-example-dialog',
            template: "\n    <h2 mat-dialog-title>Add a note</h2>\n    <mat-dialog-content>\n      <textarea id=\"data\" name=\"data\" [(ngModel)]=\"data\">{{data}}</textarea>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button (click)=onNoClick()>Cancel</button>\n      <button mat-button (click)=\"dialogRef.close(data)\">Done</button>\n    </mat-dialog-actions>\n  ",
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;


/***/ }),

/***/ "./project/static/app/profile/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        /**
         * @ignore
         */
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
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
     * @function updateProfile
     * @param {number} id - ID of profile being edited
     * @param {string} [location=''] - new location value
     * @param {string[]} [notes=[]] - new notes value
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
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./project/static/app/profile/profile.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Profile = Profile;


/***/ }),

/***/ "./project/static/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./project/static/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./project/static/app/app.module.ts");
var environment_1 = __webpack_require__("./project/static/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./project/static/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map