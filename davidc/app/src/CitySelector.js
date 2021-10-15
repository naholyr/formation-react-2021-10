const CitySelector = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="none">Sélectionner une ville</option>
      <option value="Le Mans">Le Mans</option>
      <option value="Limoges">Limoges</option>
      <option value="Paris">Paris</option>
      <option value="Angers">Angers</option>
    </select>
  );
};
export default CitySelector;
