import "./tableHead.scss";

const TableHead = () => {
  return (
    <thead className="table__head thead-dark">
      <tr>
        <th className="table__head-item_first">Дата </th>
        <th className="table__head-item_second">Название </th>
        <th className="table__head-item_third">Колличество </th>
        <th className="table__head-item_third">Расстояние </th>
      </tr>
    </thead>
  );
};

export default TableHead;
