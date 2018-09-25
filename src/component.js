/*
*/
// this is an element rather than a component (doesnt need to have it's state changed)
function sliderItemEl(sectionId, innerText, key) {
  return <div className="slider-item" data-sectionid={sectionId} key={key}>{innerText}</div>
}

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/
function SlideSwitcherItems(props) {
  const items = props.items.map((item, i) => {
    return sliderItemEl(item.sectionId, item.innerText, i)
  })

  return <div>{items}</div>
}

function SlideSwitcher(props) {
  return (
    <div>
      <SlideSwitcherItems className="slider-items" items={props.items} />
    </div>
  )
}

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
ReactDOM.render(<SlideSwitcher className="slider" items={items} />, container)
