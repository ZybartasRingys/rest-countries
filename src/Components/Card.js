import React from 'react'
import '../scss/card.scss'
import { useContext } from 'react'
import { Context } from '../Context/StateContext'
import { Link } from 'react-router-dom'

function Card() {
  const { countries, noCountries } = useContext(Context)

  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          {!noCountries ? (
            countries.map(
              ({ name, numericCode, flags, population, region, capital }) => (
                <div
                  className='col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center'
                  key={numericCode}
                >
                  <Link className='link' to={`/${name}`}>
                    <div className='card country-card shadow  mb-5  rounded'>
                      <div className='card-image'>
                        <img className='image' src={flags.png} alt='flag' />
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
            <div className='no-countries-container '>
              <h3 className='no-countries'>No countries found...</h3>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
