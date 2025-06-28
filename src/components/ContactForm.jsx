import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, X, Sparkles } from 'lucide-react'
import { supabase } from '../supabase/client'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      setError(null)

      // Insert contact message into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ])

      if (error) {
        throw error
      }

      // Success - reset form and show success message
      setFormData({ name: '', email: '', message: '' })
      setSuccess(true)

    } catch (err) {
      console.error('Error submitting contact form:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Form Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Send className="text-white" size={28} />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-300">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>
          
          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-6 p-4 bg-red-500/20 backdrop-blur-lg border border-red-300/30 rounded-2xl flex items-center"
              >
                <AlertCircle className="text-red-300 mr-3 flex-shrink-0" size={20} />
                <p className="text-red-100">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto text-red-300 hover:text-red-100 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <motion.label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name
                    ? 'top-2 text-xs text-blue-300 font-medium'
                    : 'top-4 text-base text-gray-400'
                }`}
                animate={{
                  y: focusedField === 'name' || formData.name ? -8 : 0,
                  scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                }}
              >
                Full Name
              </motion.label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pt-6 pb-3 px-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 ${
                  focusedField === 'name' ? 'bg-white/30' : ''
                }`}
                placeholder="Full Name"
                disabled={loading}
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <motion.label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email
                    ? 'top-2 text-xs text-blue-300 font-medium'
                    : 'top-4 text-base text-gray-400'
                }`}
                animate={{
                  y: focusedField === 'email' || formData.email ? -8 : 0,
                  scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                }}
              >
                Email Address
              </motion.label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pt-6 pb-3 px-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 ${
                  focusedField === 'email' ? 'bg-white/30' : ''
                }`}
                placeholder="Email Address"
                disabled={loading}
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <motion.label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' || formData.message
                    ? 'top-2 text-xs text-blue-300 font-medium'
                    : 'top-4 text-base text-gray-400'
                }`}
                animate={{
                  y: focusedField === 'message' || formData.message ? -8 : 0,
                  scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                }}
              >
                Your Message
              </motion.label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className={`w-full pt-6 pb-3 px-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 resize-none ${
                  focusedField === 'message' ? 'bg-white/30' : ''
                }`}
                placeholder="Your Message"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className={`group w-full flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                loading
                  ? 'bg-gray-500/50 cursor-not-allowed text-gray-300'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]'
              }`}
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full mr-3"
                  />
                  Sending Your Message...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                  <motion.div
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    ✨
                  </motion.div>
                </>
              )}
            </motion.button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-center text-gray-300 text-sm mb-4">
              Or reach out to us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@devagencysomalia.com"
                className="flex items-center justify-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-200"
              >
                📧 info@devagencysomalia.com
              </a>
              <a
                href="https://wa.me/252123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-green-300 hover:text-green-200 transition-colors duration-200"
              >
                📱 +252 123 456 789
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-md w-full p-8 text-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="text-white" size={36} />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-800 mb-4"
                >
                  Message Sent Successfully! 🎉
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-6 leading-relaxed"
                >
                  Thank you for reaching out! We've received your message and our team will get back to you within 24 hours.
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Sparkles size={18} />
                  Awesome!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 