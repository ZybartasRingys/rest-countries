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
        flags,
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
          <div
            className='container-fluid detail-card-container'
            key={numericCode}
          >
            <div className='row d-flex  justify-content-center'>
              {/* Main Col */}
              <div className='col-12 col-md-10 col-lg-12 col-xl-11 d-flex flex-column flex-md-column flex-xl-row justify-content-center  align-items-center '>
                {/* Back link and flag image */}
                <div className='col-11 col-md-11 col-lg-10 col-xl-6 d-flex flex-column mt-4'>
                  <div className='col-3 col-md-3 back-link mb-5'>
                    <Link className='back-link-link' to='/'>
                      <AiOutlineArrowLeft /> Back
                    </Link>
                  </div>

                  <div className='col-12 col-md-12 col-lg-11 col-xl-11 col-xxl-10  rounded d-flex justify-content-center align-items-center  mb-5'>
                    <img
                      className='detail-card-image border'
                      src={flags.png}
                      alt={name}
                    />
                  </div>
                </div>

                {/* Back button and image end */}

                {/* Country card text  */}
                <div className='col-11 col-md-11 col-lg-10 col-xl-5 col-xxl-5  d-flex flex-column detail-card-text '>
                  <div className='col-12 col-md-9 col-lg-8 d-flex flex-column flex-md-row align-items-md-center align-items-xl-center '>
                    <div className='col-8 col-md-8'>
                      <h2 className='mb-3 country-name '>{name}</h2>
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
                    <div className='col-12 col-md-6 col-xxl-6  top-level'>
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
                  <div className='col-6 col-md-12 mt-5  d-flex flex-column flex-xl-row'>
                    <div className='col-12 col-md-12 p-1 col-xl-4 '>
                      <h2 className='borders-heading'>Border Co-untries:</h2>
                    </div>

                    {/* Borders container */}

                    <div className='row d-flex mb-5 p-1 '>
                      <div className='col-12 col-md-12 col-xl-12 d-flex'>
                        {borders &&
                          borders.map((borderCountry, index) => {
                            return (
                              <div
                                className='col-5 col-md-2 col-xl-7 border mb-2 link-container d-flex  justify-content-center align-items-center  border-link'
                                key={index}
                              >
                                <Link
                                  className='border-link-text'
                                  to={`/borders/${borderCountry}`}
                                >
                                  {borderCountry}
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                    {/* Borders container */}
                  </div>
                </div>
                {/* Country card text  end */}
              </div>
            </div>
          </div>
        )
      }
      return null
    })
  )
}

export default BorderCountry
