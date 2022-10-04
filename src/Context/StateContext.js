import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchParam] = useState(['capital', 'name'])
  const [filteredCountryRegion, setFilteredCountryRegion] = useState('All')

  /*  Country data endpoint  */
  const baseURL =
    'https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA'

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data)
    })
  }, [])

  // function so search countries by letters in capital and name

  function searchAndFilter(countries) {
    return countries.filter((country) => {
      /* Checking if the filteredCountryRegion is equal to 'All' and if it is, it returns the country.
      If it is not, it checks if the country.region is not equal to the filteredCountryRegion. If it
      is not, it returns the countries.some. */
      if (filteredCountryRegion === 'All') {
        return country
      } else if (country.region !== filteredCountryRegion) {
        return countries.some((newCountries) => {
          return (
            newCountries
              .toString()
              .toLowerCase()
              .indexOf(filteredCountryRegion.toLowerCase()) > -1
          )
        })
      } else {
        return searchParam.some((newCountry) => {
          return (
            /* Converting the item to a string, then to lowercase, then it is checking if the searchInput
         is in the item. */
            country[newCountry]
              .toString()
              .toLowerCase()
              .indexOf(searchInput.toLowerCase()) > -1
          )
        })
      }
    })
  }

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchInput,
        setSearchInput,
        searchAndFilter,
        filteredCountryRegion,
        setFilteredCountryRegion,
      }}
    >
      {children}
    </Context.Provider>
  )
}
