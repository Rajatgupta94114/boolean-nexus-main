import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Brain, Wifi, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Brain,
      title: 'AI Neural Processors',
      description: 'Advanced neuromorphic chips that mimic brain neural networks for ultra-efficient AI computation.',
      specs: ['40 TOPS/W efficiency', '16nm FinFET process', 'Real-time learning', 'Edge inference'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Wifi,
      title: 'IoT Edge Computing',
      description: 'Ultra-low power microcontrollers designed for next-generation IoT applications.',
      specs: ['Sub-1mW operation', 'Wireless connectivity', 'Sensor fusion', 'Security enclave'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum-resistant encryption processors for ultimate data protection.',
      specs: ['Post-quantum crypto', 'Hardware root of trust', 'Secure boot', 'Tamper resistance'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Zap,
      title: 'High-Performance Computing',
      description: 'Massively parallel processors for scientific computing and data centers.',
      specs: ['1000+ cores', '7nm EUV process', 'DDR5 support', 'PCIe 5.0 ready'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Advanced</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of what's possible with breakthrough semiconductor innovations 
            that power the next generation of intelligent systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group glass-intense p-8 rounded-3xl hover:glow-primary transition-all duration-500 border border-primary/10 hover:border-primary/30"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <tech.icon className="w-full h-full text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {tech.specs.map((spec, idx) => (
                      <div key={spec} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 glow-primary" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-intense p-12 rounded-3xl border border-primary/20 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Interactive 3D Chip Viewer
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience our latest processor architecture in an immersive 3D environment. 
            Explore the intricate details of our cutting-edge chip design.
          </p>
          
          <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              <Cpu size={80} className="glow-primary" />
            </motion.div>
          </div>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary hover:glow-intense transition-all duration-300"
          >
            Launch 3D Viewer
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;