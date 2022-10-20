import React from 'react'
import '../scss/card.scss'
import { useContext } from 'react'
import { Context } from '../Context/StateContext'
import { Link } from 'react-router-dom'

function Card() {
  const { countries, noCountries } = useContext(Context)

  return (
    <>
      <div className='container d-flex'>
        <div className='row d-flex justify-content-center'>
          {!noCountries ? (
            countries.map(
              ({ name, numericCode, flag, population, region, capital }) => (
                <div
                  className='col-12 col-md-6 col-xl-3 d-flex justify-content-center '
                  key={numericCode}
                >
                  <Link className='link' to={`/${name}`}>
                    <div className='card shadow  mb-5 bg-white rounded'>
                      <div className='card-image'>
                        <img className='image' src={flag} alt='flag' />
                      </div>
                      <div className='card-body text-left mb-3'>
                        <h5 className='card-title mb-4 mt-2'>{name}</h5>
                        <p className='card-text'>
                          <span className='bold'>Population:</span> {population}
                        </p>
                        <p className='card-text'>
                          <span className='bold'>Region:</span> {region}
                        </p>
                        <p className='card-text'>
                          <span className='bold'>Capital:</span> {capital}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )
          ) : (
            <p>No countries found...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
