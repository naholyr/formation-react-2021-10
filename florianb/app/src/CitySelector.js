const CitySelector = ({ onChange }) => {
  const handleSelectChange = (event) => {
    const city = event.target.value;
    onChange(city);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Sélectionnez une ville</option>
      <option value="Le Mans">Le Mans</option>
      <option value="Limoges">Limoges</option>
      <option value="Paris">Paris</option>
      <option value="La Rochelle">La Rochelle</option>
      <option value="Villefranche-sur-Saône">Villefranche-sur-Saône</option>
    </select>
  );
};

export default CitySelector;
