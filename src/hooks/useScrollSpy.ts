import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible
      let currentSection = '';
      
      for (const section of sections) {
        if (section && section.top <= offset && section.bottom > offset) {
          currentSection = section.id;
          break;
        }
      }

      // If no section is in the offset zone, find the closest one
      if (!currentSection && sections.length > 0) {
        const closestSection = sections.reduce((closest, section) => {
          if (!section) return closest;
          if (!closest) return section;
          
          const sectionDistance = Math.abs(section.top - offset);
          const closestDistance = Math.abs(closest.top - offset);
          
          return sectionDistance < closestDistance ? section : closest;
        });
        
        if (closestSection) {
          currentSection = closestSection.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};