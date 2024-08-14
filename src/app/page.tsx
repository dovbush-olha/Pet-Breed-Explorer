import React from 'react';

import { Hero } from '@/components/special/Hero';
import { BreedList } from '@/components/special/BreedList/BreedList';
import { BreedListLoading } from '@/components/special/BreedList/BreedListLoading';

export default function Home() {
  return (
    <main className="flex-1 bg-accent">
      <Hero />
      <React.Suspense fallback={<BreedListLoading />}>
        <BreedList />
      </React.Suspense>
    </main>
  );
}
