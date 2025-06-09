import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, Zap, Shield, Award, Sun, Battery, Leaf } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // High-quality solar energy background images
  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&crop=center',
      title: 'Modern Rooftop Solar Installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=1080&fit=crop&crop=center',
      title: 'Large-Scale Solar Farm'
    },
    {
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop&crop=center',
      title: 'Solar Technology Systems'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center',
      title: 'Smart Grid Infrastructure'
    },
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&crop=center',
      title: 'Solar Panel Manufacturing'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const floatingElements = [
    { icon: Zap, delay: 0, x: 10, y: 20 },
    { icon: Shield, delay: 0.5, x: 80, y: 30 },
    { icon: Award, delay: 1, x: 15, y: 70 },
    { icon: Zap, delay: 1.5, x: 85, y: 80 }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex].url})`
            }}
          />
        </AnimatePresence>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-violet/80 via-purple-900/60 to-indigo-900/80" />
        
        {/* Animated Mesh Gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FF6B35 0%, transparent 50%)`
          }}
        />

        {/* Professional Solar Rays Animation */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 origin-bottom"
              style={{
                width: '2px',
                height: '40vh',
                background: 'linear-gradient(to top, transparent, #FFD23F, transparent)',
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Energy Wave Animation */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-solar-yellow rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.8, 0.2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Floating Solar Icons */}
        {Array.from({ length: 12 }).map((_, i) => {
          const icons = [Sun, Battery, Leaf, Zap]
          const IconComponent = icons[i % icons.length]
          return (
            <motion.div
              key={i}
              className="absolute text-solar-yellow/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            >
              <IconComponent size={24 + Math.random() * 16} />
            </motion.div>
          )
        })}

        {/* Professional Energy Flow Lines */}
        <div className="absolute inset-0 opacity-25">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-sunset-orange to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-solar-yellow/40"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: element.delay
          }}
        >
          <element.icon size={40} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <Zap className="text-solar-yellow mr-2" size={20} />
            <span className="text-lg font-medium">Somalia's Leading Solar Energy Provider</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-white text-shadow-lg">
              Empowering Lives
            </span>
            <span className="block bg-gradient-to-r from-solar-yellow via-sunset-orange to-emerald-green bg-clip-text text-transparent">
              Through Clean Solar
            </span>
            <span className="block text-white text-shadow-lg">
              Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your energy future with cutting-edge solar solutions that power communities, 
            reduce costs, and create a sustainable tomorrow for Somalia.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { number: '350+', label: 'Projects Completed' },
              { number: '764+', label: 'Expert Consultants' },
              { number: '265+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-solar-yellow mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 25px 50px rgba(255, 107, 53, 0.4)',
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-sunset-orange to-solar-yellow text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-sunset-orange/30 transition-all duration-300"
            >
              Get Free Solar Quote
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-5 px-10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Play size={24} />
              <span className="text-lg">Watch Our Impact</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-300"
          >
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2">
              <Shield size={24} className="text-emerald-green" />
              <span>Certified & Licensed</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2">
              <Award size={24} className="text-solar-yellow" />
              <span>25-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2">
              <Zap size={24} className="text-sunset-orange" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 