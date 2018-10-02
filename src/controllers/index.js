import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './app.js'

import {home} from '../pages/home.js'
// import {Contact} from '../pages/contact.js'

function main() {
  const container = document.querySelector('main')
  ReactDOM.render(
    <App pages={[
      home
    ]}>
    </App>, container)
}

export {main}
