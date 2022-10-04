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
      {
        console.log(country.region)
      }
      // jai select
      if (country.region === filteredCountryRegion) {
        return country
      } else if (filteredCountryRegion === 'All') {
        return country
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

  // function to filter country by selected region

  // function filterCountries(countries) {
  //   return countries.filter((country) => {
  //     if (country.region === filteredCountry) {
  //       return searchParam.some((newCountry) => {
  //         return (
  //           country[newCountry]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(filteredCountry.toLowerCase()) > -1
  //         )
  //       })
  //     } else if (filteredCountry === 'All') {
  //       return searchParam.some((newCountry) => {
  //         return (
  //           country[newCountry]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(filteredCountry.toLowerCase()) > -1
  //         )
  //       })
  //     }
  //   })
  // }

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
