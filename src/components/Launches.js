import React, { useContext } from "react";
import { LaunchesContext } from "../contexts/LaunchesContext";
import { FilterContext } from "../contexts/FilterContext";
import {
  LaunchesContainer,
  LaunchesResults,
  LaunchesFilter,
} from "../styles/Launches.styled";
import Card from "./Card";

function Launches() {
  const { launchData, isLoading, error } = useContext(LaunchesContext);
  const { yearFilter, successFilter, sortOrder, updateFilters } =
    useContext(FilterContext);

  const filteredLaunches = launchData
    .filter((item) => {
      const year = new Date(item.date_local).getFullYear();
      return yearFilter ? year === parseInt(yearFilter) : true;
    })
    .filter((item) => {
      switch (successFilter) {
        case "true":
          return item.success === true;
        case "false":
          return item.success === false;
        case "upcoming":
          return item.success === null;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.date_local);
      const dateB = new Date(b.date_local);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const handleYearFilterChange = (e) => {
    updateFilters({ year: e.target.value });
  };

  const handleSuccessFilterChange = (e) => {
    updateFilters({ success: e.target.value });
  };

  const handleSortOrderChange = (e) => {
    updateFilters({ order: e.target.value });
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <LaunchesContainer>
      <LaunchesFilter>
        {/* Year Filter */}
        <div>
          <label htmlFor="yearFilter">Year:</label>
          <select
            id="yearFilter"
            value={yearFilter}
            onChange={handleYearFilterChange}
          >
            <option value="">All Years</option>
            {[
              ...new Set(
                launchData.map((item) =>
                  new Date(item.date_local).getFullYear()
                )
              ),
            ]
              .sort()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
        {/* Success Filter */}
        <div>
          <label htmlFor="successFilter">Launch Status:</label>
          <select
            id="successFilter"
            value={successFilter}
            onChange={handleSuccessFilterChange}
          >
            <option value="All">All Launches</option>
            <option value="true">Success</option>
            <option value="false">Failed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        {/* Sort Order Dropdown */}
        <div>
          <label htmlFor="sortOrder">Sort by Date:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </div>
      </LaunchesFilter>
      <LaunchesResults>
        {filteredLaunches.length > 0 ? (
          filteredLaunches.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1>No results found!</h1>
        )}
      </LaunchesResults>
    </LaunchesContainer>
  );
}

export default Launches;
