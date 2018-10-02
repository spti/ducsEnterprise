import React from 'react'
import ReactDOM from 'react-dom'

class Page extends React.Component {
  /**
  @param {array} sections @where
    section = {function} @where
      @param {React.Ref} ref
      @param {[React.Ref]} sections
      @returns {React.Component}
  */
  constructor(props) {
    super(props)

    this.sections = {}
    this.props.sections.forEach(section => {
      this.sections[section.id] = React.createRef()
    })

    this.unwrapSections(this.props.sections)

  }

  getVisibleSections() {
    const sectionsVisible = []


    Object.keys(this.sections).forEach(key => {
      const section = this.sections[key]
      if (section.current.visible)
        sectionsVisible.push(section)
    })

    // console.log('page, getVisibleSections, sectionsVisible:', sectionsVisible)
    return sectionsVisible
  }

  getVisibleSlides() {
    var slidesVisible = []
    Object.keys(this.sections).forEach(key => {
      // console.log('getvisibleslides, section', section)
      const section = this.sections[key]
      slidesVisible = slidesVisible.concat(section.current.getVisibleSlides())
    })

    return slidesVisible
  }

  getActiveSection() {
    const sectionKeys = Object.keys(this.sections)
    for (var i = 0; i < sectionKeys.length; i++) {
      const section = this.sections[sectionKeys[i]]

      if (section.current.active) {
        return section
      }
    }
  }

  setActiveSection(sectionId) {
    const activeSection = this.getActiveSection()
    if (activeSection && activeSection.current.props.id == sectionId)
      return

    const sectionKeys = Object.keys(this.sections)
    for (var i = 0; i < sectionKeys.length; i++) {
      const section = this.sections[sectionKeys[i]]

      if (section.current.props.id == sectionId) {
        if (activeSection)
          activeSection.current.deactivate()

        section.current.activate()
        return
      }
      // slide.setActiveSlide(slideId)
    }
  }

  getActiveSlide() {
    return this.getActiveSection().current.getActiveSlide()
    // const sectionKeys = Object.keys(this.sections)
    // for (var i = 0; i < sectionKeys.length; i++) {
    //   const section = this.sections[sectionKeys[i]]
    //
    //   if (section.current.active) {
    //     return section.current.getActiveSlide()
    //   }
    // }
  }

  setActiveSlide(slideId) {
    const activeSlide = this.getActiveSlide()
    if (activeSlide && activeSlide.current.props.id == slideId)
      return

    const sectionKeys = Object.keys(this.sections)
    for (var i = 0; i < sectionKeys.length; i++) {
      const section = this.sections[sectionKeys[i]]

      this.getActiveSection().current.deactivate()
      section.current.setActiveSlide(slideId)
      section.current.activate()
      return
    }
  }

  unwrapSections(sections) {
    this.sectionsEls = this.props.sections.map(section => {
      // console.log('page.render, section', section)
      return section.content(this.sections[section.id], this.sections)
    })
  }

  componentDidMount() {
    this.setActiveSection(this.props.sections[0].id)

    this.props.didMountCb(this.props.id)
    console.log('page:', this)
    window.setTimeout(() => {
      console.log('page:', this)
    }, 2000)

  }

  componentWillUnmount() {
    console.log('page will unmount')
    this.props.willUnmountCb(this.props.id)
  }

  render() {
    // const sections = this.unwrapSections(this.props.sections)

    // reference our refs by id
    // this.refsById(sections)

    return (
      <div className="page">
        {this.sectionsEls}
      </div>
    )
  }
}

export {Page}
