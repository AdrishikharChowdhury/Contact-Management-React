import { ListFilter } from "lucide-react";
import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [isMenu, setisMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("name"); // Default filter

  const handleMenu = () => {
    setisMenu(!isMenu);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="relative">
      <button
        onClick={handleMenu}
        type="button"
        className="border-2 py-3 px-3 w-30 rounded-2xl border-gray-700 shadow-lg flex justify-center items-center gap-4 bg-chetwode-blue-50 text-gray-800 text-lg active:scale-90 duration-100 transition-all cursor-pointer"
      >
        <ListFilter className="text-gray-500" />
        Filter
      </button>
      {isMenu && (
        <ul className="p-5 absolute top-full left-0 mt-2 bg-chetwode-blue-900 text-white font-semibold rounded-lg shadow-lg z-10 text-lg">
          <li className="px-4 py-2 hover:bg-chetwode-blue-800 cursor-pointer flex items-center gap-2">
            <input type="radio" name="filter" id="filter-name" value="name" checked={selectedFilter === "name"} onChange={handleFilterChange} className="form-radio text-chetwode-blue-500" />
            <label htmlFor="filter-name">Name</label>
          </li>
          <li className="px-4 py-2 hover:bg-chetwode-blue-800 cursor-pointer flex items-center gap-2">
            <input type="radio" name="filter" id="filter-phone" value="phone" checked={selectedFilter === "phone"} onChange={handleFilterChange} className="form-radio text-chetwode-blue-500" />
            <label htmlFor="filter-phone">Phone</label>
          </li>
          <li className="px-4 py-2 hover:bg-chetwode-blue-800 cursor-pointer flex items-center gap-2">
            <input type="radio" name="filter" id="filter-email" value="email" checked={selectedFilter === "email"} onChange={handleFilterChange} className="form-radio text-chetwode-blue-500" />
            <label htmlFor="filter-email">Email</label>
          </li>
          <li className="px-4 py-2 hover:bg-chetwode-blue-800 cursor-pointer flex items-center gap-2">
            <input type="radio" name="filter" id="filter-company" value="company" checked={selectedFilter === "company"} onChange={handleFilterChange} className="form-radio text-chetwode-blue-500" />
            <label htmlFor="filter-company">Company</label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Filter;
