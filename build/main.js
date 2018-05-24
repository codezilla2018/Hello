webpackJsonp([2],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(userService, loadingCtrl, navCtrl, toastCtrl, navParams) {
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loader.present();
        this.userService.loginUserService(this.email, this.password).then(function (authData) {
            // successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to Log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // empty the password field
            that.password = "";
        });
    };
    LoginPage.prototype.forgotPassword = function () {
    };
    LoginPage.prototype.redirectToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/Sachintha/Programming/HelloApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <br>\n  <br>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n    </ion-item>\n\n    <div padding text-center>\n      <button *ngIf="email && password" ion-button color="danger" round (click)="submitLogin()">Login</button>\n      <button *ngIf="!email && !password" ion-button color="danger" clear round>Login Now</button>\n    </div>\n      \n  </ion-list>\n\n  <br>\n\n  <div padding text-center>\n    <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n  </div>\n\n  <div padding text-center>\n    <button ion-button color="gray" block clear (click)="redirectToSignup()">Create New Account</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/Sachintha/Programming/HelloApp/src/pages/login/login.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(userService, loadingCtrl, toastCtrl, navCtrl, navParams) {
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var account = {
            company_name: this.companyName,
            company_tagline: this.companyTagline,
            first_name: this.firstName,
            last_name: this.lastName,
            title: this.title,
            address_line1: this.addressLine1,
            address_line2: this.addressLine2,
            contact: this.contact,
            email: this.email,
            password: this.password
        };
        var that = this;
        var loader = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loader.present();
        this.userService.signupUserService(account).then(function (authData) {
            // successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to Log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/Sachintha/Programming/HelloApp/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list >\n\n    <!-- card for company details -->\n    <ion-card>\n\n      <ion-card-header>\n        Company / Brand Details\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label floating>Name : </ion-label>\n          <ion-input type="text" [(ngModel)]="companyName" name="companyName" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Tagline : </ion-label>\n          <ion-input type="text" [(ngModel)]="companyTagline" name="companyTagline" required="required"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- card for personal details -->\n    <ion-card>\n\n      <ion-card-header>\n        Personal Details\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label floating>First Name : </ion-label>\n          <ion-input type="text" [(ngModel)]="firstName" name="firstName" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Last Name : </ion-label>\n          <ion-input type="text" [(ngModel)]="lastName" name="lastName" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Title : </ion-label>\n          <ion-input type="text" [(ngModel)]="title" name="title" required="required"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- card for address details -->\n    <ion-card>\n\n      <ion-card-header>\n        Address Details\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label floating>Address Line 1 : </ion-label>\n          <ion-input type="text" [(ngModel)]="addressLine1" name="addressLine1" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Address Line 2 : </ion-label>\n          <ion-input type="text" [(ngModel)]="addressLine2" name="addressLine2" required="required"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- card for contact details -->\n    <ion-card>\n\n      <ion-card-header>\n        Contact Details\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label floating>Contact No : </ion-label>\n          <ion-input type="tel" [(ngModel)]="contact" name="contact" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Email : </ion-label>\n          <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- card for password -->\n    <ion-card>\n\n        <ion-card-header>\n          User Password\n        </ion-card-header>\n  \n        <ion-card-content>\n  \n          <ion-item>\n            <ion-label floating>Password : </ion-label>\n            <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n          </ion-item>\n\n        </ion-card-content>\n  \n      </ion-card>    \n    \n  </ion-list>\n\n  <!-- For Submit button -->\n  <div padding text-center>\n    <button ion-button color="danger" round (click)="doSignup()">\n      Signup\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/Sachintha/Programming/HelloApp/src/pages/signup/signup.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		291,
		1
	],
	"../pages/signup/signup.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/Sachintha/Programming/HelloApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/Sachintha/Programming/HelloApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_userservice_userservice__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyCMgGSJOM2-xUE3DQyV7CkOEWJ34w6-IHI",
    authDomain: "hello-app-18af6.firebaseapp.com",
    databaseURL: "https://hello-app-18af6.firebaseio.com",
    projectId: "hello-app-18af6",
    storageBucket: "hello-app-18af6.appspot.com",
    messagingSenderId: "360992481992"
};
__WEBPACK_IMPORTED_MODULE_11_firebase__["initializeApp"](firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_userservice_userservice__["a" /* UserserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                //this.rootPage = LoginPage;
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/Sachintha/Programming/HelloApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/Sachintha/Programming/HelloApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserserviceProvider = /** @class */ (function () {
    function UserserviceProvider() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users');
    }
    UserserviceProvider.prototype.loginUserService = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UserserviceProvider.prototype.signupUserService = function (account) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then(function (newUser) {
            // sign in the user
            return _this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then(function () {
                // successful login, create user profile
                var currentuser = _this.fireAuth.currentUser;
                _this.userProfile.child("" + currentuser.uid).set(account);
            });
        });
    };
    UserserviceProvider.prototype.updateLocationDetails = function (lat, lng) {
        var currentuser = this.fireAuth.currentUser;
        return this.userProfile.child(currentuser.uid + "/location/").set({
            latitude: lat,
            longtitude: lng
        });
    };
    UserserviceProvider.prototype.getNeighboursDetails = function () {
        var currentuser = this.fireAuth.currentUser;
        return console.log(this.userProfile.orderByChild("first_name").uid);
    };
    UserserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserserviceProvider);
    return UserserviceProvider;
}());

//# sourceMappingURL=userservice.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(userService, navCtrl, geolocation) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.isShared = true;
        this.distance = 100;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            _this.userService.updateLocationDetails(_this.lat, _this.lng);
        }).catch(function (error) {
            console.log(error);
        });
        this.userService.getNeighboursDetails();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/Sachintha/Programming/HelloApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello World</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-card>\n\n    <ion-card-header>\n      Sharing Options\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label> Share Your Business Card </ion-label>\n        <ion-toggle [(ngModel)]="isShared" color="default"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> Sharing Distance </ion-label>\n        <ion-select [(ngModel)]="distance">\n          <ion-option value=20> 20 m </ion-option>\n          <ion-option value=100> 100 m </ion-option>\n          <ion-option value=1000> 1 km </ion-option>\n          <ion-option value=10000> 10 km </ion-option>\n          <ion-option value=50000> 50 km </ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <p> \n    latitude : {{lat}}\n    longtitude : {{lng}}\n  </p>\n\n  \n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/Sachintha/Programming/HelloApp/src/pages/home/home.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map