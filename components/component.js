
// this is an element rather than a component (doesnt need to have it's state changed)
function sliderItemEl(screenId, innerText) {
  return React.createElement(
    "div",
    { "data-screenId": screenId },
    innerText
  );
}

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {
  React.createElement(
    "div",
    null,
    "props.items.forEach(())"
  );
}

function SlideSwitcher() {
  React.createElement(
    "div",
    null,
    React.createElement(SlideSwitcherItems, null)
  );
}