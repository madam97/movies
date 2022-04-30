import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import MovieDetailed from './pages/MovieDetailed'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className="bg-shade text-mid text-sm font-body">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movies/:id" element={<MovieDetailed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
