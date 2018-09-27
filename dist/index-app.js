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

/***/ "./src/components/header-link.js":
/*!***************************************!*\
  !*** ./src/components/header-link.js ***!
  \***************************************/
/*! exports provided: HeaderLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLink", function() { return HeaderLink; });
function HeaderLink(props) {
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
    null,
    props.children
  );
}



/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: Home, HomeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWrapper", function() { return HomeWrapper; });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/components/header.js");
/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switcher.js */ "./src/components/switcher.js");
/* harmony import */ var _section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.js */ "./src/components/section.js");
/* harmony import */ var _header_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-link.js */ "./src/components/header-link.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info.js */ "./src/components/info.js");
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

    _this.metrics = [{ h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }];

    _this.refe = React.createRef();
    // this.home = React.createRef()
    _this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef()
    };

    _this.switcher = React.createRef();
    return _this;
  }

  _createClass(Home, [{
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
    key: 'scrollToSection',
    value: function scrollToSection() {}
  }, {
    key: 'createSwitcherItems',
    value: function createSwitcherItems() {
      return this.getVisibleSections().map(function (section, i) {
        return {
          val: '0' + i,
          identifier: section.props.identifier
        };
      });
    }
  }, {
    key: 'updateSwitcher',
    value: function updateSwitcher() {
      this.switcher.props.items = this.createSwitcherItems();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.refe);
      // this.updateSwitcher()
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
        { ref: this.refe },
        React.createElement(
          _header_js__WEBPACK_IMPORTED_MODULE_0__["Header"],
          null,
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'HOME', url: '#home' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'ABOUT US', url: '' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'NEWS', url: '' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'CONTACT', url: '#contact' })
        ),
        React.createElement(_switcher_js__WEBPACK_IMPORTED_MODULE_1__["Switcher"], { id: 'switcher', items: items }),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.home, identifier: 'home', visible: true },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_4__["Info"],
              { heading: 'Home Heading' },
              "Home info text body"
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.identity, identifier: 'indentity', visible: true },
          "Logo"
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.salesStatus, identifier: 'salesStatus', visible: true },
          React.createElement(_info_js__WEBPACK_IMPORTED_MODULE_4__["Infos"], { items: this.metrics })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.wip0, identifier: 'wip0', visible: true },
          React.createElement(
            'h1',
            null,
            'Work In Progress Here ...'
          )
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.visitorPropertyEstimations, identifier: 'visitorPropertyEstimations', visible: false },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_4__["Info"],
              { heading: 'Based on Info You Provided' },
              React.createElement(
                'p',
                null,
                'we found that your property is worth ',
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
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.sellWithUs, identifier: 'sellWithUs', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.sellWithUsResponse, identifier: 'sellWithUsResponse', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.contactForm, identifier: 'contactForm', visible: true }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.contactProcess, identifier: 'contactProcess', visible: true })
      );
    }
  }]);

  return Home;
}(React.Component);

var HomeWrapper = function (_React$Component2) {
  _inherits(HomeWrapper, _React$Component2);

  function HomeWrapper(props) {
    _classCallCheck(this, HomeWrapper);

    var _this3 = _possibleConstructorReturn(this, (HomeWrapper.__proto__ || Object.getPrototypeOf(HomeWrapper)).call(this, props));

    _this3.home = React.createRef();
    return _this3;
  }

  _createClass(HomeWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.home);
      console.log(this.home.current.getVisibleSections.call(this.home.current));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(Home, { ref: this.home });
    }
  }]);

  return HomeWrapper;
}(React.Component);



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
      { heading: item.title, key: i.toString() },
      item.text
    );
  });

  return React.createElement(
    "div",
    { className: "metrics-container" },
    items
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

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.state = {};
    _this.state.visible = props.visible;
    return _this;
  }

  _createClass(Section, [{
    key: 'isVisible',
    value: function isVisible() {
      return this.state.visible;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var className = this.state.visible ? 'content-section' : 'content-section noned';

      return React.createElement(
        'section',
        { className: className, id: this.props.identifier },
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
    { className: "switcher-item", id: id, "data-id": props.identifier },
    props.val
  );
}

function SwitcherItemDummy(props) {
  return React.createElement(
    "div",
    { className: "switcher-item" },
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

    var itemsDummyPre = _this.props.items.map(function (item, i) {
      var key = "dummy-pre_" + item.identifier;
      return React.createElement(SwitcherItemDummy, { val: item.val, key: key });
    });

    var itemsDummyPost = _this.props.items.map(function (item, i) {
      var key = "dummy-post_" + item.identifier;
      return React.createElement(SwitcherItemDummy, { val: item.val, key: key });
    });

    var itemsReal = _this.props.items.map(function (item, i) {
      return React.createElement(SwitcherItem, { identifier: item.identifier, key: item.identifier.toString() });
    });

    _this.itemEls = itemsDummyPre.concat(itemsReal).concat(itemsDummyPost);

    return _this;
  }

  _createClass(Switcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "switchTo",
    value: function switchTo(anId) {
      // const offset = this.items.indexOf(itemId)
      // this.domRef.style.top =

      var offset = this.items.current.querySelector('#item_' + anId).offsetTop;
      this.items.current.style.top = offset * -1 + "px";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "switcher" },
        React.createElement(
          "div",
          { className: "switcher-highlight" },
          React.createElement(
            "div",
            { ref: this.items, className: "switcher-items" },
            this.itemEls
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

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home.js */ "./src/components/home.js");
// import {Switcher} from '../components/switcher.js'


function main() {
  var container = document.querySelector('main');
  ReactDOM.render(React.createElement(_components_home_js__WEBPACK_IMPORTED_MODULE_0__["HomeWrapper"], null), container); // <Switcher className="slider" visibleItems={3} items={data.items} />
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIkhlYWRlckxpbmsiLCJwcm9wcyIsInVybCIsInRleHQiLCJIZWFkZXIiLCJjaGlsZHJlbiIsIkhvbWUiLCJtZXRyaWNzIiwiaCIsInJlZmUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNlY3Rpb25zIiwiaG9tZSIsImlkZW50aXR5Iiwic2FsZXNTdGF0dXMiLCJ3aXAwIiwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnMiLCJzZWxsV2l0aFVzIiwic2VsbFdpdGhVc1Jlc3BvbnNlIiwic3dpdGNoZXIiLCJzZWN0aW9uc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnNWaXNpYmxlIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJrZXkiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwicHVzaCIsImdldFZpc2libGVTZWN0aW9ucyIsIm1hcCIsInNlY3Rpb24iLCJpIiwidmFsIiwiaWRlbnRpZmllciIsIml0ZW1zIiwiY3JlYXRlU3dpdGNoZXJJdGVtcyIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJDb21wb25lbnQiLCJIb21lV3JhcHBlciIsImNhbGwiLCJJbmZvIiwiaGVhZGluZyIsIkluZm9zIiwiaXRlbSIsInRpdGxlIiwidG9TdHJpbmciLCJTZWN0aW9uIiwic3RhdGUiLCJ2aXNpYmxlIiwiY2xhc3NOYW1lIiwiU3dpdGNoZXJJdGVtIiwiaWQiLCJTd2l0Y2hlckl0ZW1EdW1teSIsIlN3aXRjaGVyIiwiaXRlbXNEdW1teVByZSIsIml0ZW1zRHVtbXlQb3N0IiwiaXRlbXNSZWFsIiwiaXRlbUVscyIsImNvbmNhdCIsImFuSWQiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwic3R5bGUiLCJ0b3AiLCJtYWluIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsU0FDRTtBQUFBO0FBQUEsTUFBRyxNQUFNQSxNQUFNQyxHQUFmO0FBQW9CO0FBQUE7QUFBQTtBQUFPRCxZQUFN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QUtYLFVBQS9CLEVBQTJDLEtBQUtXLEtBQUtYLFVBQUwsQ0FBZ0JhLFFBQWhCLEVBQWhELEdBREY7QUFHRCxLQUppQixDQUFsQjs7QUFNQSxVQUFLWSxPQUFMLEdBQ0VILGNBQ0NJLE1BREQsQ0FDUUYsU0FEUixFQUVDRSxNQUZELENBRVFILGNBRlIsQ0FERjs7QUExQmlCO0FBK0JsQjs7Ozt3Q0FFbUIsQ0FDbkI7Ozs2QkFFUUksSSxFQUFNO0FBQ2I7QUFDQTs7QUFFQSxVQUFNQyxTQUFTLEtBQUszQixLQUFMLENBQVdULE9BQVgsQ0FBbUJxQyxhQUFuQixDQUFpQyxXQUFTRixJQUExQyxFQUFnREcsU0FBL0Q7QUFDQSxXQUFLN0IsS0FBTCxDQUFXVCxPQUFYLENBQW1CdUMsS0FBbkIsQ0FBeUJDLEdBQXpCLEdBQStCSixTQUFTLENBQUMsQ0FBVixHQUFjLElBQTdDO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLEtBQUssS0FBSzNCLEtBQWYsRUFBc0IsV0FBVSxnQkFBaEM7QUFBa0QsaUJBQUt3QjtBQUF2RDtBQURGO0FBREYsT0FERjtBQU9EOzs7O0VBckRvQnBELE1BQU1nQyxTOzs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTtBQUFBO0FBQ0E0QiwrREFBSUEsRzs7Ozs7Ozs7Ozs7O0FDREo7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsTUFBTUMsWUFBWUMsU0FBU04sYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBTyxXQUFTQyxNQUFULENBQWdCLG9CQUFDLCtEQUFELE9BQWhCLEVBQWlDSCxTQUFqQyxFQUZjLENBRThCO0FBQzdDIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LWFwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIEhlYWRlckxpbmsocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtwcm9wcy51cmx9PjxzcGFuPntwcm9wcy50ZXh0fTwvc3Bhbj48L2E+XG4gIClcbn1cblxuZXhwb3J0IHtIZWFkZXJMaW5rfVxuIiwiZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQge0hlYWRlcn1cbiIsImltcG9ydCB7SGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcydcbmltcG9ydCB7U3dpdGNoZXJ9IGZyb20gJy4vc3dpdGNoZXIuanMnXG4vLyBpbXBvcnQge0Zvb3Rlcn0gZnJvbSAnZm9vdGVyLmpzJ1xuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb24uanMnXG5pbXBvcnQge0hlYWRlckxpbmt9IGZyb20gJy4vaGVhZGVyLWxpbmsuanMnXG5pbXBvcnQge0luZm8sIEluZm9zfSBmcm9tICcuL2luZm8uanMnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5tZXRyaWNzID0gW1xuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9XG4gICAgXVxuXG4gICAgdGhpcy5yZWZlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICAvLyB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuc2VjdGlvbnMgPSB7XG4gICAgICBob21lOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIGlkZW50aXR5OiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNhbGVzU3RhdHVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHdpcDA6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgdmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2VsbFdpdGhVczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzUmVzcG9uc2U6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgZ2V0VmlzaWJsZVNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VjdGlvbnMpXG4gICAgY29uc3Qgc2VjdGlvbnNWaXNpYmxlID0gW11cblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zS2V5cylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25zKVxuICAgIHNlY3Rpb25zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgc2VjdGlvbnNWaXNpYmxlLnB1c2godGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zVmlzaWJsZSlcbiAgICByZXR1cm4gc2VjdGlvbnNWaXNpYmxlXG4gIH1cblxuICBzY3JvbGxUb1NlY3Rpb24oKSB7fVxuXG4gIGNyZWF0ZVN3aXRjaGVySXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmlzaWJsZVNlY3Rpb25zKCkubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWw6ICcwJysgaSxcbiAgICAgICAgaWRlbnRpZmllcjogc2VjdGlvbi5wcm9wcy5pZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN3aXRjaGVyKCkge1xuICAgIHRoaXMuc3dpdGNoZXIucHJvcHMuaXRlbXMgPSB0aGlzLmNyZWF0ZVN3aXRjaGVySXRlbXMoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZWZlKVxuICAgIC8vIHRoaXMudXBkYXRlU3dpdGNoZXIoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gW3tcbiAgICAgIHZhbDogJzAxJyxcbiAgICAgIGlkZW50aWZpZXI6ICdob21lJ1xuICAgIH1dXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMucmVmZX0+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiSE9NRVwiIHVybD1cIiNob21lXCIvPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiQUJPVVQgVVNcIiB1cmw9XCJcIi8+XG4gICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJORVdTXCIgdXJsPVwiXCIvPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiQ09OVEFDVFwiIHVybD1cIiNjb250YWN0XCIvPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIDxTd2l0Y2hlciBpZD1cInN3aXRjaGVyXCIgaXRlbXM9e2l0ZW1zfT48L1N3aXRjaGVyPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuaG9tZX0gaWRlbnRpZmllcj1cImhvbWVcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gaGVhZGluZz1cIkhvbWUgSGVhZGluZ1wiPlxuICAgICAgICAgICAge1wiSG9tZSBpbmZvIHRleHQgYm9keVwifVxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuaWRlbnRpdHl9IGlkZW50aWZpZXI9XCJpbmRlbnRpdHlcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAge1wiTG9nb1wifVxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2FsZXNTdGF0dXN9IGlkZW50aWZpZXI9XCJzYWxlc1N0YXR1c1wiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8SW5mb3MgaXRlbXM9e3RoaXMubWV0cmljc30+PC9JbmZvcz5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLndpcDB9IGlkZW50aWZpZXI9XCJ3aXAwXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgIDxoMT5Xb3JrIEluIFByb2dyZXNzIEhlcmUgLi4uPC9oMT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zfSBpZGVudGlmaWVyPVwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnNcIiB2aXNpYmxlPXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGhlYWRpbmc9XCJCYXNlZCBvbiBJbmZvIFlvdSBQcm92aWRlZFwiPlxuICAgICAgICAgICAgPHA+d2UgZm91bmQgdGhhdCB5b3VyIHByb3BlcnR5IGlzIHdvcnRoIDxzcGFuPntcIiQ1IC0gJDZcIn1NIHJhbmdlPC9zcGFuPiBhbmQgdGhlcmUgYXJlIHtcIjI1XCJ9IGJ1eWVyczwvcD5cbiAgICAgICAgICA8L0luZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj48L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXN9IGlkZW50aWZpZXI9XCJzZWxsV2l0aFVzXCIgdmlzaWJsZT17ZmFsc2V9PlxuXG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzUmVzcG9uc2V9IGlkZW50aWZpZXI9XCJzZWxsV2l0aFVzUmVzcG9uc2VcIiB2aXNpYmxlPXtmYWxzZX0+XG5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RGb3JtfSBpZGVudGlmaWVyPVwiY29udGFjdEZvcm1cIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RQcm9jZXNzfSBpZGVudGlmaWVyPVwiY29udGFjdFByb2Nlc3NcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBIb21lV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ob21lKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuaG9tZS5jdXJyZW50LmdldFZpc2libGVTZWN0aW9ucy5jYWxsKHRoaXMuaG9tZS5jdXJyZW50KSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvbWUgcmVmPXt0aGlzLmhvbWV9IC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7SG9tZSwgSG9tZVdyYXBwZXJ9XG4iLCJmdW5jdGlvbiBJbmZvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICA8aDE+e3Byb3BzLmhlYWRpbmd9PC9oMT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJbmZvcyhwcm9wcykge1xuICBjb25zdCBpdGVtcyA9IHByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgIHJldHVybiAoPEluZm8gaGVhZGluZz17aXRlbS50aXRsZX0ga2V5PXtpLnRvU3RyaW5nKCl9PntpdGVtLnRleHR9PC9JbmZvPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljcy1jb250YWluZXJcIj5cbiAgICAgIHtpdGVtc31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0luZm8sIEluZm9zfVxuIiwiY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge31cbiAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBwcm9wcy52aXNpYmxlXG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudmlzaWJsZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5zdGF0ZS52aXNpYmxlKSA/ICdjb250ZW50LXNlY3Rpb24nIDogJ2NvbnRlbnQtc2VjdGlvbiBub25lZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWRlbnRpZmllcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge1NlY3Rpb259XG4iLCIvKipcbiAgQHBhcmFtIHthcnJheX0gcHJvcHMuaXRlbXMgYXJyYXkgb2YgaXRlbXMsIGVhY2ggb2YgdGhlIGZvcm1hdDpcbiAgICBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaXRlbXNbbl0uaW5uZXJUZXh0XG4gICAgQHBhcmFtIHtvYmplY3R9IHByb3BzLml0ZW1zW25dLiAuLi5cbiovXG5cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGlkID0gXCJpdGVtX1wiKyBwcm9wcy5pZGVudGlmaWVyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCIgaWQ9e2lkfSBkYXRhLWlkPXtwcm9wcy5pZGVudGlmaWVyfT5cbiAgICB7cHJvcHMudmFsfVxuICA8L2Rpdj4pXG59XG5cbmZ1bmN0aW9uIFN3aXRjaGVySXRlbUR1bW15KHByb3BzKSB7XG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCI+XG4gICAge3Byb3BzLnZhbH1cbiAgPC9kaXY+KVxufVxuXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICAvLyB0aGlzLnJlZlJvb3QgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuaXRlbXMgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVByZSA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBcImR1bW15LXByZV9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXCJkdW1teS1wb3N0X1wiKyBpdGVtLmlkZW50aWZpZXJcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW1EdW1teSB2YWw9e2l0ZW0udmFsfSBrZXk9e2tleX0vPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtc1JlYWwgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaGVySXRlbSBpZGVudGlmaWVyPXtpdGVtLmlkZW50aWZpZXJ9IGtleT17aXRlbS5pZGVudGlmaWVyLnRvU3RyaW5nKCl9IC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHRoaXMuaXRlbUVscyA9XG4gICAgICBpdGVtc0R1bW15UHJlXG4gICAgICAuY29uY2F0KGl0ZW1zUmVhbClcbiAgICAgIC5jb25jYXQoaXRlbXNEdW1teVBvc3QpXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgc3dpdGNoVG8oYW5JZCkge1xuICAgIC8vIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtSWQpXG4gICAgLy8gdGhpcy5kb21SZWYuc3R5bGUudG9wID1cblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbV8nK2FuSWQpLm9mZnNldFRvcFxuICAgIHRoaXMuaXRlbXMuY3VycmVudC5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArIFwicHhcIlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgPGRpdiByZWY9e3RoaXMuaXRlbXN9IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1zXCI+e3RoaXMuaXRlbUVsc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2hlcn1cbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi9zY3JpcHRzL3NjcmlwdC5qcydcbm1haW4oKVxuIiwiLy8gaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlci5qcydcbmltcG9ydCB7SG9tZVdyYXBwZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS5qcydcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gIFJlYWN0RE9NLnJlbmRlcig8SG9tZVdyYXBwZXIgLz4sIGNvbnRhaW5lcikgLy8gPFN3aXRjaGVyIGNsYXNzTmFtZT1cInNsaWRlclwiIHZpc2libGVJdGVtcz17M30gaXRlbXM9e2RhdGEuaXRlbXN9IC8+XG59XG5cbmV4cG9ydCB7bWFpbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=