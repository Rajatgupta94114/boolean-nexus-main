import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const newsItems = [
    {
      id: 1,
      title: 'Boolean Microchips Unveils Revolutionary AI Processor Architecture',
      excerpt: 'Our latest neuromorphic processor achieves 40 TOPS/W efficiency, setting new industry standards for edge AI applications.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      category: 'Product Launch',
      readTime: '5 min read',
      featured: true,
      image: 'https://deepgram.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F96965%2F1715184565-image2.jpg&w=3840&q=90'
    },
    {
      id: 2,
      title: 'Partnership with Global Tech Giants for 5G Infrastructure',
      excerpt: 'Strategic collaborations with leading telecommunications companies to deploy our 5G-optimized chips worldwide.',
      date: '2024-01-10',
      author: 'Mark Rodriguez',
      category: 'Partnerships',
      readTime: '3 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Breakthrough in Quantum-Resistant Encryption Chips',
      excerpt: 'New security processor provides unparalleled protection against quantum computing threats.',
      date: '2024-01-08',
      author: 'Dr. Michael Zhang',
      category: 'Innovation',
      readTime: '4 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Boolean Microchips Wins "Innovation of the Year" Award',
      excerpt: 'Industry recognition for our contributions to sustainable semiconductor manufacturing.',
      date: '2024-01-05',
      author: 'Jennifer Kim',
      category: 'Awards',
      readTime: '2 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Expanding Global Manufacturing with New Facility in Germany',
      excerpt: 'Investment in European operations to meet growing demand for advanced semiconductor solutions.',
      date: '2024-01-03',
      author: 'Robert Wilson',
      category: 'Expansion',
      readTime: '6 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Research Paper Published on Neural Network Hardware Acceleration',
      excerpt: 'Our research team publishes groundbreaking work on optimizing deep learning for custom silicon.',
      date: '2024-01-01',
      author: 'Dr. Lisa Wang',
      category: 'Research',
      readTime: '8 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-24 relative overflow-hidden">
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
            <span className="text-foreground">Latest</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, breakthroughs, and announcements 
            from Boolean Microchips and the semiconductor industry.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="glass-intense rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/30 hover:glow-primary transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {featuredNews.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredNews.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        {featuredNews.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {new Date(featuredNews.date).toLocaleDateString()}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{featuredNews.readTime}</span>
                  </div>
                  
                  <Button 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground w-fit glow-primary hover:glow-intense transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:glow-primary transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {article.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-primary" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:bg-primary/10 p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-intense p-12 rounded-3xl text-center border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Stay Informed
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest updates on semiconductor innovations, 
              industry insights, and Boolean Microchips news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-background/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-foreground"
              />
              <Button 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 glow-primary hover:glow-intense transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;