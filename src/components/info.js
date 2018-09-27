function Info(props) {
  return (
    <div className="info">
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  )
}

export {Info}
