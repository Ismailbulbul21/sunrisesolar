import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Send, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Solar Inquiry from ${formData.name || 'Website Visitor'}`)
    const body = encodeURIComponent(`Hello Sunrise Energy Team,

I'm interested in your solar solutions.

Name: ${formData.name || '[Please fill in]'}

Message:
${formData.message || 'I would like to learn more about solar installation for my property.'}

Please contact me to discuss solar options.

Best regards,
${formData.name || 'Website Visitor'}`)

    window.location.href = `mailto:ismailbulbul381@gmail.com?subject=${subject}&body=${body}`
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, Najiib`)
    
    window.open(`https://wa.me/252617071141?text=${message}`, '_blank')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: 'Next To Cid Hq, Number 4',
      subtitle: 'Mogadishu, Somalia',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Friday',
      subtitle: '08:00 AM - 06:00 PM',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+252 61-7071141',
      subtitle: 'Free Consultation',
      color: 'from-sunset-orange to-red-500'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-green/10 rounded-full mb-4">
            <span className="text-emerald-green font-semibold text-sm">CONTACT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free
            <span className="gradient-text"> Solar Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to contact us - WhatsApp for quick chat 
            or email for detailed inquiries.
          </p>
        </motion.div>

        {/* Main Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* WhatsApp Contact - Simplified */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Simple Background Pattern */}
            <div className="absolute top-4 right-4 opacity-10">
              <MessageCircle size={80} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp Chat</h3>
                  <p className="text-green-100">Instant Response</p>
                </div>
              </div>

              <p className="text-lg mb-8 text-green-50">
                Get quick answers and free quotes directly on WhatsApp.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="w-full bg-white text-green-600 font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle size={24} />
                <span>Start WhatsApp Chat</span>
              </motion.button>

              <p className="text-center text-green-100 text-sm mt-4">
                +252 61-7071141
              </p>
            </div>
          </motion.div>

          {/* Email Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sunset-orange to-solar-yellow rounded-full flex items-center justify-center">
                <Mail size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send Email</h3>
                <p className="text-gray-600">Opens Gmail directly</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange focus:border-sunset-orange transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange focus:border-sunset-orange transition-all duration-300"
                  placeholder="Tell us about your solar needs..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-sunset-orange to-solar-yellow text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail size={20} />
                <span>Open Gmail</span>
              </motion.button>

              <p className="text-center text-gray-500 text-sm">
                ismailbulbul381@gmail.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h4>
              <p className="text-gray-700 font-semibold">{info.details}</p>
              <p className="text-gray-500 text-sm">{info.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-deep-violet to-purple-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Solar?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have made the switch to clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center space-x-3 shadow-lg transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="bg-white text-deep-violet font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 