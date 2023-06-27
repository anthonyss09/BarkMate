import { setFilter } from "../features/users/UsersSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function FiltersDropDown({ filterOptions, handleClick }) {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");
  const [filterId, setFilterId] = useState("");

  const options = filterOptions.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilterValue(Number(value[0]));
    setFilterId(id);
  };

  const handleButtonClick = () => {
    dispatch(setFilter({ filterId, filterValue }));
    handleClick();
  };

  return (
    <section className="filters-menu-main">
      {" "}
      <div className="filters-menu">
        <p>Distance</p>
        <select
          name="filters"
          id="distance"
          className="filter-option"
          onChange={handleChange}
        >
          <option value="select distance">Select distance</option>
          {options}
        </select>
      </div>
      <button className="filters-btn" onClick={handleButtonClick}>
        Apply filters
      </button>
    </section>
  );
}
