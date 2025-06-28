import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Developers from './pages/Developers'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Admin from './pages/Admin'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Navbar />
                <main><Home /></main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <main><About /></main>
                <Footer />
              </>
            } />
            <Route path="/developers" element={
              <>
                <Navbar />
                <main><Developers /></main>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Navbar />
                <main><Contact /></main>
                <Footer />
              </>
            } />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}
