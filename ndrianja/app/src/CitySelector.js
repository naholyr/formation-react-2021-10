const CitySelector = ({ callback, defaultCity }) => {
  const loadMeteo = (e) => {
    callback(e.target.value);
  };
  return (
    <select onChange={loadMeteo} defaultValue={defaultCity}>
      <option value="Le Mans">Le Mans</option>
      <option value="Limoges">Limoges</option>
      <option value="Paris">Paris</option>
      <option value="Villefranche-sur-Saône">Villefranche-sur-Saône</option>
    </select>
  );
};

export default CitySelector;
