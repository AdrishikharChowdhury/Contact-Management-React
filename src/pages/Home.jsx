import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contacts from "../components/Table/Contacts";
import Filter from "../components/Filter";

const Home = ({setId}) => {
  const [filterType, setFilterType] = useState("name"); // Default filter type
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="w-full flex flex-col min-h-screen p-10">
      <Navbar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <Contacts setId={setId} filterType={filterType} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
