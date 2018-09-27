/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/


function SwitcherItem(props) {
  const id = "item_"+ props.identifier
  return (<div className="switcher-item" id={id} data-identifier={props.identifier}>
    {props.val}
  </div>)
}

function SwitcherItemDummy(props) {
  return (<div className="switcher-item" data-identifier={props.identifier}>
    {props.val}
  </div>)
}

class Switcher extends React.Component {
  constructor(props) {
    super(props)

    // this.refRoot = React.createRef()
    this.items = React.createRef()

    this.state = {
      items: this.formItemEls(props.items)
    }
  }

  setItems(items) {
    const itemEls = this.formItemEls(items)
    this.setState({items: itemEls})
  }

  switchTo(identifier) {
    // const offset = this.items.indexOf(itemId)
    // this.domRef.style.top =
    console.log("switcher items ref", this.items)
    const offset = this.items.current.querySelector('#item_'+identifier).offsetTop
    this.items.current.style.top = offset * -1 + "px"
  }

  formItemEls(items) {
    const itemsDummyPre = items.map((item, i) => {
      const key = "dummy-pre_"+ item.identifier
      return (
        <SwitcherItemDummy val={item.val} identifier={item.identifier} key={key}/>
      )
    })

    const itemsDummyPost = items.map((item, i) => {
      const key = "dummy-post_"+ item.identifier
      return (
        <SwitcherItemDummy val={item.val} identifier={item.identifier} key={key}/>
      )
    })

    const itemsReal = items.map((item, i) => {
      return (
        <SwitcherItem val={item.val} identifier={item.identifier} key={item.identifier.toString()} />
      )
    })

    return itemsDummyPre
      .concat(itemsReal)
      .concat(itemsDummyPost)

  }

  componentDidMount() {
  }

  render() {
    console.log('switcher, render')
    return (
      <div className="switcher">
        <div className="switcher-highlight">
          <div ref={this.items} className="switcher-items">{this.state.items}</div>
        </div>
      </div>
    )
  }
}

export {Switcher}
