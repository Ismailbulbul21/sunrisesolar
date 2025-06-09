import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Zap, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Solar Panel',
      description: 'High-quality solar panels with advanced photovoltaic technology for maximum energy conversion and efficiency.',
      features: ['Premium Monocrystalline Panels', 'High Efficiency Rating', 'Weather Resistant', '25-Year Performance Warranty'],
      color: 'from-sunset-orange to-red-500',
      delay: 0.1
    },
    {
      icon: Settings,
      title: 'Installation Services',
      description: 'Professional solar installation services by certified technicians with complete system setup and commissioning.',
      features: ['Certified Technicians', 'Complete System Setup', 'Safety Compliance', 'Post-Installation Support'],
      color: 'from-solar-yellow to-orange-500',
      delay: 0.2
    },
    {
      icon: Home,
      title: 'Residential Solar Systems',
      description: 'Complete solar solutions for homes with premium panels, inverters, and battery storage systems.',
      features: ['Complete Home Solutions', 'Smart Inverters', 'Battery Storage Options', 'Energy Monitoring'],
      color: 'from-emerald-green to-teal-500',
      delay: 0.3
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-sunset-orange/10 rounded-full mb-4">
            <span className="text-sunset-orange font-semibold text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Solar
            <span className="gradient-text"> Energy Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to large commercial installations, we provide 
            comprehensive solar solutions tailored to your specific energy needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sunset-orange transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-emerald-green flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-sunset-orange font-semibold group-hover:text-solar-yellow transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sunset-orange/20 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sunset-orange to-solar-yellow rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Switch to Solar Energy?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Get a free consultation and custom quote for your solar project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-sunset-orange font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-sunset-orange transition-all duration-300"
              >
                Call Now: (+252) 61-7071141
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 