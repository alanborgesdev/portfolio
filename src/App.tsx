// 1. Importar todos os componentes de seção
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // 2. Renderizar os componentes na ordem desejada
  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <main className='overflow-x-hidden'>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;