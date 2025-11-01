import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { BeamsBackground } from '@/components/ui/beams-background'; // Temporarily disabled for performance testing
import { Skeleton } from '@/components/ui/skeleton';

const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

const SectionSkeleton = () => <Skeleton className="h-[50vh] w-full mb-8" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50"> {/* Replaced BeamsBackground with a simple div for performance testing */}
      <Header />
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
