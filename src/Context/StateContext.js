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
