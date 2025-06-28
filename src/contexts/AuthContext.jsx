import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../supabase/client'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('admin_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      setLoading(true)
      
      // Authentication check with database stored password
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Authentication failed. Please try again.')
      }

      if (!data) {
        throw new Error('Invalid email or password')
      }

      // Check password against stored password
      if (password !== data.password_hash) {
        throw new Error('Invalid email or password')
      }

      const userData = {
        id: data.id,
        email: data.email,
        full_name: data.full_name,
        role: data.role
      }

      setUser(userData)
      localStorage.setItem('admin_user', JSON.stringify(userData))
      
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('admin_user')
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 