import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const positions = [
    {
      title: 'Senior Chip Design Engineer',
      department: 'Engineering',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the design of next-generation AI processors with focus on neuromorphic architectures.',
      requirements: ['Ph.D in Electrical Engineering', 'RTL design experience', 'AI/ML knowledge', 'Verilog/SystemVerilog'],
      salary: '$180k - $250k'
    },
    {
      title: 'Manufacturing Process Engineer',
      department: 'Operations',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Optimize semiconductor fabrication processes and improve yield rates.',
      requirements: ['M.S. in Chemical Engineering', 'Fab experience', 'Statistical analysis', 'Process optimization'],
      salary: '$120k - $160k'
    },
    {
      title: 'AI Research Scientist',
      department: 'R&D',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Research novel AI algorithms optimized for our custom silicon platforms.',
      requirements: ['Ph.D in Computer Science', 'Deep learning expertise', 'Python/TensorFlow', 'Hardware acceleration'],
      salary: '$160k - $220k'
    },
    {
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive go-to-market strategy for semiconductor products in emerging markets.',
      requirements: ['MBA preferred', 'Tech marketing experience', 'B2B sales', 'Product positioning'],
      salary: '$140k - $180k'
    },
    {
      title: 'Firmware Development Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      experience: 'Students',
      description: 'Contribute to embedded software development for IoT microcontrollers.',
      requirements: ['CS/EE student', 'C/C++ programming', 'Embedded systems', 'Git version control'],
      salary: '$25 - $35/hour'
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Operations',
      location: 'Phoenix, AZ',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure highest quality standards through comprehensive testing protocols.',
      requirements: ['B.S. in Engineering', 'Testing methodologies', 'Statistical analysis', 'ISO standards'],
      salary: '$90k - $120k'
    }
  ];

  const benefits = [
    { icon: Users, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: TrendingUp, title: 'Growth Opportunities', description: 'Continuous learning and career advancement programs' },
    { icon: Clock, title: 'Work-Life Balance', description: 'Flexible hours and remote work options' },
    { icon: MapPin, title: 'Global Impact', description: 'Work on products that shape the future of technology' }
  ];

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
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
            <span className="text-foreground">Join Our</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shape the future of technology with the brightest minds in semiconductor innovation. 
            Discover opportunities to grow your career while making a global impact.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass p-6 rounded-2xl hover:glow-primary transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-intense p-8 rounded-3xl border border-primary/10 hover:border-primary/30 hover:glow-primary transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {position.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req) => (
                        <Badge key={req} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-primary font-semibold">{position.salary}</div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground glow-primary hover:glow-intense transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Don't See the Perfect Role?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for exceptional talent. Send us your resume and 
              let us know how you'd like to contribute to the future of semiconductors.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary hover:glow-intense transition-all duration-300"
            >
              Submit General Application
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;