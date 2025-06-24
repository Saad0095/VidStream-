import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useState } from 'react'
import SearchPage from './pages/SearchPage'
import Category from './pages/Category'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')

  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen'>
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Routes>
        <Route path='/' element={<Home selectedCategory={selectedCategory}/>} />
        <Route path='/:category' element={<Category />}/>
        <Route path='/search/:searchTerm' element={<SearchPage />}/>
        {/* <Route path='/video/:videoId' element={<VideoDetail />} */}
      </Routes>
    </div>
  )
}

export default App
