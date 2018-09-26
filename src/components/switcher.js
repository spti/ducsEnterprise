/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/


function SwitcherItem(props) {
  const id = "item_"+ props.identifier
  return (<div className="switcher-item" id={id} data-id={props.identifier}>
    {props.val}
  </div>)
}

function SwitcherItemDummy(props) {
  return (<div className="switcher-item">
    {props.val}
  </div>)
}

class Switcher extends React.Component {
  constructor(props) {
    super()

    // this.refRoot = React.createRef()
    this.items = React.createRef()

    const itemsDummyPre = this.props.items.map((item, i) => {
      return (
        const key = "dummy-pre_"+ item.id
        <SwitcherItemDummy val={item.val} key={key}/>
      )
    })

    const itemsDummyPost = this.props.items.map((item, i) => {
      return (
        const key = "dummy-post_"+ item.id
        <SwitcherItemDummy val={item.val} key={key}/>
      )
    })

    const itemsReal = this.props.items.map((item, i) => {
      return (
        <SwitcherItem identifier={item.id} key={item.id.toString()} />
      )
    })

    this.itemEls =
      itemsDummyPre
      .concat(itemsReal)
      .concat(itemsDummyPost)

  }

  componentDidMount() {
  }

  switchTo(anId) {
    // const offset = this.items.indexOf(itemId)
    // this.domRef.style.top =

    const offset = this.items.current.querySelector('#item_'+anId).offsetTop
    this.items.current.style.top = offset * -1 + "px"
  }

  render() {
    return (
      <div className="switcher">
        <div className="switcher-highlight">
          <div ref={this.items} className="switcher-items">{this.itemEls}</div>
        </div>
      </div>
    )
  }
}

export {Switcher}
