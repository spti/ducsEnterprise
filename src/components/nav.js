import React from 'react'
import ReactDOM from 'react-dom'

function Nav(props) {
  return (
    <nav className="links-container">
      {props.children}
    </nav>
  )
}

export {Nav}
