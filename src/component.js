
// this is an element rather than a component (doesnt need to have it's state changed)
function sliderItemEl(screenId, innerText) {
  return <div data-screenId={screenId}>{innerText}</div>
}

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {
  <div>
    props.items.forEach(())
  </div>
}

function SlideSwitcher() {
  <div>
    <SlideSwitcherItems/>
  </div>
}
