import { Route, Routes } from "react-router-dom"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import MovieOne from "./pages/MovieOne"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <div className="font-body">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieOne />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
