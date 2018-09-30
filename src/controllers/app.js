import React from 'react'
import ReactDOM from 'react-dom'
// a
import {Switcher} from '../components/switcher.js'
import {Page} from './page.js'
// import {Page} from './components/page.js'

class App extends React.Component {
  /**
    @param {array} pages: [section: {}]
  */
  constructor(props) {
    super(props)

    this.pages = {}
    this.pagesData = this.props.pages.map((page) => {
      this.pages[page.id] = React.createRef()

      page.sections = page.sections.map((section) => {

        return {
          id: section.id,
          content: (ref, sections) => {
            return section.content(ref, sections, {
              onToggleVisib: this.sectionToggleVisibilityCb.bind(this),
              inViewCb: this.sectionEnterCb.bind(this),
            })
          }
        }
      })

      return page
    })

    this.switcher = React.createRef()
  }

  createSwitcherItems(page) {
    return page.current.getVisibleSections().map((section, i) => {
      return {
        val: '0'+ (i+1),
        identifier: section.current.props.id
      }
    })
  }

  updateSwitcher(page) {
    console.log("items", this.createSwitcherItems(page))
    this.switcher.current.setItems(this.createSwitcherItems(page))
    window.setTimeout(() => {
      console.log(this.sectionCurrentId)
      this.switcher.current.switchTo(this.sectionCurrentId)
    }, 30)
  }

  switcherItemClickCb(sectionId, ev) {
    this.switcher.current.switchTo(sectionId)
    window.location.hash = sectionId
  }

  sectionEnterCb(sectionId) {
    this.switcher.current.switchTo(sectionId)
    this.sectionCurrentId = sectionId
  }

  sectionToggleVisibilityCb(sectionId) {
    this.updateSwitcher(this.pages.home)
  }

  componentDidMount() {
    this.sectionCurrentId = this.pages.home.current.sections['home'].current.props.id
    this.updateSwitcher(this.pages.home)

  }

  render() {
    return (
      <div className="app">
        <Switcher ref={this.switcher}
        className="switcher"
        clickCb={this.switcherItemClickCb.bind(this)}
        items={[{val: '01', identifier: 'home'}]}></Switcher>
        <div className="pages">
          {this.pagesData.map((page) => {
            return (
              <Page ref={this.pages[page.id]} key={page.id} id={page.id}
              sections={page.sections}>
              </Page>
            )
          })}
        </div>
      </div>
    )
  }
}

export {App}
