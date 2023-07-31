"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface Search {
  placeholder: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ placeholder, setFilter }: Search) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <form className="w-[97%] sm:w-[96%] lg:w-[97%]">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-0 pointer-events-none">
          <div className="w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]">
            <svg
              className="fill-current text-[#10141E] dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
            </svg>
          </div>
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-[100%] font-light px-4 py-2 pl-14 sm:pr-[100px] text-[16px] sm:text-[24px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/0 hover:border-[#5A698F]/100 focus:border-[#5A698F]/100 outline-none caret-[#FC4747]"
          placeholder={placeholder}
          onChange={handleSearch}
          value={search}
        />
      </div>
    </form>
  );
};

export default SearchBar;
