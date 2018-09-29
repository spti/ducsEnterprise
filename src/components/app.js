import {Page} from './components/page.js'
// import {Page} from './components/page.js'

class App extends React.Component {
  /**
    @param {array} pages: [section: {}]
  */
  constructor(props) {
    super(props)

    this.pages = this.props.pages.map((page) => {
      page.sections = page.sections.map((section) => {
        return function(ref, sections) {
          const sect = section(ref, sections, {
            onToggleVisib: this.onToggleVisib,
            inViewCb: this.inViewCb,
          })
        }
      })
    })
  }

  createSwitcherItems(page) {
    return page.getVisibleSections().map((section, i) => {
      return {
        val: '0'+ i,
        identifier: section.props.identifier
      }
    })
  }

  updateSwitcher(page) {
    console.log("items", this.createSwitcherItems())
    this.switcher.current.setItems(this.createSwitcherItems())
    window.setTimeout(() => {
      this.switcher.current.switchTo(this.sectionCurrentId)
    }, 30)
  }

  sectionEnterCb(sectionId) {
    this.switcher.current.switchTo(sectionId)
    this.sectionCurrentId = sectionId
  }

  sectionToggleVisibilityCb(sectionId, page) {
    this.updateSwitcher(page)
  }

  render() {

  }
}
