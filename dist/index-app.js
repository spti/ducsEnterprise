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
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
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
          _section_js__WEBPACK_IMPORTED_MODULE_2__["Section"],
          { ref: this.sections.home, identifier: 'home', visible: true },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_4__["Info"],
              { className: 'info', heading: 'Home Heading' },
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
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.sellWithUs, identifier: 'sellWithUs', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.sellWithUsResponse, identifier: 'sellWithUsResponse', visible: false }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.contactForm, identifier: 'contactForm', visible: true }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_2__["Section"], { ref: this.sections.contactProcess, identifier: 'contactProcess', visible: true })
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
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'HOME', url: '?page=home#home' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'ABOUT US', url: '?page=about' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'NEWS', url: '?page=news' }),
          React.createElement(_header_link_js__WEBPACK_IMPORTED_MODULE_3__["HeaderLink"], { text: 'CONTACT', url: '?page=home#contact' })
        ),
        React.createElement(_switcher_js__WEBPACK_IMPORTED_MODULE_1__["Switcher"], { ref: this.switcher, className: 'switcher', items: items }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIkhlYWRlckxpbmsiLCJwcm9wcyIsInVybCIsInRleHQiLCJIZWFkZXIiLCJjaGlsZHJlbiIsIkhvbWUiLCJzZWN0aW9ucyIsImhvbWUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImlkZW50aXR5Iiwic2FsZXNTdGF0dXMiLCJ3aXAwIiwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnMiLCJzZWxsV2l0aFVzIiwic2VsbFdpdGhVc1Jlc3BvbnNlIiwibWV0cmljcyIsImgiLCJzZWN0aW9uc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnNWaXNpYmxlIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJrZXkiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwicHVzaCIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJDb21wb25lbnQiLCJBcHAiLCJzd2l0Y2hlciIsImdldFZpc2libGVTZWN0aW9ucyIsIm1hcCIsInNlY3Rpb24iLCJpIiwidmFsIiwiaWRlbnRpZmllciIsImNyZWF0ZVN3aXRjaGVySXRlbXMiLCJzZXRJdGVtcyIsInVwZGF0ZVN3aXRjaGVyIiwiaXRlbXMiLCJiaW5kIiwiSW5mbyIsImhlYWRpbmciLCJJbmZvcyIsIml0ZW0iLCJ0b1N0cmluZyIsIlNlY3Rpb24iLCJzdGF0ZSIsInZpc2libGUiLCJjbGFzc05hbWUiLCJTd2l0Y2hlckl0ZW0iLCJpZCIsIlN3aXRjaGVySXRlbUR1bW15IiwiU3dpdGNoZXIiLCJmb3JtSXRlbUVscyIsIml0ZW1FbHMiLCJzZXRTdGF0ZSIsIm9mZnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJzdHlsZSIsInRvcCIsIml0ZW1zRHVtbXlQcmUiLCJpdGVtc0R1bW15UG9zdCIsIml0ZW1zUmVhbCIsImNvbmNhdCIsIm1haW4iLCJjb250YWluZXIiLCJkb2N1bWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixTQUNFO0FBQUE7QUFBQSxNQUFHLE1BQU1BLE1BQU1DLEdBQWY7QUFB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R0YsY0FGSCxDQUFQO0FBSUQ7Ozt3Q0FFbUIsQ0FDbkI7Ozs2QkFFUTtBQUNQN0MsY0FBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssS0FBSyxLQUFLb0IsS0FBZixFQUFzQixXQUFVLGdCQUFoQztBQUFrRCxpQkFBS1EsS0FBTCxDQUFXUjtBQUE3RDtBQURGO0FBREYsT0FERjtBQU9EOzs7O0VBaEVvQm5DLE1BQU11QixTOzs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTtBQUFBO0FBQ0F1QywrREFBSUEsRzs7Ozs7Ozs7Ozs7O0FDREo7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsTUFBTUMsWUFBWUMsU0FBU1YsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBVyxXQUFTQyxNQUFULENBQWdCLG9CQUFDLHVEQUFELE9BQWhCLEVBQXlCSCxTQUF6QixFQUZjLENBRXNCO0FBQ3JDIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LWFwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIEhlYWRlckxpbmsocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtwcm9wcy51cmx9PjxzcGFuPntwcm9wcy50ZXh0fTwvc3Bhbj48L2E+XG4gIClcbn1cblxuZXhwb3J0IHtIZWFkZXJMaW5rfVxuIiwiZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQge0hlYWRlcn1cbiIsImltcG9ydCB7SGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcydcbmltcG9ydCB7U3dpdGNoZXJ9IGZyb20gJy4vc3dpdGNoZXIuanMnXG4vLyBpbXBvcnQge0Zvb3Rlcn0gZnJvbSAnZm9vdGVyLmpzJ1xuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb24uanMnXG5pbXBvcnQge0hlYWRlckxpbmt9IGZyb20gJy4vaGVhZGVyLWxpbmsuanMnXG5pbXBvcnQge0luZm8sIEluZm9zfSBmcm9tICcuL2luZm8uanMnXG5cbi8qXG5mdW5jdGlvbiBSb3V0ZXIodXJsLCBwYWdlcykge1xuXG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5tZXRyaWNzID0gW1xuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9XG4gICAgXVxuXG4gICAgdGhpcy5yZWZlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICAvLyB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuc2VjdGlvbnMgPSB7XG4gICAgICBob21lOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIGlkZW50aXR5OiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNhbGVzU3RhdHVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHdpcDA6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgdmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2VsbFdpdGhVczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzUmVzcG9uc2U6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgZ2V0VmlzaWJsZVNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VjdGlvbnMpXG4gICAgY29uc3Qgc2VjdGlvbnNWaXNpYmxlID0gW11cblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zS2V5cylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25zKVxuICAgIHNlY3Rpb25zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgc2VjdGlvbnNWaXNpYmxlLnB1c2godGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zVmlzaWJsZSlcbiAgICByZXR1cm4gc2VjdGlvbnNWaXNpYmxlXG4gIH1cblxuICBzY3JvbGxUb1NlY3Rpb24oKSB7fVxuXG4gIGNyZWF0ZVN3aXRjaGVySXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmlzaWJsZVNlY3Rpb25zKCkubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWw6ICcwJysgaSxcbiAgICAgICAgaWRlbnRpZmllcjogc2VjdGlvbi5wcm9wcy5pZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN3aXRjaGVyKCkge1xuICAgIHRoaXMuc3dpdGNoZXIucHJvcHMuaXRlbXMgPSB0aGlzLmNyZWF0ZVN3aXRjaGVySXRlbXMoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZWZlKVxuICAgIC8vIHRoaXMudXBkYXRlU3dpdGNoZXIoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gW3tcbiAgICAgIHZhbDogJzAxJyxcbiAgICAgIGlkZW50aWZpZXI6ICdob21lJ1xuICAgIH1dXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMucmVmZX0+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiSE9NRVwiIHVybD1cIiNob21lXCIvPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiQUJPVVQgVVNcIiB1cmw9XCJcIi8+XG4gICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJORVdTXCIgdXJsPVwiXCIvPlxuICAgICAgICA8SGVhZGVyTGluayB0ZXh0PVwiQ09OVEFDVFwiIHVybD1cIiNjb250YWN0XCIvPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIDxTd2l0Y2hlciBpZD1cInN3aXRjaGVyXCIgaXRlbXM9e2l0ZW1zfT48L1N3aXRjaGVyPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuaG9tZX0gaWRlbnRpZmllcj1cImhvbWVcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gaGVhZGluZz1cIkhvbWUgSGVhZGluZ1wiPlxuICAgICAgICAgICAge1wiSG9tZSBpbmZvIHRleHQgYm9keVwifVxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuaWRlbnRpdHl9IGlkZW50aWZpZXI9XCJpbmRlbnRpdHlcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAge1wiTG9nb1wifVxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2FsZXNTdGF0dXN9IGlkZW50aWZpZXI9XCJzYWxlc1N0YXR1c1wiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8SW5mb3MgaXRlbXM9e3RoaXMubWV0cmljc30+PC9JbmZvcz5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLndpcDB9IGlkZW50aWZpZXI9XCJ3aXAwXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgIDxoMT5Xb3JrIEluIFByb2dyZXNzIEhlcmUgLi4uPC9oMT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zfSBpZGVudGlmaWVyPVwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnNcIiB2aXNpYmxlPXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGhlYWRpbmc9XCJCYXNlZCBvbiBJbmZvIFlvdSBQcm92aWRlZFwiPlxuICAgICAgICAgICAgPHA+d2UgZm91bmQgdGhhdCB5b3VyIHByb3BlcnR5IGlzIHdvcnRoIDxzcGFuPntcIiQ1IC0gJDZcIn1NIHJhbmdlPC9zcGFuPiBhbmQgdGhlcmUgYXJlIHtcIjI1XCJ9IGJ1eWVyczwvcD5cbiAgICAgICAgICA8L0luZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj48L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXN9IGlkZW50aWZpZXI9XCJzZWxsV2l0aFVzXCIgdmlzaWJsZT17ZmFsc2V9PlxuXG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzUmVzcG9uc2V9IGlkZW50aWZpZXI9XCJzZWxsV2l0aFVzUmVzcG9uc2VcIiB2aXNpYmxlPXtmYWxzZX0+XG5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RGb3JtfSBpZGVudGlmaWVyPVwiY29udGFjdEZvcm1cIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RQcm9jZXNzfSBpZGVudGlmaWVyPVwiY29udGFjdFByb2Nlc3NcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBIb21lV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ob21lKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuaG9tZS5jdXJyZW50LmdldFZpc2libGVTZWN0aW9ucy5jYWxsKHRoaXMuaG9tZS5jdXJyZW50KSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvbWUgcmVmPXt0aGlzLmhvbWV9IC8+XG4gICAgKVxuICB9XG59XG5cbiovXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zZWN0aW9ucyA9IHtcbiAgICAgIGhvbWU6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgaWRlbnRpdHk6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2FsZXNTdGF0dXM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgd2lwMDogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICB2aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNlbGxXaXRoVXNSZXNwb25zZTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgfVxuXG4gICAgdGhpcy5tZXRyaWNzID0gW1xuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9LFxuICAgICAge2g6IFwiNTUwMFwiLCB0ZXh0OiBcInR3byBsaW5lcyBvZiB0ZXh0XCJ9XG4gICAgXVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGdldFZpc2libGVTZWN0aW9ucygpIHtcbiAgICBjb25zdCBzZWN0aW9uc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNlY3Rpb25zKVxuICAgIGNvbnN0IHNlY3Rpb25zVmlzaWJsZSA9IFtdXG5cbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uc0tleXMpXG4gICAgY29uc29sZS5sb2codGhpcy5zZWN0aW9ucylcbiAgICBzZWN0aW9uc0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VjdGlvbnNba2V5XS5jdXJyZW50LmlzVmlzaWJsZSgpKSB7XG4gICAgICAgIHNlY3Rpb25zVmlzaWJsZS5wdXNoKHRoaXMuc2VjdGlvbnNba2V5XS5jdXJyZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uc1Zpc2libGUpXG4gICAgcmV0dXJuIHNlY3Rpb25zVmlzaWJsZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5ob21lfSBpZGVudGlmaWVyPVwiaG9tZVwiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj5cbiAgICAgICAgICA8SW5mbyBjbGFzc05hbWU9XCJpbmZvXCIgaGVhZGluZz1cIkhvbWUgSGVhZGluZ1wiPlxuICAgICAgICAgICAge1wiSG9tZSBpbmZvIHRleHQgYm9keVwifVxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuaWRlbnRpdHl9IGlkZW50aWZpZXI9XCJpbmRlbnRpdHlcIiB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAge1wiTG9nb1wifVxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2FsZXNTdGF0dXN9IGlkZW50aWZpZXI9XCJzYWxlc1N0YXR1c1wiIHZpc2libGU9e3RydWV9PlxuICAgICAgICA8SW5mb3MgaXRlbXM9e3RoaXMubWV0cmljc30+PC9JbmZvcz5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLndpcDB9IGlkZW50aWZpZXI9XCJ3aXAwXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgIDxoMT5Xb3JrIEluIFByb2dyZXNzIEhlcmUgLi4uPC9oMT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zfSBpZGVudGlmaWVyPVwidmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnNcIiB2aXNpYmxlPXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIiBoZWFkaW5nPVwiQmFzZWQgb24gSW5mbyBZb3UgUHJvdmlkZWRcIj5cbiAgICAgICAgICAgIDxwPndlIGZvdW5kIHRoYXQgeW91ciBwcm9wZXJ0eSBpcyB3b3J0aCA8c3Bhbj57XCIkNSAtICQ2XCJ9TSByYW5nZTwvc3Bhbj4gYW5kIHRoZXJlIGFyZSB7XCIyNVwifSBidXllcnM8L3A+XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+PC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzfSBpZGVudGlmaWVyPVwic2VsbFdpdGhVc1wiIHZpc2libGU9e2ZhbHNlfT5cblxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiByZWY9e3RoaXMuc2VjdGlvbnMuc2VsbFdpdGhVc1Jlc3BvbnNlfSBpZGVudGlmaWVyPVwic2VsbFdpdGhVc1Jlc3BvbnNlXCIgdmlzaWJsZT17ZmFsc2V9PlxuXG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5jb250YWN0Rm9ybX0gaWRlbnRpZmllcj1cImNvbnRhY3RGb3JtXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5jb250YWN0UHJvY2Vzc30gaWRlbnRpZmllcj1cImNvbnRhY3RQcm9jZXNzXCIgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaG9tZSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5jb250YWN0ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICAvLyB0aGlzLmFib3V0ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICAvLyB0aGlzLm5ld3MgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgdGhpcy5zd2l0Y2hlciA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBjcmVhdGVTd2l0Y2hlckl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmhvbWUuY3VycmVudC5nZXRWaXNpYmxlU2VjdGlvbnMoKS5tYXAoKHNlY3Rpb24sIGkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbDogJzAnKyBpLFxuICAgICAgICBpZGVudGlmaWVyOiBzZWN0aW9uLnByb3BzLmlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU3dpdGNoZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJpdGVtc1wiLCB0aGlzLmNyZWF0ZVN3aXRjaGVySXRlbXMoKSlcbiAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc2V0SXRlbXModGhpcy5jcmVhdGVTd2l0Y2hlckl0ZW1zKCkpXG4gIH1cblxuICAvKlxuICByb3V0ZSh1cmwpIHtcbiAgICBjb25zdCBxdWVyeSA9IHVybC5zbGljZSh1cmwuaW5kZXhPZihcIj9cIikrMSlcbiAgICBjb25zdCBoYXNoID0gcXVlcnkuc2xpY2UocXVlcnkuaW5kZXhPZihcIiNcIikrMSlcbiAgICBjb25zdCBzZWFyY2ggPSBxdWVyeS5zbGljZSgwLCBxdWVyeS5pbmRleE9mKFwiI1wiKSlcblxuICAgIGNvbnN0IHBhZ2UgPSBzZWFyY2guc3BsaXQoXCI9XCIpWzFdXG4gICAgc3dpdGNoKHBhZ2UpIHtcbiAgICAgIGNhc2UocGFnZSA9PSBcImhvbWVcIikge1xuXG4gICAgICB9XG5cbiAgICAgIGNhc2UocGFnZSA9PSBcImFib3V0XCIpIHtcblxuICAgICAgfVxuXG4gICAgICBjYXNlKHBhZ2UgPT0gXCJuZXdzXCIpIHtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuICAqL1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwiYXBwXCIsIHRoaXMpXG4gICAgdGhpcy51cGRhdGVTd2l0Y2hlcigpXG4gICAgLy8gdGhpcy5zd2l0Y2hlci5jdXJyZW50LnN3aXRjaFRvKFwiaWRlbnRpdHlcIilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICB2YWw6ICcwMScsXG4gICAgICBpZGVudGlmaWVyOiAnaG9tZSdcbiAgICB9XVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgPEhlYWRlckxpbmsgdGV4dD1cIkhPTUVcIiB1cmw9XCI/cGFnZT1ob21lI2hvbWVcIi8+XG4gICAgICAgICAgPEhlYWRlckxpbmsgdGV4dD1cIkFCT1VUIFVTXCIgdXJsPVwiP3BhZ2U9YWJvdXRcIi8+XG4gICAgICAgICAgPEhlYWRlckxpbmsgdGV4dD1cIk5FV1NcIiB1cmw9XCI/cGFnZT1uZXdzXCIvPlxuICAgICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9XCJDT05UQUNUXCIgdXJsPVwiP3BhZ2U9aG9tZSNjb250YWN0XCIvPlxuICAgICAgICA8L0hlYWRlcj5cblxuICAgICAgICA8U3dpdGNoZXIgcmVmPXt0aGlzLnN3aXRjaGVyfSBjbGFzc05hbWU9XCJzd2l0Y2hlclwiIGl0ZW1zPXtpdGVtc30+PC9Td2l0Y2hlcj5cblxuICAgICAgICA8SG9tZSByZWY9e3RoaXMuaG9tZX0gb25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eT17dGhpcy51cGRhdGVTd2l0Y2hlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7QXBwfSAvLyBIb21lLCBIb21lV3JhcHBlclxuIiwiZnVuY3Rpb24gSW5mbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgPGgxPntwcm9wcy5oZWFkaW5nfTwvaDE+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5mb3MocHJvcHMpIHtcbiAgY29uc3QgaXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICByZXR1cm4gKDxJbmZvIGhlYWRpbmc9e2l0ZW0uaH0ga2V5PXtpLnRvU3RyaW5nKCl9PntpdGVtLnRleHR9PC9JbmZvPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb3NcIj5cbiAgICAgIHtpdGVtc31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0luZm8sIEluZm9zfVxuIiwiY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge31cbiAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBwcm9wcy52aXNpYmxlXG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudmlzaWJsZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5zdGF0ZS52aXNpYmxlKSA/ICdjb250ZW50LXNlY3Rpb24nIDogJ2NvbnRlbnQtc2VjdGlvbiBub25lZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWRlbnRpZmllcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge1NlY3Rpb259XG4iLCIvKipcbiAgQHBhcmFtIHthcnJheX0gcHJvcHMuaXRlbXMgYXJyYXkgb2YgaXRlbXMsIGVhY2ggb2YgdGhlIGZvcm1hdDpcbiAgICBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaXRlbXNbbl0uaW5uZXJUZXh0XG4gICAgQHBhcmFtIHtvYmplY3R9IHByb3BzLml0ZW1zW25dLiAuLi5cbiovXG5cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGlkID0gXCJpdGVtX1wiKyBwcm9wcy5pZGVudGlmaWVyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCIgaWQ9e2lkfSBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtRHVtbXkocHJvcHMpIHtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIiBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgLy8gdGhpcy5yZWZSb290ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLml0ZW1zID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogdGhpcy5mb3JtSXRlbUVscyhwcm9wcy5pdGVtcylcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcyhpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1FbHMgPSB0aGlzLmZvcm1JdGVtRWxzKGl0ZW1zKVxuICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtRWxzfSlcbiAgfVxuXG4gIHN3aXRjaFRvKGlkZW50aWZpZXIpIHtcbiAgICAvLyBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbUlkKVxuICAgIC8vIHRoaXMuZG9tUmVmLnN0eWxlLnRvcCA9XG4gICAgY29uc29sZS5sb2coXCJzd2l0Y2hlciBpdGVtcyByZWZcIiwgdGhpcy5pdGVtcylcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmN1cnJlbnQucXVlcnlTZWxlY3RvcignI2l0ZW1fJytpZGVudGlmaWVyKS5vZmZzZXRUb3BcbiAgICB0aGlzLml0ZW1zLmN1cnJlbnQuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyBcInB4XCJcbiAgfVxuXG4gIGZvcm1JdGVtRWxzKGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbXNEdW1teVByZSA9IGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXCJkdW1teS1wcmVfXCIrIGl0ZW0uaWRlbnRpZmllclxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaGVySXRlbUR1bW15IHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcG9zdF9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2tleX0vPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtc1JlYWwgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW0gdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2l0ZW0uaWRlbnRpZmllci50b1N0cmluZygpfSAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbXNEdW1teVByZVxuICAgICAgLmNvbmNhdChpdGVtc1JlYWwpXG4gICAgICAuY29uY2F0KGl0ZW1zRHVtbXlQb3N0KVxuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnc3dpdGNoZXIsIHJlbmRlcicpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1oaWdobGlnaHRcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5pdGVtc30gY2xhc3NOYW1lPVwic3dpdGNoZXItaXRlbXNcIj57dGhpcy5zdGF0ZS5pdGVtc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2hlcn1cbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi9zY3JpcHRzL3NjcmlwdC5qcydcbm1haW4oKVxuIiwiLy8gaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlci5qcydcbmltcG9ydCB7QXBwfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUuanMnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgY29udGFpbmVyKSAvLyA8U3dpdGNoZXIgY2xhc3NOYW1lPVwic2xpZGVyXCIgdmlzaWJsZUl0ZW1zPXszfSBpdGVtcz17ZGF0YS5pdGVtc30gLz5cbn1cblxuZXhwb3J0IHttYWlufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==