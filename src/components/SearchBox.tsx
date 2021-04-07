import React from "react";

interface ISearchBoxProps {
  onSearchChange: Function;
}
const SearchBox = ({ onSearchChange }: ISearchBoxProps): JSX.Element => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        name="searchfield"
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
          onSearchChange(event)
        }
      />
    </div>
  );
};

export default SearchBox;
