import React from "react";
import { ListFilter, Plus, Search, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const Navbar = ({ onSearchChange,onFilterChange }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="w-full flex justify-between items-center px-5 relative">
      <h1 className="font-semibold text-6xl text-gray-700">Contacts</h1>
      <div className="flex justify-center items-center gap-10">
        <label className="flex items-center rounded-2xl border-2 px-4 border-gray-600 bg-chetwode-blue-50 shadow-lg active:scale-90 duration-100 transition-all">
          <button className="cursor-pointer w-full h-full">
            <Search className="text-gray-600" />
          </button>
          <input
            className="px-4 py-3 outline-0 placeholder:text-gray-600 text-lg"
            placeholder={`Search`}
            type="text"
            name="search"
            id=""
            onChange={handleInputChange}
          />
        </label>
        <Filter onFilterChange={onFilterChange} />
        <Link to="/create">
          <button
            type="add"
            className="py-4 px-5 rounded-2xl shadow-lg flex justify-center items-center gap-1 text-white bg-chetwode-blue-600 text-lg active:scale-90 duration-100 transition-all font-semibold cursor-pointer"
          >
            <CircleUserRound /> <Plus className="font-semibold" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
