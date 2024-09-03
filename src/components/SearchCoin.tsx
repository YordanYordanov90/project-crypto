// components/SearchCoin.tsx
import React from "react";

interface SearchCoinProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchCoin: React.FC<SearchCoinProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={onSearchChange}
      placeholder="Search for a coin..."
      className="border p-2 rounded shadow-md w-full"
    />
  );
};

export default SearchCoin;
