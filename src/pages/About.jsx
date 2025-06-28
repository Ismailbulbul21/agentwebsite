import { motion } from 'framer-motion'
import { Target, Heart, Lightbulb, Users, Award, Globe, Zap, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from developer selection to project delivery.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and encourage creative problem-solving approaches.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We believe in giving back to our community and supporting the growth of Somalia\'s tech sector.',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We connect local talent with international opportunities, creating a bridge to the global market.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing market demands and emerging technologies.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We build lasting relationships based on transparency, reliability, and mutual respect.',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ]

  const stats = [
    { number: '50+', label: 'Talented Developers', icon: Users },
    { number: '100+', label: 'Projects Completed', icon: Target },
    { number: '25+', label: 'Happy Clients', icon: Heart },
    { number: '3+', label: 'Years of Excellence', icon: Award }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section - Two Column Layout */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Image Side */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center text-white z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Globe className="text-white" size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Bridging Continents</h3>
              <p className="text-lg text-gray-300">Connecting Somalia to the World</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          className="flex items-center justify-center p-8 md:p-16 bg-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                About <span className="gradient-text">DevAgency</span> Somalia
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering Somalia's tech talent and connecting them with global opportunities through innovation, excellence, and community.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To bridge the gap between Somalia's abundant tech talent and the growing global demand for skilled developers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To establish Somalia as a recognized hub for world-class software development and digital innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating sustainable career opportunities while contributing to Somalia's growing reputation in the global tech industry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Mogadishu, DevAgency Somalia was born from a vision to transform 
                  the narrative around African tech talent. We saw incredible potential in Somalia's young, 
                  ambitious developers who were hungry for opportunities to showcase their skills on the global stage.
                </p>
                <p>
                  What started as a small initiative to connect local developers with international projects 
                  has grown into a thriving ecosystem that nurtures talent, builds bridges, and creates 
                  lasting partnerships across continents.
                </p>
                <p>
                  Today, we're proud to be at the forefront of Somalia's digital transformation, proving that 
                  talent knows no borders and that innovation can flourish anywhere with the right support and vision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="space-y-4"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=150&fit=crop"
                    alt="Development work"
                    className="rounded-2xl shadow-lg w-full h-32 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="space-y-4 pt-8"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=150&fit=crop"
                    alt="Modern office"
                    className="rounded-2xl shadow-lg w-full h-32 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop"
                    alt="Team meeting"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with developers, clients, and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <motion.div 
                  className={`bg-gradient-to-br ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every number tells a story of growth, success, and the trust placed in us by our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-effect rounded-3xl p-8 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={28} />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
} 