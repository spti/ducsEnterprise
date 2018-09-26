import {Switcher} from '../../dist/components/switcher.js'

const items = [
  {
    val: '01',
    id: 'sectionOne'
  },
  {
    val: '02',
    id: 'sectionTwo'
  },
  {
    val: '03',
    id: 'sectionThree'
  }
]

const container = document.querySelector('#switcher')
ReactDOM.render(<Switcher className="slider" visibleItems={3} items={items} />, container)
