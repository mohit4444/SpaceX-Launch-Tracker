import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [yearFilter, setYearFilter] = useState("");
  const [successFilter, setSuccessFilter] = useState("true");
  const [sortOrder, setSortOrder] = useState("desc");

  const updateFilters = ({ year, success, order }) => {
    if (year !== undefined) setYearFilter(year);
    if (success !== undefined) setSuccessFilter(success);
    if (order !== undefined) setSortOrder(order);
  };

  return (
    <FilterContext.Provider
      value={{ yearFilter, successFilter, sortOrder, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
