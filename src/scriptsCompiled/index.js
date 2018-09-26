import { Switcher } from '../../dist/components/switcher.js';

var items = [{
  innerText: '01',
  sectionId: 'sectionOne'
}, {
  innerText: '02',
  sectionId: 'sectionTwo'
}, {
  innerText: '03',
  sectionId: 'sectionThree'
}];

var container = document.querySelector('#switcher');
ReactDOM.render(React.createElement(Switcher, { className: 'slider', visibleItems: 3, items: items }), container);