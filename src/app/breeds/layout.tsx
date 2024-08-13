import { ReactNode } from 'react';

export default function BreedPage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <section className="w-full bg-muted py-10 md:py-14 lg:py-16">
        <div className="container grid items-center gap-8 px-8 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">{children}</div>
        </div>
      </section>
    </div>
  );
}
