import React from 'react'
import '../../scss/navbar.scss'
import { BsMoon } from 'react-icons/bs'
import { useContext } from 'react'
import { Context } from '../../Context/StateContext'

function Navbar() {
  const { darkMode } = useContext(Context)
  return (
    <header>
      <div className='container-fluid navigation shadow-sm bg-white rounded'>
        <div className='row nav-row'>
          <div className='col-12 col-xxl-11 navigation-col  mx-auto d-flex justify-content-between align-items-center'>
            <div className='col-6'>
              <a className='where' href='/'>
                Where in the world?
              </a>
            </div>
            <div className='col-5 d-flex justify-content-end dark-mode'>
              <span className='moon'>
                <BsMoon size='xs' />
              </span>
              <h2 className='dark' onClick={darkMode}>
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
