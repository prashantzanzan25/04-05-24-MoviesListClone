import React from "react";

function GenreFilter({ genres }) {
  const handlefilter = (value) => {
    console.log("Filtering by", value);
  };

  return (
    <div className="filter-wrapper">
      <h2>Filter by Genre</h2>
      <div className="filter-buttons">
        {genres.map((item, index) => {
          return (
            <button
              onClick={() => {
                handlefilter(item);
              }}
              className="btn"
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default GenreFilter;
