"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortingOptions = ["Most Relevant", "Newest", "Highest Rated", "Lowest Price"];

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(sortingOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end items-center bg-white rounded-lg shadow-sm p-2">
      {/* Sort By Label */}
      <span className="text-gray-700 text-sm font-medium mr-2">Sort By:</span>

      {/* Dropdown Menu */}
      <div className="relative">
        <button
          className="flex items-center bg-blue-100 px-3 py-2 rounded-lg shadow-sm text-gray-700 text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
        </button>

        {isOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
            {sortingOptions.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
