import './App.scss'
import SearchAndFilter from './Components/Layout/SearchAndFilter'
import Card from './Components/Card'

function App() {
  return (
    <div className='App container-fluid'>
      <div className='row d-flex flex-column align-items-center'>
        <div className='col-12'>
          <SearchAndFilter />
        </div>
        <div className='row d-flex justify-content-center mt-5'>
          <div className='col-12 col-xl-12 '>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
