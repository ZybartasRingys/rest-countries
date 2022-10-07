import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import CardDetail from './Components/CardDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { ContextProvider } from './Context/StateContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/:id' element={<CardDetail />}></Route>

          <Route path='/' element={<App />}></Route>
          <Route path='/card/:id' element={<CardDetail />}></Route>
        </Routes>
      </Router>
    </ContextProvider>
  </React.StrictMode>
)
