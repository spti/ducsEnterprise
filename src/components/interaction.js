/**
  @prop {props} props {
  inputOne, responseOne, inputTwo, ResponseTwo
}
*/
class Interaction {
  constructor() {

    this.state = {
      responseOne: {},
      responseTwo: {}
    }
  }

  render() {
    <InputOne submitCb={(data) => {
      this.sendData(data)
      .then((res) => {
        this.state.responseOne = res
      })
    }}/>

    if (this.state.responseOne) {
      <ResponseOne responseData={this.state.responseOne}/>
      <InputTwo submitCb={(data) => {
        this.sendData(data)
        .then((res) => {
          this.state.responseTwo = res
        })
      }}/>
    }

    if (this.state.responseTwo) {
      <ResponseTwo responseData={this.state.responseTwo}/>
    }

  }
}
