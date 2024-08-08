import Link from 'next/link';

import { DogIcon } from '@/components/ui/icons/dog-icon';

export function Logo() {
  return (
    <Link
      href="#"
      className="mr-6 flex items-center gap-2"
      prefetch={false}
    >
      <DogIcon className="h-6 w-6 text-primary" />
      <span className="text-lg font-bold">Pet Breed Explorer</span>
    </Link>
  );
}
