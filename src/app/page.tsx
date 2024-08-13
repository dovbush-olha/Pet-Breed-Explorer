import { HeroSection } from '@/components/sections/HeroSection';
import { BreedSection } from '@/components/sections/BreedSection';

export default function Home() {
  return (
    <main className="flex-1 bg-accent">
      <HeroSection />
      <BreedSection />
    </main>
  );
}
