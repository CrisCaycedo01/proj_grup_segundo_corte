import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Buscar comida..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;