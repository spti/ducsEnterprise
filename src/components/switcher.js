/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/


function SwitcherItem(props) {
  const id = "item_"+ props.sectionid
  return (<div className="switcher-item" id={id} data-sectionid={props.sectionid} onClick={props.clickCb}>
    {props.val}
  </div>)
}

function SwitcherItemDummy(props) {
  return (<div className="switcher-item" data-sectionid={props.sectionid} onClick={props.clickCb}>
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

    // this.clickUserCb = this.props.clickCb
  }

  setItems(items) {
    const itemEls = this.formItemEls(items)
    this.setState({items: itemEls})
  }

  switchTo(identifier) {
    // const offset = this.items.indexOf(itemId)
    // this.domRef.style.top =
    // console.log("switcher items ref", this.items)
    const offset = this.items.current.querySelector('#item_'+identifier).offsetTop
    this.items.current.style.top = offset * -1 + "px"
  }

  clickCb(ev) {
    const id = ev.target.dataset.sectionid
    this.props.clickCb(id, ev)
  }

  formItemEls(items) {
    const itemsDummyPre = items.map((item, i) => {
      const key = "dummy-pre_"+ item.sectionid
      return (
        <SwitcherItemDummy val={item.val} sectionid={item.sectionid} clickCb={this.clickCb.bind(this)} key={key}/>
      )
    })

    const itemsDummyPost = items.map((item, i) => {
      const key = "dummy-post_"+ item.sectionid
      return (
        <SwitcherItemDummy val={item.val} sectionid={item.sectionid} clickCb={this.clickCb.bind(this)} key={key}/>
      )
    })

    const itemsReal = items.map((item, i) => {
      return (
        <SwitcherItem val={item.val} sectionid={item.sectionid} clickCb={this.clickCb.bind(this)} key={item.sectionid.toString()} />
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
