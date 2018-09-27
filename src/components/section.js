class Section extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.state.visible = props.visible
  }

  isVisible() {
    return this.state.visible
  }

  componentDidMount() {

  }

  render() {
    const className = (this.state.visible) ? 'content-section' : 'content-section noned'

    return (
      <section className={className} id={this.props.identifier}>
        {this.props.children}
      </section>
    )
  }
}

export {Section}
