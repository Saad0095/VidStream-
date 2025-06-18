import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './components/Feed'

function App() {

  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen'>
      <Navbar />
      <Routes>
        <Route element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App
