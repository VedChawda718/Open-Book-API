import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerm
        )}&AIzaSyCD2brJoaH7LN2WypdfmvWk-P3KqCR5yeA&maxResults=30`
      )
      .then((response) => {
        onSearch(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data from Google Books API:", error);
      });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
};

export default SearchBar;
