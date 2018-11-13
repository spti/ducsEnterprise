class Interaction {
  constructor() {

  }

  render() {

  }
}
/**
  @prop {props} props {
  inputOne, responseOne, inputTwo, ResponseTwo
}
*/
class Interaction {
  constructor() {
    
  }

  render() {
    <InputOne/>
    if (this.props.responseOne) {
      <ResponseOne responseData={this.props.responseOne}/>
      <InputTwo/>
    }

    if (this.props.responseTwo) {
      <ResponseTwo responseData={this.props.responseTwo}/>
    }

  }
}
