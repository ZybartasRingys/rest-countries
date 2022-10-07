
import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context/StateContext'

function CardDetail(numericCode) {
  const { id } = useParams()

  {
    console.log(numericCode)
  }

  return (
    <>
      <div>{id}</div>
    </>
  )

import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/StateContext";

function CardDetail() {
  const { countries, setCountries } = useContext(Context);
  const { id } = useParams();
  return countries.map((country) => {
    const { flag, name, population, numericCode, topLevelDomain } = country;
    if (id === country.name) {
      return (
        <div className="" key={numericCode}>
          <h1>{topLevelDomain}</h1>
          <h2>
            <img src={flag} alt={name} />
          </h2>
        </div>
      );
    }
  });

}

export default CardDetail
