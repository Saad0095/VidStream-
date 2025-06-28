import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const Category = lazy(() => import('./pages/Category'))
const VideoDetail = lazy(() => import('./components/VideoDetail'))

function App() {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen'>
      <Navbar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/search/:searchTerm' element={<SearchPage />} />
          <Route path='/video/:videoId' element={<VideoDetail />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
