import { motion } from 'framer-motion'
import { Github, MessageCircle, Mail, MapPin, Phone, Heart, ArrowUp, Code, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Developers', href: '/developers' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'DevOps',
    'Consulting'
  ]

  const contactInfo = [
    { icon: MapPin, text: 'Mogadishu, Somalia' },
    { icon: Phone, text: '+252 123 456 789' },
    { icon: Mail, text: 'info@devagencysomalia.com' }
  ]

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/252123456789',
      label: 'WhatsApp',
      color: 'hover:text-green-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:info@devagencysomalia.com',
      label: 'Email',
      color: 'hover:text-blue-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-950 text-gray-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="text-white" size={24} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <span className="gradient-text">DevAgency</span> Somalia
                </h3>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Connecting talented Somali developers with global opportunities. 
              We're building the future of technology, one project at a time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: Users, number: '50+', label: 'Developers' },
                { icon: Star, number: '100+', label: 'Projects' },
                { icon: Heart, number: '25+', label: 'Clients' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-gray-900/50 rounded-xl border border-gray-800"
                >
                  <stat.icon className="text-blue-400 mx-auto mb-1" size={20} />
                  <div className="text-white font-bold">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-800 hover:shadow-lg border border-gray-800 hover:border-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 mt-8">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800">
                    <info.icon className="text-blue-400" size={16} />
                  </div>
                  <span className="text-gray-400 text-sm">{info.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-800/30"
            >
              <h5 className="text-white font-semibold mb-2">Ready to start?</h5>
              <p className="text-gray-400 text-sm mb-3">
                Let's discuss your project and bring your ideas to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
              >
                Get Started
                <ArrowUp className="rotate-45" size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; 2024 DevAgency Somalia. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="text-red-400" size={14} /> in Somalia
              </span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
} 