import React from 'react'
import {Slide} from './slide.js'


class Slot extends React.Component {
  constructor() {
    super()
  }

  getSlideIds() {
    return this.props.children.map(child => child.props.id)
  }

  componentDidUpdate() {
    console.log('Slot.getSlideIds:', this.getSlideIds())
    this.props.onUpdate(this.getSlideIds(), this.props.id)
  }

  render() {
    return (
      <div className={'slot'}>{this.props.children}</div>
    )
  }
}

class SlotContainer extends React.Component {
  constructor() {
    super()
  }

  onSlotUpdate(slots) {

    let slideIdsCompound = []

    // console.log(slots);
    for (var slotId in slots) {
      slideIdsCompound = slideIdsCompound.concat(slots[slotId])
    }

    this.props.onSlideIdsUpdate(slideIdsCompound, this.props.id || null)
    // this.slotUpdateCb(joinIds(this.slots))

  }

  /*
  onSlotMount(slots) {

    let slotsMounted = false

    for (var slotId in slots) {
      // slideIdsCompound = slideIdsCompound.concat(slots[slotId])
      if (!slots[slotId].mounted) {
        slotsMounted = false
        break
      } else {
        slotsMounted = true
      }
    }

    if (slotsMounted) {
      this.onSlotsMounted()
    }
  }
  */

  render() {
    return (
      <div className={'slot-container'}>
      {
        this.props.content(this.onSlotUpdate.bind(this))
      }
      </div>
    )
  }
}

class SlotUse extends React.Component {
  constructor() {
    super()

    this.state = {
      response: false
    }

    this.slots = {
      info: [],
      engagement: []
    }
  }

  respond() {
    this.setState({response: true})
  }

  onSlotUpdate(slideIds, slotId) {
    this.slots[slotId] = slideIds
    this.props.onSlideIdsUpdate(this.slots)
  }

  render() {
    return (
      <div className={'slot-use'}>
        <div className={'info-container'}>
          <Slot id={'info'} onUpdate={this.onSlotUpdate.bind(this)}>
            <Slide id={'info-input'}
            clickCb={this.respond.bind(this)}>{'info, input'}</Slide>

            {
            this.state.response &&
            <Slide id={'info-response'}>{'info, response'}</Slide>
            }

          </Slot>
        </div>

        <div className={'engagement-container'}>
          <Slot id={'engagement'} onUpdate={this.onSlotUpdate.bind(this)}>
            <Slide id={'engagement-input'}
            clickCb={this.respond}>{'engagement, input'}</Slide>

            {
            this.state.response &&
            <Slide id={'engagement-response'}>{'engagement, response'}</Slide>
            }
          </Slot>
        </div>
      </div>
    )
  }
}

class NestedSlotUse extends React.Component {

  constructor() {
    super()

    this.slots = {
      infoAndEngagement: [],
      contactUs: []
    }
  }

  onSlotMount(slideIds, slotId) {
    this.slots[slotId] = slideIds
  }

  onSlotUpdate(slideIds, slotId) {
    this.slots[slotId] = slideIds
    this.props.onSlideIdsUpdate(this.slots)
  }

  render() {
    return (
      <div className={'nested-slot-use'}>
        <section className={'info-engagement'}>
          <SlotContainer id={'infoAndEngagement'}
            onSlideIdsUpdate={this.onSlotUpdate.bind(this)}
            content={(onUpdate) => {return <SlotUse onSlideIdsUpdate={onUpdate} />}}
            />
        </section>

        <section className={'contact-us'}>
          <Slot id={'contactUs'} onUpdate={this.onSlotUpdate}>
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

  render() {
    return (

      <div className={'root'}>
        <Slider ref={this.slider} />

        <SlotContainer
         onSlideIdsUpdate={this.onSlidesUpdate.bind(this)}
         content={
           updateCb => <NestedSlotUse onSlideIdsUpdate={updateCb} />
         }
        />
      </div>
    )
  }
}

function Test() {
  return <Root />
}

export {Test}
