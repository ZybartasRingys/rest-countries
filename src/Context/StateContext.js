import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchParam] = useState(["capital", "name"]);

  /*  Country data endpoint  */
  const baseURL =
    "https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchInput,
        setSearchInput,
        searchParam,
      }}
    >
      {children}
    </Context.Provider>
  );
};
