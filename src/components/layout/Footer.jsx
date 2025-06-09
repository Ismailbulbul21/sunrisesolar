import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Media', href: '#media' }
    ],
    services: [
      { name: 'Residential Solar', href: '#residential' },
      { name: 'Commercial Solar', href: '#commercial' },
      { name: 'Water Heating', href: '#water-heating' },
      { name: 'Water Pumps', href: '#water-pumps' },
      { name: 'Street Lighting', href: '#street-lighting' },
      { name: 'Air Conditioning', href: '#air-conditioning' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Warranty', href: '#warranty' },
      { name: 'Maintenance', href: '#maintenance' }
    ]
  }

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/energyrise.somalia', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/energyrise_so', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/energy-rise-somalia', 
      label: 'LinkedIn' 
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@energyrisesomalia', 
      label: 'YouTube' 
    }
  ]

  return (
    <footer className="bg-deep-violet text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-sunset-orange to-solar-yellow rounded-full flex items-center justify-center">
                <Sun className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Energy Rise</h3>
                <p className="text-sm text-gray-300">Solar Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading Somalia's transition to clean, renewable energy with innovative 
              solar solutions for homes and businesses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-solar-yellow" />
                <span className="text-sm">Next To Cid Hq, Number 4<br />Mogadishu, Somalia</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-solar-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-solar-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-solar-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="font-bold mb-3">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for solar energy tips and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-solar-yellow"
                />
                <button className="bg-solar-yellow text-deep-violet px-4 py-2 rounded-r-lg hover:bg-sunset-orange transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2025 Energy Rise. All Rights Reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-solar-yellow hover:text-deep-violet transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center hover:bg-solar-yellow transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 