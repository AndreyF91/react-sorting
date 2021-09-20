import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <h3>
        Выбран пользователь:{" "}
        {!props.itemData.firstName
          ? ""
          : props.itemData.firstName + " " + props.itemData.lastName}
      </h3>
      <textarea
        className="card__textarea"
        value={props.itemData.description}
      ></textarea>
      <p>
        <b>Город:</b> {props.itemData.city}
      </p>
      <p>
        <b>Адрес:</b> {props.itemData.streetAddress}
      </p>
      <p>
        <b>Email:</b> {props.itemData.email}
      </p>
    </div>
  );
};

export default Card;
