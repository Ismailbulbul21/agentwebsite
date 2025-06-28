import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, Star, Eye, X, Mail, Phone, Globe, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function DeveloperCard({ developer }) {
  const [showModal, setShowModal] = useState(false)

  const getAvailabilityColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'busy':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'unavailable':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  // Social media links
  const socialLinks = [
    {
      icon: Github,
      url: developer.github_url,
      label: 'GitHub',
      color: 'hover:text-gray-700'
    },
    {
      icon: Linkedin,
      url: developer.linkedin_url,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Globe,
      url: developer.portfolio_url,
      label: 'Portfolio',
      color: 'hover:text-green-600'
    },
    {
      icon: Mail,
      url: developer.email ? `mailto:${developer.email}` : null,
      label: 'Email',
      color: 'hover:text-red-600'
    }
  ].filter(link => link.url) // Only show links that exist

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 relative"
        onClick={() => setShowModal(true)}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-0.5">
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>

        <div className="relative z-10">
          {/* Bigger Image */}
          <div className="relative h-80 overflow-hidden rounded-t-2xl">
            <img
              src={developer.photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face'}
              alt={developer.full_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay with availability status */}
            <div className="absolute top-3 right-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getAvailabilityColor(developer.availability_status)}`}>
                {developer.availability_status || 'Available'}
              </span>
            </div>
          </div>

          {/* Content with reduced padding */}
          <div className="p-4">
            {/* Name and Location */}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                {developer.full_name}
              </h3>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin size={14} />
                <span className="text-sm">{developer.location || 'Mogadishu, Somalia'}</span>
              </div>
            </div>

            {/* Description */}
            {developer.bio && (
              <div className="mb-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {developer.bio.length > 100 
                    ? `${developer.bio.substring(0, 100)}...` 
                    : developer.bio
                  }
                </p>
              </div>
            )}

            {/* Skills */}
            {developer.skills && developer.skills.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {developer.skills.slice(0, 3).map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium border border-blue-200 hover:border-blue-300 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {developer.skills.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                      +{developer.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Social Media Links */}
            {socialLinks.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Connect</h4>
                <div className="flex gap-2">
                  {socialLinks.slice(0, 4).map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:bg-gray-200`}
                      title={social.label}
                    >
                      <social.icon size={14} />
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* View Profile Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Eye size={16} />
              View Profile
              <motion.div
                className="group-hover/btn:translate-x-1 transition-transform duration-200"
              >
                →
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-t-3xl">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={developer.photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'}
                      alt={developer.full_name}
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-white/30"
                    />
                    <div className="text-white text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-2">{developer.full_name}</h2>
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <MapPin size={16} />
                        <span>{developer.location || 'Mogadishu, Somalia'}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Calendar size={16} />
                        <span>{developer.experience_years || 0} years experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Bio */}
                {developer.bio && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">About</h3>
                    <p className="text-gray-600 leading-relaxed">{developer.bio}</p>
                  </div>
                )}

                {/* Skills */}
                {developer.skills && developer.skills.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {developer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full font-medium border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Connect & Portfolio</h3>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl transition-colors duration-200 text-gray-700 ${social.color}`}
                        >
                          <social.icon size={20} />
                          <span className="font-medium">{social.label}</span>
                          <ExternalLink size={16} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail size={20} />
                    Hire This Developer
                  </motion.button>
                  
                  {developer.portfolio_url && (
                    <motion.a
                      href={developer.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="sm:w-auto bg-gray-100 text-gray-700 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Globe size={20} />
                      View Portfolio
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 