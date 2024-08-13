import Image from 'next/image';
import Link from 'next/link';

import { getBreeds } from '@/api/breeds';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { API_KEY_TYPES, API_KEYS } from '@/api/constants';

export async function BreedSection() {
  const breeds = await getBreeds();

  const getApi = (breedId: string | number): API_KEY_TYPES =>
    typeof breedId === 'number' ? API_KEYS.DOGS : API_KEYS.CATS;

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        {breeds.map((breed) => (
          <Link
            key={breed.id}
            href={{
              pathname: `/breeds/${breed.id}`,
              query: { api: getApi(breed.id) },
            }}
          >
            <Card className="cursor-pointer">
              <CardContent className="pb-0 pt-6">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  width={200}
                  height={256}
                  className="h-64 w-full rounded-md object-cover object-top"
                />
              </CardContent>
              <CardHeader>
                <CardDescription className="text-center font-bold">{breed.name}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
