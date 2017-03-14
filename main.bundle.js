var ac_main =
webpackJsonpac__name_([3],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(444);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(443);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(143);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(2);

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(770);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(24);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });



var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 217))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    return AboutComponent;
}());
AboutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'about',
        styles: ["\n  "],
        template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
], AboutComponent);



/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

/*
 * Angular 2 decorators and services
 */

/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(71)
        ],
        template: __webpack_require__(65)
    })
], AppComponent);



/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_resolver__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__no_content__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_x_large__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__styles_styles_scss__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__styles_headings_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__styles_headings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nodes_nodes_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_info_node_info_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_nodes_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });







/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component












// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_10__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__no_content__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_x_large__["a" /* XLargeDirective */],
            __WEBPACK_IMPORTED_MODULE_18__nodes_nodes_component__["a" /* NodesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__node_info_node_info_component__["a" /* NodeInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_20__services_nodes_service__["a" /* NodesService */]
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_content__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about__["a" /* AboutComponent */] },
    { path: 'detail', loadChildren: function() { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 216))  .then( function(module) { return module['DetailModule']; } ); } },
    { path: 'barrel', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 215))  .then( function(module) { return module['BarrelModule']; } ); } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__no_content__["a" /* NoContentComponent */] },
];


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nodes_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sample_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });




var HomeComponent = (function () {
    function HomeComponent(nodesService) {
        this.nodesService = nodesService;
        this.currentModelPart = 'main';
        this.portsVisible = true;
        this.gridSnapEnabled = false;
        this.SAVED_MODEL_KEY = 'model';
        this.GRID_STEP = 30;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvas = new draw2d.Canvas('gfx_holder', 2121, 1500);
        (function (svg) {
            svg.style.position = 'relative';
            svg.style.backgroundColor = '#FFFFFF'; // '#fff9dc';
            svg.style.border = '1px solid darkolivegreen';
        })(document.querySelectorAll('svg')[0]);
        this.canvas.installEditPolicy(new draw2d.policy.connection.OrthogonalConnectionCreatePolicy());
        this.toggleGridSnap();
        this.canvas.uninstallEditPolicy('draw2d.policy.figure.RegionEditPolicy');
        this.load();
        this.canvas.on('select', function (emitter, event) {
            _this.selectedNode = event.figure;
            if (event.figure != null) {
                console.log(event.figure);
            }
        });
        this.canvas.on('connect', function (emitter, event) {
            if (!event) {
                return;
            }
            var c = event.connection;
            if (!(c instanceof draw2d.Connection)) {
                return;
            }
            c.setStroke(1);
            c.setColor('#000000');
        });
    };
    HomeComponent.prototype.toggleGridSnap = function () {
        if (this.gridSnapEnabled) {
            this.canvas.uninstallEditPolicy('draw2d.policy.canvas.SnapToGridEditPolicy');
        }
        else {
            var gridPolicy = new draw2d.policy.canvas.SnapToGridEditPolicy(this.GRID_STEP);
            gridPolicy.setGridColor(null);
            this.canvas.installEditPolicy(gridPolicy);
        }
        this.gridSnapEnabled = !this.gridSnapEnabled;
    };
    HomeComponent.prototype.setRadius = function (connection, radius) {
        try {
            connection.setRadius(radius);
        }
        catch (e) {
            alert('Не удалось установить радиус:' + e.message);
        }
    };
    //noinspection JSMethodCanBeStatic
    HomeComponent.prototype.isConnection = function (node) {
        return node instanceof draw2d.Connection;
    };
    //noinspection JSMethodCanBeStatic
    HomeComponent.prototype.isBlock = function (node) {
        return node instanceof draw2d.shape.node.Block;
    };
    //noinspection JSMethodCanBeStatic
    HomeComponent.prototype.editBlock = function (node) {
        this.save();
        this.currentModelPart = 'block_' + node.id;
        try {
            this.load();
        }
        catch (e) {
            this.canvas.clear();
        }
    };
    HomeComponent.prototype.backToMainModel = function () {
        this.save();
        this.currentModelPart = 'main';
        this.load();
    };
    //noinspection JSMethodCanBeStatic
    HomeComponent.prototype.setArrows = function (node) {
        var decorator = new draw2d.decoration.connection.connectionPikArrowDecorator();
        if (node.sourceDecorator) {
            node.setSourceDecorator(null);
            node.setTargetDecorator(decorator);
        }
        else {
            node.setSourceDecorator(decorator);
            node.setTargetDecorator(null);
        }
    };
    HomeComponent.prototype.save = function () {
        var _this = this;
        var writer = new draw2d.io.json.Writer();
        writer.marshal(this.canvas, function (json) {
            _this.saveModelPart(_this.currentModelPart, json);
        });
    };
    HomeComponent.prototype.load = function () {
        var reader = new draw2d.io.json.Reader();
        var json = this.loadModelPart(this.currentModelPart);
        this.canvas.clear();
        reader.unmarshal(this.canvas, json);
        var antEditPolicy = new draw2d.policy.figure.AntSelectionFeedbackPolicy();
        var figures = this.canvas.getFigures();
        figures.data.forEach(function (f) { return f.installEditPolicy(antEditPolicy); });
    };
    HomeComponent.prototype.reset = function () {
        if (!confirm('Сбросить модель?')) {
            return;
        }
        for (var i = 0; i < localStorage.length; i++) {
            localStorage.removeItem(localStorage.key(i));
        }
        window.location.reload();
    };
    HomeComponent.prototype.createSampleModel = function () {
        this.saveModelPart('main', __WEBPACK_IMPORTED_MODULE_3__services_sample_service__["a" /* SampleService */].sample());
        window.location.reload();
    };
    HomeComponent.prototype.addNode = function (type) {
        var node = this.nodesService.getNodeInstance(type);
        node.userData = { parameters: this.nodesService.getDefaultUserData(type) };
        node.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.canvas.add(node);
    };
    HomeComponent.prototype.toggleCipherLabel = function (node) {
        if (typeof node !== 'object') {
            return;
        }
        var labels = node.getChildren().data.filter(function (x) { return x instanceof draw2d.shape.basic.CipherLabel; });
        if (labels.length > 0) {
            labels.forEach(function (x) { return node.remove(x); });
        }
        else {
            var s = new draw2d.shape.basic.CipherLabel();
            s.setText(this.nodesService.getPropertyValue(node, 'cipher'));
            node.add(s, new draw2d.layout.locator.TopLeftLocator());
        }
    };
    HomeComponent.prototype.canAddCipher = function (node) {
        return node && node instanceof draw2d.shape.node.Operation;
    };
    HomeComponent.prototype.togglePorts = function () {
        var _this = this;
        this.portsVisible = !this.portsVisible;
        this.canvas.getAllPorts().data.forEach(function (x) { return x.setVisible(_this.portsVisible); });
    };
    HomeComponent.prototype.addLabel = function (node) {
        var label = new draw2d.shape.note.PostIt({ text: "Метка", x: 20, y: 20 });
        label.installEditor(new draw2d.ui.LabelInplaceEditor());
        label.setFontColor(0);
        label.setColor(null);
        label.setBackgroundColor(null);
        node.add(label, new draw2d.layout.locator.DraggableLocator());
    };
    HomeComponent.prototype.saveModelPart = function (partName, json) {
        localStorage.setItem(this.SAVED_MODEL_KEY + "." + partName, JSON.stringify(json, null, 2));
    };
    HomeComponent.prototype.loadModelPart = function (partName) {
        var jsonString = localStorage.getItem(this.SAVED_MODEL_KEY + "." + partName);
        if (!jsonString) {
            return null;
        }
        try {
            return JSON.parse(jsonString);
        }
        catch (e) {
            alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u044B\u0445: " + e.message);
        }
    };
    return HomeComponent;
}());
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'home',
        providers: [],
        styles: [__webpack_require__(72)],
        template: __webpack_require__(66)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nodes_service__["a" /* NodesService */]])
], HomeComponent);



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_large_directive__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__x_large_directive__["a"]; });



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XLargeDirective; });


/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLargeDirective = (function () {
    function XLargeDirective(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        this.element = element;
        this.renderer = renderer;
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    return XLargeDirective;
}());
XLargeDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[x-large]' // using [ ] means selecting attributes
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], XLargeDirective);



/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeParameter; });
var NodeParameter = (function () {
    function NodeParameter(init) {
        Object.assign(this, init);
    }
    return NodeParameter;
}());



/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nodes_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeInfoComponent; });



var NodeInfoComponent = (function () {
    function NodeInfoComponent(nodesService) {
        this.nodesService = nodesService;
    }
    Object.defineProperty(NodeInfoComponent.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (node) {
            this._node = node;
        },
        enumerable: true,
        configurable: true
    });
    NodeInfoComponent.prototype.typeLabel = function (node) {
        return this.nodesService.nodeTypeLabelByInstance(node);
    };
    return NodeInfoComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object])
], NodeInfoComponent.prototype, "node", null);
NodeInfoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'node-info',
        providers: [],
        template: __webpack_require__(67)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_nodes_service__["a" /* NodesService */]])
], NodeInfoComponent);



/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nodes_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesComponent; });



var NodesComponent = (function () {
    function NodesComponent(nodesService) {
        this.nodesService = nodesService;
        this.addNode = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.nodes = nodesService.getNodeTypes();
    }
    NodesComponent.prototype.onAddNode = function (type) {
        this.addNode.emit(type);
    };
    NodesComponent.prototype.getNodeByType = function (type) {
        var nodeType = this.nodesService.getNodeType(type);
        if (!nodeType) {
            throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0443\u0437\u043B\u0430: '" + type + "'");
        }
        return new (nodeType.className)();
    };
    return NodesComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], NodesComponent.prototype, "addNode", void 0);
NodesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'nodes',
        providers: [],
        template: __webpack_require__(68)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nodes_service__["a" /* NodesService */]])
], NodesComponent);



/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_node_parameter__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesService; });



var NodesService = (function () {
    function NodesService() {
        this.nodes = [
            { name: 'start', label: 'Начало', className: draw2d.shape.node.Start },
            { name: 'end', label: 'Конец', className: draw2d.shape.node.End },
            { name: 'operation', label: 'Операция', className: draw2d.shape.node.Operation },
            { name: 'condition', label: 'Условие', className: draw2d.shape.node.Condition },
            { name: 'sync', label: 'Требование', className: draw2d.shape.node.Sync },
            { name: 'product', label: 'Продукт', className: draw2d.shape.node.Product },
            { name: 'block', label: 'Блок', className: draw2d.shape.node.Block },
            { name: 'connection', label: 'Соединение', className: draw2d.Connection, hidden: true },
            { name: 'label-handle', label: 'Выноска', className: draw2d.shape.basic.LabelHandle },
        ];
    }
    NodesService.prototype.getNodeTypes = function () {
        return this.nodes;
    };
    NodesService.prototype.getNodeType = function (type) {
        if (!type) {
            throw new Error('Не задан тип узла');
        }
        var nodeType = this.nodes.filter(function (x) { return x.name === type; });
        if (nodeType.length === 0) {
            throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0443\u0437\u043B\u0430: '" + type + "'");
        }
        return nodeType[0];
    };
    NodesService.prototype.getNodeInstance = function (type) {
        var nodeType = this.getNodeType(type);
        return new (nodeType.className)();
    };
    NodesService.prototype.getTypeByInstance = function (node) {
        var nodeType = this.nodes.filter(function (x) { return node instanceof x.className; });
        if (nodeType.length === 0) {
            return 0;
        }
        return nodeType[0];
    };
    NodesService.prototype.nodeTypeLabelByInstance = function (node) {
        var nodeType = this.getTypeByInstance(node);
        if (!nodeType) {
            return "";
        }
        return nodeType.label;
    };
    NodesService.prototype.getDefaultUserData = function (type) {
        var params = [];
        params.push(new __WEBPACK_IMPORTED_MODULE_1__models_node_parameter__["a" /* NodeParameter */]({ name: 'name', label: 'Имя', value: 'Без имени' }));
        if (['operation', 'product', 'sync'].indexOf(type) !== -1) {
            params.push(new __WEBPACK_IMPORTED_MODULE_1__models_node_parameter__["a" /* NodeParameter */]({ name: 'cipher', label: 'Шифр', value: '' }));
        }
        if ('operation' === type) {
            params.push(new __WEBPACK_IMPORTED_MODULE_1__models_node_parameter__["a" /* NodeParameter */]({ name: 'tools', label: 'Инструменты', value: '' }));
        }
        return params;
    };
    NodesService.prototype.getPropertyValue = function (node, propertyName) {
        var prop = node.userData.parameters.filter(function (x) { return x.name === propertyName; });
        if (prop.length === 0) {
            throw new Error("Property not found: " + propertyName);
        }
        return prop[0].value;
    };
    return NodesService;
}());
NodesService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
], NodesService);



/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
var SampleService = (function () {
    function SampleService() {
    }
    SampleService.sample = function () {
        return MainSample.data;
    };
    return SampleService;
}());

var MainSample = (function () {
    function MainSample() {
    }
    return MainSample;
}());
MainSample.data = [
    {
        "type": "draw2d.shape.node.Start",
        "id": "e180e3bd-697f-cabc-eb2e-aa48ba3ef476",
        "x": 150,
        "y": 390,
        "width": 80.32799999999986,
        "height": 30,
        "alpha": 1,
        "angle": 0,
        "userData": {
            "parameters": [
                {
                    "name": "name",
                    "label": "Имя",
                    "value": "Без имени"
                }
            ]
        },
        "cssClass": "draw2d_shape_node_Start",
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "labels": [
            {
                "type": "draw2d.shape.note.PostIt",
                "id": "2844cce3-0377-7f84-55cc-5d86d066cd41",
                "x": 7,
                "y": 1,
                "width": 41,
                "height": 23,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_note_PostIt",
                "ports": [],
                "bgColor": "none",
                "color": "none",
                "stroke": 1,
                "radius": 5,
                "dasharray": null,
                "text": "Начало",
                "outlineStroke": 0,
                "outlineColor": "none",
                "fontSize": 14,
                "fontColor": "#000000",
                "fontFamily": null,
                "editor": "draw2d.ui.LabelInplaceEditor",
                "locator": "draw2d.layout.locator.DraggableLocator"
            }
        ]
    },
    {
        "type": "draw2d.shape.node.End",
        "id": "42493e90-2d2f-d957-41f2-61606db56615",
        "x": 810,
        "y": 390,
        "width": 107.75383040000031,
        "height": 34.45259520000013,
        "alpha": 1,
        "angle": 0,
        "userData": {
            "parameters": [
                {
                    "name": "name",
                    "label": "Имя",
                    "value": "Без имени"
                }
            ]
        },
        "cssClass": "draw2d_shape_node_End",
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "labels": [
            {
                "type": "draw2d.shape.note.PostIt",
                "id": "85fcbb1f-65cf-1d7a-0d0f-2a1bf95d5618",
                "x": 13,
                "y": 3,
                "width": 41,
                "height": 23,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_note_PostIt",
                "ports": [],
                "bgColor": "none",
                "color": "none",
                "stroke": 1,
                "radius": 5,
                "dasharray": null,
                "text": "к Б5",
                "outlineStroke": 0,
                "outlineColor": "none",
                "fontSize": 14,
                "fontColor": "#000000",
                "fontFamily": null,
                "editor": "draw2d.ui.LabelInplaceEditor",
                "locator": "draw2d.layout.locator.DraggableLocator"
            }
        ]
    },
    {
        "type": "draw2d.shape.node.Operation",
        "id": "bafbf9d6-c49c-db64-f424-d0bb2a9d456e",
        "x": 390,
        "y": 390,
        "width": 30,
        "height": 30,
        "alpha": 1,
        "angle": 0,
        "userData": {
            "parameters": [
                {
                    "name": "name",
                    "label": "Имя",
                    "value": "Без имени"
                },
                {
                    "name": "cipher",
                    "label": "Шифр",
                    "value": "A123"
                },
                {
                    "name": "tools",
                    "label": "Инструменты",
                    "value": ""
                }
            ]
        },
        "cssClass": "draw2d_shape_node_Operation",
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "labels": [
            {
                "type": "draw2d.shape.basic.CipherLabel",
                "id": "7c00cb84-dbca-9b62-466c-59f52a6b6ea2",
                "x": -58.796875,
                "y": -45.392960000000926,
                "width": 78.796875,
                "height": 44.392960000000926,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_basic_CipherLabel",
                "bgColor": "none",
                "color": "#1B1B1B",
                "stroke": 0,
                "radius": 0,
                "dasharray": null,
                "labels": [],
                "text": "A123",
                "locator": "draw2d.layout.locator.TopLeftLocator"
            }
        ]
    },
    {
        "type": "draw2d.shape.node.Operation",
        "id": "0c089f22-a571-603e-aa56-094d823bb560",
        "x": 600,
        "y": 390,
        "width": 30,
        "height": 30,
        "alpha": 1,
        "angle": 0,
        "userData": {
            "parameters": [
                {
                    "name": "name",
                    "label": "Имя",
                    "value": "Без имени"
                },
                {
                    "name": "cipher",
                    "label": "Шифр",
                    "value": "B456"
                },
                {
                    "name": "tools",
                    "label": "Инструменты",
                    "value": ""
                }
            ]
        },
        "cssClass": "draw2d_shape_node_Operation",
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "labels": [
            {
                "type": "draw2d.shape.basic.CipherLabel",
                "id": "209e7799-fe30-a2f8-b6bd-a1927d8010b4",
                "x": -58.796875,
                "y": -45.392960000000926,
                "width": 78.796875,
                "height": 44.392960000000926,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_basic_CipherLabel",
                "bgColor": "none",
                "color": "#1B1B1B",
                "stroke": 0,
                "radius": 0,
                "dasharray": null,
                "labels": [],
                "text": "B456",
                "locator": "draw2d.layout.locator.TopLeftLocator"
            }
        ]
    },
    {
        "type": "draw2d.Connection",
        "id": "8e364adc-7939-e16b-3c1c-1b675880d1dd",
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_Connection",
        "stroke": 1,
        "color": "#000000",
        "outlineStroke": 0,
        "outlineColor": "none",
        "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
        "vertex": [
            {
                "x": 809.8720256,
                "y": 405.50366784000005
            },
            {
                "x": 720.0992943755265,
                "y": 405.50366784000005
            },
            {
                "x": 720.0992943755265,
                "y": 405
            },
            {
                "x": 630.3265631510529,
                "y": 405
            }
        ],
        "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
        "radius": 7,
        "routingMetaData": {
            "routedByUserInteraction": false,
            "fromDir": 3,
            "toDir": 1
        },
        "source": {
            "node": "42493e90-2d2f-d957-41f2-61606db56615",
            "port": "Port",
            "decoration": "draw2d.decoration.connection.connectionPikArrowDecorator"
        },
        "target": {
            "node": "0c089f22-a571-603e-aa56-094d823bb560",
            "port": "Output"
        }
    },
    {
        "type": "draw2d.Connection",
        "id": "e4f0db40-83d2-5797-31be-15d86dd2bf3a",
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_Connection",
        "stroke": 1,
        "color": "#000000",
        "outlineStroke": 0,
        "outlineColor": "none",
        "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
        "vertex": [
            {
                "x": 599.7120362651648,
                "y": 405
            },
            {
                "x": 420.32656315105294,
                "y": 405
            }
        ],
        "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
        "radius": 7,
        "routingMetaData": {
            "routedByUserInteraction": false,
            "fromDir": 3,
            "toDir": 1
        },
        "source": {
            "node": "0c089f22-a571-603e-aa56-094d823bb560",
            "port": "Input",
            "decoration": "draw2d.decoration.connection.connectionPikArrowDecorator"
        },
        "target": {
            "node": "bafbf9d6-c49c-db64-f424-d0bb2a9d456e",
            "port": "Output"
        }
    },
    {
        "type": "draw2d.Connection",
        "id": "116c622b-96ee-0761-ddca-cc0ca12d08c5",
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_Connection",
        "stroke": 1,
        "color": "#000000",
        "outlineStroke": 0,
        "outlineColor": "none",
        "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
        "vertex": [
            {
                "x": 389.7120362651648,
                "y": 405
            },
            {
                "x": 229.79200000000026,
                "y": 405
            }
        ],
        "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
        "radius": 7,
        "routingMetaData": {
            "routedByUserInteraction": false,
            "fromDir": 3,
            "toDir": 1
        },
        "source": {
            "node": "bafbf9d6-c49c-db64-f424-d0bb2a9d456e",
            "port": "Input",
            "decoration": "draw2d.decoration.connection.connectionPikArrowDecorator"
        },
        "target": {
            "node": "e180e3bd-697f-cabc-eb2e-aa48ba3ef476",
            "port": "Port"
        }
    }
];


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n", ""]);

// exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "html, body{\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\na.active {\r\n  background-color: gray;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #00BCD4;\r\n}", ""]);

// exports


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .layout {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n\r\n  .sidebar, .content {\r\n    position: absolute;\r\n  }\r\n\r\n  .sidebar {\r\n    background: #C6DD7D;\r\n    width: 300px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .content {\r\n    background-color: #e6e6e6;\r\n    left: 300px;\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 77%;\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n  }\r\n</style>\r\n<div class=\"layout\">\r\n  <div class=\"sidebar\">\r\n    <div class=\"panel panel-default\">\r\n      <button class=\"btn btn-xs\" (click)=\"save()\">Сохранить</button>\r\n      <button class=\"btn btn-xs\" (click)=\"load()\">Загрузить</button>\r\n      <button class=\"btn btn-xs\" (click)=\"reset()\">Очистить</button>\r\n      <button class=\"btn btn-xs\" (click)=\"createSampleModel()\">Пример модели</button>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\"><strong>Управление</strong></div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group-sm\" style=\"display: inline-block;\">\r\n          <button class=\"btn btn-xs\" (click)=\"setRadius(selectedNode, radius.value)\"\r\n                  [disabled]=\"!isConnection(selectedNode)\">Радиус\r\n          </button>\r\n          <input style=\"display: inline-block; width: 50px;\" class=\"form-control\" size=\"1\" #radius type=\"number\" value=\"0\" min=\"0\" step=\"1\">\r\n        </div>\r\n        <button class=\"btn btn-xs\" (click)=\"setArrows(selectedNode)\" [disabled]=\"!isConnection(selectedNode)\">Установить\r\n          стрелку\r\n        </button>\r\n        <button class=\"btn btn-xs\" (click)=\"addLabel(selectedNode)\" [disabled]=\"!selectedNode\">Добавить метку</button>\r\n        <button class=\"btn btn-xs\" (click)=\"toggleCipherLabel(selectedNode)\" [disabled]=\"!canAddCipher(selectedNode)\">Переключить выноску</button>\r\n        <button class=\"btn btn-xs\" (click)=\"editBlock(selectedNode)\" [disabled]=\"!isBlock(selectedNode)\">Редактировать\r\n          блок\r\n        </button>\r\n        <button class=\"btn btn-xs\" (click)=\"backToMainModel()\" [disabled]=\"currentModelPart === 'main'\">Вернуться к\r\n          модели\r\n        </button>\r\n        <button class=\"btn btn-xs\" (click)=\"togglePorts()\">Переключить порты</button>\r\n        <button class=\"btn btn-xs\" (click)=\"toggleGridSnap()\">Переключить сетку</button>\r\n      </div>\r\n    </div>\r\n    <nodes (addNode)=\"addNode($event)\"></nodes>\r\n    <node-info [node]=\"selectedNode\"></node-info>\r\n  </div>\r\n  <div class=\"content\">\r\n    <!--<div style=\"width: 100%; height: 100%; overflow: scroll;\">-->\r\n    <div onselectstart=\"javascript:/*IE8 hack*/return false\" id=\"gfx_holder\"\r\n         style=\"width: 100%; height: 100%; cursor: default; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">\r\n\r\n    </div>\r\n    <!--</div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\"><strong>Свойства<span *ngIf=\"node\">: {{typeLabel(node)}}</span></strong></div>\r\n  <div class=\"panel-body\">\r\n    <div *ngIf=\"node && node.userData && node.userData.parameters\">\r\n      <div class=\"form-group-sm\" *ngFor=\"let parameter of node.userData.parameters\">\r\n        <label>{{parameter.label}}</label>\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"parameter.value\">\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"node && !node.userData\">\r\n      Узел не содержит даных\r\n    </div>\r\n    <div *ngIf=\"!node\">\r\n      Узел не выбран\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\"><strong>Добавить узлы</strong></div>\r\n  <div class=\"panel-body\">\r\n    <span *ngFor=\"let node of nodes\"> <button *ngIf=\"!node.hidden\" (click)=\"onAddNode(node.name)\" class=\"btn btn-xs\">{{node.label}}</button></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(62);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(63);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(0);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ })

},[213]);
//# sourceMappingURL=main.bundle.js.map