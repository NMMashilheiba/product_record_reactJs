import React, { useState } from "react";

import "./style.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    // console.log(searchValue);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayClearButton = searchValue.length > 0;

  const filteredProduct = props.products.filter((product) => {
    return product.name.includes(searchValue);
  });

  return (
    <div className="container">
      Search Bar
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {shouldDisplayClearButton && (
        <button onClick={handleClearClick}>clear</button>
      )}
      <ul>
        {filteredProduct.map((product) => {
          return <li key={product}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
