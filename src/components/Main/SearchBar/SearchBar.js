import React from 'react';
import "./SearchBar.scss";

const SearchBar = () => {
    return (
      <form className="search" action="search">
        <input type="search" placeholder="Search here for your service..." required/>
        <button type="submit">Search</button>
        </form>
      
  );
}

export default SearchBar;