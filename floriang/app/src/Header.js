const Header = ({ onClickEvent }) => {
  const handleClickMenu = (page) => {
    onClickEvent(page);
  };

  return (
    <header>
      <ul>
        <li onClick={() => handleClickMenu("weather")}>Weather</li>
        <li onClick={() => handleClickMenu("counter")}>Counter</li>
      </ul>
    </header>
  );
};

export default Header;
