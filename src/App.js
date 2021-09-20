import { useState, useEffect } from "react";
import "./App.scss";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import _ from "lodash";
import Card from "./components/Card/Card.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setStatus] = useState(false);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState();
  const [itemData, setItemData] = useState();

  useEffect(() => {
    fetch(
      "http://www.filltext.com?rows=32&id={index}&firstName={firstName}&lastName={lastName}&streetAddress={streetAddress}&city={city}&description={lorem|20}&email={email}"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setStatus(true);
      });
  }, []);

  let onSort = (onSortField) => {
    const cloned = data.concat();
    sort === "asc" ? setSort("desc") : setSort("asc");
    const orderedData = _.orderBy(cloned, sortField, sort);
    setData(orderedData);
    setSortField(onSortField);
  };

  let onClickRow = (item) => {
    setItemData(item);
  };

  return (
    <div className="wrapper">
      <div className="app__inner">
        {isLoaded ? (
          <Table
            data={data}
            onSort={onSort}
            sort={sort}
            sortField={sortField}
            onClickRow={onClickRow}
          />
        ) : (
          <Loader />
        )}
        <div className="info">
          {itemData ? <Card itemData={itemData}/> : null} 
        </div>
      </div>
    </div>
  );
};

export default App;
