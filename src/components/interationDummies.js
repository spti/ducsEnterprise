function OneInput(props) {
  return (
    <div className="info">
      <h1>Work In Progress Here ...</h1>
      <p>I suppose, this should be a form, which on response reveals the next sections</p>
      <h2 onClick={(props.onSubmit({priceRange: [5, 6], demand: 25})}>Click Me!</h2>
    </div>
  )
}

function OneResponse(props) {

  return (
    <div className="half">
    <div className="info">
      <h1>Based on Info You Provided</h1>
      <p>we found that your ducks is worth <span>{
        '$'+props.data.range[0]+
        ' - $'+ props.data.range[1]}M range</span> and there are {props.data.demand} buyers
        </p>
    </div>
    </div>
    <div className="half"></div>
  )
}

function TwoInput(props) {
  return (
    <form>
      <input name={'name'} type={'text'} />
      <textarea name={'name'} type={'text'} />
      <input type="submit" value={'Reveal Next Section'} onClick={props.submitCb} />
    </form>
  )
}

function TwoResponse(props) {

  return (
    <div className="info">
      <h1>We Received:</h1>
      <span>{props.data}</span>
    </div>
  )
}
