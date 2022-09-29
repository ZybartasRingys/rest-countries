import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../scss/card.scss";

function Card() {
  const [countries, setCountries] = useState([]);
  const baseURL =
    "https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA";

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <>
      {countries.map((country, index) => {
        const { name, population, region, capital, flag } = country;
        return (
          <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
            <div className="card shadow  mb-5 bg-white rounded" key={index}>
              <div className="card-image">
                <img className="image" src={flag} alt="flag" />
              </div>
              <div className="card-body text-left">
                <h5 className="card-title mb-4">{name}</h5>
                <p className="card-text">
                  <span>Population:</span> {population}
                </p>
                <p className="card-text">
                  <span>Region:</span> {region}
                </p>
                <p className="card-text">
                  <span>Capital:</span> {capital}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
