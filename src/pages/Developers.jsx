import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertCircle, Users, Code, Star, ArrowRight } from 'lucide-react'
import { supabase } from '../supabase/client'
import DeveloperCard from '../components/DeveloperCard'

export default function Developers() {
  const [developers, setDevelopers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch developers from Supabase
  useEffect(() => {
    fetchDevelopers()
  }, [])

  const fetchDevelopers = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      setDevelopers(data || [])
    } catch (err) {
      console.error('Error fetching developers:', err)
      setError('Failed to load developers. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Simple Header */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Talented</span> Developers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our skilled professionals who bring ideas to life with cutting-edge technology and creative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developers Grid - Now the main focus */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <AnimatePresence mode="wait">
            {/* Loading State */}
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center py-20"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 text-lg">Loading our amazing developers...</p>
                </div>
              </motion.div>
            )}

            {/* Error State */}
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex justify-center items-center py-20"
              >
                <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
                  <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
                  <p className="text-red-600 mb-6">{error}</p>
                  <motion.button
                    onClick={fetchDevelopers}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
                  >
                    Try Again
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Developers Grid */}
            {!loading && !error && developers.length > 0 && (
              <motion.div
                key="developers"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {developers.map((developer, index) => (
                  <motion.div
                    key={developer.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <DeveloperCard developer={developer} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Empty State */}
            {!loading && !error && developers.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md mx-auto">
                  <Users className="text-gray-400 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">No developers found</h3>
                  <p className="text-gray-600 mb-6">
                    We're currently building our team of amazing developers.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      {!loading && !error && developers.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-screen-xl mx-auto px-4 md:px-10">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Star className="text-white" size={36} />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Work with Our <span className="gradient-text">Dream Team</span>?
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our developers are ready to transform your ideas into reality. 
                  Get in touch to discuss your project and find the perfect match for your needs.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 inline-flex items-center gap-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Project Today
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
} 