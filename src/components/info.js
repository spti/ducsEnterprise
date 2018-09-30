import React from 'react'
import ReactDOM from 'react-dom'

function Info(props) {
  return (
    <div className="info">
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  )
}

function Infos(props) {
  const items = props.items.map((item, i) => {
    return (<Info heading={item.h} key={i.toString()}>{item.text}</Info>)
  })

  return (
    <div className="infos">
      {items}
    </div>
  )
}

export {Info, Infos}
