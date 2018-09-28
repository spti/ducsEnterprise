function Header(props) {
  return (
    <header onClick={props.clickCb}>
      {props.children}
    </header>
  )
}

export {Header}
