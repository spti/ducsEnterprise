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
        return (ref, sections) => {
          return section(ref, sections, {
            onToggleVisib: this.sectionToggleVisibilityCb.bind(this),
            inViewCb: this.sectionEnterCb.bind(this),
          })
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
        identifier: section.current.props.identifier
      }
    })
  }

  updateSwitcher(page) {
    console.log("items", this.createSwitcherItems(page))
    this.switcher.current.setItems(this.createSwitcherItems(page))
    window.setTimeout(() => {
      this.switcher.current.switchTo(this.sectionCurrentId)
    }, 30)
  }

  sectionEnterCb(sectionId) {
    this.switcher.current.switchTo(sectionId)
    this.sectionCurrentId = sectionId
  }

  sectionToggleVisibilityCb(sectionId) {
    this.updateSwitcher(this.pages.home)
  }

  componentDidMount() {
    this.sectionCurrentId = this.pages.home.current.sections[0].ref.current.props.identifier
    this.updateSwitcher(this.pages.home)

  }

  render() {
    return (
      <div className="app">
        <Switcher ref={this.switcher} className="switcher" items={[{val: '01', identifier: 'home'}]}></Switcher>
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
