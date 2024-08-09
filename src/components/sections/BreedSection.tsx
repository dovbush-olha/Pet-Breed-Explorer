import Image from 'next/image';

import { getBreeds } from '@/api/breeds';

export async function BreedSection() {
  const breeds = await getBreeds();

  return (
    <div>
      <h1>Breeds</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            {breed.name}
            <Image
              src={breed.image}
              alt={breed.name}
              width={200}
              height={200}
              className="h-[200px] w-auto object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
