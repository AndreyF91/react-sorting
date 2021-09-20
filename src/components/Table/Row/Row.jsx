const Row = (props) => {
    return (
        <tr className="row" onClick={props.onClickRow.bind(null, props.item)}>
            <td className="row__cell">{props.id}</td>
            <td className="row__cell">{props.fName}</td>
            <td className="row__cell">{props.lName}</td>
            <td className="row__cell">{props.address}</td>
            <td className="row__cell">{props.city}</td>
        </tr>
    )
}

export default Row;