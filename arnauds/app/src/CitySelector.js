const CitySelector = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option>Sélectionner une ville</option>
      <option value="Paris">Paris</option>
      <option value="Le Mans">Le Mans</option>
      <option value="Limoges">Limoges</option>
      <option value="Villefranche-sur-Saône">Villefranche-sur-Saône</option>
    </select>
  );
};

export default CitySelector;
