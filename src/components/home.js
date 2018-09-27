import {Header} from './header.js'
import {Switcher} from './switcher.js'
// import {Footer} from 'footer.js'
import {Section} from './section.js'
import {HeaderLink} from './header-link.js'
import {Info, Infos} from './info.js'

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

export {Home, HomeWrapper}
