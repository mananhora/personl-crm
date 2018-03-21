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

module.exports = ""

/***/ }),

/***/ "./project/static/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"brand\">MezAmis</span>\n      <span class=\"example-spacer\"></span>\n      <a routerLink=\"/app/home\" routerLinkActive=\"active\">Home</a>\n      <span class=\"example-spacer\"></span>\n      <a routerLink=\"/app/profile\" routerLinkActive=\"active\">Profile</a>\n      <span class=\"example-spacer\"></span>\n      <a routerLink=\"/app/login\" routerLinkActive=\"active\">Login</a>\n      <span class=\"example-spacer\"></span>\n      <a routerLink=\"/app/register\" routerLinkActive=\"active\">Register</a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n"

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
var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.name = '. . .';
    }
    // getName(): void {
    //   // * assign from an object *
    //   this.name = this.appService.name;
    //   // * assign from an external function *
    //  this.name = this.appService.getName();
    // }
    AppComponent.prototype.ngOnInit = function () {
        // * assign from an object *
        // this.name = this.appService.name;
        // * assign from an external function *
        // this.getName();
        // * assign from an internal function *
        this.name = this.appService.getName();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./project/static/app/app.component.html"),
            styles: [__webpack_require__("./project/static/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_module_1 = __webpack_require__("./project/static/app/material.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./project/static/app/app.component.ts");
var login_component_1 = __webpack_require__("./project/static/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./project/static/app/register/register.component.ts");
var circles_component_1 = __webpack_require__("./project/static/app/circles/circles.component.ts");
var profile_component_1 = __webpack_require__("./project/static/app/profile/profile.component.ts");
var app_service_1 = __webpack_require__("./project/static/app/app.service.ts");
var login_service_1 = __webpack_require__("./project/static/app/login/login.service.ts");
var register_service_1 = __webpack_require__("./project/static/app/register/register.service.ts");
var circles_service_1 = __webpack_require__("./project/static/app/circles/circles.service.ts");
var appRoutes = [
    { path: 'app/login', component: login_component_1.LoginComponent },
    { path: 'app/register', component: register_component_1.RegisterComponent },
    { path: 'app/home', component: circles_component_1.CirclesComponent },
    { path: 'app/profile', component: profile_component_1.ProfileComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                circles_component_1.CirclesComponent,
                profile_component_1.ProfileComponent
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [
                app_service_1.AppService,
                login_service_1.LoginService,
                register_service_1.RegisterService,
                circles_service_1.CirclesService,
            ],
            bootstrap: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                circles_component_1.CirclesComponent,
                profile_component_1.ProfileComponent
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable } from 'rxjs/Rx'
var AppService = /** @class */ (function () {
    function AppService() {
        this.name = 'Tarin';
        // private handleError(error: HttpErrorResponse) {
        //   if (error.error instanceof ErrorEvent) {
        //     // A client-side or network error occurred. Handle it accordingly.
        //     console.error('An error occurred:', error.error.message);
        //   } else {
        //     // The backend returned an unsuccessful response code.
        //     // The response body may contain clues as to what went wrong,
        //     console.error(
        //       `Backend returned code ${error.status}, ` +
        //       `body was: ${error.error}`);
        //   }
        //   // return an ErrorObservable with a user-facing error message
        //   return new ErrorObservable(
        //     'Something bad happened; please try again later.');
        // };
    }
    AppService.prototype.getName = function () {
        return this.name;
    };
    AppService = __decorate([
        core_1.Injectable()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./project/static/app/circles/circle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(id, contacts, parentCircle) {
        this.id = id;
        this.contacts = contacts;
        this.parentCircle = parentCircle;
    }
    return Circle;
}());
exports.Circle = Circle;


/***/ }),

/***/ "./project/static/app/circles/circles.component.css":
/***/ (function(module, exports) {

module.exports = ".circles {\n  width: 23em;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.add {\n  position: absolute;\n  bottom: 5vh;\n  right: 5vw;\n}\n"

/***/ }),

/***/ "./project/static/app/circles/circles.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-card class=\"circles\" *ngFor=\"let circle of circles\">\n    <mat-card-title>{{circle.id}}</mat-card-title>\n    <ul>\n      <li *ngFor=\"let contact of circle.contacts\">\n        {{contact}}</li>\n    </ul>\n  </mat-card>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">add</i>\n    </a>\n  </div>\n"

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
var CirclesComponent = /** @class */ (function () {
    function CirclesComponent(circlesService) {
        this.circlesService = circlesService;
        this.circles = [];
    }
    // getCircles() {
    //   this.circlesService.getCircles()
    //   .subscribe(data => this.circles = {
    //       id: data['id'],
    //       textfile:  data['textfile']
    //   });
    // }
    CirclesComponent.prototype.ngOnInit = function () {
        this.circles = this.circlesService.getCircles();
    };
    CirclesComponent = __decorate([
        core_1.Component({
            selector: 'app-circles',
            template: __webpack_require__("./project/static/app/circles/circles.component.html"),
            styles: [__webpack_require__("./project/static/app/circles/circles.component.css")]
        }),
        __metadata("design:paramtypes", [circles_service_1.CirclesService])
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
var circle_1 = __webpack_require__("./project/static/app/circles/circle.ts");
var CirclesService = /** @class */ (function () {
    function CirclesService(http) {
        this.http = http;
        this.circles = [];
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        this.circleA = new circle_1.Circle('Chuck Overstreet');
        this.circleB = new circle_1.Circle('Nobody Anybody', ['Mary', 'Susan']);
    }
    CirclesService.prototype.getCircles = function () {
        return [this.circleA, this.circleB];
    };
    CirclesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CirclesService);
    return CirclesService;
}());
exports.CirclesService = CirclesService;


/***/ }),

/***/ "./project/static/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: 'abegnale', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./project/static/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <h1>Login</h1>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel form-signin\"\n          (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"username\" required\n                    [(ngModel)]=\"username\" name=\"username\">\n            <label for=\"username\">Username</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"password\" class=\"validate\" id=\"password\" required\n                    [(ngModel)]=\"password\" name=\"password\">\n            <label for=\"password\">Password</label>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                [disabled]=\"!loginForm.form.valid\">\n          Sign in <i class=\"material-icons right\">send</i>\n        </button>\n      </div>\n\n      <div class=\"divider\"></div>\n\n      <div class=\"section\">\n        <a routerLink=\"/app/register\">Register a new account</a>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/login/login.component.ts":
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
var login_service_1 = __webpack_require__("./project/static/app/login/login.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.loginService.submitForm({
            username: this.username,
            password: this.password,
        }).subscribe();
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./project/static/app/login/login.component.html"),
            styles: [__webpack_require__("./project/static/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./project/static/app/login/login.service.ts":
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
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    LoginService.prototype.submitForm = function (object) {
        return this.http.post('/login', object, this.httpOptions);
        // .pipe(
        //   catchError(alert('Errrrror'));
        // );
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


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
                material_1.MatDividerModule
            ],
            exports: [
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatDividerModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./project/static/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./project/static/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div class=\"fixed-action-btn\" style=\"top: 70px; left: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\"\n        routerLink=\"/app/home\">\n      <i class=\"material-icons\">arrow_back</i>\n    </a>\n  </div> -->\n\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <div class=\"card body-font\">\n        <div class=\"card-image\">\n          <img src=\"{{model.img}}\">\n        </div>\n        <div class=\"card-content\">\n          <div class=\"chip\" *ngFor=\"let circle of model.circles\">{{circle}}</div>\n        </div>\n        <div class=\"card-action\">\n          <a *ngIf=\"model.email\" href=\"mailto:{{model.email}}\"><i class=\"material-icons\">email</i></a>\n          <a *ngIf=\"model.phone\" href=\"{{model.phone}}\"><i class=\"material-icons\">phone</i></a>\n          <a *ngIf=\"model.extra\" href=\"{{model.extra}}\"><i class=\"material-icons\">explicit</i></a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s1\"></div>\n\n    <div class=\"col s7\">\n      <h1 class=\"brand\">{{model.name}}</h1>\n      <h2 class=\"secondary-font\">{{model.location}}</h2>\n      <p *ngIf=\"model.reminder\" class=\"body-font\">reminder set for every {{model.reminder}}</p>\n\n      <!-- dates -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">important dates\n            <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model.dates\">\n            <ul *ngFor=\"let date of model.dates\" class=\"collection\">\n              <li class=\"collection-item\">{{date}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <!-- names -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">important names\n            <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model.names\">\n            <ul *ngFor=\"let name of model.names\" class=\"collection\">\n              <li class=\"collection-item\">{{name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <!-- notes -->\n      <div class=\"card body-font\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">notes\n            <span class=\"badge\"><a><i class=\"material-icons\">add</i></a></span>\n          </span>\n          <div *ngIf=\"model.notes\">\n            <ul *ngFor=\"let note of model.notes\" class=\"collection\">\n              <li class=\"collection-item\">{{note}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\">\n      <i class=\"material-icons\">edit</i>\n    </a>\n  </div>\n"

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.model = {
            img: 'https://pbs.twimg.com/profile_images/684222363907551232/54R_VAhv_400x400.jpg',
            circles: ['circle a', 'circle b', 'third circle name'],
            email: 'name@name.com',
            phone: '+15555551234',
            name: 'first last',
            location: 'los angeles, ca',
            reminder: '3 months',
            notes: ['lorem ipsum dolor set amet', 'nunc varius facilisis eros'],
        };
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./project/static/app/profile/profile.component.html"),
            styles: [__webpack_require__("./project/static/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./project/static/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: 'abegnale', monospace;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./project/static/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- form becomes inaccessible with the fixed button ??? -->\n  <!-- <div class=\"fixed-action-btn\" style=\"top: 70px; left: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light teal lighten-2\"\n        routerLink=\"/app/login\">\n      <i class=\"material-icons\">arrow_back</i>\n    </a>\n  </div> -->\n\n  <div class=\"row\">\n    <h1>Register</h1>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s8 offset-s2 card-panel form-signin\"\n          (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n\n      <div class=\"section\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"text\" class=\"validate\" id=\"username\" required\n                    [(ngModel)]=\"username\" name=\"username\">\n            <label for=\"username\">Username</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input type=\"email\" class=\"validate\" id=\"email\" required\n                    [(ngModel)]=\"email\" name=\"email\">\n            <label for=\"email\">Email</label>\n          </div>\n        </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"password\" class=\"validate\" id=\"password\" required\n                      [(ngModel)]=\"password\" name=\"password\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"password\" class=\"validate\" id=\"confirmPassword\" required\n                      [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\">\n              <label for=\"confirmPassword\">Confirm Password</label>\n            </div>\n          </div>\n\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name=\"action\"\n                [disabled]=\"!registerForm.form.valid\">\n          Sign up <i class=\"material-icons right\">send</i>\n        </button>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./project/static/app/register/register.component.ts":
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
var register_service_1 = __webpack_require__("./project/static/app/register/register.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.submitted = false;
    }
    RegisterComponent.prototype.onSubmit = function () {
        this.registerService.submitForm({
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
        }).subscribe();
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./project/static/app/register/register.component.html"),
            styles: [__webpack_require__("./project/static/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./project/static/app/register/register.service.ts":
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
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    RegisterService.prototype.submitForm = function (object) {
        return this.http.post('/register', object, this.httpOptions);
        // .pipe(
        //   catchError(alert('Errrrror'));
        // );
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;


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