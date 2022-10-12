import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchParam] = useState(['capital', 'name'])
  const [filteredCountryRegion, setFilteredCountryRegion] = useState('All')

  /*  Country data endpoint  */
  const baseURL = 'https://restcountries.com/v2/all'

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data)
    })
  }, [])

  // function so search countries by letters in capital and name

  let Filter = (countries) => {
    return (
      countries &&
      countries.filter((country) => {
        if (country.region === filteredCountryRegion) {
          return country
        } else if (filteredCountryRegion === 'All') {
          return country
        } else if (searchInput === '') {
          return country
        } else {
          return country.name
            .toLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        }
      })
    )
  }

  let Search = (countries) => {
    return (
      countries &&
      countries.filter((country) => {
        if (searchInput === '') {
          return country
        } else {
        }
      })
    )
  }

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchInput,
        setSearchInput,
        Filter,
        Search,
        filteredCountryRegion,
        setFilteredCountryRegion,
      }}
    >
      {children}
    </Context.Provider>
  )
}
