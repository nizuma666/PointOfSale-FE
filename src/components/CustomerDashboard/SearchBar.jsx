/* eslint-disable no-unused-vars */
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white p-1 rounded-md">
      <input
        type="text"
        placeholder="Search Customer"
        className="rounded-l py-2 px-4 w-full outline-none text-sm"
      />
      <button className="bg-brand text-white text-sm rounded-md p-2">Search</button>
    </div>
  );
};

export default SearchBar;
