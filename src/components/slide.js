import React from 'react'
import ReactDOM from 'react-dom'

function getViewportHeight() {
  return window.innerHeight && document.documentElement.clientHeight ?
    Math.min(window.innerHeight, document.documentElement.clientHeight) :
    window.innerHeight || document.documentElement.clientHeight
      || (document.querySelector('body').clientHeight || document.getElementsByTagName('body')[0].clientHeight);
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ?
    Math.min(window.innerWidth, document.documentElement.clientWidth) :
    window.innerWidth || document.documentElement.clientWidth
      || (document.querySelector('body').clientWidth || document.getElementsByTagName('body')[0].clientWidth);

}

class Slide extends React.Component {

  constructor(props) {
    super(props)

    this.visible = props.visible
    this.dom = React.createRef()

    // we'll use this to determine if section is in the viewport
    this.vH = getViewportHeight()
    this.inViewPrev = false



    window.addEventListener('resize', this.onResizeCb)
    window.addEventListener('scroll', this.onScrollCb)
  }

  show() {
    this.dom.current.classList.remove("noned")
    this.visible = true
    this.props.onToggleVisib(this.props.id)
  }

  hide() {
    this.dom.current.classList.add("noned")
    this.visible = false
    this.props.onToggleVisib(this.props.id)
  }

  isVisible() {
    return this.visible
  }

  isInView() {
    const rect = this.dom.current.getBoundingClientRect()

    return (
      rect.top >= Math.round((this.vH/3)*-1) &&
      rect.top <= Math.round(this.vH/3)
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    )
  }

  activate() {
    this.active = true
  }

  deactivate() {
    this.active = false
  }

  onScrollCb = () => {
    if (!this.visible)
      return

    const inView = this.isInView()
    if (this.inViewPrev != inView) {
      if (inView) {
        console.log("section's window onscroll cb, inView", inView)
        this.props.inViewCb(this.props.id)
      }

      this.inViewPrev = inView
    }
  }

  onResizeCb = () => {
    this.vH = getViewportHeight()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeCb)
    window.removeEventListener('scroll', this.onScrollCb)
    console.log('slide will unmount')
  }

  render() {
    const className = (this.visible) ? 'content-slide' : 'content-slide noned'

    return (
      <div
        ref={this.dom}
        id={this.props.id}
        className={className} >
        {this.props.children}
      </div>
    )
  }
}

export {Slide}
