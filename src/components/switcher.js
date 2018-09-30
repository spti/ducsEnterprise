import React from 'react'
import ReactDOM from 'react-dom'

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/


function SwitcherItem(props) {
  const id = "item_"+ props.identifier
  return (<div className="switcher-item" id={id} data-identifier={props.identifier} onClick={props.clickCb}>
    {props.val}
  </div>)
}

function SwitcherItemDummy(props) {
  return (<div className="switcher-item" data-identifier={props.identifier} onClick={props.clickCb}>
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
    const id = ev.target.dataset.identifier
    this.props.clickCb(id, ev)
  }

  formItemEls(items) {
    const itemsDummyPre = items.map((item, i) => {
      const key = "dummy-pre_"+ item.identifier
      return (
        <SwitcherItemDummy val={item.val} identifier={item.identifier} clickCb={this.clickCb.bind(this)} key={key}/>
      )
    })

    const itemsDummyPost = items.map((item, i) => {
      const key = "dummy-post_"+ item.identifier
      return (
        <SwitcherItemDummy val={item.val} identifier={item.identifier} clickCb={this.clickCb.bind(this)} key={key}/>
      )
    })

    const itemsReal = items.map((item, i) => {
      return (
        <SwitcherItem val={item.val} identifier={item.identifier} clickCb={this.clickCb.bind(this)} key={item.identifier.toString()} />
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
