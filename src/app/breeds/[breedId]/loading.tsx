import React from 'react';
import { range } from 'lodash';

import { Skeleton } from '@/components/ui/skeleton';

export default function BreedLoading() {
  return (
    <>
      <h1 className="font-loading text-4xl font-bold tracking-tight">Lorem</h1>
      <div className="grid grid-cols-2 gap-4 text-muted-foreground">
        {range(5).map((num) => {
          return (
            <div key={num}>
              <h3 className="font-loading font-semibold">Ipsum</h3>
              <p className="font-loading">Lorem Ipsum</p>
            </div>
          );
        })}
      </div>
      <Skeleton className="!mt-10 h-[550px] w-[660px]" />
    </>
  );
}
