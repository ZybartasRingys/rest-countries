import './App.scss'
import SearchAndFilter from './Components/Layout/SearchAndFilter'
import Card from './Components/Card'

function App() {
  return (
    <div className='App container-fluid'>
      <div className='row  d-flex flex-column align-items-center'>
        <div className='col-12 '>
          <SearchAndFilter />
        </div>
        <div className='row mt-5'>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
