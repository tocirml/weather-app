const CitySearch = ({ value, changeHandler }) => {
  return (
    <div className="city-search">
      <div className="input-wrapper">
        <label htmlFor="city-search-input">City ID: </label>
        <input
          type="search"
          name="city-search-input"
          id="city-search-input"
          className="city-search-input"
          placeholder="Enter your City ID"
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
  );
};

export default CitySearch;
