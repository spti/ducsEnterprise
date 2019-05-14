import React from 'react'
import ReactDOM from 'react-dom'
import {Slide} from '../../src/slide.js'
import {Slot, slotContainer, SlotsContainerWrapper} from '../../src/slots-core.js'

class InputResponse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {response: false}
  }

  respond() {
    this.setState({response: true})
  }

  render() {
    return (
      <Slot id={this.props.id}
      onUpdate={this.props.onSlotUpdate}
      onMount={this.props.onSlotMount}
      >
        <Slide id={'info-input'}
        clickCb={this.respond.bind(this)}
        >
        {'info, input'}
        </Slide>

        {
          this.state.response ?
          <Slide id={'info-response'}>{'info, response'}</Slide>
          :
          null
        }
      </Slot>
    )
  }
}

class Engagement extends React.Component {
  constructor(props) {
    super(props)
    this.props.setSlots(['engagement-intro', 'engagement-interaction'])
  }

  render() {
    return (
      <div className={'engagement'}>
        <Slot id={'engagement-intro'}
        onUpdate={this.props.onSlotUpdate}
        onMount={this.props.onSlotMount}
        >
          <Slide id={'engagement-intro-1'}>{'engagement-intro-1'}</Slide>
          <Slide id={'engagement-intro-2'}>{'engagement-intro-2'}</Slide>
        </Slot>

        <InputResponse id={'engagement-interaction'}
          onSlotUpdate={this.props.onSlotUpdate}
          onSlotMount={this.props.onSlotMount}
        />
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.props.setSlots(['engagement', 'contactUs'])
  }

  render() {
    return (
      <div className={'nested-slot-use'}>
        <section className={'engagement'}>
          <SlotsContainerWrapper id={'engagement'}
            component={Engagement}
            onSlotsMount={this.props.onSlotMount}
            onSlotUpdate={this.props.onSlotUpdate}
          />
        </section>

        <section className={'contact-us'}>
          <Slot id={'contactUs'}
          onUpdate={this.props.onSlotUpdate}
          onMount={this.props.onSlotMount}
          >
            <Slide id={'contact-us-input'}>{'contact-us-input'}</Slide>
            <Slide id={'contact-us-process'}>{'contact-us-process'}</Slide>
          </Slot>
        </section>
      </div>
    )
  }
}

class Slider extends React.Component {
  constructor() {
    super()
    this.state = {slides: []}
  }

  setSlides(slides) {
    console.log('slider.setState, slides: ', slides);
    this.setState({slides: slides})
  }

  render() {
    return (
      <div className={'slider'}>
      {
        this.state.slides.map((slide, i) => {
          return <span key={slide}>{slide}</span>
        })
      }
      </div>
    )
  }
}

class Root extends React.Component {
  constructor() {
    super()
    this.slider = React.createRef()
  }

  onSlidesUpdate(slideIds) {
    this.slider.current.setSlides(slideIds)
  }

  onSlidesMount(slideIds) {
    console.log('Root.onSlidesMount')
    this.slider.current.setSlides(slideIds)
  }

  render() {
    // const Thecontainer = slotContainer(
    //   Home,
    //   this.onSlidesUpdate.bind(this),
    //   this.onSlidesMount.bind(this)
    // )
    return (
      <div className={'root'}>
        <Slider ref={this.slider} />

        <SlotsContainerWrapper
          component={Home}
          onSlotsMount={this.onSlidesMount.bind(this)}
          onSlotUpdate={this.onSlidesUpdate.bind(this)}
        />
        {
          // slotContainer(
          //   Home,
          //   this.onSlidesUpdate.bind(this),
          //   this.onSlidesMount.bind(this)
          // )
        }
      </div>
    )
  }
}

export {Root}
