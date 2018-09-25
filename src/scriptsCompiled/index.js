import { Switcher } from '../../dist/components/switcher.js';

var items = [{
  innerText: '01',
  sectionId: 'sectionOne'
}, {
  innerText: '02',
  sectionId: 'sectionTwo'
}];

var container = document.querySelector('#switcher');
ReactDOM.render(React.createElement(Switcher, { className: 'slider', items: items }), container);