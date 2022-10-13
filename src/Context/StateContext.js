import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [filteredCountryRegion, setFilteredCountryRegion] = useState("All");

  /*  Country data endpoint  */
  const baseURL = "https://restcountries.com/v2/all";

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  /**
   * It takes a searchValue as an argument, sets the searchInput state to the searchValue, and then
   * filters the countries array based on the searchValue.
   *
   * If the searchValue is empty, it sets the filtered state to the countries array.
   *
   * If the searchValue is not empty, it filters the countries array based on the searchValue.
   *
   * The filteredCountries variable is an array of objects that match the searchValue.
   *
   * The filtered state is set to the filteredCountries array.
   *
   * The filtered state is used to render the countries in the table.
   *
   * The searchCountries function is called when the user types in the search input.
   *
   * The searchCountries function is called in the onChange event handler of the search input.
   *
   * The onChange event handler is in the Search component.
   *
   * The Search component is in the
   * @param searchValue - the value of the input field
   */
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchInput,
        setSearchInput,
        searchCountries,
        filtered,
        setFiltered,
        filteredCountryRegion,
        setFilteredCountryRegion,
      }}
    >
      {children}
    </Context.Provider>
  );
};
