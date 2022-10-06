import React from 'react'
import { useParams } from 'react-router-dom'

function CardDetail() {
  const { id } = useParams()
  return <div>CardDetail - {id}</div>
}

export default CardDetail
