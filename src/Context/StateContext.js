import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchParam] = useState(['capital', 'name'])

  /*  Country data endpoint  */
  const baseURL =
    'https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA'

  /* A hook that is used to fetch data. */
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data)
    })
  }, [])

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          /* Converting the item to a string, then to lowercase, then it is checking if the searchInput
         is in the item. */
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchInput.toLowerCase()) > -1
        )
      })
    })
  }

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchInput,
        setSearchInput,
        search,
      }}
    >
      {children}
    </Context.Provider>
  )
}
