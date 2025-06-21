import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')

  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen'>
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Routes>
        <Route path='/' element={<Home selectedCategory={selectedCategory}/>} />
      </Routes>
    </div>
  )
}

export default App
