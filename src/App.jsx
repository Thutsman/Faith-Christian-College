import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-poppins bg-cream-100">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
