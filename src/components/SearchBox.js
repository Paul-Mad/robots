import React from "react";

const SearchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        name="searchfield"
        onChange={(e) => props.onSearchChange(e)}
      />
    </div>
  );
};

export default SearchBox;