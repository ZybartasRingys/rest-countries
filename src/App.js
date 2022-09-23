import './App.scss'
import Layout from './Components/Layout/Layout'
import SearchAndFilter from './Components/Layout/SearchAndFilter'

function App() {
  return (
    <Layout>
      <div className='App'>
        <SearchAndFilter />
      </div>
    </Layout>
  )
}

export default App
