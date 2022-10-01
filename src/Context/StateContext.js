import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  /*  Country data endpoint  */
  const baseURL =
    "https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA";

  const getCountries = () => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  };

  getCountries();

  return (
    <Context.Provider value={{ countries, setCountries }}>
      {children}
    </Context.Provider>
  );
};
