import React from 'react'
import ReactDOM from 'react-dom'

function Header(props) {
  return (
    <header onClick={props.clickCb}>
      {props.children}
    </header>
  )
}

export {Header}
