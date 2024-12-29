import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input placeholder="Search..." className="search-input" />
      </div>
    </div>
  );
};

export default Search;
