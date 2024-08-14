import { range } from 'lodash';

import { SkeletonCard } from '@/components/special/SkeletonCard';

export function BreedListLoading() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 pb-10">
        {range(10).map((num) => (
          <SkeletonCard key={num} />
        ))}
      </div>
    </div>
  );
}
