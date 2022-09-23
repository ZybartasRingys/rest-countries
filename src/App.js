import './App.scss'
import Layout from './Components/Layout/Layout'
import SearchAndFilter from './Components/Layout/SearchAndFilter'
import Card from './Components/Card'

function App() {
  return (
    <Layout>
      <div className='App container'>
        <div className='row border d-flex flex-column  align-items-center'>
          <div className='col-12'>
            <SearchAndFilter />
          </div>
          <div className='col-8 col-lg-12     mt-5'>
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
