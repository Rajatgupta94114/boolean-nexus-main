import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '1999',
      title: 'Founded',
      description: 'Boolean Microchips established with a vision to revolutionize semiconductor technology.',
      icon: Globe
    },
    {
      year: '2005',
      title: 'First AI Chip',
      description: 'Launched our first AI-optimized processor, setting new industry standards.',
      icon: Cpu
    },
    {
      year: '2015',
      title: 'Quantum Leap',
      description: 'Breakthrough in quantum computing integration with traditional semiconductors.',
      icon: Zap
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Leading the industry with next-generation neuromorphic processors and edge AI.',
      icon: Shield
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Innovating Since</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">1999</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, Boolean Microchips has been at the forefront of semiconductor innovation, 
            designing and manufacturing the processors that power the world's most advanced technologies.
          </p>
        </motion.div>

        {/* Timeline Layout - Cards on Left, Images on Right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Timeline Cards - Left Side (8 columns) */}
            <div className="lg:col-span-7 space-y-8">{timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="flex items-start gap-6"
                >
                  {/* Timeline line */}
                  <div className="flex flex-col items-center pt-3 min-w-[24px]">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="w-4 h-4 bg-primary rounded-full glow-primary shadow-glow"
                    />
                    {index < timeline.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '120px' } : {}}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                        className="w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent mt-4"
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass p-8 rounded-2xl hover:glow-primary transition-all duration-500 group hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">{item.year}</div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Milestone Images - Right Side (5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="grid gap-6">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src="/src/assets/office-team.jpg" 
                      alt="Boolean Microchips team collaborating on semiconductor innovations"
                      className="w-full h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Innovation Team</h4>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src="/src/assets/manufacturing.jpg" 
                      alt="State-of-the-art semiconductor manufacturing facility"
                      className="w-full h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Manufacturing Excellence</h4>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src="/src/assets/milestone-celebration.jpg" 
                      alt="Team celebrating major technological milestones and achievements"
                      className="w-full h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Milestone Achievements</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-32"
        >
          {[
            {
              title: 'Innovation',
              description: 'Cutting-edge R&D pushing the boundaries of what\'s possible in semiconductor technology.',
              value: '150+',
              subtitle: 'Patents Filed'
            },
            {
              title: 'Quality',
              description: 'Zero-defect manufacturing with ISO 9001 certification and rigorous testing protocols.',
              value: '99.99%',
              subtitle: 'Quality Rate'
            },
            {
              title: 'Scale',
              description: 'Global manufacturing capabilities producing millions of chips for worldwide distribution.',
              value: '500M+',
              subtitle: 'Chips Produced'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center glass p-8 lg:p-10 rounded-2xl hover:glow-primary transition-all duration-500 group"
            >
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{feature.value}</div>
              <div className="text-sm text-primary/80 font-semibold mb-4 tracking-wide uppercase">{feature.subtitle}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;