const CitySelector = ({ onChange }) => (
  <select onChange={onChange} defaultValue="Massy">
    <option value="">Sélectionnez une ville</option>
    <option value="Le Mans">Le Mans</option>
    <option value="Limoges">Limoges</option>
    <option value="Massy">Massy</option>
    <option value="Paris">Paris</option>
    <option value="Villefranche-sur-Saône">Villefranche-sur-Saône</option>
  </select>
);

export default CitySelector;
