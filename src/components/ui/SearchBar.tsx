"use client";

import { useProductFilter } from "@/store/useProductFilter";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useProductFilter();
  return (
    <div className="relative max-w-[400px] w-full">
      <input
        type="text"
        placeholder="Search (e.g. Mens Casual, Women's)"
        className="pl-10 pr-4 py-2 border-2 border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FiSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600" />
    </div>
  );
};

export default SearchBar;
