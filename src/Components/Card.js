import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Card() {
  const [countries, setCountries] = useState([])
  const baseURL =
    'https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA'

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
          return (
            <div className='country-div' key={index}>
              <h2>{country.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Card
