var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {}

function SlideSwitcher(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(SlideSwitcherItems, { className: "slider-items", items: props.items })
  );
}

var Switcher = function (_React$Component) {
  _inherits(Switcher, _React$Component);

  function Switcher(props) {
    _classCallCheck(this, Switcher);

    var _this = _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this));

    if (!(props.containerLength % 2)) {
      // throw new Error("containerLength must be an odd number")
    }

    _this.domRef = React.createRef();

    var len = (props.containerLength - 1) / 2;
    var items = props.items.slice(props.items.length - len).concat(props.items).concat(props.items.slice(0, len));

    // const offset = len * supposedItemHeight
    _this.itemsRaw = props.items;

    _this.items = props.items.map(function (item, i) {
      return React.createElement(
        "div",
        { ref: _this.domRef, className: "switcher-item", "data-sectionid": item.sectionId, key: i },
        item.innerText
      );
      // sliderItemEl(item.sectionId, item.innerText, i)
    });

    return _this;
  }

  _createClass(Switcher, [{
    key: "componentDidMount",
    value: function componentDidMount(itemId) {
      // const itemHeight = window.getComputedStyle(this.domRef.querySelector('.switcher-item')).height
      // this.offset = itemHeight * this.bufferItems
      var offset = this.items.indexOf(itemId);
    }
  }, {
    key: "switchTo",
    value: function switchTo(sectionId) {
      // this.domRef.style.top =
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "switcher" },
        React.createElement(
          "div",
          { className: "switcher-items" },
          this.items
        )
      );
    }
  }]);

  return Switcher;
}(React.Component);

export { Switcher };