import React from 'react'
import {Slide} from './slide.js'
import {OneInput, OneResponse, TwoInput, TwoResponse} from './interactionDummies.js'

/**
  @prop {props} props {
  inputOne, responseOne, inputTwo, ResponseTwo
}
*/

function getData(n) {
  if (n == 0) {
    return {
      priceRange: [5, 6], demand: 25
    }
  } else if (n == 1) {
    return {
      ducks: 'ducks'
    }
  }
}

class Interaction extends React.Component {
  constructor(options) {
    super()

    this.state = {
      responseOne: {},
      responseTwo: {}
    }
  }

  submitCbOne(data, n) {

  }

  submitCbTwo(data, n) {

  }

  submitCb(data, n) {
    if (n == 0) {
      this.sendData(data, n)
      .then((res) => {
        this.setState((state, props) => {
          return {responseOne: {data: res}}
        })
      })
    } else if (n == 1) {
      this.sendData(data, n)
      .then((res) => {
        this.setState((state, props) => {
          return {responseTwo: {data: res}}
        })
      })
    }
  }

  componentDidUpdate() {
    this.slides = ['one-input']

  }

  sendData(data, n) {
    return new Promise(function(resolve, reject) {
      window.setTimeout(() => {
        resolve(getData(n))
      }, 1000)
    })
  }

  render() {
    return (
      <section>
      <Slide id={'one-input'}
      mountCb={this.props.slideMountCb}>
        <OneInput submitCb={(data) => {
          this.submitCb(data, 0)
        }}/>
      </Slide>

      {
        this.state.responseOne.data &&
        <Slide id={'one-response'}>
          <OneResponse responseData={this.state.responseOne.data}/>
        </Slide>
      }

      {
        this.state.responseOne.data &&
        <Slide id={'two-input'}>
          <TwoInput submitCb={(data) => {
            this.submitCb(data, 1)
          }}/>
        </Slide>
      }

      {
        this.state.responseTwo.data &&
        <Slide id={'two-response'}>
          <TwoResponse responseData={this.state.responseTwo.data}/>
        </Slide>
      }
      </section>
    )

  }
}

export {Interaction}
