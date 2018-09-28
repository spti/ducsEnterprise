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
    { className: "switcher-item", id: id, "data-identifier": props.identifier },
    props.val
  );
}

function SwitcherItemDummy(props) {
  return React.createElement(
    "div",
    { className: "switcher-item", "data-identifier": props.identifier },
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
    key: "formItemEls",
    value: function formItemEls(items) {
      var itemsDummyPre = items.map(function (item, i) {
        var key = "dummy-pre_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, key: key });
      });

      var itemsDummyPost = items.map(function (item, i) {
        var key = "dummy-post_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, key: key });
      });

      var itemsReal = items.map(function (item, i) {
        return React.createElement(SwitcherItem, { val: item.val, identifier: item.identifier, key: item.identifier.toString() });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYtbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIklucHV0Rm9ybSIsInByb3BzIiwiZXYiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRDYiIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImlucHV0cyIsIm1hcCIsImlucHV0IiwiaSIsInRhZ05hbWUiLCJ0eXBlIiwidG9TdHJpbmciLCJjaGFuZ2VDYiIsInN1Ym1pdFZhbCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsImNsaWNrQ2IiLCJjaGlsZHJlbiIsIkluZm8iLCJoZWFkaW5nIiwiSW5mb3MiLCJpdGVtcyIsIml0ZW0iLCJoIiwidGV4dCIsIk5hdkxpbmsiLCJ1cmwiLCJOYXYiLCJnZXRWaWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIlNlY3Rpb24iLCJ2aXNpYmxlIiwiZG9tIiwiY3JlYXRlUmVmIiwidkgiLCJpblZpZXdQcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluVmlldyIsImlzSW5WaWV3IiwiaW5WaWV3Q2IiLCJpZGVudGlmaWVyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uVG9nZ2xlVmlzaWIiLCJhZGQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicm91bmQiLCJjbGFzc05hbWUiLCJTd2l0Y2hlckl0ZW0iLCJpZCIsInZhbCIsIlN3aXRjaGVySXRlbUR1bW15IiwiU3dpdGNoZXIiLCJmb3JtSXRlbUVscyIsIml0ZW1FbHMiLCJzZXRTdGF0ZSIsIm9mZnNldCIsIm9mZnNldFRvcCIsInN0eWxlIiwiaXRlbXNEdW1teVByZSIsImtleSIsIml0ZW1zRHVtbXlQb3N0IiwiaXRlbXNSZWFsIiwiY29uY2F0IiwibWFpbiIsIkhvbWUiLCJzZWN0aW9ucyIsImhvbWUiLCJpZGVudGl0eSIsInNhbGVzU3RhdHVzIiwid2lwMCIsInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zIiwic2VsbFdpdGhVcyIsInNlbGxXaXRoVXNSZXNwb25zZSIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJzYWxlc1N0YXR1c01ldHJpY3MiLCJzZWN0aW9uc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnNWaXNpYmxlIiwiZm9yRWFjaCIsImlzVmlzaWJsZSIsInB1c2giLCJvblNlY3Rpb25FbnRlckNiIiwib25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eSIsInNob3ciLCJ4aHIiLCJBcHAiLCJzd2l0Y2hlciIsImdldFZpc2libGVTZWN0aW9ucyIsInNlY3Rpb24iLCJjcmVhdGVTd2l0Y2hlckl0ZW1zIiwic2V0SXRlbXMiLCJzd2l0Y2hUbyIsInNlY3Rpb25DdXJyZW50SWQiLCJzZWN0aW9uSWQiLCJ1cGRhdGVTd2l0Y2hlciIsInRlc3RUb2dnbGVTZWN0aW9uIiwic2VjdGlvbkVudGVyQ2IiLCJjb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CLENBRW5COzs7NkJBRVFDLEUsRUFBSTtBQUNYLFdBQUtDLEtBQUwsQ0FBV0QsR0FBR0UsTUFBSCxDQUFVQyxJQUFyQixJQUE2QkgsR0FBR0UsTUFBSCxDQUFVRSxLQUF2QztBQUNEOzs7NkJBRVFKLEUsRUFBSTtBQUFBOztBQUNYQSxTQUFHSyxjQUFIOztBQUVBQyxhQUFPQyxVQUFQLENBQWtCLFlBQU07QUFDdEJDLGdCQUFRQyxHQUFSLENBQVksd0JBQVo7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LENBQWxCO0FBQ0ErRSxXQUFTQyxNQUFULENBQWdCLG9CQUFDLDRDQUFELE9BQWhCLEVBQXlCRixTQUF6QixFQUZjLENBRXNCO0FBQ3JDIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LWFwcC5qc1wiKTtcbiIsImNsYXNzIElucHV0Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY2hhbmdlQ2IoZXYpIHtcbiAgICB0aGlzLnN0YXRlW2V2LnRhcmdldC5uYW1lXSA9IGV2LnRhcmdldC52YWx1ZVxuICB9XG5cbiAgc3VibWl0Q2IoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybSBzdWJtaXQsIHRpbWVvdXRlZCcpXG4gICAgICB0aGlzLnByb3BzLnN1Ym1pdENiKHtzdGF0dXM6IDIwMCwgcmVzcG9uc2VUZXh0OiBcIlwifSlcbiAgICB9LCA1MDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5wcm9wcy5pbnB1dHMubWFwKChpbnB1dCwgaSkgPT4ge1xuICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT0gJ2lucHV0Jykge1xuICAgICAgICByZXR1cm4gPGlucHV0IG5hbWU9e2lucHV0Lm5hbWV9IHR5cGU9e2lucHV0LnR5cGV9IGtleT17aS50b1N0cmluZygpfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VDYn0gLz5cbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudGFnTmFtZSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHJldHVybiA8dGV4dGFyZWEgbmFtZT17aW5wdXQubmFtZX0gdHlwZT17aW5wdXQudHlwZX0ga2V5PXtpLnRvU3RyaW5nKCl9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUNifSAvPlxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIHtpbnB1dHN9XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3RoaXMucHJvcHMuc3VibWl0VmFsfSBvbkNsaWNrPXt0aGlzLnN1Ym1pdENiLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7SW5wdXRGb3JtfVxuIiwiZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBvbkNsaWNrPXtwcm9wcy5jbGlja0NifT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQge0hlYWRlcn1cbiIsImZ1bmN0aW9uIEluZm8ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgIDxoMT57cHJvcHMuaGVhZGluZ308L2gxPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEluZm9zKHByb3BzKSB7XG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgcmV0dXJuICg8SW5mbyBoZWFkaW5nPXtpdGVtLmh9IGtleT17aS50b1N0cmluZygpfT57aXRlbS50ZXh0fTwvSW5mbz4pXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9zXCI+XG4gICAgICB7aXRlbXN9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtJbmZvLCBJbmZvc31cbiIsImZ1bmN0aW9uIE5hdkxpbmsocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtwcm9wcy51cmx9PjxzcGFuPntwcm9wcy50ZXh0fTwvc3Bhbj48L2E+XG4gIClcbn1cblxuZXhwb3J0IHtOYXZMaW5rfVxuIiwiZnVuY3Rpb24gTmF2KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJsaW5rcy1jb250YWluZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQge05hdn1cbiIsImZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KCkge1xuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgOlxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGgoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIDpcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aCk7XG5cbn1cblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnZpc2libGUgPSBwcm9wcy52aXNpYmxlXG4gICAgdGhpcy5kb20gPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgLy8gd2UnbGwgdXNlIHRoaXMgdG8gZGV0ZXJtaW5lIGlmIHNlY3Rpb24gaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgdGhpcy52SCA9IGdldFZpZXdwb3J0SGVpZ2h0KClcbiAgICB0aGlzLmluVmlld1ByZXYgPSBmYWxzZVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMudkggPSBnZXRWaWV3cG9ydEhlaWdodCgpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMudmlzaWJsZSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGluVmlldyA9IHRoaXMuaXNJblZpZXcoKVxuICAgICAgaWYgKHRoaXMuaW5WaWV3UHJldiAhPSBpblZpZXcpIHtcbiAgICAgICAgaWYgKGluVmlldylcbiAgICAgICAgICB0aGlzLnByb3BzLmluVmlld0NiKHRoaXMucHJvcHMuaWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHt9XG4gICAgLy8gdGhpcy5zdGF0ZS52aXNpYmxlID0gcHJvcHMudmlzaWJsZVxuXG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZG9tLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVkXCIpXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucHJvcHMub25Ub2dnbGVWaXNpYih0aGlzLnByb3BzLmlkZW50aWZpZXIpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZG9tLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcIm5vbmVkXCIpXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2VcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlVmlzaWIodGhpcy5wcm9wcy5pZGVudGlmaWVyKVxuICB9XG5cbiAgaXNJblZpZXcoKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZG9tLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiAoXG4gICAgICByZWN0LnRvcCA+PSBNYXRoLnJvdW5kKCh0aGlzLnZILzMpKi0xKSAmJlxuICAgICAgcmVjdC50b3AgPD0gTWF0aC5yb3VuZCh0aGlzLnZILzMpXG4gICAgICAvLyByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgLy8gcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiAvKm9yICQod2luZG93KS5oZWlnaHQoKSAqL1xuICAgICAgLy8gcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAvKm9yICQod2luZG93KS53aWR0aCgpICovXG4gICAgKVxuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMudmlzaWJsZSkgPyAnY29udGVudC1zZWN0aW9uJyA6ICdjb250ZW50LXNlY3Rpb24gbm9uZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gcmVmPXt0aGlzLmRvbX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkZW50aWZpZXJ9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTZWN0aW9ufVxuIiwiLyoqXG4gIEBwYXJhbSB7YXJyYXl9IHByb3BzLml0ZW1zIGFycmF5IG9mIGl0ZW1zLCBlYWNoIG9mIHRoZSBmb3JtYXQ6XG4gICAgQHBhcmFtIHtzdHJpbmd9IHByb3BzLml0ZW1zW25dLmlubmVyVGV4dFxuICAgIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy5pdGVtc1tuXS4gLi4uXG4qL1xuXG5cbmZ1bmN0aW9uIFN3aXRjaGVySXRlbShwcm9wcykge1xuICBjb25zdCBpZCA9IFwiaXRlbV9cIisgcHJvcHMuaWRlbnRpZmllclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItaXRlbVwiIGlkPXtpZH0gZGF0YS1pZGVudGlmaWVyPXtwcm9wcy5pZGVudGlmaWVyfT5cbiAgICB7cHJvcHMudmFsfVxuICA8L2Rpdj4pXG59XG5cbmZ1bmN0aW9uIFN3aXRjaGVySXRlbUR1bW15KHByb3BzKSB7XG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCIgZGF0YS1pZGVudGlmaWVyPXtwcm9wcy5pZGVudGlmaWVyfT5cbiAgICB7cHJvcHMudmFsfVxuICA8L2Rpdj4pXG59XG5cbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIHRoaXMucmVmUm9vdCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5pdGVtcyA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6IHRoaXMuZm9ybUl0ZW1FbHMocHJvcHMuaXRlbXMpXG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRWxzID0gdGhpcy5mb3JtSXRlbUVscyhpdGVtcylcbiAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogaXRlbUVsc30pXG4gIH1cblxuICBzd2l0Y2hUbyhpZGVudGlmaWVyKSB7XG4gICAgLy8gY29uc3Qgb2Zmc2V0ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW1JZClcbiAgICAvLyB0aGlzLmRvbVJlZi5zdHlsZS50b3AgPVxuICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoZXIgaXRlbXMgcmVmXCIsIHRoaXMuaXRlbXMpXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5pdGVtcy5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtXycraWRlbnRpZmllcikub2Zmc2V0VG9wXG4gICAgdGhpcy5pdGVtcy5jdXJyZW50LnN0eWxlLnRvcCA9IG9mZnNldCAqIC0xICsgXCJweFwiXG4gIH1cblxuICBmb3JtSXRlbUVscyhpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1zRHVtbXlQcmUgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcHJlX1wiKyBpdGVtLmlkZW50aWZpZXJcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW1EdW1teSB2YWw9e2l0ZW0udmFsfSBpZGVudGlmaWVyPXtpdGVtLmlkZW50aWZpZXJ9IGtleT17a2V5fS8+XG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1zRHVtbXlQb3N0ID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBcImR1bW15LXBvc3RfXCIrIGl0ZW0uaWRlbnRpZmllclxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaGVySXRlbUR1bW15IHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNSZWFsID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtIHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0ga2V5PXtpdGVtLmlkZW50aWZpZXIudG9TdHJpbmcoKX0gLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGl0ZW1zRHVtbXlQcmVcbiAgICAgIC5jb25jYXQoaXRlbXNSZWFsKVxuICAgICAgLmNvbmNhdChpdGVtc0R1bW15UG9zdClcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3N3aXRjaGVyLCByZW5kZXInKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgPGRpdiByZWY9e3RoaXMuaXRlbXN9IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1zXCI+e3RoaXMuc3RhdGUuaXRlbXN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7U3dpdGNoZXJ9XG4iLCJpbXBvcnQge21haW59IGZyb20gJy4vc2NyaXB0cy9zY3JpcHQuanMnXG5tYWluKClcbiIsImltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCB7TmF2fSBmcm9tICcuLi9jb21wb25lbnRzL25hdi5qcydcbmltcG9ydCB7TmF2TGlua30gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtbGluay5qcydcbmltcG9ydCB7SW5wdXRGb3JtfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0uanMnXG4vLyBpbXBvcnQge0Zvb3Rlcn0gZnJvbSAnZm9vdGVyLmpzJ1xuaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlci5qcydcbmltcG9ydCB7U2VjdGlvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLmpzJ1xuaW1wb3J0IHtJbmZvLCBJbmZvc30gZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvLmpzJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2VjdGlvbnMgPSB7XG4gICAgICBob21lOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIGlkZW50aXR5OiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNhbGVzU3RhdHVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHdpcDA6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgdmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2VsbFdpdGhVczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzUmVzcG9uc2U6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgY29udGFjdEZvcm06IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgY29udGFjdFByb2Nlc3M6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgIH1cblxuICAgIC8vIHNvbWUgY29udGVudCBkYXRhXG4gICAgdGhpcy5zYWxlc1N0YXR1c01ldHJpY3MgPSBbXG4gICAgICB7aDogXCI1NTAwMFwiLCB0ZXh0OiAndHdvIGxpbmVzIG9mIHRleHQnfSxcbiAgICAgIHtoOiBcIjU1MDAwXCIsIHRleHQ6ICd0d28gbGluZXMgb2YgdGV4dCd9LFxuICAgICAge2g6IFwiNTUwMDBcIiwgdGV4dDogJ3R3byBsaW5lcyBvZiB0ZXh0J30sXG4gICAgICB7aDogXCI1NTAwMFwiLCB0ZXh0OiAndHdvIGxpbmVzIG9mIHRleHQnfSxcbiAgICBdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0VmlzaWJsZVNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VjdGlvbnMpXG4gICAgY29uc3Qgc2VjdGlvbnNWaXNpYmxlID0gW11cblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zS2V5cylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25zKVxuICAgIHNlY3Rpb25zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgc2VjdGlvbnNWaXNpYmxlLnB1c2godGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zVmlzaWJsZSlcbiAgICByZXR1cm4gc2VjdGlvbnNWaXNpYmxlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmhvbWV9IGlkZW50aWZpZXI9XCJob21lXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gY2xhc3NOYW1lPVwiaW5mb1wiIGhlYWRpbmc9XCJIb21lIEhlYWRpbmdcIj5cbiAgICAgICAgICAgIHtcIkhvbWUgaW5mbyB0ZXh0IGJvZHlcIn1cbiAgICAgICAgICA8L0luZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmlkZW50aXR5fSBpZGVudGlmaWVyPVwiaWRlbnRpdHlcIiB2aXNpYmxlPXt0cnVlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbGFyZ2VcIj57XCJMb2dvXCJ9PC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zYWxlc1N0YXR1c30gaWRlbnRpZmllcj1cInNhbGVzU3RhdHVzXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPEluZm9zIGl0ZW1zPXt0aGlzLnNhbGVzU3RhdHVzTWV0cmljc30+PC9JbmZvcz5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLndpcDB9IGlkZW50aWZpZXI9XCJ3aXAwXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPGgxPldvcmsgSW4gUHJvZ3Jlc3MgSGVyZSAuLi48L2gxPlxuICAgICAgICAgIDxwPkkgc3VwcG9zZSwgdGhpcyBzaG91bGQgYmUgYSBmb3JtLCB3aGljaCBvbiByZXNwb25zZSByZXZlYWxzIHRoZSBuZXh0IHNlY3Rpb25zPC9wPlxuICAgICAgICAgIDxoMiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zLmN1cnJlbnQuc2hvdygpXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXMuY3VycmVudC5zaG93KClcbiAgICAgICAgICB9fT5DbGljayBNZSE8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zfSBpZGVudGlmaWVyPVwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnNcIiB2aXNpYmxlPXtmYWxzZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gY2xhc3NOYW1lPVwiaW5mb1wiIGhlYWRpbmc9XCJCYXNlZCBvbiBJbmZvIFlvdSBQcm92aWRlZFwiPlxuICAgICAgICAgICAgPHA+d2UgZm91bmQgdGhhdCB5b3VyIGR1Y2tzIGlzIHdvcnRoIDxzcGFuPntcIiQ1IC0gJDZcIn1NIHJhbmdlPC9zcGFuPiBhbmQgdGhlcmUgYXJlIHtcIjI1XCJ9IGJ1eWVyczwvcD5cbiAgICAgICAgICA8L0luZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj48L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXN9IGlkZW50aWZpZXI9XCJzZWxsV2l0aFVzXCIgdmlzaWJsZT17ZmFsc2V9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxJbnB1dEZvcm1cbiAgICAgICAgICBzdWJtaXRDYj17KHhocikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdENiIGNiJylcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZS5jdXJyZW50LnNob3coKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5wdXRzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZ05hbWU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgIDwvSW5wdXRGb3JtPlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2VsbFdpdGhVc1Jlc3BvbnNlfSBpZGVudGlmaWVyPVwic2VsbFdpdGhVc1Jlc3BvbnNlXCIgdmlzaWJsZT17ZmFsc2V9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIDxoMT5XZSBSZWNlaXZlZDo8L2gxPlxuICAgICAgICAgIDxzcGFuPmR1Y2tzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RGb3JtfSBpZGVudGlmaWVyPVwiY29udGFjdEZvcm1cIiB2aXNpYmxlPXt0cnVlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgPElucHV0Rm9ybVxuICAgICAgICBzdWJtaXRDYj17KHhocikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRDYiBjYicpXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZS5jdXJyZW50LnNob3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnTmFtZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWdOYW1lOiBcImlucHV0XCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnTmFtZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICA8L0lucHV0Rm9ybT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RQcm9jZXNzfSBpZGVudGlmaWVyPVwiY29udGFjdFByb2Nlc3NcIiB2aXNpYmxlPXt0cnVlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8ZGl2IGlkPVwib3VyUHJvY2Vzc1wiPjwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMuY29udGFjdCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5hYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5uZXdzID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY3JlYXRlU3dpdGNoZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5ob21lLmN1cnJlbnQuZ2V0VmlzaWJsZVNlY3Rpb25zKCkubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWw6ICcwJysgaSxcbiAgICAgICAgaWRlbnRpZmllcjogc2VjdGlvbi5wcm9wcy5pZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN3aXRjaGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgdGhpcy5jcmVhdGVTd2l0Y2hlckl0ZW1zKCkpXG4gICAgdGhpcy5zd2l0Y2hlci5jdXJyZW50LnNldEl0ZW1zKHRoaXMuY3JlYXRlU3dpdGNoZXJJdGVtcygpKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3dpdGNoZXIuY3VycmVudC5zd2l0Y2hUbyh0aGlzLnNlY3Rpb25DdXJyZW50SWQpXG4gICAgfSwgMzApXG4gIH1cblxuICBzZWN0aW9uRW50ZXJDYihzZWN0aW9uSWQpIHtcbiAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc3dpdGNoVG8oc2VjdGlvbklkKVxuICAgIHRoaXMuc2VjdGlvbkN1cnJlbnRJZCA9IHNlY3Rpb25JZFxuICB9XG5cbiAgdGVzdFRvZ2dsZVNlY3Rpb24oKSB7XG4gICAgdGhpcy5ob21lLmN1cnJlbnQuc2VjdGlvbnMudmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnMuY3VycmVudC5zaG93KClcbiAgfVxuXG4gIC8qXG4gIHJvdXRlKHVybCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKFwiP1wiKSsxKVxuICAgIGNvbnN0IGhhc2ggPSBxdWVyeS5zbGljZShxdWVyeS5pbmRleE9mKFwiI1wiKSsxKVxuICAgIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5LnNsaWNlKDAsIHF1ZXJ5LmluZGV4T2YoXCIjXCIpKVxuXG4gICAgY29uc3QgcGFnZSA9IHNlYXJjaC5zcGxpdChcIj1cIilbMV1cbiAgICBzd2l0Y2gocGFnZSkge1xuICAgICAgY2FzZShwYWdlID09IFwiaG9tZVwiKSB7XG5cbiAgICAgIH1cblxuICAgICAgY2FzZShwYWdlID09IFwiYWJvdXRcIikge1xuXG4gICAgICB9XG5cbiAgICAgIGNhc2UocGFnZSA9PSBcIm5ld3NcIikge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4gICovXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhcHBcIiwgdGhpcylcbiAgICB0aGlzLnNlY3Rpb25DdXJyZW50SWQgPSAnaG9tZSdcbiAgICB0aGlzLnVwZGF0ZVN3aXRjaGVyKClcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc3dpdGNoVG8oJ2hvbWUnKVxuICAgIH0sIDI1MClcblxuXG4gICAgLy8gdGhpcy5zd2l0Y2hlci5jdXJyZW50LnN3aXRjaFRvKFwiaWRlbnRpdHlcIilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICB2YWw6ICcwMScsXG4gICAgICBpZGVudGlmaWVyOiAnaG9tZSdcbiAgICB9XVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXIgY2xpY2tDYj17dGhpcy50ZXN0VG9nZ2xlU2VjdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgPE5hdkxpbmsgdGV4dD1cIkhPTUVcIiB1cmw9XCI/cGFnZT1ob21lI2hvbWVcIi8+XG4gICAgICAgICAgICA8TmF2TGluayB0ZXh0PVwiQUJPVVQgVVNcIiB1cmw9XCI/cGFnZT1hYm91dFwiLz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJORVdTXCIgdXJsPVwiP3BhZ2U9bmV3c1wiLz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJDT05UQUNUXCIgdXJsPVwiP3BhZ2U9aG9tZSNjb250YWN0Rm9ybVwiLz5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtbWVudS1idXR0b25cIj48L2Rpdj5cblxuXG4gICAgICAgIDxTd2l0Y2hlciByZWY9e3RoaXMuc3dpdGNoZXJ9IGNsYXNzTmFtZT1cInN3aXRjaGVyXCIgaXRlbXM9e2l0ZW1zfT48L1N3aXRjaGVyPlxuXG4gICAgICAgIDxIb21lIHJlZj17dGhpcy5ob21lfSBvblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5PXt0aGlzLnVwZGF0ZVN3aXRjaGVyLmJpbmQodGhpcyl9IG9uU2VjdGlvbkVudGVyQ2I9e3RoaXMuc2VjdGlvbkVudGVyQ2IuYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge0FwcH0gLy8gSG9tZSwgSG9tZVdyYXBwZXJcbiIsIi8vIGltcG9ydCB7U3dpdGNoZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvc3dpdGNoZXIuanMnXG5pbXBvcnQge0FwcH0gZnJvbSAnLi9ob21lLmpzJ1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGNvbnRhaW5lcikgLy8gPFN3aXRjaGVyIGNsYXNzTmFtZT1cInNsaWRlclwiIHZpc2libGVJdGVtcz17M30gaXRlbXM9e2RhdGEuaXRlbXN9IC8+XG59XG5cbmV4cG9ydCB7bWFpbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=