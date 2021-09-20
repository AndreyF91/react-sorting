import { useState, useEffect } from "react";
import "./App.scss";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import _ from "lodash";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setStatus] = useState(false);
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    fetch(
      "http://www.filltext.com?rows=32&id={index}&firstName={firstName}&lastName={lastName}&streetAddress={streetAddress}&city={city}"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setStatus(true);
      });
  }, []);

  let onSort = (sortField) => {
    const cloned = data.concat();
    sort === "asc" ? setSort("desc") : setSort("asc");
    const orderedData = _.orderBy(cloned, sortField, sort);
    setData(orderedData);
  };

  return (
    <div className="wrapper">
      <div className="app__inner">
        {isLoaded ? <Table data={data} onSort={onSort} /> : <Loader />}
        <div className="info"></div>
      </div>
    </div>
  );
};

export default App;
