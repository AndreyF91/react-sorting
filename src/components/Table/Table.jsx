import { useEffect, useState } from "react";
import Row from "./Row/Row";
import "./Table.scss";

const Table = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://www.filltext.com?rows=32&id={index}&firstName={firstName}&lastName={lastName}&streetAddress={streetAddress}&city={city}")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Адрес</th>
          <th>Город</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => (
          <Row key={i.id} id={i.id} fName={i.firstName} lName={i.lastName} address={i.streetAddress} city={i.city} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
