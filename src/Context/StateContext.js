import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [sCountry, setSCountry] = useState("");
  const [searchParams] = useState(["capital", "name"]);

  {
    console.log(sCountry);
  }

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
      value={{ countries, setCountries, sCountry, setSCountry }}
    >
      {children}
    </Context.Provider>
  );
};
