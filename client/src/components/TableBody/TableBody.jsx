import "./tableBody.scss";

const TableBody = ({ filteredlValue }) => {
  if (!filteredlValue) return <h4>Пока данныйх нет!</h4>;
  return (
    <tbody className="table__body">
      {filteredlValue &&
        filteredlValue.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.distance}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
