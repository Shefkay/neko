import Header from "./components/layout/Header"
import LandingPage from "./pages/LandingPage"
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="">
        <LandingPage />
      </main>
    </div>
  )
}

export default App
