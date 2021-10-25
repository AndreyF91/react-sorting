import { useState } from "react";
import "./SearchForm.scss";
import searchIcon from "../../assets/search-icon.png"

const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="searchform">
      <input
        onChange={valueChangeHandler}
        className="searchform__input"
        type="text"
        value={inputValue}
        placeholder="Поиск"
      />
      <button onClick={() => {props.onSearch(inputValue)}} className="searchform__btn" type="button" ><img src={searchIcon} alt="Искать" /> </button>
    </form>
  );
};

export default SearchForm;
