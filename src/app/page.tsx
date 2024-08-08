import Link from 'next/link';

import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="flex-1 bg-accent">
      <HeroSection />
    </main>
  );
}
