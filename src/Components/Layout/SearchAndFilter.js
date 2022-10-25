import React from 'react'
import '../../scss/searchAndFilter.scss'
import { FaSearch } from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../../Context/StateContext'

function SearchAndFilter() {
  const { inputRef, searchCountries, filteredByRegion, regionRef } =
    useContext(Context)

  return (
    <div className='container-fluid mt-3'>
      <div className='row d-flex flex-column flex-xl-row justify-content-center '>
        <div className='col-12 col-xl-11 mt-5 d-flex flex-column flex-xxl-row justify-content-between'>
          <div className='col-12 col-md-6 col-xl-4 d-flex border search-inputs'>
            <div className='icon'>
              <FaSearch className='search-icon' />
            </div>
            <input
              type='text'
              className='form-control search-input'
              placeholder='Search for a country...'
              ref={inputRef}
              onChange={(e) => searchCountries(e.target.value)}
            ></input>
          </div>

          <div className='col-6 col-md-4 col-xl-2 float-left   '>
            <select
              ref={regionRef}
              onChange={(e) => filteredByRegion(e.target.value)}
              className='form-select'
              aria-label='countries regions'
            >
              <option value='All'>Filter By Region</option>
              <option value='Africa'>Africa</option>
              <option value='Americas'>America</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAndFilter
