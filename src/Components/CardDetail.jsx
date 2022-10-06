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
}

export default CardDetail
