import React from 'react'
import ReactDOM from 'react-dom'

// import {Header} from '../components/header.js'
// import {Nav} from '../components/nav.js'
// import {NavLink} from '../components/nav-link.js'
import {InputForm} from '../components/form.js'
// import {Footer} from 'footer.js'
// import {Switcher} from '../components/switcher.js'
import {Info, Infos} from '../components/info.js'

import {Slide} from '../components/slide.js'
import {Section} from '../components/section.js'
import {Page} from '../controllers/page.js'

const id = 'home'

const home = {
  id: id,
  content: function Home(ref, pages, cbs) {
    return (
      <Page ref={ref} id={id}
      didMountCb={cbs.pageDidMount}
      willUnmountCb={cbs.pageWillUnmount}
      sections={[
        {
          id: "identity",
          content: function(ref, sections) {
            return (
              <Section ref={ref} id="identity" slides={[
                /**
                Home:
                */
                (function() {
                  const id = "home"
                  return {
                    id: id,
                    content: function(ref, slides) {
                      console.log('home section, cbs: ', cbs)
                      return (
                        <Slide
                        ref={ref}
                        key={id}
                        id={id} visible={true}
                        inViewCb={cbs.slideOnViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div className="half">
                            <Info className="info" heading="Home Heading">
                              {"Home info text body"}
                            </Info>
                          </div>
                          <div className="half">

                          </div>
                        </Slide>
                      )
                    }
                  }
                })(),

                /**
                Logo:
                */
                (function() {
                  const id = "identity"
                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={true}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div className="logo-large">{"Logo"}</div>
                        </Slide>
                      )
                    }
                  }
                })()
              ]}></Section>
            )
          }
        },
        {
          id: "engagement",
          content: function(ref, sections) {
            return (
              <Section ref={ref} id="engagement" slides={[
                /**
                Customers Sales:
                */
                (function() {
                  const id = "customers-sales"

                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={true}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <Infos items={[
                            {h: "55000", text: 'two lines of text'},
                            {h: "55000", text: 'two lines of text'},
                            {h: "55000", text: 'two lines of text'},
                            {h: "55000", text: 'two lines of text'},
                          ]}></Infos>
                        </Slide>
                      )
                    }
                  }
                })(),

                /**
                Prolly, Initial Form:
                */
                (function() {
                  const id = "form1"

                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={true}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div className="info">
                            <h1>Work In Progress Here ...</h1>
                            <p>I suppose, this should be a form, which on response reveals the next slides</p>
                            <h2 onClick={() => {
                              slides['form1-res'].current.show()
                              slides['form2'].current.show()
                            }}>Click Me!</h2>
                          </div>
                        </Slide>
                      )
                    }
                  }
                })(),

                /**
                Form I response, Sell With Us CTA:
                */
                (function() {
                  const id = "form1-res"

                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={false}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div className="half">
                            <Info className="info" heading="Based on Info You Provided">
                              <p>we found that your ducks is worth <span>{"$5 - $6"}M range</span> and there are {"25"} buyers</p>
                            </Info>
                          </div>
                          <div className="half"></div>
                        </Slide>
                      )
                    }
                  }
                })(),

                /**
                Form II (Sell With Us):
                */
                (function() {
                  const id = "form2"
                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={false}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <InputForm
                            submitCb={(xhr) => {
                              console.log('submitCb cb')
                              if (xhr.status == 200) {
                                slides['form2-res'].current.show()
                              }
                            }}
                            submitVal="Reveal Next Slide"
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
                        </Slide>
                      )
                    }
                  }
                })(),

                /**
                Form II Response:
                */
                (function() {
                  const id = "form2-res"

                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={false}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div className="info">
                            <h1>We Received:</h1>
                            <span>ducks</span>
                          </div>
                        </Slide>
                      )
                    }
                  }
                })(),
              ]}></Section>
            )
          }
        },
        {
          id: "contact",
          content: function(ref, sections) {
            return (
              <Section ref={ref} id="contact" slides={[
                /**
                Contact Us: Tell Us More About Your Preferences
                */
                (function() {
                  const id = "contact-form"
                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                      <Slide
                      key={id}
                      ref={ref}
                      id={id}
                      visible={true}
                      inViewCb={cbs.slideInViewCb}
                      onToggleVisib={() => {
                        cbs.slideOnToggleVisib()
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
                      </Slide>)
                    }
                  }
                })(),

                /**
                Contact Us: Our Process
                */
                (function() {
                  const id = "contact-process"

                  return {
                    id: id,
                    content: function(ref, slides) {
                      return (
                        <Slide
                        key={id}
                        ref={ref}
                        id={id}
                        visible={true}
                        inViewCb={cbs.slideInViewCb}
                        onToggleVisib={cbs.slideOnToggleVisib}>
                          <div id="ourProcess"></div>
                        </Slide>
                      )
                    }
                  }
                })()
              ]}></Section>
            )
          }
        }
      ]} />
    )
  }
}

export {home}
