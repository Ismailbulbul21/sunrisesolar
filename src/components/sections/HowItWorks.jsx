import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Calculator, 
  Wrench, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'Contact us for a free consultation. Our experts will assess your energy needs and site conditions.',
      details: ['Site assessment', 'Energy audit', 'Custom recommendations', 'No obligation quote'],
      duration: '1-2 Days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calculator,
      title: 'System Design & Quote',
      description: 'We design a custom solar system tailored to your specific requirements and provide detailed pricing.',
      details: ['3D system design', 'Energy production analysis', 'Financial projections', 'Permit applications'],
      duration: '3-5 Days',
      color: 'from-emerald-green to-teal-500'
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Our certified technicians install your solar system with precision and care.',
      details: ['Professional installation', 'Quality components', 'Safety compliance', 'System testing'],
      duration: '1-3 Days',
      color: 'from-sunset-orange to-red-500'
    },
    {
      icon: CheckCircle2,
      title: 'Activation & Support',
      description: 'System activation, monitoring setup, and ongoing maintenance support.',
      details: ['System activation', 'Monitoring setup', '24/7 support', 'Regular maintenance'],
      duration: 'Ongoing',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Most residential systems installed within 1-3 days'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '25-year warranty on panels, 5-year on installation'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
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
            <span className="text-emerald-green font-semibold text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Process,
            <span className="gradient-text"> Amazing Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to system activation, we make going solar 
            simple and stress-free with our proven 4-step process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sunset-orange to-emerald-green rounded-full" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-bold mb-4`}>
                      {index + 1}
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                      <Clock size={14} className="mr-1" />
                      {step.duration}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="text-emerald-green flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="text-white" size={32} />
                  </motion.div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute inset-0 w-4 h-4 bg-white border-4 border-sunset-orange rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 lg:max-w-md hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Process?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sunset-orange to-solar-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Solar Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get your free consultation today and take the first step towards energy independence.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 