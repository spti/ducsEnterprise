import React from 'react'
import ReactDOM from 'react-dom'

class InputForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  changeCb(ev) {
    this.state[ev.target.name] = ev.target.value
  }

  submitCb(ev) {
    ev.preventDefault()

    window.setTimeout(() => {
      console.log('form submit, timeouted')
      this.props.submitCb({status: 200, responseText: ""})
    }, 500)
  }

  render() {
    const inputs = this.props.inputs.map((input, i) => {
      if (input.tagName == 'input') {
        return <input name={input.name} type={input.type} key={i.toString()} onChange={this.changeCb} />
      } else if (input.tagName == 'textarea') {
        return <textarea name={input.name} type={input.type} key={i.toString()} onChange={this.changeCb} />
      }
    })

    return (
      <form>
        {inputs}
        <input type="submit" value={this.props.submitVal} onClick={this.submitCb.bind(this)} />
      </form>
    )
  }
}

export {InputForm}
