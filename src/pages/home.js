// import {Header} from '../components/header.js'
// import {Nav} from '../components/nav.js'
// import {NavLink} from '../components/nav-link.js'
import {InputForm} from '../components/form.js'
// import {Footer} from 'footer.js'
// import {Switcher} from '../components/switcher.js'
import {Section} from '../components/section.js'
import {Info, Infos} from '../components/info.js'

const sectionsHome = [
  /**
  @param {array} sections: sections refs of a page
  @param {object} cbs: callbacks for Sections, defined by App (),
  function(ref, sections, cbs) {}
  **/

  /**
  Home:
  */
  function(ref, sections, cbs) {
    console.log('home section, cbs: ', cbs)
    return (
      <Section
      key="home"
      ref={ref}
      identifier="home" visible={true}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div className="half">
          <Info className="info" heading="Home Heading">
            {"Home info text body"}
          </Info>
        </div>
        <div className="half">

        </div>
      </Section>
    )
  },

  /**
  Logo:
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="identity"
      ref={ref}
      identifier="identity"
      visible={true}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div className="logo-large">{"Logo"}</div>
      </Section>
    )
  },

  /**
  Customers' Sales:
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="salesStatus"
      ref={ref}
      identifier="salesStatus"
      visible={true}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <Infos items={[
          {h: "55000", text: 'two lines of text'},
          {h: "55000", text: 'two lines of text'},
          {h: "55000", text: 'two lines of text'},
          {h: "55000", text: 'two lines of text'},
        ]}></Infos>
      </Section>
    )
  },

  /**
  Prolly, Initial Form:
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="wip0"
      ref={ref}
      identifier="wip0"
      visible={true}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div className="info">
          <h1>Work In Progress Here ...</h1>
          <p>I suppose, this should be a form, which on response reveals the next sections</p>
          <h2 onClick={() => {
            sections.visitorPropertyEstimations.current.show()
            sections.sellWithUs.current.show()
          }}>Click Me!</h2>
        </div>
      </Section>
    )
  },

  /**
  Form I response, Sell With Us CTA:
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="visitorPropertyEstimations"
      ref={ref}
      identifier="visitorPropertyEstimations" visible={false}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div className="half">
          <Info className="info" heading="Based on Info You Provided">
            <p>we found that your ducks is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
          </Info>
        </div>
        <div className="half"></div>
      </Section>
    )
  },

  /**
  Form II (Sell With Us):
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="sellWithUs"
      ref={ref}
      identifier="sellWithUs" visible={false}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <InputForm
          submitCb={(xhr) => {
            console.log('submitCb cb')
            if (xhr.status == 200) {
              sections.sellWithUsResponse.current.show()
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
    )
  },

  /**
  Form II Response:
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key= "sellWithUsResponse"
      ref={ref}
      identifier="sellWithUsResponse"
      visible={false}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div className="info">
          <h1>We Received:</h1>
          <span>ducks</span>
        </div>
      </Section>
    )
  },

  /**
  Contact Us: Tell Us More About Your Preferences
  */
  function(ref, sections, cbs) {
    return (
    <Section
    key="contactForm"
    ref={ref}
    identifier="contactForm" visible={true}
    inViewCb={cbs.inViewCb}
    onToggleVisib={() => {
      cbs.onToggleVisib()
      // do my own stuff
    }}>
    <InputForm
      submitCb={(xhr) => {
        console.log('submitCb cb')
        if (xhr.status == 200) {
          sections.sellWithUsResponse.current.show()
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
    </Section>)
  },

  /**
  Contact Us: Our Process
  */
  function(ref, sections, cbs) {
    return (
      <Section
      key="contactProcess"
      ref={ref}
      identifier="contactProcess"
      visible={true}
      inViewCb={cbs.inViewCb}
      onToggleVisib={cbs.onToggleVisib}>
        <div id="ourProcess"></div>
      </Section>
    )
  }
]

export {sectionsHome}
