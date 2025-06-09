import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        'Solar Panel',
        'Installation Services', 
        'Residential Solar Systems'
      ]
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Energy Rise! I'm interested in your solar solutions.")
    window.open(`https://wa.me/252617071141?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-deep-violet text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>Professional Solar Solutions</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Phone size={14} />
                <span>Monday - Friday: 08:00 AM - 06:00 PM</span>
              </div>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              WhatsApp Chat
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100' 
            : 'bg-white/15 backdrop-blur-md'
        }`}
      >
        {/* Main Navigation */}
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sunset-orange via-solar-yellow to-emerald-green rounded-xl flex items-center justify-center shadow-lg">
                <Sun className="text-white" size={28} />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                }`}>
                  Energy Rise
                </h1>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-600' : 'text-emerald-200'
                }`}>
                  Professional Solar Solutions
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-semibold text-base transition-all duration-300 hover:text-sunset-orange relative ${
                      isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunset-orange transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                      <div className="py-3">
                        {item.dropdown.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => scrollToSection(`#${subItem.toLowerCase().replace(/\s+/g, '-')}`)}
                            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-sunset-orange hover:to-solar-yellow hover:text-white transition-all duration-200 font-medium"
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="hidden md:block bg-gradient-to-r from-sunset-orange to-solar-yellow text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-gray-100' 
                    : 'text-white drop-shadow-lg hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200"
            >
              <div className="container-custom py-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left py-3 text-gray-900 font-semibold text-lg hover:text-sunset-orange transition-colors"
                      >
                        {item.name}
                      </button>
                      {item.dropdown && (
                        <div className="ml-6 space-y-2 mt-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => scrollToSection(`#${subItem.toLowerCase().replace(/\s+/g, '-')}`)}
                              className="block w-full text-left py-2 text-gray-600 hover:text-sunset-orange transition-colors font-medium"
                            >
                              {subItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-3">
                    <button 
                      onClick={() => scrollToSection('#contact')}
                      className="w-full bg-gradient-to-r from-sunset-orange to-solar-yellow text-white font-bold py-3 px-6 rounded-full"
                    >
                      Get Free Quote
                    </button>
                    <button 
                      onClick={handleWhatsApp}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                    >
                      WhatsApp Chat
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header 