import React from 'react'
import {Slide} from './slide.js'

function joinIds(ids) {
  this.slots[slotIndex] = slideIds

  let slideIdsCompound = []
  this.slots.forEach(slot => slideIdsCompound = slideIdsCompound.concat(slot))
  this.props.onUpdate(this.props.index, slideIdsCompound)
}

class Slot extends React.Component {
  constructor() {
    super()
  }

  getSlideIds() {
    return this.props.children.map(child => child.props.id)
  }

  componentDidUpdate() {
    console.log('Slot.getSlideIds:', this.getSlideIds())
    this.props.onUpdate(this.getSlideIds, this.props.index)
  }

  render() {
    return (
      <div className={'slot'}>{this.props.children}</div>
    )
  }
}

class SlotUse extends React.Component {
  constructor() {
    this.slots = {
      info: [],
      engagement: []
    }
  }

  onSlotUpdate(slideIds, slotId) {
    this.slots[slotId] = slideIds

    let slideIdsCompound = []

    for ([slotId, slideIds] in this.slots) {
      slideIdsCompound = slideIdsCompound.concat(val)
    }

    this.props.onSlideIdsUpdate(slideIdsCompound, this.props.id) // the id is there in the case of nested usage (see the NestedSlotUse)
    // this.slotUpdateCb(joinIds(this.slots))
  }

  render() {
    return (
      <div className={'info-container'}>
        <Slot id={'info'} onUpdate={this.onSlotUpdate}>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
        </Slot>
      </div>

      <div className={'engagement-container'}>
        <Slot id={'engagement'} onUpdate={this.onSlotUpdate}>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
        </Slot>
      </div>
    )
  }
}

class NestedSlotUse extends React.Component {

  constructor() {
    this.slots = {
      infoAndEngagement: [],
      contactUs: []
    }
  }

  onSlotUpdate(slideIds, slotId) {
    this.slots[slotId] = slideIds

    let slideIdsCompound = []

    for ([slotId, slideIds] in this.slots) {
      slideIdsCompound = slideIdsCompound.concat(val)
    }

    this.props.onSlideIdsUpdate(slideIdsCompound, this.props.id || null)
    // this.slotUpdateCb(joinIds(this.slots))
  }

  render() {
    return (
      <section className={'info-engagement'}>
        <SlotUse id={'infoAndEngagement'} onSlideIdsUpdate={this.onSlotUpdate} />
      </section>

      <section className={'some-other-section'}>
        <Slot id={'contactUs'} onUpdate={this.onSlotUpdate}>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
        </Slot>
      </section>
    )
  }
}

class Root extends React.Component {
  constructor() {
    this.slider = React.createRef()
    // this.slideIds = []

  }

  onSlideIdsUpdate(slideIds) {
    this.slider.current.updateSlides(slideIds)
  }

  render() {
    <div className={'root'}>
      <Slider ref={this.slider}
      slideIds={this.slideIds}
      ></Slider>

      {/* <SlotUse onSlideIdsUpdate={/* this.onSlideIdsUpdate */} /> */}
      <NestedSlotUse onSlideIdsUpdate={this.onSlideIdsUpdate} />
    </div>
  }
}

class Slider extends React.Component {
  constructor() {
    super()
    this.state = {slides: []}
  }

  updateSlides(slides) {
    this.setState({slides: slides})
  }

  render() {

  }
}

/*

SlotContainer extends React.Component {

}

class Use extends eact.Component {
  constructor() {

  }

  render() {
    return (
      <SlotContainer content={(onSlotUpdate) => {return <SlotUse onSlotUpdate={onSlotUpdate}/>}}>
      </SlotContainer>
    )
  }
}
*/



/*
  or, instead of defining the onSlotUpdate cb, recieve it as a prop
  from SlotContainer

  class SlotUse extends React.Component {
    constructor() {
      this.slots = {
        info: [],
        engagement: []
      }
    }

    onSlotUpdate(slideIds, slotId) {
      this.props.onSlideIdsUpdate(this.slots, slideIds, slotId)
    }

    render() {
      return (
        <section className={'info'}>
          <Slot id={'info'} onUpdate={this.onSlotUpdate}>
            <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide>
          </Slot>
        </section>

        <section className={'engagement'}>
          <Slot id={'engagement'} onUpdate={this.onSlotUpdate}>
            <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide>
          </Slot>
        </section>
      )
    }
  }

  function content(updateCb) {
    <NestedSlotUse id={'section'} onSlideIdsUpdate={updateCb} />
  }

  class Root extends React.Component {
    constructor() {

    }

    onSlideIdsUpdate() {

    }

    render() {
      <SlotContainer
      onSlideIdsUpdate={this.onSlideIdsUpdate}
      content={content}
      >
    }
  }
*/
