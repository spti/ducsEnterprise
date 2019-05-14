import React from 'react'
import ReactDOM from 'react-dom'

import {Root} from './demo-components.js'

function run() {
  const container = document.querySelector('main')
  // ReactDOM.render(<App pages={[{id: 'home', sections: sectionsHome}]}/>, container)
  ReactDOM.render(<Root />, container)
}

window.addEventListener('load', run)
