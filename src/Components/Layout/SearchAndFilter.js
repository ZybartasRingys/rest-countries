import React from 'react'

function SearchAndFilter() {
  return (
    <div className='container border '>
      <div className='row d-flex flex-column'>
        {/* Search */}
        <div className='col'>
          <div class='input-group mb-3'>
            <div class='input-group-prepend'></div>
            <input
              type='text'
              class='form-control'
              placeholder='Search'
              aria-describedby='basic-addon1'
            ></input>
          </div>
        </div>

        {/* Filter */}
        <div class='col'>
          <div class='dropdown'>
            <button
              class='btn btn-secondary dropdown-toggle dropdown shadow-sm bg-white rounded'
              type='button'
              id='dropdownMenuButton1'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              data-bs-toggle='dropdown'
            >
              Filter by Region
            </button>
            <div
              class='dropdown-menu mt-2'
              aria-labelledby='dropdownMenuButton'
            >
              <a class='bg-transparent all' href='#'>
                All
              </a>
              <a class='dropdown-item bg-transparent' href='#'>
                Africa
              </a>
              <a class='dropdown-item bg-transparent' href='#'>
                America
              </a>
              <a class='dropdown-item bg-transparent' href='#'>
                Asia
              </a>
              <a class='dropdown-item bg-transparent' href='#'>
                Europe
              </a>
              <a class='dropdown-item bg-transparent' href='#'>
                Oceania
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAndFilter
