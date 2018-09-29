function wrapSectionFn() {
  return function(sections, cbs) {

  }
}
/*

function wrapper(userCbs) {

  // cbs.onToggleSectionVisibility = function() {
  //
  // }
  return function(ref, sections, appCbs) {
    return (
      <Section ref={ref}
      inViewCb={(sectionId) => {
        appCbs.inViewCb(sectionId)
        userCbs.inViewCb(sectionId)
      }}
      onToggleVisib={(sectionId) => {
        appCbs.onToggleVisib(sectionId)
        userCbs.onToggleVisib(sectionId)
      }}
      >
        {content}
      </Section>
    )
  }
}

*/

const sections = [
  wrapper()
  /**
  @param {array} sections: sections refs of a page
  @param {object} cbs: callbacks for Sections, defined by App (),
  **/
  function(ref, sections, cbs) {
    return <Section ref={ref} identifier="contactForm" visible={true}
    inViewCb={cbs.onSectionEnterCb}
    onToggleVisib={() => {
      cbs.onToggleSectionVisibility()
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
    </Section>
  }
]
