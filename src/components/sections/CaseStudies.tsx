import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ExternalLink, Calendar, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Autonomous Vehicle Neural Processor',
      client: 'AutoTech Innovations',
      industry: 'Automotive',
      challenge: 'Real-time object detection and decision-making for autonomous vehicles',
      solution: 'Custom neuromorphic processor with 50 TOPS performance and ultra-low latency',
      results: [
        '99.9% accuracy in object detection',
        '10ms response time for critical decisions',
        '40% reduction in power consumption',
        '500% improvement in processing speed'
      ],
      technologies: ['AI/ML Acceleration', 'Real-time Processing', 'Safety-Critical Systems'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      timeline: '18 months',
      impact: 'Enabled Level 4 autonomous driving capabilities'
    },
    {
      id: 2,
      title: 'Smart City IoT Infrastructure',
      client: 'MetroSmart Solutions',
      industry: 'Smart Cities',
      challenge: 'Low-power, wireless sensors for city-wide environmental monitoring',
      solution: 'Ultra-low power IoT microcontrollers with integrated wireless connectivity',
      results: [
        '10-year battery life achieved',
        '1000+ sensors deployed',
        '99.5% network uptime',
        '60% cost reduction vs competitors'
      ],
      technologies: ['IoT Edge Computing', 'Wireless Connectivity', 'Energy Harvesting'],
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop',
      timeline: '12 months',
      impact: 'Reduced city emissions by 25% through intelligent monitoring'
    },
    {
      id: 3,
      title: 'Medical Device AI Acceleration',
      client: 'HealthTech Dynamics',
      industry: 'Healthcare',
      challenge: 'Real-time medical imaging analysis for early disease detection',
      solution: 'Specialized AI processor for medical imaging with FDA-compliant security',
      results: [
        '95% diagnostic accuracy',
        '5x faster image processing',
        'HIPAA compliant security',
        '30% earlier disease detection'
      ],
      technologies: ['Medical AI', 'Image Processing', 'Security Enclave'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      timeline: '24 months',
      impact: 'Improved patient outcomes for 1M+ patients annually'
    },
    {
      id: 4,
      title: 'Quantum Computing Interface',
      client: 'QuantumLeap Technologies',
      industry: 'Quantum Computing',
      challenge: 'Classical-quantum interface for hybrid computing systems',
      solution: 'Cryogenic-compatible control processor with quantum error correction',
      results: [
        '99.9% fidelity in quantum operations',
        'Sub-microsecond control latency',
        'Operating at 10mK temperature',
        '1000-qubit system support'
      ],
      technologies: ['Quantum Control', 'Cryogenic Electronics', 'Error Correction'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
      timeline: '30 months',
      impact: 'Enabled breakthrough in quantum advantage demonstration'
    },
    {
      id: 5,
      title: 'Edge AI for Manufacturing',
      client: 'IndustryPro Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Predictive maintenance and quality control in real-time',
      solution: 'Edge AI processors with vision and sensor fusion capabilities',
      results: [
        '90% reduction in unplanned downtime',
        '99.7% quality detection rate',
        'Real-time decision making',
        'ROI achieved in 8 months'
      ],
      technologies: ['Industrial AI', 'Computer Vision', 'Predictive Analytics'],
      image: 'https://data.embeddedcomputing.com/uploads/resize/1256/756/external/data.embeddedcomputing.com/uploads/articles/primary_images/1686159204.png',
      timeline: '15 months',
      impact: 'Saved $50M annually in operational costs'
    },
    {
      id: 6,
      title: 'Satellite Communication Processor',
      client: 'SatCom Global',
      industry: 'Aerospace',
      challenge: 'High-reliability communication for next-generation satellite constellation',
      solution: 'Radiation-hardened processors with adaptive beam-forming capabilities',
      results: [
        '99.99% reliability in space',
        '100x faster data processing',
        'Radiation tolerance to 1Mrad',
        '15-year operational life'
      ],
      technologies: ['Radiation Hardening', 'DSP Acceleration', 'Space-grade Design'],
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=500&fit=crop',
      timeline: '36 months',
      impact: 'Enabled global broadband coverage via satellite'
    }
  ];

  const openModal = (caseId: number) => {
    setSelectedCase(caseId);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  const selectedCaseData = caseStudies.find(cs => cs.id === selectedCase);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
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
            <span className="text-foreground">Success</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how Boolean Microchips has transformed industries with innovative 
            semiconductor solutions that deliver real-world impact.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openModal(caseStudy.id)}
              className="group glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:glow-primary transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {caseStudy.industry}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {caseStudy.client}
                </p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {caseStudy.challenge}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 text-primary" />
                    {caseStudy.timeline}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:bg-primary/10 p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCase && selectedCaseData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-intense rounded-3xl border border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="p-8 border-b border-primary/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="border-primary/30 text-primary mb-4">
                          {selectedCaseData.industry}
                        </Badge>
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {selectedCaseData.title}
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          {selectedCaseData.client}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={closeModal}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <img 
                          src={selectedCaseData.image} 
                          alt={selectedCaseData.title}
                          className="w-full aspect-video object-cover rounded-2xl mb-6"
                        />
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center glass p-4 rounded-xl">
                            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-semibold text-foreground">Timeline</div>
                            <div className="text-sm text-muted-foreground">{selectedCaseData.timeline}</div>
                          </div>
                          <div className="text-center glass p-4 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-semibold text-foreground">Industry</div>
                            <div className="text-sm text-muted-foreground">{selectedCaseData.industry}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            Challenge
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedCaseData.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Solution
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedCaseData.solution}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            Results
                          </h4>
                          <ul className="space-y-2">
                            {selectedCaseData.results.map((result, index) => (
                              <li key={index} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 glow-primary" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCaseData.technologies.map((tech) => (
                              <Badge key={tech} className="bg-primary/20 text-primary border-primary/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="glass p-4 rounded-xl border border-primary/20">
                          <h4 className="font-bold text-foreground mb-2">Impact</h4>
                          <p className="text-muted-foreground">{selectedCaseData.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies;