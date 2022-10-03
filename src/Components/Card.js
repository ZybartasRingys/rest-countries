import React from "react";
import "../scss/card.scss";
import { useContext, useState } from "react";
import { Context } from "../Context/StateContext";

function Card() {
  const { countries, setCountries, searchInput, setSearchInput, searchParam } =
    useContext(Context);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          /* Converting the item to a string, then to lowercase, then it is checking if the searchInput
         is in the item. */
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchInput.toLowerCase()) > -1
        );
      });
    });
  }

  return search(countries).map((country) => {
    const { name, population, region, capital, flag, numericCode } = country;

    return (
      <div
        className="col-12 col-md-6 col-xl-3 d-flex justify-content-center"
        key={numericCode}
      >
        <div className="card shadow  mb-5 bg-white rounded">
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
  });
}

export default Card;
