import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import MovieDetailed from './pages/MovieDetailed'
import ErrorPage from './pages/ErrorPage'

function App() {

  const location = useLocation();

  /**
   * Returns true if the current page is movies detailed page
   * @returns {boolean}
   */
  const isDetailedView = (): boolean => {
    return /^\/movies\/[0-9]+$/.test(location.pathname);
  }

  /** @const {boolean} detailedView If true, the footer will be hidden and the header will have other appearence */
  const [detailedView, setDetailedView] = useState<boolean>(isDetailedView);

  /** Updates the value of detailedView state */
  useEffect(() => {
    setDetailedView(isDetailedView);
  }, [location]);

  // --------------------------------------------

  return (
    <div className="bg-shade text-mid text-sm font-body">
      {!detailedView && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movies/:id" element={<MovieDetailed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer show={!detailedView} />
    </div>
  )
}

export default App
