import React from "react";
import "../scss/card.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/StateContext";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CardDetail() {
  const { countries } = useContext(Context);
  const { id } = useParams();
  return countries?.map((country) => {
    {
      console.log(country);
    }
    const {
      flag,
      name,
      numericCode,
      topLevelDomain,
      population,
      region,
      capital,
      nativeName,
      subregion,
      currencies,
      borders,
    } = country;
    if (id === name) {
      return (
        <div className="container border" key={numericCode}>
          <div className="row">
            <div className="col-12 border">
              <div className="col-12  mb-5 mt-3">
                <Link className="back-link" to="/">
                  <AiOutlineArrowLeft /> Back
                </Link>
              </div>
              <div className="col-12 mb-5">
                <img className="detail-card-image" src={flag} alt={name} />
              </div>
            </div>
            <div className="col-12 border">
              <div className="col">
                <div className="col-12">
                  <h2>{name}</h2>
                  <p>Native name:{nativeName}</p>
                  <p>Population:{population}</p>
                  <p>Region:{region}</p>
                  <p>Sub region:{subregion} </p>
                  <p>Capital:{capital} </p>
                </div>
                <div className="col-12">
                  <p>
                    <span className="bold">Top Level Domain:</span>
                    {topLevelDomain}
                  </p>
                  <p>
                    <span className="bold">
                      Currencies:{currencies[0].code}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="col">
                  <h2>border Co-untries:</h2>
                </div>
                <div className="col">
                  {borders.map((borderCountry) => {
                    return (
                      <Link
                        key={borderCountry}
                        to={`/borders/${borderCountry}`}
                      >
                        {borderCountry}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
}

export default CardDetail;
