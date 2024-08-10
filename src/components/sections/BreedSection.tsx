import Image from 'next/image';

import { getBreeds } from '@/api/breeds';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

export async function BreedSection() {
  const breeds = await getBreeds();

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        {breeds.map((breed) => (
          <Card
            key={breed.id}
            className="cursor-pointer"
          >
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
        ))}
      </div>
    </div>
  );
}
