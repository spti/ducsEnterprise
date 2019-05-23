import React from 'react'
import ReactDOM from 'react-dom'
// import {Slide} from './slide.js'

class Slot extends React.Component {
  constructor() {
    super()
  }

  getSlideIds() {
    console.log('slot, slot children', this, this.props.children);
    const slideIds = []

    this.props.children.forEach(child => {
      // if (!(child instanceof React.Component) && child !== null)
      //   throw new Error()

      if (child === null) return
      if (child.props.id == undefined) throw new Error('slot choldren must have an id')

      slideIds.push(child.props.id)
    })

    return slideIds
  }

  onSlideInView(slideId) {
    // const slideIds = this.getSlideIds()
    // const activeIndex = slideIds.indexOf(slideId)
    // if (activeIndex < 0) throw new Error("fatal error: slot doesn't contain the active slide id")
    //
    // const slides = slideIds.map((slideId, i) => {return {active: i == activeIndex, id: slideId}})

    // const slideIds = this.getSlideIds()
    // actually, this is wrong: the currently active id must be kept at the topmost level,
    // because otherwise there will be multiple activeIds across multiple slots
    // this.activeId = slideId

    // we want to pass the id of the currently active slide to our callbacks. But
    // instead of passing the id itself, we pass it's index in the array of the slides
    // in this slot (because otherwise we' have to look for it in the totality of slide ids
    // of all slots, in the slotContainer component)
    // const activeIndex = slideIds.indexOf(this.activeId)
    this.props.onSlideInView(slideId, this.props.id)
  }

  componentDidUpdate() {
    console.log('Slot.getSlideIds:', this.getSlideIds())

    const slideIds = this.getSlideIds()
    // const activeIndex = slideIds.indexOf(this.activeId)

    this.props.onUpdate(slideIds, this.props.id)
  }

  componentDidMount() {
    const slideIds = this.getSlideIds()
    // const activeIndex = slideIds.indexOf(this.activeId)

    this.props.onMount(slideIds, this.props.id)
  }

  render() {
    return (
      <div className={'slot'}>{this.props.children}</div>
    )
  }
}

/**
@param {React.Component} slot user defined component, containing slots
*/
function slots(Slot) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.slotIds = []
      this.slots = []
    }

    /**
      @param {array} slotIds
    */
    setSlots(slotIds) {
      // TODO: typechecking to do here
      this.slotIds = slotIds

      this.slots = this.slotIds.map(slotId => [])
    }

    getSlideIds() {
      let slideIdsCompound = []

      // console.log(slots);
      // for (var slotId in slots) {
      //   slideIdsCompound = slideIdsCompound.concat(slots[slotId])
      // }

      var i = 0, len = this.slots.length
      for (i; i < len; i++) {
        slideIdsCompound = slideIdsCompound.concat(this.slots[i])
      }

      return slideIdsCompound
    }

    onSlotUpdate(slideIds, slotId) {
      console.log('slotContainer, onSlotUpdate');
      const slotIndex = this.slotIds.indexOf(slotId)
      if (slotIndex < 0) throw new Error('SlotContainer.onSlotUpdate: no such slotId as ' + slotId)

      this.slots[slotIndex] = slideIds

      this.props.onSlotUpdate(this.getSlideIds(), this.props.id || null)
      // this.slotUpdateCb(joinIds(this.))

    }

    onSlotMount(slideIds, slotId) {
      console.log('slotContainer.onSlotMount, slotId:', slotId);
      console.log('slotContainer.onSlotMount, container id:', this.props.id);
      const slotIndex = this.slotIds.indexOf(slotId)
      if (slotIndex < 0) throw new Error('SlotContainer.onSlotMount: no such slotId as ' + slotId + '. If you use the slot or SlotsContainer inside another SlotsContainer, then it must have an id')

      this.slots[slotIndex] = slideIds
      this.slots[slotIndex].mounted = true



      let slotsMounted = false

      var i = 0, len = this.slots.length
      for (i; i < len; i++) {
        if (!this.slots[i].mounted) {
          slotsMounted = false
          break
        } else {
          slotsMounted = true
        }
      }

      console.log('slotContainer.onSlotMount, slots:', [].concat(this.slots));
      console.log('slotContainer.onSlotMount, slotsMounted:', slotsMounted);
      // for (var slotId in slots) {
      //   // slideIdsCompound = slideIdsCompound.concat(slots[slotId])
      //   if (!slots[slotId].mounted) {
      //     slotsMounted = false
      //     break
      //   } else {
      //     slotsMounted = true
      //   }
      // }
      // console.log('SlotContainer.onSlotMount', slots);
      if (slotsMounted) {
        this.props.onSlotsMount(this.getSlideIds(), this.props.id || null)
      }
    }

    onSlideInView(slideId, slotId) {
      const slotIndex = this.slotIds.indexOf(slotId)
      if (slotIndex < 0) throw new Error('SlotContainer.onSlotUpdate: no such slotId as ' + slotId)

      // this.slots[slotIndex] = slideIds

      this.props.onSlideInView(slideId, this.props.id || null)
    }

    render() {
      return (
        <Slot
        setSlots={this.setSlots.bind(this)}
        onSlotMount={this.onSlotMount.bind(this)}
        onSlotUpdate={this.onSlotUpdate.bind(this)}
        onSlideInView={this.props.onSlideInView}/>
      )
    }
  }
}

class Slots extends React.Component {
  render() {
    const UserSlots = slots(this.props.component)

    return (
      <UserSlots
        id={this.props.id || null}
        onSlotsMount={this.props.onSlotsMount}
        onSlotUpdate={this.props.onSlotUpdate}
        onSlideInView={this.props.onSlideInView}
      />
    )
  }
}

class RootSlot extends React.Component {
  constructor(props) {
    super(props)

    this.activeSlideId = null
    this.slides = []
    this.slideIds = []
  }

  onSlotsMount(slideIds) {
    this.setSlides(slideIds)
    this.props.onSlotsMount(this.slides)
  }

  onSlotUpdate(slideIds) {
    this.setSlides(slideIds)
    this.props.onSlotUpdate(this.slides)
  }

  onSlideInView(slideId) {
    this.setActiveSlide(slideId)
    this.props.onSlideInView(this.slides)
  }

  setSlides(slideIds) {
    this.slideIds = slideIds
    this.slides = this.slideIds.map((id) => {
      return {id: id, active: this.activeSlideId === id || false}
    })
  }

  setActiveSlide(slideId) {
    this.slides = this.slides.map((slide) => {
      return {id: slide.id, active: slideId === slide.id || false}
    })

    this.activeSlideId = slideId
  }

  render() {
    const UserSlots = slots(this.props.component)
    return (
      <UserSlots
        id={this.props.id || null}
        onSlotsMount={this.onSlotsMount.bind(this)}
        onSlotUpdate={this.onSlotUpdate.bind(this)}
        onSlideInView={this.onSlideInView.bind(this)}
      />
    )
  }
}

/*
function SlotsContainerWrapperUse() {
  return (
    <SlotsContainerWrapper component={NestedSlotUse}
    onSlotMount={this.onSlidesMount}
    onSlotUpdate={this.onSlidesUpdate}
    />
  )
}
*/

export {Slot, slots, Slots, RootSlot}
