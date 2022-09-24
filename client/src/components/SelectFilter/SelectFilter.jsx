import React from "react";
import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import CustomInput from "../../UI/CustomInput/CustomInput";
import CustomImg from "../../UI/CustomImage/CustomImage";
import "./SelectFilter.scss";
import imgSrc from "../../assets/images/search_glass.png";

const SelectFilter = ({
  selectedSortField,
  sortTableDataField,
  setInput,
  selectedSortValue,
  sortTableDataValue,
}) => {
  return (
    <div className="select-filter">
      <CustomSelect
        className="select-filter__select"
        defaultValue="Поле"
        value={selectedSortField}
        onChange={sortTableDataField}
        options={[
          { value: "name", name: "Название" },
          { value: "quantity", name: "Количество" },
          { value: "distance", name: "Расстояние" },
        ]}
      />
      <CustomSelect
        className="select-filter__select"
        defaultValue="Сортировка"
        value={selectedSortValue}
        onChange={sortTableDataValue}
        options={[
          { value: "equal", name: "Равно" },
          { value: "contains", name: "Содержит" },
          { value: "more", name: "Больше" },
          { value: "less", name: "Меньше" },
        ]}
      />
      <div className="select-filter__search">
        <CustomInput
          className="form-control"
          placeholder="Значение"
          onChange={(event) => setInput(event.target.value)}
        />
        <CustomImg
          sposition="absolute"
          stop="50%"
          stranslateY="-50%"
          sright="12px"
          swidth="15px"
          src={imgSrc}
          alt="search"
        />
      </div>
    </div>
  );
};

export default SelectFilter;
