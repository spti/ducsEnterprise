import {Header} from '../components/header.js'
import {Nav} from '../components/nav.js'
import {NavLink} from '../components/nav-link.js'
import {InputForm} from '../components/form.js'
// import {Footer} from 'footer.js'
import {Switcher} from '../components/switcher.js'
import {Section} from '../components/section.js'
import {Info, Infos} from '../components/info.js'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef(),
      contactForm: React.createRef(),
      contactProcess: React.createRef(),
    }

    // some content data
    this.salesStatusMetrics = [
      {h: "55000", text: 'two lines of text'},
      {h: "55000", text: 'two lines of text'},
      {h: "55000", text: 'two lines of text'},
      {h: "55000", text: 'two lines of text'},
    ]
  }

  componentDidMount() {

  }

  getVisibleSections() {
    const sectionsKeys = Object.keys(this.sections)
    const sectionsVisible = []

    console.log(sectionsKeys)
    console.log(this.sections)
    sectionsKeys.forEach(key => {
      if (this.sections[key].current.isVisible()) {
        sectionsVisible.push(this.sections[key].current)
      }
    })

    console.log(sectionsVisible)
    return sectionsVisible
  }

  render() {
    return (
      <div className="page">
      <Section ref={this.sections.home} identifier="home" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div className="half">
          <Info className="info" heading="Home Heading">
            {"Home info text body"}
          </Info>
        </div>
        <div className="half">

        </div>
      </Section>

      <Section ref={this.sections.identity} identifier="identity" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div className="logo-large">{"Logo"}</div>
      </Section>

      <Section ref={this.sections.salesStatus} identifier="salesStatus" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <Infos items={this.salesStatusMetrics}></Infos>
      </Section>

      <Section ref={this.sections.wip0} identifier="wip0" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div className="info">
          <h1>Work In Progress Here ...</h1>
          <p>I suppose, this should be a form, which on response reveals the next sections</p>
          <h2 onClick={() => {
            this.sections.visitorPropertyEstimations.current.show()
            this.sections.sellWithUs.current.show()
          }}>Click Me!</h2>
        </div>
      </Section>

      <Section ref={this.sections.visitorPropertyEstimations} identifier="visitorPropertyEstimations" visible={false} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div className="half">
          <Info className="info" heading="Based on Info You Provided">
            <p>we found that your ducks is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
          </Info>
        </div>
        <div className="half"></div>
      </Section>

      <Section ref={this.sections.sellWithUs} identifier="sellWithUs" visible={false} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <InputForm
          submitCb={(xhr) => {
            console.log('submitCb cb')
            if (xhr.status == 200) {
              this.sections.sellWithUsResponse.current.show()
            }
          }}
          submitVal="Reveal Next Section"
          inputs={[
            {
              tagName: "input",
              type: "text"
            },
            {
              tagName: "textarea",
              type: "text"
            },
          ]}
          >
        </InputForm>
      </Section>

      <Section ref={this.sections.sellWithUsResponse} identifier="sellWithUsResponse" visible={false} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div className="info">
          <h1>We Received:</h1>
          <span>ducks</span>
        </div>
      </Section>

      <Section ref={this.sections.contactForm} identifier="contactForm" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
      <InputForm
        submitCb={(xhr) => {
          console.log('submitCb cb')
          if (xhr.status == 200) {
            this.sections.sellWithUsResponse.current.show()
          }
        }}
        inputs={[
          {
            tagName: "input",
            type: "text"
          },
          {
            tagName: "input",
            type: "text"
          },
          {
            tagName: "input",
            type: "text"
          },
          {
            tagName: "input",
            type: "text"
          },
        ]}
        >
      </InputForm>
      </Section>

      <Section ref={this.sections.contactProcess} identifier="contactProcess" visible={true} inViewCb={this.props.onSectionEnterCb} onToggleVisib={this.props.onToggleSectionVisibility}>
        <div id="ourProcess"></div>
      </Section>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.home = React.createRef()
    // this.contact = React.createRef()
    // this.about = React.createRef()
    // this.news = React.createRef()

    this.switcher = React.createRef()
  }

  createSwitcherItems() {
    return this.home.current.getVisibleSections().map((section, i) => {
      return {
        val: '0'+ i,
        identifier: section.props.identifier
      }
    })
  }

  updateSwitcher() {
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

  testToggleSection() {
    this.home.current.sections.visitorPropertyEstimations.current.show()
  }

  /*
  route(url) {
    const query = url.slice(url.indexOf("?")+1)
    const hash = query.slice(query.indexOf("#")+1)
    const search = query.slice(0, query.indexOf("#"))

    const page = search.split("=")[1]
    switch(page) {
      case(page == "home") {

      }

      case(page == "about") {

      }

      case(page == "news") {

      }
    }
  }
  */

  componentDidMount() {
    console.log("app", this)
    this.sectionCurrentId = 'home'
    this.updateSwitcher()
    window.setTimeout(() => {
      this.switcher.current.switchTo('home')
    }, 250)


    // this.switcher.current.switchTo("identity")
  }

  render() {
    const items = [{
      val: '01',
      identifier: 'home'
    }]

    return (
      <div className="app">
        <Header clickCb={this.testToggleSection.bind(this)}>
          <div className="logo"></div>
          <Nav>
            <NavLink text="HOME" url="?page=home#home"/>
            <NavLink text="ABOUT US" url="?page=about"/>
            <NavLink text="NEWS" url="?page=news"/>
            <NavLink text="CONTACT" url="?page=home#contactForm"/>
          </Nav>
          <div className="search-button"></div>
        </Header>

        <div className="toggle-menu-button"></div>


        <Switcher ref={this.switcher} className="switcher" items={items}></Switcher>

        <Home ref={this.home} onToggleSectionVisibility={this.updateSwitcher.bind(this)} onSectionEnterCb={this.sectionEnterCb.bind(this)} />
      </div>
    )
  }
}

export {App} // Home, HomeWrapper
