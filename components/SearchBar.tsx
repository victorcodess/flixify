"use client";

import { useState, Dispatch, SetStateAction} from "react";
import searchIcon from "../public/assets/icon-search.svg";
import Image from "next/image";

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
          <Image
            src={searchIcon}
            alt="search"
            className="w-[24px] sm:w-[32px]"
          />
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-[100%] font-light px-4 py-2 pl-14 sm:pr-[100px] text-[16px] sm:text-[24px] text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/0 hover:border-[#5A698F]/100 focus:border-[#5A698F]/100 outline-none caret-[#FC4747]"
          placeholder={placeholder}
          onChange={handleSearch}
          value={search}
        />
      </div>
    </form>
  );
};

export default SearchBar;
