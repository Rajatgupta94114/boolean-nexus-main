import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      city: 'Silicon Valley',
      address: '1 Infinite Loop, Cupertino, CA 95014',
      phone: '+1 (555) 123-4567',
      email: 'siliconvalley@booleanmicrochips.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'Austin',
      address: '123 Tech Drive, Austin, TX 78701',
      phone: '+1 (555) 234-5678',
      email: 'austin@booleanmicrochips.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM CST'
    },
    {
      city: 'Boston',
      address: '456 Innovation Way, Cambridge, MA 02139',
      phone: '+1 (555) 345-6789',
      email: 'boston@booleanmicrochips.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            <span className="text-foreground">Get In</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into cutting-edge semiconductor solutions? 
            Let's start a conversation about your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-intense p-8 rounded-3xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg font-semibold glow-primary hover:glow-intense transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Offices */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:glow-primary transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-foreground mb-4">{office.city} Office</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-intense p-8 rounded-3xl border border-primary/20 text-center"
            >
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4 glow-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Our technical support team is available 24/7 for urgent inquiries.
              </p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground glow-primary hover:glow-intense transition-all duration-300"
                >
                  Start Live Chat
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                >
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="glass-intense p-8 rounded-3xl border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Global Presence</h3>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 glow-primary" />
                <p className="text-muted-foreground">Interactive world map showing our office locations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;