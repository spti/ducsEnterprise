/*
*/
// this is an element rather than a component (doesnt need to have it's state changed)
function sliderItemEl(sectionId, innerText, key) {
  return React.createElement(
    "div",
    { className: "slider-item", "data-sectionid": sectionId, key: key },
    innerText
  );
}

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {
  var items = props.items.map(function (item, i) {
    return sliderItemEl(item.sectionId, item.innerText, i);
  });

  return React.createElement(
    "div",
    null,
    items
  );
}

function SlideSwitcher(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(SlideSwitcherItems, { className: "slider-items", items: props.items })
  );
}

var items = [{
  innerText: '01',
  sectionId: 'sectionOne'
}, {
  innerText: '02',
  sectionId: 'sectionTwo'
}];

var container = document.querySelector('#switcher');
ReactDOM.render(React.createElement(SlideSwitcher, { className: "slider", items: items }), container);