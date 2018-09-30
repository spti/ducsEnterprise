import React from 'react'
import ReactDOM from 'react-dom'

function NavLink(props) {
  return (
    <a href={props.url}><span>{props.text}</span></a>
  )
}

export {NavLink}
