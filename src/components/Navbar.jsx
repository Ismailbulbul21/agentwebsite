import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Zap, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    // Set current path
    setCurrentPath(window.location.pathname)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on homepage
  const isHomePage = currentPath === '/'

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Developers', href: '/developers' },
    { name: 'Contact', href: '/contact' }
  ]

  // Determine navbar styling based on page and scroll state
  const getNavbarStyle = () => {
    if (isHomePage) {
      return scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-white/10 backdrop-blur-md border-b border-white/20'
    } else {
      return scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
        : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/30'
    }
  }

  // Determine text colors based on page and scroll state
  const getTextColors = () => {
    if (isHomePage && !scrolled) {
      return {
        navLinks: 'text-white/90 hover:text-white',
        tagline: 'text-white/80',
        underline: 'bg-gradient-to-r from-white to-cyan-400'
      }
    } else {
      return {
        navLinks: 'text-gray-700 hover:text-blue-600',
        tagline: 'text-gray-500',
        underline: 'bg-gradient-to-r from-blue-600 to-purple-600'
      }
    }
  }

  const textColors = getTextColors()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarStyle()}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.location.href = '/'}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Code2 className="text-white" size={20} />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-white" size={8} />
              </motion.div>
            </div>
            
            <div className="flex flex-col">
              <motion.h1 
                className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent ${
                  isHomePage && !scrolled ? 'drop-shadow-lg' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                TechSomali
              </motion.h1>
              <span className={`text-xs font-medium tracking-wide ${textColors.tagline}`}>
                Innovation Hub
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`group relative px-4 py-2 font-medium transition-colors duration-300 ${textColors.navLinks}`}
              >
                {item.name}
                <motion.div
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ${textColors.underline}`}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/admin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 border border-gray-300 hover:border-blue-500 ${textColors.navLinks}`}
            >
              Admin
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => window.location.href = '/contact'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Zap size={16} />
                Nala Soo Xiriir
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl font-medium transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                href="/admin"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl font-medium transition-all duration-300 border border-gray-200"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Admin
              </motion.a>
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg flex items-center justify-center gap-2"
                onClick={() => {
                  setIsOpen(false)
                  window.location.href = '/contact'
                }}
              >
                <Zap size={18} />
                Nala Soo Xiriir
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 