import React from 'react'
import ReactDOM from 'react-dom'
import {Slide} from '../../src/slide.js'
import {Slot, slotContainer, SlotsContainerWrapper, RootSlot} from '../../src/slots-core.js'

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
        <Slide id={'info-input'} className={'card-block'}
          clickCb={this.respond.bind(this)}
          inViewCb={this.props.onSlideInView.bind(this)}
        >
        {'info, input'}
        </Slide>

        {
          this.state.response ?
          <Slide id={'info-response'} className={'card-block'}
            inViewCb={this.props.onSlideInView.bind(this)}
          >{'info, response'}</Slide>
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
      <div className={'card-section'}> // className={'engagement'}
        <Slot id={'engagement-intro'}
        onUpdate={this.props.onSlotUpdate}
        onMount={this.props.onSlotMount}
        >
          <Slide id={'engagement-intro-1'} className={'card-block'}
            inViewCb={this.props.onSlideInView}
          >{'engagement-intro-1'}</Slide>
          <Slide id={'engagement-intro-2'} className={'card-block'}
            inViewCb={this.props.onSlideInView}
          >{'engagement-intro-2'}</Slide>
        </Slot>

        <InputResponse id={'engagement-interaction'}
          onSlotUpdate={this.props.onSlotUpdate}
          onSlotMount={this.props.onSlotMount}
          onSlideInView={this.props.onSlideInView}
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
            onSlideInView={this.props.onSlideInView}
          />
        </section>

        <section className={'contact-us'}>
          <Slot id={'contactUs'}
          onUpdate={this.props.onSlotUpdate}
          onMount={this.props.onSlotMount}
          >
            <Slide id={'contact-us-input'} className={'card-block'}
              inViewCb={this.props.onSlideInView}
            >{'contact-us-input'}</Slide>
            <Slide id={'contact-us-process'} className={'card-block'}
              inViewCb={this.props.onSlideInView}
            >{'contact-us-process'}</Slide>
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

  /**
  @param {[Object]} slides {active: [Boolean], id: [String]}
  */
  setSlides(slides) {
    console.log('slider.setState, slides: ', slides);
    this.setState({slides: slides})
  }

  render() {
    return (
      <div className={'slider-container'}>
        <div className={'slider'}>
        {
          this.state.slides.map((slide, i) => {
            return <span
              data-slideid={slide.id}
              className={slide.active ? 'slider-item active' : 'slider-item'}
              key={slide.id}>
            </span>
          })
        }
        </div>
      </div>
    )
  }
}

/*
class Root extends React.Component {
  constructor() {
    super()
    this.slider = React.createRef()
  }

  onSlidesUpdate(slideIds) {

    this.slider.current.setSlides(
      slideIds.map((slideId) => {
        return {active: slideId == this.activeSlideId, id: slideId}
      })
    )
  }

  onSlidesMount(slideIds) {
    console.log('Root.onSlidesMount')
    this.slider.current.setSlides(slideIds.map(slideId => {active: false, id: slideId}))
  }

  onSlideInView(slideId, slideIds) {
    this.activeSlideId = slideId
    this.slider.current.setSlides(slideIds.map((slideId) => {
      return {active: slideId == this.activeSlideId, id: slideId}
    }))
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
          onSlideInView={this.onSlideInView.bind(this)}
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
*/

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.slider = React.createRef()
  }

  onSlidesUpdate(slides) {
    this.slider.current.setSlides(slides)
  }

  onSlidesMount(slides) {
    console.log('Root.onSlidesMount')
    this.slider.current.setSlides(slides)
  }

  onSlideInView(slides) {
    this.slider.current.setSlides(slides)
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

        <RootSlot
          component={Home}
          id={'root'}
          onSlotsMount={this.onSlidesMount.bind(this)}
          onSlotUpdate={this.onSlidesUpdate.bind(this)}
          onSlideInView={this.onSlideInView.bind(this)}
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
