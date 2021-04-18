function Header(props) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;