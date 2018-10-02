import React from 'react'
import ReactDOM from 'react-dom'

class Section extends React.Component {
  /**
    @param {string} id
    @param {boolean} visible
    @param {function} inViewCb
    @param {function} onToggleVisib
  */
  constructor(props) {
    super(props)

    this.visible = props.visible

    this.slides = {}
    this.props.slides.forEach(slide => {
      this.slides[slide.id] = React.createRef()
    })

    this.unwrapSlides(this.props.slides)

    // this.state = {}
    // this.state.visible = props.visible

  }

  isVisible() {
    return this.visible
  }

  getVisibleSlides() {
    const slidesVisible = []

    Object.keys(this.slides).forEach(key => {
      const slide = this.slides[key]
      if (slide.current.visible)
        slidesVisible.push(slide)
    })

    // console.log('page, getVisibleSections, slidesVisible:', slidesVisible)
    return slidesVisible
  }

  getActiveSlide() {
    // return a slide or null if no slide is active
    // or, maybe instead of having none of the slides active
    // we should have unactive section!! If section isnt active,
    // then no need to see if slides in it are active

    const slideKeys = Object.keys(this.slides)
    for (var i = 0; i < slideKeys.length; i++) {
      const slide = this.slides[slideKeys[i]]

      if (slide.current.active) {
        return slide
      }
    }
  }

  setActiveSlide(slideId) {
    // only one slide can be active at a time

    const activeSlide = this.getActiveSlide()
    if (activeSlide && activeSlide.current.props.id == slideId)
      return

    const slideKeys = Object.keys(this.slides)
    for (var i = 0; i < slideKeys.length; i++) {
      const slide = this.slides[slideKeys[i]]

      if (slide.current.props.id == slideId) {
        if (activeSlide)
          activeSlide.current.deactivate()

        slide.current.activate()
        return
      }
      // slide.setActiveSlide(slideId)
    }
  }

  unwrapSlides(slides) {
    this.slidesEls = this.props.slides.map(slide => {
      // console.log('page.render, section', section)
      return slide.content(this.slides[slide.id], this.slides)
    })
  }

  activate() {
    this.active = true
  }

  deactivate() {
    this.active = false
  }

  componentDidMount() {
    this.setActiveSlide(this.props.slides[0].id)
  }

  componentWillUnmount() {
    console.log('section will unmount')
  }

  render() {
    const className = (true/*this.visible*/) ? 'content-section' : 'content-section noned'

    return (
      <div className={className}>
        {this.slidesEls}
      </div>
    )
  }
}

export {Section}
