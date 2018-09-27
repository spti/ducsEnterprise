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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
      var key = "dummy-pre_" + item.id;
      return React.createElement(SwitcherItemDummy, { val: item.val, key: key });
    });

    var itemsDummyPost = _this.props.items.map(function (item, i) {
      var key = "dummy-post_" + item.id;
      return React.createElement(SwitcherItemDummy, { val: item.val, key: key });
    });

    var itemsReal = _this.props.items.map(function (item, i) {
      return React.createElement(SwitcherItem, { identifier: item.id, key: item.id.toString() });
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script.js */ "./src/scripts/script.js");
var items = [{
  val: '01',
  id: 'sectionOne'
}, {
  val: '02',
  id: 'sectionTwo'
}, {
  val: '03',
  id: 'sectionThree'
}, {
  val: '04',
  id: 'sectionFour'
}, {
  val: '05',
  id: 'sectionFive'
}, {
  val: '06',
  id: 'sectionSix'
}];



Object(_scripts_script_js__WEBPACK_IMPORTED_MODULE_0__["main"])({ items: items });

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
/* harmony import */ var _components_switcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/switcher.js */ "./src/components/switcher.js");


function main(data) {
  var container = document.querySelector('#switcher');
  ReactDOM.render(React.createElement(_components_switcher_js__WEBPACK_IMPORTED_MODULE_0__["Switcher"], { className: 'slider', visibleItems: 3, items: data.items }), container);
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJTd2l0Y2hlckl0ZW0iLCJwcm9wcyIsImlkIiwiaWRlbnRpZmllciIsInZhbCIsIlN3aXRjaGVySXRlbUR1bW15IiwiU3dpdGNoZXIiLCJpdGVtcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaXRlbXNEdW1teVByZSIsIm1hcCIsIml0ZW0iLCJpIiwia2V5IiwiaXRlbXNEdW1teVBvc3QiLCJpdGVtc1JlYWwiLCJ0b1N0cmluZyIsIml0ZW1FbHMiLCJjb25jYXQiLCJhbklkIiwib2Zmc2V0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJzdHlsZSIsInRvcCIsIkNvbXBvbmVudCIsIm1haW4iLCJkYXRhIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQU9BLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLE1BQU1DLEtBQUssVUFBU0QsTUFBTUUsVUFBMUI7QUFDQSxTQUFRO0FBQUE7QUFBQSxNQUFLLFdBQVUsZUFBZixFQUErQixJQUFJRCxFQUFuQyxFQUF1QyxXQUFTRCxNQUFNRSxVQUF0RDtBQUNMRixVQUFNRztBQURELEdBQVI7QUFHRDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQkosS0FBM0IsRUFBa0M7QUFDaEMsU0FBUTtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDTEEsVUFBTUc7QUFERCxHQUFSO0FBR0Q7O0lBRUtFLFE7OztBQUNKLG9CQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBR2pCO0FBSGlCLG9IQUNYQSxLQURXOztBQUlqQixVQUFLTSxLQUFMLEdBQWFDLE1BQU1DLFNBQU4sRUFBYjs7QUFFQSxRQUFNQyxnQkFBZ0IsTUFBS1QsS0FBTCxDQUFXTSxLQUFYLENBQWlCSSxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN0RCxVQUFNQyxNQUFNLGVBQWNGLEtBQUtWLEVBQS9CO0FBQ0EsYUFDRSxvQkFBQyxpQkFBRCxJQUFtQixLQUFLVSxLQUFLUixHQUE3QixFQUFrQyxLQUFLVSxHQUF2QyxHQURGO0FBR0QsS0FMcUIsQ0FBdEI7O0FBT0EsUUFBTUMsaUJBQWlCLE1BQUtkLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkksR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdkQsVUFBTUMsTUFBTSxnQkFBZUYsS0FBS1YsRUFBaEM7QUFDQSxhQUNFLG9CQUFDLGlCQUFELElBQW1CLEtBQUtVLEtBQUtSLEdBQTdCLEVBQWtDLEtBQUtVLEdBQXZDLEdBREY7QUFHRCxLQUxzQixDQUF2Qjs7QUFPQSxRQUFNRSxZQUFZLE1BQUtmLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkksR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDbEQsYUFDRSxvQkFBQyxZQUFELElBQWMsWUFBWUQsS0FBS1YsRUFBL0IsRUFBbUMsS0FBS1UsS0FBS1YsRUFBTCxDQUFRZSxRQUFSLEVBQXhDLEdBREY7QUFHRCxLQUppQixDQUFsQjs7QUFNQSxVQUFLQyxPQUFMLEdBQ0VSLGNBQ0NTLE1BREQsQ0FDUUgsU0FEUixFQUVDRyxNQUZELENBRVFKLGNBRlIsQ0FERjs7QUExQmlCO0FBK0JsQjs7Ozt3Q0FFbUIsQ0FDbkI7Ozs2QkFFUUssSSxFQUFNO0FBQ2I7QUFDQTs7QUFFQSxVQUFNQyxTQUFTLEtBQUtkLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkMsYUFBbkIsQ0FBaUMsV0FBU0gsSUFBMUMsRUFBZ0RJLFNBQS9EO0FBQ0EsV0FBS2pCLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkcsS0FBbkIsQ0FBeUJDLEdBQXpCLEdBQStCTCxTQUFTLENBQUMsQ0FBVixHQUFjLElBQTdDO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLEtBQUssS0FBS2QsS0FBZixFQUFzQixXQUFVLGdCQUFoQztBQUFrRCxpQkFBS1c7QUFBdkQ7QUFERjtBQURGLE9BREY7QUFPRDs7OztFQXJEb0JWLE1BQU1tQixTOzs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTtBQUFBLElBQU1wQixRQUFRLENBQ1o7QUFDRUgsT0FBSyxJQURQO0FBRUVGLE1BQUk7QUFGTixDQURZLEVBS1o7QUFDRUUsT0FBSyxJQURQO0FBRUVGLE1BQUk7QUFGTixDQUxZLEVBU1o7QUFDRUUsT0FBSyxJQURQO0FBRUVGLE1BQUk7QUFGTixDQVRZLEVBYVo7QUFDRUUsT0FBSyxJQURQO0FBRUVGLE1BQUk7QUFGTixDQWJZLEVBaUJaO0FBQ0VFLE9BQUssSUFEUDtBQUVFRixNQUFJO0FBRk4sQ0FqQlksRUFxQlo7QUFDRUUsT0FBSyxJQURQO0FBRUVGLE1BQUk7QUFGTixDQXJCWSxDQUFkOztBQTJCQTs7QUFFQTBCLCtEQUFJQSxDQUFDLEVBQUNyQixPQUFPQSxLQUFSLEVBQUwsRTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNxQixJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDbEIsTUFBTUMsWUFBWUMsU0FBU1IsYUFBVCxDQUF1QixXQUF2QixDQUFsQjtBQUNBUyxXQUFTQyxNQUFULENBQWdCLG9CQUFDLGdFQUFELElBQVUsV0FBVSxRQUFwQixFQUE2QixjQUFjLENBQTNDLEVBQThDLE9BQU9KLEtBQUt0QixLQUExRCxHQUFoQixFQUFxRnVCLFNBQXJGO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICBAcGFyYW0ge2FycmF5fSBwcm9wcy5pdGVtcyBhcnJheSBvZiBpdGVtcywgZWFjaCBvZiB0aGUgZm9ybWF0OlxuICAgIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5pdGVtc1tuXS5pbm5lclRleHRcbiAgICBAcGFyYW0ge29iamVjdH0gcHJvcHMuaXRlbXNbbl0uIC4uLlxuKi9cblxuXG5mdW5jdGlvbiBTd2l0Y2hlckl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgaWQgPSBcIml0ZW1fXCIrIHByb3BzLmlkZW50aWZpZXJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIiBpZD17aWR9IGRhdGEtaWQ9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtRHVtbXkocHJvcHMpIHtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIj5cbiAgICB7cHJvcHMudmFsfVxuICA8L2Rpdj4pXG59XG5cbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIHRoaXMucmVmUm9vdCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5pdGVtcyA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICBjb25zdCBpdGVtc0R1bW15UHJlID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcHJlX1wiKyBpdGVtLmlkXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXCJkdW1teS1wb3N0X1wiKyBpdGVtLmlkXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNSZWFsID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW0gaWRlbnRpZmllcj17aXRlbS5pZH0ga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9IC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHRoaXMuaXRlbUVscyA9XG4gICAgICBpdGVtc0R1bW15UHJlXG4gICAgICAuY29uY2F0KGl0ZW1zUmVhbClcbiAgICAgIC5jb25jYXQoaXRlbXNEdW1teVBvc3QpXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgc3dpdGNoVG8oYW5JZCkge1xuICAgIC8vIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtSWQpXG4gICAgLy8gdGhpcy5kb21SZWYuc3R5bGUudG9wID1cblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuaXRlbXMuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbV8nK2FuSWQpLm9mZnNldFRvcFxuICAgIHRoaXMuaXRlbXMuY3VycmVudC5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArIFwicHhcIlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgPGRpdiByZWY9e3RoaXMuaXRlbXN9IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1zXCI+e3RoaXMuaXRlbUVsc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2hlcn1cbiIsImNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgdmFsOiAnMDEnLFxuICAgIGlkOiAnc2VjdGlvbk9uZSdcbiAgfSxcbiAge1xuICAgIHZhbDogJzAyJyxcbiAgICBpZDogJ3NlY3Rpb25Ud28nXG4gIH0sXG4gIHtcbiAgICB2YWw6ICcwMycsXG4gICAgaWQ6ICdzZWN0aW9uVGhyZWUnXG4gIH0sXG4gIHtcbiAgICB2YWw6ICcwNCcsXG4gICAgaWQ6ICdzZWN0aW9uRm91cidcbiAgfSxcbiAge1xuICAgIHZhbDogJzA1JyxcbiAgICBpZDogJ3NlY3Rpb25GaXZlJ1xuICB9LFxuICB7XG4gICAgdmFsOiAnMDYnLFxuICAgIGlkOiAnc2VjdGlvblNpeCdcbiAgfVxuXVxuXG5pbXBvcnQge21haW59IGZyb20gJy4vc2NyaXB0cy9zY3JpcHQuanMnXG5cbm1haW4oe2l0ZW1zOiBpdGVtc30pXG4iLCJpbXBvcnQge1N3aXRjaGVyfSBmcm9tICcuLi9jb21wb25lbnRzL3N3aXRjaGVyLmpzJ1xuXG5mdW5jdGlvbiBtYWluKGRhdGEpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaGVyJylcbiAgUmVhY3RET00ucmVuZGVyKDxTd2l0Y2hlciBjbGFzc05hbWU9XCJzbGlkZXJcIiB2aXNpYmxlSXRlbXM9ezN9IGl0ZW1zPXtkYXRhLml0ZW1zfSAvPiwgY29udGFpbmVyKVxufVxuXG5leHBvcnQge21haW59XG4iXSwic291cmNlUm9vdCI6IiJ9