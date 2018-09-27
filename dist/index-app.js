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
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/components/header.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/components/nav.js");
/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switcher.js */ "./src/components/switcher.js");
/* harmony import */ var _section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.js */ "./src/components/section.js");
/* harmony import */ var _nav_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-link.js */ "./src/components/nav-link.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info.js */ "./src/components/info.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// import {Footer} from 'footer.js'




/*
function Router(url, pages) {

}

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.metrics = [
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"}
    ]

    this.refe = React.createRef()
    // this.home = React.createRef()
    this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef(),
    }

    this.switcher = React.createRef()
  }

  getVisibleSections() {
    const sectionsKeys = Object.keys(this.sections)
    const sectionsVisible = []

    console.log(sectionsKeys)
    console.log(this.sections)
    sectionsKeys.forEach(key => {
      if (this.sections[key].current.isVisible()) {
        sectionsVisible.push(this.sections[key].current)
      }
    })

    console.log(sectionsVisible)
    return sectionsVisible
  }

  scrollToSection() {}

  createSwitcherItems() {
    return this.getVisibleSections().map((section, i) => {
      return {
        val: '0'+ i,
        identifier: section.props.identifier
      }
    })
  }

  updateSwitcher() {
    this.switcher.props.items = this.createSwitcherItems()
  }

  componentDidMount() {
    console.log(this.refe)
    // this.updateSwitcher()
  }

  render() {
    const items = [{
      val: '01',
      identifier: 'home'
    }]

    return (
      <div ref={this.refe}>
      <Header>
        <HeaderLink text="HOME" url="#home"/>
        <HeaderLink text="ABOUT US" url=""/>
        <HeaderLink text="NEWS" url=""/>
        <HeaderLink text="CONTACT" url="#contact"/>
      </Header>

      <Switcher id="switcher" items={items}></Switcher>

      <Section ref={this.sections.home} identifier="home" visible={true}>
        <div className="half">
          <Info heading="Home Heading">
            {"Home info text body"}
          </Info>
        </div>
        <div className="half">

        </div>
      </Section>

      <Section ref={this.sections.identity} identifier="indentity" visible={true}>
        {"Logo"}
      </Section>

      <Section ref={this.sections.salesStatus} identifier="salesStatus" visible={true}>
        <Infos items={this.metrics}></Infos>
      </Section>

      <Section ref={this.sections.wip0} identifier="wip0" visible={true}>
        <h1>Work In Progress Here ...</h1>
      </Section>

      <Section ref={this.sections.visitorPropertyEstimations} identifier="visitorPropertyEstimations" visible={false}>
        <div className="half">
          <Info heading="Based on Info You Provided">
            <p>we found that your property is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
          </Info>
        </div>
        <div className="half"></div>
      </Section>

      <Section ref={this.sections.sellWithUs} identifier="sellWithUs" visible={false}>

      </Section>

      <Section ref={this.sections.sellWithUsResponse} identifier="sellWithUsResponse" visible={false}>

      </Section>

      <Section ref={this.sections.contactForm} identifier="contactForm" visible={true}>
      </Section>

      <Section ref={this.sections.contactProcess} identifier="contactProcess" visible={true}>
      </Section>
      </div>
    )
  }
}

class HomeWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.home = React.createRef()
  }

  componentDidMount() {
    console.log(this.home)
    console.log(this.home.current.getVisibleSections.call(this.home.current))
  }

  render() {
    return (
      <Home ref={this.home} />
    )
  }
}

*/

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
      sellWithUsResponse: React.createRef()
    };

    _this.metrics = [{ h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }, { h: "5500", text: "two lines of text" }];
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
      return React.createElement(
        'div',
        { className: 'page' },
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_3__["Section"],
          { ref: this.sections.home, identifier: 'home', visible: true },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_5__["Info"],
              { className: 'info', heading: 'Home Heading' },
              "Home info text body"
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_3__["Section"],
          { ref: this.sections.identity, identifier: 'indentity', visible: true },
          React.createElement(
            'div',
            { 'class': 'logo-large' },
            "Logo"
          )
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_3__["Section"],
          { ref: this.sections.salesStatus, identifier: 'salesStatus', visible: true },
          React.createElement(_info_js__WEBPACK_IMPORTED_MODULE_5__["Infos"], { items: this.metrics })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_3__["Section"],
          { ref: this.sections.wip0, identifier: 'wip0', visible: true },
          React.createElement(
            'h1',
            null,
            'Work In Progress Here ...'
          )
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_3__["Section"],
          { ref: this.sections.visitorPropertyEstimations, identifier: 'visitorPropertyEstimations', visible: false },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_5__["Info"],
              { className: 'info', heading: 'Based on Info You Provided' },
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
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_3__["Section"], { ref: this.sections.sellWithUs, identifier: 'sellWithUs', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_3__["Section"], { ref: this.sections.sellWithUsResponse, identifier: 'sellWithUsResponse', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_3__["Section"], { ref: this.sections.contactForm, identifier: 'contactForm', visible: true }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_3__["Section"], { ref: this.sections.contactProcess, identifier: 'contactProcess', visible: true })
      );
    }
  }]);

  return Home;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.home = React.createRef();
    // this.contact = React.createRef()
    // this.about = React.createRef()
    // this.news = React.createRef()

    _this3.switcher = React.createRef();
    return _this3;
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
      console.log("items", this.createSwitcherItems());
      this.switcher.current.setItems(this.createSwitcherItems());
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
      console.log("app", this);
      this.updateSwitcher();
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
          _header_js__WEBPACK_IMPORTED_MODULE_0__["Header"],
          null,
          React.createElement('div', { className: 'logo' }),
          React.createElement(
            _nav_js__WEBPACK_IMPORTED_MODULE_1__["Nav"],
            null,
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_4__["NavLink"], { text: 'HOME', url: '?page=home#home' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_4__["NavLink"], { text: 'ABOUT US', url: '?page=about' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_4__["NavLink"], { text: 'NEWS', url: '?page=news' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_4__["NavLink"], { text: 'CONTACT', url: '?page=home#contact' })
          ),
          React.createElement('div', { className: 'search-button' })
        ),
        React.createElement('div', { className: 'toggle-menu-button' }),
        React.createElement(_switcher_js__WEBPACK_IMPORTED_MODULE_2__["Switcher"], { ref: this.switcher, className: 'switcher', items: items }),
        React.createElement(Home, { ref: this.home, onToggleSectionVisibility: this.updateSwitcher.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

 // Home, HomeWrapper

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
      console.log("switcher items ref", this.items);
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
  ReactDOM.render(React.createElement(_components_home_js__WEBPACK_IMPORTED_MODULE_0__["App"], null), container); // <Switcher className="slider" visibleItems={3} items={data.items} />
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYtbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiSG9tZSIsInNlY3Rpb25zIiwiaG9tZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaWRlbnRpdHkiLCJzYWxlc1N0YXR1cyIsIndpcDAiLCJ2aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9ucyIsInNlbGxXaXRoVXMiLCJzZWxsV2l0aFVzUmVzcG9uc2UiLCJtZXRyaWNzIiwiaCIsInRleHQiLCJzZWN0aW9uc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnNWaXNpYmxlIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJrZXkiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwicHVzaCIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJDb21wb25lbnQiLCJBcHAiLCJzd2l0Y2hlciIsImdldFZpc2libGVTZWN0aW9ucyIsIm1hcCIsInNlY3Rpb24iLCJpIiwidmFsIiwiaWRlbnRpZmllciIsImNyZWF0ZVN3aXRjaGVySXRlbXMiLCJzZXRJdGVtcyIsInVwZGF0ZVN3aXRjaGVyIiwiaXRlbXMiLCJiaW5kIiwiSW5mbyIsImhlYWRpbmciLCJJbmZvcyIsIml0ZW0iLCJ0b1N0cmluZyIsIk5hdkxpbmsiLCJ1cmwiLCJOYXYiLCJTZWN0aW9uIiwic3RhdGUiLCJ2aXNpYmxlIiwiY2xhc3NOYW1lIiwiU3dpdGNoZXJJdGVtIiwiaWQiLCJTd2l0Y2hlckl0ZW1EdW1teSIsIlN3aXRjaGVyIiwiZm9ybUl0ZW1FbHMiLCJpdGVtRWxzIiwic2V0U3RhdGUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwic3R5bGUiLCJ0b3AiLCJpdGVtc0R1bW15UHJlIiwiaXRlbXNEdW1teVBvc3QiLCJpdGVtc1JlYWwiLCJjb25jYXQiLCJtYWluIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsU0FD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QTdCLEVBQWtDLFlBQVlVLEtBQUtULFVBQW5ELEVBQStELEtBQUtkLEdBQXBFLEdBREY7QUFHRCxPQUxzQixDQUF2Qjs7QUFPQSxVQUFNOEMsWUFBWTVCLE1BQU1SLEdBQU4sQ0FBVSxVQUFDYSxJQUFELEVBQU9YLENBQVAsRUFBYTtBQUN2QyxlQUNFLG9CQUFDLFlBQUQsSUFBYyxLQUFLVyxLQUFLVixHQUF4QixFQUE2QixZQUFZVSxLQUFLVCxVQUE5QyxFQUEwRCxLQUFLUyxLQUFLVCxVQUFMLENBQWdCVSxRQUFoQixFQUEvRCxHQURGO0FBR0QsT0FKaUIsQ0FBbEI7O0FBTUEsYUFBT29CLGNBQ0pHLE1BREksQ0FDR0QsU0FESCxFQUVKQyxNQUZJLENBRUdGLGNBRkgsQ0FBUDtBQUlEOzs7d0NBRW1CLENBQ25COzs7NkJBRVE7QUFDUGhELGNBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLEtBQUssS0FBS29CLEtBQWYsRUFBc0IsV0FBVSxnQkFBaEM7QUFBa0QsaUJBQUtXLEtBQUwsQ0FBV1g7QUFBN0Q7QUFERjtBQURGLE9BREY7QUFPRDs7OztFQWhFb0JwQyxNQUFNd0IsUzs7Ozs7Ozs7Ozs7Ozs7QUNwQjdCO0FBQUE7QUFBQTtBQUNBMEMsK0RBQUlBLEc7Ozs7Ozs7Ozs7OztBQ0RKO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLE1BQU1DLFlBQVlDLFNBQVNWLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7QUFDQVcsV0FBU0MsTUFBVCxDQUFnQixvQkFBQyx1REFBRCxPQUFoQixFQUF5QkgsU0FBekIsRUFGYyxDQUVzQjtBQUNyQyIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC1hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCB7SGVhZGVyfVxuIiwiaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4vbmF2LmpzJ1xuaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi9zd2l0Y2hlci5qcydcbi8vIGltcG9ydCB7Rm9vdGVyfSBmcm9tICdmb290ZXIuanMnXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbi5qcydcbmltcG9ydCB7TmF2TGlua30gZnJvbSAnLi9uYXYtbGluay5qcydcbmltcG9ydCB7SW5mbywgSW5mb3N9IGZyb20gJy4vaW5mby5qcydcblxuLypcbmZ1bmN0aW9uIFJvdXRlcih1cmwsIHBhZ2VzKSB7XG5cbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm1ldHJpY3MgPSBbXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn1cbiAgICBdXG5cbiAgICB0aGlzLnJlZmUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMuaG9tZSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5zZWN0aW9ucyA9IHtcbiAgICAgIGhvbWU6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgaWRlbnRpdHk6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2FsZXNTdGF0dXM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgd2lwMDogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICB2aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNlbGxXaXRoVXNSZXNwb25zZTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlciA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBnZXRWaXNpYmxlU2VjdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VjdGlvbnNLZXlzID0gT2JqZWN0LmtleXModGhpcy5zZWN0aW9ucylcbiAgICBjb25zdCBzZWN0aW9uc1Zpc2libGUgPSBbXVxuXG4gICAgY29uc29sZS5sb2coc2VjdGlvbnNLZXlzKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdGlvbnMpXG4gICAgc2VjdGlvbnNLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICh0aGlzLnNlY3Rpb25zW2tleV0uY3VycmVudC5pc1Zpc2libGUoKSkge1xuICAgICAgICBzZWN0aW9uc1Zpc2libGUucHVzaCh0aGlzLnNlY3Rpb25zW2tleV0uY3VycmVudClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coc2VjdGlvbnNWaXNpYmxlKVxuICAgIHJldHVybiBzZWN0aW9uc1Zpc2libGVcbiAgfVxuXG4gIHNjcm9sbFRvU2VjdGlvbigpIHt9XG5cbiAgY3JlYXRlU3dpdGNoZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWaXNpYmxlU2VjdGlvbnMoKS5tYXAoKHNlY3Rpb24sIGkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbDogJzAnKyBpLFxuICAgICAgICBpZGVudGlmaWVyOiBzZWN0aW9uLnByb3BzLmlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU3dpdGNoZXIoKSB7XG4gICAgdGhpcy5zd2l0Y2hlci5wcm9wcy5pdGVtcyA9IHRoaXMuY3JlYXRlU3dpdGNoZXJJdGVtcygpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJlZmUpXG4gICAgLy8gdGhpcy51cGRhdGVTd2l0Y2hlcigpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbe1xuICAgICAgdmFsOiAnMDEnLFxuICAgICAgaWRlbnRpZmllcjogJ2hvbWUnXG4gICAgfV1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy5yZWZlfT5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJIT01FXCIgdXJsPVwiI2hvbWVcIi8+XG4gICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJBQk9VVCBVU1wiIHVybD1cIlwiLz5cbiAgICAgICAgPEhlYWRlckxpbmsgdGV4dD1cIk5FV1NcIiB1cmw9XCJcIi8+XG4gICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJDT05UQUNUXCIgdXJsPVwiI2NvbnRhY3RcIi8+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPFN3aXRjaGVyIGlkPVwic3dpdGNoZXJcIiBpdGVtcz17aXRlbXN9PjwvU3dpdGNoZXI+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5ob21lfSBpZGVudGlmaWVyPVwiaG9tZVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj5cbiAgICAgICAgICA8SW5mbyBoZWFkaW5nPVwiSG9tZSBIZWFkaW5nXCI+XG4gICAgICAgICAgICB7XCJIb21lIGluZm8gdGV4dCBib2R5XCJ9XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5pZGVudGl0eX0gaWRlbnRpZmllcj1cImluZGVudGl0eVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgICB7XCJMb2dvXCJ9XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zYWxlc1N0YXR1c30gaWRlbnRpZmllcj1cInNhbGVzU3RhdHVzXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgIDxJbmZvcyBpdGVtcz17dGhpcy5tZXRyaWNzfT48L0luZm9zPlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMud2lwMH0gaWRlbnRpZmllcj1cIndpcDBcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgPGgxPldvcmsgSW4gUHJvZ3Jlc3MgSGVyZSAuLi48L2gxPlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMudmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnN9IGlkZW50aWZpZXI9XCJ2aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uc1wiIHZpc2libGU9e2ZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gaGVhZGluZz1cIkJhc2VkIG9uIEluZm8gWW91IFByb3ZpZGVkXCI+XG4gICAgICAgICAgICA8cD53ZSBmb3VuZCB0aGF0IHlvdXIgcHJvcGVydHkgaXMgd29ydGggPHNwYW4+e1wiJDUgLSAkNlwifU0gcmFuZ2U8L3NwYW4+IGFuZCB0aGVyZSBhcmUge1wiMjVcIn0gYnV5ZXJzPC9wPlxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPjwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2VsbFdpdGhVc30gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNcIiB2aXNpYmxlPXtmYWxzZX0+XG5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZX0gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNSZXNwb25zZVwiIHZpc2libGU9e2ZhbHNlfT5cblxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuY29udGFjdEZvcm19IGlkZW50aWZpZXI9XCJjb250YWN0Rm9ybVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuY29udGFjdFByb2Nlc3N9IGlkZW50aWZpZXI9XCJjb250YWN0UHJvY2Vzc1wiIHZpc2libGU9e3RydWV9PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEhvbWVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaG9tZSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhvbWUpXG4gICAgY29uc29sZS5sb2codGhpcy5ob21lLmN1cnJlbnQuZ2V0VmlzaWJsZVNlY3Rpb25zLmNhbGwodGhpcy5ob21lLmN1cnJlbnQpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9tZSByZWY9e3RoaXMuaG9tZX0gLz5cbiAgICApXG4gIH1cbn1cblxuKi9cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNlY3Rpb25zID0ge1xuICAgICAgaG9tZTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBpZGVudGl0eTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzYWxlc1N0YXR1czogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICB3aXAwOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNlbGxXaXRoVXM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2VsbFdpdGhVc1Jlc3BvbnNlOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICB9XG5cbiAgICB0aGlzLm1ldHJpY3MgPSBbXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn0sXG4gICAgICB7aDogXCI1NTAwXCIsIHRleHQ6IFwidHdvIGxpbmVzIG9mIHRleHRcIn1cbiAgICBdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0VmlzaWJsZVNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VjdGlvbnMpXG4gICAgY29uc3Qgc2VjdGlvbnNWaXNpYmxlID0gW11cblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zS2V5cylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25zKVxuICAgIHNlY3Rpb25zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgc2VjdGlvbnNWaXNpYmxlLnB1c2godGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zVmlzaWJsZSlcbiAgICByZXR1cm4gc2VjdGlvbnNWaXNpYmxlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmhvbWV9IGlkZW50aWZpZXI9XCJob21lXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIiBoZWFkaW5nPVwiSG9tZSBIZWFkaW5nXCI+XG4gICAgICAgICAgICB7XCJIb21lIGluZm8gdGV4dCBib2R5XCJ9XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5pZGVudGl0eX0gaWRlbnRpZmllcj1cImluZGVudGl0eVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby1sYXJnZVwiPntcIkxvZ29cIn08L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNhbGVzU3RhdHVzfSBpZGVudGlmaWVyPVwic2FsZXNTdGF0dXNcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgPEluZm9zIGl0ZW1zPXt0aGlzLm1ldHJpY3N9PjwvSW5mb3M+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy53aXAwfSBpZGVudGlmaWVyPVwid2lwMFwiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8aDE+V29yayBJbiBQcm9ncmVzcyBIZXJlIC4uLjwvaDE+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy52aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uc30gaWRlbnRpZmllcj1cInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zXCIgdmlzaWJsZT17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj5cbiAgICAgICAgICA8SW5mbyBjbGFzc05hbWU9XCJpbmZvXCIgaGVhZGluZz1cIkJhc2VkIG9uIEluZm8gWW91IFByb3ZpZGVkXCI+XG4gICAgICAgICAgICA8cD53ZSBmb3VuZCB0aGF0IHlvdXIgcHJvcGVydHkgaXMgd29ydGggPHNwYW4+e1wiJDUgLSAkNlwifU0gcmFuZ2U8L3NwYW4+IGFuZCB0aGVyZSBhcmUge1wiMjVcIn0gYnV5ZXJzPC9wPlxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPjwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2VsbFdpdGhVc30gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNcIiB2aXNpYmxlPXtmYWxzZX0+XG5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZX0gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNSZXNwb25zZVwiIHZpc2libGU9e2ZhbHNlfT5cblxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuY29udGFjdEZvcm19IGlkZW50aWZpZXI9XCJjb250YWN0Rm9ybVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuY29udGFjdFByb2Nlc3N9IGlkZW50aWZpZXI9XCJjb250YWN0UHJvY2Vzc1wiIHZpc2libGU9e3RydWV9PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMuY29udGFjdCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5hYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5uZXdzID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY3JlYXRlU3dpdGNoZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5ob21lLmN1cnJlbnQuZ2V0VmlzaWJsZVNlY3Rpb25zKCkubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWw6ICcwJysgaSxcbiAgICAgICAgaWRlbnRpZmllcjogc2VjdGlvbi5wcm9wcy5pZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN3aXRjaGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgdGhpcy5jcmVhdGVTd2l0Y2hlckl0ZW1zKCkpXG4gICAgdGhpcy5zd2l0Y2hlci5jdXJyZW50LnNldEl0ZW1zKHRoaXMuY3JlYXRlU3dpdGNoZXJJdGVtcygpKVxuICB9XG5cbiAgLypcbiAgcm91dGUodXJsKSB7XG4gICAgY29uc3QgcXVlcnkgPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoXCI/XCIpKzEpXG4gICAgY29uc3QgaGFzaCA9IHF1ZXJ5LnNsaWNlKHF1ZXJ5LmluZGV4T2YoXCIjXCIpKzEpXG4gICAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2xpY2UoMCwgcXVlcnkuaW5kZXhPZihcIiNcIikpXG5cbiAgICBjb25zdCBwYWdlID0gc2VhcmNoLnNwbGl0KFwiPVwiKVsxXVxuICAgIHN3aXRjaChwYWdlKSB7XG4gICAgICBjYXNlKHBhZ2UgPT0gXCJob21lXCIpIHtcblxuICAgICAgfVxuXG4gICAgICBjYXNlKHBhZ2UgPT0gXCJhYm91dFwiKSB7XG5cbiAgICAgIH1cblxuICAgICAgY2FzZShwYWdlID09IFwibmV3c1wiKSB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgKi9cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImFwcFwiLCB0aGlzKVxuICAgIHRoaXMudXBkYXRlU3dpdGNoZXIoKVxuICAgIC8vIHRoaXMuc3dpdGNoZXIuY3VycmVudC5zd2l0Y2hUbyhcImlkZW50aXR5XCIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbe1xuICAgICAgdmFsOiAnMDEnLFxuICAgICAgaWRlbnRpZmllcjogJ2hvbWUnXG4gICAgfV1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjwvZGl2PlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICA8TmF2TGluayB0ZXh0PVwiSE9NRVwiIHVybD1cIj9wYWdlPWhvbWUjaG9tZVwiLz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJBQk9VVCBVU1wiIHVybD1cIj9wYWdlPWFib3V0XCIvPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGV4dD1cIk5FV1NcIiB1cmw9XCI/cGFnZT1uZXdzXCIvPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGV4dD1cIkNPTlRBQ1RcIiB1cmw9XCI/cGFnZT1ob21lI2NvbnRhY3RcIi8+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgIDwvSGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLW1lbnUtYnV0dG9uXCI+PC9kaXY+XG5cblxuICAgICAgICA8U3dpdGNoZXIgcmVmPXt0aGlzLnN3aXRjaGVyfSBjbGFzc05hbWU9XCJzd2l0Y2hlclwiIGl0ZW1zPXtpdGVtc30+PC9Td2l0Y2hlcj5cblxuICAgICAgICA8SG9tZSByZWY9e3RoaXMuaG9tZX0gb25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eT17dGhpcy51cGRhdGVTd2l0Y2hlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7QXBwfSAvLyBIb21lLCBIb21lV3JhcHBlclxuIiwiZnVuY3Rpb24gSW5mbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgPGgxPntwcm9wcy5oZWFkaW5nfTwvaDE+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5mb3MocHJvcHMpIHtcbiAgY29uc3QgaXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICByZXR1cm4gKDxJbmZvIGhlYWRpbmc9e2l0ZW0uaH0ga2V5PXtpLnRvU3RyaW5nKCl9PntpdGVtLnRleHR9PC9JbmZvPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb3NcIj5cbiAgICAgIHtpdGVtc31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0luZm8sIEluZm9zfVxuIiwiZnVuY3Rpb24gTmF2TGluayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3Byb3BzLnVybH0+PHNwYW4+e3Byb3BzLnRleHR9PC9zcGFuPjwvYT5cbiAgKVxufVxuXG5leHBvcnQge05hdkxpbmt9XG4iLCJmdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxpbmtzLWNvbnRhaW5lclwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCB7TmF2fVxuIiwiY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge31cbiAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBwcm9wcy52aXNpYmxlXG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudmlzaWJsZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5zdGF0ZS52aXNpYmxlKSA/ICdjb250ZW50LXNlY3Rpb24nIDogJ2NvbnRlbnQtc2VjdGlvbiBub25lZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWRlbnRpZmllcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge1NlY3Rpb259XG4iLCIvKipcbiAgQHBhcmFtIHthcnJheX0gcHJvcHMuaXRlbXMgYXJyYXkgb2YgaXRlbXMsIGVhY2ggb2YgdGhlIGZvcm1hdDpcbiAgICBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaXRlbXNbbl0uaW5uZXJUZXh0XG4gICAgQHBhcmFtIHtvYmplY3R9IHByb3BzLml0ZW1zW25dLiAuLi5cbiovXG5cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGlkID0gXCJpdGVtX1wiKyBwcm9wcy5pZGVudGlmaWVyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCIgaWQ9e2lkfSBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtRHVtbXkocHJvcHMpIHtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIiBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgLy8gdGhpcy5yZWZSb290ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLml0ZW1zID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogdGhpcy5mb3JtSXRlbUVscyhwcm9wcy5pdGVtcylcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcyhpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1FbHMgPSB0aGlzLmZvcm1JdGVtRWxzKGl0ZW1zKVxuICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtRWxzfSlcbiAgfVxuXG4gIHN3aXRjaFRvKGlkZW50aWZpZXIpIHtcbiAgICAvLyBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbUlkKVxuICAgIC8vIHRoaXMuZG9tUmVmLnN0eWxlLnRvcCA9XG4gICAgY29uc29sZS5sb2coXCJzd2l0Y2hlciBpdGVtcyByZWZcIiwgdGhpcy5pdGVtcylcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmN1cnJlbnQucXVlcnlTZWxlY3RvcignI2l0ZW1fJytpZGVudGlmaWVyKS5vZmZzZXRUb3BcbiAgICB0aGlzLml0ZW1zLmN1cnJlbnQuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyBcInB4XCJcbiAgfVxuXG4gIGZvcm1JdGVtRWxzKGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbXNEdW1teVByZSA9IGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXCJkdW1teS1wcmVfXCIrIGl0ZW0uaWRlbnRpZmllclxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaGVySXRlbUR1bW15IHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcG9zdF9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2tleX0vPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtc1JlYWwgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW0gdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2l0ZW0uaWRlbnRpZmllci50b1N0cmluZygpfSAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbXNEdW1teVByZVxuICAgICAgLmNvbmNhdChpdGVtc1JlYWwpXG4gICAgICAuY29uY2F0KGl0ZW1zRHVtbXlQb3N0KVxuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnc3dpdGNoZXIsIHJlbmRlcicpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1oaWdobGlnaHRcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5pdGVtc30gY2xhc3NOYW1lPVwic3dpdGNoZXItaXRlbXNcIj57dGhpcy5zdGF0ZS5pdGVtc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2hlcn1cbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi9zY3JpcHRzL3NjcmlwdC5qcydcbm1haW4oKVxuIiwiLy8gaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlci5qcydcbmltcG9ydCB7QXBwfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUuanMnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgY29udGFpbmVyKSAvLyA8U3dpdGNoZXIgY2xhc3NOYW1lPVwic2xpZGVyXCIgdmlzaWJsZUl0ZW1zPXszfSBpdGVtcz17ZGF0YS5pdGVtc30gLz5cbn1cblxuZXhwb3J0IHttYWlufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==