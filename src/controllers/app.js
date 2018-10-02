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
    this.props.pages.forEach(page => {
      this.pages[page.id] = React.createRef()
    })
    // this.pagesData = this.props.pages.map((page) => {
    //   this.pages[page.id] = React.createRef()
    //
    //   page.sections = page.sections.map((section) => {
    //
    //     return {
    //       id: section.id,
    //       content: (ref, sections) => {
    //         return section.content(ref, sections, {
    //           onToggleVisib: this.slideToggleVisibilityCb.bind(this),
    //           inViewCb: this.slideEnterCb.bind(this),
    //         })
    //       }
    //     }
    //   })
    //
    //   return page
    // })

    this.unwrapPages(this.props.pages)
    this.currentPageId = 'home'

    this.switcher = React.createRef()
  }

  createSwitcherItems(slides) {
    return slides.map((slide, i) => {
      return {
        val: '0'+ (i+1),
        identifier: slide.current.props.id
      }
    })
  }
  //
  // updateSwitcher(page) {
  //   console.log("items", this.createSwitcherItems(page))
  //   this.switcher.current.setItems(this.createSwitcherItems(page))
  //   window.setTimeout(() => {
  //     console.log(this.sectionCurrentId)
  //     this.switcher.current.switchTo(this.sectionCurrentId)
  //   }, 30)
  // }

  switcherItemClickCb(sectionId, ev) {
    this.switcher.current.switchTo(sectionId)
    window.location.hash = sectionId
  }

  pageDidMount(pageId) {
    this.currentPageId = pageId

    if (this.didMount) {
      const switcherItems = this.createSwitcherItems(this.pages[this.currentPageId].current.getVisibleSlides())
      this.switcher.current.setItems(switcherItems)
      this.switcher.current.switchTo(this.pages[this.currentPageId].current.getActiveSlide().current.props.id)
    }
  }

  pageWillUnmount() {

  }

  slideEnterCb(slideId) {
    this.switcher.current.switchTo(slideId)
    this.slideCurrentId = slideId
  }

  slideToggleVisibilityCb(slideId) {
    const switcherItems = this.createSwitcherItems(this.pages[this.currentPageId].current.getVisibleSlides())
    this.switcher.current.setItems(switcherItems)
    this.switcher.current.switchTo(this.pages[this.currentPageId].current.getActiveSlide().current.props.id)
    // this.updateSwitcher(this.pages.home)
  }

  unwrapPages(pages) {
    // this.pagesEls = this.pagesData.map((page) => {
    //   return (
    //     <Page ref={this.pages[page.id]} key={page.id} id={page.id}
    //     sections={page.sections}>
    //     </Page>
    //   )
    // })

    this.pagesEls = this.props.pages.map(page => {
      return page.content(this.pages[page.id], this.pages, {
        slideInViewCb: this.slideEnterCb.bind(this),
        slideOnToggleVisib: this.slideToggleVisibilityCb.bind(this),
        pageDidMount: this.pageDidMount.bind(this),
        pageWillUnmount: this.pageWillUnmount.bind(this),
      })
    })
  }

  componentDidMount() {
    this.didMount = true
    // this.sectionCurrentId = this.pages.home.current.sections['home'].current.props.id
    const switcherItems = this.createSwitcherItems(this.pages[this.currentPageId].current.getVisibleSlides())
    this.switcher.current.setItems(switcherItems)
    window.setTimeout(() => {
      this.switcher.current.switchTo(this.pages[this.currentPageId].current.getActiveSlide().current.props.id)
    }, 35)
    // this.updateSwitcher(this.pages.home)

  }

  render() {
    return (
      <div className="app">
        <Switcher ref={this.switcher}
        className="switcher"
        clickCb={this.switcherItemClickCb.bind(this)}
        items={[{val: '01', identifier: 'home'}]}></Switcher>
        <div className="pages">
          {this.pagesEls}
        </div>
      </div>
    )
  }
}

export {App}
