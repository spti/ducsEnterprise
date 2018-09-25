/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {

}

function SlideSwitcher(props) {
  return (
    <div>
      <SlideSwitcherItems className="slider-items" items={props.items} />
    </div>
  )
}

class Switcher extends React.Component {
  constructor(props) {
    super()

    if (!(props.containerLength % 2)) {
      // throw new Error("containerLength must be an odd number")
    }

    this.domRef = React.createRef()

    const len = (props.containerLength-1) / 2
    const items =
      props.items.slice(props.items.length - len)
      .concat(props.items)
      .concat(props.items.slice(0, len))

    // const offset = len * supposedItemHeight
    this.itemsRaw = props.items

    this.items = props.items.map((item, i) => {
      return (
        <div ref={this.domRef} className="switcher-item" data-sectionid={item.sectionId} key={i}>
          {item.innerText}
        </div>
      )
      // sliderItemEl(item.sectionId, item.innerText, i)
    })

  }

  componentDidMount(itemId) {
    // const itemHeight = window.getComputedStyle(this.domRef.querySelector('.switcher-item')).height
    // this.offset = itemHeight * this.bufferItems
    const offset = this.items.indexOf(itemId)
  }

  switchTo(sectionId) {
    // this.domRef.style.top =
  }

  render() {
    return (
      <div className="switcher">
        <div className="switcher-items">{this.items}</div>
      </div>
    )
  }
}

export {Switcher}
