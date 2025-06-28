import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Search, CheckCircle, ArrowRight, Star, Globe, Code, Trophy, Zap, Smartphone, Database, Shield, Rocket } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'We Recruit Developers',
      description: 'We identify and recruit the most talented developers in Somalia, ensuring they have the skills needed for modern software development.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'We Find Clients',
      description: 'Our team actively connects with businesses, restaurants, and organizations that need custom software solutions.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'We Deliver Results',
      description: 'We match the right developer with each project, ensuring high-quality deliverables and satisfied clients.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ]

  const stats = [
    { number: '50+', label: 'Mashaariicdii La Dhammeystay', icon: Trophy },
    { number: '25+', label: 'Macaamiil Ku Qanacsan', icon: Users },
    { number: '3+', label: 'Sano Oo Khibrad', icon: Star },
    { number: '24/7', label: 'Taageero', icon: Zap }
  ]

  const services = [
    {
      icon: Code,
      title: 'Dhisidda Websiteska',
      description: 'Websiteska casriga ah ee responsive ah oo ku dhisan teknoolajiyada ugu dambeeyay',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Dhisidda Mobile Apps',
      description: 'Apps cusub oo ku habboon iOS iyo Android si loo gaaro macaamiisha',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Nidaamka dambe ee adag oo ku habboon shaqooyinka waaweyn',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const technologies = [
    'React', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ]

  const workProcess = [
    {
      step: '01',
      title: 'Fahamka Mashruuca',
      description: 'Waxaan si fiican u fahanaa baahiyahaaga iyo yoolalka mashruucaaga',
      icon: Users
    },
    {
      step: '02', 
      title: 'Qorshaha iyo Naqshadaynta',
      description: 'Waxaan sameynaynaa qorshe faahfaahsan iyo naqshadayn casri ah',
      icon: Code
    },
    {
      step: '03',
      title: 'Dhisidda iyo Tijaabinta',
      description: 'Dhisidda teknoolajiyada ugu dambeeyay iyo tijaabinta dhammaystiran',
      icon: Rocket
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Tech Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center')`
          }}
        />
        
        {/* Dark Overlay with Tech Pattern */}
        <div className="absolute inset-0 bg-gray-900/85">
          <div className="absolute inset-0 opacity-30">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>
        </div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Teknoolajiyada{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mustaqbalka
              </span>
              <br />
              Maanta
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Waxaan ku takhasusnahay dhisidda websiteska casriga ah, mobile apps, 
              iyo xalalka teknoolajiyada ee ku habboon ganacsigaaga
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center gap-3"
                onClick={() => window.location.href = '/contact'}
              >
                Nala Soo Xiriir
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                onClick={() => window.location.href = '/developers'}
              >
                Arag Kooxdayada
                <Users className="group-hover:scale-110 transition-transform duration-200" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <stat.icon className="text-cyan-400 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Adeegyadayada <span className="gradient-text">Takhasuska ah</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waxaan bixinaynaa adeegyo kala duwan oo ku habboon baahiyaha casriga ah ee ganacsiga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sidaan u <span className="gradient-text">Shaqeyno</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Habka saddex tallaabo ah ee aan ku dhisno mashaariicdaada si ugu wanaagsan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300">
                    {step.step}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <step.icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Teknoolajiyada aan <span className="gradient-text">Isticmaalno</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waxaan isticmaalnaa teknoolajiyada ugu dambeeyay si aan u dhisno xalalka ugu wanaagsan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 px-6 py-3 rounded-2xl font-semibold border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Diyaar ma u tahay inaad
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Bilaabdo</span>?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Nala soo xidhiidh si aan u bilowno mashruucaaga casriga ah oo aan ku gaarsiiyo yoolalkaaga
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-300 inline-flex items-center gap-4"
              onClick={() => window.location.href = '/contact'}
            >
              <Rocket size={24} />
              Bilow Hadda
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 