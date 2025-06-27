import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Category from './pages/Category'
import VideoDetail from './components/VideoDetail'

function App() {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:category' element={<Category />}/>
        <Route path='/search/:searchTerm' element={<SearchPage />}/>
        <Route path='/video/:videoId' element={<VideoDetail />}/>
      </Routes>
    </div>
  )
}

export default App
