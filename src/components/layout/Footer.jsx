import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react'
import sunriseLogo from '../../assets/sunrise-logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const quickLinks = [
    'About Us',
    'Solar Solutions',
    'Installation',
    'Maintenance',
    'Financing',
    'Contact'
  ]

  const services = [
    'Residential Solar',
    'Commercial Solar',
    'Solar Water Heating',
    'Solar Pumping',
    'Energy Storage',
    'Grid-Tie Systems'
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="container-custom py-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-4">
                  Stay Updated with Solar Innovations
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Get the latest news on solar technology, energy savings tips, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange backdrop-blur-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-sunset-orange to-solar-yellow text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={sunriseLogo} 
                  alt="Sunrise Energy" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading solar energy provider in Somalia, delivering sustainable and reliable 
                renewable energy solutions for homes and businesses.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-sunset-orange hover:border-sunset-orange transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(`#${link.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="text-gray-300 hover:text-sunset-orange transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-gray-300 hover:text-sunset-orange transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Hodan District, Mogadishu<br />
                      Somalia
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-sunset-orange flex-shrink-0" />
                  <a href="tel:+252617071141" className="text-gray-300 hover:text-white transition-colors">
                    +252 61 707 1141
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-sunset-orange flex-shrink-0" />
                  <a href="mailto:info@sunriseenergy.so" className="text-gray-300 hover:text-white transition-colors">
                    info@sunriseenergy.so
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h5 className="font-semibold mb-2 text-sunset-orange">Business Hours</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-300 text-sm">
                © 2025 Sunrise Energy. All Rights Reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 