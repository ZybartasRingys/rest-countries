import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/StateContext'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function BorderCountry() {
  const { countries } = useContext(Context)
  const { id } = useParams()

  return (
    countries &&
    countries?.map((country) => {
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
        alpha3Code,
        languages,
      } = country
      if (id === alpha3Code) {
        return (
          <div className='container border' key={numericCode}>
            <div className='row d-flex  justify-content-center'>
              <div className='col-12 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <div className='col-11 col-md-6 mt-4'>
                  <div className='col-3 back-link mb-5 mt-3'>
                    <Link to='/'>
                      <AiOutlineArrowLeft /> Back
                    </Link>
                  </div>
                  <div className='col-12 mb-5'>
                    <img className='detail-card-image' src={flag} alt={name} />
                  </div>
                </div>
                <div className='col-12 col-md-6 px-3'>
                  <div className='col-12 d-flex flex-column flex-md-row'>
                    <div className='col-8 col-md-6  '>
                      <h2 className='mb-4 '>{name}</h2>
                      <p>
                        <span className='bold'>Native name:</span>
                        {nativeName}
                      </p>
                      <p>
                        <span className='bold'>Population:</span>
                        {population}
                      </p>
                      <p>
                        <span className='bold'>Region:</span>
                        {region}
                      </p>
                      <p>
                        <span className='bold'>Sub region:</span>
                        {subregion}
                      </p>
                      <p>
                        <span className='bold'>Capital:</span>
                        {capital}
                      </p>
                    </div>
                    <div className='col-12 mt-4'>
                      <p>
                        <span className='bold'>Top Level Domain:</span>
                        {topLevelDomain}
                      </p>
                      <p>
                        <span className='bold'>Currencies:</span>
                        {currencies[0].code}
                      </p>
                      <div className='d-flex'>
                        <span className='bold'>Languages:</span>
                        {languages.map((language) => {
                          return <p key={language.id}>{language.name}</p>
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='col-12 mt-4'>
                    <div className='col-12'>
                      <h2 className='borders-heading'>Border Co-untries:</h2>
                    </div>
                    <div className='col-12  mb-5 mt-3 d-flex justify-content-between'>
                      {borders &&
                        borders.map((borderCountry) => {
                          return (
                            <div className='container' key={borderCountry}>
                              <div className='row d-flex'>
                                <div className='col-12 col-md-6 link-container d-flex justify-content-center align-items-center border border-link'>
                                  <Link to={`/borders/${borderCountry}`}>
                                    {borderCountry}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })
  )
}

export default BorderCountry
