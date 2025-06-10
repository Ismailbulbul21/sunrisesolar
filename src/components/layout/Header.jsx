import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import sunriseLogo from '../../assets/sunrise-logo.svg'

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
    const message = encodeURIComponent("Hi Sunrise Energy! I'm interested in your solar solutions.")
    window.open(`https://wa.me/252617071141?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-xl border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Main Navigation */}
        <nav className="container-custom py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center"
            >
              <img 
                src={sunriseLogo} 
                alt="Sunrise Energy" 
                className="h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="font-semibold text-base transition-all duration-300 hover:text-sunset-orange relative text-white drop-shadow-md"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunset-orange transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/20">
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

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl transition-all duration-300 text-white drop-shadow-lg hover:bg-white/10 backdrop-blur-sm"
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
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Fixed WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
        title="Chat with us on WhatsApp"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </motion.button>
    </>
  )
}

export default Header 