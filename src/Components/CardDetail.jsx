import React from 'react'
import '../scss/card.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context/StateContext'

function CardDetail() {
  const { countries } = useContext(Context)
  const { id } = useParams()
  return countries.map((country) => {
    const { flag, name, numericCode, topLevelDomain } = country
    if (id === name) {
      return (
        <div className='container border' key={numericCode}>
          <div className='row'>
            <div className='col-12 border'>
              <img className='detail-card-image' src={flag} alt={name} />
            </div>
            <div className='col'></div>
          </div>
          <h1>{topLevelDomain}</h1>
        </div>
      )
    }
  })
}

export default CardDetail
