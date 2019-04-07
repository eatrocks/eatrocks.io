/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.app = undefined;

	__webpack_require__(1);

	__webpack_require__(2);

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(5);

	var _compression2 = _interopRequireDefault(_compression);

	var _helmet = __webpack_require__(6);

	var _helmet2 = _interopRequireDefault(_helmet);

	var _routes = __webpack_require__(7);

	var _expressSslify = __webpack_require__(10);

	var _expressSslify2 = _interopRequireDefault(_expressSslify);

	var _server = __webpack_require__(11);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create express app...
	var app = exports.app = (0, _express2.default)();

	// middleware
	// DISABLE THIS LINE TO RUN LOCALLY - TODO FIGURE OUT HOW TO AUTOMATE THIS


	// the reactified route-handler from the `app`
	app.use(_expressSslify2.default.HTTPS({ trustProtoHeader: true }));
	app.use((0, _compression2.default)());
	app.use((0, _helmet2.default)());
	app.use("/static", _express2.default.static(_path2.default.join(__dirname, "static")));

	app.use("/api", _routes.api);

	// handle routes via react...
	app.get("*", _server2.default);

	// handle any errors
	app.use(function (err, req, res, next) {
	  // eslint-disable-line
	  res.status(err.status || 500).send("Application Error");
	  console.error(err.status === 404 ? "404 " + req.url : err.stack); // eslint-disable-line
	});

	var PORT = process.env.PORT;


	app.listen(PORT, function () {
	  return console.log("Running on port " + PORT);
	}); // eslint-disable-line

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("dotenv/config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(8);

	Object.defineProperty(exports, 'api', {
	  enumerable: true,
	  get: function get() {
	    return _api.router;
	  }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.router = undefined;

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _cors = __webpack_require__(9);

	var _cors2 = _interopRequireDefault(_cors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = exports.router = _express2.default.Router();

	router.get('/nav', (0, _cors2.default)(), function (req, res) {
	    res.send([{
	        "href": "/",
	        "text": "Home"
	    }, {
	        "href": "/demo",
	        "text": "Demo"
	    }]);
	});

	router.get('/people', (0, _cors2.default)(), function (req, res) {
	    res.send(["Jared", "Sara", "Elijah", "Xander", "Maxwell", "Amelia", "Ivy", "Jennie", "Stephanie", "Hillary", "Cameron", "Carey", "Ashlee", "Alyssa", "Tom", "Lynn", "Ross", "Danette", "Claigh", "Wendy"]);
	});

	exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("express-sslify");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _HTML = __webpack_require__(13);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _server = __webpack_require__(14);

	var _reactRouter = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

	var _reactHelmet = __webpack_require__(17);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(18);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _htmlMinifier = __webpack_require__(35);

	var _ssResolve = __webpack_require__(36);

	var _env = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (req, res, next) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

	        if (err) {
	            return next(err);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            var store = (0, _store2.default)();

	            (0, _ssResolve.resolve)(props, store).then(function () {
	                var initialState = store.getState();

	                var content = (0, _server.renderToString)(_react2.default.createElement(
	                    _reactRedux.Provider,
	                    { store: store },
	                    _react2.default.createElement(_reactRouter.RouterContext, props)
	                ));

	                res.send((0, _htmlMinifier.minify)((0, _HTML2.default)(_extends({}, _reactHelmet2.default.rewind(), {
	                    content: content,
	                    initialState: initialState,
	                    env: { DEV_ENDPOINT_BASE: _env.DEV_ENDPOINT_BASE }
	                })), { collapseWhitespace: true, removeAttributeQuotes: true }));
	            }).catch(next);
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref) {
	    var _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        _ref$meta = _ref.meta,
	        meta = _ref$meta === undefined ? "" : _ref$meta,
	        _ref$links = _ref.links,
	        links = _ref$links === undefined ? "" : _ref$links,
	        _ref$content = _ref.content,
	        content = _ref$content === undefined ? "" : _ref$content,
	        _ref$initialState = _ref.initialState,
	        initialState = _ref$initialState === undefined ? {} : _ref$initialState,
	        _ref$env = _ref.env,
	        env = _ref$env === undefined ? {} : _ref$env;
	    return "\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        " + title + "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        " + meta + "\n        " + links + "\n        <link href=/static/app.css rel=stylesheet>\n\n    </head>\n\n    <body>\n        <div id=app>" + content + "</div>\n        <script>\n            window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + ";\n            window.__APP_ENV_VARS__ = " + JSON.stringify(env) + ";\n        </script>\n        <script type=text/javascript src=/static/app.js charset=utf-8 async></script>\n    </body>\n</html>\n";
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("react-helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _app = __webpack_require__(19);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(27);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _app2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default })
	);

	exports.default = routes;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(16);

	var _AppLayout = __webpack_require__(20);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Inject Async Data Loading...

	// This higher-order function which takes a regular ReactClass
	// and super-imposes it lifecycle `componentDidMount` functionality.
	// Useful when a component needs props but the app can't provide them
	// until `componentDidMount`.
	// This allows components be written agnostically of app limitations.

	// tl;dr: `mountLoad` will call the `onLoad` prop when `componentDidMount` occurs
	// and potentially waits for it to resolve before showing its `children`

	//
	// callback used server-side to resolve data before responding
	//const resolveOnServer = (props, store) => store.dispatch(initNav());

	// Higher-order function takes a regular react class, returns a regular react
	// class but superimposes it with a static method that a corresponding
	// module looks for on server before rendering...
	// const SSResolvedComponent = wrap(LazyApp, resolveOnServer)


	// Create args for the react-redux `connect` function
	// https://github.com/reactjs/react-redux/blob/master/docs/api.md

	// argument 1 of react-redux `connect` maps store data to props
	// const mapStateToProps = ({nav}) => ({nav});

	// argument 2 of react-redux `connect` maps actions to dispatch to props
	// const mapDispatchToProps = (dispatch) => ({
	//     onLoad: () => dispatch( initNav() )
	// });

	// arg 3 lets you define how the props from
	// mapStateToProps, mapDispatchToProps and incoming from react-router are merged
	// you can statically inject props here as well

	// in this file, we don't actually need this functionality,
	// but if we did, it would look like the following and we'd pass it as the
	// third argument in `connect`:
	/*
	const mergeProps = (state, actions, own) => ({
	    ...state, ...actions, ...own, // this merges are 3 prop sources

	    // this pretends we need to pass in a route parameter
	    // to an action we defined in `mapStateToProps`
	    onLoad: () => actions.onLoad(own.params)
	})
	*/

	// Export the resulting component...
	exports.default = (0, _reactRedux.connect)()(_AppLayout2.default);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppLayout = undefined;

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(21);

	var _style = __webpack_require__(25);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppLayout = exports.AppLayout = function AppLayout(_ref) {
	    var children = _ref.children;
	    return _react2.default.createElement(
	        'div',
	        { className: _style2.default.app },
	        _react2.default.createElement(
	            'div',
	            { className: _style2.default.wrapper },
	            _react2.default.createElement(
	                'main',
	                { className: _style2.default.main },
	                children
	            )
	        )
	    );
	};

	exports.default = AppLayout;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"app-3mneB","header":"header-1fvkh","wrapper":"wrapper-1ukC9"};

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Home = __webpack_require__(28);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRedux = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reactRedux.connect)()(_Home2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(16);

	var _reactHelmet = __webpack_require__(17);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, {
	            title: 'React Starter Home',
	            meta: [{ "name": "description", "content": "A React Starter" }, { "property": "og:type", "content": "article" }]
	        }),
	        _react2.default.createElement(
	            'div',
	            { className: _style2.default.title },
	            _react2.default.createElement(
	                'h1',
	                null,
	                'eatrocks.io'
	            )
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(Home);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"title-2EKhR"};

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(32);

	var _reduxThunk = __webpack_require__(33);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _env = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create the master reducer
	var rootReducer = (0, _redux.combineReducers)({});

	// determine initial state
	var initialState = _env.isBrowser && window.__INITIAL_STATE__ || {};

	var reduxMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _env.isBrowser && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : function (f) {
	    return f;
	});

	// export a store creator factory with initial state if present...

	exports.default = function () {
	    return (0, _redux.createStore)(rootReducer, initialState, reduxMiddleware);
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

	//Grab variables from process.env or window

	var _ref = isBrowser ? window.__APP_ENV_VARS__ : process.env;

	var DEV_ENDPOINT_BASE = _ref.DEV_ENDPOINT_BASE;
	exports.DEV_ENDPOINT_BASE = DEV_ENDPOINT_BASE;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = require("html-minifier");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = exports.resolve = undefined;

	var _resolver = __webpack_require__(37);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _wrap = __webpack_require__(38);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.resolve = _resolver2.default;
	exports.wrap = _wrap2.default;
	exports.default = { resolve: _resolver2.default, wrap: _wrap2.default };

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (props, store) {

	    var promises = (props.components || []).
	    // unwrap component if wrapped by react-redux bindings...
	    map(function (component) {
	        return component.WrappedComponent || component;
	    })

	    // grab only components with a static `load` method
	    .filter(function (component) {
	        return component.onServer;
	    })

	    // execute onServer functions -- they should return a Promise
	    .map(function (component) {
	        return component.onServer(props, store);
	    });

	    return Promise.all(promises);
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	a higher order function which wraps React Components with a Higher-Order Components
	that contain on onServer static method. Method can then be called on ServerSide.

	wrapClass :: ( ComponentA, beforeServerRender ) -> ComponentB
	    where
	        ComponentA :: React.Component
	        beforeServerRender :: (props, store) -> Promise
	        ComponentB :: React.Component
	*/

	exports.default = function (Component) {
	    var beforeServerRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


	    return _react2.default.createClass({ // eslint-disable-line
	        statics: {
	            onServer: function onServer(props, store) {
	                return beforeServerRender ? beforeServerRender(props, store) : null;
	            }
	        },

	        render: function render() {
	            return _react2.default.createElement(Component, this.props);
	        }
	    });
	};

/***/ })
/******/ ]);