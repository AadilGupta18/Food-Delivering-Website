// SearchDropdown.js
import React, { useContext, useState } from "react";
import "./SearchDropdown.css";
import { menu_list } from "../../assets/assets";
import { category_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const category1 = [];
const category2 = [];
menu_list.map((item) => {
  category1.push(item.menu_name);
});
category_list.map((item) => {
  category2.push(item.menu_name);
});

const SearchDropdown = ({ isVisible }) => {
  const { setCategory, setCategory2 } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    category1: false,
    category2: false,
  });

  const availableFilters = [
    ...(!selectedCategories.category1 ? category1 : []),
    ...(!selectedCategories.category2 ? category2 : []),
  ];

  const filteredSuggestions = availableFilters.filter((f) =>
    f.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSelectFilter = (filter) => {
    setSelectedFilters([...selectedFilters, filter]);
    setSearchQuery("");

    if (category1.includes(filter)) {
      setSelectedCategories((prev) => ({ ...prev, category1: true }));
      setCategory(filter);
    } else if (category2.includes(filter)) {
      setSelectedCategories((prev) => ({ ...prev, category2: true }));
      setCategory2(filter);
    }
  };

  return (
    <div className={`search-dropdown ${isVisible ? "visible" : ""}`}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search filters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && filteredSuggestions.length > 0 && (
          <ul className="suggestions">
            {filteredSuggestions.map((filter, index) => (
              <li key={index} onClick={() => handleSelectFilter(filter)}>
                {filter}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="selected-filters">
        {selectedFilters.map((filter, index) => (
          <span key={index} className="filter-tag">
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;

// SearchDropdown.css
