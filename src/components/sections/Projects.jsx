import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Residential Solar System',
      location: 'Mogadishu, Somalia',
      date: '2024',
      capacity: '5kW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop',
      description: 'Complete residential solar installation with battery storage system.'
    },
    {
      title: 'Commercial Solar Installation',
      location: 'Hargeisa, Somalia',
      date: '2024',
      capacity: '50kW',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&h=300&fit=crop',
      description: 'Large-scale commercial solar system for office complex.'
    },
    {
      title: 'Solar Water Pumping',
      location: 'Kismayo, Somalia',
      date: '2023',
      capacity: '3kW',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop',
      description: 'Solar-powered water pumping system for agricultural use.'
    },
    {
      title: 'Solar Street Lighting',
      location: 'Baidoa, Somalia',
      date: '2023',
      capacity: '2kW',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      description: 'Smart solar street lighting installation for city center.'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
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
            <span className="text-emerald-green font-semibold text-sm">OUR PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest
            <span className="gradient-text"> Solar Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent solar installations across Somalia, showcasing our 
            commitment to bringing clean energy to communities nationwide.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-solar-yellow text-deep-violet px-3 py-1 rounded-full text-sm font-bold">
                  {project.capacity}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sunset-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-sunset-orange font-semibold"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 