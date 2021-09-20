import Row from "./Row/Row";
import "./Table.scss";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, 'id')}>ID</th>
          <th onClick={props.onSort.bind(null, 'firstName')}>Имя</th>
          <th onClick={props.onSort.bind(null, 'lastName')}>Фамилия</th>
          <th onClick={props.onSort.bind(null, 'streetAddress')}>Адрес</th>
          <th onClick={props.onSort.bind(null, 'city')}>Город</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((i) => (
          <Row
            key={i.id}
            id={i.id}
            fName={i.firstName}
            lName={i.lastName}
            address={i.streetAddress}
            city={i.city}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
