import {Switcher} from '../../dist/components/switcher.js'

const items = [
  {
    innerText: '01',
    sectionId: 'sectionOne'
  },
  {
    innerText: '02',
    sectionId: 'sectionTwo'
  }
]

const container = document.querySelector('#switcher')
ReactDOM.render(<Switcher className="slider" items={items} />, container)
