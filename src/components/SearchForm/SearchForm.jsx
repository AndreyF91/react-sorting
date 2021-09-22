import { useState } from "react";
import "./SearchForm.scss";

const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="searchForm">
      <input
        onChange={valueChangeHandler}
        className="searchForm__input"
        type="text"
        value={inputValue}
      />
      <button onClick={() => {props.onSearch(inputValue)}} className="searchForm__input" type="button" >Искать</button>
    </form>
  );
};

export default SearchForm;
