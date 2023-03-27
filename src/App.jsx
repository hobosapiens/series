import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage"
import SeriesPage from "@/pages/SeriesPage"
import AboutPage from "@/pages/AboutPage"
import NotFound from "@/pages/NotFound"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series/:query" element={<SeriesPage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
