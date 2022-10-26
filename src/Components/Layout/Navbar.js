import React from 'react'
import '../../scss/navbar.scss'
import { FaMoon } from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../../Context/StateContext'

function Navbar() {
  const { toggleTheme } = useContext(Context)
  return (
    <header>
      <div className='container-fluid navigation border shadow-sm'>
        <div className='row'>
          <div className='col-12 navigation-col d-flex justify-content-center align-items-center'>
            <div className='col-11 d-flex justify-content-between '>
              <a className='where' href='/'>
                Where in the world?
              </a>
              <div className='dark-mode d-flex '>
                <span className='moon'>
                  <FaMoon className='moon-icon' />
                </span>
                <h2 className='dark' onClick={toggleTheme}>
                  Dark Mode
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
