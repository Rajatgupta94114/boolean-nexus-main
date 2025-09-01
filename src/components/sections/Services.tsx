import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Cog, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Cpu,
      title: 'Chip Design',
      description: 'Custom semiconductor design and architecture development for specialized applications.',
      features: ['AI/ML Processors', 'IoT Microcontrollers', 'Edge Computing Chips', 'Neuromorphic Designs'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cog,
      title: 'Manufacturing',
      description: 'State-of-the-art fabrication facilities with advanced process technology and quality control.',
      features: ['7nm Process Node', 'Wafer Fabrication', 'Packaging & Testing', 'Quality Assurance'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance on semiconductor integration, optimization, and future technology roadmaps.',
      features: ['Technical Advisory', 'Integration Support', 'Performance Optimization', 'Future Planning'],
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive semiconductor solutions from initial design concept through 
            manufacturing and deployment, backed by decades of industry expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-intense p-8 rounded-3xl h-full hover:glow-primary transition-all duration-500 border border-primary/10 hover:border-primary/30">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:glow-primary transition-all duration-300" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="group/btn w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Transform Your Ideas Into Reality?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate on your next semiconductor project. Our team of experts 
              is ready to turn your vision into cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary hover:glow-intense transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;