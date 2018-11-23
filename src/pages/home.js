import React from 'react'
import {Interaction} from '../components/interaction.js'

class Home extends React.Component {
  constructor() {
    super()

    this.activeSlideId = 0
    this.slides = []
  }

  slideMountCb(slideId) {

  }

  slideInViewCb() {
    
  }

  render() {
    return (
      // <Information slideMountb={}></Information>
      <Interaction></Interaction>
    )
  }
}

export {Home}
