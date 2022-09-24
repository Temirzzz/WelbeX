import { useEffect, useState } from "react";
import TableHead from "./components/TableHead/TableHead";
import TableBody from "./components/TableBody/TableBody";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loading";
import axios from "axios";
import "./app.scss";
import SelectFilter from "./components/SelectFilter/SelectFilter";

function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSortField, setSelectedSortField] = useState("");
  const [selectedSortValue, setSelectedSortValue] = useState("");
  const [input, setInput] = useState("");
  // Константы для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = tableData.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/table`).then((res) => {
      setTableData(res.data.rows);
      setIsLoading(false);
    });
  }, []);

  const sortTableDataField = (sort) => {
    setSelectedSortField(sort);
  };

  const sortTableDataValue = (sort) => {
    setSelectedSortValue(sort);
  };

  // Филбтрация данных с селекта. Получилось коряво, 60% времени на это потратил, но как есть)
  // Так же не понял, как можно сделать фильтрацию "большеб меньше для колонки Название", поэтому сделал для следующей колонки "Колличесво", получяется
  // залдублтровал этот пункт
  const filteredlValue = currentItem.filter((item) => {
    if (selectedSortField === "name") {
      if (selectedSortValue === "equal") {
        if (!input.length) return currentItem;
        return item.name === input;
      }
      if (selectedSortValue === "contains") {
        return item.name.toString().toLowerCase().includes(input);
      }
      if (selectedSortValue === "more") {
        if (!input.length) return currentItem;
        return item.quantity < input;
      }
      if (selectedSortValue === "less") {
        if (!input.length) return currentItem;
        return item.quantity > input;
      }
    }
    if (selectedSortField === "quantity") {
      if (selectedSortValue === "equal") {
        if (!input.length) return currentItem;
        return item.quantity === Number(input);
      }
      if (selectedSortValue === "contains") {
        return item.quantity.toString().toLowerCase().includes(input);
      }
      if (selectedSortValue === "more") {
        if (!input.length) return currentItem;
        return item.quantity < input;
      }
      if (selectedSortValue === "less") {
        if (!input.length) return currentItem;
        return item.quantity > input;
      }
    }
    if (selectedSortField === "distance") {
      if (selectedSortValue === "equal") {
        if (!input.length) return currentItem;
        return item.distance === Number(input);
      }
      if (selectedSortValue === "contains") {
        return item.quantity.toString().toLowerCase().includes(input);
      }
      if (selectedSortValue === "more") {
        if (!input.length) return currentItem;
        return item.distance < input;
      }
      if (selectedSortValue === "less") {
        if (!input.length) return currentItem;
        return item.distance > input;
      }
    }
    return currentItem;
  });

  return (
    <div className="app">
      <div className="app__content">
        <SelectFilter
          selectedSortField={selectedSortField}
          selectedSortValue={selectedSortValue}
          sortTableDataField={sortTableDataField}
          sortTableDataValue={sortTableDataValue}
          setInput={setInput}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <table className="table table-bordered">
            <TableHead />
            <TableBody filteredlValue={filteredlValue} />
          </table>
        )}
      </div>
      <Pagination
        itemPerPage={itemPerPage}
        tableData={tableData.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
