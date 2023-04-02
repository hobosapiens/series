import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage"
import SeriesPage from "@/pages/SeriesPage"
import AboutPage from "@/pages/AboutPage"
import NotFound from "@/pages/NotFound"

const App = () => {
  return (
    <section className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/series/" element={<HomePage />} />
          <Route path="/series/:query" element={<SeriesPage />} />
          <Route path="/series/about/:id" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
