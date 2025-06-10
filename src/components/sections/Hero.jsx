import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // High-quality solar panel focused images
  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
      title: 'Modern Solar Panel Installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
      title: 'Large Scale Solar Farm'
    },
    {
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
      title: 'Close-up Solar Panel Array'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
      title: 'Rooftop Solar Installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
      title: 'Commercial Solar Panels'
    }
  ]

  // Rotate background images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional Solar Panel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex].url})`
            }}
          />
        </AnimatePresence>
        
        {/* Professional Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-sunset-orange/20 backdrop-blur-sm rounded-full border border-sunset-orange/30 mb-4"
            >
              <span className="text-sunset-orange font-semibold text-sm">
                🌞 Leading Solar Energy Provider
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Power Your Future
              <span className="block bg-gradient-to-r from-sunset-orange to-solar-yellow bg-clip-text text-transparent">
                With Solar Energy
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-200 mb-6 leading-relaxed max-w-lg"
            >
              Transform your home or business with professional solar installations. 
              Clean energy, reduced costs, and sustainable power solutions.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {[
                "25+ Year Warranty",
                "Professional Installation", 
                "Smart Monitoring"
              ].map((feature, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20"
                >
                  ✓ {feature}
                </span>
              ))}
            </motion.div>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#about')}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Play size={20} />
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Compact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:text-right"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Projects", icon: "🏠" },
                { number: "25+", label: "Years Warranty", icon: "🛡️" },
                { number: "50+", label: "Technicians", icon: "👨‍🔧" },
                { number: "99%", label: "Satisfaction", icon: "⭐" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Compact Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
            >
              <h3 className="text-white font-semibold text-base mb-2">Why Choose Sunrise Energy?</h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Certified & Licensed Installers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Premium Quality Components</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Flexible Financing Options</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown size={28} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 