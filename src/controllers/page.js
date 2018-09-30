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

    // this.sectionsById = {}
    // this.sections = this.props.sections.map(section => {
    //   // return React.createRef()
    //   return React.createRef()
    // })

    this.sections = {}
    this.props.sections.forEach(section => {
      this.sections[section.id] = React.createRef()
    })

    // this.sectionsWrapped =
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

  // wrapUserCb(userCb) {
  //   return function() {
  //     // user would know what vars are in arguments, because they know
  //     // what the callback is called by. So we pass those, and add some context ourselves
  //     return userCb(arguments, this.sections)
  //   }
  // }
  //
  // unwrapSections(sections) {
  //   const sectionsUnwrapped = sections.map((section, i) => {
  //     const sectionEl = section(this.sections[i], this.sections)
  //     console.log(sectionEl)
  //     return sectionEl
  //   })
  //
  //   return sectionsUnwrapped
  // }
  //
  // refsByIds(sections) {
  //   sections.forEach((section, i) => {
  //     this.sections[section.props.identifier] = this.sections[i]
  //     // this.sectionsIds.push(section.props.identifier)
  //   })
  // }

  componentDidMount() {
    console.log('page:', this)
    window.setTimeout(() => {
      console.log('page:', this)
    }, 2000)

  }

  render() {
    // const sections = this.unwrapSections(this.props.sections)

    // reference our refs by id
    // this.refsById(sections)

    return (
      <div className="page">
        {this.props.sections.map(section => {
          // console.log('page.render, section', section)
          return section.content(this.sections[section.id], this.sections)
        })}
      </div>
    )
  }
}

export {Page}
