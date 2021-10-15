const CitySelector = ({ onChangeEvent }) => {
  const handleChangeUpdateCity = (e) => {
    const newCity = e.target.value;
    onChangeEvent(newCity);
  };

  return (
    <select onChange={handleChangeUpdateCity}>
      <option value="">Sélectionnez une ville</option>
      <option value="Bourges">Bourges</option>
      <option value="Limoges">Limoges</option>
      <option value="Orléans">Orléans</option>
      <option value="Dunkerque">Dunkerque</option>
    </select>
  );
};

export default CitySelector;
