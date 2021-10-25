import Row from "./Row/Row";
import "./Table.scss";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import SearchForm from "../SearchForm/SearchForm";

const Table = (props) => {
  return (
    <div className="table__wrapper">
      <SearchForm onSearch={props.onSearch} />
      <table className="table">
        <thead>
          <tr>
            <th onClick={props.onSort.bind(null, "id")}>
              ID{" "}
              {props.sortField === "id" ? (
                props.sort === "desc" ? (
                  <img className="table__arrow" src={up} alt="asc" />
                ) : (
                  <img className="table__arrow" src={down} alt="desc" />
                )
              ) : null}
            </th>
            <th onClick={props.onSort.bind(null, "firstName")}>
              Имя
              {props.sortField === "firstName" ? (
                props.sort === "desc" ? (
                  <img className="table__arrow" src={up} alt="asc" />
                ) : (
                  <img className="table__arrow" src={down} alt="desc" />
                )
              ) : null}
            </th>
            <th onClick={props.onSort.bind(null, "lastName")}>
              Фамилия
              {props.sortField === "lastName" ? (
                props.sort === "desc" ? (
                  <img className="table__arrow" src={up} alt="asc" />
                ) : (
                  <img className="table__arrow" src={down} alt="desc" />
                )
              ) : null}
            </th>
            <th onClick={props.onSort.bind(null, "streetAddress")}>
              Адрес
              {props.sortField === "streetAddress" ? (
                props.sort === "desc" ? (
                  <img className="table__arrow" src={up} alt="asc" />
                ) : (
                  <img className="table__arrow" src={down} alt="desc" />
                )
              ) : null}
            </th>
            <th onClick={props.onSort.bind(null, "city")}>
              Город
              {props.sortField === "city" ? (
                props.sort === "desc" ? (
                  <img className="table__arrow" src={up} alt="asc" />
                ) : (
                  <img className="table__arrow" src={down} alt="desc" />
                )
              ) : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data ? props.data.map((i) => (
            <Row
              key={i.id}
              id={i.id}
              fName={i.firstName}
              lName={i.lastName}
              address={i.streetAddress}
              city={i.city}
              item={i}
              onClickRow={props.onClickRow}
            />
          )) : <div className="table__error">Ничего не найдено</div> }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
