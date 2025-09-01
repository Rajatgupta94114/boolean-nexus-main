import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Technology from '@/components/sections/Technology';
import CaseStudies from '@/components/sections/CaseStudies';
import News from '@/components/sections/News';
import Careers from '@/components/sections/Careers';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import FloatingWidgets from '@/components/widgets/FloatingWidgets';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Technology />
      <CaseStudies />
      <News />
      <Careers />
      <Contact />
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Index;
