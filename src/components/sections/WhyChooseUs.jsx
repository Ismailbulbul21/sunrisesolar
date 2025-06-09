import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Users, 
  Wrench, 
  Clock, 
  Leaf,
  TrendingUp,
  HeadphonesIcon
} from 'lucide-react'

const WhyChooseUs = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    consultants: 0,
    clients: 0,
    experience: 0
  })

  const stats = [
    { key: 'projects', target: 350, label: 'Projects Completed', suffix: '+' },
    { key: 'consultants', target: 764, label: 'Expert Consultants', suffix: '+' },
    { key: 'clients', target: 265, label: 'Happy Clients', suffix: '+' },
    { key: 'experience', target: 10, label: 'Years Experience', suffix: '+' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Fully licensed and certified solar installation company with all required permits and insurance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: '25-Year Warranty',
      description: 'Industry-leading warranty on solar panels and 5-year warranty on installation workmanship.',
      color: 'from-emerald-green to-teal-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified solar professionals with over 10 years of experience in renewable energy.',
      color: 'from-sunset-orange to-red-500'
    },
    {
      icon: Wrench,
      title: 'Quality Installation',
      description: 'Professional installation using premium components and following strict safety protocols.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick project completion with most residential installations finished within 1-3 days.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and monitoring to ensure optimal system performance.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const benefits = [
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint and contribute to a cleaner, sustainable future for Somalia.'
    },
    {
      icon: TrendingUp,
      title: 'Energy Savings',
      description: 'Save up to 90% on your electricity bills with our high-efficiency solar systems.'
    }
  ]

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach(stat => {
        let current = 0
        const increment = stat.target / 100
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(timer)
          }
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }))
        }, 20)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-solar-yellow/10 rounded-full mb-4">
            <span className="text-sunset-orange font-semibold text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a
            <span className="gradient-text"> Sustainable Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience and hundreds of successful installations, 
            we're Somalia's trusted partner for renewable energy solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          id="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sunset-orange transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-deep-violet to-purple-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Energy Rise Advantage
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have made the switch to clean, 
              renewable energy with Energy Rise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-solar-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-deep-violet" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="opacity-90 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-solar-yellow text-deep-violet font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Your Free Quote Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 