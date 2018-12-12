import React from 'react'
import ReactDOM from 'react-dom'

// import {App} from './app.js'

// import {sectionsHome} from '../pages/home.js'
// import {Test} from '../pages/test.js'
import {Test} from '../components/test-slot04-01.js'

function test() {
  const container = document.querySelector('main')
  // ReactDOM.render(<App pages={[{id: 'home', sections: sectionsHome}]}/>, container)
  ReactDOM.render(<Test />, container)
}

export {test}
