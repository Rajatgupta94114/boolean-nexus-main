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
      icon: Globe,
      image: '/office-team.jpg',
    },
    {
      year: '2005',
      title: 'First AI Chip',
      description: 'Launched our first AI-optimized processor, setting new industry standards.',
      icon: Cpu,
      image: '/src/assets/manufacturing.jpg',
    },
    {
      year: '2015',
      title: 'Quantum Leap',
      description: 'Breakthrough in quantum computing integration with traditional semiconductors.',
      icon: Zap,
      image: '/src/assets/milestone-celebration.jpg',
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Leading the industry with next-generation neuromorphic processors and edge AI.',
      icon: Shield,
      image: '/src/assets/office.jpg',
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

        {/* Alternating Timeline */}
        <div className="max-w-7xl mx-auto space-y-24 relative">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.year}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Card on Left */}
                {isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="lg:col-span-6 flex items-start gap-6"
                  >
                    {/* Timeline line + dot */}
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
                )}

                {/* Image Opposite Side (STATIC) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="lg:col-span-6"
                >
                  <div className="glass rounded-2xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        className="w-full h-56 lg:h-64 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Card on Right */}
                {!isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="lg:col-span-6 flex items-start gap-6"
                  >
                    {/* Timeline line + dot */}
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
