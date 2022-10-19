import React, { createContext, useState, useEffect, useRef } from 'react'
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filteredCountryRegion, setFilteredCountryRegion] = useState('All')
  const inputRef = useRef()
  const regionRef = useRef()

  /*  Country data endpoint  */
  const baseURL = 'https://restcountries.com/v2/all'

  const noCountries = countries.status || countries.message

  /* A hook that is used to fetch data. */
  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data)
    })
  }

  const searchCountries = () => {
    const searchValue = inputRef.current.value
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        )
        const data = await response.json()
        setCountries(data)
      }
      try {
        fetchSearch()
      } catch (error) {
        console.log(error)
      }
    } else {
      fetchCountries()
    }
  }

  const filteredByRegion = () => {
    const selectValue = regionRef.current.value
    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/region/${selectValue}`
        )
        const data = await response.json()

        if (selectValue === 'All') {
          try {
            fetchCountries()
          } catch (error) {
            console.log(error)
          }
          return
        }

        setCountries(data)
      }

      try {
        fetchSelect()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        searchCountries,
        filtered,
        setFiltered,
        filteredCountryRegion,
        setFilteredCountryRegion,
        filteredByRegion,
        regionRef,
        inputRef,
        noCountries,
      }}
    >
      {children}
    </Context.Provider>
  )
}
