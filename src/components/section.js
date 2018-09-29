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

class Section extends React.Component {
  /**
    @param {string} identifier
    @param {boolean} visible
    @param {function} inViewCb
    @param {function} onToggleVisib
  */
  constructor(props) {
    super(props)

    this.visible = props.visible
    this.dom = React.createRef()

    // we'll use this to determine if section is in the viewport
    this.vH = getViewportHeight()
    this.inViewPrev = false

    window.addEventListener('resize', () => {
      this.vH = getViewportHeight()
    })

    window.addEventListener('scroll', () => {
      if (!this.visible)
        return

      const inView = this.isInView()
      if (this.inViewPrev != inView) {
        if (inView)
          this.props.inViewCb(this.props.identifier)
      }
    })

    // this.state = {}
    // this.state.visible = props.visible

  }

  show() {
    this.dom.current.classList.remove("noned")
    this.visible = true
    this.props.onToggleVisib(this.props.identifier)
  }

  hide() {
    this.dom.current.classList.add("noned")
    this.visible = false
    this.props.onToggleVisib(this.props.identifier)
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

  isVisible() {
    return this.visible
  }

  componentDidMount() {

  }

  render() {
    const className = (this.visible) ? 'content-section' : 'content-section noned'

    return (
      <section
        ref={this.dom}
        id={this.props.identifier}
        className={className} >
        {this.props.children}
      </section>
    )
  }
}

export {Section}
