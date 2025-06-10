import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Zap, 
  Leaf,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To contribute positively to a sustainable future by providing clean, reliable, and affordable renewable energy solutions that help communities across Somalia achieve energy independence.',
      color: 'from-sunset-orange to-red-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Committed to leading a healthy life up to create a low-carbon future for the next generation by providing sustainable renewable energy solutions.',
      color: 'from-emerald-green to-teal-500'
    }
  ]

  const achievements = [
    { icon: Users, number: '764+', label: 'Expert Consultants' },
    { icon: Award, number: '350+', label: 'Projects Completed' },
    { icon: Zap, number: '265+', label: 'Happy Clients' },
    { icon: Leaf, number: '10+', label: 'Years Experience' }
  ]

  const features = [
    'We ensure a professional customer experience with high-quality installation',
    'Monthly and quarterly maintenance checks involve checking and cleaning of the panel',
    'Full commitments to homeowners with 24/7 technical support',
    'Customized solution that helps them seamlessly migrate to Solar Power',
    'We are Building a Sustainable Future for Somalia',
    'Green Energy for Sustainable Future with certified professionals'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            <span className="text-emerald-green font-semibold text-sm">ABOUT SUNRISE ENERGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Green Energy for
            <span className="gradient-text"> Sustainable Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We stand with our customers at every step of their implementation. Our dedicated team of engineers 
            are passionate about renewable energy. They are the best and the brightest minds in the renewable 
            industry today. We customize solutions to meet your specific energy need.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CEO Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-deep-violet to-purple-900 rounded-3xl p-8 md:p-12 text-white mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-solar-yellow mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              It's Simple We Can't Continue to burn things to meet our energy needs.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-solar-yellow rounded-full flex items-center justify-center">
                <Users className="text-deep-violet" size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">CEO Message</div>
                <div className="text-gray-300">Sunrise Energy Leadership</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sunset-orange to-solar-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-white" size={20} />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
              <div className="text-gray-600 text-sm font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Sunrise Energy?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-emerald-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 btn-primary inline-flex items-center space-x-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop&crop=center" 
                alt="Solar Installation Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Professional Solar Installation</h4>
                <p className="text-gray-200">Expert team delivering quality solar solutions across Somalia</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-gray-600 text-sm">Customer Satisfaction</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-sunset-orange to-solar-yellow rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">25 Years</div>
                <div className="text-orange-100 text-sm">Warranty Coverage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 