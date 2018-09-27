// import {Switcher} from '../components/switcher.js'
import {HomeWrapper} from '../components/home.js'

function main() {
  const container = document.querySelector('main')
  ReactDOM.render(<HomeWrapper />, container) // <Switcher className="slider" visibleItems={3} items={data.items} />
}

export {main}
