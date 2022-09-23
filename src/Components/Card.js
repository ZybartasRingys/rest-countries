import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../scss/card.scss'

function Card() {
  const [countries, setCountries] = useState([])
  const baseURL =
    'https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA'

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <div>
        {countries.map((country, index) => {
          const { title, population, region, capital, flag } = country
          return (
            <div className='card shadow  mb-5 bg-white rounded'>
              <div className='card-image'>
                <img className='flag' src={flag} alt='Flag'></img>
              </div>
              <div className='card-body'>
                <h5 className='card-title mb-4'>{title}</h5>
                <p className='card-text'>
                  <span>Population:</span> {population}
                </p>
                <p class='card-text'>
                  <span>Region:</span> {region}
                </p>
                <p class='card-text'>
                  <span>Capital:</span> {capital}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Card
