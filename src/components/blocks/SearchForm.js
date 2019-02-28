import React from "react";

const SearchForm = ({ onInput, query }) => {
  return (
    <div>
      <form onInput={onInput} className="form">
        <input
          className="form-name"
          value={query}
          placeholder="Search here..."
        />
      </form>
    </div>
  );
};

export default SearchForm;
