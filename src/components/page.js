class Page extends React.Component {
  /**
  @param {array} sections @where
    section = {function} @where
      @param {React.Ref} ref
      @param {[React.Ref]} sections
      @returns {React.Component}
  */
  constructor(props) {
    super(props)

    this.sections = this.props.sections.map(section => {
      // return React.createRef()
      return {
        identifier: section.identifier,
        ref: React.createRef()
      }
    })

    // this.sectionsWrapped =
  }

  getVisibleSections() {
    const sectionsVisible = []

    this.sections.forEach(section => {
      if (section.current.visible)
        sectionsVisible.push(section)
    })

    return sectionsVisible
  }

  wrapUserCb(userCb) {
    return function() {
      // user would know what vars are in arguments, because they know
      // what the callback is called by. So we pass those, and add some context ourselves
      return userCb(arguments, this.sections)
    }
  }

  componentDidMount() {
    console.log(this)
    window.setTimeout(() => {
      console.log(this)
    }, 2000)

  }

  render() {
    return (
      <div className="page">
        {this.props.sections.map((sect, i) => {
          const section = sect(this.sections)
          return (
            <Section
            ref={this.sections[i]}
            onToggleVisib={this.wrapUserCb(sect.onToggleVisib)}
            >
              {sect.content}
            </Section>
          )
        })}
      </div>
    )
  }
}
