import {Header} from './header.js'
import {Nav} from './nav.js'
import {Switcher} from './switcher.js'
// import {Footer} from 'footer.js'
import {Section} from './section.js'
import {NavLink} from './nav-link.js'
import {Info, Infos} from './info.js'

/*
function Router(url, pages) {

}

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.metrics = [
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"}
    ]

    this.refe = React.createRef()
    // this.home = React.createRef()
    this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef(),
    }

    this.switcher = React.createRef()
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

  scrollToSection() {}

  createSwitcherItems() {
    return this.getVisibleSections().map((section, i) => {
      return {
        val: '0'+ i,
        identifier: section.props.identifier
      }
    })
  }

  updateSwitcher() {
    this.switcher.props.items = this.createSwitcherItems()
  }

  componentDidMount() {
    console.log(this.refe)
    // this.updateSwitcher()
  }

  render() {
    const items = [{
      val: '01',
      identifier: 'home'
    }]

    return (
      <div ref={this.refe}>
      <Header>
        <HeaderLink text="HOME" url="#home"/>
        <HeaderLink text="ABOUT US" url=""/>
        <HeaderLink text="NEWS" url=""/>
        <HeaderLink text="CONTACT" url="#contact"/>
      </Header>

      <Switcher id="switcher" items={items}></Switcher>

      <Section ref={this.sections.home} identifier="home" visible={true}>
        <div className="half">
          <Info heading="Home Heading">
            {"Home info text body"}
          </Info>
        </div>
        <div className="half">

        </div>
      </Section>

      <Section ref={this.sections.identity} identifier="indentity" visible={true}>
        {"Logo"}
      </Section>

      <Section ref={this.sections.salesStatus} identifier="salesStatus" visible={true}>
        <Infos items={this.metrics}></Infos>
      </Section>

      <Section ref={this.sections.wip0} identifier="wip0" visible={true}>
        <h1>Work In Progress Here ...</h1>
      </Section>

      <Section ref={this.sections.visitorPropertyEstimations} identifier="visitorPropertyEstimations" visible={false}>
        <div className="half">
          <Info heading="Based on Info You Provided">
            <p>we found that your property is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
          </Info>
        </div>
        <div className="half"></div>
      </Section>

      <Section ref={this.sections.sellWithUs} identifier="sellWithUs" visible={false}>

      </Section>

      <Section ref={this.sections.sellWithUsResponse} identifier="sellWithUsResponse" visible={false}>

      </Section>

      <Section ref={this.sections.contactForm} identifier="contactForm" visible={true}>
      </Section>

      <Section ref={this.sections.contactProcess} identifier="contactProcess" visible={true}>
      </Section>
      </div>
    )
  }
}

class HomeWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.home = React.createRef()
  }

  componentDidMount() {
    console.log(this.home)
    console.log(this.home.current.getVisibleSections.call(this.home.current))
  }

  render() {
    return (
      <Home ref={this.home} />
    )
  }
}

*/

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
    }

    this.metrics = [
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"},
      {h: "5500", text: "two lines of text"}
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
      <Section ref={this.sections.home} identifier="home" visible={true}>
        <div className="half">
          <Info className="info" heading="Home Heading">
            {"Home info text body"}
          </Info>
        </div>
        <div className="half">

        </div>
      </Section>

      <Section ref={this.sections.identity} identifier="indentity" visible={true}>
        <div class="logo-large">{"Logo"}</div>
      </Section>

      <Section ref={this.sections.salesStatus} identifier="salesStatus" visible={true}>
        <Infos items={this.metrics}></Infos>
      </Section>

      <Section ref={this.sections.wip0} identifier="wip0" visible={true}>
        <h1>Work In Progress Here ...</h1>
      </Section>

      <Section ref={this.sections.visitorPropertyEstimations} identifier="visitorPropertyEstimations" visible={false}>
        <div className="half">
          <Info className="info" heading="Based on Info You Provided">
            <p>we found that your property is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
          </Info>
        </div>
        <div className="half"></div>
      </Section>

      <Section ref={this.sections.sellWithUs} identifier="sellWithUs" visible={false}>

      </Section>

      <Section ref={this.sections.sellWithUsResponse} identifier="sellWithUsResponse" visible={false}>

      </Section>

      <Section ref={this.sections.contactForm} identifier="contactForm" visible={true}>
      </Section>

      <Section ref={this.sections.contactProcess} identifier="contactProcess" visible={true}>
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
    this.updateSwitcher()
    // this.switcher.current.switchTo("identity")
  }

  render() {
    const items = [{
      val: '01',
      identifier: 'home'
    }]

    return (
      <div className="app">
        <Header>
          <div className="logo"></div>
          <Nav>
            <NavLink text="HOME" url="?page=home#home"/>
            <NavLink text="ABOUT US" url="?page=about"/>
            <NavLink text="NEWS" url="?page=news"/>
            <NavLink text="CONTACT" url="?page=home#contact"/>
          </Nav>
          <div className="search-button"></div>
        </Header>

        <div className="toggle-menu-button"></div>


        <Switcher ref={this.switcher} className="switcher" items={items}></Switcher>

        <Home ref={this.home} onToggleSectionVisibility={this.updateSwitcher.bind(this)} />
      </div>
    )
  }
}

export {App} // Home, HomeWrapper
