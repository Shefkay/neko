import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Essential from "./pages/Essential"
import LandingPage from "./pages/LandingPage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/essential" element={<Essential />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
