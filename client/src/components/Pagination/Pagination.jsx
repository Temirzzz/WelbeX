import { Link } from "react-router-dom";
import "./pagination.scss";

const Pagination = ({ itemPerPage, tableData, paginate }) => {
  const dataNumber = [];

  for (let i = 1; i <= Math.ceil(tableData / itemPerPage); i++) {
    dataNumber.push(i);
  }

  return (
    <ul className="pagination">
      {dataNumber &&
        dataNumber.map((number) => (
          <Link
            key={number}
            to={number}
            className="pagination__link"
            onClick={() => paginate(number)}
          >
            {number}
          </Link>
        ))}
    </ul>
  );
};

export default Pagination;
