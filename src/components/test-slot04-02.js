import React from 'react'
import {Slide} from './slide.js'


class Slot extends React.Component {
  constructor() {
    super()
  }

  getSlideIds() {
    console.log('slot, slot children', this, this.props.children);
    return this.props.children.map(child => child.props.id)
  }

  componentDidUpdate() {
    console.log('Slot.getSlideIds:', this.getSlideIds())
    this.props.onUpdate(this.getSlideIds(), this.props.id)
  }

  componentDidMount() {
    this.props.onMount(this.getSlideIds(), this.props.id)
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

  getSlideIds(slots) {
    let slideIdsCompound = []

    // console.log(slots);
    for (var slotId in slots) {
      slideIdsCompound = slideIdsCompound.concat(slots[slotId])
    }

    return slideIdsCompound
  }

  onSlotUpdate(slots) {

    this.props.onSlotUpdate(this.getSlideIds(slots), this.props.id || null)
    // this.slotUpdateCb(joinIds(this.slots))

  }

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
    console.log('SlotContainer.onSlotMount', slots);
    if (slotsMounted) {
      this.props.onSlotsMount(this.getSlideIds(slots), this.props.id || null)
    }
  }

  /*
  */

  render() {
    return (
      <div className={'slot-container'}>
      {
        this.props.content(this.onSlotUpdate.bind(this), this.onSlotMount.bind(this))
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
    this.props.onSlotUpdate(this.slots)
  }

  onSlotMount(slideIds, slotId) {
    this.slots[slotId] = slideIds
    this.slots[slotId].mounted = true
    this.props.onSlotMount(this.slots)
  }

  render() {

    const infoSlides = [
      <Slide id={'info-input'} key={'info-input'}
      clickCb={this.respond.bind(this)}>{'info, input'}</Slide>
    ]

    if (this.state.response) {
      infoSlides.push(
        <Slide id={'info-response'} key={'info-response'}>{'info, response'}</Slide>
      )
    }

    const engagementSlides = [
      <Slide id={'engagement-input'} key={'engagement-input'}
      clickCb={this.respond.bind(this)}>{'engagement, input'}</Slide>
    ]

    if (this.state.response) {
      engagementSlides.push(
        <Slide id={'engagement-response'} key={'engagement-response'}>{'engagement, response'}</Slide>
      )
    }
    /*
    <Slide id={'info-input'}
    clickCb={this.respond.bind(this)}>{'info, input'}</Slide>

    {
    this.state.response ?
    <Slide id={'info-response'}>{'info, response'}</Slide>
    :
    null
    }
    */

    return (
      <div className={'slot-use'}>
        <div className={'info-container'}>
          <Slot id={'info'}
          onUpdate={this.onSlotUpdate.bind(this)}
          onMount={this.onSlotMount.bind(this)}
          >
            {infoSlides}
          </Slot>
        </div>

        <div className={'engagement-container'}>
          <Slot id={'engagement'}
          onUpdate={this.onSlotUpdate.bind(this)}
          onMount={this.onSlotMount.bind(this)}
          >
            {engagementSlides}
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

  onSlotUpdate(slideIds, slotId) {
    this.slots[slotId] = slideIds
    this.props.onSlotUpdate(this.slots)
  }

  onSlotMount(slideIds, slotId) {
    this.slots[slotId] = slideIds
    this.slots[slotId].mounted = true
    this.props.onSlotMount(this.slots)
  }

  render() {
    return (
      <div className={'nested-slot-use'}>
        <section className={'info-engagement'}>
          <SlotContainer id={'infoAndEngagement'}
            onSlotUpdate={this.onSlotUpdate.bind(this)}
            onSlotsMount={this.onSlotMount.bind(this)}
            content={(onUpdate, onMount) => {return <SlotUse onSlotUpdate={onUpdate} onSlotMount={onMount} />}}
            />
        </section>

        <section className={'contact-us'}>
          <Slot id={'contactUs'}
          onUpdate={this.onSlotUpdate.bind(this)}
          onMount={this.onSlotMount.bind(this)}
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
    return (

      <div className={'root'}>
        <Slider ref={this.slider} />

        <SlotContainer
         onSlotUpdate={this.onSlidesUpdate.bind(this)}
         onSlotsMount={this.onSlidesMount.bind(this)}
         content={
           (onUpdate, onMount) => <NestedSlotUse onSlotUpdate={onUpdate} onSlotMount={onMount} />
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
