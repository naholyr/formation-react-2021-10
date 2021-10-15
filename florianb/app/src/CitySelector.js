const CitySelector = ({ onSelectCity }) => {
  const handleChange = (e) => onSelectCity(e.target.value);
  return (
    <select onChange={handleChange}>
      <option value="">Sélectionnez une ville</option>
      <option value="Le Mans">Le Mans</option>
      <option value="Limoges">Limoges</option>
      <option value="Paris">Paris</option>
      <option value="Villefranche-sur-Saône">Villefranche-sur-Saône</option>
    </select>
  );
};

export default CitySelector;
