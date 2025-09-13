// 1. Importar todos os componentes de seção
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // 2. Renderizar os componentes na ordem desejada
  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <main className='overflow-x-hidden'>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;