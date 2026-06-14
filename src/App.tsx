import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <HeroSection onDownloadResumeClick={() => setIsResumeOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
};

export default App;
