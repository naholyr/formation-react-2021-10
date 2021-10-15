const headerStyle = {
  padding: "20px",
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid black",
};

const Header = ({ onChangePage }) => {
  const onClickLink = (page) => {
    onChangePage(page);
  };

  return (
    <header className="header" style={headerStyle}>
      <h2>Header</h2>
      <a
        onClick={() => {
          onClickLink("home");
        }}
        href="#home"
      >
        Home
      </a>
      <a
        onClick={() => {
          onClickLink("counters");
        }}
        href="#counters"
      >
        Counters (42 TODO)
      </a>
      <a
        onClick={() => {
          onClickLink("weather");
        }}
        href="#weather"
      >
        Weather
      </a>
    </header>
  );
};

export default Header;
