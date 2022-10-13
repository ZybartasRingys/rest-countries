import React from "react";
import "../scss/card.scss";
import { useContext } from "react";
import { Context } from "../Context/StateContext";
import { Link } from "react-router-dom";

function Card() {
  const { countries, searchInput, filtered } = useContext(Context);

  return (
    <>
      {searchInput.length > 0 ? (
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center ">
          {filtered.map(
            ({ name, numericCode, flag, population, region, capital }) => (
              <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center ">
                <Link className="link" key={numericCode} to={`/${name}`}>
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
                </Link>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center ">
          {countries.map(
            ({ name, numericCode, flag, population, region, capital }) => (
              <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center ">
                <Link className="link" key={numericCode} to={`/${name}`}>
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
                </Link>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default Card;
