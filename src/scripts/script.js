import {Switcher} from '../components/switcher.js'

function main(data) {
  const container = document.querySelector('#switcher')
  ReactDOM.render(<Switcher className="slider" visibleItems={3} items={data.items} />, container)
}

export {main}
