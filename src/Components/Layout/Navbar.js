import React from 'react'
import '../../scss/navbar.scss'

function Navbar() {
  return (
    <header>
      <div className='container-fluid navigation shadow-sm bg-white rounded'>
        <div className='row nav-row'>
          <div className='col-12 col-xxl-11 navigation-col mx-auto d-flex justify-content-between align-items-center'>
            <div className='col-6'>
              <a className='where' href='/'>
                Where in the world?
              </a>
            </div>
            <div className='col-5 d-flex justify-content-end'>
              <h2 className='dark' id='Dark-mode'>
                Dark Mode
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
