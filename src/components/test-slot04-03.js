import React from 'react'
import ReactDOM from 'react-dom'
import {Slide} from './slide.js'

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
function slotContainer(Slot, onSlotUpdate, onSlotsMount, id) {
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

      onSlotUpdate(this.getSlideIds(), id || null)
      // this.slotUpdateCb(joinIds(this.))

    }

    onSlotMount(slideIds, slotId) {
      const slotIndex = this.slotIds.indexOf(slotId)
      if (slotIndex < 0) throw new Error('SlotContainer.onSlotMount: no such slotId as ' + slotId)

      this.slots[slotIndex] = slideIds
      this.slots[slotIndex].mounted = true

      console.log('slotContainer.onSlotMount, container id:', id);


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
        onSlotsMount(this.getSlideIds(), id || null)
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

class SlotUse extends React.Component {
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

class NestedSlotUse extends React.Component {
  constructor(props) {
    super(props)
    this.props.setSlots(['engagement', 'contactUs'])
  }

  render() {
    const SlotUseWrapped = slotContainer(
      SlotUse, // component
      this.props.onSlotUpdate, // callbacks
      this.props.onSlotMount,
      'engagement', // id
    )
    return (
      <div className={'nested-slot-use'}>
        <section className={'engagement'}>
        <SlotUseWrapped />
          {
            // slotContainer(
            //   SlotUse, // component
            //   this.props.onSlotUpdate, // callbacks
            //   this.props.onSlotMount,
            //   'engagement', // id
            // )
          }
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
    const Thecontainer = slotContainer(
      NestedSlotUse,
      this.onSlidesUpdate.bind(this),
      this.onSlidesMount.bind(this)
    )
    return (
      <div className={'root'}>
        <Slider ref={this.slider} />
        <Thecontainer />
        {
          // slotContainer(
          //   NestedSlotUse,
          //   this.onSlidesUpdate.bind(this),
          //   this.onSlidesMount.bind(this)
          // )
        }
      </div>
    )
  }
}

function Test() {
  return (
    <Root />
  )
}

export {Test}
