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

/**
@param {React.Component} slot user defined component, containing slots
*/
function slotContainer(Slot) {
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
      const slotIndex = this.slotIds.indexOf(slotId)
      if (slotIndex < 0) throw new Error('SlotContainer.onSlotMount: no such slotId as ' + slotId + '. If you use the slot or SlotsContainer inside another SlotsContainer, then it must have an id')

      this.slots[slotIndex] = slideIds
      this.slots[slotIndex].mounted = true

      console.log('slotContainer.onSlotMount, container id:', this.props.id);


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

    render() {
      return (
        <Slot
        setSlots={this.setSlots.bind(this)}
        onSlotMount={this.onSlotMount.bind(this)}
        onSlotUpdate={this.onSlotUpdate.bind(this)}/>
      )
    }
  }
}

class SlotsContainerWrapper extends React.Component {
  render() {
    const Wrapper = slotContainer(this.props.component)

    return (
      <Wrapper
        id={this.props.id || null}
        onSlotsMount={this.props.onSlotsMount}
        onSlotUpdate={this.props.onSlotUpdate}
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

export {Slot, slotContainer, SlotsContainerWrapper}
