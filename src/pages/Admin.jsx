import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, Plus, Edit, Trash2, Save, X, Upload, Mail, Phone, MapPin, 
  Globe, Github, Linkedin, Star, Calendar, LogOut, Shield, AlertCircle,
  Check, Eye, EyeOff
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

export default function Admin() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  
  const [developers, setDevelopers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingDeveloper, setEditingDeveloper] = useState(null)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    location: 'Mogadishu, Somalia',
    bio: '',
    skills: '',
    photo_url: '',
    github_url: '',
    linkedin_url: '',
    portfolio_url: '',
    availability_status: 'available',
    experience_years: 0,
    hourly_rate: 0,
    projects_completed: 0,
    rating: 5.0
  })
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  // Fetch developers
  useEffect(() => {
    fetchDevelopers()
  }, [])

  const fetchDevelopers = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setDevelopers(data || [])
    } catch (err) {
      setError('Failed to load developers')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB')
        return
      }

      setSelectedImage(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target.result
        setImagePreview(result)
        setFormData(prev => ({
          ...prev,
          photo_url: result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview('')
    setFormData(prev => ({
      ...prev,
      photo_url: ''
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      // Process skills
      const skillsArray = formData.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0)

      const developerData = {
        ...formData,
        skills: skillsArray,
        experience_years: parseInt(formData.experience_years) || 0,
        hourly_rate: parseInt(formData.hourly_rate) || 0,
        projects_completed: parseInt(formData.projects_completed) || 0,
        rating: parseFloat(formData.rating) || 5.0
      }

      if (editingDeveloper) {
        // Update existing developer
        const { error } = await supabase
          .from('developers')
          .update(developerData)
          .eq('id', editingDeveloper.id)

        if (error) throw error
        setSuccess('Developer updated successfully!')
      } else {
        // Create new developer
        const { error } = await supabase
          .from('developers')
          .insert([developerData])

        if (error) throw error
        setSuccess('Developer added successfully!')
      }

      // Reset form and refresh data
      resetForm()
      fetchDevelopers()
    } catch (err) {
      setError(err.message || 'Failed to save developer')
      console.error(err)
    }
  }

  const handleEdit = (developer) => {
    setEditingDeveloper(developer)
    setFormData({
      ...developer,
      skills: developer.skills ? developer.skills.join(', ') : ''
    })
    // Set image preview if editing existing developer with photo
    if (developer.photo_url) {
      setImagePreview(developer.photo_url)
    }
    setShowForm(true)
  }

  const handleDelete = async (developerId) => {
    if (!confirm('Are you sure you want to delete this developer?')) return

    try {
      const { error } = await supabase
        .from('developers')
        .delete()
        .eq('id', developerId)

      if (error) throw error
      setSuccess('Developer deleted successfully!')
      fetchDevelopers()
    } catch (err) {
      setError('Failed to delete developer')
      console.error(err)
    }
  }

  const resetForm = () => {
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      location: 'Mogadishu, Somalia',
      bio: '',
      skills: '',
      photo_url: '',
      github_url: '',
      linkedin_url: '',
      portfolio_url: '',
      availability_status: 'available',
      experience_years: 0,
      hourly_rate: 0,
      projects_completed: 0,
      rating: 5.0
    })
    setSelectedImage(null)
    setImagePreview('')
    setEditingDeveloper(null)
    setShowForm(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">TechSomali Admin</h1>
                <p className="text-sm text-gray-500">Developer Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.full_name}</span>
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <LogOut size={16} />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-8">
        {/* Success/Error Messages */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6 flex items-center gap-3"
            >
              <Check className="text-green-500" size={20} />
              <span className="text-green-700">{success}</span>
              <button onClick={() => setSuccess('')} className="ml-auto text-green-500 hover:text-green-700">
                <X size={16} />
              </button>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center gap-3"
            >
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-700">{error}</span>
              <button onClick={() => setError('')} className="ml-auto text-red-500 hover:text-red-700">
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Developers Management</h2>
            <p className="text-gray-600">Manage your team of developers</p>
          </div>
          
          <motion.button
            onClick={() => setShowForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            <Plus size={20} />
            Add Developer
          </motion.button>
        </div>

        {/* Developers Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            />
          </div>
        ) : developers.length === 0 ? (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-gray-400" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Developers Yet</h3>
              <p className="text-gray-600 mb-8">
                Start building your team by adding your first developer profile.
              </p>
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <Plus size={20} />
                Add Your First Developer
              </motion.button>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <motion.div
                key={developer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Developer Image */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {developer.photo_url ? (
                    <img
                      src={developer.photo_url}
                      alt={developer.full_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="text-gray-400" size={48} />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      developer.availability_status === 'available' 
                        ? 'bg-green-100 text-green-700' 
                        : developer.availability_status === 'busy'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {developer.availability_status}
                    </span>
                  </div>
                </div>

                {/* Developer Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{developer.full_name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {developer.email && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Mail size={14} />
                        <span>{developer.email}</span>
                      </div>
                    )}
                    
                    {developer.location && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin size={14} />
                        <span>{developer.location}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={14} />
                      <span>{developer.experience_years} years experience</span>
                    </div>
                  </div>

                  {/* Skills */}
                  {developer.skills && developer.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {developer.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {developer.skills.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{developer.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => handleEdit(developer)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Edit size={16} />
                      Edit
                    </motion.button>
                    
                    <motion.button
                      onClick={() => handleDelete(developer.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add/Edit Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {editingDeveloper ? 'Edit Developer' : 'Add New Developer'}
                    </h3>
                    <button
                      onClick={resetForm}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Basic Info */}
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Profile Photo
                        </label>
                        <div className="space-y-4">
                          {/* Image Preview */}
                          {imagePreview && (
                            <div className="relative inline-block">
                              <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-xl border-2 border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={removeImage}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          )}
                          
                          {/* File Input */}
                          <div>
                            <input
                              type="file"
                              id="photo-upload"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                            <label
                              htmlFor="photo-upload"
                              className="inline-flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium"
                            >
                              <Upload size={20} />
                              {imagePreview ? 'Change Photo' : 'Upload Photo'}
                            </label>
                          </div>
                          
                          <p className="text-sm text-gray-500">
                            Supported formats: JPG, PNG, GIF. Max size: 5MB
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Availability Status
                        </label>
                        <select
                          name="availability_status"
                          value={formData.availability_status}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        >
                          <option value="available">Available</option>
                          <option value="busy">Busy</option>
                          <option value="unavailable">Unavailable</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Experience (Years)
                        </label>
                        <input
                          type="number"
                          name="experience_years"
                          value={formData.experience_years}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Hourly Rate ($)
                        </label>
                        <input
                          type="number"
                          name="hourly_rate"
                          value={formData.hourly_rate}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          GitHub URL
                        </label>
                        <input
                          type="url"
                          name="github_url"
                          value={formData.github_url}
                          onChange={handleInputChange}
                          placeholder="https://github.com/username"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          LinkedIn URL
                        </label>
                        <input
                          type="url"
                          name="linkedin_url"
                          value={formData.linkedin_url}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Portfolio URL
                        </label>
                        <input
                          type="url"
                          name="portfolio_url"
                          value={formData.portfolio_url}
                          onChange={handleInputChange}
                          placeholder="https://portfolio.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Projects Completed
                        </label>
                        <input
                          type="number"
                          name="projects_completed"
                          value={formData.projects_completed}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Tell us about this developer..."
                      />
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Skills (comma separated)
                      </label>
                      <input
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="React, Node.js, Python, MongoDB"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-6">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Save size={20} />
                        {editingDeveloper ? 'Update Developer' : 'Add Developer'}
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        onClick={resetForm}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 