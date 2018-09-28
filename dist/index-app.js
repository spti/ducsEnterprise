/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/*! exports provided: InputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return InputForm; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputForm = function (_React$Component) {
  _inherits(InputForm, _React$Component);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    return _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));
  }

  _createClass(InputForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'changeCb',
    value: function changeCb(ev) {
      this.state[ev.target.name] = ev.target.value;
    }
  }, {
    key: 'submitCb',
    value: function submitCb(ev) {
      var _this2 = this;

      ev.preventDefault();

      window.setTimeout(function () {
        console.log('form submit, timeouted');
        _this2.props.submitCb({ status: 200, responseText: "" });
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var inputs = this.props.inputs.map(function (input, i) {
        if (input.tagName == 'input') {
          return React.createElement('input', { name: input.name, type: input.type, key: i.toString(), onChange: _this3.changeCb });
        } else if (input.tagName == 'textarea') {
          return React.createElement('textarea', { name: input.name, type: input.type, key: i.toString(), onChange: _this3.changeCb });
        }
      });

      return React.createElement(
        'form',
        null,
        inputs,
        React.createElement('input', { type: 'submit', value: this.props.submitVal, onClick: this.submitCb.bind(this) })
      );
    }
  }]);

  return InputForm;
}(React.Component);



/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
function Header(props) {
  return React.createElement(
    "header",
    { onClick: props.clickCb },
    props.children
  );
}



/***/ }),

/***/ "./src/components/info.js":
/*!********************************!*\
  !*** ./src/components/info.js ***!
  \********************************/
/*! exports provided: Info, Infos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Infos", function() { return Infos; });
function Info(props) {
  return React.createElement(
    "div",
    { className: "info" },
    React.createElement(
      "h1",
      null,
      props.heading
    ),
    props.children
  );
}

function Infos(props) {
  var items = props.items.map(function (item, i) {
    return React.createElement(
      Info,
      { heading: item.h, key: i.toString() },
      item.text
    );
  });

  return React.createElement(
    "div",
    { className: "infos" },
    items
  );
}



/***/ }),

/***/ "./src/components/nav-link.js":
/*!************************************!*\
  !*** ./src/components/nav-link.js ***!
  \************************************/
/*! exports provided: NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
function NavLink(props) {
  return React.createElement(
    "a",
    { href: props.url },
    React.createElement(
      "span",
      null,
      props.text
    )
  );
}



/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
function Nav(props) {
  return React.createElement(
    "nav",
    { className: "links-container" },
    props.children
  );
}



/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getViewportHeight() {
  return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.querySelector('body').clientHeight || document.getElementsByTagName('body')[0].clientHeight;
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.querySelector('body').clientWidth || document.getElementsByTagName('body')[0].clientWidth;
}

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.visible = props.visible;
    _this.dom = React.createRef();

    // we'll use this to determine if section is in the viewport
    _this.vH = getViewportHeight();
    _this.inViewPrev = false;

    window.addEventListener('resize', function () {
      _this.vH = getViewportHeight();
    });

    window.addEventListener('scroll', function () {
      if (!_this.visible) return;

      var inView = _this.isInView();
      if (_this.inViewPrev != inView) {
        if (inView) _this.props.inViewCb(_this.props.identifier);
      }
    });

    // this.state = {}
    // this.state.visible = props.visible

    return _this;
  }

  _createClass(Section, [{
    key: 'show',
    value: function show() {
      this.dom.current.classList.remove("noned");
      this.visible = true;
      this.props.onToggleVisib(this.props.identifier);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.dom.current.classList.add("noned");
      this.visible = false;
      this.props.onToggleVisib(this.props.identifier);
    }
  }, {
    key: 'isInView',
    value: function isInView() {
      var rect = this.dom.current.getBoundingClientRect();

      return rect.top >= Math.round(this.vH / 3 * -1) && rect.top <= Math.round(this.vH / 3)
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      ;
    }
  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.visible;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var className = this.visible ? 'content-section' : 'content-section noned';

      return React.createElement(
        'section',
        { ref: this.dom, className: className, id: this.props.identifier },
        this.props.children
      );
    }
  }]);

  return Section;
}(React.Component);



/***/ }),

/***/ "./src/components/switcher.js":
/*!************************************!*\
  !*** ./src/components/switcher.js ***!
  \************************************/
/*! exports provided: Switcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switcher", function() { return Switcher; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/

function SwitcherItem(props) {
  var id = "item_" + props.identifier;
  return React.createElement(
    "div",
    { className: "switcher-item", id: id, "data-identifier": props.identifier, onClick: props.clickCb },
    props.val
  );
}

function SwitcherItemDummy(props) {
  return React.createElement(
    "div",
    { className: "switcher-item", "data-identifier": props.identifier, onClick: props.clickCb },
    props.val
  );
}

var Switcher = function (_React$Component) {
  _inherits(Switcher, _React$Component);

  function Switcher(props) {
    _classCallCheck(this, Switcher);

    // this.refRoot = React.createRef()
    var _this = _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, props));

    _this.items = React.createRef();

    _this.state = {
      items: _this.formItemEls(props.items)
    };
    return _this;
  }

  _createClass(Switcher, [{
    key: "setItems",
    value: function setItems(items) {
      var itemEls = this.formItemEls(items);
      this.setState({ items: itemEls });
    }
  }, {
    key: "switchTo",
    value: function switchTo(identifier) {
      // const offset = this.items.indexOf(itemId)
      // this.domRef.style.top =
      // console.log("switcher items ref", this.items)
      var offset = this.items.current.querySelector('#item_' + identifier).offsetTop;
      this.items.current.style.top = offset * -1 + "px";
    }
  }, {
    key: "clickCb",
    value: function clickCb(ev) {
      var id = ev.target.dataset.identifier;
      this.switchTo(id);
      window.location.hash = id;
    }
  }, {
    key: "formItemEls",
    value: function formItemEls(items) {
      var _this2 = this;

      var itemsDummyPre = items.map(function (item, i) {
        var key = "dummy-pre_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, clickCb: _this2.clickCb.bind(_this2), key: key });
      });

      var itemsDummyPost = items.map(function (item, i) {
        var key = "dummy-post_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, clickCb: _this2.clickCb.bind(_this2), key: key });
      });

      var itemsReal = items.map(function (item, i) {
        return React.createElement(SwitcherItem, { val: item.val, identifier: item.identifier, clickCb: _this2.clickCb.bind(_this2), key: item.identifier.toString() });
      });

      return itemsDummyPre.concat(itemsReal).concat(itemsDummyPost);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      console.log('switcher, render');
      return React.createElement(
        "div",
        { className: "switcher" },
        React.createElement(
          "div",
          { className: "switcher-highlight" },
          React.createElement(
            "div",
            { ref: this.items, className: "switcher-items" },
            this.state.items
          )
        )
      );
    }
  }]);

  return Switcher;
}(React.Component);



/***/ }),

/***/ "./src/index-app.js":
/*!**************************!*\
  !*** ./src/index-app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script.js */ "./src/scripts/script.js");

Object(_scripts_script_js__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav.js */ "./src/components/nav.js");
/* harmony import */ var _components_nav_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-link.js */ "./src/components/nav-link.js");
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form.js */ "./src/components/form.js");
/* harmony import */ var _components_switcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/switcher.js */ "./src/components/switcher.js");
/* harmony import */ var _components_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/section.js */ "./src/components/section.js");
/* harmony import */ var _components_info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/info.js */ "./src/components/info.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import {Footer} from 'footer.js'




var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef(),
      contactForm: React.createRef(),
      contactProcess: React.createRef()

      // some content data
    };_this.salesStatusMetrics = [{ h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }];
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getVisibleSections',
    value: function getVisibleSections() {
      var _this2 = this;

      var sectionsKeys = Object.keys(this.sections);
      var sectionsVisible = [];

      console.log(sectionsKeys);
      console.log(this.sections);
      sectionsKeys.forEach(function (key) {
        if (_this2.sections[key].current.isVisible()) {
          sectionsVisible.push(_this2.sections[key].current);
        }
      });

      console.log(sectionsVisible);
      return sectionsVisible;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'page' },
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.home, identifier: 'home', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _components_info_js__WEBPACK_IMPORTED_MODULE_6__["Info"],
              { className: 'info', heading: 'Home Heading' },
              "Home info text body"
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.identity, identifier: 'identity', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'logo-large' },
            "Logo"
          )
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.salesStatus, identifier: 'salesStatus', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(_components_info_js__WEBPACK_IMPORTED_MODULE_6__["Infos"], { items: this.salesStatusMetrics })
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.wip0, identifier: 'wip0', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'info' },
            React.createElement(
              'h1',
              null,
              'Work In Progress Here ...'
            ),
            React.createElement(
              'p',
              null,
              'I suppose, this should be a form, which on response reveals the next sections'
            ),
            React.createElement(
              'h2',
              { onClick: function onClick() {
                  _this3.sections.visitorPropertyEstimations.current.show();
                  _this3.sections.sellWithUs.current.show();
                } },
              'Click Me!'
            )
          )
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.visitorPropertyEstimations, identifier: 'visitorPropertyEstimations', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _components_info_js__WEBPACK_IMPORTED_MODULE_6__["Info"],
              { className: 'info', heading: 'Based on Info You Provided' },
              React.createElement(
                'p',
                null,
                'we found that your ducks is worth ',
                React.createElement(
                  'span',
                  null,
                  "$5 - $6",
                  'M range'
                ),
                ' and there are ',
                "25",
                ' buyers'
              )
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.sellWithUs, identifier: 'sellWithUs', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(_components_form_js__WEBPACK_IMPORTED_MODULE_3__["InputForm"], {
            submitCb: function submitCb(xhr) {
              console.log('submitCb cb');
              if (xhr.status == 200) {
                _this3.sections.sellWithUsResponse.current.show();
              }
            },
            inputs: [{
              tagName: "input",
              type: "text"
            }, {
              tagName: "textarea",
              type: "text"
            }]
          })
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.sellWithUsResponse, identifier: 'sellWithUsResponse', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'info' },
            React.createElement(
              'h1',
              null,
              'We Received:'
            ),
            React.createElement(
              'span',
              null,
              'ducks'
            )
          )
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.contactForm, identifier: 'contactForm', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(_components_form_js__WEBPACK_IMPORTED_MODULE_3__["InputForm"], {
            submitCb: function submitCb(xhr) {
              console.log('submitCb cb');
              if (xhr.status == 200) {
                _this3.sections.sellWithUsResponse.current.show();
              }
            },
            inputs: [{
              tagName: "input",
              type: "text"
            }, {
              tagName: "input",
              type: "text"
            }, {
              tagName: "input",
              type: "text"
            }, {
              tagName: "input",
              type: "text"
            }]
          })
        ),
        React.createElement(
          _components_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.contactProcess, identifier: 'contactProcess', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement('div', { id: 'ourProcess' })
        )
      );
    }
  }]);

  return Home;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.home = React.createRef();
    // this.contact = React.createRef()
    // this.about = React.createRef()
    // this.news = React.createRef()

    _this4.switcher = React.createRef();
    return _this4;
  }

  _createClass(App, [{
    key: 'createSwitcherItems',
    value: function createSwitcherItems() {
      return this.home.current.getVisibleSections().map(function (section, i) {
        return {
          val: '0' + i,
          identifier: section.props.identifier
        };
      });
    }
  }, {
    key: 'updateSwitcher',
    value: function updateSwitcher() {
      var _this5 = this;

      console.log("items", this.createSwitcherItems());
      this.switcher.current.setItems(this.createSwitcherItems());
      window.setTimeout(function () {
        _this5.switcher.current.switchTo(_this5.sectionCurrentId);
      }, 30);
    }
  }, {
    key: 'sectionEnterCb',
    value: function sectionEnterCb(sectionId) {
      this.switcher.current.switchTo(sectionId);
      this.sectionCurrentId = sectionId;
    }
  }, {
    key: 'testToggleSection',
    value: function testToggleSection() {
      this.home.current.sections.visitorPropertyEstimations.current.show();
    }

    /*
    route(url) {
      const query = url.slice(url.indexOf("?")+1)
      const hash = query.slice(query.indexOf("#")+1)
      const search = query.slice(0, query.indexOf("#"))
       const page = search.split("=")[1]
      switch(page) {
        case(page == "home") {
         }
         case(page == "about") {
         }
         case(page == "news") {
         }
      }
    }
    */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      console.log("app", this);
      this.sectionCurrentId = 'home';
      this.updateSwitcher();
      window.setTimeout(function () {
        _this6.switcher.current.switchTo('home');
      }, 250);

      // this.switcher.current.switchTo("identity")
    }
  }, {
    key: 'render',
    value: function render() {
      var items = [{
        val: '01',
        identifier: 'home'
      }];

      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          _components_header_js__WEBPACK_IMPORTED_MODULE_0__["Header"],
          { clickCb: this.testToggleSection.bind(this) },
          React.createElement('div', { className: 'logo' }),
          React.createElement(
            _components_nav_js__WEBPACK_IMPORTED_MODULE_1__["Nav"],
            null,
            React.createElement(_components_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'HOME', url: '?page=home#home' }),
            React.createElement(_components_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'ABOUT US', url: '?page=about' }),
            React.createElement(_components_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'NEWS', url: '?page=news' }),
            React.createElement(_components_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'CONTACT', url: '?page=home#contactForm' })
          ),
          React.createElement('div', { className: 'search-button' })
        ),
        React.createElement('div', { className: 'toggle-menu-button' }),
        React.createElement(_components_switcher_js__WEBPACK_IMPORTED_MODULE_4__["Switcher"], { ref: this.switcher, className: 'switcher', items: items }),
        React.createElement(Home, { ref: this.home, onToggleSectionVisibility: this.updateSwitcher.bind(this), onSectionEnterCb: this.sectionEnterCb.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

 // Home, HomeWrapper

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
// import {Switcher} from '../components/switcher.js'


function main() {
  var container = document.querySelector('main');
  ReactDOM.render(React.createElement(_home_js__WEBPACK_IMPORTED_MODULE_0__["App"], null), container); // <Switcher className="slider" visibleItems={3} items={data.items} />
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYtbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIklucHV0Rm9ybSIsInByb3BzIiwiZXYiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRDYiIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImlucHV0cyIsIm1hcCIsImlucHV0IiwiaSIsInRhZ05hbWUiLCJ0eXBlIiwidG9TdHJpbmciLCJjaGFuZ2VDYiIsInN1Ym1pdFZhbCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsImNsaWNrQ2IiLCJjaGlsZHJlbiIsIkluZm8iLCJoZWFkaW5nIiwiSW5mb3MiLCJpdGVtcyIsIml0ZW0iLCJoIiwidGV4dCIsIk5hdkxpbmsiLCJ1cmwiLCJOYXYiLCJnZXRWaWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIlNlY3Rpb24iLCJ2aXNpYmxlIiwiZG9tIiwiY3JlYXRlUmVmIiwidkgiLCJpblZpZXdQcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluVmlldyIsImlzSW5WaWV3IiwiaW5WaWV3Q2IiLCJpZGVudGlmaWVyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uVG9nZ2xlVmlzaWIiLCJhZGQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicm91bmQiLCJjbGFzc05hbWUiLCJTd2l0Y2hlckl0ZW0iLCJpZCIsInZhbCIsIlN3aXRjaGVySXRlbUR1bW15IiwiU3dpdGNoZXIiLCJmb3JtSXRlbUVscyIsIml0ZW1FbHMiLCJzZXRTdGF0ZSIsIm9mZnNldCIsIm9mZnNldFRvcCIsInN0eWxlIiwiZGF0YXNldCIsInN3aXRjaFRvIiwibG9jYXRpb24iLCJoYXNoIiwiaXRlbXNEdW1teVByZSIsImtleSIsIml0ZW1zRHVtbXlQb3N0IiwiaXRlbXNSZWFsIiwiY29uY2F0IiwibWFpbiIsIkhvbWUiLCJzZWN0aW9ucyIsImhvbWUiLCJpZGVudGl0eSIsInNhbGVzU3RhdHVzIiwid2lwMCIsInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zIiwic2VsbFdpdGhVcyIsInNlbGxXaXRoVXNSZXNwb25zZSIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJzYWxlc1N0YXR1c01ldHJpY3MiLCJzZWN0aW9uc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnNWaXNpYmxlIiwiZm9yRWFjaCIsImlzVmlzaWJsZSIsInB1c2giLCJvblNlY3Rpb25FbnRlckNiIiwib25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eSIsInNob3ciLCJ4aHIiLCJBcHAiLCJzd2l0Y2hlciIsImdldFZpc2libGVTZWN0aW9ucyIsInNlY3Rpb24iLCJjcmVhdGVTd2l0Y2hlckl0ZW1zIiwic2V0SXRlbXMiLCJzZWN0aW9uQ3VycmVudElkIiwic2VjdGlvbklkIiwidXBkYXRlU3dpdGNoZXIiLCJ0ZXN0VG9nZ2xlU2VjdGlvbiIsInNlY3Rpb25FbnRlckNiIiwiY29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7O3dDQUVtQixDQUVuQjs7OzZCQUVRQyxFLEVBQUk7QUFDWCxXQUFLQyxLQUFMLENBQVdELEdBQUdFLE1BQUgsQ0FBVUMsSUFBckIsSUFBNkJILEdBQUdFLE1BQUgsQ0FBVUUsS0FBdkM7QUFDRDs7OzZCQUVRSixFLEVBQUk7QUFBQTs7QUFDWEEsU0FBR0ssY0FBSDs7QUFFQUMsYUFBT0MsVUFBUCxDQUFrQixZQUFNO0FB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LG9CQUFmLEdBWkY7QUFlRSw0QkFBQyxnRUFBRCxJQUFVLEtBQUssS0FBSzhGLFFBQXBCLEVBQThCLFdBQVUsVUFBeEMsRUFBbUQsT0FBT3JGLEtBQTFELEdBZkY7QUFpQkUsNEJBQUMsSUFBRCxJQUFNLEtBQUssS0FBSytELElBQWhCLEVBQXNCLDJCQUEyQixLQUFLNkIsY0FBTCxDQUFvQnJHLElBQXBCLENBQXlCLElBQXpCLENBQWpELEVBQWlGLGtCQUFrQixLQUFLdUcsY0FBTCxDQUFvQnZHLElBQXBCLENBQXlCLElBQXpCLENBQW5HO0FBakJGLE9BREY7QUFxQkQ7Ozs7RUFwR2VDLE1BQU1DLFM7O0NBdUdYLG9COzs7Ozs7Ozs7Ozs7QUMxUWI7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTbUUsSUFBVCxHQUFnQjtBQUNkLE1BQU1tQyxZQUFZdEYsU0FBU0ssYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBa0YsV0FBU0MsTUFBVCxDQUFnQixvQkFBQyw0Q0FBRCxPQUFoQixFQUF5QkYsU0FBekIsRUFGYyxDQUVzQjtBQUNyQyIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC1hcHAuanNcIik7XG4iLCJjbGFzcyBJbnB1dEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNoYW5nZUNiKGV2KSB7XG4gICAgdGhpcy5zdGF0ZVtldi50YXJnZXQubmFtZV0gPSBldi50YXJnZXQudmFsdWVcbiAgfVxuXG4gIHN1Ym1pdENiKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VibWl0LCB0aW1lb3V0ZWQnKVxuICAgICAgdGhpcy5wcm9wcy5zdWJtaXRDYih7c3RhdHVzOiAyMDAsIHJlc3BvbnNlVGV4dDogXCJcIn0pXG4gICAgfSwgNTAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMucHJvcHMuaW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IHtcbiAgICAgIGlmIChpbnB1dC50YWdOYW1lID09ICdpbnB1dCcpIHtcbiAgICAgICAgcmV0dXJuIDxpbnB1dCBuYW1lPXtpbnB1dC5uYW1lfSB0eXBlPXtpbnB1dC50eXBlfSBrZXk9e2kudG9TdHJpbmcoKX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlQ2J9IC8+XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnRhZ05hbWUgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICByZXR1cm4gPHRleHRhcmVhIG5hbWU9e2lucHV0Lm5hbWV9IHR5cGU9e2lucHV0LnR5cGV9IGtleT17aS50b1N0cmluZygpfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VDYn0gLz5cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICB7aW5wdXRzfVxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnByb3BzLnN1Ym1pdFZhbH0gb25DbGljaz17dGhpcy5zdWJtaXRDYi5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge0lucHV0Rm9ybX1cbiIsImZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgb25DbGljaz17cHJvcHMuY2xpY2tDYn0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IHtIZWFkZXJ9XG4iLCJmdW5jdGlvbiBJbmZvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICA8aDE+e3Byb3BzLmhlYWRpbmd9PC9oMT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJbmZvcyhwcm9wcykge1xuICBjb25zdCBpdGVtcyA9IHByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgIHJldHVybiAoPEluZm8gaGVhZGluZz17aXRlbS5ofSBrZXk9e2kudG9TdHJpbmcoKX0+e2l0ZW0udGV4dH08L0luZm8+KVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvc1wiPlxuICAgICAge2l0ZW1zfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7SW5mbywgSW5mb3N9XG4iLCJmdW5jdGlvbiBOYXZMaW5rKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17cHJvcHMudXJsfT48c3Bhbj57cHJvcHMudGV4dH08L3NwYW4+PC9hPlxuICApXG59XG5cbmV4cG9ydCB7TmF2TGlua31cbiIsImZ1bmN0aW9uIE5hdihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibGlua3MtY29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IHtOYXZ9XG4iLCJmdW5jdGlvbiBnZXRWaWV3cG9ydEhlaWdodCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIDpcbiAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoKCkge1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSA6XG4gICAgd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50V2lkdGgpO1xuXG59XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy52aXNpYmxlID0gcHJvcHMudmlzaWJsZVxuICAgIHRoaXMuZG9tID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIC8vIHdlJ2xsIHVzZSB0aGlzIHRvIGRldGVybWluZSBpZiBzZWN0aW9uIGlzIGluIHRoZSB2aWV3cG9ydFxuICAgIHRoaXMudkggPSBnZXRWaWV3cG9ydEhlaWdodCgpXG4gICAgdGhpcy5pblZpZXdQcmV2ID0gZmFsc2VcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnZIID0gZ2V0Vmlld3BvcnRIZWlnaHQoKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnZpc2libGUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb25zdCBpblZpZXcgPSB0aGlzLmlzSW5WaWV3KClcbiAgICAgIGlmICh0aGlzLmluVmlld1ByZXYgIT0gaW5WaWV3KSB7XG4gICAgICAgIGlmIChpblZpZXcpXG4gICAgICAgICAgdGhpcy5wcm9wcy5pblZpZXdDYih0aGlzLnByb3BzLmlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHRoaXMuc3RhdGUgPSB7fVxuICAgIC8vIHRoaXMuc3RhdGUudmlzaWJsZSA9IHByb3BzLnZpc2libGVcblxuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmRvbS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJub25lZFwiKVxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlVmlzaWIodGhpcy5wcm9wcy5pZGVudGlmaWVyKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmRvbS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJub25lZFwiKVxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlXG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVZpc2liKHRoaXMucHJvcHMuaWRlbnRpZmllcilcbiAgfVxuXG4gIGlzSW5WaWV3KCkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRvbS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPj0gTWF0aC5yb3VuZCgodGhpcy52SC8zKSotMSkgJiZcbiAgICAgIHJlY3QudG9wIDw9IE1hdGgucm91bmQodGhpcy52SC8zKVxuICAgICAgLy8gcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIC8vIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiYgLypvciAkKHdpbmRvdykuaGVpZ2h0KCkgKi9cbiAgICAgIC8vIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLypvciAkKHdpbmRvdykud2lkdGgoKSAqL1xuICAgIClcbiAgfVxuXG4gIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICh0aGlzLnZpc2libGUpID8gJ2NvbnRlbnQtc2VjdGlvbicgOiAnY29udGVudC1zZWN0aW9uIG5vbmVkJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIHJlZj17dGhpcy5kb219IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZGVudGlmaWVyfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7U2VjdGlvbn1cbiIsIi8qKlxuICBAcGFyYW0ge2FycmF5fSBwcm9wcy5pdGVtcyBhcnJheSBvZiBpdGVtcywgZWFjaCBvZiB0aGUgZm9ybWF0OlxuICAgIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5pdGVtc1tuXS5pbm5lclRleHRcbiAgICBAcGFyYW0ge29iamVjdH0gcHJvcHMuaXRlbXNbbl0uIC4uLlxuKi9cblxuXG5mdW5jdGlvbiBTd2l0Y2hlckl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgaWQgPSBcIml0ZW1fXCIrIHByb3BzLmlkZW50aWZpZXJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIiBpZD17aWR9IGRhdGEtaWRlbnRpZmllcj17cHJvcHMuaWRlbnRpZmllcn0gb25DbGljaz17cHJvcHMuY2xpY2tDYn0+XG4gICAge3Byb3BzLnZhbH1cbiAgPC9kaXY+KVxufVxuXG5mdW5jdGlvbiBTd2l0Y2hlckl0ZW1EdW1teShwcm9wcykge1xuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItaXRlbVwiIGRhdGEtaWRlbnRpZmllcj17cHJvcHMuaWRlbnRpZmllcn0gb25DbGljaz17cHJvcHMuY2xpY2tDYn0+XG4gICAge3Byb3BzLnZhbH1cbiAgPC9kaXY+KVxufVxuXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICAvLyB0aGlzLnJlZlJvb3QgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuaXRlbXMgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLmZvcm1JdGVtRWxzKHByb3BzLml0ZW1zKVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbUVscyA9IHRoaXMuZm9ybUl0ZW1FbHMoaXRlbXMpXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IGl0ZW1FbHN9KVxuICB9XG5cbiAgc3dpdGNoVG8oaWRlbnRpZmllcikge1xuICAgIC8vIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtSWQpXG4gICAgLy8gdGhpcy5kb21SZWYuc3R5bGUudG9wID1cbiAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGVyIGl0ZW1zIHJlZlwiLCB0aGlzLml0ZW1zKVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbV8nK2lkZW50aWZpZXIpLm9mZnNldFRvcFxuICAgIHRoaXMuaXRlbXMuY3VycmVudC5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArIFwicHhcIlxuICB9XG5cbiAgY2xpY2tDYihldikge1xuICAgIGNvbnN0IGlkID0gZXYudGFyZ2V0LmRhdGFzZXQuaWRlbnRpZmllclxuICAgIHRoaXMuc3dpdGNoVG8oaWQpXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBpZFxuICB9XG5cbiAgZm9ybUl0ZW1FbHMoaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtc0R1bW15UHJlID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBcImR1bW15LXByZV9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBjbGlja0NiPXt0aGlzLmNsaWNrQ2IuYmluZCh0aGlzKX0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcG9zdF9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBjbGlja0NiPXt0aGlzLmNsaWNrQ2IuYmluZCh0aGlzKX0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNSZWFsID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtIHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0gY2xpY2tDYj17dGhpcy5jbGlja0NiLmJpbmQodGhpcyl9IGtleT17aXRlbS5pZGVudGlmaWVyLnRvU3RyaW5nKCl9IC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBpdGVtc0R1bW15UHJlXG4gICAgICAuY29uY2F0KGl0ZW1zUmVhbClcbiAgICAgIC5jb25jYXQoaXRlbXNEdW1teVBvc3QpXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdzd2l0Y2hlciwgcmVuZGVyJylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWhpZ2hsaWdodFwiPlxuICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLml0ZW1zfSBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtc1wiPnt0aGlzLnN0YXRlLml0ZW1zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge1N3aXRjaGVyfVxuIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL3NjcmlwdHMvc2NyaXB0LmpzJ1xubWFpbigpXG4iLCJpbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIuanMnXG5pbXBvcnQge05hdn0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYuanMnXG5pbXBvcnQge05hdkxpbmt9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2LWxpbmsuanMnXG5pbXBvcnQge0lucHV0Rm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLmpzJ1xuLy8gaW1wb3J0IHtGb290ZXJ9IGZyb20gJ2Zvb3Rlci5qcydcbmltcG9ydCB7U3dpdGNoZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvc3dpdGNoZXIuanMnXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi5qcydcbmltcG9ydCB7SW5mbywgSW5mb3N9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5mby5qcydcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNlY3Rpb25zID0ge1xuICAgICAgaG9tZTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBpZGVudGl0eTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzYWxlc1N0YXR1czogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICB3aXAwOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNlbGxXaXRoVXM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2VsbFdpdGhVc1Jlc3BvbnNlOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIGNvbnRhY3RGb3JtOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIGNvbnRhY3RQcm9jZXNzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICB9XG5cbiAgICAvLyBzb21lIGNvbnRlbnQgZGF0YVxuICAgIHRoaXMuc2FsZXNTdGF0dXNNZXRyaWNzID0gW1xuICAgICAge2g6IFwiNTUwMDBcIiwgdGV4dDogJ3R3byBsaW5lcyBvZiB0ZXh0J30sXG4gICAgICB7aDogXCI1NTAwMFwiLCB0ZXh0OiAndHdvIGxpbmVzIG9mIHRleHQnfSxcbiAgICAgIHtoOiBcIjU1MDAwXCIsIHRleHQ6ICd0d28gbGluZXMgb2YgdGV4dCd9LFxuICAgICAge2g6IFwiNTUwMDBcIiwgdGV4dDogJ3R3byBsaW5lcyBvZiB0ZXh0J30sXG4gICAgXVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGdldFZpc2libGVTZWN0aW9ucygpIHtcbiAgICBjb25zdCBzZWN0aW9uc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNlY3Rpb25zKVxuICAgIGNvbnN0IHNlY3Rpb25zVmlzaWJsZSA9IFtdXG5cbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uc0tleXMpXG4gICAgY29uc29sZS5sb2codGhpcy5zZWN0aW9ucylcbiAgICBzZWN0aW9uc0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VjdGlvbnNba2V5XS5jdXJyZW50LmlzVmlzaWJsZSgpKSB7XG4gICAgICAgIHNlY3Rpb25zVmlzaWJsZS5wdXNoKHRoaXMuc2VjdGlvbnNba2V5XS5jdXJyZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uc1Zpc2libGUpXG4gICAgcmV0dXJuIHNlY3Rpb25zVmlzaWJsZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5ob21lfSBpZGVudGlmaWVyPVwiaG9tZVwiIHZpc2libGU9e3RydWV9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIiBoZWFkaW5nPVwiSG9tZSBIZWFkaW5nXCI+XG4gICAgICAgICAgICB7XCJIb21lIGluZm8gdGV4dCBib2R5XCJ9XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5pZGVudGl0eX0gaWRlbnRpZmllcj1cImlkZW50aXR5XCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWxhcmdlXCI+e1wiTG9nb1wifTwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2FsZXNTdGF0dXN9IGlkZW50aWZpZXI9XCJzYWxlc1N0YXR1c1wiIHZpc2libGU9e3RydWV9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxJbmZvcyBpdGVtcz17dGhpcy5zYWxlc1N0YXR1c01ldHJpY3N9PjwvSW5mb3M+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy53aXAwfSBpZGVudGlmaWVyPVwid2lwMFwiIHZpc2libGU9e3RydWV9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIDxoMT5Xb3JrIEluIFByb2dyZXNzIEhlcmUgLi4uPC9oMT5cbiAgICAgICAgICA8cD5JIHN1cHBvc2UsIHRoaXMgc2hvdWxkIGJlIGEgZm9ybSwgd2hpY2ggb24gcmVzcG9uc2UgcmV2ZWFscyB0aGUgbmV4dCBzZWN0aW9uczwvcD5cbiAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy52aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9ucy5jdXJyZW50LnNob3coKVxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzLmN1cnJlbnQuc2hvdygpXG4gICAgICAgICAgfX0+Q2xpY2sgTWUhPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy52aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uc30gaWRlbnRpZmllcj1cInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zXCIgdmlzaWJsZT17ZmFsc2V9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIiBoZWFkaW5nPVwiQmFzZWQgb24gSW5mbyBZb3UgUHJvdmlkZWRcIj5cbiAgICAgICAgICAgIDxwPndlIGZvdW5kIHRoYXQgeW91ciBkdWNrcyBpcyB3b3J0aCA8c3Bhbj57XCIkNSAtICQ2XCJ9TSByYW5nZTwvc3Bhbj4gYW5kIHRoZXJlIGFyZSB7XCIyNVwifSBidXllcnM8L3A+XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+PC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzfSBpZGVudGlmaWVyPVwic2VsbFdpdGhVc1wiIHZpc2libGU9e2ZhbHNlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8SW5wdXRGb3JtXG4gICAgICAgICAgc3VibWl0Q2I9eyh4aHIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRDYiBjYicpXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzUmVzcG9uc2UuY3VycmVudC5zaG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGlucHV0cz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWdOYW1lOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWdOYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICA8L0lucHV0Rm9ybT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZX0gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNSZXNwb25zZVwiIHZpc2libGU9e2ZhbHNlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8aDE+V2UgUmVjZWl2ZWQ6PC9oMT5cbiAgICAgICAgICA8c3Bhbj5kdWNrczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5jb250YWN0Rm9ybX0gaWRlbnRpZmllcj1cImNvbnRhY3RGb3JtXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgIDxJbnB1dEZvcm1cbiAgICAgICAgc3VibWl0Q2I9eyh4aHIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0Q2IgY2InKVxuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzUmVzcG9uc2UuY3VycmVudC5zaG93KClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWdOYW1lOiBcImlucHV0XCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnTmFtZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgPC9JbnB1dEZvcm0+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5jb250YWN0UHJvY2Vzc30gaWRlbnRpZmllcj1cImNvbnRhY3RQcm9jZXNzXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBpZD1cIm91clByb2Nlc3NcIj48L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5ob21lID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICAvLyB0aGlzLmNvbnRhY3QgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMuYWJvdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMubmV3cyA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICB0aGlzLnN3aXRjaGVyID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNyZWF0ZVN3aXRjaGVySXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9tZS5jdXJyZW50LmdldFZpc2libGVTZWN0aW9ucygpLm1hcCgoc2VjdGlvbiwgaSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsOiAnMCcrIGksXG4gICAgICAgIGlkZW50aWZpZXI6IHNlY3Rpb24ucHJvcHMuaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTd2l0Y2hlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1zXCIsIHRoaXMuY3JlYXRlU3dpdGNoZXJJdGVtcygpKVxuICAgIHRoaXMuc3dpdGNoZXIuY3VycmVudC5zZXRJdGVtcyh0aGlzLmNyZWF0ZVN3aXRjaGVySXRlbXMoKSlcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc3dpdGNoVG8odGhpcy5zZWN0aW9uQ3VycmVudElkKVxuICAgIH0sIDMwKVxuICB9XG5cbiAgc2VjdGlvbkVudGVyQ2Ioc2VjdGlvbklkKSB7XG4gICAgdGhpcy5zd2l0Y2hlci5jdXJyZW50LnN3aXRjaFRvKHNlY3Rpb25JZClcbiAgICB0aGlzLnNlY3Rpb25DdXJyZW50SWQgPSBzZWN0aW9uSWRcbiAgfVxuXG4gIHRlc3RUb2dnbGVTZWN0aW9uKCkge1xuICAgIHRoaXMuaG9tZS5jdXJyZW50LnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zLmN1cnJlbnQuc2hvdygpXG4gIH1cblxuICAvKlxuICByb3V0ZSh1cmwpIHtcbiAgICBjb25zdCBxdWVyeSA9IHVybC5zbGljZSh1cmwuaW5kZXhPZihcIj9cIikrMSlcbiAgICBjb25zdCBoYXNoID0gcXVlcnkuc2xpY2UocXVlcnkuaW5kZXhPZihcIiNcIikrMSlcbiAgICBjb25zdCBzZWFyY2ggPSBxdWVyeS5zbGljZSgwLCBxdWVyeS5pbmRleE9mKFwiI1wiKSlcblxuICAgIGNvbnN0IHBhZ2UgPSBzZWFyY2guc3BsaXQoXCI9XCIpWzFdXG4gICAgc3dpdGNoKHBhZ2UpIHtcbiAgICAgIGNhc2UocGFnZSA9PSBcImhvbWVcIikge1xuXG4gICAgICB9XG5cbiAgICAgIGNhc2UocGFnZSA9PSBcImFib3V0XCIpIHtcblxuICAgICAgfVxuXG4gICAgICBjYXNlKHBhZ2UgPT0gXCJuZXdzXCIpIHtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuICAqL1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwiYXBwXCIsIHRoaXMpXG4gICAgdGhpcy5zZWN0aW9uQ3VycmVudElkID0gJ2hvbWUnXG4gICAgdGhpcy51cGRhdGVTd2l0Y2hlcigpXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zd2l0Y2hlci5jdXJyZW50LnN3aXRjaFRvKCdob21lJylcbiAgICB9LCAyNTApXG5cblxuICAgIC8vIHRoaXMuc3dpdGNoZXIuY3VycmVudC5zd2l0Y2hUbyhcImlkZW50aXR5XCIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbe1xuICAgICAgdmFsOiAnMDEnLFxuICAgICAgaWRlbnRpZmllcjogJ2hvbWUnXG4gICAgfV1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8SGVhZGVyIGNsaWNrQ2I9e3RoaXMudGVzdFRvZ2dsZVNlY3Rpb24uYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJIT01FXCIgdXJsPVwiP3BhZ2U9aG9tZSNob21lXCIvPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGV4dD1cIkFCT1VUIFVTXCIgdXJsPVwiP3BhZ2U9YWJvdXRcIi8+XG4gICAgICAgICAgICA8TmF2TGluayB0ZXh0PVwiTkVXU1wiIHVybD1cIj9wYWdlPW5ld3NcIi8+XG4gICAgICAgICAgICA8TmF2TGluayB0ZXh0PVwiQ09OVEFDVFwiIHVybD1cIj9wYWdlPWhvbWUjY29udGFjdEZvcm1cIi8+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgIDwvSGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLW1lbnUtYnV0dG9uXCI+PC9kaXY+XG5cblxuICAgICAgICA8U3dpdGNoZXIgcmVmPXt0aGlzLnN3aXRjaGVyfSBjbGFzc05hbWU9XCJzd2l0Y2hlclwiIGl0ZW1zPXtpdGVtc30+PC9Td2l0Y2hlcj5cblxuICAgICAgICA8SG9tZSByZWY9e3RoaXMuaG9tZX0gb25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eT17dGhpcy51cGRhdGVTd2l0Y2hlci5iaW5kKHRoaXMpfSBvblNlY3Rpb25FbnRlckNiPXt0aGlzLnNlY3Rpb25FbnRlckNiLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtBcHB9IC8vIEhvbWUsIEhvbWVXcmFwcGVyXG4iLCIvLyBpbXBvcnQge1N3aXRjaGVyfSBmcm9tICcuLi9jb21wb25lbnRzL3N3aXRjaGVyLmpzJ1xuaW1wb3J0IHtBcHB9IGZyb20gJy4vaG9tZS5qcydcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBjb250YWluZXIpIC8vIDxTd2l0Y2hlciBjbGFzc05hbWU9XCJzbGlkZXJcIiB2aXNpYmxlSXRlbXM9ezN9IGl0ZW1zPXtkYXRhLml0ZW1zfSAvPlxufVxuXG5leHBvcnQge21haW59XG4iXSwic291cmNlUm9vdCI6IiJ9