import React from 'react'
import '../scss/card.scss'
import { useContext, useState } from 'react'
import { Context } from '../Context/StateContext'

function Card() {
  const { countries, setCountries } = useContext(Context)
  const { searchInput, setSearchInput } = useContext(Context)
  const [searchParams] = useState(['capital', 'name'])

  return (
    <>
      {countries.map((country, numericCode) => {
        const { name, population, region, capital, flag } = country

        return (
          <div
            className='col-12 col-md-6 col-xl-3 d-flex justify-content-center'
            key={numericCode}
          >
            <div className='card shadow  mb-5 bg-white rounded'>
              <div className='card-image'>
                <img className='image' src={flag} alt='flag' />
              </div>
              <div className='card-body text-left'>
                <h5 className='card-title mb-4'>{name}</h5>
                <p className='card-text'>
                  <span>Population:</span> {population}
                </p>
                <p className='card-text'>
                  <span>Region:</span> {region}
                </p>
                <p className='card-text'>
                  <span>Capital:</span> {capital}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {countries &&
        countries.filter((item) => {
          return searchParams.some((newItem) => {
            return newItem.toLowerCase()
          })
        })}
    </>
  )
}

export default Card
